import Footer from './Footer'
import './Pay.css'
import { IoIosArrowForward } from 'react-icons/io'

function Pay() {
    return(
        <div className='pay'>
            <div className='pay_body'>
                <div className='pay_header'>
                    <h1>Send</h1>
                </div>
                <div className='pay_add_div'>
                    <div className='pay_add_circle'>
                        <p>Search friends and add to circle</p>
                        <button>Add</button>
                    </div>
                </div>
                <div className='pay_body_section' >
                    <h1>Send money</h1>
                    <div>
                        <div>
                            <div>
                                <h3>Send money to FOUR tag</h3>
                                <p>Send money to any FOUR user for free</p>
                            </div>
                            <IoIosArrowForward className='pay_body_section_arrow'/>
                        </div>
                        <div>
                            <div>
                                <h3>Send to Module</h3>
                                <p>Send money to your modules</p>
                            </div>
                            <IoIosArrowForward className='pay_body_section_arrow'/>
                        </div>
                        <div>
                            <div>
                                <h3>Send to Bank account</h3>
                                <p>Send money to Local bank account</p>
                            </div>
                            <IoIosArrowForward className='pay_body_section_arrow'/>
                        </div>
                    </div>
                </div>
                <div className='pay_body_section' >
                    <h1>Pay bills</h1>
                    <div>
                        <div>
                            <div>
                                <h3>Buy airtime</h3>
                                <p>Recharge your airtime</p>
                            </div>
                            <IoIosArrowForward className='pay_body_section_arrow'/>
                        </div>
                        <div>
                            <div>
                                <h3>Pay bills</h3>
                                <p>Pay bills on FOUR</p>
                            </div>
                            <IoIosArrowForward className='pay_body_section_arrow'/>
                        </div>
                    </div>
                </div>
                <div className='pay_body_section' >
                    <h1>Send anonymously</h1>
                    <div>
                        <div>
                            <div>
                                <h3>Send anonymously</h3>
                                <p>Send money without revealing your identity</p>
                            </div>
                            <IoIosArrowForward className='pay_body_section_arrow'/>
                        </div>
                        <div>
                            <div>
                                <h3>Receive anonymously</h3>
                                <p>Receive money without revealing your identity</p>
                            </div>
                            <IoIosArrowForward className='pay_body_section_arrow'/>
                        </div>
                    </div>
                </div>  
        </div>
            <Footer number={2}/>
        </div>
    )
}

export default Pay