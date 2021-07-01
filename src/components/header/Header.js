/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { logo } from '../../assets';
import { useSelector,useDispatch } from 'react-redux';
import { setLogin } from "../../redux/actions/actions";
import {Link} from 'react-router-dom'
import routes from '../../constants/routes';
import { withRouter } from "react-router";

const Header = (props) => {
   const dispatch = useDispatch();
   const isLogin = useSelector(state => state.data.isLogin);
   const logOut=()=>{
      localStorage.clear();
      dispatch(setLogin(false));
      //props.history.push('/')
   }
   return (
      <header>
         <div className="d-flex justify-content-between">
            <Link to={routes.HOME}>
               <img src={logo} alt='' />
            </Link>
            {
               isLogin && (
                  <ul className="d-flex justify-content-between">
                     <li><Link to={routes.USERS}>users</Link></li>
                     <li><Link to={routes.LIST}>to do list</Link></li>
                     <li><Link to={routes.PROFILE}>{localStorage.getItem('name')}</Link></li>
                     <li onClick={logOut}>LogOut</li>
                  </ul>
               )
            }
         </div>
      </header>)
}
export default withRouter(Header);