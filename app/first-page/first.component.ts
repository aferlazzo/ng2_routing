
import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';

@Component({
	template: `
		<div>
			<h3>Inside First Component's Template</h3>
		</div>
		
	`,
	styles: ['input {width: 20em}']
})

export class FirstComponent implements OnInit, CanDeactivate {
	/*
	crisis: Crisis;
	editName: string;
  */
	constructor(
			//private _service: CrisisService,
			private _router: Router,
			private _routeParams: RouteParams
			//private _dialog: DialogService
	) { }

	ngOnInit() {
		/*
		onSelect(hero: Hero) {
			this._router.navigate( ['HeroDetail', { id: hero.id }] );
		}
		*/
	}

	routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) : any {
		/*
		// Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
		if (!this.crisis || this.crisis.name === this.editName) {
			return true;
		}
		// Otherwise ask the user with the dialog service and return its
		// promise which resolves to true or false when the user decides
		return this._dialog.confirm('Discard changes?');
		*/
	}

	/*
	cancel() {
		this.editName = this.crisis.name;
		this.gotoCrises();
	}

	save() {
		this.crisis.name = this.editName;
		this.gotoCrises();
	}

	gotoCrises() {

		let crisisId = this.crisis ? this.crisis.id : null;
		// Pass along the hero id if available
		// so that the CrisisListComponent can select that hero.
		// Add a totally useless `foo` parameter for kicks.
		this._router.navigate(['CrisisList', {id: crisisId, foo: 'foo'} ]);
	}
	*/
}
