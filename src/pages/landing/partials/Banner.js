import SignInButton from "../components/SignInButton"

function Banner() {
  return (
    <div className="d-flex flex-column justify-content-center w-100 min-height-500 px-9">
      <div className="text-center mb-5 mb-lg-10 py-10 py-lg-20">
        <h1
          className="text-white lh-base fw-bolder fs-2x fs-lg-3x mb-15"
          data-testid="banner-title"
        >
          Achieve Better Results
          <br />
          <span> With </span>
          <span className="landing-title-gradient">
            <span>The Best Goal Management System Ever</span>
          </span>
        </h1>
        <SignInButton variant="primary">Try it now</SignInButton>
      </div>
    </div>
  )
}

export default Banner
