import React, { Component } from 'react';
import './lateralPanel.css';

class LateralPanel extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                Login Btn <span className="caret"></span>
                </button>
                <ul className="dropdown-menu popUp">
                    <li>
                        <div className="input-group input-group-sm inputField">
                            <span className="input-group-addon" id="sizing-addon3"></span>
                            <input type="text" className="form-control" placeholder="email"/>
                        </div>
                    </li>
                    <li>
                        <div className="input-group input-group-sm inputField">
                            <span className="input-group-addon" id="sizing-addon3"></span>
                            <input type="text" className="form-control" placeholder="Password"/>
                        </div>
                    </li>
                    <li> 
                    <button type="button" className="btn btn-default fullW">Create Account</button>  
                    <button type="button" className="btn btn-default fullW">Sign Up</button></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Forgot Pass</a></li>
                </ul>
            </div>
        );
    }
}

export default LateralPanel;