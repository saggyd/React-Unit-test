import React from 'react';

function TextBox(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input type="text" name={props.name}/>
        </div>
    );
}
export default TextBox;
