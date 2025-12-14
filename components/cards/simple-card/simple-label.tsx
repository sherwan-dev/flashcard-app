'use client'
import { useState } from "react";
export default function SimpleLabel(props){
    return(
        <div>
            New: {props.value}
        </div>
    );
}