import react from 'react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const UpdateUser = () => {
    const [user, setUser] = useState({});
    const {id} = useParams();
 

    useEffect(() =>{
        const url = `http://localhost:600/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setUser(data))
    }, [])

    const handelName = (e) => {
        const updateName = e.target.value;
        const updateUser = {name:updateName, email:user.email}
        setUser(updateUser)
    }
    const handelEmail = (e) => {
        const updateEmail = e.target.value;
        const updateUser = {name: user.name, email:updateEmail}
        setUser(updateUser)
    }
    const handelUpdateUser = (e) => {

        const url = `http://localhost:600/users/${id}`
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
       if(data.modifiedCount>0){
           alert('Update Successfully')
       }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Update : {user.name} {user.email}</h2>
            <p>{id}</p>
            <form onSubmit={handelUpdateUser}>
           <input type="text" onChange={handelName} value={user.name || ''} />
           <input type="email" onChange={handelEmail} value={user.email || ''} />
           <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;