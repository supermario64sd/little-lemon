import { Link } from "react-router-dom";
import React from "react";

function Nav(){
    const links=[
        "Home",
        "About",
        "Menu",
        "Reservations",
        "Order Online",
        "Log In"
    ];

    let mappedLinks= links.map(l=>{
        return (<li style={{listStyleType: "none"}}><a href="#">{l}</a></li>);
    });

    return (
        <nav>
            <ul>
                {mappedLinks}
            </ul>
        </nav>
    )
}

export default Nav;