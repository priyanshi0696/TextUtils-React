
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react'
//import {
  //BrowserRouter as Router,
 // Switch,
 // Route,
//  }from "react-router-dom"; 

function App() {
  const[mode,setMode]=useState('light'); //Whether darkmode is enable or not
  const[alert,setAlert]=useState(null);
const showAlert=(message, type)=>{
  setAlert({
    msg : message,
    type :type
})

setTimeout(()=>{
  setAlert(null);
},1500);


}
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title ='TextUtils  Dark Mode';
    }
    else
   {
      setMode('light');
      document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enabled","success");
    document.title ='TextUtils  Light Mode';
    }

  }
  return (
    <>
   {/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} abouttext="About us"/>
<Alert alert={alert}/>
<div className="container my-3">
 {/* <Switch>
    <Route exact path="/about">
      <About/>
    </Route>
    <Route exact  path="/"> */}
    <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode}/> 
    {/*</Route>
  </Switch> */}

  
</div>
{/*</Router> */}
</>
  );
}

export default App;
