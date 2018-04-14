import React from "react";
import { Navbar } from 'react-bootstrap';
import "./nav.css";

const Nav = props => (
    // <nav className='navbar justify-content-center'>
    //     <ul>
    //         <li className='brand nav-link'>
    //             <h1>Clicky Game</h1>
    //         </li>
    //         <li className='nav-link'>
    //             {props.children}
    //         </li>
    //     </ul>
    // </nav>

    <Navbar>
        <Navbar.Text className="name col-md-8">
            Clicky Game
        </Navbar.Text>
        <Navbar.Text className="scores col-md-4">
            {props.children}
        </Navbar.Text>
    </Navbar>
);

export default Nav;
