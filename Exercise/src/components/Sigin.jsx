import React, { useState } from 'react'

const Sigin = () => {

    const [signin, setSignin] = useState({
        Email : "",
        Password : ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setSignin((prevsignin) => ({
            ...prevsignin,
            [name] : value
            
        }))
    }
    const handleClick = () =>{
      
        
        setSignin({
            Email: "",
            Password : ""
        })
    }


  return (
    <div>
        <h1>Sign In</h1>
        <div>
            <label >
                Email : <input type="email" name='Email' onChange={handleChange} value={signin.Email} placeholder='Enter Email'/>

            </label>
        </div>
        <div>
            <label>
                Password :
                <input type="password" name='Password' onChange={handleChange} value={signin.Password} placeholder='Enter Password'/>
            </label>
        </div>
        <button onClick={handleClick}>Clear</button>
        <h3>Sign in Information</h3>

        <p>Email Address : {signin.Email}</p>

        <p>Password : {signin.Password}</p>
    </div>

    

  )
}

export default Sigin