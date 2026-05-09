function JobCard({ job, onDelete }) {

  return (
   <div className="job-card">
    <div className="job-info">
      <h3>{job.company}</h3>
      <p>{job.role}</p>
    </div>
    <div className="job-right">
      <span className={`status status-${job.status.toLowerCase()}`}>{job.status}</span>
      <button className="delete-btn" onClick={() => onDelete(job.id)}>✕</button>
    </div>
  </div>
  )
}

export default JobCard