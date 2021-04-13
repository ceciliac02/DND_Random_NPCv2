import React from 'react';
import FetchRaces from './Races.js';

function MainBox() {
    return (
        <div className="container">
            <div className="row">
                <div className="label">Race</div>
                <FetchRaces />
            </div>
            <div className="row">
                <div className="label">Gender</div>
            </div>
            <div className="row">
                <div className="label">Height</div>
            </div>
            <div className="row">
                <div className="label">Skin/Scale Color</div>
            </div>
            <div className="row">
                <div className="label">Hair</div>
            </div>
            <div className="row">
                <div className="label">Trait</div>
            </div>
            <div className="row">
                <div className="label">Quirk</div>
            </div>
            <div className="row">
                <div className="label">Hobby</div>
            </div>
            <div className="row">
                <div className="label">Attitude Toward PC</div>
            </div>
            <div className="row">
                <div className="label">Profession</div>
            </div>
        </div>
    )
}

export default MainBox;