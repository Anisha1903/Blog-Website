"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[255],{6255:(U,m,l)=>{l.r(m),l.d(m,{BlogModule:()=>v});var u=l(6814),o=l(6223),t=l(5879),p=l(2425),g=l(770);let f=(()=>{class a{constructor(n,e,i){this.formbuilder=n,this.toastr=e,this._blog=i}ngOnInit(){this.newpostForm=this.formbuilder.group({title:["",[o.kI.required]],category:["",[o.kI.required]],description:["",[o.kI.required,o.kI.minLength(50)]],author:["",[o.kI.required]],blogImage:[""]})}onFileSelected(n){this.file=n.target.files[0],console.log(this.file)}onPublish(){if(this.newpostForm.valid){const e=this.newpostForm.value;var n=new FormData;n.append("title",e.title),n.append("category",e.category),n.append("description",e.description),n.append("author",e.author),n.append("blogImage",this.file),this._blog.createBlog(n).subscribe({next:i=>{console.log(i),this.newpostForm.reset({category:""}),this.toastr.success(i.message)},error:i=>{console.log(i),this.toastr.error(i.error.message)}})}else this.toastr.warning("All Fields are Required")}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(o.qu),t.Y36(p._W),t.Y36(g.Z))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-newpost"]],decls:26,vars:1,consts:[[1,"post-container"],[1,"container"],["enctype","multipart/form-data",3,"formGroup","ngSubmit"],["type","text","placeholder","Title","formControlName","title"],["formControlName","category"],["value","","disabled","","selected",""],["value","technology"],["value","science"],["value","travel"],["value","food"],["value","lifestyle"],["value","other"],["placeholder","Description","rows","6","formControlName","description"],["type","text","placeholder","Author Name","formControlName","author"],["type","file","name","blogImage","formControlName","blogImage",1,"form-control","text-start",3,"change"],["type","submit",1,"mt-5"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"Create a Blog Post"),t.qZA(),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return i.onPublish()}),t._UZ(5,"input",3),t.TgZ(6,"select",4)(7,"option",5),t._uU(8,"Select Category"),t.qZA(),t.TgZ(9,"option",6),t._uU(10,"Technology"),t.qZA(),t.TgZ(11,"option",7),t._uU(12,"Science"),t.qZA(),t.TgZ(13,"option",8),t._uU(14,"Travel"),t.qZA(),t.TgZ(15,"option",9),t._uU(16,"Food"),t.qZA(),t.TgZ(17,"option",10),t._uU(18,"Lifestyle"),t.qZA(),t.TgZ(19,"option",11),t._uU(20,"Other"),t.qZA()(),t._UZ(21,"textarea",12)(22,"input",13),t.TgZ(23,"input",14),t.NdJ("change",function(s){return i.onFileSelected(s)}),t.qZA(),t.TgZ(24,"button",15),t._uU(25,"Publish"),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",i.newpostForm))},dependencies:[o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.sg,o.u],styles:[".container[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:20px;background-color:#fff;box-shadow:0 0 10px #0000001a;border-radius:3px}h1[_ngcontent-%COMP%]{font-size:28px;margin-bottom:10px}input[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:20px;border:1px solid #ccc;border-radius:5px;font-size:16px}button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#007bff;color:#fff;border:none;border-radius:5px;font-size:18px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}@media (max-width: 767px){.post-container[_ngcontent-%COMP%]{padding:10px}}@media (min-width: 768px) and (max-width: 991px){.post-container[_ngcontent-%COMP%]{padding:40px}}@media (min-width: 992px){.post-container[_ngcontent-%COMP%]{padding:10px}}"]})}return a})();var x=l(8984);let _=(()=>{class a{constructor(n,e,i){this._auth=n,this.toastr=e,this.formBuilder=i}ngOnInit(){this.initializeForm(),this.getsettingData()}initializeForm(){this.settingForm=this.formBuilder.group({fname:["",[o.kI.required]],lname:["",[o.kI.required]],email:["",[o.kI.required]],password:["",[o.kI.required]],channel:["",[o.kI.required]]})}getsettingData(){const n=localStorage.getItem("token");n&&this._auth.getUserData(n).subscribe({next:e=>{this.id=e.userdata[0]._id,this.settingForm.patchValue({fname:e.userdata[0].fname,lname:e.userdata[0].lname,email:e.userdata[0].email,password:e.userdata[0].password,channel:e.userdata[0].channel})},error:e=>{console.log(e)}})}onFileSelected(n){this.file=n.target.files[0],console.log(this.file)}onSubmit(){console.log(this.settingForm.value),this.settingForm.valid?this._auth.updateSetting({settingdata:this.settingForm.value,id:this.id}).subscribe({next:e=>{console.log(e),this.toastr.success(e.message),this.getsettingData()},error:e=>{console.log(e),this.toastr.error(e.error.message)}}):(this.toastr.warning("All Fields Required"),console.log("All Fields Required"))}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(x.$),t.Y36(p._W),t.Y36(o.qu))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-setting"]],decls:27,vars:1,consts:[[1,"setting-container"],[1,"container"],["enctype","multipart/form-data",1,"settings-form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","first-name"],["type","text","id","first-name","name","first-name","placeholder","Enter your first name","formControlName","fname"],["for","last-name"],["type","text","id","last-name","name","last-name","placeholder","Enter your last name","formControlName","lname"],["for","email"],["type","email","id","email","name","email","placeholder","Enter your email","formControlName","email"],["for","password"],["type","password","id","password","name","password","placeholder","Enter your new password","formControlName","password"],["for","channel-name"],["type","text","id","channel-name","name","channel-name","placeholder","Enter your blog channel name","formControlName","channel"],["type","submit"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"User Account Settings"),t.qZA(),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(5,"div",3)(6,"label",4),t._uU(7,"First Name"),t.qZA(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",3)(10,"label",6),t._uU(11,"Last Name"),t.qZA(),t._UZ(12,"input",7),t.qZA(),t.TgZ(13,"div",3)(14,"label",8),t._uU(15,"Email"),t.qZA(),t._UZ(16,"input",9),t.qZA(),t.TgZ(17,"div",3)(18,"label",10),t._uU(19,"Password"),t.qZA(),t._UZ(20,"input",11),t.qZA(),t.TgZ(21,"div",3)(22,"label",12),t._uU(23,"Blog Channel Name"),t.qZA(),t._UZ(24,"input",13),t.qZA(),t.TgZ(25,"button",14),t._uU(26,"Save Changes"),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",i.settingForm))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".container[_ngcontent-%COMP%]{max-width:800px;margin:20px auto;padding:20px;background-color:#fff;box-shadow:0 0 10px #0000001a;border-radius:3px}h1[_ngcontent-%COMP%]{font-size:28px;margin-bottom:20px}.settings-form[_ngcontent-%COMP%]{width:100%}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{display:flex;font-size:18px;margin-bottom:5px}input[type=text][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:100%;padding:10px;border:1px solid #ccc;border-radius:5px;font-size:16px;background-color:#f3fdff}button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#00ff37;color:#fff;border:none;border-radius:5px;font-size:18px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#00b318}@media (max-width: 767px){.setting-container[_ngcontent-%COMP%]{padding:10px}h1[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:20px}}@media (min-width: 768px) and (max-width: 991px){.setting-container[_ngcontent-%COMP%]{padding:40px}}@media (min-width: 992px){.setting-container[_ngcontent-%COMP%]{padding:10px}}"]})}return a})();var c=l(7700),b=l(2296);let C=(()=>{class a{constructor(n,e,i,r,s){this.data=n,this.ref=e,this._blog=i,this.toastr=r,this.formBuilder=s,this.closingdata=""}ngOnInit(){this.inputdata=this.data,console.log(this.inputdata),this.id=this.inputdata.blogdata._id,this.initializeForm(),this.updateForm.patchValue({title:this.inputdata.blogdata.title,category:this.inputdata.blogdata.category,description:this.inputdata.blogdata.description,author:this.inputdata.blogdata.author,blogImage:this.inputdata.blogdata.blogImage})}initializeForm(){this.updateForm=this.formBuilder.group({title:["",[o.kI.required]],category:["",[o.kI.required]],description:["",[o.kI.required]],author:["",[o.kI.required]],blogImage:[""]})}onFileSelected(n){this.file=n.target.files[0]}onSubmit(){console.log(this.updateForm.value);var n=new FormData;n.append("title",this.updateForm.value.title),n.append("category",this.updateForm.value.category),n.append("description",this.updateForm.value.description),n.append("author",this.updateForm.value.author),n.append("blogImage",this.file),this.updateForm.valid?this._blog.updateBlog(n,this.id).subscribe({next:e=>{this.closingdata=e.blogData,this.ref.close(this.closingdata),this.toastr.success(e.message)},error:e=>{console.log(e),this.toastr.error(e.error.message)}}):(this.toastr.warning("All Fields Required"),console.log("All Fields Required"))}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(c.WI),t.Y36(c.so),t.Y36(g.Z),t.Y36(p._W),t.Y36(o.qu))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-update-dialog"]],decls:27,vars:2,consts:[["mat-dialog-title","",1,"text-center"],["mat-dialog-content",""],[1,"container"],[3,"formGroup","ngSubmit"],["type","text","placeholder","Title","formControlName","title"],["formControlName","category"],["value","","disabled","","selected",""],["value","technology"],["value","science"],["value","travel"],["value","food"],["value","lifestyle"],["value","other"],["placeholder","Description","rows","3","formControlName","description"],["type","text","placeholder","Author Name","formControlName","author"],["type","file","name","blogImage","formControlName","blogImage",1,"form-control","text-start",3,"change"],["type","submit","mat-raised-button","","color","accent",1,"mt-3"],["mat-dialog-actions",""]],template:function(e,i){1&e&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"form",3),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t._UZ(5,"input",4),t.TgZ(6,"select",5)(7,"option",6),t._uU(8,"Select Category"),t.qZA(),t.TgZ(9,"option",7),t._uU(10,"Technology"),t.qZA(),t.TgZ(11,"option",8),t._uU(12,"Science"),t.qZA(),t.TgZ(13,"option",9),t._uU(14,"Travel"),t.qZA(),t.TgZ(15,"option",10),t._uU(16,"Food"),t.qZA(),t.TgZ(17,"option",11),t._uU(18,"Lifestyle"),t.qZA(),t.TgZ(19,"option",12),t._uU(20,"Other"),t.qZA()(),t._UZ(21,"textarea",13)(22,"input",14),t.TgZ(23,"input",15),t.NdJ("change",function(s){return i.onFileSelected(s)}),t.qZA(),t.TgZ(24,"button",16),t._uU(25,"Update"),t.qZA()()()(),t._UZ(26,"div",17)),2&e&&(t.xp6(1),t.Oqu(i.inputdata.title),t.xp6(3),t.Q6J("formGroup",i.updateForm))},dependencies:[b.lW,c.uh,c.xY,c.H8,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.sg,o.u],styles:[".container[_ngcontent-%COMP%]{margin:0 auto;border-radius:3px}h1[_ngcontent-%COMP%]{font-size:28px;margin-bottom:10px}input[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:10px;margin-bottom:20px;border:1px solid #ccc;border-radius:5px;font-size:16px}@media (max-width: 767px){.post-container[_ngcontent-%COMP%]{padding:10px}}@media (min-width: 768px) and (max-width: 991px){.post-container[_ngcontent-%COMP%]{padding:40px}}@media (min-width: 992px){.post-container[_ngcontent-%COMP%]{padding:10px}}"]})}return a})();var h=l(7337),d=l(3403);function Z(a,O){if(1&a){const n=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4),t._UZ(3,"img",5),t.qZA(),t.TgZ(4,"div",6)(5,"div")(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA(),t.TgZ(10,"p",8),t._uU(11),t.qZA(),t.TgZ(12,"p",9),t._uU(13),t.qZA()()(),t.TgZ(14,"div",10)(15,"div")(16,"button",11),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.Openpopup(r))}),t._UZ(17,"i",12),t.qZA()(),t.TgZ(18,"div")(19,"button",13),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.deleteBlog(r._id))}),t._UZ(20,"i",14),t.qZA()(),t.TgZ(21,"div")(22,"button",15),t._UZ(23,"i",16),t.qZA()(),t.TgZ(24,"div")(25,"button",17),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.shareOnWhatsApp(r._id))}),t._UZ(26,"i",18),t.qZA()()()()()}if(2&a){const n=O.$implicit,e=t.oxw();t.xp6(3),t.Q6J("src",e.apiUrl+"/"+n.blogImage,t.LSH),t.xp6(4),t.Oqu(n.title),t.xp6(2),t.hij("Category: ",n.category,""),t.xp6(2),t.Oqu(n.description),t.xp6(2),t.hij("Author: ",n.author,"")}}const y=[{path:"newpost",component:f},{path:"history",component:(()=>{class a{constructor(n,e,i,r){this._blog=n,this.toastr=e,this.dialog=i,this.router=r,this.blogArray=[],this.apiUrl=h.N.apiUrl,this.frontendUrl=h.N.frontendUrl}ngOnInit(){this.getBlogData()}getBlogData(){this._blog.getBlog().subscribe({next:n=>{this.blogArray=n.blogposts},error:n=>{console.log(n)}})}deleteBlog(n){this._blog.deleteBlog(n).subscribe({next:i=>{console.log(i),this.toastr.success(i.message),this.getBlogData()},error:i=>{console.log(i),this.toastr.error(i.error.message)}})}Openpopup(n){this.dialog.open(C,{width:"400px",height:"500px",data:{title:"Update Blog Post",blogdata:n}}).afterClosed().subscribe(i=>{console.log(i),this.getBlogData()})}shareOnWhatsApp(n){const e=n,M=(this.blogArray.find(w=>w._id===e),`https://api.whatsapp.com/send?text=${encodeURIComponent(this.frontendUrl+`${this.router.url}`)}`);window.open(M,"_blank")}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(g.Z),t.Y36(p._W),t.Y36(c.uw),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-history"]],decls:4,vars:1,consts:[[1,"container"],["class","blogcard",4,"ngFor","ngForOf"],[1,"blogcard"],[1,"blog-content"],[1,"image"],["id","blog_image","alt","blog_image",3,"src"],[1,"content"],[1,"category"],[1,"description"],[1,"author"],[1,"actions"],[1,"update",3,"click"],[1,"fas","fa-edit"],[1,"delete",3,"click"],[1,"fas","fa-trash"],["routerLink","/",1,"view"],[1,"fas","fa-eye"],[1,"share",3,"click"],[1,"fas","fa-share"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Blog History"),t.qZA(),t.YNc(3,Z,27,5,"div",1),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",i.blogArray))},dependencies:[u.sg,d.rH],styles:[".container[_ngcontent-%COMP%]{width:100%;margin:0 auto;padding:20px}h1[_ngcontent-%COMP%]{font-size:28px;margin-bottom:20px}.blogcard[_ngcontent-%COMP%]{box-shadow:0 0 10px #0000001a;padding:20px;margin-bottom:20px;display:flex;align-items:center}.image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;max-width:200px;margin:0 auto;overflow:hidden}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.blog-content[_ngcontent-%COMP%]{width:100%;display:flex}.content[_ngcontent-%COMP%]{display:flex;text-align:start;justify-content:flex-start;align-items:center;font-size:small;width:100%;padding:1px;margin-left:20px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;margin:10px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;margin:5px}h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:10px}.category[_ngcontent-%COMP%]{font-size:16px;color:#666}.author[_ngcontent-%COMP%]{font-size:12px;color:#acacac}.description[_ngcontent-%COMP%]{font-size:18px;margin-top:10px}.actions[_ngcontent-%COMP%]{flex:1;text-align:right;display:flex;flex-direction:column;align-items:flex-end;justify-content:center;gap:5px}button[_ngcontent-%COMP%]{background-color:#0aadff;color:#fff;border:none;border-radius:3px;font-size:10px;cursor:pointer}button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}button[_ngcontent-%COMP%]:last-child{margin-right:0}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}@media screen and (max-width: 768px){.container[_ngcontent-%COMP%]{padding:10px}.blogcard[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:left;align-items:stretch;padding:5px}.blog-content[_ngcontent-%COMP%]{display:flex}.image[_ngcontent-%COMP%]{display:flex;justify-content:center}.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;font-size:small;width:100%;padding:1px;margin-left:10px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:15px;margin:0}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px;margin:0}.actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px}button[_ngcontent-%COMP%]{background-color:#0aadff;color:#fff;border:none;border-radius:3px;font-size:10px;cursor:pointer}button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}button[_ngcontent-%COMP%]:last-child{margin-right:0}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}}@media screen and (min-width: 769px) and (max-width: 1024px){.container[_ngcontent-%COMP%]{width:100%;margin:0 auto}}"]})}return a})()},{path:"settings",component:_}];let v=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#e=this.\u0275mod=t.oAB({type:a});static#n=this.\u0275inj=t.cJS({imports:[u.ez,d.Bz.forChild(y),o.UX]})}return a})()}}]);