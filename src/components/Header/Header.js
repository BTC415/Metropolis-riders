import React from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => { 
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();

    console.log(loggedInUser);
    const handleClick = () => {
        history.push("/login");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark pt-3">
                <div className="container">
                    <Link to="/home" className="navbar-brand font-weight-bold">
                        Metropolis Riders
                    </Link>
                    <button className="navbar-toggler nav-icon" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/home" className="nav-link font-weight">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/destination" className="nav-link font-weight">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link font-weight" >Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link font-weight">Contact</Link>
                            </li>
                            <li>
                                {
                                    loggedInUser.email ? <p className="nav-link user-name">{loggedInUser.name == null ? loggedInUser.email : loggedInUser.name}</p>
                                    : <button onClick={handleClick} className="btn login-btn btn-style">Login</button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;