import Footer from './Footer'
import './Circle.css'
import { BsSearch } from 'react-icons/bs'

function Circle() {
    return(
        <div className='circle'>
            <div className='circle_body'>
                <div className='pay_header'>
                    <h1>Circle</h1>
                </div>
                <div className='circle_body_search'>
                    <div>
                        <input placeholder='Search FOUR users' type='text' />
                        <button><BsSearch className='circle_body_search_icon' /></button>
                    </div>
                </div>
                <div className='circle_body_beneficiaries'>
                    <h1>Beneficiaries</h1>
                    <div className='dashboard_body_transaction_history'>

                    </div>
                    <div className='dashboard_body_transaction_history'>

                    </div>
                    <div className='dashboard_body_transaction_history'>

                    </div>
                </div>
                <div className='circle_body_circle'>
                    <h1>Circle</h1>
                    <div className='dashboard_body_transaction_history' style={{background:'#26408B', color:'#fff',textAlign:'center'}}>
                        <p>Circle feature is coming out soon</p>
                    </div>
                </div>
            </div>
            <Footer  number={4}/>
        </div>
    )
}

export default Circle