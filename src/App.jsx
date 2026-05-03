import { useState, useEffect } from "react"
import JobForm from "./components/JobForm"
import JobList from "./components/JobList"
import Filters from "./components/Filters"

function App() {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs")
    return saved ? JSON.parse(saved) : []
  })
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs))
  }, [jobs])


 function handleAdd(job) {
    setJobs([...jobs, job])
  }

  function handleDelete(id) {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  const filteredJobs = filter === "All"
    ? jobs
    : jobs.filter((job) => job.status === filter)


  return (
    <div>
      <h1>Job Tracker</h1>
    <main>
      <JobForm onAdd={handleAdd} />
      <Filters current={filter} onChange={setFilter} />
      <JobList jobs={filteredJobs} onDelete={handleDelete} />
    </main>    
    </div>
  )
}

export default App