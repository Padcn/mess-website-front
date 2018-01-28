import React from 'react';
import {NavLink } from 'react-router-dom';

 
class Home extends  React.Component{
    render(){
        return (
            <div>
                <ul className="nav-list">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/notes" >Articles</NavLink></li>
                    <li><NavLink to="/countdown" >MessThing</NavLink></li>
                    <li>About</li>
                </ul>
            </div>
        );    
    }   
}

export default Home;
