import React, { useState } from 'react';

export type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle= {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle= {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle= {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"
    }



    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true)} }>On</div>
            <div style={offStyle} onClick={ () => {setOn(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}