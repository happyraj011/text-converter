import React, { useState } from 'react'

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
     
    })
    setTimeout(() => {
        setAlert(null)
    }, 1500);
  }
  const toggleMode =()=>{
    if(mode=='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
  <Route exact path="/about" element={
    <>
      <About mode={mode}/>
     
    </>
  } />
  <Route exact path="/" element={
  <TextForm showAlert={showAlert} heading="TextUtils - Word counter, character counter,lowerCase to Uppercase,Uppercase to lowerCase " mode={mode} />} />
</Routes>


     
      </div>
      </Router>
    </>
  );
}

export default App;
