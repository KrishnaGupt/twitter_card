import React from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Footer from './Components/Footer';
function App() {
  
  return (
    <div className="h-[100%] bg-[#0d1117] flex flex-col items-center">
      <Header/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
