import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
    render() {
        const { active } = this.props;

        return (
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
                <a className={`nav-link ${active === 'movies'? 'navlink-active' : ''}`} href="/movies">Top 10 Movies</a>
                <a className={`nav-link ${active === 'shows'? 'navlink-active' : ''}`} href="/shows">TV Shows</a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        );
    }
}

export default Navbar;
