import React from 'react';
import {Link} from 'react-router-dom';

class Countdown extends React.Component{

    constructor(props){
        super(props);
        let dateCount=new Date('2018-02-16');
        let differTime=(dateCount-(new Date()))/1000;
        this.state={
            days:Math.floor(differTime/60/60/24),
            hours:Math.floor((differTime%(60*60*24))/60/60),
            minutes:Math.floor((differTime%(60*60))/60),
            seconds:Math.floor(differTime%60),
        };
    }
    componentDidMount(){
        clearInterval(this.interval);
        let dateCount=new Date('2018-02-16');
        setInterval(
            ()=>{
                let differTime=(dateCount-(new Date()))/1000;
                this.setState({
                    seconds:Math.floor(differTime%60)
                });
                if(59 === this.state.seconds){
                    this.setState({
                        minutes:Math.floor((differTime%(60*60))/60)
                    });
                }
                if(59 === this.state.minutes){
                    this.setState({
                        hours:Math.floor((differTime%(60*60*24))/60/60) 
                    });
                }
                if(23 === this.state.hours){
                    this.setState({
                        days:Math.floor(differTime/60/60/24)
                    });
                }
          }
         ,1000   
        ); 
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        
        return (
            <div className="counter-div">
                <p>这是一个认真的春节倒计时:</p>
                <hr/>
                <div className="counter-div-timer">
                    <ul>
                        <li>
                            <div>{this.state.days<10?'0'+this.state.days:this.state.days}</div>
                            <div className="counter-tip">DAYS</div>
                        </li>
                        <li>:</li>
                        <li>
                            <div>{this.state.hours<10?'0'+this.state.hours:this.state.hours}</div>
                            <div className="counter-tip">HRS</div>
                        </li>
                        <li>:</li>
                        <li>
                            <div>{this.state.minutes<10?'0'+this.state.minutes:this.state.minutes}</div>
                            <div className="counter-tip">MIN</div>
                        </li>
                        <li>:</li>
                        <li>
                            <div>{this.state.seconds<10?'0'+this.state.seconds:this.state.seconds}</div>
                            <div className="counter-tip">SEC</div>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="explore-more-link">Explore More</Link>
            </div>
        );
    }   
}

export default Countdown;
