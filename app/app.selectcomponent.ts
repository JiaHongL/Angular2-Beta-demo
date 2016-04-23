/// <reference path="../typings/jquery/jquery.d.ts" />
declare var $: JQueryStatic;
import {Component,ViewChild,Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES}    from 'angular2/common';

 @Component({
  selector: 'my-select',
  styles:[`
        .select{
           color:black;
           background-color:#4db6ac;;
           width:90%;
           margin: 0px auto;
           padding:25px;
           text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
           border-radius: 3px;
           border-style: solid;
           border-width: 3px;
           border-color: rgb(255, 255, 255);
           border: solid 1px rgba(0,0,0,0.3);
           border-radius: 5px 5px 5px 5px;
           box-shadow: -1px -1px 2px hsla(0, 0%, 0%, 0.2), 1px 1px 1px hsla(0, 0%, 0%, 0.15), 1px 1px 1px hsla(0, 0%, 0%, 0.15) inset, -1px -1px 2px hsla(0, 0%, 0%, 0.2) inset;
        }
	`],
  directives:[FORM_DIRECTIVES],
  template: `
    <div class="select">
        <div class="select-row">
            <div class="select-col-40">
                <input type="text" class="form-control" placeholder="請輸入關鍵字" [(ngModel)]="search_parameter">
            </div>
            <div class="select-col-20">
                關鍵字：{{keyword}}
            </div>
            <div class="select-col-5">
                <button class="btn btn-success" type="submit" (click)="click_data('1000')" >1000筆</button>
            </div>
            <div class="select-col-5">
                <button class="btn btn-success" type="submit" (click)="click_data('2000')">2000筆</button>
            </div>
            <div class="select-col-5">
                <button class="btn btn-success" type="submit" (click)="click_data('5000')">5000筆</button>
            </div>
            <div class="select-col-5">
                <button class="btn btn-warning" type="submit" (click)="click_data('Clear')" >清除資料</button>
            </div>
        </div>
    </div>
  `
})
export class SelectComponent  {
    keyword:String;
    constructor(){
        this.keyword = '';
    }
    @Output() inputKeyUp2:EventEmitter<string> = new EventEmitter();
    @Output() click_data_out:EventEmitter<string> = new EventEmitter();
    set search_parameter(value:string) {
        this.inputKeyUp2.emit(value);
        this.keyword =  value;
    }
    click_data(d){
        this.click_data_out.emit(d);
    }

 }
 
 
 
   