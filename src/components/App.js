import React from 'react';
import {Link} from 'react-router-dom';
import Home from './Home';

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Link start</h1>
                <ul role="nav">
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                </ul>
                {this.props.children || <Home/>}
            </div>
        );   
    }   
}

export default App;
