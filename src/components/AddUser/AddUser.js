import React, { useRef } from 'react';

const AddUser = () => {

    const nameRef = useRef()
    const emailRef = useRef()

    const handelAddUser = (e) => {
        const name = nameRef.current.value
        const email = emailRef.current.value

        const newUser = {name, email}

        fetch('http://localhost:600/users', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Successfully added the user')
                e.target.reset();
            }
        })
        

        e.preventDefault();
    }


    return (
        <div>
            <h2>This is Add User</h2>

            <form onSubmit={handelAddUser}>
                <input type="text" ref={nameRef} />
                <input type="email" ref={emailRef} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;