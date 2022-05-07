import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


// function App() {
const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route component={Profile}/>
                    <Route component={Dialogs}/>
                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;
