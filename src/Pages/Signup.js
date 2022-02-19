import React from 'react'
import axios from 'axios';


export default function Signup() {

  //   const initialValues = {
  //     "email": "yellow@test.com",
  //     "password": "12345"
  // }

  const [values, setValues] = React.useState([]);

  const changeHandler = (e) => {
    setValues({
      ...values,                                // spreading the unchanged values
      [e.target.name]: e.target.value,          // changing the state of *changed value*
    })
  };

  

  const Onsubmit = () => { 
    axios.post('http://localhost:4000/signup', values).then((res) => {console.log(res)}).catch((err)=>{console.log(err)})

  }
 const Handler = (e) => {
   e.preventDefault();
 }


    return (
      <>
        <br></br>
        <form onSubmit={Handler}>
          

          <input type="text"
            name="email"                                     // using name, value, onChange for applying changes
            onChange={changeHandler}
            placeholder="Enter your email"
          />


          <input type="text"
            name="password"                                     // using name, value, onChange for applying changes
            onChange={changeHandler}
            placeholder="Enter your password"
          />
          

          <button onClick={Onsubmit}>Submit</button>

        </form>

        <div>{JSON.stringify(values)}</div>
      </>
    )
  }

