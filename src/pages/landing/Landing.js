import BannerSection from "./partials/BannerSection"
import HowItWorksSection from "./partials/HowItWorksSection"
import "./Landing.css"

function Landing() {
  return (
    <div className="d-flex flex-column" data-testid="landing-page">
      <BannerSection />
      <HowItWorksSection />
    </div>
  )
}

export default Landing
