import JobCard from "./JobCard"

function JobList({ jobs, onDelete }) {
  if (jobs.length === 0) {
    return <p>No jobs yet. Add one above!</p>
  }

  return (
    <div>
      <h2>Jobs</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default JobList