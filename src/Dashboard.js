import './Dashboard.css'
import Footer from './Footer'
import Face from './face2.jpg'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import { useState } from 'react'


function Dashboard() {
    const [ show, setShow ] = useState(false)

    return(
        <div className='dashboard'>
            <div className='dashboard_body'>
                <div className='dashboard_body_info'>
                    <img src={Face} alt='' className='dashboard_body_img' />
                    <div className='dashboard_body_message'>
                        <h1>Good morning, Michael</h1>
                        <p>Remember to smile today!</p>
                    </div>
                </div>

                <div className='dashboard_body_account'>
                    <div className='dashboard_body_account_default'>
                        <h3>Default</h3>
                        <div>
                            <h1>{show? '#423,890.03' : '***********'}</h1>
                            <AiFillEye className='changepassword_icon' onClick={() => {setShow(!show)}}/>
                        </div>
                        <p>Naira account</p>
                    </div>
                    <div className='dashboard_body_account_savings'>
                        <h3>Savings</h3>
                        <h1>#612,447.45</h1>
                        <p>Naira account</p>
                    </div>
                </div>

                <div className='dashboard_body_add'>                        
                        <button className='dashboard_body_add_money' > <MdOutlineAddCircleOutline className='dashboard_add_icons' /> <h3>Add money</h3> </button>                        
                        <button className='dashboard_body_add_modules' > <h3>Create  modules</h3> </button>
                </div>

                <div className='dashboard_body_transaction' >
                    <h1>Transaction history</h1>
                    <div className='dashboard_body_transaction_statement'>
                        <button>Request for statement</button>
                    </div>
                    <div className='dashboard_body_transaction_history'>

                    </div>
                    <div className='dashboard_body_transaction_history'>

                    </div>
                    <div className='dashboard_body_transaction_history'>

                    </div>
                    <div className='dashboard_body_transaction_history'>

                    </div>
                    <div className='dashboard_body_transaction_history'>

                    </div>
                </div>
            </div>
            <Footer number={1} />
        </div>
    )
}

export default Dashboard