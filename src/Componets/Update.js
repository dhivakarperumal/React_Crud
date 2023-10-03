import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../Constant/AIP_URL';
import {Form,Button} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

function Update(){
    const[firstName,setFirstName]=useState('');
    const[email,setEmail]=useState('');
    const[id,setId]=useState("");
    const navigate=useNavigate("")

const updateuser = async () =>{
    await axios.put(API_URL +id,{
        firstName,
        email,
    })
    navigate('/read')
   
  
}
useEffect(()=>{
    setId(localStorage.getItem("id"))
    setFirstName(localStorage.getItem("firstName"))
    setEmail(localStorage.getItem("email"))
},[])


  return (
    <div className='form'>
        <Form>
            <Form.Field className='head'>
                <label>Name</label>
                <input type='text'  value={firstName} placeholder='Enter Name' onChange={e=>setFirstName(e.target.value)} />
            </Form.Field>

            <Form.Field>
                <label>Email</label>
                <input type='email' value={email} placeholder='Enter Email' onChange={e=>setEmail(e.target.value)} />
            </Form.Field>

            <div className='btn'>
                <Button onClick={updateuser}>Update</Button>
            </div>

        </Form>
    </div>
  )
}

export default Update