
import { Component }					from 'angular2/core';
import { FORM_DIRECTIVES, FORM_PROVIDERS }		from 'angular2/common';
import { HTTP_PROVIDERS }			from 'angular2/http';
import { Driver }							from '../list/driver';
import { ModifyService }			from './modify.service';

@Component({
	selector: 'my-modify',
	templateUrl: 'app/modify/modify.component.html',
	styleUrls: ['app/modify/modify.component.css'],
	providers:	[	FORM_PROVIDERS, HTTP_PROVIDERS,	ModifyService ],
	directives: [ FORM_DIRECTIVES ]
})

export class ModifyComponent {

	constructor (
		private _modifyService: ModifyService
	) { }

	driver: Driver = {
		drivername: "Rocky",
		password:"secret",
		ability: "Motorcycle",
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
	successMessage: string;
	submitted = false;

	/*
	 modify_driver() is the event handler for clicking the Modify button. It calls the modify service.
	 */
	modify_driver(driver) {
		this._modifyService.modify_driver_API(driver)
				.subscribe(
						driver  => /* if here then record modified, so now clear fields */ this.clear_driver(),
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
