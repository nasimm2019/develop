import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Helmet from 'react-helmet';
import { TITLE } from '../../constants/constants';
import Card from './components/User';
import UserForm from './components/UserForm';
import { Spinner, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from "../../redux/actions/actions";



const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.data.users);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState({name:'',role:'',id:0});
  const [isEdit, setIsEdit] = useState(false);
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1300);
  }, []);
  const handleSave = (name, role) => {
    let usersList = users;
    if(isEdit){
      let selectedObj = usersList.find((item)=>item.id===selectedUser.id)
      selectedObj.name=name;
      selectedObj.role=role;

    }
    else{
      let getLastId = usersList[usersList.length - 1];
      let userObj = {
        name: name,
        role: role,
        id: parseInt(getLastId.id, 10) + 1
      }
      usersList.push(userObj);
    }
   
 
    dispatch(addUser(usersList));
    setShow(false)

  }
  const handleDelete = (id) => {
    let result = users.filter((element) => element.id !== id);
    dispatch(removeUser(result));
  }
  const handleEdit=(user)=>{
    setSelectedUser(user)
    setShow(true)
    setIsEdit(true)
  }

  const onClickAddBtn=()=>{
    setShow(true)
    setIsEdit(false)
    setSelectedUser(null)
  }

 
  console.log('selectedUser', selectedUser)
  return (
    <main className="container home">
      <UserForm
        show={show}
        onHide={handleClose}
        onSave={handleSave}
        selectedUser={selectedUser}
        isEdit={isEdit}
        title={isEdit ? `Edit ${selectedUser.name}` : 'Add new User'}
      />
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
      <div className="d-flex justify-content-between mt-5 mb-5">
        <h1>Users List</h1>
        <Button onClick={onClickAddBtn}>Add new User</Button>
      </div>
      {
        loading ? (
          <div className="d-flex justify-content-center mt-5 mb-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <div className="row">
            {
              users.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-md-6 col-12">
                    <Card
                      name={item.name}
                      role={item.role}
                      delete={() => handleDelete(item.id)}
                      edit={() => handleEdit(item)}
                      onEdit={() => handleSave}
                    />
                  </div>
                )
              })
            }
          </div>
        )
      }

    </main>
  );
};

export default (withRouter(Users));
