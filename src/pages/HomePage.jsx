import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/soulsuckers/employees'
    )
    console.log(resp)
    setEmployees(resp.data)
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <>
      <nav>
        <header>Soul Suckers</header>
        <Link to={'/add-employee/'}>Add employee</Link>
      </nav>
      <main>
        <h1>Employees</h1>
        <section>
          <ul>
            {employees.map(employee => {
              return (
                <li>
                  <img src={employee.profileImage} />
                  <Link className="name" to={'/employee/' + employee.id}>
                    {employee.firstName} {employee.lastName}
                  </Link>
                  <p>Job Title: {employee.jobTitle}</p>
                  <p>{employee.isFullTime ? 'Full Time' : 'Part Time'}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
      <footer>Property of Soul Suckers inc.</footer>
    </>
  )
}

export default HomePage
