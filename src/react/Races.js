import React, {useContext} from 'react';
import Data from '../races.json';
import {IndexContext} from './IndexNumber.js';

function FetchRaces () {
    let data = Data;
    const index = useContext(IndexContext);
    let chosenRace = data[index].name;
    console.log(chosenRace + " race");
    return (
        <div className="field">
            <p>{chosenRace}</p>
        </div>
    )
}

export default FetchRaces;



