import React from 'react'
import { TableHeader } from '../../common/table-header/table-header.component';
import { TableContent } from '../../common/table-content/table-content.component';
import { Pagination } from '../../common/pagination/pagination.component';
import { Page } from '../../../models';

interface Props {
    _renderTableData: (data: any) => JSX.Element;
    data?: Page<any>;
    hasPagination: boolean;
    _setPageChange: (e: { selectedPage: number }) => void;
    currentPage: number;


}
export const Table: React.FC<Props> = ({ _renderTableData, data, hasPagination, _setPageChange, currentPage }) => {
    console.log("================data============", data)

    const _renderTableInfo = () => {
        const startNum = currentPage === 1 ? 1 : (currentPage - 1) * data?.limit! + 1;
        const endNum = currentPage === data?.pageCount ? data?.totalCount : data?.limit! * currentPage;

        return <span>{startNum} to {endNum}</span>
    }

    return (
        <div className='border border-borderBottomColor'>
            <div className='table_wrapper'>
                <div className="table">
                    <TableHeader headerList={["id", "name", "phone", "website", "email"]} />
                    <TableContent _renderTableData={_renderTableData} data={data?.data!} />
                </div>
            </div>
            <div className="table__pagination">
                <div className='table__pagination__info'>
                    Showing {_renderTableInfo()} of <span>{data?.totalCount}</span> entries
                </div>
                {hasPagination && data && data?.data?.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        pageCount={data?.pageCount!}
                        onPageChange={_setPageChange}
                    />
                )}

            </div>
        </div>


    )
}
