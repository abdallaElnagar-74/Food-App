"use strict";(self.webpackChunkfood_app=self.webpackChunkfood_app||[]).push([[933],{3933:(z,g,o)=>{o.r(g),o.d(g,{UserrecipeModule:()=>J});var p=o(6814),m=o(3403),e=o(5879),h=o(8874),f=o(7302),v=o(8763),_=o(8437),l=o(6223),d=o(9157),C=o(4516),Z=o(3365),T=o(4913),A=o(3680),u=o(5881);function U(n,c){if(1&n&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function S(n,c){if(1&n&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&n){const t=c.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function O(n,c){if(1&n&&(e.TgZ(0,"span")(1,"span",27),e._uU(2),e.qZA()()),2&n){const t=c.$implicit;e.xp6(2),e.Oqu(t.name)}}function b(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",17)(1,"div",18)(2,"div",19),e._UZ(3,"img",20),e.TgZ(4,"span",21),e._uU(5),e.ALo(6,"currency"),e.qZA()(),e.TgZ(7,"h1",22)(8,"span",23),e._uU(9,"Dish Name : "),e.qZA(),e.TgZ(10,"span",1),e._uU(11),e.qZA()(),e.TgZ(12,"p",24)(13,"span",25),e._uU(14,"Category : "),e.qZA(),e.YNc(15,O,3,1,"span",26),e.qZA(),e.TgZ(16,"h3")(17,"span",25),e._uU(18,"Classificaion : "),e.qZA(),e.TgZ(19,"span",27),e._uU(20),e.qZA()(),e.TgZ(21,"button",28,29),e.NdJ("click",function(){const r=e.CHM(t).$implicit,a=e.MAs(22),N=e.oxw();return e.KtG(N.addToFav(r.id,a))}),e._uU(23,"Add to Favourites "),e._UZ(24,"i",30),e.qZA()()()}if(2&n){const t=c.$implicit,s=e.oxw();e.xp6(3),e.Q6J("src",s.imgUrl+t.imagePath,e.LSH),e.xp6(2),e.Oqu(e.lcZ(6,5,t.price)),e.xp6(6),e.Oqu(t.name),e.xp6(4),e.Q6J("ngForOf",t.category),e.xp6(5),e.Oqu(t.tag.name)}}const M=function(){return[]},y=[{path:"",component:(()=>{class n{constructor(t,s,i,r,a){this._RecipesService=t,this._CategoryService=s,this._ToastrService=i,this._user=r,this._renderer=a,this.searchValue="",this.tag=0,this.cat=0,this.pSize=10,this.pNum=1,this.recipeData=[],this.totalData=0,this.tags=[],this.imgUrl="https://upskilling-egypt.com:3006/",this.categories=[],this.pageSizeOptions=[5,10,25],this.showPageSizeOptions=!0,this.showFirstLastButtons=!0}ngOnInit(){this.getRecipes(),this.getCategories(),this.getAllTags()}getCategories(){this._CategoryService.getCategotiesData(1,1e4).subscribe({next:t=>{console.log(t),this.categories=t.data},error:t=>{console.log(t)}})}getAllTags(){this._RecipesService.getTags().subscribe({next:t=>{console.log(t),this.tags=t},error:t=>{console.log(t)}})}getRecipes(){this._RecipesService.getRecipes({name:this.searchValue,tagId:this.tag,categoryId:this.cat,pageSize:this.pSize,pageNumber:this.pNum}).subscribe({next:s=>{this.recipeData=s.data,this.totalData=s.totalNumberOfRecords},error:s=>{this._ToastrService.error("The is A problem in Showing data")}})}handlePageEvent(t){this.totalData=t.length,this.pSize=t.pageSize,this.pNum=t.pageIndex,this.getRecipes()}addToFav(t,s){this._renderer.setAttribute(s,"disabled","true"),this._user.addToFavourites(t).subscribe({next:i=>{this._renderer.removeAttribute(s,"disabled","false"),this._ToastrService.success("Item Added Successfully")}})}static#e=this.\u0275fac=function(s){return new(s||n)(e.Y36(h.v),e.Y36(f.H),e.Y36(v._W),e.Y36(_.f),e.Y36(e.Qsj))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-userrecipe"]],decls:32,vars:11,consts:[[1,"fw-bold","m-0"],[1,"text-success"],[1,"row","mt-3"],[1,"col-md-6"],["appearance","outline",1,"example-full-width","w-100"],["matInput","",3,"ngModel","ngModelChange","keyup.enter"],[1,"col-md-3"],["appearance","outline",1,"w-100"],[3,"ngModel","ngModelChange","selectionChange"],["value","0"],[3,"value",4,"ngFor","ngForOf"],[1,"row","g-3"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["aria-label","Select page",1,"demo-paginator",3,"length","pageSize","pageSizeOptions","pageIndex","page"],["paginator",""],[3,"value"],[1,"col-md-4"],[1,"cart","shadow-sm","rounded-top-4","rounded-bottom-4","p-3","cursor-pointer"],[1,"mb-2","position-relative",2,"height","300px"],["alt","",1,"w-100","h-100",3,"src"],[1,"badge","p-2","bg-white","text-success","position-absolute"],[1,"m-0","mb-1"],[1,"fw-semibold"],[1,"mb-1"],[1,"fw-semibold","h4"],[4,"ngFor","ngForOf"],[1,"h5"],[1,"buton","w-75","d-block","mx-auto","rounded-2","mt-2",3,"click"],["ele",""],[1,"fa-solid","fa-heart-circle-plus","text-danger"]],template:function(s,i){1&s&&(e.TgZ(0,"section")(1,"h1",0),e._uU(2,"Find A "),e.TgZ(3,"span",1),e._uU(4,"Recipe !"),e.qZA()(),e.TgZ(5,"div",2)(6,"div",3)(7,"mat-form-field",4)(8,"mat-label"),e._uU(9,"Search"),e.qZA(),e.TgZ(10,"input",5),e.NdJ("ngModelChange",function(a){return i.searchValue=a})("keyup.enter",function(){return i.getRecipes()}),e.qZA()()(),e.TgZ(11,"div",6)(12,"mat-form-field",7)(13,"mat-label"),e._uU(14,"Category"),e.qZA(),e.TgZ(15,"mat-select",8),e.NdJ("ngModelChange",function(a){return i.cat=a})("selectionChange",function(){return i.getRecipes()}),e.TgZ(16,"mat-option",9),e._uU(17,"All"),e.qZA(),e.YNc(18,U,2,2,"mat-option",10),e.qZA()()(),e.TgZ(19,"div",6)(20,"mat-form-field",7)(21,"mat-label"),e._uU(22,"Tag"),e.qZA(),e.TgZ(23,"mat-select",8),e.NdJ("ngModelChange",function(a){return i.tag=a})("selectionChange",function(){return i.getRecipes()}),e.TgZ(24,"mat-option",9),e._uU(25,"All"),e.qZA(),e.YNc(26,S,2,2,"mat-option",10),e.qZA()()()(),e.TgZ(27,"div",11),e.YNc(28,b,25,7,"div",12),e.qZA(),e.TgZ(29,"div",13)(30,"mat-paginator",14,15),e.NdJ("page",function(a){return i.handlePageEvent(a)}),e.qZA()()()),2&s&&(e.xp6(10),e.Q6J("ngModel",i.searchValue),e.xp6(5),e.Q6J("ngModel",i.cat),e.xp6(3),e.Q6J("ngForOf",i.categories),e.xp6(5),e.Q6J("ngModel",i.tag),e.xp6(3),e.Q6J("ngForOf",i.tags),e.xp6(2),e.Q6J("ngForOf",i.recipeData),e.xp6(2),e.Q6J("length",i.totalData)("pageSize",i.pSize)("pageSizeOptions",i.showPageSizeOptions?i.pageSizeOptions:e.DdM(10,M))("pageIndex",i.pNum))},dependencies:[p.sg,l.Fj,l.JJ,l.On,d.KE,d.hX,C.Nt,Z.NW,T.gD,A.ey,u.bc,u.YE,p.H9],styles:[".badge[_ngcontent-%COMP%]{inset-block-start:1%!important;inset-inline-end:1%!important}.buton[_ngcontent-%COMP%]{transform:translateY(200%);transition:all .7s}.cart[_ngcontent-%COMP%]{overflow:hidden;border:2px solid transparent;transition:all .5s}.cart[_ngcontent-%COMP%]:hover   .buton[_ngcontent-%COMP%]{transform:translateY(0)}.cart[_ngcontent-%COMP%]:hover{border:2px solid #4AA35A}"]})}return n})()}];let x=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(y),m.Bz]})}return n})();var F=o(1336);let J=(()=>{class n{static#e=this.\u0275fac=function(s){return new(s||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[p.ez,x,F.m]})}return n})()}}]);