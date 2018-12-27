import React, { Component } from 'react';
import Employee from '../component/employee/employee';
import Sidebar from '../component/sidebar/sidebar';
import './Outer.css';

class Outer extends Component {
    render() {
        return (
            <div>
                <div className="outerWrapper">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-7">
                            <Employee />
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Outer;