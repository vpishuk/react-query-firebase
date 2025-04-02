import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { updateDoc, getDoc, DocumentReference, UpdateData } from "firebase/firestore";

import { FirebaseError } from "firebase/app";
import { useMemo } from "react";
import { AppModel } from "../../types";

/**
 * @inline
 */
export type UseUpdateDocMutationValues<AppModelType extends AppModel = AppModel> = {
    /**
     * Data to write
     */
    data: UpdateData<AppModelType>;
};

/**
 * @inline
 */
export type UseUpdateDocMutationOptions<AppModelType extends AppModel = AppModel, TContext = unknown> = {
    /**
     * Reference to a document that must be updated
     */
    reference: DocumentReference<AppModelType, AppModelType> | null;
    /**
     * Options for useMutation hook excluding mutationFn.
     */
    options?: Omit<
        UseMutationOptions<AppModelType, FirebaseError, UseUpdateDocMutationValues<AppModelType>, TContext>,
        "mutationFn"
    >;
};

/**
 * Executes a mutation and returns updated document
 *
 * @group Hook
 *
 * @param {UseUpdateDocMutationOptions<AppModelType>} options - Configuration options for mutation.
 *
 * @returns {UseMutationResult<AppModelType, Error, UseAddDocMutationValues<AppModelType>, TContext>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {mutate} = useUpdateDocMutation({
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
export const useUpdateDocMutation = <AppModelType extends AppModel = AppModel, TContext = unknown>({
    reference,
    options = {}
}: UseUpdateDocMutationOptions<AppModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference?.path], [reference?.path]);

    return useMutation({
        ...options,
        mutationFn: async ({ data }) => {
            if (!reference) {
                throw new Error("Reference is undefined");
            }

            await updateDoc<AppModelType, AppModelType>(reference, data);
            const docSnap = await getDoc(reference);
            return { ...(docSnap.data() as AppModelType), uid: docSnap.id };
        },
        mutationKey
    });
};
