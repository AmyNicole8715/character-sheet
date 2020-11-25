import './App.css';
import React from 'react';

class StatBlock extends React.Component {
  constructor(props) {
    super(props);

    // create some state
    this.state = {
      rollInt: ""
    };
  }

  updateRoll = (displayStat) => {
    
    // get whatever's in that input
    const value = displayStat.target.value;
    // take the input and pass it through some magic
    let updatedInt = Math.floor((value - 10) / 2);
    if (updatedInt >= 0) {
      updatedInt = '   +' + updatedInt;
    }
    // store that into the state
    this.setState({
      rollInt: updatedInt
    });
  }

  render() {
    return (
      <div className="statBlock">
        <input className="userInput"
          onChange={this.updateRoll}
          />
          <div className="modifier">
          {this.state.rollInt}
          </div>
      </div>
    );
  }
}

export default StatBlock;