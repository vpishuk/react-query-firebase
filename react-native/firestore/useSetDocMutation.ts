import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { FirebaseFirestoreTypes, getDoc, setDoc, WithFieldValue } from "@react-native-firebase/firestore";

import { useMemo } from "react";
import { AppModel } from "../../types";

/**
 * @inline
 */
export type UseSetDocMutationValues<AppModelType extends AppModel = AppModel> = {
    /**
     * Data to write
     */
    data: WithFieldValue<AppModelType>;
};

/**
 * @inline
 */
export type UseSetDocMutationOptions<AppModelType extends AppModel = AppModel, TContext = unknown> = {
    /**
     * Reference to a document that must be written
     */
    reference: FirebaseFirestoreTypes.DocumentReference<AppModelType> | null;
    /**
     * Options for useMutation hook excluding mutationFn.
     */
    options?: Omit<
        UseMutationOptions<AppModelType, Error, UseSetDocMutationValues<AppModelType>, TContext>,
        "mutationFn"
    >;
};

/**
 * Executes a mutation and returns added document
 *
 * @group Hook
 *
 * @param {UseSetDocMutationOptions<AppModelType>} options - Configuration options for mutation.
 *
 * @returns {UseMutationResult<AppModelType, Error, UseAddDocMutationValues<AppModelType>, TContext>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {mutate} = useSetDocMutation({
 *      options: {
 *      },
 *      reference: collection().doc(),
 *  });
 *
 *  // ....
 *  mutate({data: {test: 'value'}});
 *  // ....
 * };
 * ```
 */
export const useSetDocMutation = <AppModelType extends AppModel = AppModel, TContext = unknown>({
    reference,
    options
}: UseSetDocMutationOptions<AppModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference?.path], [reference?.path]);

    return useMutation({
        ...options,
        mutationKey,
        mutationFn: async ({ data }) => {
            if (!reference) {
                throw new Error("Reference is undefined");
            }
            await setDoc<AppModelType>(reference, data);
            const docSnap = await getDoc(reference);
            return { ...(docSnap.data() as AppModelType), uid: docSnap.id };
        }
    });
};
