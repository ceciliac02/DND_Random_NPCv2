import React from 'react';

function SetQuirks() {
    const quirk = ["stutters", "has a lisp", "scarred", "blind", "deaf", "wears glasses", "fidgets", "has piercings", "sick", "talks loudly", "talks quietly", "foul breath", "sweats when lying", "breathes heavily", "talks slowly", "talks quickly", "breaks into song", "carries around a stuffed animal", "always sits facing the north", "clears their throat frequently", "laughs loudly", "sniffs frequently", "paces when in thought", "talks to themselves", "carries around snacks", "handles things delicately", "missing a limb", "carries around books", "sneezes when nervous", "germophobe", "hears voices", "has an invisible friend", "talks to plants", "talk to animals", "always seen drinking tea", "obsessed with symmetry", "narcoleptic", "always seen drinking alcohol", "carries around a sketchbook", "bites lips", "mute", "wears their heart on a sleeve", "lazy eye", "bites their nails", "walks around barefoot", "limps", "mumbles", "very punctual", "vegetarian/vegan", "yawns a lot", "picks their nose", "high pitched voice", "low-pitched voice", "nasally voice", "raspy voice", "sonorous voice", "melodic voice", "snorts when laughing", "squints a lot", "talks with their hands", "laughs at their own jokes", "cleans incessantly", "has a catchphrase", "doesn't like eye contact", "likes to talk about their deity", "is bad at keeping secrets", "cracks their knucles frequently"];
    const randNum = Math.floor(Math.random() * quirk.length);
    return (
        <div className="field">
            <p>{quirk[randNum]}</p>
        </div>
    )
}

export default SetQuirks;