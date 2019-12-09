import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Update from '../components/Update'

const UpdatePage = props => {
  return (
    <>
      <Update id={props.match.params.id} />
    </>
  )
}

export default UpdatePage
