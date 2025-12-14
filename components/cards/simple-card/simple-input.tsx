'use client'
import { useState } from "react";
export default function SimpleInput(props){
    return(
        <div>
            <input onChange={props.onNameChange}/>
        </div>
    );
}