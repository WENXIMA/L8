import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import LogIn from './components/LogIn'
import Register from './components/Register'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import Homepage from './components/LogIn'
import './App.css';

export default function App() {
  return (
      <Router>
          <div>
            
              <Switch>
                  <Route exact path="/" component={ LandingPage } />
                  <Route path="/login" component={ LogIn } />
                  <Route path="/register" component={ Register } />
                  <Route path="/forget-password" component={ ForgetPasswordPage } />
                  <Route path="/home" component={ Homepage } />
              </Switch>
              
              <Footer />
          </div>
      </Router>
  )
}

const Footer = () => {
  return (
      <p className="text-center" style={ FooterStyle }>Designed & coded by SEG3125 G29</p>
  )
}

const FooterStyle = {
  background: "#222",
  fontSize: ".8rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}