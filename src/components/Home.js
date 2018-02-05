import React from 'react';
import {NavLink } from 'react-router-dom';
import store from '../stores/store';
 
class Home extends  React.Component{
    render(){
        let s=store.getState();
        return (
            <div>
                <ul className="nav-list">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/notes" >Articles</NavLink></li>
                    <li><NavLink to="/countdown">MessThing</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                <button onClick={()=>store.dispatch({type:'NEXT_PAGE'})}>+++</button>
                {s}
            </div>
        );    
    }   
}

export default Home;
