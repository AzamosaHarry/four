import './Footer.css'
import { useNavigate } from 'react-router-dom'
import { BiHome, BiMenu} from 'react-icons/bi'
import { MdOutlinePayment, MdViewModule } from 'react-icons/md'
import { BsFillPeopleFill } from 'react-icons/bs'
import four2 from './four2.png'
import { useState } from 'react'

function Footer ({ number }) {
    const navigate = useNavigate()
    const [ color1, setColor1 ] = useState('gray')

    
    return (
        <div className='footer'>
            <img src={four2} alt='' className='footer_four_logo' />
            <ul className='footer_ul'>
                <li onClick={() => { navigate('/dashboard')}} id={(number === 1)? 'color1' : ''}>
                    <BiHome className='footer_icon' />
                    <h1>Home</h1>
                </li> 
                <li onClick={() => { navigate('/dashboard/pay')}} id={(number === 2)? 'color2' : ''}>
                    <MdOutlinePayment className='footer_icon' />
                    <h1>Send</h1>
                </li>
                <li onClick={() => { navigate('/dashboard/module')}} id={(number === 3)? 'color3' : ''}>
                    <MdViewModule className='footer_icon' />
                    <h1>Module</h1>
                </li>
                <li  onClick={() => { navigate('/dashboard/circle')}} id={(number === 4)? 'color4' : ''}>
                    <BsFillPeopleFill className='footer_icon' />
                    <h1>Circle</h1>
                </li>
                <li onClick={() => { navigate('/dashboard/more')}} id={(number === 5)? 'color5' : ''}>
                    <BiMenu className='footer_icon' />
                    <h1>More</h1>
                </li> 
            </ul>
            <button onClick={() => { navigate('/')}}>Log out</button>
        </div>
    )    
}

export default Footer;