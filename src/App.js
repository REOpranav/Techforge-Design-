import MainContent from './MainContent';
import './App.css';
import Subheader from './Subheader';
import Contact from './Contact';
import { useEffect, useState } from 'react';

function App() {
 
 
   const handleSubmit = (e)=>{
      e.preventDefault()
      setInput('')
   } 

  return (
    <div>
       <Subheader />
       <MainContent 
          handleSubmit={handleSubmit}
       />
       <Contact />
    </div> 
  );
}

export default App;
