import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
//import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';
//import {
 // BrowserRouter as Router,
 // Switch,
 // Route
//} from "react-router-dom";


function App() {
const [mode, setmode] = useState('light');
const [alert,setalert] = useState(null);
const [change,setchange] = useState('light');
const [ch,setch] = useState('light');

const showalert =(message,type) =>{
  setalert({
    msg : message,
    type: type
  })
  setTimeout(() => {
    setalert(null);
  },1500);
}
const togglemode = () =>{
  if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor ='#292252'; 
    showalert("Dark mode is enabled","success");
    document.title ="TextUtils -Dark mode";

  //  setInterval(() => {
  //    document.title="TextUtils is Amazing app";
  //  },2000);

  //  setInterval(() => {
  //    document.title ="Download TextUtils app";
  //  },1500);
  }
    else{
    setmode('light');
    document.body.style.backgroundColor ='white';
    showalert("light mode is enabled","success");
    document.title ="TextUtils -light mode";

  }
}
const changemode =() =>{
  if(change === 'light'){
    setchange('danger');
   document.body.style.backgroundColor ='red';
   showalert("red mode is enabled","success");
  }
  else{
    setchange('light');
   document.body.style.backgroundColor ='white';
   showalert("light mode is enabled","success");
  }
}
const yellowmode=() =>{
    if(ch==='light'){
      setch('warning');
      document.body.style.backgroundColor ='orange';
      showalert("yellow mode is enabled","success");
    }
    else{
      setch('light');
      document.body.style.backgroundColor ='white';
      showalert("light mode is enabled","success");

    }
}
  return (
  <>
 {/* <Router>*/}
 <Navbar title="TextUtils" mode={mode} togglemode={togglemode} change={change} changemode={changemode} ch={ch} yellowmode={yellowmode}/> 
<Alert alert={alert}/>
 <div className="container my-3">
 {/*<Switch>
          <Route exact path="/about">
            <About />
          </Route>    
 <Route exact path="/">*/}
          <Textform showalert={showalert} heading="Enter the text to analyize below" mode={mode}/>
          {/*</div></Route>
 </Switch>8/}

 {/*<About/>*/}

 </div>
 {/*</Router>*/}

  </>
  
  );
}

export default App;
