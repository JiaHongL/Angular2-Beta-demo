import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoginComponent} from './app.logincomponent';
import {SearchComponent} from './app.searchcomponent';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:"/Login", component:LoginComponent,name:"Login"},
  {path:"/Search/:id", component:SearchComponent,name:"Search"},
  {path:"/*path", redirectTo:['Login'] }
])
export class AppComponent { }

