import React from 'react'

const Subheader = () => {
  return (
    <div className='subheader'>
        <img src="https://i.pinimg.com/originals/ae/bf/f8/aebff820fd4da79db61299c3ac69bd9a.png"
             className='image-peacock'
        />
 
    <ul className='ul'> 
       <a href="#about">   <li>about</li> </a>
       <a href="#explore"> <li> explore</li></a>
       <a href="#news">    <li>news</li></a>
       <a href="#contact"> <li> contact</li> </a>
    </ul>

    <ul className='login-and-register'>
      <a href="#login">  <li>login </li> </a>
       <p style={{color:'white' , marginTop:'14px',marginRight:'2rem'}}>|</p>
      <a href="#register"><li> register</li> </a>
    </ul>
</div>
  )
}

export default Subheader