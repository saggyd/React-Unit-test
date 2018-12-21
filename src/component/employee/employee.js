import React, { Component } from 'react';
import FormResult from '../result/formResult';
import TextBox from '../FormComponent/textbox';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:'',
            lname: '',
            email: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({
            fname:event.target.fname.value,
            lname: event.target.lname.value,
            email: event.target.email.value
        });
    }

    componentDidMount() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <TextBox label='First Name' name='fname'/>
                    <TextBox label='Last Name' name='lname'/>
                    <TextBox label='Email' name='email'/>
                    <button>Submit</button>
                </form>
                <FormResult  value ={this.state} />
            </div>
        );
    }
}

export default Employee;