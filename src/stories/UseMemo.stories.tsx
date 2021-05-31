import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA = 1;
    let resultB = 1;


//useMemo, сделай вычисления из стрелочной функции и запомни их, пока значение из квадратных скобок не поменяется.
// Возвращай это значение и, только если значение в скобках изменится, сделай пересчёт
    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+(e.currentTarget.value))}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const Users = (props: { users: Array<string> }) => {
    console.log("users here")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>

}

const UsersContainer = React.memo(Users);

export const HelpsToReactMemoExample = () => {
    console.log("example here")
    const [counter, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Victor", "Valera", "Lena"])

//Выкидывает массив имён, у которых есть в имени буква "а", первоначально переведя все буквы к нижнему регистру
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCount(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <UsersContainer users={newArray}/>
    </>
}
