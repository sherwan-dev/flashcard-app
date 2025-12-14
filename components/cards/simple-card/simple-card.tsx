"use client"
import { useState } from "react";
import SimpleLabel from "./simple-label";
import SimpleInput from "./simple-input";
export default function SimpleCard(props){
    const [userName, setName] =  useState('');

    function changeName(e){
        setName(e.target.value);
    }


     
    return (
        <div>
            {/* <input type="text" onChange={(e) => setName(e.target.value)} value={userName}/> */}
            <SimpleInput onNameChange={changeName} />
            {userName !== '' && <SimpleLabel value={userName}/>} 
        </div>
    );
}