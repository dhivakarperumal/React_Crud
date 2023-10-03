import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../Constant/AIP_URL';
import { Button, Table } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Read = () => {
    const[apiData,setApiDatas]=useState([]);
    const navigates=useNavigate();


    const updateUser = ({firstName ,email,id}) =>{
        localStorage.setItem("id",id)
        localStorage.setItem("firstName",firstName)
        localStorage.setItem("email",email)

        navigates("/update")
    }
 const deleteUser = async (id) =>{

    await axios.delete(API_URL +id)

    callGetApi()
 }
 const callGetApi = async ()=>{
    const resp=await axios.get(API_URL);
    setApiDatas(resp.data)
 }
 useEffect(()=>{

    callGetApi();

 },[])


  return (
    <Container>
        <Row>
        <Table singleLine>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                apiData.map(data =>(
                    <Table.Row key={data.id}>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.email}</Table.Cell>
                        <Table.Cell><Button onClick={()=>deleteUser(data.id)}>Delete</Button></Table.Cell>
                        <Table.Cell><Button onClick={()=>updateUser(data)}>Update</Button></Table.Cell>
                    </Table.Row>
                ))
            }
        </Table.Body>
    </Table>
        </Row>
    </Container>
  )
}

export default Read