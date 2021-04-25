import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="row bg-indigo-900 sticky-top justify-content-center rounded-3">
            <NavLink className="btn col-md-2 btn-orange m-2" activeClassName="btn-orange" exact to='/'>Home</NavLink>
            <NavLink className="btn col-md-2 btn-orange m-2" activeClassName="btn-orange" exact to='/chirps'>All Chirps</NavLink>
            <NavLink className="btn col-md-2 btn-orange m-2" activeClassName="btn-orange" exact to='/create'>Create a new chirp!</NavLink>
        </div>
    )
}

export default Navbar;