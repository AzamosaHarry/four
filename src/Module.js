import Footer from './Footer'
import './Module.css'

function Module() {
    return(
        <div className='module'>
            <div className='module_div'>
                <div className='pay_header'>
                    <h1>Module</h1>
                    <p>[Create a sub-account for anything!]</p>
                </div>
                <div className='module_body'>
                    <button className='module_body_create'>Create modules</button>
                    <div className='module_body_account_default'>
                        <h3>Savings</h3>
                        <h1>#423,890.03</h1>
                    </div>
                    <div className='module_body_account_savings'>
                        <h3>Invest</h3>
                        <h1>#612,447.45</h1>
                    </div>
                    <div className='module_body_account_default'>
                        <h3>Rent</h3>
                        <h1>#153,000.03</h1>
                    </div>
                    <div className='module_body_account_savings'>
                        <h3>School fees</h3>
                        <h1>#55,447.45</h1>
                    </div>
                    <div className='module_body_account_default'>
                        <h3>Weekend flexing</h3>
                        <h1>#23,890.03</h1>
                    </div>
                    <div className='module_body_account_savings'>
                        <h3>Food this week</h3>
                        <h1>#22,447.45</h1>
                    </div>
                </div>
            </div>
            <Footer number={3} />
        </div>
    )
}

export default Module