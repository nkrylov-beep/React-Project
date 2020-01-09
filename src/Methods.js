import React from 'react';
import { NavLink } from "react-router-dom";


export async function registration(e) {
    const name = e.target.elements.name.value;
    const login = e.target.elements.login.value;
    const password = e.target.elements.password.value;
    const password2 = e.target.elements.password2.value;
    if (name == "" || login == "" || password == "" || password2 == "") return "Заполните все поля"
    const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/users/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: `{\"new_nickname\":\"${name}\", \"new_login\":\"${login}\", \"new_password\": \"${password}\", \"new_repeat_password\": \"${password2}\"}`
    });
    const data = await api_url.json();
    if (data.code && data.code != 200) {
        return data.status_msg;
    }
    else {
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
    const login = e.target.elements.login.value;
    const password = e.target.elements.password.value;
    if (login == "" || password == "") return "Заполните все поля"
    const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/users/authorization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: `{\"login\":\"${login}\", \"password\": \"${password}\"}`
    });
    const data = await api_url.json();
    if (data.code && data.code != 200) {
        return data.status_msg;
    }
    else {
        setCookie('session', data.session, 30);
        window.location.assign('/page');
    }
}