"use strict";(self.webpackChunkCRM=self.webpackChunkCRM||[]).push([[163],{163:(V,m,r)=>{r.r(m),r.d(m,{ClientesModule:()=>H});var f=r(9808),d=r(9444),b=r(4546),a=r(5826),n=r(1223),l=r(4141),u=r(1740);let h=(()=>{class e{constructor(t,o){this.service=t,this.activeRoute=o,this.backPage="/cliente"}ngOnInit(){let t=this.activeRoute.snapshot.params.id;console.log(t),this.service.getCliente(t).subscribe(o=>{this.cliente=o,console.log(this.cliente)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.h),n.Y36(a.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-clientes-detalhes"]],decls:2,vars:1,consts:[[3,"routerBack"]],template:function(t,o){1&t&&n._UZ(0,"app-navbar",0)(1,"router-outlet"),2&t&&n.Q6J("routerBack",o.backPage)},directives:[u.S,a.lC],styles:["nav[_ngcontent-%COMP%]{display:inline-flex;width:100%;position:relative;flex-direction:row;justify-content:center;background:white;box-shadow:2px 2px 3px gray}nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;margin-right:20px;height:40px;font-size:20px;border:none;cursor:pointer;border-radius:5px;background:#00e676;color:#fff;box-shadow:1px 0 2px 1.5px gray}nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{box-shadow:none;color:#cfcfcf;background-color:#00a884}"]}),e})();var g=r(801);const v=function(e){return["/cliente/details/history",e]},y=function(e){return["/cliente/details/email",e]},w=function(e){return["/cliente/details/phase",e]};let C=(()=>{class e{constructor(t,o){this.service=t,this.activeRoute=o,this.userIcon=g.m08,this.email=g.FU$,this.add=g.r8p}ngOnInit(){let t=this.activeRoute.snapshot.params.id;console.log(t),this.service.getCliente(t).subscribe(o=>{this.cliente=o})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.h),n.Y36(a.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-email"]],decls:9,vars:9,consts:[[1,"menu"],["routerLinkActive","active",3,"routerLink"],[1,"content"]],template:function(t,o){1&t&&(n.TgZ(0,"nav",0)(1,"button",1),n._uU(2,"Hist\xf3rico"),n.qZA(),n.TgZ(3,"button",1),n._uU(4,"Email"),n.qZA(),n.TgZ(5,"button",1),n._uU(6,"Etapas"),n.qZA()(),n.TgZ(7,"main"),n._UZ(8,"div",2),n.qZA()),2&t&&(n.xp6(1),n.Q6J("routerLink",n.VKq(3,v,o.cliente[0].id)),n.xp6(2),n.Q6J("routerLink",n.VKq(5,y,o.cliente[0].id)),n.xp6(2),n.Q6J("routerLink",n.VKq(7,w,o.cliente[0].id)))},directives:[a.Od,a.rH],styles:["main[_ngcontent-%COMP%]{display:flex;margin:0 auto;flex-direction:column;align-items:center;justify-content:center}.user[_ngcontent-%COMP%]{height:50px;width:max-content;justify-content:space-between;display:flex;flex-direction:row;align-items:center;padding:10px;background:#ffffff;box-shadow:2px 2px 3px gray}.user[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#6e83b7;font-size:35px;margin-right:5px}.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px}.content[_ngcontent-%COMP%]{width:69%;max-width:1000px;margin-top:50px;display:flex;justify-content:center;flex-direction:column;margin-bottom:50px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:center;width:95%;height:70px;padding:20px;background-color:#fff;box-shadow:1px 1px 3px gray;margin-top:10px;margin-bottom:10px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-left:10px;margin-right:25px;font-size:40px}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:7px;align-items:center;width:120px;height:40px;font-size:15px;font-weight:600;color:#fff;background-color:#3e96f5;border:none;border-radius:10px;box-shadow:2px 2px 3px #808080c0;margin-bottom:15px;cursor:pointer}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#1064bd;color:#cfcfcd}nav[_ngcontent-%COMP%]{display:inline-flex;width:100%;position:relative;flex-direction:row;justify-content:center;background:white;box-shadow:2px 2px 3px gray}nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;margin-right:20px;height:40px;font-size:20px;border:none;cursor:pointer;border-radius:5px;background:#00e676;color:#fff;box-shadow:1px 0 2px 1.5px gray}nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{box-shadow:none;color:#cfcfcf;background-color:#00a884}"]}),e})();var p=r(2382);function Z(e,i){if(1&e&&(n.TgZ(0,"option",9),n._uU(1),n.qZA()),2&e){const t=i.$implicit;n.Q6J("value",t),n.xp6(1),n.Oqu(t)}}const T=function(e){return["/cliente/details/history",e]},k=function(e){return["/cliente/details/email",e]},z=function(e){return["/cliente/details/phase",e]};let _=(()=>{class e{constructor(t,o){this.service=t,this.activeRoute=o,this.userIcon=g.m08,this.email=g.FU$,this.add=g.r8p,this.idetapa="",this.funil="",this.etapaselected="",this.status=""}ngOnInit(){let t=this.activeRoute.snapshot.params.id;console.log(t),this.service.getClienteEtapa(t).subscribe(o=>{this.cliente=o,this.funil=this.cliente[0].idfunil,this.idetapa=this.cliente[0].id,this.service.getFunilEtapa(this.funil).subscribe(s=>{this.etapas=s[0].fase})})}faseEscolhida(t){console.log(t),this.service.editarEtapa(this.idetapa,{etapa:t})}statuscliente(t){console.log(t),this.service.editarEtapa(this.idetapa,{status:t})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.h),n.Y36(a.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-etapas"]],decls:29,vars:13,consts:[[1,"menu"],["routerLinkActive","active",3,"routerLink"],[1,"content"],[1,"info"],[1,"info-content"],["name","produto","id","produto",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["value","Desistiu"],["value","Sem resposta"],[3,"value"]],template:function(t,o){1&t&&(n.TgZ(0,"nav",0)(1,"button",1),n._uU(2,"Hist\xf3rico"),n.qZA(),n.TgZ(3,"button",1),n._uU(4,"Email"),n.qZA(),n.TgZ(5,"button",1),n._uU(6,"Etapas"),n.qZA()(),n.TgZ(7,"main")(8,"div",2)(9,"div",3)(10,"div",4)(11,"h2"),n._uU(12,"Etapa atual:"),n.qZA(),n.TgZ(13,"p"),n._uU(14),n.qZA()(),n._UZ(15,"Br"),n.TgZ(16,"div",4)(17,"h2"),n._uU(18,"Editar Etapa:"),n.qZA(),n.TgZ(19,"select",5),n.NdJ("ngModelChange",function(c){return o.etapaselected=c})("ngModelChange",function(c){return o.faseEscolhida(c)}),n.YNc(20,Z,2,2,"option",6),n.qZA()(),n.TgZ(21,"div",4)(22,"h2"),n._uU(23,"Status:"),n.qZA(),n.TgZ(24,"select",5),n.NdJ("ngModelChange",function(c){return o.status=c})("ngModelChange",function(c){return o.statuscliente(c)}),n.TgZ(25,"option",7),n._uU(26,"Cliente Desistiu"),n.qZA(),n.TgZ(27,"option",8),n._uU(28,"Sem resposta"),n.qZA()()()()()()),2&t&&(n.xp6(1),n.Q6J("routerLink",n.VKq(7,T,o.cliente[0].idcliente)),n.xp6(2),n.Q6J("routerLink",n.VKq(9,k,o.cliente[0].idcliente)),n.xp6(2),n.Q6J("routerLink",n.VKq(11,z,o.cliente[0].id)),n.xp6(9),n.Oqu(o.cliente[0].etapa),n.xp6(5),n.Q6J("ngModel",o.etapaselected),n.xp6(1),n.Q6J("ngForOf",o.etapas),n.xp6(4),n.Q6J("ngModel",o.status))},directives:[a.Od,a.rH,p.EJ,p.JJ,p.On,f.sg,p.YN,p.Kr],styles:["main[_ngcontent-%COMP%]{display:flex;margin:0 auto;flex-direction:column;align-items:center;justify-content:center}.user[_ngcontent-%COMP%]{height:50px;width:max-content;justify-content:space-between;display:flex;flex-direction:row;align-items:center;padding:10px;background:#ffffff;box-shadow:2px 2px 3px gray}.user[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#6e83b7;font-size:35px;margin-right:5px}.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px}.content[_ngcontent-%COMP%]{width:69%;max-width:1000px;margin-top:50px;display:flex;justify-content:center;flex-direction:row;margin-bottom:50px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;width:95%;height:70px;padding:20px;background-color:#fff;box-shadow:1px 1px 3px gray;margin-top:10px;margin-bottom:10px}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;margin-left:5px}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:150px;height:25px;text-align:center;font-weight:600;border-radius:5px;margin-left:10px}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:7px;align-items:center;width:120px;height:40px;font-size:15px;font-weight:600;color:#fff;background-color:#3e96f5;border:none;border-radius:10px;box-shadow:2px 2px 3px #808080c0;margin-bottom:15px;cursor:pointer}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#1064bd;color:#cfcfcd}nav[_ngcontent-%COMP%]{display:inline-flex;width:100%;position:relative;flex-direction:row;justify-content:center;background:white;box-shadow:2px 2px 3px gray}nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;margin-right:20px;height:40px;font-size:20px;border:none;cursor:pointer;border-radius:5px;background:#00e676;color:#fff;box-shadow:1px 0 2px 1.5px gray}nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{box-shadow:none;color:#cfcfcf;background-color:#00a884}main[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:0 auto}.content[_ngcontent-%COMP%]{margin-top:30px;width:70%;max-width:900px;display:flex;flex-direction:column;justify-content:center}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:80%;height:max-content;min-height:800px;margin-top:50px;background:#c7c7c7;box-shadow:2px 3px 4px gray;border-radius:15px;margin-bottom:20px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin-bottom:8px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:85%;max-width:350px;height:27px;text-indent:10px;font-size:16px;border-radius:5px;border:none;margin-bottom:35px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:75%;max-width:200px;height:25px;text-indent:10px;font-weight:600;border-radius:5px;margin-bottom:35px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .add-input[_ngcontent-%COMP%]{margin-top:50px;display:flex;flex-direction:row;width:160px;height:30px;background:gray;color:#fff;border-radius:10px;margin-left:50px;margin-bottom:100px;text-align:center;justify-content:space-evenly;align-items:center;cursor:pointer;box-shadow:1px 2px 3px gray}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .add-input[_ngcontent-%COMP%]:hover{background:white;color:#000}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:40px;margin-bottom:80px;font-family:sans-serif}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{margin-left:50px;display:flex;flex-direction:column}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:50px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]{display:flex;justify-content:center}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#9e77f5;color:#fff;height:30px;font-size:14px;width:100px;border:none;border-radius:10px;box-shadow:1px 2px 3px gray;cursor:pointer;margin-bottom:20px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#6c4caf;color:#000}.content[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%]{margin-top:25px;margin-left:25px;margin-bottom:30px;display:flex;flex-direction:column;justify-content:right;align-items:center;width:60%;padding:10px;height:200px;overflow:auto;background:#a8a8a8;border-radius:10px;box-shadow:2px 3px 4px gray}.content[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%]   .campos-content[_ngcontent-%COMP%]{background:white;padding:5px;box-shadow:2px 2px 3px #bdbdbdf3;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:95%;margin-bottom:10px}.content[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%]   .campos-content[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px;border:1px}.content[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%]   .campos-content[_ngcontent-%COMP%]   .campo[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.content[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%]   .campos-content[_ngcontent-%COMP%]   .campo[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:30px;margin-right:15px}.content[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%]   .campos-content[_ngcontent-%COMP%]   .campo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;font-weight:600}.content[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%]   .campos-content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:60px;justify-content:space-between}.content[_ngcontent-%COMP%]   .campos[_ngcontent-%COMP%]   .campos-content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:20px;cursor:pointer}.content[_ngcontent-%COMP%]   #campo[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   #tipo[_ngcontent-%COMP%]{margin-bottom:10px}.content[_ngcontent-%COMP%]   #add[_ngcontent-%COMP%]{margin:0 0 50px 50px}"]}),e})();var x=r(5767),M=r(534);const A=function(e){return["/cliente/details/history",e]},U=function(e){return["/cliente/details/email",e]},q=function(e){return["/cliente/details/phase",e]};let O=(()=>{class e{constructor(t,o){this.service=t,this.activeRoute=o,this.userIcon=g.m08,this.agendamento=g.Ry6,this.whats=x.VHX,this.ligar=g.Eo4,this.email=g.FU$,this.anotar=M.cw,this.backPage="/cliente"}ngOnInit(){let t=this.activeRoute.snapshot.params.id;console.log(t),this.service.getCliente(t).subscribe(o=>{this.cliente=o})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.h),n.Y36(a.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-historico"]],decls:29,vars:11,consts:[[1,"menu"],["routerLinkActive","active",3,"routerLink"],[1,"content"],[1,"info"],[1,"icon"],[3,"icon"],[1,"info-content"]],template:function(t,o){1&t&&(n.TgZ(0,"nav",0)(1,"button",1),n._uU(2,"Hist\xf3rico"),n.qZA(),n.TgZ(3,"button",1),n._uU(4,"Email"),n.qZA(),n.TgZ(5,"button",1),n._uU(6,"Etapas"),n.qZA()(),n.TgZ(7,"main")(8,"div",2)(9,"div",3)(10,"div",4),n._UZ(11,"fa-icon",5),n.qZA(),n.TgZ(12,"div",6)(13,"h2"),n._uU(14,"Enviou uma mensagem via Whatsapp"),n.qZA(),n.TgZ(15,"p"),n._uU(16,"22/03/2022 - 10:00"),n.qZA(),n.TgZ(17,"p"),n._uU(18,"Agendamento feito para o dia 30/03/2022"),n.qZA()()(),n.TgZ(19,"div",3)(20,"div",4),n._UZ(21,"fa-icon",5),n.qZA(),n.TgZ(22,"div",6)(23,"h2"),n._uU(24,"Email enviado"),n.qZA(),n.TgZ(25,"p"),n._uU(26,"22/03/2022 - 10:00"),n.qZA(),n.TgZ(27,"p"),n._uU(28,"Agendamento feito para o dia 30/03/2022"),n.qZA()()()()()),2&t&&(n.xp6(1),n.Q6J("routerLink",n.VKq(5,A,o.cliente[0].id)),n.xp6(2),n.Q6J("routerLink",n.VKq(7,U,o.cliente[0].id)),n.xp6(2),n.Q6J("routerLink",n.VKq(9,q,o.cliente[0].id)),n.xp6(6),n.Q6J("icon",o.whats),n.xp6(10),n.Q6J("icon",o.email))},directives:[a.Od,a.rH,d.BN],styles:["main[_ngcontent-%COMP%]{display:flex;margin:0 auto;flex-direction:column;align-items:center;justify-content:center}.user[_ngcontent-%COMP%]{height:50px;width:max-content;justify-content:space-between;display:flex;flex-direction:row;align-items:center;padding:10px;background:#ffffff;box-shadow:2px 2px 3px gray}.user[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#6e83b7;font-size:35px;margin-right:5px}.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px}.content[_ngcontent-%COMP%]{width:69%;max-width:1000px;margin-top:50px;display:flex;justify-content:center;flex-direction:column;margin-bottom:50px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:center;width:95%;height:70px;padding:20px;background-color:#fff;box-shadow:1px 1px 3px gray;margin-top:10px;margin-bottom:10px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-left:10px;margin-right:25px;font-size:40px}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:7px;align-items:center;width:120px;height:40px;font-size:15px;font-weight:600;color:#fff;background-color:#3e96f5;border:none;border-radius:10px;box-shadow:2px 2px 3px #808080c0;margin-bottom:15px;cursor:pointer}.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:#1064bd;color:#cfcfcd}nav[_ngcontent-%COMP%]{display:inline-flex;width:100%;position:relative;flex-direction:row;justify-content:center;background:white;box-shadow:2px 2px 3px gray}nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;margin-right:20px;height:40px;font-size:20px;border:none;cursor:pointer;border-radius:5px;background:#00e676;color:#fff;box-shadow:1px 0 2px 1.5px gray}nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{box-shadow:none;color:#cfcfcf;background-color:#00a884}"]}),e})(),P=(()=>{class e{constructor(t,o){this.service=t,this.activeRoute=o,this.userIcon=g.m08,this.send=M.XC,this.whats=x.VHX,this.msg="",this.number="",this.backPage="/cliente"}ngOnInit(){let t=this.activeRoute.snapshot.params.id;console.log(t),this.service.getCliente(t).subscribe(o=>{this.cliente=o,console.log(this.cliente),this.number=o[0].telefonecliente,console.log(this.number)})}enviar(){console.log(this.msg),window.open(`https://wa.me/55${this.number}?text=${this.msg}`)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.h),n.Y36(a.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-whatsapp"]],decls:12,vars:4,consts:[[3,"routerBack"],[1,"menu"],[1,"content"],[1,"info"],[3,"icon"],["name","","id","","cols","30","rows","10","placeholder","Digite uma mensagem no whatsapp",3,"ngModel","ngModelChange"],[3,"click"]],template:function(t,o){1&t&&(n._UZ(0,"app-navbar",0)(1,"nav",1),n.TgZ(2,"main")(3,"div",2)(4,"div",3),n._UZ(5,"fa-icon",4),n.TgZ(6,"textarea",5),n.NdJ("ngModelChange",function(c){return o.msg=c}),n.qZA(),n.TgZ(7,"div")(8,"button",6),n.NdJ("click",function(){return o.enviar()}),n._UZ(9,"fa-icon",4),n.TgZ(10,"p"),n._uU(11,"Enviar"),n.qZA()()()()()()),2&t&&(n.Q6J("routerBack",o.backPage),n.xp6(5),n.Q6J("icon",o.whats),n.xp6(1),n.Q6J("ngModel",o.msg),n.xp6(3),n.Q6J("icon",o.send))},directives:[u.S,d.BN,p.Fj,p.JJ,p.On],styles:["main[_ngcontent-%COMP%]{display:flex;margin:0 auto;flex-direction:column;align-items:center;justify-content:center}.user[_ngcontent-%COMP%]{height:50px;width:max-content;justify-content:space-between;display:flex;flex-direction:row;align-items:center;padding:10px;background:#ffffff;box-shadow:2px 2px 3px gray}.user[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:#6e83b7;font-size:35px;margin-right:5px}.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px}.content[_ngcontent-%COMP%]{width:69%;max-width:1000px;margin-top:50px;display:flex;justify-content:center;flex-direction:column;margin-bottom:50px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{border-radius:15px;display:flex;flex-direction:column;align-items:center;justify-content:center;width:95%;height:max-content;padding:20px;background-color:#00e676;box-shadow:1px 1px 3px gray;margin-top:10px;margin-bottom:10px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:5px;text-indent:20px;width:90%;height:300px;resize:none;font-size:18px;font-family:Segoe UI;font-weight:500}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:70px;margin-bottom:20px;color:#fff}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;border-radius:10px;margin:30px auto 0;display:flex;flex-direction:row;align-items:center;justify-content:center;background-color:#128c7e;color:#fff;height:50px;width:120px;box-shadow:3px 3px 5px #808080ab;cursor:pointer}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{margin-top:20px;font-size:25px;margin-right:15px}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:17px;font-weight:600;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#00e676}.content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{color:#00e676}nav[_ngcontent-%COMP%]{display:inline-flex;width:100%;position:relative;flex-direction:row;justify-content:center;background:white;box-shadow:2px 2px 3px gray}nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;margin-right:20px;height:40px;font-size:20px;border:none;cursor:pointer;border-radius:5px;background:#00e676;color:#fff;box-shadow:1px 0 2px 1.5px gray}nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{box-shadow:none;color:#cfcfcf;background-color:#00a884}"]}),e})();var J=r(5861),j=r(5700);function E(e,i){if(1&e&&(n.TgZ(0,"option",11),n._uU(1),n.qZA()),2&e){const t=i.$implicit;n.Q6J("value",t.id),n.xp6(1),n.Oqu(t.nome)}}function F(e,i){if(1&e&&(n.TgZ(0,"option",11),n._uU(1),n.qZA()),2&e){const t=i.$implicit;n.Q6J("value",t),n.xp6(1),n.Oqu(t)}}function Q(e,i){if(1&e&&(n.TgZ(0,"option",11),n._uU(1),n.qZA()),2&e){const t=i.$implicit;n.Q6J("value",t),n.xp6(1),n.Oqu(t)}}const Y=function(e){return["/cliente/details/history",e]},I=function(e){return["/cliente/details/whatsapp",e]};function L(e,i){if(1&e&&(n.TgZ(0,"div",12)(1,"div",13)(2,"div",14),n._UZ(3,"fa-icon",15),n.TgZ(4,"p"),n._uU(5),n.qZA()(),n.TgZ(6,"div",16)(7,"p"),n._uU(8),n.qZA()(),n.TgZ(9,"div",17)(10,"p"),n._uU(11),n.qZA()()(),n.TgZ(12,"div",18),n._UZ(13,"fa-icon",19),n.qZA()()),2&e){const t=i.$implicit,o=n.oxw();n.xp6(1),n.Q6J("routerLink",n.VKq(7,Y,t.idcliente)),n.xp6(2),n.Q6J("icon",o.userIcon),n.xp6(2),n.Oqu(t.campos.nome),n.xp6(3),n.Oqu(t.etapa),n.xp6(3),n.Oqu(t.atualizacao),n.xp6(2),n.Q6J("icon",o.whats)("routerLink",n.VKq(9,I,t.idcliente))}}const N=[{path:"",component:(()=>{class e{constructor(t,o,s){this.fireservice=t,this.service=o,this.router=s,this.userIcon=g.m08,this.whats=x.yhw,this.funilselect="",this.respselect="",this.etapaselect="",this.funil={}}ngOnInit(){this.service.getEtapa().subscribe(t=>{this.clientes=t}),this.service.getFunil().subscribe(t=>{this.funis=t})}responsavel(){var t=this;return(0,J.Z)(function*(){console.log(t.funilselect),yield t.service.getFunilId(t.funilselect).subscribe(o=>{console.log(o),t.resparray=o[0].vendedor,t.etapas=o[0].fase}),yield t.service.getClienteFunil(t.funilselect).subscribe(o=>{t.clientes=o,console.log(t.clientes)})})()}etapa(t){console.log(this.respselect),this.service.getFunilId(this.funilselect).subscribe(o=>{this.etapasarray=o[0].fase,this.etapas=o[0].fase})}filtrofinal(t){this.service.getFunilEtapaInteressado(this.funilselect,t).subscribe(o=>{this.clientes=o,console.log(this.clientes)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(j.ST),n.Y36(l.h),n.Y36(a.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-clientes"]],decls:29,vars:7,consts:[[1,"content"],[1,"filters"],[1,"filter"],["for","funnel"],["name","id","id","id",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["name","nome","id","nome",3,"ngModel","ngModelChange"],[1,"info-content"],[1,"title"],[1,"inform"],["class","inform-content",4,"ngFor","ngForOf"],[3,"value"],[1,"inform-content"],[1,"content",3,"routerLink"],[1,"name"],[1,"userIcon",3,"icon"],[1,"phase-info"],[1,"date"],[1,"whatsapp"],[3,"icon","routerLink"]],template:function(t,o){1&t&&(n._UZ(0,"app-navbar"),n.TgZ(1,"main")(2,"div",0)(3,"div",1)(4,"div",2)(5,"label",3),n._uU(6,"Funil: "),n.qZA(),n.TgZ(7,"select",4),n.NdJ("ngModelChange",function(c){return o.funilselect=c})("ngModelChange",function(){return o.responsavel()}),n.YNc(8,E,2,2,"option",5),n.qZA()(),n.TgZ(9,"div",2)(10,"p"),n._uU(11,"Respons\xe1vel:"),n.qZA(),n.TgZ(12,"select",6),n.NdJ("ngModelChange",function(c){return o.respselect=c})("ngModelChange",function(c){return o.etapa(c)}),n.YNc(13,F,2,2,"option",5),n.qZA()(),n.TgZ(14,"div",2)(15,"p"),n._uU(16,"Etapas:"),n.qZA(),n.TgZ(17,"select",6),n.NdJ("ngModelChange",function(c){return o.etapaselect=c})("ngModelChange",function(c){return o.filtrofinal(c)}),n.YNc(18,Q,2,2,"option",5),n.qZA()()(),n.TgZ(19,"div",7)(20,"div",8)(21,"p"),n._uU(22,"Nome:"),n.qZA(),n.TgZ(23,"p"),n._uU(24,"Etapa:"),n.qZA(),n.TgZ(25,"p"),n._uU(26,"\xdaltima atualiza\xe7\xe3o:"),n.qZA()(),n.TgZ(27,"div",9),n.YNc(28,L,14,11,"div",10),n.qZA()()()()),2&t&&(n.xp6(7),n.Q6J("ngModel",o.funilselect),n.xp6(1),n.Q6J("ngForOf",o.funis),n.xp6(4),n.Q6J("ngModel",o.respselect),n.xp6(1),n.Q6J("ngForOf",o.resparray),n.xp6(4),n.Q6J("ngModel",o.etapaselect),n.xp6(1),n.Q6J("ngForOf",o.etapasarray),n.xp6(10),n.Q6J("ngForOf",o.clientes))},directives:[u.S,p.EJ,p.JJ,p.On,f.sg,p.YN,p.Kr,a.rH,d.BN],styles:["main[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.content[_ngcontent-%COMP%]{display:flex;width:68%;max-width:1200px;flex-direction:column}.content[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{margin-top:80px;width:100%;display:flex;justify-content:space-between}.content[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.content[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2em;margin-right:15px}.content[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:180px;font-size:1em;text-indent:5px;padding:3px;border-radius:5px;background-color:#fff;color:gray}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]{margin-top:25px}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:100%;padding-left:10%;padding-right:18%;padding-bottom:20px;margin-bottom:10px;border-bottom:1px solid #b8b6b6}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#000}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .inform[_ngcontent-%COMP%]   .title-inform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:17px;padding-left:10px}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .inform[_ngcontent-%COMP%]   .inform-content[_ngcontent-%COMP%]{margin-top:20px;display:flex;padding-left:2%;padding-right:5%;flex-direction:row;justify-content:space-between;align-items:center;background-color:#fff;box-shadow:3px 3px 5px gray}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .inform[_ngcontent-%COMP%]   .inform-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:gray}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .inform[_ngcontent-%COMP%]   .inform-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{cursor:default;display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:80%}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .inform[_ngcontent-%COMP%]   .inform-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .phase-info[_ngcontent-%COMP%]{margin-right:11%}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .inform[_ngcontent-%COMP%]   .inform-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{cursor:pointer;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:max-content}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .inform[_ngcontent-%COMP%]   .inform-content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .userIcon[_ngcontent-%COMP%]{font-size:40px;margin-right:15px;color:#6e83b7}.content[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .inform[_ngcontent-%COMP%]   .inform-content[_ngcontent-%COMP%]   .whatsapp[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:50px;color:#00e676;cursor:pointer}"]}),e})()},{path:"details",component:h,children:[{path:"history",component:O},{path:"history/:id",component:O},{path:"email",component:C},{path:"email/:id",component:C},{path:"phase",component:_},{path:"phase/:id",component:_},{path:"whatsapp",component:P},{path:"whatsapp/:id",component:P}]},{path:"details/:id",component:h}];let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.Bz.forChild(N)],a.Bz]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[f.ez,d.uH,b.O,R,p.u5]]}),e})()}}]);