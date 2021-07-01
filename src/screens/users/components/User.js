import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { userIcon,close} from '../../../assets'
const User=(props)=>{
    return (
        <Card style={{ width: '18rem',marginTop:10 }} className="user-card">
            <img src={close} alt="" className="user-card__delete-icon" onClick={props.delete}/>
            <Card.Img variant="top" src={userIcon} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.role}
                </Card.Text>
                <Button variant="primary" onClick={props.edit}>Edit</Button>
            </Card.Body>
        </Card>
    )
}
export default User;