import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/smelleez/employees'
    )
    console.log(resp.data)
    setEmployees(resp.data)
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <>
      <header>Smelleez Fragrances</header>
      <main>
        <h1>Employeez</h1>
        <section>
          <ul>
            {employees.map(employee => {
              return (
                <li>
                  <img src={employee.profileImage} />
                  <p>
                    {employee.firstName} {employee.lastName}
                  </p>
                  <p>{employee.jobTitle}</p>
                  <p>{employee.isFullTime}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
      <footer>Property of Smelleez inc.</footer>
    </>
  )
}

export default HomePage
