import Footer from './Footer'
import { BsFillPersonFill } from 'react-icons/bs'
import { GiInjustice } from 'react-icons/gi'
import { MdAddBusiness, MdOutlineWifiCalling3 } from 'react-icons/md'
import './More.css'
import { useNavigate } from 'react-router-dom'

function More() {
    const navigate = useNavigate()
    return(
        <div className='more'>
            <div className='more_body'>
                <div className='pay_header'>
                    <h1>More</h1>
                </div>
                    <div className='more_div'>
                        <BsFillPersonFill className='more_icons' />
                        <div>
                            <h1>Michael Oluwatosin</h1>
                            <p>Project ID: 982538757</p>
                            <p>FOUR tag: @MikeOlu</p>      
                        </div>
                    </div>
                    <div className='more_div'>
                        <MdAddBusiness className='more_icons' />
                        <div>
                            <h1>FOUR for businesses</h1>
                            <p style={{color:'red'}}>Coming soon</p>
                        </div>
                    </div>
                    <div className='more_div'>
                        <GiInjustice className='more_icons' />
                        <div>
                            <h1>Legal and services</h1>
                            <p>Everything legal</p>
                        </div>
                    </div>
                    <div className='more_div'>
                        <MdOutlineWifiCalling3 className='more_icons' />
                        <div>
                            <h1>Contact us</h1>
                            <p>Get in touch</p>
                        </div>
                    </div>
                    <div className='more_body_logout'>
                    <h1 onClick={() => {navigate('/four')}}>Log out</h1>
                    <p>1.00.00</p>
            </div>
            </div>
            
            <Footer  number={5}/>
        </div>
    )
}

export default More