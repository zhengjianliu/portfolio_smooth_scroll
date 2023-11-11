import { useState, useEffect } from "react";
import { generateRandomColor, rangeGenerator } from "../util/util";
import React from "react";

const Bar = ({ nightmode, refresh }) => {
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [color, setColor] = useState();
    const moveSpeed = 1;
    const range = {
        max: 100,
        min: 0,
    };

    useEffect(() => {
        setColor(generateRandomColor());
    }, [refresh]);

    useEffect(() => {
        setX(rangeGenerator(range.max, range.min));
        setY(rangeGenerator(range.max, range.min));
    }, [refresh]);

    const getRandomColor = () => {
        return "linear-gradient(to top, " + getColor() + ", transparent)";
    };

    const getColor = () => {
        return !nightmode ? color : "rgba(255, 255, 255, 0.3)";
    };

    return (
        <div
            className={`Bar ${nightmode ? "night" : ""}`}
            style={{
                backgroundImage: getRandomColor(),
                bottom: y,
                left: x,
                transition: moveSpeed + "s",
                // borderBottom: "15px solid " + color
            }}
        ></div>
    );
}

export default Bar;
