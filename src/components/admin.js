import React from 'react';
import { useEffect, useState } from "react"
import fetch from 'cross-fetch';
import config from '../config';
import './login/css/login.css';

function Admin(props) {
    let users = [];
    const token = localStorage.getItem('token');
    const [Users, SetUsers] = useState(users);
    const bearerToken = 'Bearer ' + token;
        fetch(config['server-domain'] + 'users/user-list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': bearerToken
            }
        }).then(
            response => response.json()
        ).then(json => {
            users = json;
            SetUsers(json);
        });
    

    
    return (
        <div>
        <table class="table table-striped">

            <tr class="bg-info">
                <th>Username</th>
                <th>Email</th>
                <th>FullName</th>
            </tr>
            {Users.map((user, index) => (
                <tr>
                    <th className='input-file'>{user.username}</th>
                    <th className='input-file'>{user.email}</th>
                    <th className='input-file'>{user.fullname}</th>
                </tr>
            ))}
            </table>
        </div>
    )
    
}


export default Admin;