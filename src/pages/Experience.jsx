import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import Navbar from '../components/Navbar';
import  Footer  from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';


function Experience() {
    return (
    <>
    <Navbar/>
    <div className='wrapper'>
        <h1>Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
            date="2023 - 2024"
        iconStyle={{ background: '#fff', color: '#e95d28' }}
    icon={<IoLogoHtml5 />}
>
    <h3 className="vertical-timeline-element-title">HTML</h3>
        <h4 className="vertical-timeline-element-subtitle">(Hypertext Markup Language)</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi optio, illum tempora non reprehenderit provident soluta quo culpa. Cum quasi dolorem voluptatum eveniet enim earum inventore quaerat id sunt sequi?</p>
                </VerticalTimelineElement>
                    <VerticalTimelineElement
                className="vertical-timeline-element--work"
            date="2023 - 2024"
        iconStyle={{ background: '#fff', color: '#129cd8' }}
    icon={<FaCss3Alt />}
>
    <h3 className="vertical-timeline-element-title">CSS</h3>
        <h4 className="vertical-timeline-element-subtitle">Cascading Style Sheets </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, labore? Dolorem nam, consequuntur sequi sint reprehenderit excepturi dicta expedita repellendus fugiat minus amet consectetur vitae at saepe culpa enim eos?</p>
                </VerticalTimelineElement>
                    <VerticalTimelineElement
                className="vertical-timeline-element--work"
            date="2023 - 2024"
        iconStyle={{ background: '#fff', color: '#5ed3f3' }}
    icon={< IoLogoReact/>}
>
    <h3 className="vertical-timeline-element-title">React</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia explicabo quos molestias eum nulla, ut harum esse ducimus aliquam neque sint nobis deserunt, dolore enim, ullam hic repellat vero nesciunt?</p>
                </VerticalTimelineElement>
                    <VerticalTimelineElement
                className="vertical-timeline-element--work"
            date="2023 - 2024"
        iconStyle={{ background: '#fff', color: '#7952b3' }}
    icon={< FaBootstrap/>}
>
    <h3 className="vertical-timeline-element-title">Bootstrap</h3>
        <h4 className="vertical-timeline-element-subtitle">salah satu framework CSS yang digunakan khusus untuk suatu pengembangan front-end website</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, minus molestiae? At ex iste architecto, iusto veritatis vero eos, tempora corporis doloribus eligendi minima natus sed mollitia laboriosam? Unde, pariatur.</p>
                </VerticalTimelineElement>
                    <VerticalTimelineElement
                className="vertical-timeline-element--work"
            date="2023 - 2024"
        iconStyle={{ background: '#fff', color: '#366c9c' }}
    icon={< FaPython/>}
>
    <h3 className="vertical-timeline-element-title">Python</h3>
        <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde repellat ad facere quasi esse fugit exercitationem nulla amet. Modi tempora molestiae nam facilis nemo dolore porro temporibus aperiam odit nesciunt.</p>
    </VerticalTimelineElement>
</VerticalTimeline>

    </div>
    <Footer/>
    <ScrollToTop/>
    </>
    )
}

export default Experience