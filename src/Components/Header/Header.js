import React from 'react'
import "./Header.css"

function Header() {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="logo.jpg" alt="logo" width={100} />
            <div className="flexCenter h-menu">
                <a href="">Recidencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className="button">Contact</button>
            </div>
        </div>
    </section>
  )
}

export default Header
