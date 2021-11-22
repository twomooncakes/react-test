import React, { useState, useEffect } from 'react';
import css from './Task6.module.css';

function Task6() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className={css.container}>
            <h3>Task 6</h3>
            <table>
                <thead>
                    <tr className={css.header}>
                        <th>name</th>
                        <th>email</th>
                        <th>address</th>
                        <th>phone</th>
                        <th>company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 && users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{`${user.address.street}, ${user.address.city}`}</td>
                                <td>{user.phone}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Task6;

/* Task 6
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
