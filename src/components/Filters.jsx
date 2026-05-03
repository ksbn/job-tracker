function Filters({ current, onChange }) {
  const statuses = ["All", "Applied", "Interview", "Offer", "Rejected"]

  return (
    <div className="filters">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onChange(status)}
          className={current === status ? "active" : ""}
        >
          {status}
        </button>
      ))}
    </div>
  )
}

export default Filters