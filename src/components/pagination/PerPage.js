import PropTypes from "prop-types"

function PerPage({ size, onSizeChange }) {
  const sizes = [10, 25, 50]

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
      className="form-select form-select-sm"
      onChange={(e) => onSizeChange(e.target.value)}
      defaultValue={size}
    >
      {renderOptions()}
    </select>
  )
}

PerPage.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSizeChange: PropTypes.func
}

export default PerPage
