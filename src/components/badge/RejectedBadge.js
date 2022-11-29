import Badge from "./Badge"

function RejectedBadge({ text = "Rejected" }) {
  return <Badge variant="danger" text={text} />
}

RejectedBadge.propTypes = {
  ...Badge.propTypes.text
}

export default RejectedBadge
