
import { Component }					from 'angular2/core';
import { FORM_DIRECTIVES, FORM_PROVIDERS }		from 'angular2/common';
import { HTTP_PROVIDERS }			from 'angular2/http';
import { Driver }							from '../list/driver';
import { AddService }					from './add.service';

@Component({
	selector: 'my-add',
	templateUrl: 'app/add/add.component.html',
	styleUrls: ['app/add/add.component.css'],
	providers:	[ FORM_PROVIDERS, HTTP_PROVIDERS, AddService ],
	directives: [ FORM_DIRECTIVES ]
})

export class AddComponent {
	
	constructor (
		private _addService: AddService
	) { }

	driver: Driver = {
		drivername: "",
		password:"",
		ability: "",
		firstname: "",
		lastname:"",
		email:"",
		address: "",
		city: "",
		state:"",
		zip: "",
		phone: ""
	};

	errorMessage: string;
	successMessage: string;
	submitted = false;
	
	/*
		add_driver() is the event handler for clicking the add button. It calls the add service.
	 */
	add_driver(driver) {
		this._addService.add_driver_API(driver)
				.subscribe(
						driver  => /* if here then record added, so now clear fields */ this.clear_driver(),
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
