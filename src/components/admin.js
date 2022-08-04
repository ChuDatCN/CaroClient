import React from 'react';
import { useEffect, useState } from "react"
import fetch from 'cross-fetch';
import config from '../config';
import './login/css/login.css';

function Admin(props) {

    const bearerToken = 'Bearer ' + token;
        fetch(config['https://umbraco-test.chinhquyendientu.vn/umbraco/api/Tintucnoibo/GetChilrenOfMenusFromNode?nodeId=1097']
        ).then(response){
        console.log(response);
        };
    

    
    return (
        <div>
        </div>
    )
    
}


export default Admin;