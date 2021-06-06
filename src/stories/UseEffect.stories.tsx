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

export const SetIntervalExample = () => {
    console.log("SetIntervalExample is here")

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect is here")
        const intervalId = setInterval(() => {
            console.log("setInterval" + counter)
            setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
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

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("ResetEffectExample")

    useEffect(() => {
        console.log("Effect occured")

        return () => {
            console.log("reset effect " + counter)
        }
    }, [counter])

    return <>
        Hello, counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>

}

export const KeysTrackerExample = () => {
    const [text, setText] = useState("")

    console.log("KeysTrackerExample")

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])

    return <>
        Typed text: {text}
    </>

}

export const SetTimeoutExample = () => {
    const [text, setText] = useState("")

    console.log("SetTimeoutExample")

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setText("3 seconds passed")
        }, 3000)
        return () => {
            clearTimeout(timeoutID)
        }

    }, [text])

    return <>
        text: {text}
    </>

}