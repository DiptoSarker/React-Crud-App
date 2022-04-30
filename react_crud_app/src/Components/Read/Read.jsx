import React, {useContext} from 'react';
import { UserContext } from '../UserContext/UserContext';
import { useParams } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Read.css'

const Read = () => {
    const [users, setUsers] = useContext(UserContext); 
    const { id } = useParams();
  
    const user = users.filter((user) => user.id == id);
    console.log(user);

    return (
        <div className='read'>
            <h1>ID: {user[0].id} </h1>
            <h1>Name: {user[0].name} </h1>
            <h1>Position: {user[0].position} </h1>
            <h1>Salary: {user[0].salary} </h1>
            <Link to="/">
            <Button className="delete__btn" variant="info">Back to Home</Button>
                </Link>
        </div>
    );
};

export default Read;