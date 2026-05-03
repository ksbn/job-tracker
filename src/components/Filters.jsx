function Filters({ current, onChange }) {
  const statuses = ["All", "Applied", "Interview", "Offer", "Rejected"]

  return (
    <div>
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onChange(status)}
          style={{ fontWeight: current === status ? "bold" : "normal" }}
        >
          {status}
        </button>
      ))}
    </div>
  )
}

export default Filters