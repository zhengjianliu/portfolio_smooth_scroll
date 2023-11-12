import React from "react";

const PageMark = ({name, snapped}) => {
    return (
        <div className={`pageMark ${snapped ? "snapped" : ""}`}>
            <span></span>
            <p>{name}</p>
        </div>
    );
};

export default PageMark;
