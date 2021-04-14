import React, {useContext} from 'react';
import Data from '../races.json';
import {IndexContext} from './IndexNumber.js';

function BodyType() {
    const index = useContext(IndexContext);
    const data = Data;
    let colors = ["blue", "pink", "brown", "black", "purple", "yellow"]
    let mainChoice;
    let secondaryChoice;
    let randNum;
    if (data[index].body === "feathers"){
        mainChoice = 
        randNum = Math.floor(Math.random() * mainChoice.length);
    }
    console.log(index + " bodytype");
    return (
        <div className="field">
            <p></p>
        </div>
    )
}

export default BodyType;