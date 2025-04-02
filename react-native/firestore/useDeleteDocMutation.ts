import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { FirebaseFirestoreTypes, deleteDoc, WithFieldValue } from "@react-native-firebase/firestore";

import { useMemo } from "react";
import { AppModel } from "../../types";

/**
 * @inline
 */
export type UseDeleteDocMutationValues<AppModelType extends AppModel = AppModel> = {
    data: WithFieldValue<AppModelType>;
};

/**
 * @inline
 */
export type UseDeleteDocMutationOptions<AppModelType extends AppModel = AppModel, TContext = unknown> = {
    /**
     * A reference to a firestore document
     */
    reference: FirebaseFirestoreTypes.DocumentReference<AppModelType> | null;
    /**
     * Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
     */
    options?: Omit<UseMutationOptions<void, Error, void, TContext>, "mutationFn">;
};

/**
 * Executes a query with specified constraints and returns the count of matched documents.
 *
 * @group Hook
 *
 * @param {UseDeleteDocMutationOptions<AppModelType>} options - Configuration options for the query.
 *
 * @returns {UseMutationResult<void, Error, UseDeleteDocMutationValues<AppModelType>, TContext>}  A mutation result
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const {mutate} = useDeleteDocMutation({
 *      options: {
 *      },
 *      reference: document(),
 *  });
 *
 *  // ....
 *  mutate();
 *  // ....
 * };
 * ```
 */
export const useDeleteDocMutation = <
    AppModelType extends FirebaseFirestoreTypes.DocumentData = FirebaseFirestoreTypes.DocumentData,
    TContext = unknown
>({
    reference,
    options = {}
}: UseDeleteDocMutationOptions<AppModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference?.path], [reference?.path]);

    return useMutation({
        ...options,
        mutationFn: async () => {
            if (!reference) {
                throw new Error("Reference is undefined");
            }
            await deleteDoc(reference);
        },
        mutationKey
    });
};
