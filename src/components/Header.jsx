import  ProfilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import '../styles/Header.css'

function Header() {
    return (
    <header>
        <div className="header-jumbotron">
            <img src={ ProfilePicture}/>
            <h3>Rumahmade</h3>
            <p>Programmer - Web - Developer</p>
            <div className='socialMedia'>
                <a href="https://www.instagram.com/mwidhiyana/"><FaInstagram /></a>
                <a href="https://www.tiktok.com/creator-center"><FaTiktok /></a>
                <a href=""><FaTwitter /></a>
                <a href=""><FaFacebook /></a>
            </div>
        </div>
    </header>
    )
}

export default Header
