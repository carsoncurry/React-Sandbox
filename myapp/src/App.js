import React, { Component } from 'react';
import Avengers from './Avengers';
import AddAvenger from './AddAvenger';

class App extends Component {
  state = {
    avengers : [
      { name: 'Steve', codename: 'Captain America', age: 99, id: 1 },
      { name: 'Tony', codename: 'Iron Man', age: 42, id: 2 },
      { name: 'Thor', codename: 'Thor', age: 1500, id: 3 },
      { name: 'Bruce', codename: 'Hulk', age: 38, id: 4 },
      { name: 'Natasha', codename: 'Black Widow', age: 32, id: 5 },
      { name: 'Clint', codename: 'Hawkeye', age: 40, id: 6 }
    ]
  }

  addAvenger = (avenger) => {
    avenger.id = Math.random();
    let avengers = [...this.state.avengers, avenger]
    this.setState({
      avengers: avengers
    })
  }

  deleteAvenger = (id) => {
    let avengers = this.state.avengers.filter(avenger => {
      return avenger.id !== id
    });
    this.setState({
      avengers: avengers
    })
  }

  componentDidMount() {
    console.log('component mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>Avengers, Assemble!</h1>
        <h3>Welcome:</h3>
        <Avengers deleteAvenger={ this.deleteAvenger } avengers={ this.state.avengers } />
        <AddAvenger addAvenger={ this.addAvenger } />
      </div>
    );
  }
}

export default App;
