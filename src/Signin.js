import { Link, useNavigate } from 'react-router-dom'
import './Signin.css'
import four2 from './four2.png'
import { useState } from 'react'

function Signin() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    return(
        <div className='signin'>
            <img src={four2} alt='' className='signin_four_logo' />
            <div className='signin_body'>
                <h2>Welcome back</h2>
                <form className="signin_form">
                    <p className="signin_text">New to FOUR? <Link to='./four/signup' className="signin_link">sign up</Link></p>
                    <input className='signin_input' type='email' name='email' placeholder="Email address" required autoComplete onChange={(e) => {setEmail(e.target.value)}}/>
                    <input className='signin_input'type='password' name='password' placeholder="Password"  required onChange={(e) => {setPassword(e.target.value)}}/>
                    <button className="signin_button" type='submit' onClick={() => {navigate('/dashboard')}} >Login</button>
                    <p className="signin_text1">Forgot password?</p>
                </form>
            </div>
        </div>
    )
}

export default Signin