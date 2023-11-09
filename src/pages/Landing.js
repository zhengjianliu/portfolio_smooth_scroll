import React from "react";
const Landing = ({snapped}) =>{
    console.log(snapped)
    return(
        <div id="Landing" className={`${snapped?'snapped':''}`}>
            <h1>Here is Landing Page</h1>
        </div>
    )
}

export default Landing;