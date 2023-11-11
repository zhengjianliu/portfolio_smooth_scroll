import React from "react";
const Page = ({ snapped, Child, id }) => {
    return (
        <div name={id} id={id} className={`page ${snapped ? "snapped" : ""}`}>
            <Child snapped={snapped} />
        </div>
    );
};

export default Page;
