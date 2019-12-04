import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import EmployeePage from './pages/EmployeePage'
import AddEmployeePage from './pages/AddEmployeePage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header></header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/employee/:id" component={EmployeePage}></Route>
        <Route exact path="/add-employee" component={AddEmployeePage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
