import SignOutButton from "../components/SignOutButton"

function Header() {
  return (
    <header className="d-flex text-bg-dark align-items-center justify-content-end">
      <SignOutButton variant="outline-danger" />
    </header>
  )
}

export default Header
