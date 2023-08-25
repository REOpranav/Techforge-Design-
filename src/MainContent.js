import React from 'react'
import { useState } from 'react';
import { FaAnglesLeft,FaAnglesRight } from "react-icons/fa6";

const MainContent = () => {

  const images = [
    'https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_640.png',
    'https://i.pinimg.com/736x/29/30/96/2930962fd4783064b2d77b2c1ab489a1.jpg',
    'https://i.pinimg.com/236x/23/2a/b3/232ab33981f12b841bf673df91bd44a0.jpg',
    'https://i.pinimg.com/236x/85/85/75/858575441f41dc4ccbc98f7c6c9e5da5.jpg',
    'https://i.pinimg.com/236x/6a/49/46/6a49460cb3d52260ecd4bd6e42e10f28.jpg',
    'https://i.pinimg.com/236x/ba/ee/a7/baeea7b7a8ede63bc96521ac02dded8e.jpg',
    'https://img.freepik.com/free-photo/shiny-sports-car-races-through-cityscape-generated-by-ai_188544-19617.jpg?size=626&ext=jpg&ga=GA1.1.525609212.1690119469&semt=sph',
  ];
  
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

  setTimeout(() => {
      nextSlide()
  }, 5000);

  return (

    <div className='main'>
      <img
          src={images[currentSlide]}
          alt={`Image ${currentSlide + 1}`}
          className="slide"
     />
      <button  className='back-button' onClick={prevSlide}> <FaAnglesLeft /> </button>
      <button className='front-button' onClick={nextSlide}> <FaAnglesRight /> </button>

       <h2>
          stay in touch
       </h2>

      <h3>
        booking available for latest car festa 
      </h3>

 <div className='inputs'>
        <h2>
          <input type="email" 
                 name="mail"
                 placeholder='Email id'  
                 required   
          />

          <button>
                Get start
          </button>
         
       </h2>
          
 </div>
</div>

 

  )
}

export default MainContent