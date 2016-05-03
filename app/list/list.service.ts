
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
		if (response.status < 200 || response.status >= 300) {
			throw new Error('Bad response status: ' +
					response.status);
		}
		let body = response.json();
		return body || [{ }];
	}


	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error || 'Server error';
		console.log(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}



