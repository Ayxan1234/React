import React from 'react'
import './eightSection.css'

const EightSection = () => {
  return (
    <div>
    <div className="eightsec-box">
     <div className="eightsec-back">

<div className="eightsec-box3">
<div className="eightsec-box2">
           <h1>Get free Estimate</h1> 
           <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing.</p>
           <button>+10 672 457 356</button>
       
     </div>
     <form action="">
        <div className="input-sec">
        <input type="text" placeholder="Your name" className='input1'/>
            <input type="text" placeholder='Email' className='input4' />
        </div>
     

        <div className="inputs-1">
        <div className="input-sec">
          <select disabled="">
            <option value=""><b>Product type</b></option>
            <option value="">small</option>
            <option value="">standart</option>
            <option value="">high</option>
          </select>
        </div>
        
        <div className="input-sec">
          <select disabled="">
            <option value=""><b>Product size</b></option>
            <option value="">small</option>
            <option value="">standart</option>
            <option value="">high</option>
          </select>
        </div>
        </div>

        <div className="inputs-2">
        <div className="input-sec">
          <select disabled="">
            <option value=""><b>City of departure</b></option>
            <option value="">small</option>
            <option value="">standart</option>
            <option value="">high</option>
          </select>
        </div>
        
        <div className="input-sec">
          <select disabled="">
            <option value=""><b>Delivery city</b></option>
            <option value="">small</option>
            <option value="">standart</option>
            <option value="">high</option>
          </select>
        </div>
        </div>

        <input type="text" placeholder="Your name" className='input3'/>
        
        <button className='butsec-1'>Send Estimate</button>
        
        </form>
</div>
     </div>
    </div>

    </div>
  )
}

export default EightSection