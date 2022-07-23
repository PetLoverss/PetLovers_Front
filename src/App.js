import React from 'react';
import './App.css';
import Login from '../src/pages/Login/Login';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import 'boxicons';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import CreateUser from '../src/pages/CreateUser/CreateUser';
import DataProvider from "../src/context/Dataprovider";


function App() {
    
   

    return(
        <DataProvider>
            <div className="App">
            <Router >
                <Switch>
                    <Route path="/" exact> 
                        <Login />
                    </Route>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/CreateUser">
                        <CreateUser />
                    </Route>
                    <Route path="/ChatRoom">
                        <ChatRoom />
                    </Route>
                    <Route path="/Login">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
            </div>
        </DataProvider>
    );         

};

export default App;