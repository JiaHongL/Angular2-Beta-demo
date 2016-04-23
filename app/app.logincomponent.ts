/// <reference path="../typings/jquery/jquery.d.ts" />
declare var $: JQueryStatic;
import {Component,ViewChild,Input, Output, EventEmitter} from 'angular2/core';
import {FORM_DIRECTIVES}    from 'angular2/common';
import {modal_Component} from './app.modalcomponent';
import {Router} from 'angular2/router';

interface is_show_m {
   status:boolean;
}
interface is_msg_m {
   text:string;
}

 // 登入組件
 @Component({
  selector: 'my-login',
  styles:[`
		div.main{
            font-family:Courier;
            background:#4db6ac;
            box-shadow:0 2px 5px 0;
            width:100%;
            height:100%;
        }
        div.content{
            padding-top:10%;
        }
        
	`],
  directives:[FORM_DIRECTIVES,modal_Component],
  template: `
    <div class="main">
        <div class="content">
            <form class="form-signin"  #f="ngForm"  (ngSubmit)="onSubmit(f.value)">
                <h2 class="form-signin-heading"></h2>
                <label  class="sr-only">User</label>
                <input type="text"  class="form-control" placeholder="User" required="" autofocus="" ngControl="user" [(ngModel)]='user'>
                <label  class="sr-only">Password</label>
                <input type="password" class="form-control" placeholder="Password" required="" ngControl="password" [(ngModel)]='password'>
                <div class="checkbox">
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
    </div>
    <my-modal [msg]="msg_status" [is_show]="is_show_status"></my-modal>
  `
})
export class LoginComponent {
    user: string = '';
    password: string = '';
    msg_status: is_msg_m;
    is_show_status:is_show_m ;
    constructor(private _router: Router){
       this.user = 'Jhl';
       this.password = '123';
       this.msg_status = {text:''};;
       this.is_show_status = {status:true};
    }
    onSubmit(d) {
        var is_login:boolean = true;
        if(d.user!='Jhl'){
            this.msg_status = {text:'請輸入正確帳號 (Jhl)'};
            this.is_show_status = {status:false};
            is_login = false;
        }
        if(d.password!='1234'){
            this.msg_status = {text:'請輸入正確密碼 (1234)'};
            this.is_show_status = {status:false}; 
            is_login = false;
        }
        if(is_login==true){
            this._router.navigate(['Search',  {id: d.user} ]);
        }
    }
 }
 
 
 
   