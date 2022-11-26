import PropTypes from "prop-types"

function EmptyRow({ colSpan }) {
  return (
    <tr>
      <td className="text-center" colSpan={colSpan}>
        Nothing found
      </td>
    </tr>
  )
}

EmptyRow.propTypes = {
  colSpan: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default EmptyRow
