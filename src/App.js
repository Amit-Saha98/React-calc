
import './App.css';
import { useState } from 'react';

function App() {

  const [ip1,setip1] = useState();
  const [ip2,setip2] = useState();
  const [error,setError] = useState();
  const [ans,setAns] = useState();
  const[res,setRes]= useState(false);

  const handle1 = (event)=>{
    setip1(parseInt(event.target.value));
  }

  const handle2 = (event)=>{
    setip2(parseInt(event.target.value));
  }
   

  const calc = (type)=>{
      

      if(validate(ip1,ip2)) {
        if(type==='+'){
            setAns(ip1+ip2);
        }
        else if(type==='-'){
          setAns(ip1-ip2);
        }
        else if(type==='*'){
           setAns(ip1*ip2);
      }
      else{
        setAns(ip1/ip2);
      }
      setRes(true);
      }

      else {
        setError("enter valid input");
      }
  }

  function validate(a,b){
    if(a===isNaN||b===isNaN)return false;
    return true;
  }






  return (
    <div className="App">
     <div>
        <h1>React Calculator</h1>
        <input onChange={handle1} type='number'></input>
        <br></br>
        <input onChange={handle2} type='number'></input>
        <br></br>
        <button onClick={()=>calc('+')}>+</button>
        <button onClick={()=>calc('-')}>-</button>
        <button onClick={()=>calc('*')}>*</button>
        <button onClick={()=>calc('/')}>/</button>
        <p>Result = {ans}</p>
        <p style={{color:"red"}}>{error}</p>
        <p style={res===false ?{display:'none'}: {"display":"block",color:"green"}}>Success: Your result is shown above</p>
     </div>
    </div>
  );
}

export default App;
