import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { FirebaseFirestoreTypes, addDoc, WithFieldValue, getDoc } from "@react-native-firebase/firestore";

import { ReactNativeFirebase } from "@react-native-firebase/app";
import { useMemo } from "react";
import { AppModel } from "../../types";

/**
 * @inline
 */
export type UseAddDocMutationValues<AppModelType> = {
    /**
     * Data to write
     */
    data: WithFieldValue<AppModelType>;
};

/**
 * @inline
 */
export type UseAddDocMutationOptions<AppModelType extends AppModel = AppModel, TContext = unknown> = {
    /**
     * Reference to a collection where document must be added
     */
    collectionReference: FirebaseFirestoreTypes.CollectionReference<AppModelType>;

    /**
     * Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
     */
    options?: Omit<
        UseMutationOptions<
            AppModelType,
            ReactNativeFirebase.NativeFirebaseError,
            UseAddDocMutationValues<AppModelType>,
            TContext
        >,
        "mutationFn"
    >;
};

/**
 * Executes a mutation and returns added document
 *
 * @group Hook
 *
 * @param {UseAddDocMutationOptions<AppModelType>} options - Configuration options for the mutation.
 *
 * @returns {UseMutationResult<AppModelType, Error, UseAddDocMutationValues<AppModelType>, TContext>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {mutate} = useAddDocMutation({
 *      options: {
 *      },
 *      reference: collection(),
 *  });
 *
 *  // ....
 *  mutate({data: {test: 'value'}});
 *  // ....
 * };
 * ```
 */
export const useAddDocMutation = <AppModelType extends AppModel = AppModel, TContext = unknown>({
    collectionReference,
    options = {}
}: UseAddDocMutationOptions<AppModelType, TContext>) => {
    const mutationKey = useMemo(() => [collectionReference.path], [collectionReference.path]);

    return useMutation({
        mutationKey,
        ...options,
        mutationFn: async ({ data }) => {
            const docRef = await addDoc<AppModelType, AppModelType>(collectionReference, data);
            const docSnap = await getDoc(docRef);
            return { ...(docSnap.data() as AppModelType), uid: docRef.id } as AppModelType;
        }
    });
};
