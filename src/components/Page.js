import React from "react";
const Page = ({ snapped, Child, id }) => {
    return (
        <div name={id} id={id} className={`page ${snapped ? "snapped" : ""}`}>
            <div className="snappedBody">
                <Child snapped={snapped} id={id}/>
            </div>
        </div>
    );
};

export default Page;
