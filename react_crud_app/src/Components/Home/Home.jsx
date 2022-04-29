import React from 'react';
import "./Home.css";
import { useContext } from 'react';
import {Button, Table} from 'react-bootstrap';
import { UserContext } from '../UserContext/UserContext';
import {Link} from 'react-router-dom';

const Home = () => {
     const [users, setUsers] = useContext(UserContext);
     
    return (
        <div>
            <Button variant="primary">Create User</Button>

 <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Position</th>
      <th>Salary</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.map(user => 
            <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.position}</td>
      <td>{user.salary}</td>
      <td>
      <Button className='action_btn' variant="success">Read</Button>
      <Button className='action_btn' variant="info">Edit</Button>
      <a href={"/delete/"+user.id} >
      <Button className='action_btn' variant="danger">Delete</Button>
      </a>
      </td>
    </tr>
            )
      }
    
  </tbody>
</Table>
        </div>
    );
};

export default Home;