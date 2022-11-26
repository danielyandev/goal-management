import Badge from "./Badge"

function ApprovedBadge({ text = "Approved" }) {
  return <Badge variant="success" text={text} />
}

ApprovedBadge.propTypes = {
  ...Badge.propTypes.text
}

export default ApprovedBadge
