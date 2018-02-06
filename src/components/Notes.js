import React from 'react';
import noteStore from '../stores/note/';
import {nextPageNote,deleteNote} from '../actions/note';

let store =noteStore();
class Notes extends React.Component{
    constructor(props){
        super(props);
    }
    show(){
        //let b=this.props.notelist.show;
        //store.dispatch(show(!b));
    }
    delete(id){
        store.dispatch(deleteNote(id));   
    }
    detail(id){
       // this.props.history.push(`/detail/${id}`);   
    }
    render(){
        //console.log(store.getState());
        //console.log(store.getState());
        let state=store.getState();
        let notelist=state.notelist;
        return (
            <div>
                <ul className="note-list">
                    {
                        notelist.map((item,index)=>{
                            return(
                                <li key={index}>{item.title}Notes one ... test test...</li>
                            );   
                        }) 
                    }
                </ul>
                <ul className="page-split">
                   <li> <a href="#" onClick="delete(1)">上一页</a></li>
                   <li><a href="#">1</a></li>
                   <li><a href="#">2</a></li>
                   <li><a href="#">3</a></li>
                   <li> <a href="#">4</a></li>
                   <li><a href="#">5</a></li>
                   <li><a href="#">下一页</a></li>
                </ul>
            </div>
        );   
    }
}

export default Notes;
