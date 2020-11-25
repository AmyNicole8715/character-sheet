import './App.css';
import StatBlock from './StatBlock.js'
import React from 'react';

class App extends React.Component {
    render() {
        return (
          <div className="margarine">
            <div className="statstyle">
                STR:
                <StatBlock />
            </div>
            <div className="statstyle">
                DEX:
                <StatBlock />
            </div>
            <div className="statstyle">
                CON:
                <StatBlock />
            </div>
            <div className="statstyle">
                INT:
                <StatBlock />
            </div>
            <div className="statstyle">
                WIS:
                <StatBlock />
            </div>
            <div className="statstyle">
                CHA:
                <StatBlock />
            </div>
          </div>
        );
      }
    }

    export default App;