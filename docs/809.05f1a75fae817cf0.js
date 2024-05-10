"use strict";(self.webpackChunkfood_app=self.webpackChunkfood_app||[]).push([[809],{8437:(U,m,a)=>{a.d(m,{f:()=>d});var s=a(5879),t=a(9862);let d=(()=>{class p{constructor(r){this._HttpClient=r}getAllUsers(r){return this._HttpClient.get("Users",{params:r})}deleteUser(r){return this._HttpClient.delete(`Users/${r}`)}addToFavourites(r){return this._HttpClient.post("userRecipe",{recipeId:r})}getFavourites(){return this._HttpClient.get("userRecipe")}deleteFavourites(r){return this._HttpClient.delete(`userRecipe/${r}`)}updateUSer(r){return this._HttpClient.put("Users",r)}getUserById(r){return this._HttpClient.get(`Users/${r}`)}static#t=this.\u0275fac=function(c){return new(c||p)(s.LFG(t.eN))};static#e=this.\u0275prov=s.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},3809:(U,m,a)=>{a.r(m),a.d(m,{DashboardModule:()=>L});var s=a(6814),t=a(5879),d=a(3403),p=a(139),r=a(5881),c=a(6223),b=a(8763),C=a(7954);function x(n,u){1&n&&(t.TgZ(0,"p",19),t._uU(1,"password not match"),t.qZA())}function y(n,u){1&n&&t._UZ(0,"i",20)}let T=(()=>{class n{constructor(e,o,i,l){this._AuthService=e,this._FormBuilder=o,this._ToastrService=i,this._DialogRef=l,this.e1=!1,this.e2=!1,this.e3=!1,this.loading=!1,this.updateForm=this._FormBuilder.group({oldPassword:[""],newPassword:[""],confirmNewPassword:["",[r.CM.compare({fieldName:"newPassword"})]]})}onClose(){this._DialogRef.close()}updatePass(){this.loading||(this.loading=!0,this._AuthService.updatePassword(this.updateForm.value).subscribe({next:e=>{this._DialogRef.close(),console.log(e),this.loading=!1,this._ToastrService.success(e.message)},error:e=>{this.loading=!1,console.log(e),this._ToastrService.error(e.error.message)}}))}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(p.e),t.Y36(c.qu),t.Y36(b._W),t.Y36(C.zj))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-updatepass"]],decls:33,vars:12,consts:[[1,"p-3"],[1,"d-flex","justify-content-end","mt-2"],[1,"fa-solid","fa-circle-xmark","fa-xl","text-danger",3,"click"],["action","",3,"formGroup","ngSubmit"],[1,"d-flex","justify-content-center","w-75","mx-auto"],["src","../../../../assets/images/authlogo.svg","alt","",1,"w-75"],[1,"mt-3","mb-4"],[1,"m-0"],[1,"input-group","mb-3","flex-nowrap"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-lock"],[1,"position-relative","w-100"],["formControlName","oldPassword","type","text","placeholder","Old Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],[1,"fa-solid","position-absolute","top-50","translate-middle-y","end-0",3,"click"],["formControlName","newPassword","type","text","placeholder","New Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],["formControlName","confirmNewPassword","type","text","placeholder","Confirm New Password","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"type"],["class","text-danger",4,"ngIf"],[1,"btn","btn-outline-success","d-block","mx-auto"],["class","fa-solid fa-spinner fa-spin",4,"ngIf"],[1,"text-danger"],[1,"fa-solid","fa-spinner","fa-spin"]],template:function(o,i){if(1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"i",2),t.NdJ("click",function(){return i.onClose()}),t.qZA()(),t.TgZ(3,"form",3),t.NdJ("ngSubmit",function(){return i.updatePass()}),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6)(7,"h1",7),t._uU(8,"Change Your Password"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Enter your details below"),t.qZA()(),t.TgZ(11,"div",8)(12,"span",9),t._UZ(13,"i",10),t.qZA(),t.TgZ(14,"div",11),t._UZ(15,"input",12),t.TgZ(16,"i",13),t.NdJ("click",function(){return i.e1=!i.e1}),t.qZA()()(),t.TgZ(17,"div",8)(18,"span",9),t._UZ(19,"i",10),t.qZA(),t.TgZ(20,"div",11),t._UZ(21,"input",14),t.TgZ(22,"i",13),t.NdJ("click",function(){return i.e2=!i.e2}),t.qZA()()(),t.TgZ(23,"div",8)(24,"span",9),t._UZ(25,"i",10),t.qZA(),t.TgZ(26,"div",11),t._UZ(27,"input",15),t.TgZ(28,"i",13),t.NdJ("click",function(){return i.e3=!i.e3}),t.qZA()()(),t.YNc(29,x,2,0,"p",16),t.TgZ(30,"button",17),t._uU(31,"Change Password "),t.YNc(32,y,1,0,"i",18),t.qZA()()()),2&o){let l;t.xp6(3),t.Q6J("formGroup",i.updateForm),t.xp6(12),t.Q6J("type",i.e1?"text":"password"),t.xp6(1),t.Tol(i.e1?"fa-eye":"fa-eye-slash"),t.xp6(5),t.Q6J("type",i.e2?"text":"password"),t.xp6(1),t.Tol(i.e2?"fa-eye":"fa-eye-slash"),t.xp6(5),t.Q6J("type",i.e3?"text":"password"),t.xp6(1),t.Tol(i.e3?"fa-eye":"fa-eye-slash"),t.xp6(1),t.Q6J("ngIf",(null==(l=i.updateForm.get("confirmNewPassword"))?null:l.getError("compare"))&&""!=(null==(l=i.updateForm.get("confirmNewPassword"))?null:l.value)),t.xp6(3),t.Q6J("ngIf",i.loading)}},dependencies:[s.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,r.bc,r.VP,r.YE],styles:[".fa-eye[_ngcontent-%COMP%], .fa-eye-slash[_ngcontent-%COMP%]{inset-inline-end:1%!important}h1[_ngcontent-%COMP%]{font-size:25px;font-weight:600;color:#494949}p[_ngcontent-%COMP%]{font-size:16px;font-weight:400;color:#49494999}"]})}return n})();var h=a(9347),A=a(8437),P=a(4516),v=a(9157),_=a(4426);function w(n,u){1&n&&t._UZ(0,"ngx-dropzone-image-preview",17),2&n&&t.Q6J("file",u.$implicit)}let O=(()=>{class n{constructor(e,o,i,l,g){this._UsersService=e,this._FormBuilder=o,this._ToastrService=i,this._DialogRef=l,this.data=g,this.updateForm=this._FormBuilder.group({userName:[this.data.userName],email:[this.data.email],country:[this.data.country],phoneNumber:[this.data.phoneNumber],confirmPassword:["",[c.kI.required]]}),this.files=[]}onSelect(e){console.log(e),this.files.push(...e.addedFiles),this.imgSrc=this.files[0]}onRemove(e){console.log(e),this.files.splice(this.files.indexOf(e),1)}updateUser(){let e=new FormData;Object.entries(this.updateForm.value).forEach(([o,i])=>{e.append(`${o}`,i)}),e.append("profileImage",this.imgSrc),this._UsersService.updateUSer(e).subscribe({next:o=>{console.log(o),this._DialogRef.close(),this._ToastrService.success("Profile Updated Successfully")},error:o=>{console.log(o),this._ToastrService.error(o.error.message)}})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(A.f),t.Y36(c.qu),t.Y36(b._W),t.Y36(C.zj),t.Y36(h.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-update-user"]],decls:36,vars:3,consts:[[1,"p-3"],["action","",3,"formGroup","ngSubmit"],[1,"d-flex","justify-content-center","mb-2"],[1,"drop",3,"multiple","change"],[1,"fa-solid","fa-upload"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file",4,"ngFor","ngForOf"],["appearance","outline",1,"w-100"],["type","text","matInput","","formControlName","userName"],["type","email","matInput","","formControlName","email"],[1,"d-flex","justify-content-between"],["appearance","outline",1,"w-100","me-2"],["type","text","matInput","","formControlName","country"],["type","tel","matInput","","formControlName","phoneNumber"],["type","password","matInput","","formControlName","confirmPassword"],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-outline-danger","me-3",3,"click"],[1,"btn","btn-outline-success"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],3,"file"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0)(1,"form",1),t.NdJ("ngSubmit",function(){return i.updateUser()}),t.TgZ(2,"div",2)(3,"ngx-dropzone",3),t.NdJ("change",function(g){return i.onSelect(g)}),t.TgZ(4,"ngx-dropzone-label"),t._UZ(5,"i",4),t._uU(6," Upload Your Image"),t.qZA(),t.YNc(7,w,1,1,"ngx-dropzone-image-preview",5),t.qZA()(),t.TgZ(8,"mat-form-field",6),t._UZ(9,"input",7),t.TgZ(10,"mat-label"),t._uU(11,"User Name"),t.qZA()(),t.TgZ(12,"mat-form-field",6),t._UZ(13,"input",8),t.TgZ(14,"mat-label"),t._uU(15,"Email"),t.qZA()(),t.TgZ(16,"div",9)(17,"mat-form-field",10),t._UZ(18,"input",11),t.TgZ(19,"mat-label"),t._uU(20,"Country"),t.qZA()(),t.TgZ(21,"mat-form-field",6),t._UZ(22,"input",12),t.TgZ(23,"mat-label"),t._uU(24,"Phone"),t.qZA()()(),t.TgZ(25,"mat-form-field",6),t._UZ(26,"input",13),t.TgZ(27,"mat-label"),t._uU(28,"Confirm Password"),t.qZA(),t.TgZ(29,"mat-error"),t._uU(30,"Password Is Rrquired"),t.qZA()(),t.TgZ(31,"div",14)(32,"button",15),t.NdJ("click",function(){return i._DialogRef.close()}),t._uU(33,"Cancel"),t.qZA(),t.TgZ(34,"button",16),t._uU(35,"Save"),t.qZA()()()()),2&o&&(t.xp6(1),t.Q6J("formGroup",i.updateForm),t.xp6(2),t.Q6J("multiple",!1),t.xp6(4),t.Q6J("ngForOf",i.files))},dependencies:[P.Nt,v.KE,v.hX,v.TO,s.sg,_._f,_.NP,_.sv,c._Y,c.Fj,c.JJ,c.JL,r.bc,r.VP,r.YE,c.sg,c.u],styles:[".drop[_ngcontent-%COMP%]{width:250px!important;height:250px!important;border-radius:100vh}"]})}return n})();var M=a(9862);let N=(()=>{class n{constructor(e){this._HttpClient=e}getUserData(){return this._HttpClient.get("Users/currentUser")}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(M.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var S=a(617),Z=a(6311),F=a(2296),k=a(6385);function J(n,u){if(1&n&&(t.TgZ(0,"div",15)(1,"div",16),t._UZ(2,"img",17),t.qZA(),t.TgZ(3,"span",18),t._uU(4),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("src",e.imgUrl+e.data.imagePath,t.LSH),t.xp6(2),t.hij("Hello,",e.data.userName,"")}}let I=(()=>{class n{constructor(e,o,i){this._AdminService=e,this.dialog=o,this._Router=i,this.imgUrl="https://upskilling-egypt.com:3006/"}ngOnInit(){this.getUser()}openUpdateDialog(e,o,i){this.dialog.open(O,{width:"500px",enterAnimationDuration:e,exitAnimationDuration:o,data:i}).afterClosed().subscribe(g=>{this.getUser()})}getUser(){this._AdminService.getUserData().subscribe({next:e=>{console.log(e),this.data=e,console.log(this.data)},error:e=>{console.error(e)}})}openDialog(e,o){this.dialog.open(T,{width:"500px",enterAnimationDuration:e,exitAnimationDuration:o})}logOut(){localStorage.removeItem("tokenOfUser"),this._Router.navigate(["/auth/login"])}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(N),t.Y36(h.uw),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-navbar"]],decls:33,vars:2,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","rounded-3","mt-4"],[1,"container"],["role","search",1,"d-flex","w-50"],[1,"w-100","search"],["type","search","placeholder","Search Here","aria-label","Search",1,"form-control","me-2","position-relative"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0","me-3","d-flex","align-items-center"],[1,"nav-item","me-2"],["class","d-flex align-items-center justify-content-end",4,"ngIf"],[1,"nav-item"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"d-flex","align-items-center","justify-content-end"],[1,"w-50","d-flex","justify-content-end","foto","me-2"],["alt","",1,"w-100","rounded-circle",3,"src"],[1,""]],template:function(o,i){if(1&o&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"form",2)(3,"div",3),t._UZ(4,"input",4),t.qZA()(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9),t.YNc(10,J,5,2,"div",10),t.qZA(),t.TgZ(11,"li",11)(12,"button",12)(13,"mat-icon"),t._uU(14,"settings"),t.qZA()(),t.TgZ(15,"mat-menu",null,13)(17,"button",14),t.NdJ("click",function(){return i.openUpdateDialog("700ms","350ms",i.data)}),t.TgZ(18,"mat-icon"),t._uU(19,"manage_accounts"),t.qZA(),t.TgZ(20,"span"),t._uU(21,"Update Profile"),t.qZA()(),t.TgZ(22,"button",14),t.NdJ("click",function(){return i.openDialog("700ms","350ms")}),t.TgZ(23,"mat-icon"),t._uU(24,"update"),t.qZA(),t.TgZ(25,"span"),t._uU(26,"Update Password"),t.qZA()(),t._UZ(27,"mat-divider"),t.TgZ(28,"button",14),t.NdJ("click",function(){return i.logOut()}),t.TgZ(29,"mat-icon"),t._uU(30,"logout"),t.qZA(),t.TgZ(31,"span"),t._uU(32,"Log Out"),t.qZA()()()()()()()()),2&o){const l=t.MAs(16);t.xp6(10),t.Q6J("ngIf",i.data),t.xp6(2),t.Q6J("matMenuTriggerFor",l)}},dependencies:[s.O5,S.Hw,Z.VK,Z.OP,Z.p6,F.RK,c._Y,c.JL,c.F,k.d],styles:[".bg-nav[_ngcontent-%COMP%]{background-color:#f8f9fb!important}nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#2f313f}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-inline-start:25px}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#a9a9a9!important}.search[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{inset-inline-start:2%}.foto[_ngcontent-%COMP%]{width:50px!important;height:50px!important}"]})}return n})();function Y(n,u){if(1&n&&(t.TgZ(0,"li",11)(1,"a",12)(2,"span",13),t._UZ(3,"i",14),t.qZA(),t.TgZ(4,"span",8),t._uU(5),t.qZA()()()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",e.link),t.xp6(2),t.Tol(e.icon),t.xp6(2),t.Oqu(e.title)}}function D(n,u){if(1&n&&(t.ynx(0),t.YNc(1,Y,6,4,"li",10),t.BQk()),2&n){const e=u.$implicit;t.xp6(1),t.Q6J("ngIf",e.isActive)}}let z=(()=>{class n{constructor(e,o){this._AuthService=e,this.dialog=o,this.menu=[{icon:"fa-solid fa-users",title:"Users",isActive:this.is\u0650Admin(),link:"/dashboard/admin/users"},{icon:"fa-solid fa-utensils",title:"Recipes",isActive:this.is\u0650Admin(),link:"/dashboard/admin/recipes"},{icon:"fa-regular fa-calendar-days",title:"Categories",isActive:this.is\u0650Admin(),link:"/dashboard/admin/categories"},{icon:"fa-solid fa-utensils",title:"Recipes",isActive:this.isUser(),link:"/dashboard/user/userrecipe"},{icon:"fa-regular fa-heart",title:"Favourites",isActive:this.isUser(),link:"/dashboard/user/fav"}],this.collapse=!1}isUser(){return"SystemUser"==this._AuthService.role}is\u0650Admin(){return"SuperAdmin"==this._AuthService.role}openDialog(e,o){this.dialog.open(T,{width:"500px",enterAnimationDuration:e,exitAnimationDuration:o})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(p.e),t.Y36(h.uw))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-sidebar"]],decls:12,vars:1,consts:[[1,"h-100","main"],[1,"foto"],["src","../../../assets/images/3.svg","alt","",1,"w-75"],[1,"px-0"],["routerLinkActive","active-link",1,"d-flex","align-items-center","container","mt-4"],["routerLink","/dashboard/home",1,"text-decoration-none"],[1,"ikon"],[1,"me-2","fa-solid","fa-home"],[1,"text-white"],[4,"ngFor","ngForOf"],["class","d-flex align-items-center container  ","routerLinkActive","active-link",4,"ngIf"],["routerLinkActive","active-link",1,"d-flex","align-items-center","container"],["href","#",1,"text-decoration-none",3,"routerLink"],[1,""],[1,"me-2"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div")(4,"ul",3)(5,"li",4)(6,"a",5)(7,"span",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"span",8),t._uU(10,"Home"),t.qZA()()(),t.YNc(11,D,2,1,"ng-container",9),t.qZA()()()),2&o&&(t.xp6(11),t.Q6J("ngForOf",i.menu))},dependencies:[s.sg,s.O5,d.rH,d.Od],styles:['.main[_ngcontent-%COMP%]{border-radius:0 58px 0 0;background-color:#1f263e;transition:all .7s ease}a[_ngcontent-%COMP%]{width:100%}li[_ngcontent-%COMP%]{padding-block:10px;padding-inline:10px;margin-bottom:10px;position:relative}li[_ngcontent-%COMP%]:hover:before{height:100%}li[_ngcontent-%COMP%]:before{content:"";transition:all .7s;position:absolute;inset-inline-end:98%;background-color:#009247;width:5px;height:0}.active-link[_ngcontent-%COMP%]{background-color:#0092471a;padding-block:10px;padding-inline:10px;position:relative}.active-link[_ngcontent-%COMP%]:before{content:"";position:absolute;inset-inline-end:98%;background-color:#009247;width:5px;height:100%}i[_ngcontent-%COMP%]{font-size:18px;color:#fff}']})}return n})();const H=[{path:"",component:(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],decls:7,vars:0,consts:[[1,"row","container-fluid"],[1,"col-2","ps-0"],[1,"col-10"],[1,""]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-sidebar"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t._UZ(5,"app-navbar")(6,"router-outlet"),t.qZA()()())},dependencies:[d.lC,I,z],styles:[".row[_ngcontent-%COMP%]{min-height:100vh}"]})}return n})(),children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:a(4361).O,title:"Home"},{path:"admin",canActivate:[(n,u)=>{let e=(0,t.f3M)(p.e),o=(0,t.f3M)(d.F0);return null!==localStorage.getItem("tokenOfUser")&&"SuperAdmin"==e.role||(o.navigate(["/auth/login"]),!1)}],loadChildren:()=>a.e(790).then(a.bind(a,4790)).then(n=>n.AdminModule)},{path:"user",canActivate:[(n,u)=>{let e=(0,t.f3M)(p.e),o=(0,t.f3M)(d.F0);return null!==localStorage.getItem("tokenOfUser")&&"SystemUser"==e.role||(o.navigate(["/auth/login"]),!1)}],loadChildren:()=>a.e(590).then(a.bind(a,1590)).then(n=>n.UserModule)}]}];let E=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(H),d.Bz]})}return n})();var Q=a(1336);let L=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[s.ez,E,Q.m]})}return n})()},4361:(U,m,a)=>{a.d(m,{O:()=>t});var s=a(5879);let t=(()=>{class d{static#t=this.\u0275fac=function(r){return new(r||d)};static#e=this.\u0275cmp=s.Xpm({type:d,selectors:[["app-home"]],decls:20,vars:0,consts:[[1,""],[1,"header","rounded-4","mt-3"],[1,"d-flex","justify-content-end"],["src","../../../assets/images/home-avatar.svg","alt","",1,"me-3"],[1,"row","content","justify-content-between","align-items-center","mt-4","p-5","rounded-4"],[1,"col-md-6"],[1,"buton","w-25","rounded-2","py-3","d-block","ms-auto"],[1,"fa-solid","fa-arrow-right","text-white"]],template:function(r,c){1&r&&(s.TgZ(0,"section",0)(1,"div",1)(2,"div",2),s._UZ(3,"img",3),s.qZA()(),s.TgZ(4,"div",4)(5,"div",5)(6,"div",0)(7,"h1"),s._uU(8,"Fill the "),s.TgZ(9,"span"),s._uU(10,"Recipes"),s.qZA(),s._uU(11," !"),s.qZA(),s.TgZ(12,"p"),s._uU(13,"you can now fill the meals easily using the table and form ,"),s._UZ(14,"br"),s._uU(15," click here and sill it with the table !"),s.qZA()()(),s.TgZ(16,"div",5)(17,"button",6),s._uU(18," Fill Recipes "),s._UZ(19,"i",7),s.qZA()()()())},styles:[".header[_ngcontent-%COMP%]{background-image:url(header-bg-svg.e7cd2c7a9e952177.svg);background-repeat:no-repeat;background-color:#009247}.content[_ngcontent-%COMP%]{background-color:#f0ffef}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:24px;font-weight:600}.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#009247}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1f263e;font-size:16px;font-weight:400}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#fff;background-color:#009247}"]})}return d})()}}]);