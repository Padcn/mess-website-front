import React from 'react';

class Notes extends React.Component{
    constructor(props){
        super(props);
    }
    show(){
        let b=this.props.notelist.show;
        store.dispatch(show(!b));
    }
    delete(id){
        store.dispatch(deleteNote(id));   
    }
    detail(id){
        this.props.history.push(`/detail/${id}`);   
    }
    render(){
        return (
            <div>
                <ul className="note-list">
                    {
                        this.props.notelist.notelist.map(item,index)=>{
                            return(
                                <li key={index}>{item.title}Notes one ... test test...</li>
                            );   
                        }   
                    }
                </ul>
                <ul className="page-split">
                   <li> <a href="#">上一页</a></li>
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
