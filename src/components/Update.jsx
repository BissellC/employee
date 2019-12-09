import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Update = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hiredDate, setHiredDate] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [unitedState, setUnitedState] = useState('')
  const [salary, setSalary] = useState(0)
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [ecPhone, setEcPhone] = useState('')
  const [ecName, setEcName] = useState('')
  const [ecAddress, setEcAddress] = useState('')
  const [PTO, setPTO] = useState(0)
  const [fullTime, setFullTime] = useState(true)
  const [image, setImage] = useState('')
  const [employee, setEmployee] = useState([])

  const employeeData = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/soulsuckers/employees/${props.id}`
    )
    setEmployee(resp.data)
    console.log(resp.data)
    setFirstName(resp.data.firstName)
    setLastName(resp.data.lastName)
    setBirthday(resp.data.birthday)
    setHiredDate(resp.data.hiredDate)
    setJobTitle(resp.data.jobTitle)
    setJobDescription(resp.data.jobDescription)
    setPhoneNumber(resp.data.phoneNumber)
    setAddress(resp.data.address)
    setCity(resp.data.city)
    setZip(resp.data.zip)
    setUnitedState(resp.data.state)
    setSalary(resp.data.salary)
    setGender(resp.data.gender)
    setEmail(resp.data.email)
    setEcPhone(resp.data.emergencyContactPhone)
    setEcName(resp.data.emergencyContactPerson)
    setEcAddress(resp.data.emergencyContactAddress)
    setPTO(resp.data.ptoHours)
    setFullTime(resp.data.isFullTime)
    setImage(resp.data.profileImage)
  }

  useEffect(() => {
    employeeData()
  }, [])

  const updateEmployee = async () => {
    const resp2 = await axios.put(
      `https://sdg-staff-directory-app.herokuapp.com/api/soulsuckers/employees/${props.id}`,
      {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        hiredDate: hiredDate,
        isFullTime: fullTime,
        profileImage: image,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        phoneNumber: phoneNumber,
        address: address,
        city: city,
        zip: zip,
        state: unitedState,
        salary: salary,
        email: email,
        emergencyContactPerson: ecName,
        emergencyContactPhone: ecPhone,
        emergencyContactAddress: ecAddress,
        ptoHours: PTO,
      }
    )
    console.log(resp2)
  }

  return (
    <>
      <nav>
        <header>Soul Suckers</header>
        <Link to={'/'}>Home</Link>
      </nav>
      <h1>Update Employee</h1>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            placeholder={employee.firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            placeholder={employee.lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <label>
          Birthday:
          <input
            type="text"
            value={birthday}
            placeholder={employee.birthday}
            onChange={e => setBirthday(e.target.value)}
          />
        </label>
        <label>
          Hired date:
          <input
            type="text"
            value={hiredDate}
            placeholder={employee.hiredDate}
            onChange={e => setHiredDate(e.target.value)}
          />
        </label>
        <label>
          Job Title:
          <input
            type="text"
            value={jobTitle}
            placeholder={employee.jobTitle}
            onChange={e => setJobTitle(e.target.value)}
          />
        </label>
        <label>
          Job Description:
          <input
            type="text"
            value={jobDescription}
            placeholder={employee.jobDescription}
            onChange={e => setJobDescription(e.target.value)}
          />
        </label>
        <label>
          Full Time?:
          <select
            value={fullTime}
            placeholder={employee.isfullTime}
            onChange={e => setFullTime(e.target.value)}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            placeholder={employee.phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            placeholder={employee.address}
            onChange={e => setAddress(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            placeholder={employee.city}
            onChange={e => setCity(e.target.value)}
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            value={zip}
            placeholder={employee.zip}
            onChange={e => setZip(e.target.value)}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={unitedState}
            placeholder={employee.state}
            onChange={e => setUnitedState(e.target.value)}
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            value={salary}
            placeholder={employee.salary}
            onChange={e => setSalary(e.target.value)}
          />
        </label>
        <label>
          Gender:
          <select
            value={gender}
            placeholder={employee.gender}
            onChange={e => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder={employee.email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Emergency Contact Phone:
          <input
            type="text"
            value={ecPhone}
            placeholder={employee.emergencyContactPhone}
            onChange={e => setEcPhone(e.target.value)}
          />
        </label>
        <label>
          Emergency Contact Name:
          <input
            type="text"
            value={ecName}
            placeholder={employee.emergencyContactPerson}
            onChange={e => setEcName(e.target.value)}
          />
        </label>
        <label>
          Emergency Contact Address:
          <input
            type="text"
            value={ecAddress}
            placeholder={employee.emergencyContactAddress}
            onChange={e => setEcAddress(e.target.value)}
          />
        </label>
        <label>
          PTO Hours:
          <input
            type="number"
            value={PTO}
            placeholder={employee.ptoHours}
            onChange={e => setPTO(e.target.value)}
          />
        </label>
        <label>
          Enter Profile Image URL:
          <input
            type="text"
            value={image}
            placeholder={employee.profileImage}
            onChange={e => setImage(e.target.value)}
          />
        </label>
        <button type="button" onClick={updateEmployee}>
          Save
        </button>
      </form>
      <footer>Property of Soul Suckers inc.</footer>
    </>
  )
}

export default Update
