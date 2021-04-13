function randomNumber() {
    let number = Math.floor(Math.random() * 3);
    return number;
}

function SetHeight () {
    let height;
    let number = randomNumber();
    switch (number) {
        case 0:
            height = "Short";
            break;
        case 1:
            height = "Tall";
            break;
        case 2:
            height = "Average";
            break;
        default:
            height = "Error";
            break;
    }
    return (
        <div className="field">
            <p>{height}</p>
        </div>
    )
}


export default SetHeight;