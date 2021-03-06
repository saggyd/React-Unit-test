import React from 'react';

function TextBox(props) {
    return (
        <div className="form-group">
            <label>{props.label}:</label>
            <input type="text" className="form-control" id={props.name}/>
        </div>
    );
}
export default TextBox;
