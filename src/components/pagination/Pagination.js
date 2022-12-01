import PerPage from "./PerPage"
import ReactPaginate from "react-paginate"
import PropTypes from "prop-types"

function Pagination({
  totalElements,
  onPageChange,
  onPageSizeChange,
  pageSize
}) {
  const pageCount = () => {
    return Math.ceil(parseInt(totalElements) / pageSize)
  }

  return (
    <div className="row">
      <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
        <div>
          {pageCount() > 0 && (
            <PerPage size={pageSize} onSizeChange={onPageSizeChange} />
          )}
        </div>
      </div>
      <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
        <div className="pt-3">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={onPageChange}
            pageRangeDisplayed={3}
            pageCount={pageCount()}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeLinkClassName="active"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
          />
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  pageSize: PerPage.propTypes.size,
  totalElements: PropTypes.number
}

export default Pagination
