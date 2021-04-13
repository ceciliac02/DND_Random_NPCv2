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
        <div className="field">
            <p>{chosenRace}</p>
        </div>
    )
}

export default FetchRaces;



