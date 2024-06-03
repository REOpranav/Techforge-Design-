import MainContent from './MainContent';
import './App.css';
import Subheader from './Subheader';
import Contact from './Contact';
import { useEffect, useState } from 'react';

function App() {
 
  return (
    <div>
       <Subheader />
       <MainContent />
       <Contact />
    </div> 
  );
}

export default App;
