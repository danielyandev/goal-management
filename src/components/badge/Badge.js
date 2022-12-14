import PropTypes from "prop-types"

function Badge({ variant, text }) {
  return (
    <span className={`badge badge-light-${variant}`} data-testid="badge">
      {text}
    </span>
  )
}

Badge.propTypes = {
  variant: PropTypes.oneOf(["success", "danger", "info"]).isRequired,
  text: PropTypes.string.isRequired
}

export default Badge
