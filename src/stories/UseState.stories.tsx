import React, {useState} from "react";


export default {
    title: 'useState demo'
}

function generateData() {
    //difficult counting
    return 2874930484738
}

export const Example1 = () => {

    const [counter, setCounter] = useState(generateData) //[2874930484738, function(newValue) {}]


    return <>
        <button onClick={() => setCounter(state => counter + 1)}>+</button>
        {counter}
    </>
}