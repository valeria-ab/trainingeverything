import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = ( props: { count: number } ) => {
    return <div>{props.count}</div>
}

const Users = ( props: { users: Array<string> } ) => {
    return <div>
        { props.users.map( (u, i) => <div key={i}>{u}</div> ) }
    </div>

}

const UsersContainer = React.memo(Users);

export const Example1 = () => {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Victor", "Valera", "Lena"])
    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={addUser}>add user</button>
    <NewMessagesCounter count={count} />
    <UsersContainer users={users} />
    </>
}