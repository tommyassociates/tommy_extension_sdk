var addon=function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([,function(e,t,n){"use strict";function a(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",{attrs:{id:"credentials__index"}},[n("f7-navbar",[n("tommy-nav-menu"),e._v(" "),n("f7-nav-title",[e._v("Credentials")]),e._v(" "),n("f7-nav-right")],1),e._v(" "),n("f7-list",{staticClass:"list-custom"},[n("li",{staticClass:"item-divider"},[e._v("Date Range Select")]),e._v(" "),n("date-range-select",{on:{change:e.onDateRangeChange,save:e.onSave},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}}),e._v(" "),n("tag-select",{attrs:{title:"Tag Select"},on:{change:e.onTagsChange,save:e.onSave},model:{value:e.testTags,callback:function(t){e.testTags=t},expression:"testTags"}}),e._v(" "),n("permission-select",{attrs:{title:"Permission Select: Team Member Access","permission-name":"addon_access","addon-name":"credentials"}})],1)],1)}function s(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag-select"},[n("ul",[n("li",{staticClass:"item-divider"},[e._v(e._s(e.title))]),e._v(" "),n("li",[n("a",{staticClass:"item-link tag-search",attrs:{href:"#"},on:{click:e.openSelector}},[n("div",{staticClass:"item-content"},[e._m(0),e._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title"},[e._v(e._s(e.$t("common.search_members_tags","Search Members, Tags")))])])])])])]),e._v(" "),n("ul",{staticClass:"tag-items"},e._l(e.value,(function(t,a){return n("li",{key:a,staticClass:"tag-item"},[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title"},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"item-after"},[n("a",{staticClass:"item-link",staticStyle:{height:"24px"},attrs:{href:"#"},on:{click:function(n){return e.toggleTag(t,!1)}}},[n("i",{staticClass:"material-icons"},[e._v("close")])])])])])])})),0)])}function i(e,t,n,a,s,i,o,r){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var g=c.beforeCreate;c.beforeCreate=g?[].concat(g,l):[l]}return{exports:e,options:c}}n.r(t),s._withStripped=a._withStripped=!0;var o=i({props:{value:Array,title:String},data:function(){return{allTags:null}},mounted:function(){var e=this;this.$api.getCurrentTeamTags({cache:!0}).then((function(t){return e.allTags=t}))},methods:{openSelector:function(){var e=this;this.$f7.views.main.router.navigate("/settings/tag-select/",{props:{pageTitle:this.title,filters:this.value,allTags:this.allTags,onChange:this.toggleTag,onSave:function(){e.$emit("save",this.value)}}})},toggleTag:function(e,t){var n=[].concat(this.value);t?(console.log("tag select: add",e),this.$emit("tagAdd",e),n.push(e)):(console.log("tag select: remove",e),this.$emit("tagRemove",e),n.splice(n.indexOf(e),1)),this.$emit("input",n)}}},s,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"item-media"},[t("i",{staticClass:"material-icons md-36"},[this._v("search")])])}],!1,null,null,null);function r(){var e=this,t=e.$createElement;return(e._self._c||t)("tag-select",{staticClass:"permission-select",attrs:{filters:e.permission.filters,title:e.title},on:{change:e.savePermission}})}o.options.__file="tommy_core/src/components/tag-select.vue";var l=o.exports;r._withStripped=!0;var c=i({components:{TagSelect:l},props:{title:String,addonPackage:String,permissionName:String,taggableId:[String,Number],taggableType:String},data:function(){return{permission:{}}},mounted:function(){this.loadPermission()},methods:{loadPermission:function(){var e=this;console.log("permission select: load",this.addonPackage,this.permissionName),this.$api.getInstalledAddonPermission(this.addonPackage,this.permissionName,{taggable_id:this.taggableId,taggable_type:this.taggableType,with_filters:!0}).then((function(t){return e.permission=t}))},savePermission:function(){console.log("permission select: save",this.addonPackage,this.permissionName,this.permission),this.$api.updateInstalledAddonPermission(this.addonPackage,this.permissionName,{taggable_id:this.taggableId,taggable_type:this.taggableType,filters:JSON.stringify(this.permission.filters)})}}},r,[],!1,null,null,null);function u(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("f7-list-item",{attrs:{link:"#",title:e.$t("common.date_range","Date Range"),after:e.formatDateRange(this.value)},on:{click:e.openSelector}})],1)}c.options.__file="tommy_core/src/components/permission-select.vue";var g=c.exports;function d(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,s=t.getDate();return a<10&&(a="0".concat(a)),s<10&&(s="0".concat(s)),"".concat(n,"-").concat(a,"-").concat(s)}u._withStripped=!0;var m=i({props:{value:[Array,String]},data:function(){return{}},mounted:function(){},methods:{formatDateRange:function(e){if(!e)return"";if("string"!=typeof e)return Array.isArray(e)?"".concat(d(e[0])," - ").concat(d(e[1])):e||"";var t=e.charAt(0).toUpperCase()+e.slice(1);return window.tommy.i18n.t("date_range.".concat(e),t)},openSelector:function(){var e=this;e.$f7router.navigate("/settings/date-range/",{props:{dateRange:this.value,onChange:function(t){console.log("date range select: on change",t),e.$emit("input",t)},onSave:function(){console.log("date range select: on save",e.value),e.$emit("save",e.value)}}})}}},u,[],!1,null,null,null);m.options.__file="tommy_core/src/components/date-range-select.vue";var p=i({components:{TagSelect:l,PermissionSelect:g,DateRangeSelect:m.exports},data:function(){return{testTags:[{name:"Test Tag"}],dateRange:null}},methods:{onDateRangeChange:function(e){console.log("credentials addon: date range changed",e)},onTagsChange:function(e){console.log("credentials addon: tags changed",e)},onSave:function(){console.log("credentials addon: save requested")}}},a,[],!1,null,null,null);p.options.__file="addons/credentials/1.0.0/src/pages/index.vue";var f=[{path:"/credentials/",component:p.exports}];t.default=f}]).default;