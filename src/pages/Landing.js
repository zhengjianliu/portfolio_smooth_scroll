import React, { useEffect } from "react";
import Background from "../components/Background";
import Typewriter from "../components/Typer";
const Landing = ({snapped}) =>{
    return(
        <>
            <div className="body">
                <div className={`content ${snapped?'snapped':''}`}>
                    <h3>Hello World!</h3>
                    <Typewriter titles={["ZHENGJIAN LIU",'a Full Stack Developer', 'a Problem Solver','Ready To Work With You']}/>
                </div>
            </div>
            <Background/>
        </>
    )
}

export default Landing;