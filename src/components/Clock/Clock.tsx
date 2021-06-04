import React, {useEffect, useState} from 'react';
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";


type PropsType = {
    mode?: "analog" | "digital"
}
export type DigitalPropsType = {
    date: Date
}


export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())



    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])

    let view;

    switch (props.mode) {
        case "analog":
           view = <AnalogClock date={date} />
            break
     default:
           view =  view = <DigitalClock date={date} />
    }

    return <div>
        {view}
    </div>
}



