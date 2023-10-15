import { useState } from 'react'
import './Signup2.css'
import four2 from './four2.png'
import { useNavigate } from 'react-router-dom'

function Signup2() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    return(
        <div>
            <div className='signup'>
                <img src={four2} alt='' className="signup_four_logo" />
                <h3>One last step! Set up your password</h3>
                <div className='signup_div'>
                    <form className='signup_form'>
                    <label  className='signup_label' for='email'>email:</label>
                    <input id='email' className='signup_input' type='email' required onChange={(e) => {setEmail(e.target.value)}}/>
                    <label className='signup_label'>Password:</label>
                    <input className='signup_input'type='password' minLength='8' required onChange={(e) => {setPassword(e.target.value)}}/>
                        <div>
                            <button type='submit' id='signup2_button' onClick={() => {navigate('/four')}}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup2