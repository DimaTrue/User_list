import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      value: ''
    }

    this.userSearch = (e) => {
      const value = e.target.value.toLowerCase();
      this.setState({ value });
      const filter = props.users.filter(user => {
        return user.name.first.includes(value);
      });
      props.update({ users: filter });
    }

    this.clear = () => {
      this.setState({ value: '' });
      props.update({ users: props.users });
    }
  }

  render() {
    return (
      <div className="search_box">
        <input type='text' placeholder="Enter a name.." value={this.state.value} onChange={this.userSearch} />
        <button className="reset_button" type='submit' onClick={this.clear}>Reset</button>
      </div>
    )
  }
}