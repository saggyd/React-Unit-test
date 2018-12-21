import React, { Component } from 'react';
import Employee from '../component/employee/employee';
import Sidebar from '../component/sidebar/sidebar';
import './Outer.css';

class Outer extends Component {
    render() {
        return (
            <div>
                <div className="outerWrapper">
                    <Sidebar />
                    <Employee />
                </div>
            </div>
        );
    }
}

export default Outer;