// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Maintanance from './Pages/Maintanance';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has Been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Maintanance />
        {<Navbar title="Word-Utility" mode={mode} togglemode={togglemode} />}
        {/* <Alert alert={alert} /> */}
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route index path="About" element={<About />} />
        </Routes>
      </BrowserRouter>

      {/*Navbar component*/}
      {/* <Navbar title="Navbar" mode={mode} togglemode={togglemode} /> */}
      {/* alert component */}
      {/* <Alert alert={alert} /> */}
      {/*Textarea component*/}
      {/* <div className="container my-3"> */}
      {/*About component*/}
      {/* <About /> */}
      {/*TextForm component*/}
      {/* <TextForm mode={mode} showAlert={showAlert} /> */}
      {/* </div> */}
    </>
  );
}
export default App;
