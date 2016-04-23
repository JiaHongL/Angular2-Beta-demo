import {bootstrap}    from 'angular2/platform/browser';
import {LocationStrategy,HashLocationStrategy,ROUTER_PROVIDERS}from "angular2/router" 
import {provide} from "angular2/core";
import {AppComponent} from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS,
          provide(LocationStrategy, {useClass: HashLocationStrategy})]);
