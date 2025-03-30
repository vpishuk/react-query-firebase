import { AppModel } from "./AppModel";

/**
 * Order by constraint
 * @group Query Constraints
 */
export type OrderByConstraint<AppModelType extends AppModel = AppModel> = {
    /**
     * Type of a constraint
     */
    type: "orderBy";
    /**
     * Field path to use for ordering
     */
    fieldPath: keyof AppModelType;
    /**
     * Direction of ordering: asc or desc
     */
    directionStr: "asc" | "desc";
};

/**
 * Start from value constraint
 * @group Query Constraints
 */
export type StartConstraint = {
    type: "startAt" | "startAfter";
    arguments: unknown[];
};

/**
 * End by value constraint
 * @group Query Constraints
 */
export type EndConstraint = {
    type: "endAt" | "endBefore";
    value: number | string | boolean | null;
    key?: string;
};

/**
 * Limit constraint
 * @group Query Constraints
 */
export type LimitConstraint = {
    type: "limitToLast" | "limit";
    limit: number;
};

/**
 * Non filtering query constaints
 * @group Query Constraints
 */
export type NonFilterQueryConstraint<AppModelType extends AppModel = AppModel> =
    | OrderByConstraint<AppModelType>
    | StartConstraint
    | EndConstraint
    | LimitConstraint;
