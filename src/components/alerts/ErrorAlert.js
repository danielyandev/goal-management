import PropTypes from "prop-types"

function ErrorAlert({ errors }) {
  const renderErrors = () => {
    return errors.map((error) => <li key={error}>{error}</li>)
  }
  return (
    errors.length > 0 && (
      <div className="alert alert-danger">
        <ul className="list-unstyled">{renderErrors()}</ul>
      </div>
    )
  )
}

ErrorAlert.propTypes = {
  errors: PropTypes.array
}
export default ErrorAlert
