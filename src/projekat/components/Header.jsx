import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="new-navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="new-navbar-brand" to="/"></Link>
                <input
                    type="checkbox"
                    id="navbar-toggle"
                    className="new-navbar-toggle"
                />
                <label
                    htmlFor="navbar-toggle"
                    className="new-navbar-toggler"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </label>
                <div className="new-navbar-collapse">
                    <ul className="new-navbar-nav m-auto">
                        <li className="new-nav-item">
                            <Link
                                className="new-nav-link active text-uppercase"
                                aria-current="page"
                                to="/"
                            >
                                Početna stranica
                            </Link>
                        </li>
                        <li className="new-nav-item">
                            <Link
                                className="new-nav-link text-uppercase"
                                to="/vise"
                            >
                                Više informacija
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
