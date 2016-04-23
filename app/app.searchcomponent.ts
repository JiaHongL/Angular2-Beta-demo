/// <reference path="../typings/jquery/jquery.d.ts" />
declare var $: JQueryStatic;
import {Component,ViewChild,Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES}    from 'angular2/common';
import {ListComponent} from './app.listcomponent';
import {SelectComponent} from './app.selectcomponent';
import {Http, Response,HTTP_PROVIDERS,HTTP_BINDINGS} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from 'angular2/router';
import 'rxjs/add/operator/map';
 
interface list_d {
   data:Array<Object>
}
 
 @Component({
  selector: 'my-search',
  directives:[FORM_DIRECTIVES,ListComponent,SelectComponent],
  providers:[HTTP_PROVIDERS],
  styleUrls:["app/app.searchcomponent.css"],
  template: `
    <div class="home">
        <div class="header">
            <div style="text-align:right;">
                <button class="btn btn-default btn-green dropdown-toggle no-border-radius no-border  Btn_c_horizon" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="height:50px;width:120px;">
                    <span class="avatar" style="float:left;">
                        <img src="./images/a2.png" width="40" height="40">
                        <i class="on md b-white bottom">{{username}}</i>
                    </span>
                    <span style="float:right;padding-top:15px;">
                        <span class="padding-left-5 padding-right-5">
                        </span>				  		
                        <span class="caret"></span>
                    </span>
                </button>
                <ul class="dropdown-menu pull-right">
                    <li (click)="logout()">
                        <a>
                            <span class="glyphicon glyphicon-log-in" aria-hidden="true"></span>  Logout
                        </a>
                   </li>
                </ul>
            </div>
        </div>
        <div class="content">
            <div class="select">
                <my-select (inputKeyUp2)="input($event)" (click_data_out)="Loading_data($event)" ></my-select>
            </div>    
            <my-list [pass_data]="list_data" [search_data]="search_parameter"></my-list>
        </div>
    </div>
   `
})
export class SearchComponent {
    list_data:Array<Object>;
    search_parameter:string;
    username:string;
    constructor(private http: Http,params: RouteParams,private _router: Router) {
       this.username = params.get('id');
       this.Search();
    } 
    input(d:string) {
        this.search_parameter = d;
        
    }  
    Search(){
        this.http.get('app/list500.json').map((res: Response) => res.json()).subscribe(res => this.list_data = res );
    }
    Loading_data(d:string){
        if(d=='1000'){
            this.http.get('app/list1000.json').map((res: Response) => res.json()).subscribe(res => this.list_data = res );
        }
        if(d=='2000'){
            this.http.get('app/list2000.json').map((res: Response) => res.json()).subscribe(res => this.list_data = res );
        }
        if(d=='5000'){
            this.http.get('app/list5000.json').map((res: Response) => res.json()).subscribe(res => this.list_data = res );
        }
        if(d=='Clear'){
            this.list_data = [];   
        }
    } 
    logout(){
        this._router.navigate(['Login']);
    }

 }
 
 