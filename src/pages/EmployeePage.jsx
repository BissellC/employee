import React, { useState, useEffect } from 'react'
import EmployeeFull from '../components/EmployeeFull'

const EmployeePage = props => {
  return (
    <>
      <section>
        <EmployeeFull id={props.match.params.id} />
      </section>
    </>
  )
}

export default EmployeePage
