import React from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';


const PaginationComponent = ({getPage,page}) => {
    const handlePageClick=(data)=>{
getPage(data.selected+1)
    }
    const pageCount=500
  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالي"
    onPageChange={handlePageClick}
    pageRangeDisplayed={2}
    marginPagesDisplayed	={2}
    pageCount={pageCount}
    previousLabel="السابق"
    containerClassName={'pagination justify-content-center p-3'}
    breakLinkClassName	={'page-link'}
    pageClassName	={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName	={'page-item'}
    nextClassName={'page-item'}
    previousLinkClassName	={'page-link'}
    nextLinkClassName	={'page-link'}
    disabledClassName={'page-item'}
    disabledLinkClassName={'page-link'}
    activeClassName	={'active'}
    />
  )
}

export default PaginationComponent
