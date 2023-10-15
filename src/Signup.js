import { useState } from 'react'
import './Signup.css'
import four2 from './four2.png'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [surname,setSurname] = useState('')
    const [firstname,setFirstname] = useState('')
    const [dob,setDob] = useState('')

    const navigate = useNavigate()

    return(
        <div className='signup'>
            <img src={four2} alt='' className="signup_four_logo" />
            <h3>Get onboard our FOUR community</h3>
            <div className='signup_div'>
                <form className='signup_form'>
                    <label className='signup_label'>Surname:</label>
                    <input className='signup_input' type='text' required onChange={(e) => {setSurname(e.target.value)}}/>
                    <label className='signup_label'>First name:</label>
                    <input className='signup_input' type='text' required onChange={(e) => {setFirstname(e.target.value)}}/>
                    <label className='signup_label'>Date of birth:</label>
                    <input className='signup_input' type='date'required onChange={(e) => {setDob(e.target.value)}}/>
                    <div>
                        <button type='submit' onClick={() => {navigate('/four/signup/createpassword')}}>Proceed</button>
                        <p>already have an account? <Link to='/' className='signup_link'>sign in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup