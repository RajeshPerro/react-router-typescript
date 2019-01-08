import * as React from 'react';
import './App.css';

interface IProps {
    name: string;
    age?: number;
    message?:string;
}

function Hello({ name, age = 1,message=" "}: IProps) {
    if(name === ""){
        return(
            <div><p>''</p></div>
        )
    }
    else{
        if (age < 18) {
            message = "This site is for 18+";
        }

        return (
            <div className="hello">
                <div className="greeting">
                    <h2>Name : {name}</h2>
                    <h3>Age : {age}</h3>
                    <p className="msg"><strong>{message}</strong></p>
                </div>
            </div>
        );
    }
    
}

export default Hello;