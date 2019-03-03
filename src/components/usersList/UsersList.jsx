import React, { Component } from 'react';
import './UsersList.css';
import User from '../User/User';

export default class UsersList extends Component {

constructor(){
	super();
  this.state = {
		active: -1
	}
}

selectFold = foldNum => {
	const current = this.state.active === foldNum ? -1 : foldNum;
	this.setState(() => ({ active: current }));
};

	render() {
			const users = this.props.users.map((i, n) => {
				return (
					<User
						key={n}
						img={i.picture.thumbnail}
						last={i.name.last}
						first={i.name.first}
						username={i.login.username}
						phone={i.phone}
						location={i.location.state}
						gender={i.gender}
						registered={i.registered.date}
						email={i.email}
						street={i.location.street}
						city={i.location.city}
						postcode={i.location.postcode}
						dob={i.dob.date}
						cell={i.cell}
						largeimg={i.picture.large}
					  handle={() => this.selectFold(i)}
						active={i === this.state.active}
					/>
				)
			}
			);
			return (
				<div className="accordion">
					<div className="user_list_header">
						<div className="col-1"></div>
						<div className="col-2 last"><strong>Last</strong> </div>
						<div className="col-2 first"><strong>First</strong> </div>
						<div className="col-2 username"><strong>Username</strong> </div>
						<div className="col-2 phone"><strong>Phone</strong> </div>
						<div className="col-2 location"><strong>Location</strong> </div>
						<div className="col-1 "></div>
					</div>
					<div>{users}</div>
				</div>
			)
		}
	}

