import React from "react";
import { Navbar } from 'react-bootstrap';
import "./nav.css";

const Nav = props => (


    <Navbar>
        <Navbar.Text className="name test">
            Clicky Game
        </Navbar.Text>
        <Navbar.Text className="scores test">
            {props.children}
        </Navbar.Text>
    </Navbar>
);

export default Nav;
