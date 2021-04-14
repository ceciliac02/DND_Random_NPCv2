import React, {useContext} from 'react';
import Data from '../races.json';
import {IndexContext} from './IndexNumber.js';
import {Colors} from './Colors.js';

function BodyType() {
    const index = useContext(IndexContext);
    const data = Data;
    let final;
    let mainChoice;
    let secondaryChoice;
    if (data[index].body === "feathers"){
        mainChoice = Colors();
        secondaryChoice = Colors();
        final = mainChoice + " and " + secondaryChoice + " feathers";
    }
    else (
        final = "bleh"
    )
    return (
        <div className="field">
            <p>{final}</p>
        </div>
    )
}

export default BodyType;