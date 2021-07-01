import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main"
import { createBrowserHistory } from "history";
import { Header } from "../components";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.scss';

const customHistory = createBrowserHistory();


const App = () => {

    return (
        <BrowserRouter customHistory={customHistory}>
            <Header/>
            <Main />
        </BrowserRouter>
    );
};

export default App;