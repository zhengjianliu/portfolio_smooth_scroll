import React from "react";

const Page = ({snapped, Child}) =>{
    return(
        <div className={`page ${snapped ? 'snapped' : ''}`}><Child snapped={snapped}/></div>
    )
}

export default Page;