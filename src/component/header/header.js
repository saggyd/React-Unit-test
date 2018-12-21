import React, { Component } from 'react';
import './header.css';

import LateralPanel from '../lateralPanel/lateralPanel';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse normal" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">React Component Repository</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">

                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><a href="#">Home</a>
                        </li>
                        <li><a href="#about">About</a>
                        </li>
                        <li><a href="#contact" data-toggle="dropdown">Contact</a>
                        </li>
                        <li>
                            <div className="btn-group">
                               <LateralPanel /> 
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;