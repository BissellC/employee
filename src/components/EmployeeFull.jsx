import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EmployeeFull = props => {
  const [employee, setEmployee] = useState([])

  const employeeData = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/soulsuckers/employees/${props.id}`
    )
    setEmployee(resp.data)
  }

  const deleteEmployee = async () => {
    const deleteResp = await axios.delete(
      `https://sdg-staff-directory-app.herokuapp.com/api/soulsuckers/employees/${props.id}`
    )
    console.log(deleteResp)
  }

  useEffect(() => {
    employeeData()
  }, [])
  return (
    <>
      <main className="employee-full-page">
        <img className="employee-image" src={employee.profileImage} />
        <p>
          Name:&nbsp;
          {employee.firstName} {employee.lastName}
        </p>
        <p>Birthday: {employee.birthday}</p>
        <p>Hired Date: {employee.hiredDate}</p>
        <p>Job Title: {employee.jobTitle}</p>
        <p>Job Description: {employee.jobDescription}</p>
        <p>
          Address:&nbsp;
          {employee.address}, {employee.city} {employee.zip}
        </p>
        <p>Phone: {employee.phoneNumber}</p>
        <p>Email: {employee.email}</p>
        <p>
          Emergency Contact Name:&nbsp;
          {employee.emergencyContactPerson}
        </p>
        <p>Emergency Contact Phone: {employee.emergencyContactPhone}</p>
        <p>
          Emergency Contact Address:&nbsp;
          {employee.emergencyContactAddress}
        </p>
        <p>PTO: {employee.ptoHours} Hours</p>
        <button className="delete" onClick={deleteEmployee}>
          Remove Employee
        </button>
        <Link className="update" to={'/update-employee/' + employee.id}>
          Update Employee
        </Link>
      </main>
    </>
  )
}

export default EmployeeFull
