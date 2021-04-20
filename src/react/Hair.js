import React, {useContext} from 'react';
import Data from '../races.json';
import {IndexContext} from './IndexNumber.js';
import Colors from './Colors.js';

function SetHair () {
    let data = Data;
    const index = useContext(IndexContext);
    let hairColor;
    if (data[index].hair === true) {
        hairColor = Colors();
    }
    else {
        hairColor = "fur? feathers? scales? not hair!";
    }
    console.log(Colors());
    return (
        <div className="field">
            <p>{hairColor}</p>
        </div>
    )
}

export default SetHair;