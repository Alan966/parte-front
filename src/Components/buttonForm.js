'use client';
import { useState } from "react";
import axios from 'axios';

const createUser = async (data, url ) => {
    console.log(data);
    return;
    const response = await axios.post(url, data, {
        headers:{
            'Content-Type': 'application/json'
        },
        next:{
            revalidate: 60
        }
    });
    console.log(response);
}
const ButtonForm = ({ value, url , data}) => {

    return(
        <input type="button" className="button" onClick={createUser(data, url)} value={value}/>
    )
};

export default ButtonForm;