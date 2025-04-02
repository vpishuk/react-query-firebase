import { useFirestore } from "./useFirestore";
import { getDocData, GetDocDataOptions } from "./utils/getDocData";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AppModel } from "../../types";

/**
 * @inline
 */
type UseGetDocOptions<AppModelType extends AppModel = AppModel> = {
    /**
     * Reqct-query options that must include queryKey and shall not define queryFn
     */
    options: Omit<UseQueryOptions<AppModelType | null, Error, AppModelType>, "queryFn"> &
        Required<Pick<UseQueryOptions<AppModelType, Error, AppModelType>, "queryKey">>;
} & Omit<GetDocDataOptions<AppModelType>, "db">;

/**
 * Executes a query on a Firestore data source and returns the resulting document.
 *
 * @group Hook
 *
 * @param {UseGetDocOptions<AppModelType>} options - Configuration options for the query.
 *
 * @returns {UseQueryResult<AppModelType, Error>} An object containing document's data
 *
 * @example
 * ```jsx
 * export const MyComponent = () => {
 *  const doc = useGetDocData({
 *      options: {
 *          queryKey: ['key']
 *      },
 *      reference: collection(),
 *      path: 'id'
 *  });
 *  console.log(doc);
 * };
 * ```
 */
export const useGetDocData = <AppModelType extends AppModel = AppModel>({
    options,
    reference,
    path,
    pathSegments
}: UseGetDocOptions<AppModelType>) => {
    const db = useFirestore();

    return useQuery({
        ...options,
        queryFn: () => getDocData<AppModelType>({ db, reference, path, pathSegments })
    });
};
