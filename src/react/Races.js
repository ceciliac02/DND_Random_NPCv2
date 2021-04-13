import React from 'react';
import Data from '../races.json';

function randomNumber (races) {
    let number = Math.floor(Math.random() * races);
    return number;
}

function FetchRaces () {

    let data = Data;
    let randNum = randomNumber(data.length);
    let chosenRace = data[randNum].name;
    console.log(Data);
    return (
        <div className="race">
            <p>{chosenRace}</p>
        </div>
    )
}

/*function FetchRaces () {
    return (
        <div className="race">
            {Data.map(race => {
                return (
                    <p>{race.name}</p>
                )
            })}
        </div>
    )
}*/

export default FetchRaces;



