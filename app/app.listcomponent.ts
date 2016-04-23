/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/lodash/lodash.d.ts" />
declare var $: JQueryStatic;
import {Component,ViewChild,Input, Output, EventEmitter,Injectable,Pipe,PipeTransform} from 'angular2/core';
import {FORM_DIRECTIVES}    from 'angular2/common';
import * as _ from "lodash";

// 自訂模糊收尋
@Pipe({
  name: 'FuzzySearch'/*,
  pure: false,Allen Copeland*/
})
export class SortByNamePipe {
 transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        if(queryString!=null && queryString!=''){
            var return_data = []; 
            for(var key in value){
                var t =JSON.stringify(value[key]);
                var result = (t.match(queryString));
                if(result!=null){
                    return_data.push(value[key]);
                }
            }
            return return_data;
        }else{
            return value;
        }
    }
}

//list 組件
 @Component({
  selector: 'my-list',
  styles:[`
        .list .table{
           color:black;
           width:90%;
           margin: 0px auto;
        }
	`],
  directives:[FORM_DIRECTIVES],
  pipes: [SortByNamePipe],
  properties:["pass_data","search_data"],
  template: `
     <div class="list">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>company</th>
                    <th>email</th>
                    <th>phone</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#list of pass_data |FuzzySearch:search_data  , #i=index ">
                    <th scope="row">{{i}}</th>
                    <td>{{list.name}}</td>
                    <td>{{list.age}}</td>
                    <td>{{list.gender}}</td>
                    <td>{{list.company}}</td>
                    <td>{{list.email}}</td>
                    <td>{{list.phone}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  `
})
export class ListComponent  {
    pass_data:Array<Object>;
    constructor(){
       this.pass_data = [];

    }
       
 }
 
 
 
   