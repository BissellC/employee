import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EmployeePage = props => {
  const [employee, setEmployee] = useState([])

  const employeeData = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/honeydukes/employees/${id}`
    )
    setEmployee(resp.data)
  }

  useEffect(() => {
    employeeData()
  }, [])
  return (
    <>
      <main>
        <img src={employee.profileImage} />
        <p>
          {employee.firstName} {employee.lastName}
        </p>
        <p>{employee.birthday}</p>
        <p>{employee.hiredDate}</p>
        <p>{employee.jobTitle}</p>
        <p>{employee.jobDescription}</p>
        <p>
          {employee.address} {employee.city} {employee.zip}
        </p>
        <p>{employee.phoneNumber}</p>
        <p>{employee.address}</p>
        <p>
          {employee.emergencyContactPerson} {employee.emergencyContactPhone}{' '}
          {employee.emergencyContactAddress}
        </p>
        <p>{employee.ptoHours}</p>
      </main>
    </>
  )
}

export default EmployeePage
