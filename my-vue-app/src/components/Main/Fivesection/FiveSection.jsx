import React from 'react'
import './fiveSection.css'

const FiveSection = () => {
  return (
    <div>
    <div className="fivesec-box">
        <div className="fivesec-box2">
            <img src="https://preview.colorlib.com/theme/logistico/img/about/about.png.webp" alt="" />
        </div>
        <div className="five-box3">
            <h1>Why Choose Us?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
            <div className="img-box">
            <img src="https://preview.colorlib.com/theme/logistico/img/svg_icon/check.svg" alt="" />
            <p>Apartments frequently or motionless.</p>
            </div>
            <div className="img-box">
            <img src="https://preview.colorlib.com/theme/logistico/img/svg_icon/check.svg" alt="" />
            <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
            <div className="img-box">
            <img src="https://preview.colorlib.com/theme/logistico/img/svg_icon/check.svg" alt="" />
            <p>Voluptatem quia voluptas sit aspernatur.</p>
            </div>
            <button>About Us</button>
           
        </div>
    </div>

    </div>
  )
}

export default FiveSection