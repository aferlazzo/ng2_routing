
import { Component, OnInit }	from 'angular2/core';
import { HTTP_PROVIDERS }			from 'angular2/http';
import { Driver }  						from './driver';
import { ListService }				from '../list/list.service';

@Component({
	selector: 'my-list',
	templateUrl: 'app/list/list.component.html',
	styleUrls: ['app/list/list.component.css'],
	providers:	[	HTTP_PROVIDERS,	ListService ]
})
export class ListComponent implements OnInit {

	constructor (	private _listService: ListService	) { }

	// the model being shown on page
	driver_list;
	errorMessage: "";
	saved_drivername="";


	ngOnInit() { this.tryToList(); }
	/*
		tryToList() is the event handler for clicking the list button
	 */
	tryToList() {
		this._listService.tryToListAPI()
				.subscribe(
						drivers => {
							this.driver_list = drivers;
							console.log("list.component: driver table has " + drivers.length + " rows");
						},
						error =>  this.errorMessage = <any>error
				);
	}

	delete_row(i, drivername) {
		console.log("delete_row Attempting to delete driver " +drivername);
		this._listService.delete_row_API(drivername)
				.subscribe(
						drivers => {
							// perhaps drivers should update the list of drivers model, the drivers[] array
							// so the list seen by the user is updated
							this.driver_list = drivers;
							console.log("list.component: deleted_row");
						},
						error => {
							this.errorMessage = <any>error;
						}
				);
	}

	// toggle row background color on click
	toggle_row_td(i, showStyle, rowNumber) {
		//console.log("toggling row " + i);
		if (( showStyle) && (rowNumber == i)) {
			return "#00f6ff";
		} else {
			return "";
		}
	}
}
