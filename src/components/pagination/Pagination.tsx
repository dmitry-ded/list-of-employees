import React from 'react'
import ReactPaginate from 'react-paginate';
import "./pagination.css"

type PaginationProps = {
  currentPage: number,
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ( { currentPage, onChangePage } ) => {
  
  return (
    <div>
        <ReactPaginate
          className="pagination-block"
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={(event) => onChangePage(event.selected + 1)}
          pageRangeDisplayed={4}
          pageCount={4}
          forcePage={currentPage - 1}
          renderOnZeroPageCount={null}
        />
    </div>
  )
}

export default Pagination
