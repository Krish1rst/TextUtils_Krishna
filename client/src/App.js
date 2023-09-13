
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
document.body.style.backgroundColor='#90DBE6';
function App() {

    const[mode,setMode]=useState('dark');

    const toggleMode=()=>{
        if (mode==='light'){setMode('dark');
        document.body.style.backgroundColor='#90DBE6';
        document.title="TextUtils-LightMode";}
       
        else{setMode('light');
        document.body.style.backgroundColor='#102369';
        document.title="TextUtils-DarkMode";
        }}


return (
<>
{/*<Navbar title="TextUtils" about="aboutText" /> */}
    {/*<Alert alert={alert}/>*/}

<Router>
<Navbar title="TextUtils"mode={mode} about="About" toggleMode={toggleMode } />
    <div className="container my-3">
    <Routes>
<Route exact path="/about" element={ <About />}/>
          <Route exact path="/" element={ <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode }/>} />
        
    </Routes>
 </div>
 </Router>

</>
  );
}
export default App;


//impt proptype
//rfc templet
//imrs usestattec