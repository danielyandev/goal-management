import Process from "../components/Process"

function HowItWorksSection() {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="text-center">
          <h3 className="text-dark mb-5">How it Works</h3>
        </div>
        <div className="row w-100">
          <Process
            step="1"
            imageUrl="/assets/images/illustrations/process-1.png"
            title="Sign Up"
            description="Create account in seconds"
          />
          <Process
            step="2"
            imageUrl="/assets/images/illustrations/process-2.png"
            title="Create Goals"
            description="Create goals and get approved"
          />
          <Process
            step="3"
            imageUrl="/assets/images/illustrations/process-3.png"
            title="Achieve More"
            description="Move towards your goals"
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection
