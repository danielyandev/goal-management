function PerPage() {
  return (
    <select className="form-select form-select-sm">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  )
}

export default PerPage