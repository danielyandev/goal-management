import PropTypes from "prop-types"
import Sidebar from "./partials/Sidebar"
import Header from "./partials/Header"

function Layout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="d-flex flex-column w-100">
        <Header />

        <main className="h-100 bg-light px-4 pt-4">
          <div className="container bg-white p-4">{children}</div>
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
