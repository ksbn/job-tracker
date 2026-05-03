import { useState } from "react"

function JobForm({ onAdd }) {
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [status, setStatus] = useState("Applied")

  function handleSubmit(e) {
    e.preventDefault()
    if (!company || !role) return
    onAdd({ company, role, status, id: Date.now() })
    setCompany("")
    setRole("")
    setStatus("Applied")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <button type="submit">Add Job</button>
    </form>
  )
}

export default JobForm