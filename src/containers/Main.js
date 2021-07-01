import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import {
    Home,
    Login,
    Register,
    Users,
    ToDoList,
    Profile
} from '../screens';
import routes from '../constants/routes';
import { useSelector } from 'react-redux';

const Main = withRouter((props) => {
    const isLogin = useSelector(state => state.data.isLogin)
    return (
        <Switch>
            <Route component={isLogin ? Home : Login} path={routes.LOGIN} exact />
            <Route component={Register} path={routes.REGISTER} exact />
            <Route path={routes.HOME} exact>
                {!isLogin ? <Redirect to={routes.LOGIN} /> : <Home />}
            </Route>
            <Route path={routes.USERS} exact>
                {!isLogin ? <Redirect to={routes.LOGIN} /> : <Users />}
            </Route>
            <Route path={routes.LIST} exact>
                {!isLogin ? <Redirect to={routes.LOGIN} /> : <ToDoList />}
            </Route>
            <Route path={routes.PROFILE} exact>
                {!isLogin ? <Redirect to={routes.LOGIN} /> : <Profile />}
            </Route>
        </Switch>
    );
});

export default Main;
