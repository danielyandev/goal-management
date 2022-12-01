import PropTypes from "prop-types"

function Loading({ children, loading }) {
  return !loading ? (
    children
  ) : (
    <div className="row d-flex justify-content-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

Loading.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool
}
export default Loading
