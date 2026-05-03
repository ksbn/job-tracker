import { useState } from "react"
import JobForm from "./components/JobForm"
import JobList from "./components/JobList"

function App() {
  const [jobs, setJobs] = useState([])

 function handleAdd(job) {
    setJobs([...jobs, job])
  }

  function handleDelete(id) {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  return (
    <div>
      <h1>Job Tracker</h1>
      <JobForm onAdd={handleAdd} />
      <JobList jobs={jobs} onDelete={handleDelete} />
    </div>
  )
}

export default App