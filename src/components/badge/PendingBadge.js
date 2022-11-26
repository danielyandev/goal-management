import Badge from "./Badge"

function PendingBadge({ text = "Pending" }) {
  return <Badge variant="info" text={text} />
}

PendingBadge.propTypes = {
  ...Badge.propTypes.text
}

export default PendingBadge
