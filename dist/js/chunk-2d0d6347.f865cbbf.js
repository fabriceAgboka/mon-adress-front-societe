(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6347"],{"720f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",{staticStyle:{color:"black"}},[t._v("Liste des adresses suspendu")]),s("div",{staticClass:"card"},[1==t.loading?s("div",{staticClass:"m-2"},[s("b-row",[s("b-col",{staticClass:"my-1",attrs:{md:"2",sm:"4"}},[s("b-form-group",{staticClass:"mb-0"},[s("label",{staticClass:"d-inline-block text-sm-left mr-50"},[t._v("Par page")]),s("b-form-select",{staticClass:"w-50",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),s("b-col",{staticClass:"my-1",attrs:{md:"4",sm:"8"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Trier","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"sortBySelect"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-select",{staticClass:"w-75",attrs:{id:"sortBySelect",options:t.sortOptions},scopedSlots:t._u([{key:"first",fn:function(){return[s("option",{attrs:{value:""}},[t._v("-- Aucun --")])]},proxy:!0}],null,!1,3586146808),model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),s("b-form-select",{staticClass:"w-25",attrs:{size:"sm",disabled:!t.sortBy},model:{value:t.sortDesc,callback:function(e){t.sortDesc=e},expression:"sortDesc"}},[s("option",{domProps:{value:!1}},[t._v("Croissant")]),s("option",{domProps:{value:!0}},[t._v("Décroussant")])])],1)],1)],1),s("b-col",{staticClass:"my-1",attrs:{md:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{label:"Filtrer","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[s("b-input-group",{attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"filterInput",type:"search",placeholder:"Zone de recherche"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),s("b-input-group-append",[s("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v(" Effacer ")])],1)],1)],1)],1),s("b-col",{attrs:{cols:"12"}},[s("b-table",{attrs:{striped:"",hover:"",responsive:"","per-page":t.perPage,"current-page":t.currentPage,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(statut)",fn:function(e){return[s("b-badge",{attrs:{variant:t.status[e.item.statut_id-1]}},[t._v(" "+t._s(e.value)+" ")])]}},{key:"cell(created_at)",fn:function(e){return[t._v(" "+t._s(t.format_date(e.value))+" ")]}},{key:"cell(user_id)",fn:function(e){return[s("span",[s("span",[s("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[s("feather-icon",{staticClass:"text-body align-middle mr-25",attrs:{icon:"MoreVerticalIcon",size:"16"}})]},proxy:!0}],null,!0)},[2!=e.item.statut_id?s("b-dropdown-item",{on:{click:function(s){return t.change_status(e.item.id,2)}}},[s("feather-icon",{staticClass:"mr-50 text-success",attrs:{icon:"CheckIcon"}}),s("span",[t._v("Activer")])],1):t._e(),3!=e.item.statut_id?s("b-dropdown-item",{on:{click:function(s){return t.change_status(e.item.id,3)}}},[s("feather-icon",{staticClass:"mr-50 text-danger",attrs:{icon:"XOctagonIcon"}}),s("span",[t._v("Inactiver")])],1):t._e(),4!=e.item.statut_id?s("b-dropdown-item",{on:{click:function(s){return t.change_status(e.item.id,4)}}},[s("feather-icon",{staticClass:"mr-50 text-warning",attrs:{icon:"AlertTriangleIcon"}}),s("span",[t._v("Suspendre")])],1):t._e(),5!=e.item.statut_id?s("b-dropdown-item",{on:{click:function(s){return t.change_status(e.item.id,5)}}},[s("feather-icon",{staticClass:"mr-50 text-info",attrs:{icon:"CircleIcon"}}),s("span",[t._v("Traiter")])],1):t._e()],1)],1)])]}}],null,!1,3690815788)})],1),s("b-col",{attrs:{cols:"12"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"right",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1):t._e()])])},n=[],i=s("29a1"),o=s("e8a3"),r=s("e98b"),l=s("a15b"),c=s("b28b"),u=s("8226"),d=s("8361"),p=s("26d2"),m=s("5e12"),f=s("4797"),b=s("ccc0"),g=s("1947"),h=s("dd9a"),_=s("9eaa"),v=s("c1df"),y=s.n(v),k=s("3d20"),B=s.n(k),w=s("223c"),x={components:{BTable:i["a"],BAvatar:o["a"],BBadge:r["a"],BRow:l["a"],BCol:c["a"],BFormGroup:u["a"],BFormSelect:d["a"],BPagination:p["a"],BInputGroup:m["a"],BFormInput:f["a"],BInputGroupAppend:b["a"],BButton:g["a"],BDropdown:h["a"],BDropdownItem:_["a"]},data(){return{loading:!1,perPage:30,pageOptions:[3,5,10,30,50,100,500,1e3],totalRows:1,currentPage:1,sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],infoModal:{id:"info-modal",title:"",content:""},fields:[{key:"id",label:"ID",sortable:!0},{key:"user",label:"Abonné(e)",sortable:!0},{key:"adresse",label:"Adresse",sortable:!0},{key:"typeadresse",label:"Type adresse",sortable:!0},{key:"created_at",label:"Soumis le",sortable:!0}],status:["light-warning","light-success","light-danger","light-info"],change_status_component:[{name:"en cours",link:"/en-cours",id:1},{name:"activer",link:"/actif",id:2},{name:"désactiver",link:"/inactif",id:3},{name:"suspendre",link:"/suspendu",id:4},{name:"traiter",link:"/traitement",id:5}]}},computed:{sortOptions(){return this.fields.filter(t=>t.sortable).map(t=>({text:t.label,value:t.key}))}},mounted(){this.index()},methods:{info(t,e,s){this.infoModal.title="Row index: "+e,this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,s)},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},onFiltered(t){this.totalRows=t.length,this.currentPage=1},index(){this.loading=!1;let t={status:4};this.$http.post("/societe/adresses/index",t).then(t=>{this.items=t.data,this.totalRows=this.items.length,this.loading=!0,this.init_page=!0,this.current_page=page}).catch(t=>{})},change_status(t,e){let s=this.change_status_component[e-1];this.confirmText(t,s)},async confirmText(t,e){const s=await B.a.fire({title:"Êtes-vous sûr de vouloir "+e.name+" ?",text:"Cette action est irréversible.",icon:"warning",showCancelButton:!0,confirmButtonText:"Oui, "+e.name+"!",cancelButtonText:"Annuler",reverseButtons:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1 mr-1"},buttonsStyling:!1});if(s.isConfirmed){let s={adresse:t};this.$http.post("/societe/adresses/status"+e.link,s).then(t=>{this.$toast({component:w["a"],props:{title:"Opération réussie!",icon:"UserIcon",variant:"success"}}),this.index()}).catch(t=>{})}},format_date(t){return y()(t).locale("fr").format("DD MMM YYYY [à] HH:mm")}}},C=x,P=s("2877"),D=Object(P["a"])(C,a,n,!1,null,null,null);e["default"]=D.exports}}]);
//# sourceMappingURL=chunk-2d0d6347.f865cbbf.js.map