import React, { useState } from "react";
import { Link } from "react-scroll";

const Navigator = ({ currentPage }) => {
    const [isExpand, setIsExpand] = useState(false);
    const pages = ["Landing", "About", "Projects", "Blogs", "Footer"];
    const renderTabs = () => {
        return pages.map((page, i) => {
            return (
                <Link
                    key={i}
                    to={page}
                    smooth={true}
                    duration={500}
                    className={`${isExpand ? "tab" : ""} ${
                        i === currentPage ? "selected" : ""
                    }`}
                    containerId="scroll-container"
                    onClick={() => clickHandle(page)}
                >
                    <span>{isExpand ? page : ""}</span>
                </Link>
            );
        });
    };
    const clickHandle = (tab) => {
        setIsExpand(!isExpand);
        if (isExpand) {
            console.log(tab);
            unsetScrollToSnap()
        }
    };

    const unsetScrollToSnap = () => {
        let scrollBox = document.getElementById("scroll-container")
        if(scrollBox){
            scrollBox.style.scrollSnapType = 'unset'
            setTimeout(() => {
                scrollBox.style.scrollSnapType = 'y mandatory'
            }, 500);
        }
    }
    return (
        <div
            id="Navigator"
            className={`${isExpand ? "expand" : "mini"}`}
            onClick={() => setIsExpand(!isExpand)}
        >
            <ul>{renderTabs()}</ul>
        </div>
    );
};

export default Navigator;
