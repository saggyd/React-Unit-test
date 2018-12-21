import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default sidebar" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">My Profile</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                        <li className="active"><a href="#">About Me<span className="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a></li>
                        <li><a href="#">Libraries<span className="pull-right hidden-xs showopacity glyphicon glyphicon-file"></span></a></li>
                        <li><a href="#">Settings<span className="pull-right hidden-xs showopacity glyphicon glyphicon-cog"></span></a></li>
                        <li><a href="#">Notifications<span className="pull-right hidden-xs showopacity glyphicon glyphicon-bell"></span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Sidebar;