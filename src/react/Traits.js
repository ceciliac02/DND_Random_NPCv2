import React from 'react';

function SetTrait () {
    const traits = ["brave", "cowardly", "snippy", "humble", "impatient", "patient", "nosey", "easygoing", "uptight", "funny", "serious", "aggressive", "arrogant", "cheerful", "grumpy", "artistic", "logical", "thick-headed", "daft", "boastful", "bright", "cunning", "calm", "suspicious", "cautious", "charming", "confident", "clever", "considerate", "cool", "cooperative", "wise", "cultured", "stubborn", "deranged", "dignified", "devoted", "eccentric", "emotional", "energetic", "friendly", "gentle", "meek", "modest", "quiet", "rational", "sensitive", "thoughtful", "philosophical","chatty", "level-headed", "perceptive", "dense", "diabolical","innocent", "corrupt", "offensive", "spiteful", "hateful", "wicked", "vain"];
    const randNum = Math.floor(Math.random() * traits.length);
    return (
        <div className="field">
            <p>{traits[randNum]}</p>
        </div>
    )
}

export default SetTrait;