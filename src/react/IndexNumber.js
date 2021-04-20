import React, {createContext} from 'react';
import Data from '../races.json';

export const IndexContext = createContext();

function randomNumber (races) {
    const number = Math.floor(Math.random() * races);
    return number;
}

export function FetchInfo(props) {
    const data = Data;
    const randNum = randomNumber(data.length);
    console.log(randNum + " randum");
    return (
        <IndexContext.Provider value={randNum}>
            {props.children}
        </IndexContext.Provider>
    )
}

