import React from 'react';

function SetAttitude() {
    const attitudes = ["hostile", "neutral", "warm", "friendly", "lustful", "scared", "nervous", "shy", "cold", "cynical", "playful", "apathetic", "sweet", "disgusted", "patronzing", "appreciative", "boastful", "awestruck"];
    const randNum = Math.floor(Math.random() * attitudes.length);
    return (
        <div className="field">
            <p>{attitudes[randNum]}</p>
        </div>
    )
}

export default SetAttitude;