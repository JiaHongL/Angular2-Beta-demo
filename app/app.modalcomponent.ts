declare var $: JQueryStatic;
import {Component,ViewChild,Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES}    from 'angular2/common';

interface is_show_m {
   status:boolean;
}
interface is_msg_m {
   text:string;
}
// modal 組件
@Component({
  selector: 'my-modal',
  properties:["msg","is_show"],
    styles:[`
		div.main{
            font-family:Courier;
            background:#ede7f6;
            box-shadow:0 2px 5px 0;
            width:350px;
            height:200px;
            position:fixed; 
            top:50%;
            left:50%;
            margin-top:-100px; 
            margin-left:-175px;
            border-radius: 10px;
        }
        .header{
            height:25px;
            background:#90caf9;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            text-align:center;
        }
        .header span{
               color:#FFFFFF;
               line-height:25px;          
        }
        .content{
            height:140px;
            line-height:140px; 
            text-align:center;
            font-size:25px;
            color:red;
        }
        .footer{
            height:35px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            text-align:center;
        }
        
	`],
  template: `
    <div [hidden]="is_show.status">
        <div class="main">
           <div class="header">
                <span>提示</span>
           </div>
           <div class="content">
                <span>{{msg.text}}</span>
           </div>
           <div class="footer">
                <button class="btn btn-sm btn-info " (click)="CloseModal()">close</button>
           </div>
        </div>
    </div>
  `
})
export class modal_Component {
    msg:is_msg_m;
    is_show:is_show_m;
    constructor() {
        this.is_show = {status:false};
        this.msg =  {text:''};
     }
    CloseModal(){
        this.is_show = {status:true};
        this.msg = {text:''};
    }
 }
