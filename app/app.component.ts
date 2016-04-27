import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FirstComponent}		from './first-page/first.component';
import {SecondComponent}	from './second-page/second.component';
import {ThirdComponent}		from './third-page/third.component';

@Component({
    selector: 'my-app',
    template: `<h1>Angular 2 Router Reference App</h1>
			<nav>
				<a [routerLink]="['FirstPart']">show first component</a>
				<a [routerLink]="['SecondPart']">show second component</a>
				<a [routerLink]="['ThirdPart']">show third component</a>
			</nav>
			<router-outlet></router-outlet>
		`,
		directives: [ROUTER_DIRECTIVES]
})

//simultaneously create a router and add its routes
@RouteConfig([
	{path:'/first', name: 'FirstPart', component: FirstComponent, useAsDefault: true},
	{path:'/second', name: 'SecondPart', component: SecondComponent},
	{path:'/third', name: 'ThirdPart', component: ThirdComponent}
])
export class AppComponent { }
