import React, {useContext} from "react";
import './Delete.css';
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import {Button, Modal} from 'react-bootstrap';

const Delete = () => {
    const [users, setUsers] = useContext(UserContext);
    const {id} = useParams();

    const deleteUser = (id)=>{
        const user = users.filter((user) => user.id != id);
        setUsers(user);
        console.log(user);
    }
    
    return (
        <div>
           <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Are You Sure?</Modal.Title>
  </Modal.Header>

  <Modal.Footer>
  <a href={"/"} >  
    <Button className="delete_btn" variant="info">
        Cancel
    </Button>
    <Button onClick={() => deleteUser(id)} variant="danger">
        Delete
    </Button>
  </a>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Delete;