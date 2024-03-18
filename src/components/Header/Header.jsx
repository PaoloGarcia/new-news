import React from "react";

function Header({ title = "New News" }) {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#!" className="brand-logo center">{title}</a>
        </nav>
    );
}

export default Header;
