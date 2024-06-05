import React from "react";
import { UserInfo } from "./styles";

interface UserProps{
    titulo: string;
}

export function User({titulo}: UserProps){
    return (
        <UserInfo>
            <p>{titulo}</p>
        </UserInfo>
    )
}