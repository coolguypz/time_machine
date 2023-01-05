import React from 'react'
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <div className='container mb-3'>
            <hr className='hr'/>
            <div className='row'>
            <Link className="col text-dark" to="/">首页</Link>
            <Link className="col text-dark" to="/wallet">钱包</Link>
            <Link className="col text-dark" to = "/myaccount">我的</Link>

            </div>
        </div>
    )
}

export default Footer;