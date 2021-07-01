import React,{useState} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import {userIcon} from '../../assets'


const UserProfile=()=>{
    const [username, setUserName] = useState(localStorage.getItem('name'));
    const [email, setEmail] = useState('nasim@gmail.com');
    return (
        <Container className="profile">
            <Row>
                <Col>
                    <img src={userIcon} alt="profils pic" />
                </Col>
                <Col>
                    <h1>User Profile</h1>
                    <Form className="form">
                        <Form.Group controlId="formCategory1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={username} onChane={(e) => setUserName(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formCategory2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChane={(e) => setEmail(e.target.value)} />

                        </Form.Group>

                        <Form.Group controlId="formCategory4">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control type="file" name="profileImage" />
                        </Form.Group>

                    </Form>
                </Col>

            </Row>
        </Container>
    )
}
       
export default (UserProfile);