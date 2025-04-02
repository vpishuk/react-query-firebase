import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { deleteDoc, WithFieldValue, DocumentReference } from "firebase/firestore";

import { FirebaseError } from "firebase/app";
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
    reference: DocumentReference<AppModelType, AppModelType> | null;
    /**
     * Options for useMutation hook excluding mutationFn. MutationKey will be equal to reference.path by default.
     */
    options?: Omit<UseMutationOptions<void, FirebaseError, void, TContext>, "mutationFn">;
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
export const useDeleteDocMutation = <AppModelType extends AppModel = AppModel, TContext = unknown>({
    reference,
    options = {}
}: UseDeleteDocMutationOptions<AppModelType, TContext>) => {
    const mutationKey = useMemo(() => [reference?.path], [reference?.path]);

    return useMutation({
        mutationKey,
        ...options,
        mutationFn: async () => {
            if (!reference) {
                throw new Error("Reference is undefined");
            }
            await deleteDoc<AppModelType, AppModelType>(reference);
        }
    });
};
