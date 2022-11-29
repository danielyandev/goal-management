function Pages() {
  return (
    <ul className="pagination">
      <li className="page-item">
        <a
          className="page-link"
          href="src/components/pagination/Pagination#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="src/components/pagination/Pagination#">
          1
        </a>
      </li>
      <li className="page-item active">
        <a className="page-link" href="src/components/pagination/Pagination#">
          2
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="src/components/pagination/Pagination#">
          3
        </a>
      </li>
      <li className="page-item">
        <a
          className="page-link"
          href="src/components/pagination/Pagination#"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  )
}

export default Pages
