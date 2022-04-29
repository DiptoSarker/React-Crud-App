import React from "react";
import { useState } from "react";
import { createContext } from "react";


export const UserContext = createContext();

export const UserProvider = (props) => {
    const [users, setUsers] = useState([
        { id: 1, name: "Dipto", position:"Front End Developer", salary: 40000 },
        { id: 2, name: "Pritom", position:"Machine Learning Engineer", salary: 40000 },
        { id: 3, name: "Domingo", position:"Full Stack Developer", salary: 40000 },
    ]);

    return(
        <UserContext.Provider value = {[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}