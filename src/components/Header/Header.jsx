import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Chart from '../Chart/Chart';
import './Header.css';

export default class Header extends Component {

  constructor(props) {
    super();
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="header">
        <h1>List of users</h1>
        <div className="chart">
          <button className="show_button" type='button' onClick={this.handleOpenModal}>Show Chart</button>
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            props={this.props}
            ariaHideApp={false}
          >
            <div className="chart">
              <button className="hide_button" onClick={this.handleCloseModal}>Close</button>
            </div>
            <Chart props={this.props} />
          </ReactModal>
        </div>
      </div>
    )
  }
}
