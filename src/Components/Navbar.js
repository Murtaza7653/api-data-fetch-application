import React from 'react';
import logo from './images/logo.jpg';
import { Link, useNavigate } from "react-router-dom";

export default function Navbar (){

    const navigate = useNavigate();

        return (
            <nav className="navbar navbar-dark navbar-expand-lg " style={{ backgroundColor: "#283618" }}>
                <div className="container-fluid">
                    <img className=' mx-2' src={logo} alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "20px" }}>
                            <li className="nav-item mx-2 my-3">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2 my-3">
                                <Link className="nav-link active" to="/about">About Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-lg btn-outline-light mx-5" type="button" onClick={()=>{navigate('/users')}}>Get Users</button>
                        </form>
                    </div>
                </div>
            </nav>
        )

}