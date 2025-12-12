/**
 * Generic definition for a data model
 */
export type AppModel = {
    /**
     * Unique identifier equl to documentId() from Firestore
     */
    uid?: string;
    [key: string]: unknown;
};
