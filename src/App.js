// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './About';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')

  const[alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      showAlert('Drak mode is enable','success')
      document.title = 'TextUtils -Dark Mode'
    }else{
      setMode('light')
      showAlert('Light mode is enable','success')
      document.title = 'TextUtils -Light Mode'
    }
  }

  return (
    <>
     <Navbar  mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>

    <TextForm heading="Enter thr text to analyze"/>
    {/* <Router>
      <Navbar  mode={mode} toggleMode={toggleMode}/>

     

      <Routes>
        <Route path="/text" element={<TextForm heading="Enter thr text to analyze"/>}/>
    
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router> */}
   
    </>
  );
}

export default App;
