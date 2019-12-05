import React from 'react'
import EmployeeFull from '../components/EmployeeFull'
import { Link } from 'react-router-dom'

const EmployeePage = props => {
  return (
    <>
      <nav>
        <header>Soul Suckers</header>
        <Link to={'/add-employee/'}>Add employee</Link>
        <Link to={'/'}>Home</Link>
      </nav>
      <section className="employee-page">
        <EmployeeFull id={props.match.params.id} />
      </section>
      <footer>Property of Soul Suckers inc.</footer>
    </>
  )
}

export default EmployeePage
