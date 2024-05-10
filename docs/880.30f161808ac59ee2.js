"use strict";(self.webpackChunkfood_app=self.webpackChunkfood_app||[]).push([[880],{880:(ae,C,d)=>{d.r(C),d.d(C,{AuthModule:()=>se});var f=d(6814),_=d(3403),i=d(6223),g=d(5881),e=d(5879),h=d(139),Z=d(8763),q=d(7954);function U(o,a){1&o&&(e.TgZ(0,"p",25),e._uU(1,"email is invalid"),e.qZA())}function P(o,a){1&o&&(e.TgZ(0,"p",25),e._uU(1,"email is required"),e.qZA())}function x(o,a){1&o&&(e.TgZ(0,"p",25),e._uU(1,"code is required"),e.qZA())}function F(o,a){1&o&&(e.TgZ(0,"p",25),e._uU(1,"password is required"),e.qZA())}function N(o,a){1&o&&(e.TgZ(0,"p",25),e._uU(1,"confirmPassword is required"),e.qZA())}function J(o,a){1&o&&(e.TgZ(0,"p",25),e._uU(1,"password not match"),e.qZA())}function k(o,a){1&o&&e._UZ(0,"i",26)}let I=(()=>{class o{constructor(n,r,t,s){this._AuthService=n,this._FormGroup=r,this._ToastrService=t,this._DialogRef=s,this.loading=!1,this.resetPassForm=this._FormGroup.group({email:["",[i.kI.email,i.kI.required]],password:["",[i.kI.required]],confirmPassword:["",[g.CM.compare({fieldName:"password"}),i.kI.required]],seed:["",[i.kI.required]]}),this.eye=!1,this.eyeLash=!1}resetPassword(){this.loading||(this.loading=!0,this._AuthService.resetPassword(this.resetPassForm.value).subscribe({next:n=>{this._DialogRef.close(),this._ToastrService.success(n.message),this.loading=!1,console.log(n)},error:n=>{this.loading=!1,console.log(n)}}))}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(h.e),e.Y36(i.qu),e.Y36(Z._W),e.Y36(q.zj))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-resetpass"]],decls:41,vars:14,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-md-12"],[1,"card"],[1,"w-75","d-flex","justify-content-center","mx-auto"],["src","./assets/images/authlogo.svg","alt","",1,"w-75"],[1,"mt-2"],["action","",3,"formGroup","ngSubmit"],[1,"input-group","flex-nowrap","mb-1"],["id","basic-addon1",1,"input-group-text"],[1,"fa-regular","fa-envelope"],["formControlName","email","type","email","placeholder","Email","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"input-group","mb-1","mt-3"],[1,"fa-solid","fa-shield-halved"],["formControlName","seed","type","text","placeholder","OTP","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],[1,"input-group","mb-1","mt-3","flex-nowrap"],[1,"fa-solid","fa-lock"],[1,"w-100","position-relative"],["formControlName","password","placeholder","New Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"fa-solid","position-absolute","top-50","translate-middle-y",3,"click"],[1,"position-relative","w-100"],["formControlName","confirmPassword","placeholder","Confirm New Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"buton","rounded-2","mt-3"],["class","fa-solid fa-spinner fa-spin text-white",4,"ngIf"],[1,"text-danger"],[1,"fa-solid","fa-spinner","fa-spin","text-white"]],template:function(r,t){if(1&r&&(e.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"h1",6),e._uU(8,"Reset Password"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Please Enter Your Otp or Check Your Inbox"),e.qZA(),e.TgZ(11,"form",7),e.NdJ("ngSubmit",function(){return t.resetPassword()}),e.TgZ(12,"div",8)(13,"span",9),e._UZ(14,"i",10),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.YNc(16,U,2,0,"p",12),e.YNc(17,P,2,0,"p",12),e.TgZ(18,"div",13)(19,"span",9),e._UZ(20,"i",14),e.qZA(),e._UZ(21,"input",15),e.qZA(),e.YNc(22,x,2,0,"p",12),e.TgZ(23,"div",16)(24,"span",9),e._UZ(25,"i",17),e.qZA(),e.TgZ(26,"div",18),e._UZ(27,"input",19),e.TgZ(28,"i",20),e.NdJ("click",function(){return t.eye=!t.eye}),e.qZA()()(),e.YNc(29,F,2,0,"p",12),e.TgZ(30,"div",16)(31,"span",9),e._UZ(32,"i",17),e.qZA(),e.TgZ(33,"div",21),e._UZ(34,"input",22),e.TgZ(35,"i",20),e.NdJ("click",function(){return t.eyeLash=!t.eyeLash}),e.qZA()()(),e.YNc(36,N,2,0,"p",12),e.YNc(37,J,2,0,"p",12),e.TgZ(38,"button",23),e._uU(39,"Reset Password "),e.YNc(40,k,1,0,"i",24),e.qZA()()()()()()()),2&r){let s,l,p,u,m,c;e.xp6(11),e.Q6J("formGroup",t.resetPassForm),e.xp6(5),e.Q6J("ngIf",null==(s=t.resetPassForm.get("email"))?null:s.getError("email")),e.xp6(1),e.Q6J("ngIf",(null==(l=t.resetPassForm.get("email"))?null:l.getError("required"))&&(null==(l=t.resetPassForm.get("email"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(p=t.resetPassForm.get("seed"))?null:p.getError("required"))&&(null==(p=t.resetPassForm.get("seed"))?null:p.touched)),e.xp6(5),e.Q6J("type",t.eye?"text":"password"),e.xp6(1),e.Tol(t.eye?"fa-eye":"fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",(null==(u=t.resetPassForm.get("password"))?null:u.getError("required"))&&(null==(u=t.resetPassForm.get("password"))?null:u.touched)),e.xp6(5),e.Q6J("type",t.eyeLash?"text":"password"),e.xp6(1),e.Tol(t.eyeLash?"fa-eye":"fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",(null==(m=t.resetPassForm.get("confirmPassword"))?null:m.getError("required"))&&(null==(m=t.resetPassForm.get("confirmPassword"))?null:m.touched)),e.xp6(1),e.Q6J("ngIf",(null==(c=t.resetPassForm.get("confirmPassword"))?null:c.getError("compare"))&&""!=(null==(c=t.resetPassForm.get("confirmPassword"))?null:c.value)),e.xp6(3),e.Q6J("ngIf",t.loading)}},dependencies:[f.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,g.bc,g.VP,g.YE],styles:["input[_ngcontent-%COMP%]{background-color:#f7f7f7!important;padding-top:.5rem!important}input[_ngcontent-%COMP%]:focus{box-shadow:none}.fa-eye[_ngcontent-%COMP%], .fa-eye-slash[_ngcontent-%COMP%]{inset-inline-end:1%}"]})}return o})();var b=d(9347);function Y(o,a){1&o&&(e.TgZ(0,"p",42),e._uU(1,"email is invalid"),e.qZA())}function R(o,a){1&o&&(e.TgZ(0,"p",42),e._uU(1,"email is required"),e.qZA())}function M(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"i",43),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.changeeye())}),e.qZA()}}function S(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"i",44),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.changeeye())}),e.qZA()}}function O(o,a){1&o&&(e.TgZ(0,"p",42),e._uU(1,"password is required"),e.qZA())}function Q(o,a){1&o&&e._UZ(0,"i",45)}function E(o,a){1&o&&e._UZ(0,"i",46)}let L=(()=>{class o{constructor(n,r,t,s,l){this._FormBuilder=n,this._AuthService=r,this.dialog=t,this._ToastrService=s,this._Router=l,this.eye=!0,this.loading=!1,this.loginForm=this._FormBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required]]}),this.forgetForm=this._FormBuilder.group({email:[""]}),this.floading=!1,this.msg="",this.good=!1,this.reset=!1}changeeye(){this.eye=!this.eye}inptype(){return 1==this.eye?"password":"text"}login(){this.loading||(this.loading=!0,this._AuthService.handleLogin(this.loginForm.value).subscribe({next:n=>{console.log(n),localStorage.setItem("tokenOfUser",n.token),this._AuthService.getDecodedInfo(),"SystemUser"==this._AuthService.role?this._Router.navigate(["/dashboard/user"]):"SuperAdmin"==this._AuthService.role&&this._Router.navigate(["/dashboard/admin"]),this.loading=!1},error:n=>{console.log(n),this.loading=!1,this._ToastrService.error(n.error.message)}}))}handleForgetPass(){this.floading||(this.floading=!0,this._AuthService.forgotPass(this.forgetForm.value).subscribe({next:n=>{console.log(n),this.floading=!1,this.msg=n.message,this.good=!0,this.reset=!0},error:n=>{this.reset=!1,this.good=!1,console.log(n),this.floading=!1,this.msg=n.error.message}}))}handleValue(n){n.value="",this.reset=!1}openDialog(n,r){this.dialog.open(I,{width:"500px",enterAnimationDuration:n,exitAnimationDuration:r})}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(i.qu),e.Y36(h.e),e.Y36(b.uw),e.Y36(Z._W),e.Y36(_.F0))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:63,vars:15,consts:[[1,"container"],[1,"row","justify-content-center","align-items-center","vh-100"],[1,"col-md-8"],[1,"card"],[1,"logo","d-flex","justify-content-center","w-75","mx-auto"],["src","./assets/images/authlogo.svg","alt","",1,"w-50"],["action","",3,"formGroup","ngSubmit"],[1,"input-group","mb-1"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-mobile-screen-button"],["formControlName","email","type","email","placeholder","Enter your E-mail","aria-label","Email","aria-describedby","basic-addon1",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"input-group","mt-3","mb-1","flex-nowrap"],[1,"fa-solid","fa-lock"],[1,"w-100","position-relative"],["formControlName","password","placeholder","password","aria-label","Password","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"position-absolute","top-50","translate-middle-y","eyy"],["class","fa-regular fa-eye",3,"click",4,"ngIf"],["class","fa-regular fa-eye-slash",3,"click",4,"ngIf"],[1,"links","mt-3"],["href","","routerLink","/auth/register",1,"first"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"model"],["type","submit",1,"rounded-2","mt-3","buton"],["class","fa-solid fa-spinner text-white fa-spin",4,"ngIf"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-body"],[1,"row","justify-content-center"],[1,"card","d-flex","flex-column","align-items-center"],[1,"w-50","d-flex","justify-content-center","mx-auto"],["src","./assets/images/authlogo.svg","alt","",1,"w-100"],[1,"col-md-12","mt-2"],[1,""],[1,"input-group","my-3"],[1,"fa-regular","fa-envelope"],["formControlName","email","type","text","placeholder","Enter your email","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["mail",""],[1,"overflow-hidden"],["data-bs-dismiss","modal","type","button",1,"btn","btn-danger","d-block","mx-auto",3,"click"],["type","submit",1,"buton","text-center","rounded-2","mt-5"],["class","fa-solid fa-spinner fa-spin text-white",4,"ngIf"],[1,"text-danger"],[1,"fa-regular","fa-eye",3,"click"],[1,"fa-regular","fa-eye-slash",3,"click"],[1,"fa-solid","fa-spinner","text-white","fa-spin"],[1,"fa-solid","fa-spinner","fa-spin","text-white"]],template:function(r,t){if(1&r){const s=e.EpF();e.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"h1"),e._uU(8,"Log In"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Welcome Back! Please enter your details"),e.qZA(),e.TgZ(11,"form",6),e.NdJ("ngSubmit",function(){return t.login()}),e.TgZ(12,"div",7)(13,"span",8),e._UZ(14,"i",9),e.qZA(),e._UZ(15,"input",10),e.qZA(),e.YNc(16,Y,2,0,"p",11),e.YNc(17,R,2,0,"p",11),e.TgZ(18,"div",12)(19,"span",8),e._UZ(20,"i",13),e.qZA(),e.TgZ(21,"div",14),e._UZ(22,"input",15),e.TgZ(23,"span",16),e.YNc(24,M,1,0,"i",17),e.qZA(),e.TgZ(25,"span",16),e.YNc(26,S,1,0,"i",18),e.qZA()()(),e.YNc(27,O,2,0,"p",11),e.TgZ(28,"div",19)(29,"a",20),e._uU(30,"Register Now?"),e.qZA(),e.TgZ(31,"button",21),e._uU(32," Forget Password? "),e.qZA()(),e.TgZ(33,"button",22),e._uU(34,"Login "),e.YNc(35,Q,1,0,"i",23),e.qZA()()()()()()(),e.TgZ(36,"div",24)(37,"div",25)(38,"div",26)(39,"div",27)(40,"div",28)(41,"div",29)(42,"div",30),e._UZ(43,"img",31),e.qZA(),e.TgZ(44,"div",32)(45,"h1"),e._uU(46,"Forget Your Password?"),e.qZA(),e.TgZ(47,"p",33),e._uU(48,"No worries! Please enter your email and we will send a password reset link"),e.qZA(),e.TgZ(49,"form",6),e.NdJ("ngSubmit",function(){return t.handleForgetPass()}),e.TgZ(50,"div",34)(51,"span",8),e._UZ(52,"i",35),e.qZA(),e._UZ(53,"input",36,37),e.qZA(),e.TgZ(55,"p",33),e._uU(56),e.qZA(),e.TgZ(57,"div",38)(58,"button",39),e.NdJ("click",function(){e.CHM(s);const p=e.MAs(54);return t.handleValue(p),e.KtG(t.openDialog("500ms","250ms"))}),e._uU(59,"Reset your Password"),e.qZA()(),e.TgZ(60,"button",40),e._uU(61,"Submit "),e.YNc(62,E,1,0,"i",41),e.qZA()()()()()()()()()}if(2&r){let s,l,p;e.xp6(11),e.Q6J("formGroup",t.loginForm),e.xp6(5),e.Q6J("ngIf",null==(s=t.loginForm.get("email"))?null:s.getError("email")),e.xp6(1),e.Q6J("ngIf",(null==(l=t.loginForm.get("email"))?null:l.getError("required"))&&t.loginForm.get("email")&&(null==(l=t.loginForm.get("email"))?null:l.touched)),e.xp6(5),e.Q6J("type",t.inptype()),e.xp6(2),e.Q6J("ngIf",0==t.eye),e.xp6(2),e.Q6J("ngIf",t.eye),e.xp6(1),e.Q6J("ngIf",(null==(p=t.loginForm.get("password"))?null:p.getError("required"))&&t.loginForm.get("password")&&(null==(p=t.loginForm.get("password"))?null:p.touched)),e.xp6(8),e.Q6J("ngIf",t.loading),e.xp6(14),e.Q6J("formGroup",t.forgetForm),e.xp6(6),e.Tol(t.good?"text-success":"text-danger"),e.xp6(1),e.Oqu(t.msg),e.xp6(2),e.Tol(t.reset?"repos-btn":"reset-btn"),e.xp6(4),e.Q6J("ngIf",t.floading)}},dependencies:[f.O5,_.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,g.bc,g.VP,g.YE],styles:["section[_ngcontent-%COMP%]{background-image:url(bglogin.a6350e256acde755.png);height:100vh;background-position:center center;background-size:cover;background-repeat:no-repeat}.links[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.links[_ngcontent-%COMP%]   .model[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#3a3a3d;background-color:transparent;border:unset}.links[_ngcontent-%COMP%]   .second[_ngcontent-%COMP%]{color:#4aa35a;font-weight:500}.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}input[_ngcontent-%COMP%]{background-color:#f7f7f7!important;padding-top:.5rem!important}input[_ngcontent-%COMP%]:focus{box-shadow:none}.eyy[_ngcontent-%COMP%]{inset-inline-end:1%}.reset-btn[_ngcontent-%COMP%]{transform:translateY(500%)}.btn-danger[_ngcontent-%COMP%]{transition:all 2s}.repos-btn[_ngcontent-%COMP%]{transform:translateY(0)}"]})}return o})();function z(o,a){1&o&&e._UZ(0,"i",14)}let A=(()=>{class o{constructor(n,r,t,s,l){this._AuthService=n,this._FormBuilder=r,this._ToastrService=t,this._DialogRef=s,this.data=l,this.loading=!1,this.verifyForm=new i.cw({email:new i.NI(this.data.email),code:new i.NI("")})}verify(){this.loading=!0,this._AuthService.verification(this.verifyForm.value).subscribe({next:n=>{this._DialogRef.close(),this.loading=!1,console.log(n),this._ToastrService.success(n.message)},error:n=>{this.loading=!1,console.log(n)}})}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(h.e),e.Y36(i.qu),e.Y36(Z._W),e.Y36(q.zj),e.Y36(b.WI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-verify"]],decls:18,vars:2,consts:[[1,"w-100"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"mt-3","title"],["action","",3,"formGroup","ngSubmit"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],[1,"fa-regular","fa-envelope"],["formControlName","email","type","email","placeholder","Your Email","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],[1,"fa-solid","fa-shield-halved"],["formControlName","code","type","text","placeholder","Activation Code","aria-label","Username","aria-describedby","basic-addon1",1,"form-control"],["type","submit",1,"buton","rounded-2","text-center","w-25","d-block","ms-auto","mb-3"],["class","fa-solid fa-spinner fa-spin text-white",4,"ngIf"],[1,"fa-solid","fa-spinner","fa-spin","text-white"]],template:function(r,t){1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),e._uU(5,"Verification Form"),e.qZA(),e.TgZ(6,"form",5),e.NdJ("ngSubmit",function(){return t.verify()}),e.TgZ(7,"div",6)(8,"span",7),e._UZ(9,"i",8),e.qZA(),e._UZ(10,"input",9),e.qZA(),e.TgZ(11,"div",6)(12,"span",7),e._UZ(13,"i",10),e.qZA(),e._UZ(14,"input",11),e.qZA(),e.TgZ(15,"button",12),e._uU(16," Verify "),e.YNc(17,z,1,0,"i",13),e.qZA()()()()()()),2&r&&(e.xp6(6),e.Q6J("formGroup",t.verifyForm),e.xp6(11),e.Q6J("ngIf",t.loading))},dependencies:[f.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,g.bc,g.VP,g.YE],styles:["input[_ngcontent-%COMP%]{background-color:#f7f7f7!important;padding-top:.5rem!important}input[_ngcontent-%COMP%]:focus{box-shadow:none}.title[_ngcontent-%COMP%]{font-size:20px}"]})}return o})();var T=d(4426);function j(o,a){1&o&&e._UZ(0,"ngx-dropzone-image-preview",38),2&o&&e.Q6J("file",a.$implicit)}function V(o,a){1&o&&(e.TgZ(0,"p",39),e._uU(1,"User Name is Requird"),e.qZA())}function G(o,a){1&o&&(e.TgZ(0,"p",39),e._uU(1,"Email not Valid"),e.qZA())}function D(o,a){1&o&&(e.TgZ(0,"p",39),e._uU(1,"Email is Required"),e.qZA())}function B(o,a){1&o&&(e.TgZ(0,"p",39),e._uU(1,"Country Name is Required"),e.qZA())}function W(o,a){1&o&&(e.TgZ(0,"p",39),e._uU(1,"Phone is Required"),e.qZA())}function H(o,a){1&o&&(e.TgZ(0,"p",39),e._uU(1,"Not Valid Phone Number"),e.qZA())}function X(o,a){1&o&&(e.TgZ(0,"p",39),e._uU(1,"Password is Required"),e.qZA())}function K(o,a){1&o&&(e.TgZ(0,"p",39),e._uU(1,"confirm Password is Required"),e.qZA())}function $(o,a){1&o&&(e.TgZ(0,"p",39),e._uU(1,"Password Not match"),e.qZA())}function ee(o,a){1&o&&e._UZ(0,"i",40)}const te=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:L,title:"Login Page"},{path:"register",component:(()=>{class o{constructor(n,r,t,s){this._FormBuilder=n,this._AuthService=r,this._ToastrService=t,this.dialog=s,this.eyepass=!1,this.eyeConfirm=!1,this.loading=!1,this.registerForm=this._FormBuilder.group({userName:["",[i.kI.required]],email:["",[i.kI.email,i.kI.required]],country:["",[i.kI.required]],phoneNumber:["",[i.kI.required,i.kI.pattern(/^(002)?01[0125][0-9]{8}$/)]],profileImage:["",[i.kI.required]],password:["",i.kI.required],confirmPassword:["",[g.CM.compare({fieldName:"password"}),i.kI.required]]}),this.files=[]}openDialog(n,r){this.dialog.open(A,{width:"500px",enterAnimationDuration:n,exitAnimationDuration:r})}register(n){let r=new FormData;r.append("userName",this.registerForm.get("userName")?.value),r.append("email",this.registerForm.get("email")?.value),r.append("country",this.registerForm.get("country")?.value),r.append("phoneNumber",this.registerForm.get("phoneNumber")?.value),r.append("password",this.registerForm.get("password")?.value),r.append("confirmPassword",this.registerForm.get("confirmPassword")?.value),r.append("profileImage",this.imgSrc),this.loading||(this.loading=!0,this._AuthService.handleRegister(n.value).subscribe({next:t=>{this.Data(this.registerForm.value,"500ms","250ms"),this.loading=!1,console.log(t),this._ToastrService.success(t.message)},error:t=>{this.loading=!1,console.log(t),this._ToastrService.error(t.error.message)}}))}Data(n,r,t){this.dialog.open(A,{width:"500px",enterAnimationDuration:r,exitAnimationDuration:t,data:n})}onSelect(n){console.log(n),this.files.push(...n.addedFiles),this.imgSrc=this.files[0]}onRemove(n){console.log(n),this.files.splice(this.files.indexOf(n),1)}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(i.qu),e.Y36(h.e),e.Y36(Z._W),e.Y36(b.uw))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],decls:71,vars:19,consts:[[1,""],[1,"container"],[1,"row","justify-content-center","align-items-center"],[1,"col-md-10"],[1,"card","bg-white"],[1,"d-flex","justify-content-center","w-75","mx-auto"],["src","./assets/images/authlogo.svg","alt","",1,"w-50"],["action","",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-12","mb-3"],[1,"d-flex","justify-content-center"],[1,"drop",3,"multiple","change"],[1,"fa-solid","fa-upload"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file",4,"ngFor","ngForOf"],[1,"col-sm-6"],[1,"input-group","flex-nowrap","mb-1","mt-3"],["id","addon-wrapping",1,"input-group-text"],[1,"fa-solid","fa-user"],["formControlName","userName","type","text","placeholder","Username","aria-label","Username","aria-describedby","addon-wrapping",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"fa-solid","fa-envelope"],["formControlName","email","type","email","placeholder","Enter your E-mail","aria-label","Username","aria-describedby","addon-wrapping",1,"form-control"],[1,"fa-solid","fa-earth-americas"],["formControlName","country","type","text","placeholder","Country","aria-label","Username","aria-describedby","addon-wrapping",1,"form-control"],[1,"fa-solid","fa-mobile-screen-button"],["formControlName","phoneNumber","type","tel","placeholder","PhoneNumber","aria-label","Username","aria-describedby","addon-wrapping",1,"form-control"],[1,"fa-solid","fa-lock"],[1,"position-relative","w-100"],["formControlName","password","placeholder","Password","aria-label","Username","aria-describedby","addon-wrapping",1,"form-control",3,"type"],[1,"fa-solid","position-absolute","top-50","translate-middle-y",3,"click"],[1,"input","input-group","flex-nowrap","mb-1","mt-3"],[1,"w-100","position-relative"],["formControlName","confirmPassword","placeholder","Confirm Password","aria-label","Username","aria-describedby","addon-wrapping",1,"form-control","input",3,"type"],[1,"d-flex","justify-content-between","mt-3"],["href","","routerLink","/auth/login",1,"text-end"],["type","button",1,"dibuton",3,"click"],[1,"buton","mt-4","rounded-2","w-50","d-block","mx-auto"],["class","fa-solid fa-spinner fa-spin-pulse text-white",4,"ngIf"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file"],[1,"text-danger"],[1,"fa-solid","fa-spinner","fa-spin-pulse","text-white"]],template:function(r,t){if(1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._UZ(6,"img",6),e.qZA(),e.TgZ(7,"h1"),e._uU(8,"Register"),e.qZA(),e.TgZ(9,"p"),e._uU(10,"Welcome Back! Please enter your details"),e.qZA(),e.TgZ(11,"form",7),e.NdJ("ngSubmit",function(){return t.register(t.registerForm)}),e.TgZ(12,"div",8)(13,"div",9)(14,"div",10)(15,"ngx-dropzone",11),e.NdJ("change",function(l){return t.onSelect(l)}),e.TgZ(16,"ngx-dropzone-label"),e._UZ(17,"i",12),e._uU(18," Upload Your Image"),e.qZA(),e.YNc(19,j,1,1,"ngx-dropzone-image-preview",13),e.qZA()()(),e.TgZ(20,"div",14)(21,"div",15)(22,"span",16),e._UZ(23,"i",17),e.qZA(),e._UZ(24,"input",18),e.qZA(),e.YNc(25,V,2,0,"p",19),e.qZA(),e.TgZ(26,"div",14)(27,"div",15)(28,"span",16),e._UZ(29,"i",20),e.qZA(),e._UZ(30,"input",21),e.qZA(),e.YNc(31,G,2,0,"p",19),e.YNc(32,D,2,0,"p",19),e.qZA(),e.TgZ(33,"div",14)(34,"div",15)(35,"span",16),e._UZ(36,"i",22),e.qZA(),e._UZ(37,"input",23),e.qZA(),e.YNc(38,B,2,0,"p",19),e.qZA(),e.TgZ(39,"div",14)(40,"div",15)(41,"span",16),e._UZ(42,"i",24),e.qZA(),e._UZ(43,"input",25),e.qZA(),e.YNc(44,W,2,0,"p",19),e.YNc(45,H,2,0,"p",19),e.qZA(),e.TgZ(46,"div",14)(47,"div",15)(48,"span",16),e._UZ(49,"i",26),e.qZA(),e.TgZ(50,"div",27),e._UZ(51,"input",28),e.TgZ(52,"i",29),e.NdJ("click",function(){return t.eyepass=!t.eyepass}),e.qZA()()(),e.YNc(53,X,2,0,"p",19),e.qZA(),e.TgZ(54,"div",14)(55,"div",30)(56,"span",16),e._UZ(57,"i",26),e.qZA(),e.TgZ(58,"div",31),e._UZ(59,"input",32),e.TgZ(60,"i",29),e.NdJ("click",function(){return t.eyeConfirm=!t.eyeConfirm}),e.qZA()()(),e.YNc(61,K,2,0,"p",19),e.YNc(62,$,2,0,"p",19),e.qZA()(),e.TgZ(63,"div",33)(64,"a",34),e._uU(65,"Login Now?"),e.qZA(),e.TgZ(66,"button",35),e.NdJ("click",function(){let l;return t.Data(null==(l=t.registerForm.get("email"))?null:l.value,"500ms","250ms")}),e._uU(67,"Verify Now"),e.qZA()(),e.TgZ(68,"button",36),e._uU(69,"Register "),e.YNc(70,ee,1,0,"i",37),e.qZA()()()()()()()),2&r){let s,l,p,u,m,c,v,y,w;e.xp6(11),e.Q6J("formGroup",t.registerForm),e.xp6(4),e.Q6J("multiple",!1),e.xp6(4),e.Q6J("ngForOf",t.files),e.xp6(6),e.Q6J("ngIf",(null==(s=t.registerForm.get("userName"))?null:s.getError("required"))&&(null==(s=t.registerForm.get("userName"))?null:s.touched)),e.xp6(6),e.Q6J("ngIf",null==(l=t.registerForm.get("email"))?null:l.getError("email")),e.xp6(1),e.Q6J("ngIf",(null==(p=t.registerForm.get("email"))?null:p.getError("required"))&&(null==(p=t.registerForm.get("email"))?null:p.touched)),e.xp6(6),e.Q6J("ngIf",(null==(u=t.registerForm.get("country"))?null:u.getError("required"))&&(null==(u=t.registerForm.get("country"))?null:u.touched)),e.xp6(6),e.Q6J("ngIf",(null==(m=t.registerForm.get("phoneNumber"))?null:m.getError("required"))&&(null==(m=t.registerForm.get("phoneNumber"))?null:m.touched)),e.xp6(1),e.Q6J("ngIf",null==(c=t.registerForm.get("phoneNumber"))?null:c.getError("pattern")),e.xp6(6),e.Q6J("type",t.eyepass?"text":"password"),e.xp6(1),e.Tol(t.eyepass?"fa-eye":"fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",(null==(v=t.registerForm.get("password"))?null:v.getError("required"))&&(null==(v=t.registerForm.get("password"))?null:v.touched)),e.xp6(6),e.Q6J("type",t.eyeConfirm?"text":"password"),e.xp6(1),e.Tol(t.eyeConfirm?"fa-eye":"fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",(null==(y=t.registerForm.get("confirmPassword"))?null:y.getError("required"))&&(null==(y=t.registerForm.get("confirmPassword"))?null:y.touched)),e.xp6(1),e.Q6J("ngIf",(null==(w=t.registerForm.get("confirmPassword"))?null:w.getError("compare"))&&""!=(null==(w=t.registerForm.get("confirmPassword"))?null:w.value)),e.xp6(8),e.Q6J("ngIf",t.loading)}},dependencies:[f.sg,f.O5,_.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,T._f,T.NP,T.sv,g.bc,g.VP,g.YE],styles:["section[_ngcontent-%COMP%]{background-image:linear-gradient(rgba(0,0,0,.318),rgba(0,0,0,.318)),url(bgtwo.82bf83302012a64c.png);background-position:center center;background-repeat:no-repeat;background-size:cover;padding:1rem}input[_ngcontent-%COMP%]{background-color:#f7f7f7!important;padding-top:.5rem!important}input[_ngcontent-%COMP%]:focus{box-shadow:none}.drop[_ngcontent-%COMP%]{width:300px;height:300px;border-radius:100vh}a[_ngcontent-%COMP%]{color:#4aa35a;font-size:16px;font-weight:500;text-decoration:none}.dibuton[_ngcontent-%COMP%]{color:#000!important;font-size:16px;font-weight:500;text-decoration:none;border:unset;background-color:transparent}button[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#fff}.fa-eye[_ngcontent-%COMP%], .fa-eye-slash[_ngcontent-%COMP%]{inset-inline-end:1%}"]})}return o})(),title:"Register Page"}];let oe=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[_.Bz.forChild(te),_.Bz]})}return o})();var ne=d(9862),ie=d(1336),re=d(2296);let se=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[f.ez,oe,ne.JF,i.UX,ie.m,g.Ju,re.ot,b.Is]})}return o})()}}]);