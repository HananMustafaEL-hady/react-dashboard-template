import ReactPaginate from 'react-paginate';

interface Props {
    pageCount: number;
    onPageChange: (e: { selectedPage: number }) => void;
    currentPage: number;
    enableScrollingToTop?: boolean;
}

export const Pagination: React.FC<Props> = ({
    pageCount,
    onPageChange,
    currentPage,
    enableScrollingToTop = true,
}) => {
    const handleChange = (e: any) => {
        onPageChange({ selectedPage: e.selected + 1 });
        if (enableScrollingToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <div className={'pagination'}>
            <ReactPaginate
                nextLabel={<span>Next</span>}
                previousLabel={<span>Previous</span>}
                onPageChange={handleChange}
                pageRangeDisplayed={1}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item page__prevItem"
                previousLinkClassName="page-link page__prevLink"
                nextClassName="page-item page__nextItem"
                nextLinkClassName="page-link page__nextLink"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link page__breakLine"
                containerClassName="pagination__wrapper"
                activeClassName="page-link-active"
                forcePage={currentPage - 1}
            />
        </div>
    );
};
