(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216460"],{c283:function(a,e,r){"use strict";r.r(e);var t=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[a._v("Join Form")])],1),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:a.valid,callback:function(e){a.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:a.emailRules,required:""},model:{value:a.email,callback:function(e){a.email=e},expression:"email"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password",required:"",rules:a.passwordRules},model:{value:a.password,callback:function(e){a.password=e},expression:"password"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",disabled:!a.valid},on:{click:a.submit}},[a._v("Join")])],1)],1)],1)],1)],1)},s=[],i={name:"join",data:function(){return{valid:!1,email:"",password:"",emailrules:[function(a){return!!a||"E-mail is required"},function(a){return/.+@.+/.test(a)||"E-mail must be valid"}],passwordRules:[function(a){return!!a||"Password is required"},function(a){return a.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("userJoin",{email:this.email,password:this.password})}}},l=i,o=r("2877"),n=r("6544"),d=r.n(n),c=r("8336"),u=r("b0af"),m=r("99d9"),p=r("a523"),v=r("0e8f"),f=r("4bd4"),b=r("a722"),w=r("9910"),h=r("2677"),x=r("71d9"),V=r("2a7f"),k=Object(o["a"])(l,t,s,!1,null,"1052e9cc",null);e["default"]=k.exports;d()(k,{VBtn:c["a"],VCard:u["a"],VCardActions:m["a"],VCardText:m["b"],VContainer:p["a"],VFlex:v["a"],VForm:f["a"],VLayout:b["a"],VSpacer:w["a"],VTextField:h["a"],VToolbar:x["a"],VToolbarTitle:V["a"]})}}]);
//# sourceMappingURL=chunk-2d216460.9db9248f.js.map