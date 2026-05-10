import { useState } from "react"

function JobForm({ onAdd }) {
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [status, setStatus] = useState("Applied")
  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}

    if (!company.trim()) newErrors.company = "Company name is required"
    if (!role.trim()) newErrors.role = "Role is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onAdd({ company: company.trim(), role: role.trim(), status, id: Date.now() })
    setCompany("")
    setRole("")
    setStatus("Applied")
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <input
          placeholder="Company"
          value={company}
          onChange={(e) => { setCompany(e.target.value); setErrors({...errors, company: ""}) }}
          className={errors.company ? "input-error" : ""}
        />
        {errors.company && <span className="error-msg">{errors.company}</span>}
      </div>

      <div className="field">
        <input
          placeholder="Role"
          value={role}
          onChange={(e) => { setRole(e.target.value); setErrors({...errors, role: ""}) }}
          className={errors.role ? "input-error" : ""}
        />
        {errors.role && <span className="error-msg">{errors.role}</span>}
      </div>

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