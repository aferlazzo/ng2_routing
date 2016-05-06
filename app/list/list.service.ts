
import {Injectable}								from 'angular2/core';
import {Http, Response, Headers}	from 'angular2/http';
import {RequestOptions}						from 'angular2/http';
import { Driver }									from './driver';
import {Observable}								from 'rxjs/Observable';

// needed for .map to work with .get
import 'rxjs/Rx';

@Injectable()
export class ListService {
	constructor (private http: Http) { }

	private err;

	tryToListAPI ():Observable<Driver[]> {
		var answer;
		var getHeaders;
		var driver_data;

		// for GET use 'application/text'

		getHeaders = new Headers({'Content-Type': 'application/text'});

		console.log("tryToListAPI location.host: " + location.host);
		console.log("tryToListAPI tail: /ng2_demo/app/list/list_endpoint.php");
		let list_url = "http://" + location.host + "/ng2_demo/app/list/list_endpoint.php";
		console.log("tryToListAPI list_url: " + list_url);

		driver_data = this.http.get(list_url, {headers: getHeaders})
				.map(this.extractData)
				.catch(this.handleError);
		return driver_data;
	}

	private extractData(response: Response) {
		var body = response.json();
		if (response.status < 200 || response.status >= 300) {
			throw new Error('Bad response status: ' +
					response.status);
		}

		return body || [{ }];
	}


	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		var errMsg = error._body || 'Server error';
		console.log(errMsg); // log to console instead
		alert (errMsg + " - did not delete driver!");
		return Observable.throw(errMsg);
	}


	/*
	The delete_row_API call is set up as an observable of type array of Driver objects.

	How it works: We make a call to the Ajax endpoint for deleting table entries and observe
	what is returned. The endpoint to access our SQLite database is written in PHP.
	 */

	delete_row_API (drivername):Observable<Driver[]> {
		var answer;
		var getHeaders;
		var driver_data;

		// for GET use 'application/text'

		getHeaders = new Headers({'Content-Type': 'application/text'});

		console.log("delete_row_API location.host: " + location.host);
		console.log("delete_row_API tail: /ng2_demo/app/list/delete_endpoint.php");
		let delete_url = "http://" + location.host + "/ng2_demo/app/list/delete_endpoint.php?drivername=" + drivername;
		console.log("delete_row_API delete_url: " + delete_url);

		driver_data = this.http.get(delete_url, {headers: getHeaders})
				.map(this.deleteData)
				.catch(this.handleDeleteError);

		// return the result of delete_endpoint.php
		return driver_data;
	}

	/*
	 We expect the endpoint to return TRUE if the query succeeded, FALSE on failure
	 */
	private deleteData(response: Response) {
		var body = response.json();

		if (response.status < 200 || response.status >= 300) {
			throw new Error('Bad response status: ' +	response.status);
		}

		console.log("deleteData response: "+ response.statusText);
		return body || [{ }];
	}


	private handleDeleteError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		var errMsg = error.message || 'Server error';
		console.log(errMsg); // log to console instead
		alert (errMsg + " - did not delete driver!");
		return Observable.throw(errMsg);
	}
}



