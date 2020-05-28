import PropTypes from "prop-types";
import React from "react";

function Header({ title }) {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#!" className="brand-logo center">{title}</a>
        </nav>
    );
}

Header.defaultProps = {
    title: "New News",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
