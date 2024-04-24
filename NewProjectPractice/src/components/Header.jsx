import React from 'react'
import logo from '../assets/investment-calculator-logo.png'
function Header() {
  return (
    <section id="header">
        <img src={logo} alt="showing-investment-logo" />
        <h1>React Investment Calculator</h1>
    </section>
  )
}

export default Header