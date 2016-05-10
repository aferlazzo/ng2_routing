
import {Component}											from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES}	from 'angular2/router';
import { ListComponent }								from './list/list.component';
import { AddComponent }									from './add/add.component';
import { ModifyComponent }							from './modify/modify.component';

@Component({
    selector: 'my-app',
		styles: [`
			h1 {
				font-size: 2.5em;
				background-color: #FF006D;
				margin: 0;
				font-family: fantasy, sans-serif;
				color: #fff;
				padding: .25em;
			}
			.active {
    		background-color: yellow;
  		}
		`],
    template: `
    <h1>Angular 2 Demo</h1>

		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span> 
					</button>
					<a class="navbar-brand" href="#">ng2 Reference App</a>
				</div>
				<div class="collapse navbar-collapse" id="myNavbar">
    
					<ul class="nav navbar-nav">
						<!-- class='active' (defined and used by Bootstrap) is on the <li> if the 'active_menu' variable equals 'List --> 
						<li [class.active]="active_menu=='List'">  <a (click)="change_active_menu('List')" [routerLink]="['ListComponent']">List Drivers</a></li>
						<li [class.active]="active_menu=='Add'">   <a (click)="change_active_menu('Add')" [routerLink]="['AddComponent']">Add A Driver</a></li>
						<li [class.active]="active_menu=='Modify'"><a (click)="change_active_menu('Modify')" [routerLink]="['ModifyComponent']">Modify A Driver</a></li> 
					</ul>
				</div>
			</div>
		</nav>
		<router-outlet></router-outlet>
		
<!-- class='hidden' (defined and used by Bootstrap) is on the <my-list> if the 'active_menu' variable is not equal to 'List --> 
<!--
		<my-list [class.hidden]="active_menu!='List'"></my-list>
		<my-add  [class.hidden]="active_menu!='Add'"></my-add>
		<my-modify [class.hidden]="active_menu!='Modify'"></my-modify>
-->

		`,
		//providers:[AddService, ListService, ModifyService],
		directives: [ROUTER_DIRECTIVES, AddComponent, ModifyComponent, ListComponent]
})

//simultaneously create a router and add its routes
@RouteConfig([
	{
		path:'/',
		as: 'ListComponent',
		component: ListComponent,
		useAsDefault: true
	},
	{
		path:'/add',
		as: 'AddComponent',
		component: AddComponent
	},
	{
		path:'/modify',
		as: 'ModifyComponent',
		component: ModifyComponent
	}
])

export class AppComponent {

	// set the initial value to pass to add.component.ts, modify.component.ts, and list.component.ts
	// to indicate which navbar item is highlighted through the @Input decorator in those files
	public active_menu ="List";

	change_active_menu(new_active_menu) {
		console.log(`change_active_menu(${new_active_menu})`);
		this.active_menu = new_active_menu;
	}
}