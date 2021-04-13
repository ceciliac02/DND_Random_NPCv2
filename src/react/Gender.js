function randomNumber() {
    const number = Math.floor(Math.random() * 3);
    return number;
}

function SetGender() {
    let number = randomNumber();
    let gender;
    switch (number) {
        case 0:
            gender = "Female";
            break;
        case 1:
            gender = "Male";
            break;
         case 2:
            gender = "Nonbinary";
            break;
        default:
            gender = "Error"
            break;

    }
    return (
        <div className="field">
            <p>{gender}</p>
        </div>
    )
}

export default SetGender;