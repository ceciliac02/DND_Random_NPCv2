import React from 'react';
import {FetchInfo} from './IndexNumber.js';
import FetchRaces from './Races.js';
import SetGender from './Gender.js';
import SetHeight from './Height.js';
import BodyType from './Body.js';

function MainBox() {
    return (
        <FetchInfo>
            <div className="container">
           <div className="row">
                <div className="label">Race</div>
                <FetchRaces/>
            </div>
            <div className="row">
                <div className="label">Gender</div>
                <SetGender />
            </div>
            <div className="row">
                <div className="label">Height</div>
                <SetHeight />
            </div>
            <div className="row">
                <div className="label">Skin/Scale Color</div>
                <BodyType />
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
        </FetchInfo>
    )
}

export default MainBox;