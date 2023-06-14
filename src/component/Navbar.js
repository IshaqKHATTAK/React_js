import React from 'react'
import propTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className="nav">
            <a className="nav-link active" aria-current="page" href="/">{props.Active}</a>
            <a className="nav-link" href="/">Link</a>
            <a className="nav-link" href="/">Link</a>
            <a className="nav-link disabled">{props.about}</a>
        </nav>
    )
}

Navbar.propTypes = {
    Active: propTypes.string,
    about: propTypes.string
}

Navbar.defaultProps = {
    Active:'default active set',
    about: 'default about set'
};
