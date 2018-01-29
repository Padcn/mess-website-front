import React from 'react';

class Notes extends React.Component{
    
    render(){
        return (
            <div>
                <ul className="note-list">
                    <li>Notes one ... test test...</li>
                    <li>Notes one ... test test...</li>
                    <li>Notes one ... test test...</li>
                    <li>Notes one ... test test...</li>
                    <li>Notes one ... test test...</li>
                    <li>Notes one ... test test...</li>
                    <li>Notes one ... test test...</li>
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
