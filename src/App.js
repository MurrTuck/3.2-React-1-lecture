import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value) {
    this.setState({
      picture: value
    });
  };

  updateName(value) {
    this.setState({
      name: value
    });
  };

  addFriend() {
    const { picture, name, friends } = this.state
    const newFriend = { picture, name }
    this.setState({
      friends: [...friends, newFriend],
      picture: '',
      name: ''
    })
  }

  render() {
    console.log(this.state)
    const friends = this.state.friends.map((yeeyee, index) => {
      return <div alt='friend-pic' key={`friend-index-${index}`}>
        <img src={yeeyee.picture} width="200px" />
        <span>{yeeyee.name}</span>
      </div>
    })
    return (
      <div className="App">
        <span>Photo URL</span>
        <input placeholder="add url here..."
          onChange={(e) => this.updatePicture(e.target.value)}
          value={this.state.picture} />
        <span>Friend Name</span>
        <input placeholder="add name..."
          onChange={(e) => this.updateName(e.target.value)}
          value={this.state.name} />
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
