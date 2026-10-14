import React, { useState } from 'react'

const Profile = () => {
    const [Profile, setProfile] = useState(
        {
            name : "",
            age : ""
        }
    )
    const handleChange = (e) => {

        const {name, value} = e.target;


        setProfile((prevProfile) => ({
            ...prevProfile,
             [name]: value,
        }))
    }


  return (
    <div>
        <h1>User Profile</h1>
        <div>
            <label>
                Name:
                <input type="text" name='name' value={Profile.name} onChange={handleChange} placeholder='Write name' />
            </label>
        </div>
        <div>
            <label>
                Age:
                <input type="number" name='age' value={Profile.age} onChange={handleChange} placeholder='Add Age'/>
            </label>
        </div>
        <h3>Profile Informations</h3>

        <p>Name : {Profile.name}</p>

        <p>Age : {Profile.age}</p>
    </div>
  )
}

export default Profile