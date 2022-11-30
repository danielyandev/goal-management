import PropTypes from "prop-types"

function Button({ variant, children, ...rest }) {
  return (
    <button {...rest} className={`m-1 btn btn-${variant}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    "outline-primary",
    "outline-success",
    "outline-info",
    "outline-warning",
    "outline-danger",
    "primary",
    "success",
    "info",
    "warning",
    "danger"
  ]),
  children: PropTypes.any
}

export default Button
