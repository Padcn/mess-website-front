import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import noteStore from '../stores/note/';
import * as NoteActions from '../actions/note';

let store =noteStore();
class Notes extends React.Component{
    _bind(...methods){
        methods.forEach((method)=>this[method]=this[method].bind(this));   
    }
    constructor(props){
        super(props);
    }
    show(){
        //let b=this.props.notelist.show;
        //store.dispatch(show(!b));
    }
    delete(id){
       // {nextPageNote,deleteNote}
       NoteActions
        store.dispatch(NoteActions.deleteNote(id));   
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
                                <li key={index}>
                                {item.title}Notes one ... test test...{item.id}
                                <a href="#" onClick={this.delete.bind(this,item.id)}>delete</a>
                                </li>
                            );   
                        }) 
                    }
                </ul>
                <ul className="page-split">
                   <li><a href="#" >上一页</a></li>
                   <li><a href="#">1</a></li>
                   <li><a href="#">2</a></li>
                   <li><a href="#">3</a></li>
                   <li><a href="#">4</a></li>
                   <li><a href="#">5</a></li>
                   <li><a href="#">下一页</a></li>
                </ul>
            </div>
        );   
    }
}
const mapStateToProps=function (store){
    return {
        notelist:store.notelist
    };
};

export default connect(mapStateToProps)(Notes);
