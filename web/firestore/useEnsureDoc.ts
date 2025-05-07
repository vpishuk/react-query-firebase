import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { FirestoreError, getDoc, setDoc } from "firebase/firestore";

import { AppModel } from "../../types";
import { GetDocDataOptions } from "./utils/getDocData";
import { getDocRef } from "./utils/getDocRef";
import { getDocSnap } from "./utils/getDocSnap";
import { useFirestore } from "./useFirestore";

/**
 * @inline
 */
export type UseEnsureDocOptions<AppModelType extends AppModel = AppModel> = {
    /**
     * Reference to a document that must be written
     */
    defaults: AppModelType;

    /**
     * Options for useMutation hook excluding mutationFn.
     */
    options: Omit<UseQueryOptions<AppModelType, Error, AppModelType>, "queryFn"> &
        Required<Pick<UseQueryOptions<AppModelType, Error, AppModelType>, "queryKey">>;
} & Omit<GetDocDataOptions<AppModelType>, "db">;

/**
 * This hook checks if a doc with a requested reference exists.
 * It creates a document with requested data if it does not exist.
 *
 * @group Hook
 *
 * @param {UseEnsureDocOptions<AppModelType>} options - Configuration options for mutation.
 *
 * @returns {UseQueryResult<AppModelType, Error>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {data} = useEnsureDocQuery({
 *      options: {
 *      },
 *      reference: collection().doc(),
 *      defaults: {prop1: 'value1'}
 *  });
 *
 * };
 * ```
 */
export const useEnsureDoc = <AppModelType extends AppModel = AppModel>({
    reference,
    path,
    pathSegments,
    defaults,
    options
}: UseEnsureDocOptions<AppModelType>) => {
    const db = useFirestore();

    return useQuery({
        ...options,
        queryFn: async () => {
            const createDoc = async () => {
                const docRef = getDocRef({ db, reference, path, pathSegments });
                if (!docRef) {
                    throw new Error(
                        `Cannot fetch document reference using data: ${reference?.path}, ${path}, ${pathSegments?.join("/")}`
                    );
                }

                await setDoc<AppModelType, AppModelType>(docRef, defaults);
                const docSnap = await getDoc(docRef);
                return { ...(docSnap.data() as AppModelType), uid: docSnap.id };
            };

            try {
                const existingDocSnap = await getDocSnap({ db, path, pathSegments, reference });

                if (existingDocSnap?.exists()) {
                    return { ...(existingDocSnap.data() as AppModelType), uid: existingDocSnap.id };
                }

                return createDoc();
            } catch (e) {
                // permission denied error may arise because of a security rule
                if ((e as FirestoreError).code === "permission-denied") {
                    return createDoc();
                }

                throw e;
            }
        }
    });
};
