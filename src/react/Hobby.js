import React from 'react';

function SetHobby() {
    const hobby = ["likes to read", "likes to draw", "makes jewelry", "journals", "collects trinkets", "plays dragonchess", "studies history", "likes to bake", "likes to cook", "refurnishes old furniture", "likes windowshopping", "plays an instrument", "writes poetry", "likes to play sports", "writes jokes", "loves barfights", "creates experiments", "beekeeps", "likes to tattoo", "creates clothing", "loves to tinker", "likes to decorate", "likes to hike", "likes to swim", "woodcarves", "likes to play card games", "likes to knit", "teaches kids", "likes to gamble", "streetfights", "goes hunting", "likes to flirt", "practices magic", "likes stonecarving", "rides horses", "likes fortune telling", "likes to storytell","makes dolls", "studies the stars", "loves exercising", "loves dancing", "rock climbs", "loves to clean", "reads to children", "meditates", "likes to gossip"];
    const randNum = Math.floor(Math.random() * hobby.length);
    return (
        <div className="field">
            <p>{hobby[randNum]}</p>
        </div>
    )
}

export default SetHobby;