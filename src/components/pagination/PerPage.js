import PropTypes from "prop-types"

const sizes = [10, 25, 50]

function PerPage({ size = 10, onSizeChange }) {
  const renderOptions = () => {
    return sizes.map((s) => {
      return (
        <option key={s} value={s}>
          {s}
        </option>
      )
    })
  }

  return (
    <select
      data-testid="perpage-select"
      className="form-select form-select-sm"
      onChange={(e) => onSizeChange(e.target.value)}
      defaultValue={size}
    >
      {renderOptions()}
    </select>
  )
}

PerPage.propTypes = {
  size: PropTypes.oneOf(sizes),
  onSizeChange: PropTypes.func
}

export default PerPage
