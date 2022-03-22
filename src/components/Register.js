import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Create your RapidRent Account</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>I am a</label>
                    <input type="text" name="id" required />
                </p>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="fnames" required />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="lname" required />
                </p>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <label>Confrim Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}