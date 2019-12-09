import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import EmployeePage from './pages/EmployeePage'
import AddEmployeePage from './pages/AddEmployeePage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import UpdatePage from './pages/UpdatePage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/employee/:id" component={EmployeePage}></Route>
        <Route exact path="/add-employee" component={AddEmployeePage}></Route>
        <Route exact path="/update-employee/:id" component={UpdatePage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
