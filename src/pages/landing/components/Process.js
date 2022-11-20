import PropTypes from "prop-types"

function Process({ step, imageUrl, title, description }) {
  return (
    <div className="col-md-4 px-5 mt-5 mt-md-0">
      <div className="text-center mb-10 mb-md-0">
        <img
          src={imageUrl}
          className="max-height-125 mb-9"
          alt=""
          data-testid="process-image-url"
        />
        <div className="d-flex justify-content-center mb-3">
          <span
            className="badge badge-circle badge-light-success fw-bolder me-3 fs-5"
            data-testid="process-step"
          >
            {step}
          </span>
          <div
            className="fs-5 fs-lg-3 fw-bolder text-dark"
            data-testid="process-title"
          >
            {title}
          </div>
        </div>
        <div
          className="fw-bold fs-6 fs-lg-4 text-muted"
          data-testid="process-description"
        >
          {description}
        </div>
      </div>
    </div>
  )
}

Process.propTypes = {
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Process
