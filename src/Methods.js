import React from 'react';


export function registration(e) {
    e.preventDefault();
    /*const api_url = await fetch(``);
    const data = await api_url.json();*/
    const data = e.target.elements.name.value + " " + e.target.elements.login.value + " " +
        e.target.elements.password.value + " " + e.target.elements.password2.value;
    console.log(data);
}

export function login(e) {
    e.preventDefault();
    /*const api_url = await fetch(``);
    const data = await api_url.json();*/
    const data = e.target.elements.login.value + " " + e.target.elements.password.value;
    console.log(data);
}