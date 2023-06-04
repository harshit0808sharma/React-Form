import React, { useState } from "react";
import './App.css';
const App = () => {
  const [fullName, setFullName] = useState({
    fname : "",
    lname : "",
    email : "",
    phone : "",

    //add key here

    writeSomething : "",
  });
  const inputEvent = (event) => {
      const {value, name} = event.target;

      setFullName((preValue)=>{
        return{
          ...preValue,
          [name]:value}
      });       
  };
  const onSubmits = (event)=>{
    event.preventDefault();
    alert("form submited....");
  };
  return(
    <>
      <div>
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <p> {fullName.phone} </p>
            <p>{fullName.writeSomething}</p>

            {/* add paragraph or heading here */}

            <input 
              type="text" 
              placeholder="Enter your first name" 
              name="fname" 
              onChange={inputEvent} 
              value={fullName.fname} />
            <input 
              type="text" 
              placeholder="Enter your last name" 
              name="lname" 
              onChange={inputEvent} 
              value={fullName.lname} />
            <input 
              type="email" 
              placeholder="Enter your email" 
              name="email" 
              onChange={inputEvent} 
              value={fullName.email} 
              autoComplete="off"/>
            <input 
              type="number" 
              placeholder="Enter your phone number" 
              name="phone" 
              onChange={inputEvent} 
              value={fullName.phone} />
            <input 
              type="text" 
              placeholder="Write something" 
              name="writeSomething" 
              onChange={inputEvent} 
              value={fullName.writeSomething} />

              {/* add input button here */}

            <button type="submit" >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
