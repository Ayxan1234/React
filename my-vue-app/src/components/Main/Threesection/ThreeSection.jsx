import React from 'react'
import './threeSection.css'

const ThreeSection = () => {
  return (
    <div>
    <section className='threesec'>
    <h1>Services We Offer</h1>
      <div className="threesec-box2">
          <div className="threesec-box">
            <img src="https://preview.colorlib.com/theme/logistico/img/service/1.png.webp" alt="" />
            <h2>Ocean Freight</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.</p>
          </div>
          <div className="threesec-box">
            <img src="https://preview.colorlib.com/theme/logistico/img/service/2.png.webp" alt="" />
            <h2>Land Transport</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.</p>
          </div>
          <div className="threesec-box">
            <img src="https://preview.colorlib.com/theme/logistico/img/service/3.png.webp" alt="" />
            <h2>Air Freight</h2>
            <p>Esteem spirit temper too say adieus who direct esteem.</p>
          </div>
      </div>   
   

    </section>

    </div>
  )
}

export default ThreeSection