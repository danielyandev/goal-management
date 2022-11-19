import PropTypes from "prop-types"

function Button({ variant, children, ...rest }) {
  return (
    <button {...rest} className={`btn btn-${variant}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "success", "info", "warning", "danger"]),
  children: PropTypes.any
}

export default Button
