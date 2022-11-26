import PerPage from "./PerPage"
import Pages from "./Pages"

function Pagination() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
        <div>
          <PerPage />
        </div>
      </div>
      <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
        <div>
          <Pages />
        </div>
      </div>
    </div>
  )
}

export default Pagination
