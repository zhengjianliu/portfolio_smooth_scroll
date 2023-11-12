import React from "react";
import library from "../library/library";
import PageMark from "../components/PageMark";
import { Fade } from "react-awesome-reveal";

const About = ({ snapped, id }) => {
    console.log(id)
    const renderSkills = () =>{
        return library.AboutPage.skillset.skills.map((skill,i)=>{
            return(
                <li key={i}>
                    <div></div>
                    <b>{skill}</b>
                </li>
            )
        })
    }
    return (
        <div className={`content ${snapped ? "snapped" : ""}`}>
            <PageMark snapped={snapped} name={id}/>
            <div className="gridBody">
                <div className="introBody">
                        <div className="greet">
                            <Fade direction={"up"} cascade duration={500}>
                                <p className="text">{library.AboutPage.intro[0]}</p>
                                <p className="text">A software engineer and problem solver.</p>
                                <p className="text">{library.AboutPage.intro[1]}</p>  
                                <p className="text">
                                    {library.AboutPage.skillset.desc}
                                    <Fade direction={"up"} cascade duration={500} delay={700} ><ul className="skills">{renderSkills()}</ul></Fade>
                                    </p>
                            </Fade >

                                
                        </div>
                </div>
                <div className="contacts">
                    <h4></h4>
                </div>
            </div>
        </div>
    );
};

export default About;
