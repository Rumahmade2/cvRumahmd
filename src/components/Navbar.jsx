import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";

function Navbar() {
    const [statusTampil, setStatusTampil] = useState('');
    function tampilMenu() {
        setStatusTampil(statusTampil === '' ? 'tampil' : '');
    }
    return (
        <nav>
            <div className="wrapper">
                <div className="logo">
                    <Link to="/"><p>Rumahmade</p></Link>
                    </div>
                <button onClick={tampilMenu}>
                    {statusTampil === '' ? <FaBarsStaggered /> : <RiCloseFill />}
                </button>
                    <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                    <ul>
                        <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
                        <li><HashLink to="/#about">About</HashLink></li>
                        <li><Link to="/experience">Experience</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
