import Bar from "./Bar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from 'react';

function Background() {
    const nightmode = useSelector((state) => state.theme.isDark);
    const [refresh,setRefresh] = useState(false);
    const [expand, setExpand] = useState(true);
    const config = {
        n: 150,
        timer: 120
    }
    const renderBars = () =>{
        return [...Array(config.n)].map((e,i)=>{
            return <Bar key={i} nightmode={nightmode} refresh={refresh}/>
        })
    }

    useEffect(()=>{
        // setTimeout(() => {
        //     setExpand(true)
        // }, 300);
    },[])

    return (
        <div className={`backgroundContainer`}>
            <div id="Background" className={`${expand?'expand':''}`}>
                {renderBars()}
            </div>
        </div>
    );
}

export default Background;