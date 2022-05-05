"use strict";(self.webpackChunkcar_owners=self.webpackChunkcar_owners||[]).push([[701],{3701:(zN,R2,M)=>{M.r(R2),M.d(R2,{LazyLoadingModule:()=>VN});var t=M(3727),V=M(5698);const u="http://localhost:4200/api/";var H=(()=>{return(c=H||(H={})).createNew="createNew",c.open="open",c.change="change",c.delete="delete",H;var c})();const r7={faTrashCan:{prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"]},faPlus:{prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"]},faEye:{prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"]},faPenToSquare:{prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"]}};var o=M(2382),C=M(4893),yx=M(520);let B2=(()=>{class c{constructor(a){this.httpClient=a}getOwners(){return this.httpClient.get(u+"carOwners")}getOwnerById(a){return this.httpClient.get(`${u+"carOwners"}/${a}`)}deleteOwner(a){return this.httpClient.delete(`${u+"carOwners"}/${a}`)}createOwner(a,e,r,i){return this.httpClient.post(u+"carOwners",{firstName:e,middleName:r,lastName:a,cars:i})}editOwner(a){return this.httpClient.put(`${u+"carOwners"}/${a.id}`,a)}}return c.\u0275fac=function(a){return new(a||c)(C.LFG(yx.eN))},c.\u0275prov=C.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),i7=(()=>{class c{constructor(a){this.carOwnersService=a}saveUserWithCars(a){this.ownersWithCars=a.map(e=>({userId:e.id,carNumbers:e.cars.map(r=>r.carNumber)}))}loadOwnersArr(){this.carOwnersService.getOwners().pipe((0,V.q)(1)).subscribe(a=>{this.saveUserWithCars(a)})}removeCar(a){this.ownersWithCars||this.loadOwnersArr(),this.ownersWithCars.forEach(e=>{for(let r=0;r<e.carNumbers.length;++r)e.carNumbers[r]===a&&(e.carNumbers.splice(r,1),r--)})}findCarsDuplicates(a){let e=!1;return this.ownersWithCars.forEach(r=>{for(let i=0;i<r.carNumbers.length;++i)r.carNumbers[i]===a&&(e=!0)}),e}addCarToUser(a,e){this.ownersWithCars.forEach(r=>{r.userId===a&&r.carNumbers.push(e.carNumber)})}}return c.\u0275fac=function(a){return new(a||c)(C.LFG(B2))},c.\u0275prov=C.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();var R=M(9808),f7=M(7423),o7=M(9444);function Px(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," This field is required. "),C.qZA())}function Fx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," The minimum length for this field is 4 characters. "),C.qZA())}function Bx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," The maximum length for this field is 20 characters. "),C.qZA())}function _x(c,f){if(1&c&&(C.TgZ(0,"div"),C.YNc(1,Px,2,0,"small",26),C.YNc(2,Fx,2,0,"small",26),C.YNc(3,Bx,2,0,"small",26),C.qZA()),2&c){const a=C.oxw(2);let e,r,i;C.xp6(1),C.Q6J("ngIf",null==(e=a.userSettingsForm.get("userFirstName"))?null:e.hasError("required")),C.xp6(1),C.Q6J("ngIf",null==(r=a.userSettingsForm.get("userFirstName"))?null:r.hasError("minlength")),C.xp6(1),C.Q6J("ngIf",null==(i=a.userSettingsForm.get("userFirstName"))?null:i.hasError("maxlength"))}}function Dx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," This field is required. "),C.qZA())}function Rx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," The minimum length for this field is 4 characters. "),C.qZA())}function Ux(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," The maximum length for this field is 20 characters. "),C.qZA())}function qx(c,f){if(1&c&&(C.TgZ(0,"div"),C.YNc(1,Dx,2,0,"small",26),C.YNc(2,Rx,2,0,"small",26),C.YNc(3,Ux,2,0,"small",26),C.qZA()),2&c){const a=C.oxw(2);let e,r,i;C.xp6(1),C.Q6J("ngIf",null==(e=a.userSettingsForm.get("userMiddleName"))?null:e.hasError("required")),C.xp6(1),C.Q6J("ngIf",null==(r=a.userSettingsForm.get("userMiddleName"))?null:r.hasError("minlength")),C.xp6(1),C.Q6J("ngIf",null==(i=a.userSettingsForm.get("userMiddleName"))?null:i.hasError("maxlength"))}}function Ox(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," This field is required. "),C.qZA())}function Zx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," The minimum length for this field is 4 characters. "),C.qZA())}function Wx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," The maximum length for this field is 20 characters. "),C.qZA())}function Gx(c,f){if(1&c&&(C.TgZ(0,"div"),C.YNc(1,Ox,2,0,"small",26),C.YNc(2,Zx,2,0,"small",26),C.YNc(3,Wx,2,0,"small",26),C.qZA()),2&c){const a=C.oxw(2);let e,r,i;C.xp6(1),C.Q6J("ngIf",null==(e=a.userSettingsForm.get("userLastName"))?null:e.hasError("required")),C.xp6(1),C.Q6J("ngIf",null==(r=a.userSettingsForm.get("userLastName"))?null:r.hasError("minlength")),C.xp6(1),C.Q6J("ngIf",null==(i=a.userSettingsForm.get("userLastName"))?null:i.hasError("maxlength"))}}function Ex(c,f){if(1&c){const a=C.EpF();C.TgZ(0,"div",21),C.TgZ(1,"button",29),C.NdJ("click",function(){C.CHM(a);const r=C.oxw().$implicit;return C.oxw(2).deleteCar(r.carNumber)}),C._UZ(2,"fa-icon",30),C.qZA(),C.qZA()}if(2&c){const a=C.oxw(3);C.xp6(2),C.Q6J("icon",a.icons.faTrashCan)}}function Ix(c,f){if(1&c&&(C.TgZ(0,"div",13),C.TgZ(1,"div",16),C.TgZ(2,"div"),C._uU(3),C.qZA(),C.qZA(),C.TgZ(4,"div",16),C.TgZ(5,"div"),C._uU(6),C.qZA(),C.qZA(),C.TgZ(7,"div",16),C.TgZ(8,"div"),C._uU(9),C.qZA(),C.qZA(),C.TgZ(10,"div",16),C.TgZ(11,"div"),C._uU(12),C.qZA(),C.qZA(),C.YNc(13,Ex,3,1,"div",28),C.qZA()),2&c){const a=f.$implicit,e=C.oxw(2);C.xp6(3),C.hij(" ",a.carNumber," "),C.xp6(3),C.hij(" ",a.carModel," "),C.xp6(3),C.hij(" ",a.modelName," "),C.xp6(3),C.hij(" ",a.year," "),C.xp6(1),C.Q6J("ngIf",e.changeState)}}function Qx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," This field is required. "),C.qZA())}function Jx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1,' Correct: "XX0000XX" '),C.qZA())}function Xx(c,f){if(1&c&&(C.TgZ(0,"div"),C.YNc(1,Qx,2,0,"small",26),C.YNc(2,Jx,2,0,"small",26),C.qZA()),2&c){const a=C.oxw(2);let e,r;C.xp6(1),C.Q6J("ngIf",null==(e=a.carSettingsForm.get("carNumber"))?null:e.hasError("required")),C.xp6(1),C.Q6J("ngIf",null==(r=a.carSettingsForm.get("carNumber"))?null:r.hasError("pattern"))}}function Yx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," This field is required. "),C.qZA())}function jx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," Min 3 characters. "),C.qZA())}function Kx(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," Max 20 characters. "),C.qZA())}function $x(c,f){if(1&c&&(C.TgZ(0,"div"),C.YNc(1,Yx,2,0,"small",26),C.YNc(2,jx,2,0,"small",26),C.YNc(3,Kx,2,0,"small",26),C.qZA()),2&c){const a=C.oxw(2);let e,r,i;C.xp6(1),C.Q6J("ngIf",null==(e=a.carSettingsForm.get("carModel"))?null:e.hasError("required")),C.xp6(1),C.Q6J("ngIf",null==(r=a.carSettingsForm.get("carModel"))?null:r.hasError("minlength")),C.xp6(1),C.Q6J("ngIf",null==(i=a.carSettingsForm.get("carModel"))?null:i.hasError("maxlength"))}}function CN(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," This field is required. "),C.qZA())}function aN(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," Min 3 characters. "),C.qZA())}function cN(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," Max 20 characters. "),C.qZA())}function eN(c,f){if(1&c&&(C.TgZ(0,"div"),C.YNc(1,CN,2,0,"small",26),C.YNc(2,aN,2,0,"small",26),C.YNc(3,cN,2,0,"small",26),C.qZA()),2&c){const a=C.oxw(2);let e,r,i;C.xp6(1),C.Q6J("ngIf",null==(e=a.carSettingsForm.get("modelName"))?null:e.hasError("required")),C.xp6(1),C.Q6J("ngIf",null==(r=a.carSettingsForm.get("modelName"))?null:r.hasError("minlength")),C.xp6(1),C.Q6J("ngIf",null==(i=a.carSettingsForm.get("modelName"))?null:i.hasError("maxlength"))}}function rN(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," This field is required. "),C.qZA())}function iN(c,f){1&c&&(C.TgZ(0,"small",27),C._uU(1," must be from 1990 to now; "),C.qZA())}function fN(c,f){if(1&c&&(C.TgZ(0,"div"),C.YNc(1,rN,2,0,"small",26),C.YNc(2,iN,2,0,"small",26),C.qZA()),2&c){const a=C.oxw(2);let e,r;C.xp6(1),C.Q6J("ngIf",null==(e=a.carSettingsForm.get("year"))?null:e.hasError("required")),C.xp6(1),C.Q6J("ngIf",(null==(r=a.carSettingsForm.get("year"))?null:r.hasError("min"))||(null==(r=a.carSettingsForm.get("year"))?null:r.hasError("maxlength")))}}function oN(c,f){if(1&c&&(C.TgZ(0,"button",31),C._UZ(1,"fa-icon",30),C.qZA()),2&c){const a=C.oxw(2);C.Q6J("disabled",a.carSettingsForm.invalid),C.xp6(1),C.Q6J("icon",a.icons.faPlus)}}function nN(c,f){1&c&&(C.TgZ(0,"div",13),C.TgZ(1,"h4",32),C._uU(2,"This car belongs to other owner, please try with another car"),C.qZA(),C.qZA())}function lN(c,f){if(1&c&&(C.TgZ(0,"button",33),C._uU(1,"Save Info"),C.qZA()),2&c){const a=C.oxw(2);C.Q6J("disabled",a.userSettingsForm.invalid)}}function sN(c,f){if(1&c){const a=C.EpF();C.TgZ(0,"form",3),C.NdJ("submit",function(r){return C.CHM(a),C.oxw().saveUserInfo(r)}),C.TgZ(1,"div",4),C.TgZ(2,"div",5),C.TgZ(3,"div",6),C._uU(4,"First Name:"),C.qZA(),C.TgZ(5,"div",7),C._UZ(6,"input",8),C.YNc(7,_x,4,3,"div",9),C.qZA(),C.qZA(),C.TgZ(8,"div",5),C.TgZ(9,"div",6),C._uU(10,"Middle Name:"),C.qZA(),C.TgZ(11,"div",7),C._UZ(12,"input",10),C.YNc(13,qx,4,3,"div",9),C.qZA(),C.qZA(),C.TgZ(14,"div",5),C.TgZ(15,"div",6),C._uU(16,"Last Name:"),C.qZA(),C.TgZ(17,"div",7),C._UZ(18,"input",11),C.YNc(19,Gx,4,3,"div",9),C.qZA(),C.qZA(),C.qZA(),C.TgZ(20,"h2"),C._uU(21,"Cars:"),C.qZA(),C.TgZ(22,"div",12),C.TgZ(23,"div",13),C.TgZ(24,"div",14),C._uU(25,"Car Number"),C.qZA(),C.TgZ(26,"div",14),C._uU(27,"Car Model"),C.qZA(),C.TgZ(28,"div",14),C._uU(29,"Model Name"),C.qZA(),C.TgZ(30,"div",14),C._uU(31,"Year"),C.qZA(),C.qZA(),C.YNc(32,Ix,14,5,"div",15),C.TgZ(33,"form",3),C.NdJ("submit",function(r){return C.CHM(a),C.oxw().addNewCar(r)}),C.TgZ(34,"div",13),C.TgZ(35,"div",16),C.TgZ(36,"div"),C._UZ(37,"input",17),C.YNc(38,Xx,3,2,"div",9),C.qZA(),C.qZA(),C.TgZ(39,"div",16),C.TgZ(40,"div"),C._UZ(41,"input",18),C.YNc(42,$x,4,3,"div",9),C.qZA(),C.qZA(),C.TgZ(43,"div",16),C.TgZ(44,"div"),C._UZ(45,"input",19),C.YNc(46,eN,4,3,"div",9),C.qZA(),C.qZA(),C.TgZ(47,"div",16),C.TgZ(48,"div"),C._UZ(49,"input",20),C.YNc(50,fN,3,2,"div",9),C.qZA(),C.qZA(),C.TgZ(51,"div",21),C.YNc(52,oN,2,2,"button",22),C.qZA(),C.qZA(),C.YNc(53,nN,3,0,"div",23),C.qZA(),C.qZA(),C.YNc(54,lN,2,1,"button",24),C.TgZ(55,"button",25),C.NdJ("click",function(){return C.CHM(a),C.oxw().returnToHomePage()}),C._uU(56,"EXIT"),C.qZA(),C.qZA()}if(2&c){const a=C.oxw();let e,r,i,n,l,s,L;C.Q6J("formGroup",a.userSettingsForm),C.xp6(6),C.s9C("placeholder",null==a.ownerInfo?null:a.ownerInfo.firstName),C.xp6(1),C.Q6J("ngIf",(null==(e=a.userSettingsForm.get("userFirstName"))?null:e.invalid)&&(null==(e=a.userSettingsForm.get("userFirstName"))?null:e.errors)&&((null==(e=a.userSettingsForm.get("userFirstName"))?null:e.dirty)||(null==(e=a.userSettingsForm.get("userFirstName"))?null:e.touched))),C.xp6(5),C.s9C("placeholder",null==a.ownerInfo?null:a.ownerInfo.middleName),C.xp6(1),C.Q6J("ngIf",(null==(r=a.userSettingsForm.get("userMiddleName"))?null:r.invalid)&&(null==(r=a.userSettingsForm.get("userMiddleName"))?null:r.errors)&&((null==(r=a.userSettingsForm.get("userMiddleName"))?null:r.dirty)||(null==(r=a.userSettingsForm.get("userMiddleName"))?null:r.touched))),C.xp6(5),C.s9C("placeholder",null==a.ownerInfo?null:a.ownerInfo.lastName),C.xp6(1),C.Q6J("ngIf",(null==(i=a.userSettingsForm.get("userLastName"))?null:i.invalid)&&(null==(i=a.userSettingsForm.get("userLastName"))?null:i.errors)&&((null==(i=a.userSettingsForm.get("userLastName"))?null:i.dirty)||(null==(i=a.userSettingsForm.get("userLastName"))?null:i.touched))),C.xp6(13),C.Q6J("ngForOf",null==a.ownerInfo?null:a.ownerInfo.cars),C.xp6(1),C.Q6J("formGroup",a.carSettingsForm),C.xp6(5),C.Q6J("ngIf",(null==(n=a.carSettingsForm.get("carNumber"))?null:n.invalid)&&(null==(n=a.carSettingsForm.get("carNumber"))?null:n.errors)&&((null==(n=a.carSettingsForm.get("carNumber"))?null:n.dirty)||(null==(n=a.carSettingsForm.get("carNumber"))?null:n.touched))),C.xp6(4),C.Q6J("ngIf",(null==(l=a.carSettingsForm.get("carModel"))?null:l.invalid)&&(null==(l=a.carSettingsForm.get("carModel"))?null:l.errors)&&((null==(l=a.carSettingsForm.get("carModel"))?null:l.dirty)||(null==(l=a.carSettingsForm.get("carModel"))?null:l.touched))),C.xp6(4),C.Q6J("ngIf",(null==(s=a.carSettingsForm.get("modelName"))?null:s.invalid)&&(null==(s=a.carSettingsForm.get("modelName"))?null:s.errors)&&((null==(s=a.carSettingsForm.get("modelName"))?null:s.dirty)||(null==(s=a.carSettingsForm.get("modelName"))?null:s.touched))),C.xp6(4),C.Q6J("ngIf",(null==(L=a.carSettingsForm.get("year"))?null:L.invalid)&&(null==(L=a.carSettingsForm.get("year"))?null:L.errors)&&((null==(L=a.carSettingsForm.get("year"))?null:L.dirty)||(null==(L=a.carSettingsForm.get("year"))?null:L.touched))),C.xp6(2),C.Q6J("ngIf",a.changeState),C.xp6(1),C.Q6J("ngIf",a.isCarDuplicates),C.xp6(1),C.Q6J("ngIf",a.changeState)}}let LN=(()=>{class c{constructor(a,e,r,i){this.pageService=a,this.carOwnersService=e,this.activatedRoute=r,this.router=i,this.icons=r7,this.changeState=!1,this.createNewUser=!1}ngOnInit(){this.userSettingsForm=new o.cw({userFirstName:new o.NI("",[o.kI.required,o.kI.minLength(4),o.kI.maxLength(20)]),userMiddleName:new o.NI("",[o.kI.required,o.kI.minLength(4),o.kI.maxLength(20)]),userLastName:new o.NI("",[o.kI.required,o.kI.minLength(4),o.kI.maxLength(20)])}),this.carSettingsForm=new o.cw({carNumber:new o.NI("",[o.kI.required,o.kI.pattern("^[A-Z]{2}\\d{4}(?<!0{4})[A-Z]{2}$")]),carModel:new o.NI("",[o.kI.required,o.kI.maxLength(20),o.kI.minLength(3)]),modelName:new o.NI("",[o.kI.required,o.kI.maxLength(20),o.kI.minLength(3)]),year:new o.NI("",[o.kI.required,o.kI.min(1990),o.kI.max((new Date).getFullYear())])}),this.getQueryParams(),this.loadOwnersArr()}deleteCar(a){for(let e=0;e<this.ownerInfo.cars.length;++e)this.ownerInfo.cars[e].carNumber===a&&(this.ownerInfo.cars.splice(e,1),e--);this.pageService.removeCar(a)}addNewCar(a){var e,r,i,n,l,s,L,_2,D2;a.preventDefault(),this.findCarsDuplicates(null===(e=this.carSettingsForm.get("carNumber"))||void 0===e?void 0:e.value)?this.isCarDuplicates=!0:(this.isCarDuplicates=!1,this.ownerInfo.cars.push({carNumber:null===(r=this.carSettingsForm.get("carNumber"))||void 0===r?void 0:r.value,carModel:null===(i=this.carSettingsForm.get("carModel"))||void 0===i?void 0:i.value,modelName:null===(n=this.carSettingsForm.get("modelName"))||void 0===n?void 0:n.value,year:null===(l=this.carSettingsForm.get("year"))||void 0===l?void 0:l.value}),this.pageService.addCarToUser(this.ownerInfo.id,{carNumber:null===(s=this.carSettingsForm.get("carNumber"))||void 0===s?void 0:s.value,carModel:null===(L=this.carSettingsForm.get("carModel"))||void 0===L?void 0:L.value,modelName:null===(_2=this.carSettingsForm.get("modelName"))||void 0===_2?void 0:_2.value,year:null===(D2=this.carSettingsForm.get("year"))||void 0===D2?void 0:D2.value}))}saveUserInfo(a){var e,r,i;a.preventDefault(),this.ownerInfo.firstName=null===(e=this.userSettingsForm.get("userFirstName"))||void 0===e?void 0:e.value,this.ownerInfo.middleName=null===(r=this.userSettingsForm.get("userMiddleName"))||void 0===r?void 0:r.value,this.ownerInfo.lastName=null===(i=this.userSettingsForm.get("userLastName"))||void 0===i?void 0:i.value,this.createNewUser?this.carOwnersService.createOwner(this.ownerInfo.lastName,this.ownerInfo.firstName,this.ownerInfo.middleName,this.ownerInfo.cars).pipe((0,V.q)(1)).subscribe(()=>{console.warn("User was created"),this.returnToHomePage()}):this.carOwnersService.editOwner(this.ownerInfo).pipe((0,V.q)(1)).subscribe(()=>{console.warn("User was updated"),this.returnToHomePage()})}returnToHomePage(){this.router.navigate([""])}loadUserInfo(a){this.carOwnersService.getOwnerById(a).subscribe(e=>{this.ownerInfo=e,this.userSettingsForm.controls.userFirstName.setValue(e.firstName),this.userSettingsForm.controls.userMiddleName.setValue(e.middleName),this.userSettingsForm.controls.userLastName.setValue(e.lastName)})}findCarsDuplicates(a){return this.pageService.findCarsDuplicates(a)}getQueryParams(){this.activatedRoute.queryParams.pipe((0,V.q)(1)).subscribe(a=>{var e,r,i,n,l,s,L;this.changeState="true"===a.changeState,this.changeState||(null===(e=this.userSettingsForm.get("userFirstName"))||void 0===e||e.disable(),null===(r=this.userSettingsForm.get("userMiddleName"))||void 0===r||r.disable(),null===(i=this.userSettingsForm.get("userLastName"))||void 0===i||i.disable(),null===(n=this.carSettingsForm.get("carNumber"))||void 0===n||n.disable(),null===(l=this.carSettingsForm.get("carModel"))||void 0===l||l.disable(),null===(s=this.carSettingsForm.get("modelName"))||void 0===s||s.disable(),null===(L=this.carSettingsForm.get("year"))||void 0===L||L.disable()),a.ownerId?(this.loadUserInfo(a.ownerId),this.createNewUser=!1):(this.ownerInfo={id:Math.floor(1e5*Math.random()),firstName:"",middleName:"",lastName:"",cars:[]},this.createNewUser=!0)})}loadOwnersArr(){this.pageService.loadOwnersArr()}}return c.\u0275fac=function(a){return new(a||c)(C.Y36(i7),C.Y36(B2),C.Y36(t.gz),C.Y36(t.F0))},c.\u0275cmp=C.Xpm({type:c,selectors:[["app-owner-settings"]],decls:3,vars:1,consts:[[1,"content"],[1,"container"],["novalidate","",3,"formGroup","submit",4,"ngIf"],["novalidate","",3,"formGroup","submit"],[1,"user-settings"],[1,"user-settings-params"],[1,"title"],[1,"input","userInfoFields"],["name","ownerFirstName","formControlName","userFirstName","type","text",3,"placeholder"],[4,"ngIf"],["name","ownerMiddleName","formControlName","userMiddleName","type","text",3,"placeholder"],["name","ownerLastName","formControlName","userLastName","type","text",3,"placeholder"],[1,"cars-settings"],[1,"row"],[1,"item","header"],["class","row",4,"ngFor","ngForOf"],[1,"item","input"],["name","carNumber","formControlName","carNumber","type","text","placeholder","Car number",1,"car-number"],["name","carModel","formControlName","carModel","type","text","placeholder","Car model"],["name","modelName","formControlName","modelName","type","text","placeholder","Model name"],["name","year","formControlName","year","type","number","placeholder","Year"],[1,"delete-button-container"],["mat-raised-button","","color","primary","type","submit",3,"disabled",4,"ngIf"],["class","row",4,"ngIf"],["type","submit","mat-raised-button","","color","primary","class","submit-btn",3,"disabled",4,"ngIf"],["type","button","mat-raised-button","","color","accent",1,"submit-btn",3,"click"],["class","text-danger",4,"ngIf"],[1,"text-danger"],["class","delete-button-container",4,"ngIf"],["mat-raised-button","","color","warn",3,"click"],[1,"icon",3,"icon"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[1,"error"],["type","submit","mat-raised-button","","color","primary",1,"submit-btn",3,"disabled"]],template:function(a,e){1&a&&(C.TgZ(0,"div",0),C.TgZ(1,"div",1),C.YNc(2,sN,57,16,"form",2),C.qZA(),C.qZA()),2&a&&(C.xp6(2),C.Q6J("ngIf",e.userSettingsForm))},directives:[R.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,R.sg,f7.lW,o7.BN,o.wV],styles:["h2[_ngcontent-%COMP%]{font-size:32px;font-weight:500}.user-settings[_ngcontent-%COMP%]{margin-left:25px;display:flex;flex-direction:column;height:auto}.user-settings[_ngcontent-%COMP%]   .user-settings-params[_ngcontent-%COMP%]{margin:10px 0;display:flex;flex-direction:row}.user-settings[_ngcontent-%COMP%]   .user-settings-params[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:160px;height:30px;font-size:20px;font-weight:500}.input[_ngcontent-%COMP%]{width:50%}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-top:-15px;width:100%;height:30px;border-radius:5px;outline:none;border:2px solid #989898;color:#4d4d4d;padding-left:10px;font-size:20px}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-size:20px;padding:10px 5px}.cars-settings[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;border:#989898 solid 2px;border-radius:10px}.cars-settings[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;align-items:center}.cars-settings[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{border-bottom:1px solid black;display:flex;align-items:flex-start;justify-content:flex-start;width:90%}.cars-settings[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;width:22%;height:30px;font-weight:700;text-decoration:underline;font-size:15px}.cars-settings[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding-top:15px;display:flex;align-items:center;justify-content:center;width:22%;height:30px}.cars-settings[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .delete-button-container[_ngcontent-%COMP%]{width:12%;margin-top:5px;padding-left:10px}.cars-settings[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:6px;width:85%}.cars-settings[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{padding:0}.cars-settings[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%]{color:#b7000c;position:absolute;bottom:-20px;max-width:22%}.submit-btn[_ngcontent-%COMP%]{margin:30px 10px}.userInfoFields[_ngcontent-%COMP%]{position:relative}.userInfoFields[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%]{color:#b7000c;position:absolute;bottom:-13px}.error[_ngcontent-%COMP%]{color:#b7000c;text-decoration:underline}"]}),c})();const MN=function(c){return{"selected-row":c}};function HN(c,f){if(1&c){const a=C.EpF();C.TgZ(0,"tr",9),C.NdJ("click",function(){const i=C.CHM(a).$implicit;return C.oxw().choseOwner(i.id)}),C.TgZ(1,"td"),C._uU(2),C.qZA(),C.TgZ(3,"td"),C._uU(4),C.qZA(),C.TgZ(5,"td"),C._uU(6),C.qZA(),C.TgZ(7,"td",7),C._uU(8),C.qZA(),C.qZA()}if(2&c){const a=f.$implicit,e=C.oxw();C.Q6J("ngClass",C.VKq(5,MN,a.id==e.selectedId)),C.xp6(2),C.Oqu(a.firstName),C.xp6(2),C.Oqu(a.middleName),C.xp6(2),C.Oqu(a.lastName),C.xp6(2),C.Oqu(a.cars.length)}}const tN=[{path:"home",component:(()=>{class c{constructor(a,e,r){this.carOwnersService=a,this.router=e,this.pageService=r,this.icons=r7}ngOnInit(){this.carOwnersService.getOwners().pipe((0,V.q)(1)).subscribe(a=>{this.userArr=a,this.pageService.saveUserWithCars(a)}),this.loadOwnersArr()}choseOwner(a){this.selectedId=a}createNewOwner(){this.router.navigate(["settings"],{queryParams:{changeState:this.setChangeState(H.createNew)}})}watchDetails(){this.router.navigate(["settings"],{queryParams:{ownerId:this.selectedId,changeState:this.setChangeState(H.open)}})}changeParams(){this.router.navigate(["settings"],{queryParams:{ownerId:this.selectedId,changeState:this.setChangeState(H.change)}})}deleteItem(){for(let a=0;a<this.userArr.length;++a)this.selectedId===this.userArr[a].id&&(this.userArr.splice(a,1),a--);this.carOwnersService.deleteOwner(this.selectedId).subscribe(()=>{this.loadOwnersArr()})}loadOwnersArr(){this.pageService.loadOwnersArr()}setChangeState(a){return a===H.change||a===H.createNew}}return c.\u0275fac=function(a){return new(a||c)(C.Y36(B2),C.Y36(t.F0),C.Y36(i7))},c.\u0275cmp=C.Xpm({type:c,selectors:[["app-owner-table"]],decls:27,vars:8,consts:[[1,"content"],[1,"container"],[1,"button-container"],["mat-stroked-button","",3,"click"],[1,"icon",3,"icon"],[1,"edit-button-container"],["mat-stroked-button","",3,"disabled","click"],[1,"carsNumber"],["class","selectable",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"selectable",3,"ngClass","click"]],template:function(a,e){1&a&&(C.TgZ(0,"div",0),C.TgZ(1,"div",1),C.TgZ(2,"div",2),C.TgZ(3,"button",3),C.NdJ("click",function(){return e.choseOwner(-1),e.createNewOwner()}),C._UZ(4,"fa-icon",4),C._uU(5,"Create new "),C.qZA(),C.TgZ(6,"div",5),C.TgZ(7,"button",6),C.NdJ("click",function(){return e.watchDetails()}),C._UZ(8,"fa-icon",4),C._uU(9,"Open"),C.qZA(),C.TgZ(10,"button",6),C.NdJ("click",function(){return e.changeParams()}),C._UZ(11,"fa-icon",4),C._uU(12,"Change"),C.qZA(),C.TgZ(13,"button",6),C.NdJ("click",function(){return e.deleteItem()}),C._UZ(14,"fa-icon",4),C._uU(15,"Delete"),C.qZA(),C.qZA(),C.qZA(),C.TgZ(16,"table"),C.TgZ(17,"tr"),C.TgZ(18,"th"),C._uU(19,"First Name"),C.qZA(),C.TgZ(20,"th"),C._uU(21,"Middle Name"),C.qZA(),C.TgZ(22,"th"),C._uU(23,"Last Name"),C.qZA(),C.TgZ(24,"th",7),C._uU(25,"Number of Cars"),C.qZA(),C.qZA(),C.YNc(26,HN,9,7,"tr",8),C.qZA(),C.qZA(),C.qZA()),2&a&&(C.xp6(4),C.Q6J("icon",e.icons.faPlus),C.xp6(3),C.Q6J("disabled",!e.selectedId),C.xp6(1),C.Q6J("icon",e.icons.faEye),C.xp6(2),C.Q6J("disabled",!e.selectedId),C.xp6(1),C.Q6J("icon",e.icons.faPenToSquare),C.xp6(2),C.Q6J("disabled",!e.selectedId),C.xp6(1),C.Q6J("icon",e.icons.faTrashCan),C.xp6(12),C.Q6J("ngForOf",e.userArr))},directives:[f7.lW,o7.BN,R.sg,R.mk],styles:["table[_ngcontent-%COMP%]{table-layout:fixed;font-family:arial,sans-serif;border-collapse:collapse;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #989898;text-align:left;padding:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}td.carsNumber[_ngcontent-%COMP%], th.carsNumber[_ngcontent-%COMP%]{width:70px!important;text-align:center;white-space:normal}tr[_ngcontent-%COMP%]:nth-child(even){background-color:silver}.selectable[_ngcontent-%COMP%]{cursor:pointer}.selectable[_ngcontent-%COMP%]:hover{background-color:#ccc9;color:#5a54ff}.selected-row[_ngcontent-%COMP%]{background-color:#ccc9!important;color:#5a54ff}.button-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;max-width:50%;justify-content:space-between}.edit-button-container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:nowrap;justify-content:space-around;width:60%;min-width:285px}button[_ngcontent-%COMP%]{margin-bottom:25px}button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{padding-right:5px;margin-bottom:5px}@media screen and (max-width: 700px){.container[_ngcontent-%COMP%]{width:100%}}"]}),c})()},{path:"settings",component:LN},{path:"**",redirectTo:"home"}];let VN=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=C.oAB({type:c}),c.\u0275inj=C.cJS({imports:[[t.Bz.forChild(tN)],t.Bz]}),c})()}}]);