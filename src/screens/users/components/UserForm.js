import React, { useState,useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const UserForm = (props) => {
    const { isEdit, selectedUser, show, title, onSave } = props
    const [name, setName] = useState('');
    const [role, setRoleّ] = useState('');
    useEffect(() => {
        setName(selectedUser.name)
        setRoleّ(selectedUser.role)
    }, [selectedUser]);

    const handleClick=()=>{
        if(isEdit){
            onSave(name, role)
        }
        else{
            onSave(name, role)
        }
       
        setName('')
        setRoleّ('')
    }
    return (
        <Modal show={show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter Name"

                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                        name="role"
                        value={role}
                        onChange={(e) => setRoleّ(e.target.value)}
                        type="text"
                        placeholder="Enter Rome"

                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClick}>
                    {
                        isEdit ? 'Edit Changes' : 'Save Changes'
                    }
                    
                </Button>
            </Modal.Footer>
        </Modal>


    )
}
export default UserForm;