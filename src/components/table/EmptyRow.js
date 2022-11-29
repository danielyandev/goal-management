import PropTypes from "prop-types"

function EmptyRow({ colSpan = 1 }) {
  return (
    <tr>
      <td className="text-center" colSpan={colSpan} data-testid="empty-row">
        Nothing found
      </td>
    </tr>
  )
}

EmptyRow.propTypes = {
  colSpan: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default EmptyRow
