import React, {Component} from 'react';
import '../App.css';
import {Gradients} from './Colors.js';
import {FetchInfo} from './IndexNumber.js';
import FetchRaces from './Races.js';
import SetGender from './Gender.js';
import SetHeight from './Height.js';
import SetHair from './Hair.js'

export function SetGradient() {
  let setGradient = Gradients();
  return setGradient;
}

class App extends Component {
  constructor(props) {
      super(props);
      let setGradient = SetGradient();
      console.log(setGradient[1]);
      this.state = {
          gradient: setGradient,
          shadow: `0px 0px 30px ${setGradient[1]}`
      }
  }

  

  whenLoad = (e) => {
      this.setState({
          colorOne: "red"
      })
  }
  
  render () {
      return (
          <div className="background" style={{background: `linear-gradient(${this.state.gradient})`}}>
              <div className="header" style={{boxShadow: this.state.shadow}}>This is your NPC</div>
                <FetchInfo>
                  <div className="container" style={{boxShadow: this.state.shadow}}>
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
                      <div className="label">Hair</div>
                      <SetHair />
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
            <div className="btn" style={{boxShadow: this.state.shadow}}>Randomize</div>
          </div>
      )
  }
}


export default App;