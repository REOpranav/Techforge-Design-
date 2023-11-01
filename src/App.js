import MainContent from './MainContent';
import './App.css';
import Subheader from './Subheader';
import Contact from './Contact';
import { useState } from 'react';

function App() {
   const handleSubmit = (e)=>{
      e.preventDefault()
      setInput('')
   } 

const[input,setInput] = useState('')

  return (
    <div>
       <Subheader />
       <MainContent 
          input = {input}
          setInput = {setInput}
          handleSubmit={handleSubmit}
       />
       <Contact />
    </div> 
  );
}

export default App;
