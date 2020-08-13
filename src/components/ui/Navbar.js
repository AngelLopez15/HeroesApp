import React from 'react'
import {Link} from 'react-router-dom'

import img from '../../superheroe.svg'

export const Navbar = () => {

    // Funciones para hacer responsive el navbar
    const hidden = () =>{
        const menu = document.querySelector('#navbarSupportedContent');
        menu.classList.toggle('none')
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><img src={img} alt="logo" className="logo" />HeroesApp</Link>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false"
            onClick={hidden} 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/serch">Buscar</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/marvel">Marvel</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dc">DC</Link>
                </li>
            </ul>
            <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">Logout</Link>
        </div>
    </nav>
    )
}

