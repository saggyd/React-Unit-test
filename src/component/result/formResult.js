import React from 'react';

function FormResult(props) {
    return (
        <div>
            <p>Result</p>
            <p>{props.value.fname}</p>
            <p>{props.value.lname}</p>
            <p>{props.value.email}</p>
        </div>
    );
}

export default FormResult;