import React, {useCallback, useEffect, useMemo, useState} from "react";
import {log} from "util";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("useEffect only first render (analog componentDidMount)")
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("useEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}


//асинхронная логика
//утечка памяти
export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample is here")

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect is here")
        setInterval(() => {
            console.log("setInterval" + counter)
            setCounter(state => state + 1)
        }, 1000)


    }, [])


    return <>
        Hello, counter: {counter}

    </>
}

//утечка памяти
export const ClockDemo = () => {
    console.log("ClockDemo is here")
    const date = new Date()
    let seconds = date.getSeconds()

    const [counter, setCounter] = useState<number>(seconds)

    const intervalId = useEffect(() => {
        console.log("useEffect is here")
        setInterval(() => {

            console.log("setInterval" + counter)
            setCounter(state => state + 1)
        }, 1000);


    }, [])


    return <>
        {date.getHours()}:{date.getMinutes()}:{seconds}

    </>
}