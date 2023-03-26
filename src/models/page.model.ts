export interface Page<T> {
    data: T[];
    limit: number;
    page: number;
    pageCount: number;
    totalCount: number;
}
