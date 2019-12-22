import React from 'react';


export async function registration(e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const login = e.target.elements.login.value;
    const password = e.target.elements.password.value;
    const password2 = e.target.elements.password2.value;
    console.log("111");
    const api_url = await fetch('https://hehmda.herokuapp.com/api/v1/users/registration', {
        method: 'POST',
        credentials: 'include',
        headers: {
           'Content-Type': 'application/json;charset=utf-8'
        },
        body: `{\"new_nickname\":\"${name}\", \"new_login\":\"${login}\", \"new_password\": \"${password}\", \"new_repeat_password\": \"${password2}\"}`
    });
    const data = await api_url.json();
    console.log("555");
}

export async function login(e) {}
