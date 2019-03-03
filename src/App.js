import React, { Component } from 'react';
import './App.css';
import UsersList from './components/usersList/UsersList'
import Header from './components/Header/Header';
import Search from './components/Search/Search';

class App extends Component {

  state = {
    users: [],
    isLoading: true
  }
  async componentDidMount() {
    await fetch(`https://randomuser.me/api/?results=10`)
      .then(res => res.json())
      .then(data => this.setState({ users: data.results, isLoading: false }));
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="load">
          <div>Please, wait. Loading...</div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Header users={this.state.users} />
          <Search users={this.state.users} update={this.updateData.bind(this)} />
          <UsersList users={this.state.users} />
        </div>
      )
    };
  }
}

export default App;
