import React from 'react';
import './App.css';
import CharacterCard from "./components/characterCard"
import characters from "./data/characters.json"
// import data from "./data/img/terran.jpg"

class App extends React.Component {

  state={
    clickedCharacters: [],
    maxScore: 0,
    allCharacters: characters
  }

  randomize = () => {
    let oldArray = characters;
    let newArray = [];
    let i = 0;
    console.log(this.state.allCharacters);
    while(newArray.length < oldArray.length){
      let r = Math.floor(Math.random() * 12);
      if (!newArray.includes(oldArray[r])){
        console.log("PUSHING", r, oldArray[r]);
        newArray.push(oldArray[r]);
      }
      //if (++i > 50) break;
    }
    this.setState({allCharacters: newArray},()=> console.log("RANDOMIZED", this.state.allCharacters));

  }

  clickCharacter = (id) => {
    console.log(this.state);
    if (!this.state.clickedCharacters.includes(id)){
      this.setState({clickedCharacters: this.state.clickedCharacters.concat([id])},() => {
        if (this.state.clickedCharacters.length > this.state.maxScore)
          this.setState({maxScore: this.state.clickedCharacters.length})
      });
    }
    else{
      console.log("LOST", this.state.clickedCharacters);
      this.setState({clickedCharacters: []}, () => console.log("callback", this.state.clickedCharacters));
    }
    console.log(this.state.clickedCharacters);
    this.randomize();
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
            <span>Current Score: {this.state.clickedCharacters.length}</span>
            <span>Max Score: {this.state.maxScore}</span>
        </header>
        <div id="characters">
          {this.state.allCharacters.map(ch => 
              <CharacterCard 
                id={ch.id} 
                key={ch.id} 
                name={ch.name} 
                img={ch.img}
                click={this.clickCharacter} /> 
            )}
        </div>
        <footer>
          {this.state.clickedCharacters.map(ch=> ch +"-"+characters[ch-1].name)}
        </footer>
      </div>
    );
  }
}

export default App;
