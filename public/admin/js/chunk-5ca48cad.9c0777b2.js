(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ca48cad"],{"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},9162:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"interface-status"},t._l(t.optionValues,function(e,n){return s("v-radio",{key:n,attrs:{id:t.name+"-"+n,name:t.name,value:n,disabled:t.readonly,"model-value":String(t.value),label:e.label,checked:n==t.value},on:{change:function(e){return t.$emit("input",e)}}})}),1)},i=[],a=(s("8e6e"),s("28a5"),s("ac6a"),s("456d"),s("bd86")),r=s("8db2"),u=s.n(r);function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,n)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(s,!0).forEach(function(e){Object(a["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var c={name:"InterfaceStatus",mixins:[u.a],data:function(){return{startStatus:null}},computed:{statusMapping:function(){var t=this;return"string"===typeof this.options.status_mapping?this.options.status_mapping?JSON.parse(this.status_mapping):{}:this.options.status_mapping?_.mapValues(this.options.status_mapping,function(e){return o({},e,{label:t.$helpers.formatTitle(t.$t(e.name))})}):{}},optionValues:function(){var t=Object.keys(this.statusMapping),e=_.differenceWith(t,this.blacklist,_.isEqual);return _.pick(this.statusMapping,e)},blacklist:function(){if(this.permissions)return"string"===typeof this.permissions.status_blacklist?this.permissions.status_blacklist.split(","):this.permissions.status_blacklist},permissions:function(){return this.newItem?this.$store.state.permissions[this.collection].$create:this.$store.state.permissions[this.collection].statuses[this.startStatus]}},created:function(){if((!this.value||""===this.value)&&null!==this.$store.state.permissions[this.collection].statuses){var t=Object.keys(this.$store.state.permissions[this.collection].statuses);t.length>1&&this.$emit("input",t[0])}this.startStatus=this.value}},p=c,f=(s("e6c4"),s("2877")),d=Object(f["a"])(p,n,i,!1,null,"e0097a7c",null);e["default"]=d.exports},d731:function(t,e,s){},e6c4:function(t,e,s){"use strict";var n=s("d731"),i=s.n(n);i.a}}]);
//# sourceMappingURL=chunk-5ca48cad.9c0777b2.js.map