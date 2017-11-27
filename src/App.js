import React, { Component } from 'react';
import plus from './plus.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.libraries = [
      { id: 0, count: 0, lib: "React" },
      { id: 1, count: 0, lib: "Vue" },
      { id: 2, count: 0, lib: "Angular" },
      { id: 3, count: 0, lib: "Ember" }
    ]
    //bind methods to this
    this.updateCount = this.updateCount.bind(this);

    this.renderList();
  }
  renderList(){
    this.listItems = this.libraries.map((data) =>
      <li>
        <div className="circle"><h2 >{data.count}</h2></div>
        <h2>{data.lib}</h2>
        <button className="countButton" onClick={(e) => this.updateCount(data.id)}><img src={plus} /></button>
      </li>
    );
  }

  updateCount(id) {
    console.log("function called when clicked")
    for (let obj of this.libraries) {
      if (obj.id === id) {
        obj.count++;
      }
    }
    this.forceUpdate();
  }

  render() {
    this.renderList();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Vote for Your JS Library!</h1>
        </header>
        <ul>{this.listItems}</ul>
      </div>
    );
  }
}

export default App;
