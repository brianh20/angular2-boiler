import { AlternateComponent } from "./alternate/alternate.component";
import { CompnameComponent } from "./compname/compname.component";
import { provideRouter } from "@angular/router";

const APP_ROUTES = [
	{path: 'alternate',                     // stands for '/alternate'
	 component: 'AlternateComponent'},      // get it from /alternate.component.ts
	{path: '',
	 component: 'CompnameComponent'}	   
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES)
];