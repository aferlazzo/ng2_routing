import {Component}					from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES}				from 'angular2/router';
import { AddComponent }			from './add/add.component';
import { ListComponent }		from './list/list.component';
import {FirstComponent}			from './first-page/first.component';
import {SecondComponent}		from './second-page/second.component';
import {ThirdComponent}			from './third-page/third.component';
import { AddService }				from './add/add.service';

@Component({
    selector: 'my-app',
    template: `
    <h1>Angular 2 Demo</h1>
		<nav>
			<a [routerLink]="['Add']">Add Driver</a>
			<a [routerLink]="['List']">List Drivers</a>
			<a [routerLink]="['FirstPart']">show first component</a>
			<a [routerLink]="['SecondPart']">show second component</a>
			<a [routerLink]="['ThirdPart']">show third component</a>	
		</nav>
		<router-outlet></router-outlet>
		`,
		providers:[AddService],
		directives: [ROUTER_DIRECTIVES]
})

//simultaneously create a router and add its routes
@RouteConfig([
	{path:'/add',			name: 'Add',				component: AddComponent},
	{path:'/',				name: 'List',				component: ListComponent, useAsDefault: true},
	{path:'/first',		name: 'FirstPart',	component: FirstComponent},
	{path:'/second',	name: 'SecondPart', component: SecondComponent},
	{path:'/third',		name: 'ThirdPart',	component: ThirdComponent}
])
export class AppComponent { }
