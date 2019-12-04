import React, { useState } from 'react'
import axios from 'axios'

const AddEmployeePage = () => {
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

  const addEmployee = async () => {
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/smelleez/employees/',
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
        gender: gender,
        email: email,
        emergencyContactPerson: ecName,
        emergencyContactPhone: ecPhone,
        emergencyContactAddress: ecAddress,
        ptoHours: PTO,
      }
    )
  }

  return (
    <>
      <form onSubmit={addEmployee}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <label>
          Birthday:
          <input
            type="text"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
          />
        </label>
        <label>
          Hired date:
          <input
            type="text"
            value={hiredDate}
            onChange={e => setHiredDate(e.target.value)}
          />
        </label>
        <label>
          Job Title:
          <input
            type="text"
            value={jobTitle}
            onChange={e => setJobTitle(e.target.value)}
          />
        </label>
        <label>
          Job Description:
          <input
            type="text"
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
          />
        </label>
        <label>
          Full Time?:
          <select value={fullTime} onChange={e => setFullTime(e.target.value)}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            value={zip}
            onChange={e => setZip(e.target.value)}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={unitedState}
            onChange={e => setUnitedState(e.target.value)}
          />
        </label>
        <label>
          Salary:
          <input
            type="number"
            value={salary}
            onChange={e => setSalary(e.target.value)}
          />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={e => setGender(e.target.value)}>
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
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Emergency Contact Phone:
          <input
            type="text"
            value={ecPhone}
            onChange={e => setEcPhone(e.target.value)}
          />
        </label>
        <label>
          Emergency Contact Name:
          <input
            type="text"
            value={ecName}
            onChange={e => setEcName(e.target.value)}
          />
        </label>
        <label>
          Emergency Contact Address:
          <input
            type="text"
            value={ecAddress}
            onChange={e => setEcAddress(e.target.value)}
          />
        </label>
        <label>
          PTO Hours:
          <input
            type="number"
            value={PTO}
            onChange={e => setPTO(e.target.value)}
          />
        </label>
        <label>
          Enter Profile Image URL:
          <input
            type="text"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default AddEmployeePage
