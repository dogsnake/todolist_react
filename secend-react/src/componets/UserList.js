import React from 'react';
const User = ({user}) => {
    return (
        <div>
            <b>{user.username}</b>
            <span>{user.email}</span>
        </div>
    )
}
const UserList = () => {
    const users = [
        {
            id:1,
            username:"민준",
            email:"민준@green.com"
        },
        {
            id:2,
            username:"요한",
            email:"요한@green.com"
        },
        {
            id:3,
            username:"재훈",
            email:"재훈@green.com"
        },
    ]
    return (
        <div>
            {users.map(user=>(<User key={user.id} user={user}/>))}
        </div>
    );
};

export default UserList;