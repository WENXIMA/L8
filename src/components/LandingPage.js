import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import BackgroundImage from '../images/log.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Rent to & from a verified individuals </h1>
            
            <div className="buttons text-center">
            <Link to="/about">
                    <button className="primary-button" id="info_btn"><span>About </span></button>
                </Link>
                <Link to="/contact">
                    <button className="primary-button" id="cont_btn"><span>Contact </span></button>
                </Link>
                <Link to="/Pricing">
                    <button className="primary-button" id="price_btn"><span>Pricing </span></button>
                </Link>
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
