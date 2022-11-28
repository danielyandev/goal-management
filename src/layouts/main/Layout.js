import PropTypes from "prop-types"
import Sidebar from "./partials/Sidebar"
import Header from "./partials/Header"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function Layout({ children }) {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setVisible(false)
  }, [location])

  const toggleSidebar = () => {
    setVisible((visible) => !visible)
  }

  return (
    <div className="d-flex overflow-hidden">
      <Sidebar visible={visible} />

      <div className="d-flex flex-column w-100">
        <Header toggleSidebar={toggleSidebar} />

        <main className="h-100 bg-light px-4 pt-4">
          <div className="container bg-white p-4">{children}</div>
        </main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  history: PropTypes.any
}

export default Layout
