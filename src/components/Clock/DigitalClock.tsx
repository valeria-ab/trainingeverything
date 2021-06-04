import React from "react";
import {DigitalPropsType} from "./Clock";

const get2digitsString = (number: number) => number < 10 ? "0" + number : number

export const DigitalClock: React.FC<DigitalPropsType> = (props) => {
    const hours = props.date.getHours()
    const minutes = props.date.getMinutes()
    const seconds = props.date.getSeconds()
    return <>
        <span>{get2digitsString(hours)}</span>
        :
        <span>{get2digitsString(minutes)}</span>
        :
        <span>{get2digitsString(seconds)}</span>
    </>
}