import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logoo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, atque. Inventore veritatis a doloribus, nostrum eum expedita ex consequuntur, et repellat officia consectetur. Nulla perferendis nisi quia repudiandae eos atque.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
    <h2>Company</h2>
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
    </ul>
</div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+919073895752</li>
                    <li>232210021@nitdelhi.ac.in</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footer-copyright'>copyright 2025 © Alifood - All Right Reserve </p>

    </div>
  )
}

export default Footer