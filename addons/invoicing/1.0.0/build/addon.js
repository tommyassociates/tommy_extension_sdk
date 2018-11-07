var addon=function(){var n=window.tommy.api,s={actor:void 0,actorId:void 0,loadListOrders:function loadListOrders(t,e){if(t.data&&t.filters)for(var i=0;i<t.filters.length;i+=1)e.indexOf(t.filters[i].name)<0&&e.push(t.filters[i].name);var a={addon:"tasks",kind:"Task",tags:e,with_filters:!0,with_permission_to:!0,actor_id:s.actorId};return t.data.date_range&&(a.date_range=t.data.date_range),t.data.statuses&&(a.status=t.data.statuses),a.data=JSON.stringify(a.data),n.getFragments(a)},getTask:function getTask(t){return n.getFragment(t,{data:{with_filters:!0}})},saveTask:function saveTask(t){if(t.addon="tasks",t.kind="Task",t.with_filters=!0,t.with_permission_to=!0,t.start_at||(t.start_at=(new Date).getTime()),!t.id){t.with_permissions=["task_create_access","task_edit_access"];var e=s.actor;e&&(t.filters||(t.filters=[]),t.filters.push({context:"members",name:e.first_name+" "+e.last_name,user_id:e.user_id}))}var i=Object.assign({},t,{data:JSON.stringify(t.data)});return t.id?n.updateFragment(t.id,i):n.createFragment(i)},loadList:function loadList(t){return n.getFragment(t,{data:{addon:"invoicing",kind:"OrderList",with_filters:!0,with_permission_to:!0}})},loadLists:function loadLists(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),n.getFragments(Object.assign({addon:"invoicing",kind:"OrderList",with_filters:!0,with_permission_to:!0,actor_id:s.actorId,user_id:s.actorId},t),e)},deleteList:function deleteList(t){return n.deleteFragment(t)},saveList:function saveList(t){t.addon="invoicing",t.kind="OrderList",t.with_filters=!0,t.with_permission_to=!0,t.data||(t.data={}),void 0===t.data.position&&(t.data.position=0),void 0===t.data.active&&(t.data.active=!0),t.id||(t.with_permissions=["invoicing_order_list_read_access","invoicing_order_list_edit_access"]);var e=Object.assign({},t,{data:JSON.stringify(t.data),filters:JSON.stringify(t.filters)});return t.id?n.updateFragment(t.id,e):n.createFragment(e)},loadItem:function loadItem(t){return new Promise(function(t){t({})})},loadPackage:function loadPackage(t){return new Promise(function(t){t({})})},loadItems:function loadItems(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),n.getFragments(Object.assign({addon:"invoicing",kind:"InvoicingItem",with_filters:!0,with_permission_to:!0,actor_id:s.actorId,user_id:s.actorId},t),e)},loadPackages:function loadPackages(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),n.getFragments(Object.assign({addon:"invoicing",kind:"InvoicingPackage",with_filters:!0,with_permission_to:!0,actor_id:s.actorId,user_id:s.actorId},t),e)}};var t=["Unassigned","Assigned","Processing","Completed","Closed","Archive Task","Cancel"];function formatDate(t){var e=new Date(t),i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return a<10&&(a="0"+a),n<10&&(n="0"+n),i+"-"+a+"-"+n}var e={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"tag-select tasks-tag-select orders-list-tags-select"},[a("ul",[a("li",{staticClass:"item-divider"},[i._v(i._s(i.data.title))]),i._v(" "),a("li",[a("a",{staticClass:"item-link tag-search",attrs:{href:"#"},on:{click:i.openSelector}},[a("div",{staticClass:"item-content"},[i._m(0),i._v(" "),a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[i._v(i._s(i.data.placeholder))])])])])])]),i._v(" "),a("ul",{staticClass:"tag-items"},i._l(i.data.filters,function(e,t){return a("li",{key:t,staticClass:"tag-item"},[a("div",{staticClass:"item-content"},[a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title"},[i._v(i._s(e.name))]),i._v(" "),a("div",{staticClass:"item-after"},[a("a",{staticClass:"item-link",staticStyle:{height:"24px"},attrs:{href:"#"},on:{click:function(t){i.removeTag(e)}}},[a("i",{staticClass:"material-icons"},[i._v("close")])])])])])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-media"},[e("i",{staticClass:"material-icons md-36"},[this._v("search")])])}],props:{data:Object},data:function data(){return{teamTags:null}},mounted:function mounted(){var e=this;e.$api.getCurrentTeamTags({cache:!0}).then(function(t){e.teamTags=t})},methods:{openSelector:function openSelector(){var i=this;i.$f7router.navigate("/invoicing/tag-select/",{props:{filters:i.data.filters,pageTitle:i.data.pageTitle,teamTags:i.teamTags,onChange:function onChange(t,e){e?i.$emit("tagAdd",t):i.$emit("tagRemove",t)}}})},removeTag:function removeTag(t){this.$emit("tagRemove",t)}}},i={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("f7-page",{staticClass:"invoicing-page",attrs:{name:"invoicing__list-edit",id:"invoicing__list-edit"}},[a("f7-navbar",[a("tommy-nav-back"),i._v(" "),a("f7-nav-title",[i._v(i._s(i.$t("invoicing.list_edit.title","Edit List")))]),i._v(" "),a("f7-nav-right",[i.showSave?a("f7-link",{attrs:{"icon-f7":"check"},on:{click:i.save}}):i._e()],1)],1),i._v(" "),i.list?a("f7-list",{staticClass:"list-custom"},[a("f7-list-item",[a("f7-label",[i._v(i._s(i.$t("invoicing.list_edit.name","Name")))]),i._v(" "),a("f7-input",{attrs:{type:"text",value:i.list.name},on:{input:function(t){i.onNameChange(t.target.value)}}})],1),i._v(" "),a("f7-list-item",{attrs:{link:"#",title:i.$t("invoicing.common.date_range","Date Range"),after:i.formatDateRange(i.list.data.date_range)},on:{click:i.showDateRange}}),i._v(" "),a("f7-list-item",{attrs:{"smart-select":"",title:i.$t("invoicing.list_edit.filter_status","Status")}},[a("select",{staticClass:"toggle-save",attrs:{name:"statuses",multiple:"multiple"},on:{change:i.onStatusChange}},i._l(i.orderStatuses,function(t,e){return a("option",{key:e,domProps:{value:t,selected:0<=i.list.data.statuses.indexOf(t)}},[i._v(i._s(i.$t("invoicing.status."+t.toLowerCase().replace(/ /g,"_"))))])}))]),i._v(" "),i.$root.team&&i.$root.teamMembers?a("f7-list-item",{attrs:{"smart-select":"","smart-select-params":{searchbar:!0},title:i.$t("invoicing.list_edit.activity_from","Activity From")}},[a("select",{attrs:{name:"activity_from",multiple:"multiple"},on:{change:i.onActivityFromChange}},i._l(i.$root.teamMembers,function(t){return a("option",{key:t.id,attrs:{"data-option-class":"invoicing-smart-select-option","data-option-image":t.icon_url},domProps:{value:t.user_id,selected:0<=i.list.data.activity_from.indexOf(t.user_id)}},[i._v(i._s(t.first_name||"")+" "+i._s(t.last_name||""))])}))]):i._e(),i._v(" "),i.$root.team&&i.$root.teamMembers?a("f7-list-item",{attrs:{"smart-select":"","smart-select-params":{searchbar:!0},title:i.$t("invoicing.list_edit.customer","Customer")}},[a("select",{attrs:{name:"customer",multiple:"multiple"},on:{change:i.onCustomerChange}},i._l(i.$root.teamMembers,function(t){return a("option",{key:t.id,attrs:{"data-option-class":"invoicing-smart-select-option","data-option-image":t.icon_url},domProps:{value:t.user_id,selected:0<=i.list.data.customer.indexOf(t.user_id)}},[i._v(i._s(t.first_name||"")+" "+i._s(t.last_name||""))])}))]):i._e(),i._v(" "),i.$root.team&&i.$root.teamMembers?a("f7-list-item",{attrs:{"smart-select":"","smart-select-params":{searchbar:!0},title:i.$t("invoicing.list_edit.bill_to","Bill To")}},[a("select",{attrs:{name:"bill_to",multiple:"multiple"},on:{change:i.onBillToChange}},i._l(i.$root.teamMembers,function(t){return a("option",{key:t.id,attrs:{"data-option-class":"invoicing-smart-select-option","data-option-image":t.icon_url},domProps:{value:t.user_id,selected:0<=i.list.data.bill_to.indexOf(t.user_id)}},[i._v(i._s(t.first_name||"")+" "+i._s(t.last_name||""))])}))]):i._e(),i._v(" "),i._l(i.permissions,function(e,t){return a("tag-select",{key:t,attrs:{listId:i.list.id,data:{title:i.$t("invoicing.permissions."+e.name+".title"),placeholder:i.$t("invoicing.common.search_members_tags","Search Members, Tags"),pageTitle:i.$t("invoicing.common.search_members_tags","Search Members, Tags"),filters:e.filters}},on:{tagAdd:function(t){return i.addListPermission(e,t)},tagRemove:function(t){return i.removeListPermission(e,t)}}})})],2):i._e(),i._v(" "),i.list?a("f7-list",{staticClass:"margin-top"},[a("f7-list-button",{staticClass:"color-custom",attrs:{color:"custom"},on:{click:i.deleteList}},[i._v(i._s(i.$t("invoicing.list_edit.delete-list","Delete List")))])],1):i._e()],1)},staticRenderFns:[],components:{tagSelect:e},props:{listId:[String,Number]},data:function data(){return{showSave:!1,id:parseInt(this.listId,10),orderStatuses:t,list:null,permissions:[]}},beforeDestroy:function beforeDestroy(){this.$events.$off("invoicing:setListDateRange",this.updateListDateRange)},mounted:function mounted(){var i=this;s.loadList(i.id).then(function(e){e.data||(e.data={}),e.data.statuses||(e.data.statuses=[]),e.data.activity_from||(e.data.activity_from=[]),e.data.customer||(e.data.customer=[]),e.data.bill_to||(e.data.bill_to=[]),i.list=e,i.$api.getInstalledAddonPermission("invoicing","invoicing_order_list_read_access",{resource_id:e.id,with_filters:!0}).then(function(t){t.resource_id=e.id,i.permissions.push(t)}),i.$api.getInstalledAddonPermission("invoicing","invoicing_order_list_edit_access",{resource_id:e.id,with_filters:!0}).then(function(t){t.resource_id=e.id,i.permissions.push(t)})}),i.$events.$on("invoicing:setListDateRange",i.updateListDateRange)},methods:{formatDateRange:function formatDateRange(t){return t?"string"==typeof t?window.tommy.i18n.t("invoicing.date_range."+t):Array.isArray(t)?formatDate(t[0])+" - "+formatDate(t[1]):t||"":""},updateListDateRange:function updateListDateRange(t,e){this.list.id===t&&(this.list.data.date_range=e)},onNameChange:function onNameChange(t){this.saving||(this.list.name=t,this.showSave=!0)},onStatusChange:function onStatusChange(t){this.saving||(this.list.data.statuses=this.$$(t.target).val(),this.showSave=!0)},onActivityFromChange:function onActivityFromChange(t){this.saving||(this.list.data.activity_from=this.$$(t.target).val().map(function(t){return parseInt(t,10)}),this.showSave=!0)},onCustomerChange:function onCustomerChange(t){this.saving||(this.list.data.customer=this.$$(t.target).val().map(function(t){return parseInt(t,10)}),this.showSave=!0)},onBillToChange:function onBillToChange(t){this.saving||(this.list.data.bill_to=this.$$(t.target).val().map(function(t){return parseInt(t,10)}),this.showSave=!0)},showDateRange:function showDateRange(){this.$f7router.navigate("/invoicing/list-edit/date-range/",{props:{list:this.list}})},save:function save(){var t=this;t.saving||(t.saving=!0,t.showSave=!1,s.saveList(t.list).then(function(){t.$events.$emit("invoicing:reloadLists"),t.$f7router.back()}))},deleteList:function deleteList(){var t=this;t.saving||(t.saving=!0,t.showSave=!1,s.deleteList(t.list.id).then(function(){t.$events.$emit("invoicing:reloadLists"),t.$f7router.back()}))},saveListPermission:function saveListPermission(t){this.$api.updateInstalledAddonPermission("invoicing",t.name,{resource_id:t.resource_id,with_filters:!0,filters:JSON.stringify(t.filters)})},addListPermission:function addListPermission(t,e){t.filters.push(e),this.saveListPermission(t)},removeListPermission:function removeListPermission(t,e){t.filters.splice(t.filters.indexOf(e),1),this.saveListPermission(t)}}};return[{path:"/invoicing/",component:{render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("f7-page",{staticClass:"invoicing-page",attrs:{id:"invoicing__index",name:"invoicing__index"}},[a("f7-navbar",[a("tommy-nav-menu"),i._v(" "),a("f7-nav-title",[i._v(i._s(i.pageTitle))]),i._v(" "),a("f7-nav-right",[a("f7-link",{attrs:{href:"/invoicing/settings/","icon-f7":"gear"}})],1)],1),i._v(" "),i.orderedLists&&i.orderedLists.length?a("f7-swiper",{attrs:{params:{slidesPerView:"auto",breakpointsInverse:!0,centeredSlides:!1,breakpoints:{768:{centeredSlides:!0}}}}},i._l(i.orderedLists,function(t){return a("f7-swiper-slide",{key:t.id},[a("div",{staticClass:"orders-list",class:{hasScroll:i.listWithScroll[t.id]},attrs:{"data-id":t.id}},[a("div",{staticClass:"orders-list-header"},[a("div",[i._v(i._s(t.name))]),i._v(" "),i.canEditList(t)?a("div",[a("a",{attrs:{href:"/invoicing/list-edit/"+t.id+"/"}},[a("img",{attrs:{src:i.$addonAssetsUrl+"slice6.png",srcset:i.$addonAssetsUrl+"slice6@2x.png 2x, "+i.$addonAssetsUrl+"slice6@3x.png 3x"}})])]):i._e()]),i._v(" "),a("div",{staticClass:"orders-list-content"},[t.orders&&t.orders.length?i._l(t.orders,function(t,e){return a("a",{key:e,staticClass:"card order-card",attrs:{href:"/invoicing/order-details/"+t.id+"/"}},[a("div",{staticClass:"card-content card-content-padding"}),i._v(" "),a("div",{staticClass:"card-footer no-border color-gray"})])}):i._e()],2)])])})):i._e()],1)},staticRenderFns:[],data:function data(){return{lists:null,actorId:this.$f7route.query.actor_id,listWithScroll:{}}},created:function created(){var t=this;t.actorId?(s.actorId=parseInt(t.actorId,10),s.actor=t.actor):(delete s.actorId,delete s.actor)},computed:{actor:function actor(){var e=this;return e.actorId?e.$root.teamMembers.filter(function(t){return t.user_id===parseInt(e.actorId,10)})[0]:null},pageTitle:function pageTitle(){var e=this;if(!e.actorId)return e.$t("invoicing.index.title","Orders");var t=e.$root.teamMembers.filter(function(t){return t.user_id===parseInt(e.actorId,10)})[0].first_name;return e.$t("invoicing.index.title_user",{user:t})},orderedLists:function orderedLists(){return this.lists?this.lists.sort(function(t,e){return t.data.position-e.data.position}).filter(function(t){return t.data.active}):null}},methods:{humanTime:function humanTime(t){var e=window.tommy.moment,i=e.utc(t).toDate();if(e(i).isValid()){var a=e().diff(e(i),"days");if(1===a)return"Yesterday "+e(i).format("h:mm A");if(0===a)return"Today "+e(i).format("h:mm A");if(-1===a)return"Yesterday "+e(i).format("h:mm A");if(1<=a&&a<=8||-8<=a&&a<=-1)return e(i).format("ddd h:mm A");if(365<=a||a<=-365)return e(i).format("MMM D, YYYY h:mm A");if(8<=a||a<=-8)return e(i).format("MMM D h:mm A")}return"None"},listHasScroll:function listHasScroll(t){if(!t.orders||0===t.orders.length)return!1;var e=this.$$('.orders-list[data-id="'+t.id+'"] .orders-list-content')[0];return!!e&&e.scrollHeight>e.offsetHeight},loadListOrders:function loadListOrders(e){var i=this,t=i.actor||i.$root.user;s.loadListOrders(e,[t.first_name+" "+t.last_name]).then(function(t){e.orders=t,i.$nextTick(function(){i.listHasScroll(e)?i.$set(i.listWithScroll,e.id,!0):i.$set(i.listWithScroll,e.id,!1)})})},reloadListsOrders:function reloadListsOrders(){var e=this;e.lists&&e.lists.forEach(function(t){e.loadListOrders(t)})},loadLists:function loadLists(t){var e=this;s.loadLists({},{cache:!t}).then(function(t){t.forEach(function(t){t.orders=[]}),e.lists=t,e.lists.forEach(function(t){t.data.active&&e.loadListOrders(t)})})},reloadLists:function reloadLists(){this.loadLists(!0)},canEditList:function canEditList(t){var e=this.$root.account,i="Team"===e.type||"TeamMember"===e.type;return!(t.data.default&&!i)&&-1!==t.permission_to.indexOf("update")}},beforeDestroy:function beforeDestroy(){this.$events.$off("invoicing:reloadListsOrders",this.reloadListsOrders),this.$events.$off("invoicing:reloadLists",this.reloadLists)},mounted:function mounted(){var t=this;t.loadLists(),t.$events.$on("invoicing:reloadListsOrders",t.reloadListsOrders),t.$events.$on("invoicing:reloadLists",t.reloadLists)}}},{path:"/invoicing/settings/",component:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",{staticClass:"invoicing-page",attrs:{id:"invoicing__settings","data-name":"invoicing__settings"}},[i("f7-navbar",[i("tommy-nav-back"),t._v(" "),i("f7-nav-title",[t._v(t._s(t.$t("invoicing.settings.title","Settings")))])],1),t._v(" "),i("f7-list",{staticClass:"list-custom"},[t.hasActorId?t._e():i("f7-list-item",{attrs:{link:"/invoicing/list-management/",title:t.$t("invoicing.settings.list_management","List Management")}}),t._v(" "),i("f7-list-item",{attrs:{link:"/invoicing/item-service-management/",title:t.$t("invoicing.settings.item_service_management","Item/Service Management")}}),t._v(" "),i("f7-list-item",{attrs:{link:"/invoicing/promotion-management/",title:t.$t("invoicing.settings.promotion_management","Promotion Management")}})],1)],1)},staticRenderFns:[]}},{path:"/invoicing/item-service-management/",component:{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("f7-page",{staticClass:"invoicing-page",attrs:{name:"invoicing__item-service-management",id:"invoicing__item-service-management"}},[i("f7-navbar",[i("tommy-nav-back"),e._v(" "),i("f7-nav-title",[e._v(e._s(e.$t("invoicing.item_service_management.title","Items / Service")))]),e._v(" "),i("f7-nav-right",[i("f7-link",{attrs:{"popover-open":".add-item-service-package-popover","icon-f7":"add"}})],1)],1),e._v(" "),i("div",{staticClass:"item-service-tabs-links"},[i("f7-link",{class:{active:"items"===e.activeTab},on:{click:function(t){e.activeTab="items"}}},[e._v(e._s(e.$t("invoicing.item_service_management.items_tab")))]),e._v(" "),i("f7-link",{class:{active:"packages"===e.activeTab},on:{click:function(t){e.activeTab="packages"}}},[e._v(e._s(e.$t("invoicing.item_service_management.packages_tab")))])],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"items"===e.activeTab,expression:"activeTab === 'items'"}],staticClass:"item-service-tab"},[e.items&&e.items.length?i("f7-searchbar",{attrs:{"search-container":".invoicing-list-items",backdrop:!1,"disable-button":!1,placeholder:e.$t("invoicing.item_service_management.search_items")}}):e._e(),e._v(" "),e.items&&e.items.length?i("f7-list",{staticClass:"list-custom invoicing-list-items",attrs:{"no-hairlines":""}},e._l(e.items,function(t){return i("f7-list-item",{key:t.id,attrs:{title:t.name,link:"/invoicing/item-details/"+t.id+"/?title="+t.name}})})):e._e()],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"packages"===e.activeTab,expression:"activeTab === 'packages'"}],staticClass:"item-service-tab"},[e.packages&&e.packages.length?i("f7-searchbar",{attrs:{"search-container":".invoicing-list-packages",backdrop:!1,"disable-button":!1,placeholder:e.$t("invoicing.item_service_management.search_packages")}}):e._e(),e._v(" "),e.packages&&e.packages.length?i("f7-list",{staticClass:"list-custom invoicing-list-packages",attrs:{"no-hairlines":""}},e._l(e.packages,function(t){return i("f7-list-item",{key:t.id,attrs:{title:t.name,link:"/invoicing/package-details/"+t.id+"/?title="+t.name}})})):e._e()],1),e._v(" "),i("f7-popover",{staticClass:"add-item-service-package-popover"},[i("f7-list",[i("f7-list-button",{attrs:{"popover-close":"",link:"/invoicing/item-details/"}},[e._v(e._s(e.$t("invoicing.item_service_management.new_item")))]),e._v(" "),i("f7-list-button",{attrs:{"popover-close":"",link:"/invoicing/package-details/"}},[e._v(e._s(e.$t("invoicing.item_service_management.new_package")))])],1)],1)],1)},staticRenderFns:[],data:function data(){return{items:null,packages:null,activeTab:"items"}},mounted:function mounted(){var e=this;s.loadItems({},{cache:!1}).then(function(t){e.items=t,e.items=[{id:1,name:"Item 1"},{id:2,name:"Item 2"}]}),s.loadPackages({},{cache:!1}).then(function(t){e.packages=t,e.packages=[{id:1,name:"Package 1"},{id:2,name:"Package 2"}]})},computed:{},methods:{add:function add(){}}}},{path:"/invoicing/list-management/",component:{render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("f7-page",{staticClass:"invoicing-page",attrs:{name:"invoicing__list-management",id:"invoicing__list-management"}},[a("f7-navbar",[a("tommy-nav-back"),i._v(" "),a("f7-nav-title",[i._v(i._s(i.$t("invoicing.list_management.title","List Management")))]),i._v(" "),a("f7-nav-right",[i.showSave?a("f7-link",{attrs:{"icon-f7":"check"},on:{click:i.save}}):i._e()],1)],1),i._v(" "),i.lists?a("f7-list",{staticClass:"list-custom",attrs:{sortable:"",sortableEnabled:"",inset:""},on:{"sortable:sort":i.onSort}},i._l(i.orderedLists,function(e){return a("f7-list-item",{key:e.id,attrs:{checkbox:"",checked:e.data.active,title:e.name},on:{change:function(t){i.toggleListActive(e,t.target.checked)}}})})):i._e(),i._v(" "),a("f7-list",{staticClass:"list-custom margin-bottom",attrs:{inset:""}},[a("f7-list-item",{attrs:{link:"/invoicing/list-add/",title:i.$t("invoicing.list_management.create_list","Create New List")}})],1)],1)},staticRenderFns:[],data:function data(){return{saving:!1,showSave:!1,lists:null}},mounted:function mounted(){var e=this;s.loadLists({},{cache:!1}).then(function(t){e.lists=t})},computed:{orderedLists:function orderedLists(){return this.lists?this.lists.sort(function(t,e){return t.data.position-e.data.position}):null}},methods:{onSort:function onSort(t,e){void 0===e&&(e={});var i=e.from,a=e.to,n=this;n.saving||(n.showSave=!0,n.$nextTick(function(){var t;n.lists[i].data.position=a,(t=n.lists).splice.apply(t,[a,0].concat(n.lists.splice(i,1))),n.$forceUpdate()}))},toggleListActive:function toggleListActive(t,e){this.saving||(this.showSave=!0,t.data.active=e)},save:function save(){var t=this;t.showSave=!1;var i=[];t.lists.forEach(function(t,e){t.data.position=e,i.push(s.saveList(t))}),Promise.all(i).then(function(){t.$events.$emit("invoicing:reloadLists"),t.$f7router.back()})}}}},{path:"/invoicing/list-add/",component:{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("f7-page",{staticClass:"invoicing-page",attrs:{name:"invoicing__list-add",id:"invoicing__list-add"}},[i("f7-navbar",[i("tommy-nav-back"),e._v(" "),i("f7-nav-title",[e._v(e._s(e.$t("invoicing.list_add.title","Add List")))]),e._v(" "),i("f7-nav-right",[e.showSave?i("f7-link",{attrs:{"icon-f7":"check"},on:{click:e.save}}):e._e()],1)],1),e._v(" "),i("f7-list",{staticClass:"top-0"},[i("f7-list-item",[i("f7-input",{attrs:{type:"text",placeholder:e.$t("invoicing.list_add.name_placeholder","Name"),value:e.name},on:{input:function(t){e.name=t.target.value}}})],1)],1)],1)},staticRenderFns:[],data:function data(){return{saving:!1,name:""}},computed:{showSave:function showSave(){return this.name.trim().length}},methods:{save:function save(){var t=this;t.saving||(t.saving=!0,s.saveList({name:t.name}).then(function(){t.$events.$emit("invoicing:reloadLists"),t.$f7router.back("/invoicing/"+(s.actorId?"?actor_id="+s.actorId:""),{force:!0})}))}}}},{path:"/invoicing/list-edit/date-range/",component:{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("f7-page",{staticClass:"invoicing-page",attrs:{name:"invoicing__date-range-select",id:"invoicing__date-range-select"}},[i("f7-navbar",[i("tommy-nav-back"),e._v(" "),i("f7-nav-title",[e._v(e._s(e.$t("invoicing.common.date_range","Date Range")))]),e._v(" "),i("f7-nav-right",[e.showSave?i("f7-link",{attrs:{"icon-f7":"check"},on:{click:e.save}}):e._e()],1)],1),e._v(" "),i("f7-list",[i("f7-list-item",{attrs:{radio:"",value:"",checked:!(e.isCustomRange||""!==e.range&&e.range),title:e.$t("invoicing.date_range.none","None")},on:{change:function(t){e.setPlainRange("")}}}),e._v(" "),i("f7-list-item",{attrs:{radio:"",value:"today",checked:!e.isCustomRange&&"today"===e.range,title:e.$t("invoicing.date_range.today","Today")},on:{change:function(t){e.setPlainRange("today")}}}),e._v(" "),i("f7-list-item",{attrs:{radio:"",value:"week",checked:!e.isCustomRange&&"week"===e.range,title:e.$t("invoicing.date_range.week","This Week")},on:{change:function(t){e.setPlainRange("week")}}}),e._v(" "),i("f7-list-item",{attrs:{radio:"",value:"month",checked:!e.isCustomRange&&"month"===e.range,title:e.$t("invoicing.date_range.month","This Month")},on:{change:function(t){e.setPlainRange("month")}}})],1),e._v(" "),i("f7-list",{staticClass:"top-10 list-custom"},[i("f7-list-item",{attrs:{title:e.$t("invoicing.common.choose_range","Choose Range")}},[i("f7-toggle",{attrs:{slot:"after",checked:e.isCustomRange},on:{change:function(t){e.toggleCustomRange(t.target.checked)}},slot:"after"})],1),e._v(" "),i("f7-list-item",{directives:[{name:"show",rawName:"v-show",value:e.isCustomRange,expression:"isCustomRange"}]},[i("f7-label",[e._v(e._s(e.$t("invoicing.common.start_date","Start Date")))]),e._v(" "),i("f7-input",{ref:"rangeStart",attrs:{type:"text"}})],1),e._v(" "),i("f7-list-item",{directives:[{name:"show",rawName:"v-show",value:e.isCustomRange,expression:"isCustomRange"}]},[i("f7-label",[e._v(e._s(e.$t("invoicing.common.end_date","End Date")))]),e._v(" "),i("f7-input",{ref:"rangeEnd",attrs:{type:"text"}})],1)],1)],1)},staticRenderFns:[],props:{list:Object},data:function data(){var t=this.list.data.date_range;return{showSave:!1,dateFrom:Array.isArray(t)&&t[0]?t:(new Date).getTime(),dateTo:Array.isArray(t)&&t[1]?t:(new Date).getTime(),range:t}},computed:{isCustomRange:function isCustomRange(){var t=this.range;return Array.isArray(t)||!(!t||"string"==typeof t)}},mounted:function mounted(){var i=this,a=!1,n=!1;i.calendarFrom=i.$f7.calendar.create({inputEl:i.$$(i.$refs.rangeStart.$el).find("input"),closeOnSelect:!0,value:[i.dateFrom],on:{change:function change(t,e){a&&(i.showSave=!0),a=!0,i.dateFrom=new Date(e[0]).getTime(),Array.isArray(i.range)&&i.range[0]&&(i.range[0]=i.dateFrom),i.dateFrom>i.dateTo&&i.calendarTo.setValue([i.dateFrom])}}}),i.calendarTo=i.$f7.calendar.create({inputEl:i.$$(i.$refs.rangeEnd.$el).find("input"),closeOnSelect:!0,value:[i.dateTo],on:{change:function change(t,e){n&&(i.showSave=!0),n=!0,i.dateTo=new Date(e[0]).getTime(),Array.isArray(i.range)&&i.range[1]&&(i.range[1]=i.dateTo),i.dateTo<i.dateFrom&&i.calendarFrom.setValue([i.dateTo])}}})},methods:{setPlainRange:function setPlainRange(t){this.range=t,this.showSave=!0},toggleCustomRange:function toggleCustomRange(t){var e=this;e.showSave=!0,e.range=t?[e.dateFrom,e.dateTo]:""},save:function save(){var t=this;if(!t.saving){t.saving=!0,t.showSave=!1;var e=Object.assign({},t.list);e.data.date_range=t.range,s.saveList(e).then(function(){t.$events.$emit("invoicing:setListDateRange",t.list.id,t.range),t.$f7router.back()})}}}}},{path:"/invoicing/list-edit/:listId/",component:i},{path:"/invoicing/tag-select/",component:{render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("f7-page",{staticClass:"invoicing-page"},[a("f7-navbar",[a("tommy-nav-back"),i._v(" "),a("f7-nav-title",[i._v(i._s(i.pageTitle))]),i._v(" "),a("f7-subnavbar",{attrs:{inner:!1}},[a("f7-searchbar",{attrs:{"search-container":"#list-edit-tag-select","search-in":".item-title"}})],1)],1),i._v(" "),a("f7-list",{staticClass:"no-margin no-hairlines tasks-tag-select-tags-list",attrs:{id:"list-edit-tag-select"}},i._l(i.teamTags,function(e,t){return a("f7-list-item",{key:t,attrs:{checkbox:"",checked:i.isTagSelected(e),title:e.name},on:{change:function(t){i.toggleTag(e,t.target.checked)}}},["members"===e.context?a("span",{staticClass:"tag-select-list-avatar",style:"background-image: url("+(e.icon||"")+")",attrs:{slot:"media"},slot:"media"}):a("span",{staticClass:"tag-select-list-icon",attrs:{slot:"media"},slot:"media"},[a("img",{attrs:{src:i.contextIconSrc(e),srcset:i.contextIconSrcset(e)}})])])}))],1)},staticRenderFns:[],props:{listId:[String,Number],pageTitle:String,filters:Array,teamTags:Array,onChange:Function},methods:{isTagSelected:function isTagSelected(e){return 0<this.filters.filter(function(t){return t.name===e.name&&t.id===e.id&&t.type===e.type}).length},contextIconSrc:function contextIconSrc(t){return this.$addonAssetsUrl+"icons/"+t.context.slice(0,-1)+".png"},contextIconSrcset:function contextIconSrcset(t){var e=this.$addonAssetsUrl;return e+"icons/"+t.context.slice(0,-1)+"@2x.png 2x,"+e+"icons/"+t.context.slice(0,-1)+"@3x.png 3x"},toggleTag:function toggleTag(t,e){this.onChange&&this.onChange(t,e)}}}},{path:"/invoicing/item-details/:id?/",component:{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("f7-page",{staticClass:"invoicing-page",attrs:{id:"invoicing__item-details","data-name":"invoicing__item-details"}},[i("f7-navbar",[i("tommy-nav-back"),e._v(" "),i("f7-nav-title",[e._v(e._s(e.pageTitle))]),e._v(" "),i("f7-nav-right",[e.showSave?i("f7-link",{attrs:{"icon-f7":"check"},on:{click:e.save}}):e._e()],1)],1),e._v(" "),e.item?i("f7-list",{staticClass:"list-custom"},[i("f7-list-input",{attrs:{label:e.$t("invoicing.item.name_label","Name"),placeholder:e.$t("invoicing.item.name_placeholder","Enter item/service name"),type:"text",value:e.item.name},on:{input:function(t){e.item.name=t.target.value,e.enableSave()}}}),e._v(" "),i("f7-list-item",{attrs:{title:e.$t("invoicing.item.enabled_label","Enabled")}},[i("f7-toggle",{attrs:{checked:e.item.active},on:{change:function(t){e.item.active=t.target.checked,e.enableSave()}}})],1),e._v(" "),i("f7-list-item",{attrs:{title:e.$t("invoicing.item.photos_label","Photos"),after:e.item.photos&&e.item.photos.length||"Not set",link:"#"}}),e._v(" "),i("f7-list-item",{attrs:{divider:"",title:e.$t("invoicing.item.description_label","Description")}}),e._v(" "),i("f7-list-input",{attrs:{placeholder:e.$t("invoicing.item.description_placeholder","Enter item/service description"),type:"textarea",resizable:"",value:e.item.description},on:{input:function(t){e.item.description=t.target.value,e.enableSave()}}}),e._v(" "),i("f7-list-item",{attrs:{divider:"",title:e.$t("invoicing.item.packages_label","Packages")}}),e._v(" "),e.item.packages&&e.item.packages.length?e._e():i("f7-list-item",{attrs:{title:e.$t("invoicing.item.packages_no_packages","No associated packages found")}}),e._v(" "),e._l(e.item.packages,function(t){return e.item.packages&&e.item.packages.length?i("f7-list-item",{key:t.id,attrs:{title:t.name,link:"/invoicing/package-details/"+t.id+"/?title="+t.name}}):e._e()}),e._v(" "),i("tag-select",{attrs:{slot:"after-list",data:{title:e.$t("invoicing.item.tags_label"),placeholder:e.$t("invoicing.common.search_members_tags","Search Members, Tags"),pageTitle:e.$t("invoicing.common.search_members_tags","Search Members, Tags"),filters:e.item.tags}},on:{tagAdd:e.addItemTag,tagRemove:e.removeItemTag},slot:"after-list"})],2):e._e(),e._v(" "),e.item?i("f7-list",{staticClass:"list-custom margin-top"},[i("f7-list-input",{attrs:{label:e.$t("invoicing.item.price_label","Price"),placeholder:e.$t("invoicing.item.price_placeholder","Enter item/service price"),type:"text",value:"¥"+e.item.price},on:{input:function(t){e.setPrice(t.target.value)}}}),e._v(" "),i("f7-list-input",{attrs:{label:e.$t("invoicing.item.sku_label","SKU"),placeholder:e.$t("invoicing.item.sku_placeholder","Enter item/service SKU"),type:"text",value:""+e.item.sku},on:{input:function(t){e.item.sku=t.target.value,e.enableSave()}}}),e._v(" "),i("f7-list-input",{attrs:{label:e.$t("invoicing.item.barcode_label","Barcode ID"),placeholder:e.$t("invoicing.item.barcode_placeholder","Enter item/service barcode ID"),type:"text",value:""+e.item.barcode},on:{input:function(t){e.item.barcode=t.target.value,e.enableSave()}}})],1):e._e()],1)},staticRenderFns:[],components:{tagSelect:e},props:{id:[String,Number]},data:function data(){return{pageTitle:this.$f7route.query.title||this.$t("invoicing.item.new_title"),item:null,showSave:!1}},mounted:function mounted(){var e=this;e.id?s.loadItem(e.id).then(function(t){e.item=t,e.item={name:"",description:"",active:!1,photos:[],price:0,sku:"",barcode:"",tags:[]}}):e.item={name:"",description:"",active:!1,photos:[],price:0,sku:"",barcode:"",tags:[]}},methods:{setPrice:function setPrice(t){var e=t.replace(/¥ /g,"").replace(/,/g,".").trim();this.item.price=e,this.enableSave()},enableSave:function enableSave(){this.showSave=!0},addItemTag:function addItemTag(t){this.item.tags.push(t),this.enableSave()},removeItemTag:function removeItemTag(t){this.item.tags.splice(this.item.tags.indexOf(t),1),this.enableSave()},save:function save(){}}}},{path:"/invoicing/package-details/:id?/",component:{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("f7-page",{staticClass:"invoicing-page",attrs:{id:"invoicing__package-details","data-name":"invoicing__package-details"}},[i("f7-navbar",[i("tommy-nav-back"),e._v(" "),i("f7-nav-title",[e._v(e._s(e.pageTitle))]),e._v(" "),i("f7-nav-right",[e.showSave?i("f7-link",{attrs:{"icon-f7":"check"},on:{click:e.save}}):e._e()],1)],1),e._v(" "),e.pkg?i("f7-list",{staticClass:"list-custom"},[i("f7-list-input",{attrs:{label:e.$t("invoicing.package.name_label","Name"),placeholder:e.$t("invoicing.package.name_placeholder","Enter package/service name"),type:"text",value:e.pkg.name},on:{input:function(t){e.pkg.name=t.target.value,e.enableSave()}}}),e._v(" "),i("f7-list-item",{attrs:{title:e.$t("invoicing.package.enabled_label","Enabled")}},[i("f7-toggle",{attrs:{checked:e.pkg.active},on:{change:function(t){e.pkg.active=t.target.checked,e.enableSave()}}})],1),e._v(" "),i("f7-list-item",{attrs:{title:e.$t("invoicing.package.photos_label","Photos"),after:e.pkg.photos&&e.pkg.photos.length||"Not set",link:"#"}}),e._v(" "),i("f7-list-item",{attrs:{divider:"",title:e.$t("invoicing.package.description_label","Description")}}),e._v(" "),i("f7-list-input",{attrs:{placeholder:e.$t("invoicing.package.description_placeholder","Enter package/service description"),type:"textarea",resizable:"",value:e.pkg.description},on:{input:function(t){e.pkg.description=t.target.value,e.enableSave()}}}),e._v(" "),i("tag-select",{attrs:{slot:"after-list",data:{title:e.$t("invoicing.package.tags_label"),placeholder:e.$t("invoicing.common.search_members_tags","Search Members, Tags"),pageTitle:e.$t("invoicing.common.search_members_tags","Search Members, Tags"),filters:e.pkg.tags}},on:{tagAdd:e.addPackageTag,tagRemove:e.removePackageTag},slot:"after-list"})],1):e._e(),e._v(" "),e.pkg?i("f7-list",{staticClass:"list-custom margin-top"},[i("f7-list-input",{attrs:{label:e.$t("invoicing.package.price_label","Price"),placeholder:e.$t("invoicing.package.price_placeholder","Enter package/service price"),type:"text",value:"¥"+e.pkg.price},on:{input:function(t){e.setPrice(t.target.value)}}}),e._v(" "),i("f7-list-input",{attrs:{label:e.$t("invoicing.package.sku_label","SKU"),placeholder:e.$t("invoicing.package.sku_placeholder","Enter package/service SKU"),type:"text",value:""+e.pkg.sku},on:{input:function(t){e.pkg.sku=t.target.value,e.enableSave()}}}),e._v(" "),i("f7-list-input",{attrs:{label:e.$t("invoicing.package.barcode_label","Barcode ID"),placeholder:e.$t("invoicing.package.barcode_placeholder","Enter package/service barcode ID"),type:"text",value:""+e.pkg.barcode},on:{input:function(t){e.pkg.barcode=t.target.value,e.enableSave()}}})],1):e._e()],1)},staticRenderFns:[],components:{tagSelect:e},props:{id:[String,Number]},data:function data(){return{pageTitle:this.$f7route.query.title||this.$t("invoicing.package.new_title"),pkg:null,showSave:!1}},mounted:function mounted(){var e=this;e.id?s.loadPackage(e.id).then(function(t){e.pkg=t,e.pkg={name:"",description:"",active:!1,photos:[],price:0,sku:"",barcode:"",tags:[]}}):e.pkg={name:"",description:"",active:!1,photos:[],price:0,sku:"",barcode:"",tags:[]}},methods:{setPrice:function setPrice(t){var e=t.replace(/¥ /g,"").replace(/,/g,".").trim();this.pkg.price=e,this.enableSave()},enableSave:function enableSave(){this.showSave=!0},addPackageTag:function addPackageTag(t){this.pkg.tags.push(t),this.enableSave()},removePackageTag:function removePackageTag(t){this.pkg.tags.splice(this.pkg.tags.indexOf(t),1),this.enableSave()},save:function save(){}}}}]}();