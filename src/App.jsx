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
    <div className="app">
    <h1>Job Tracker</h1>
    <p className="subtitle">Track your job applications in one place</p>
    
    <div className="stats">
      <div className="stat-card">
        <div className="number">{jobs.length}</div>
        <div className="label">Total</div>
      </div>
      <div className="stat-card">
        <div className="number">{jobs.filter(j => j.status === "Interview").length}</div>
        <div className="label">Interviews</div>
      </div>
      <div className="stat-card">
        <div className="number">{jobs.filter(j => j.status === "Offer").length}</div>
        <div className="label">Offers</div>
      </div>
    </div>

    <JobForm onAdd={handleAdd} />
    <Filters current={filter} onChange={setFilter} />
    <JobList jobs={filteredJobs} onDelete={handleDelete} />
  </div>
  )
}
    
export default App