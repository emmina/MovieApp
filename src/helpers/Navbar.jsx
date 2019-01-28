import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {

    onSearch(query) {
        this.props.onSearch(query.target.value)
    }

    render() {
        const { active } = this.props;

        return (
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
                <a className={`nav-link ${active === 'movies'? 'navlink-active' : ''}`} href="/movies">Top 10 Movies</a>
                <a className={`nav-link ${active === 'shows'? 'navlink-active' : ''}`} href="/shows">TV Shows</a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => this.onSearch(e)} />
                </form>
            </nav>
        );
    }
}

export default Navbar;
