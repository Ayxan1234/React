import React from 'react'
import './footer.css'
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer-sec1'> 
        <div className="footer-sec">
            <div className="footersec-box">
                <h2>Services</h2>
                <p>Air Transportation</p>
                <p>Ocean Freight</p>
                <p>Ocean Cargo</p>
                <p>Logistics</p>
                <p>Warehouse Moving</p>
            </div>

            <div className="footersec-box1">
                <h2>Company</h2>
                <p>About</p>
                <p>News</p>
                <p>Testimonials</p>
                <p>Why Us?</p>
            </div>

            <div className="footersec-box2">
                <h2>Industries</h2>
                <p>Chemicals</p>
                <p>Automotive</p>
                <p>Consumer Goods</p>
                <p>Life Science</p>
                <p>Foreign Trade</p>
            </div>

            <div className="footersec-box3">
                <h2>Subscribe</h2>
                <button className='footer-button'>Enter your mail</button>
                <button className='footer-button2'>Subscribe</button>
                <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
            </div>
        </div>
    
        
        <div className="colorlib">
        <hr />
        <p>Copyright ©2024 All rights reserved | This template is made with <CiHeart /> by  <span>Colorlib</span></p>
        </div>
       
    </div>
  )
}

export default Footer