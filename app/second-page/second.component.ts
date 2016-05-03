
import {Component }						from 'angular2/core';
import {RouteParams, Router}	from 'angular2/router';
import {ComponentInstruction}	from 'angular2/router';
import { HTTP_PROVIDERS }			from 'angular2/http';
@Component({
	template: `<div><h3>Inside Second Component's Template</h3></div>`,
	styles: ['input {width: 20em}']
})

export class SecondComponent { }