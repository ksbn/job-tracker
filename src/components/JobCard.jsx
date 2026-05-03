function JobCard({ job, onDelete }) {
  const statusClass = `status status-${job.status.toLowerCase()}`

  return (
    <div className="job-card">
      <div>
        <h3>{job.company}</h3>
        <p>{job.role}</p>
      </div>
      <span className={statusClass}>{job.status}</span>
      <button className="delete-btn" onClick={() => onDelete(job.id)}>✕</button>
    </div>
  )
}

export default JobCard