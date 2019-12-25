import React from 'react';
import { NavLink } from "react-router-dom";


export async function registration(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const login = e.target.elements.login.value;
    const password = e.target.elements.password.value;
    const password2 = e.target.elements.password2.value;
    console.log("111");
    const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/users/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: `{\"new_nickname\":\"${name}\", \"new_login\":\"${login}\", \"new_password\": \"${password}\", \"new_repeat_password\": \"${password2}\"}`
    });
    const data = await api_url.json();
    console.log(data);
    if (data) {
        setCookie('session', data.session, 30);
        window.location.assign('/page');
    }
}

function setCookie(s, session, minutes) {
    var d = new Date();
    d.setTime(d.getTime() + (minutes * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = s + "=" + session + "; " + expires;
}

export async function login(e) {
    e.preventDefault();
    const login = e.target.elements.login.value;
    const password = e.target.elements.password.value;
    const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/users/authorization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: `{\"login\":\"${login}\", \"password\": \"${password}\"}`
    });
    const data = await api_url.json();
    console.log(data);
    if (data) {
        setCookie('session', data.session, 30);
        window.location.assign('/page');
    }
}