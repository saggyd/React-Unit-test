import React from 'react';

function FormResult(props) {
    return (
        <div className="emp-result">
            <hr />
            <h4>Result</h4>
            <p>{props.value.fname}</p>
            <p>{props.value.lname}</p>
            <p>{props.value.email}</p>
        </div>
    );
}

export default FormResult;