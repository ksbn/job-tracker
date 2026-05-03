function JobCard({ job, onDelete }) {
  return (
    <div>
      <h3>{job.company}</h3>
      <p>{job.role}</p>
      <p>{job.status}</p>
      <button onClick={() => onDelete(job.id)}>Delete</button>
    </div>
  )
}

export default JobCard