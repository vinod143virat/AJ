import * as React from 'react';
// import axios from 'axios';

import '../Styles/Home.css'

export default function Home() {
//   const initialValues = {                   // type all the fields you need
//     name: '',
//     email: '',
//     password: ''
//     };

//     const [values, setValues] = React.useState([]); 
  
//     const changeHandler = (e) => {                
//       setValues({
//         ...values,                                // spreading the unchanged values
//         [e.target.name]: e.target.value,          // changing the state of *changed value*
//       });
      
//     };

//     const Onsubmit = () => {
//       axios.post('http://localhost:4000/signup', values).then((res) => {console.log(res)}).catch((error) => {console.log(error)})
//     }


    return (
//       < >
//         <br></br>
//         <h2>
//         <form>
//   <input type="email"
//   name="email"                                     // using name, value, onChange for applying changes
//    onChange={changeHandler}
//    placeholder="Enter your email"
//    />
//    <input type="text"
//    name="name"                                     // using name, value, onChange for applying changes
//    onChange={changeHandler}
//    placeholder="Enter your Name"
//    />

// <input type="number"
//    name="age"                                     // using name, value, onChange for applying changes
//    onChange={changeHandler}
//    placeholder="Enter your age"
//    />
// <input type="text"
//    name="phone"                                     // using name, value, onChange for applying changes
//    onChange={changeHandler}
//    placeholder="Enter your phone"
//    />
   
   

//    <button onClick={Onsubmit}>Submit</button>

// </form>
//         </h2>
//         <div>{JSON.stringify(values)}</div>
      <h1>Hello from home</h1>
      
    )
  }

