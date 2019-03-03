import React, { Component } from 'react';
import './User.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons'
library.add(faFemale, faMale);

export default class User extends Component {

	render() {
		return (
			<div className="user">
				<button className={`user_trigger ${this.props.active ? '-' : '+'}`} onClick={this.props.handle}>
					<span className="col-1 avatar"><img src={this.props.img} alt='avatar' /></span>
					<span className="col-2 last">{this.props.last[0].toUpperCase() + this.props.last.slice(1)}</span>
					<span className="col-2 first">{this.props.first[0].toUpperCase() + this.props.first.slice(1)}</span>
					<span className="col-2 username">{this.props.username}</span>
					<span className="col-2 phone">{this.props.phone}</span>
					<span className="col-2 location">{this.props.location[0].toUpperCase() + this.props.location.slice(1)}</span>
					<span className="col-1 symbol">{this.props.active ? '-' : '+'}</span>
				</button>
				<div className={`user_content ${this.props.active ? "open" : ""}`} >
					<div className="wrapper">
						<div className="description">
							<div className="description_list">
								<ul>
									<li className='name'>{this.props.first[0].toUpperCase() + this.props.first.slice(1)} {<FontAwesomeIcon icon={this.props.gender} />}</li>
									<li><strong>Username </strong> {this.props.username}</li>
									<li><strong>Registered </strong>{this.props.registered.slice(8, 10)}/{this.props.registered.slice(5, 7)}/{this.props.registered.slice(0, 4)}</li>
									<li><strong>Email </strong> {this.props.email}</li>
								</ul>
							</div>
							<div className="description_list">
								<ul>
									<li><strong>Address </strong> {this.props.street}</li>
									<li><strong>City </strong> {this.props.city[0].toUpperCase() + this.props.city.slice(1)}</li>
									<li><strong>Zip Code </strong> {this.props.postcode}</li>
								</ul>
							</div>
							<div className="description_list">
								<ul>
									<li><strong>Birthday </strong> {this.props.dob.slice(8, 10)}/{this.props.dob.slice(5, 7)}/{this.props.dob.slice(0, 4)}</li>
									<li><strong>Phone </strong> {this.props.phone}</li>
									<li><strong>Cell </strong> {this.props.cell}</li>
								</ul>
							</div>
						</div>
						<div className="description_list description_img">
							<img src={this.props.largeimg} alt='avatar' />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
