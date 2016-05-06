
import { Component }					from 'angular2/core';
import { HTTP_PROVIDERS }			from 'angular2/http';
import { Driver }  						from './driver';
import { AddService }					from '../add/add.service';

@Component({
	selector: 'my-add',
	templateUrl: 'app/add/add.component.html',
	styleUrls: ['app/add/add.component.css'],
	providers:	[	HTTP_PROVIDERS,	AddService ]
})
export class AddComponent {

	constructor (	private _addService: AddService	) { }

	driver: Driver = {
		drivername: "Rocky",
		password:"secret",
		ability: "",
		firstname: "Tony",
		lastname:"Ferlazzo",
		email:"aferlazzo@gmail.com",
		address: "5558 West Shady Grove Drive",
		city: "Tucson",
		state:"AZ",
		zip: "85742",
		phone: "925-399-5359"
	};

	errorMessage: "";

	/*
		add_driver() is the event handler for clicking the add button. It calls the add service.
	 */
	add_driver(driver) {
		this._addService.add_driver_API(driver)
				.subscribe(
						driver  => /* added, so now clear fields */ this.clear_driver(),
						error =>  this.errorMessage = <any>error);

	}

	clear_driver() {
		this.driver.drivername = "";
		this.driver.password = "";
		this.driver.ability = "";
		this.driver.firstname = "";
		this.driver.lastname = "";
		this.driver.email = "";
		this.driver.address = "";
		this.driver.city = "";
		this.driver.state = "";
		this.driver.zip = "";
		this.driver.phone = "";
	}
}
