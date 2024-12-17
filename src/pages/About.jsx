import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

function About() {
  return (
    <section id='about'>
        <div className='wrapper'>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quisquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem, dolorum quas debitis vero, dolor velit earum vitae voluptates consectetur et quia? Laborum optio esse obcaecati dicta praesentium, dolor ratione.</p>
            <h4>Programming Language & Tools</h4>
            <div className='skills'>
            <FaHtml5/>
            <FaCss3Alt/>         
            <TbBrandJavascript/>
            <FaReact/>
            <FaBootstrap/>
            
            </div>
        </div>
    </section>
  )
}

export default About
