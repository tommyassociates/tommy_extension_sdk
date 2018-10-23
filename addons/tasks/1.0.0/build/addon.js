var addon=function(){var n=window.tommy,i=n.api,l={listsLoaded:!1,tasksLoaded:!1,actor:void 0,actorId:void 0,cache:{},initCache:function initCache(){l.cache={lists:[],tasks:[]}},addTask:function addTask(t){IndexController.invalidateLists=!0,l.cache.tasks[t.id]=t,console.log("task added",t)},addTasks:function addTasks(t){if(l.tasksLoaded=!0,t&&t.length)for(var s=0;s<t.length;s+=1)Array.isArray(t[s])?l.addTasks(t[s]):l.addTask(t[s])},getListTasks:function getListTasks(t){var s=l.cache.lists[t],e=[];for(var a in l.cache.tasks){var i=l.cache.tasks[a];if(s.filters&&i.filters){var n=i.filters.map(function(t){return t.name}),r=s.filters.map(function(t){return t.name}),d=!!n.filter(function(t){return-1!==r.indexOf(t)}).length||!n.length&&!r.length;console.log("task matches list tags",i.name,i.filters,s.name,s.filters,d),d&&s.data.statuses&&(d=-1!==s.data.statuses.indexOf(i.status),console.log("task matches list statuses",i.name,i.status,s.name,s.statuses,d)),d&&e.push(i)}}return e},loadListTasks:function loadListTasks(t,s){if(t.data&&t.filters)for(var e=0;e<t.filters.length;e+=1)s.indexOf(t.filters[e].name)<0&&s.push(t.filters[e].name);var a={addon:"tasks",kind:"Task",tags:s,with_filters:!0,with_permission_to:!0,actor_id:l.actorId};return t.data.date_range&&(a.date_range=t.data.date_range),t.data.statuses&&(a.status=t.data.statuses),i.getFragments(a)},loadTasks:function loadTasks(){console.log("load tasks");var t=[];for(var s in l.cache.lists){var e=l.cache.lists[s],a=l.loadListTasks(e);a&&t.push(a)}return Promise.all(t).then(l.addTasks)},addTaskActivity:function addTaskActivity(t,s,e){var a=n.root.user,i={type:s,text:e,time:new Date,user_id:a.id,user_name:a.first_name};return t.data||(t.data={}),t.data.activity||(t.data.activity=[]),t.data.activity.unshift(i),i},getTask:function getTask(t){return i.getFragment(t)},saveTask:function saveTask(t){if(t.addon="tasks",t.kind="Task",t.with_filters=!0,t.with_permission_to=!0,t.id||l.addTaskActivity(t,"status",n.i18n.t("task.created_a_task")),t.status||(t.status=l.STATUSES[0]),t.start_at||(t.start_at=(new Date).getTime()),!t.id){t.with_permissions=["task_create_access","task_edit_access"];var s=l.actor;s&&(t.filters||(t.filters=[]),t.filters.push({context:"members",name:s.first_name+" "+s.last_name,user_id:s.user_id}))}var e=Object.assign({},t,{data:JSON.stringify(t.data)});return t.id?i.updateFragment(t.id,e):i.createFragment(e)},addList:function addList(t){l.cache.lists[t.id]=t,console.log("added task list",t)},addLists:function addLists(t){if(l.listsLoaded=!0,t&&t.length)for(var s=0;s<t.length;s+=1)l.addList(t[s])},loadLists:function loadLists(t){return void 0===t&&(t={}),i.getFragments(Object.assign({addon:"tasks",kind:"TaskList",with_filters:!0,with_permission_to:!0,actor_id:l.actorId,user_id:l.actorId},t))},deleteList:function deleteList(t){return IndexController.invalidateLists=!0,delete l.cache.lists[t],console.log("delete list",t),i.deleteFragment(t)},saveList:function saveList(t){t.addon="tasks",t.kind="TaskList",t.with_filters=!0,t.with_permission_to=!0,t.data||(t.data={}),void 0===t.data.position&&(t.data.position=0),void 0===t.data.active&&(t.data.active=!0),void 0===t.data.show_fast_add&&(t.data.show_fast_add=!0),t.id||(t.with_permissions=["task_list_read_access","task_list_edit_access"]);var s=Object.assign({},t,{data:JSON.stringify(t.data),filters:JSON.stringify(t.filters)});return t.id?i.updateFragment(t.id,s):i.createFragment(s)},currentUserTag:function currentUserTag(){return{context:"members",name:window.tommy.config.getCurrentUserName(),user_id:window.tommy.config.getCurrentUserId()}},createDefaultList:function createDefaultList(t){var s={name:n.i18n.t("tasks.index.default-list-name"),data:{default:!0},filters:[{context:"members",name:t.first_name+" "+t.last_name,user_id:t.id}]};return l.saveList(s)},hasDefaultList:function hasDefaultList(){return l.cache.lists&&0<Object.values(l.cache.lists).filter(function(t){return t.data.default}).length},initPermissionSelect:function initPermissionSelect(s,t,e){console.log("init permission selects",t,e);var a={resource_id:e,with_filters:!0};i.getInstalledAddonPermission("tasks",t,a).then(function(t){console.log("installed addon permission",t),t.resource_id=e,window.tommy.tplManager.appendInline("tasks__tagSelectTemplate",t,s.container),l.initTagSelect(s,t)})},initTagSelect:function initTagSelect(t,s){var e=$$(t.container).find('.tag-select[data-permission-name="'+s.name+'"]');console.log("init tag select",s,e.dataset()),window.tommy.tagSelect.initWidget(e,s.filters,function(t){console.log("save permission tags",s,t),i.updateInstalledAddonPermission("tasks",s.name,{resource_id:s.resource_id,with_filters:!0,filters:JSON.stringify(t)})})},STATUSES:["Unassigned","Assigned","Processing","Completed","Closed","Archive Task","Cancel"],translateStatus:function translateStatus(t){if(t)return window.tommy.i18n.t("status."+window.tommy.util.underscore(t),{defaultValue:t})},untranslateStatus:function untranslateStatus(t){for(var s=0;s<l.STATUSES.length;s+=1)if(l.translateStatus(l.STATUSES[s])===t)return l.STATUSES[s]},translatedStatuses:function translatedStatuses(){for(var t=[],s=0;s<l.STATUSES.length;s+=1)t.push(l.translateStatus(l.STATUSES[s]));return t}};function humanTime(t){var s=window.tommy.moment,e=s.utc(t).toDate();if(s(e).isValid()){var a=s().diff(s(e),"days");if(1===a)return"Yesterday "+s(e).format("h:mm A");if(0===a)return"Today "+s(e).format("h:mm A");if(-1===a)return"Yesterday "+s(e).format("h:mm A");if(1<=a&&a<=8||-8<=a&&a<=-1)return s(e).format("ddd h:mm A");if(365<=a||a<=-365)return s(e).format("MMM D, YYYY h:mm A");if(8<=a||a<=-8)return s(e).format("MMM D h:mm A")}return"None"}function taskStatus(t){var s=t.toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/(^_|_$)/g,"");return this.$t("tasks.status."+s,t)}return[{path:"/tasks/",component:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-page",{staticClass:"tasks-page",attrs:{id:"tasks__index",name:"tasks__index"}},[a("f7-navbar",[a("tommy-nav-menu"),e._v(" "),a("f7-nav-title",[e._v(e._s(e.pageTitle))]),e._v(" "),a("f7-nav-right",[a("f7-link",{attrs:{href:"/tasks/board-settings/","icon-f7":"gear"}}),e._v(" "),a("f7-link",{attrs:{href:"/tasks/task-add/","icon-f7":"add"}})],1)],1),e._v(" "),e.orderedLists&&e.orderedLists.length?a("f7-swiper",{attrs:{params:{slidesPerView:"auto",breakpointsInverse:!0,centeredSlides:!1,breakpoints:{768:{centeredSlides:!0}}}}},e._l(e.orderedLists,function(s){return a("f7-swiper-slide",{key:s.id},[a("div",{staticClass:"tasks-list",class:{hasScroll:e.listWithScroll[s.id]},attrs:{"data-id":s.id}},[a("div",{staticClass:"tasks-list-header"},[a("div",[e._v(e._s(s.name))]),e._v(" "),e.canEditList(s)?a("div",[a("a",{attrs:{href:"/tasks/list-edit/"+s.id+"/"}},[a("img",{attrs:{src:e.$addonAssetsUrl+"slice6.png",srcset:e.$addonAssetsUrl+"slice6@2x.png 2x, "+e.$addonAssetsUrl+"slice6@3x.png 3x"}})])]):e._e()]),e._v(" "),a("div",{staticClass:"tasks-list-content"},[s.tasks&&s.tasks.length?e._l(s.tasks,function(t,s){return a("a",{key:s,staticClass:"card task-card",class:e.isTaskDone(t)?"color-gray done":"",attrs:{href:"/tasks/task/"+t.id+"/"}},[a("div",{staticClass:"card-content card-content-padding"},[a("p",[e._v(e._s(t.name))])]),e._v(" "),a("div",{staticClass:"card-footer no-border color-gray"},[t.data.deadline?a("span",{staticClass:"badge",class:e.isPastDate(t.data.deadline)?"bg-red":"bg-blue"},[e._v(e._s(e.humanTime(t.data.deadline)))]):t.data.checklist?a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.$addonAssetsUrl+"slice1.png",srcset:e.$addonAssetsUrl+"slice1@2x.png 2x,"+e.$addonAssetsUrl+"slice1@3x.png 3x"}}),e._v(" "+e._s(e.checklistNumCompleted(t.data.checklist))+" ")]):a("span",{staticClass:"icon"},[a("img",{attrs:{src:e.$addonAssetsUrl+"slice2.png",srcset:e.$addonAssetsUrl+"slice2@2x.png 2x,"+e.$addonAssetsUrl+"slice2@3x.png 3x"}})]),e._v(" "),a("span",[e._v(" "+e._s(t.status?e.taskStatus(t.status):e.$t("tasks.index.unassigned","Unassigned"))+" ")])])])}):e._e()],2),e._v(" "),s.data.show_fast_add?a("div",{staticClass:"tasks-list-footer"},[e.fastAddEnabled[s.id]?a("div",{staticClass:"in"},[a("form",{staticClass:"card-form",on:{submit:function(t){e.fastAddTask(t,s)}}},[a("input",{attrs:{autofocus:"",type:"text"},domProps:{value:e.fastAddValue[s.id]},on:{input:function(t){e.fastAddValue[s.id]=t.target.value}}}),e._v(" "),a("div",{staticClass:"buttons"},[a("a",{staticClass:"button cancel",attrs:{href:"#"},on:{click:function(t){e.$set(e.fastAddEnabled,s.id,!1)}}},[e._v(e._s(e.$t("tasks.index.cancel","Cancel")))]),e._v(" "),a("button",{staticClass:"button button-fill color-red save",attrs:{type:"submit"}},[e._v(e._s(e.$t("tasks.index.done","Done")))])])])]):a("div",{staticClass:"in"},[a("div",{staticClass:"card-add",on:{click:function(t){e.$set(e.fastAddEnabled,s.id,!0)}}},[e._v(e._s(e.$t("tasks.index.add-task","Add task")))])])]):e._e()])])})):e._e()],1)},staticRenderFns:[],data:function data(){return{lists:null,actorId:this.$f7route.query.actor_id,fastAddEnabled:{},fastAddValue:{},listWithScroll:{}}},created:function created(){this.actorId?(l.actorId=parseInt(this.actorId,10),l.actor=this.actor):(delete l.actorId,delete l.actor)},computed:{actor:function actor(){var s=this;return s.actorId?s.$root.teamMembers.filter(function(t){return t.user_id===parseInt(s.actorId,10)})[0]:null},pageTitle:function pageTitle(){var s=this;if(!s.actorId)return s.$t("tasks.index.title","Tasks");var t=s.$root.teamMembers.filter(function(t){return t.user_id===parseInt(s.actorId,10)})[0].first_name;return s.$t("tasks.index.title_user",{user:t})},orderedLists:function orderedLists(){return this.lists?this.lists.sort(function(t,s){return t.data.position-s.data.position}).filter(function(t){return t.data.active}):null}},methods:{humanTime:humanTime,listHasScroll:function listHasScroll(t){if(!t.tasks||0===t.tasks.length)return!1;var s=this.$$('.tasks-list[data-id="'+t.id+'"] .tasks-list-content')[0];return!!s&&s.scrollHeight>s.offsetHeight},loadListTasks:function loadListTasks(s){var e=this,t=e.actor||e.$root.user;l.loadListTasks(s,[t.first_name+" "+t.last_name]).then(function(t){s.tasks=t,e.$nextTick(function(){e.listHasScroll(s)?e.$set(e.listWithScroll,s.id,!0):e.$set(e.listWithScroll,s.id,!1)})})},loadLists:function loadLists(){var s=this;l.loadLists().then(function(t){t.forEach(function(t){t.tasks=[]}),s.lists=t,0<s.lists.filter(function(t){return t.data.default}).length?s.lists.forEach(function(t){s.loadListTasks(t)}):l.createDefaultList(s.$root.user).then(function(){s.loadLists()})})},fastAddTask:function fastAddTask(t,s){var e=this;t.preventDefault();var a=e.fastAddValue[s.id],i={name:a,parent_id:s.id,filters:s.filters};return a&&a.trim()&&(e.fastAddValue[s.id]="",e.fastAddEnabled[s.id]=!1,l.saveTask(i).then(function(t){e.loadListTasks(s)})),!1},isPastDate:function isPastDate(t){return new Date(t)<new Date},checklistNumCompleted:function checklistNumCompleted(t){var s="";t&&t.items&&(s+=t.items.filter(function(t){return t.complete}).length,s+="/",s+=t.items.length);return s},taskStatus:function taskStatus$1(t){taskStatus.call(this,t)},isTaskDone:function isTaskDone(t){return 0<="Completed,Closed,Archive Task,Cancel".split(",").indexOf(t.data.status)},canEditList:function canEditList(t){var s=this.$root.account,e="Team"===s.type||"TeamMember"===s.type&&0<=s.roles.indexOf("Team Manager");return!(t.data.default&&!e)&&-1!==t.permission_to.indexOf("update")},reloadListsTasks:function reloadListsTasks(){var s=this;s.lists&&s.lists.forEach(function(t){s.loadListTasks(t)})}},beforeDestroy:function beforeDestroy(){this.$events.$off("tasks:reloadListsTasks",this.reloadListsTasks)},mounted:function mounted(){this.loadLists(),this.$events.$on("tasks:reloadListsTasks",this.reloadListsTasks)}}},{path:"/tasks/task/:taskId/",popup:{component:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-popup",{attrs:{"tablet-fullscreen":""}},[a("f7-view",{attrs:{init:!1}},[a("f7-page",{staticClass:"tasks-page",attrs:{id:"tasks__task",name:"tasks__task"}},[a("f7-navbar",{staticClass:"text-color-white",attrs:{noBorder:""}},[a("tommy-nav-back"),e._v(" "),a("f7-nav-title",[e._v(e._s(e.taskName))]),e._v(" "),a("f7-nav-right",[a("f7-link",{attrs:{"popover-open":".task-menu-popover","icon-f7":"add"}}),e._v(" "),e.showSaveButton&&!e.saving?a("f7-link",{attrs:{"icon-f7":"check"},on:{click:e.save}}):e._e()],1)],1),e._v(" "),a("f7-popover",{staticClass:"task-menu-popover"},[a("f7-list",[a("f7-list-button",{attrs:{"popover-close":""},on:{click:e.addChecklist}},[e._v(e._s(e.$t("tasks.task.checklist","Checklist")))]),e._v(" "),a("f7-list-button",{attrs:{"popover-close":""},on:{click:e.addDeadline}},[e._v(e._s(e.$t("tasks.task.deadline","Deadline")))])],1)],1),e._v(" "),a("f7-messagebar",{attrs:{placeholder:e.$t("tasks.task.enter_comment","Enter comment"),value:e.comment},on:{input:function(t){e.comment=t.target.value}}},[a("f7-link",{class:{disabled:0===e.comment.trim().length},attrs:{slot:"send-link"},on:{click:e.addComment},slot:"send-link"},[e._v(e._s(e.$t("tasks.task.send","Send")))])],1),e._v(" "),e.task?[a("f7-block",{staticClass:"subheader"},[a("h1",[a("textarea",{staticClass:"unstyled edit-task-name resizable",domProps:{value:e.task.name},on:{input:function(t){e.task.name=t.target.value},change:e.saveTaskName}})]),e._v(" "),a("input",{staticClass:"unstyled task-status-picker",attrs:{type:"text",readonly:"readonly"},domProps:{value:"Unassigned"===e.task.status?e.$t("tasks.task.waiting_for_assignments","Waiting for assignments"):e.taskStatus(e.status)}})]),e._v(" "),a("div",{staticClass:"tag-select",attrs:{"data-searchbar":"true","data-open-in":"picker"}},[a("select",{attrs:{multiple:"multiple"}}),e._v(" "),a("div",{attrs:{"data-template":"tasks__taskParticipantsTemplate"}})]),e._v(" "),a("f7-list",{staticClass:"list-custom details bottom-0",attrs:{"media-list":""}},[a("f7-list-item",[a("img",{attrs:{slot:"media",src:e.$addonAssetsUrl+"slice19.png",srcset:e.$addonAssetsUrl+"slice19@2x.png 2x, "+e.$addonAssetsUrl+"slice19.png 3x"},slot:"media"}),e._v(" "),a("f7-input",{staticClass:"inline-edit",attrs:{type:"textarea",placeholder:e.$t("tasks.task.edit_description","Edit the description..."),clearButton:"",value:e.task.data.description,resizable:""},on:{input:function(t){e.task.data.description=t.target.value},change:e.saveTaskDescription}})],1)],1),e._v(" "),a("f7-list",{directives:[{name:"show",rawName:"v-show",value:e.showDeadline||e.task.end_at,expression:"showDeadline || task.end_at"}],staticClass:"list-custom details top-0 bottom-0",attrs:{"media-list":""}},[a("f7-list-item",[a("img",{attrs:{slot:"media",src:e.$addonAssetsUrl+"slice13.png",srcset:e.$addonAssetsUrl+"slice13@2x.png 2x,"+e.$addonAssetsUrl+"slice13.png 3x"},slot:"media"}),e._v(" "),a("div",{staticClass:"item-input-wrap",attrs:{slot:"inner"},slot:"inner"},[a("input",{ref:"deadlineInput",staticClass:"unstyled edit-task-deadline",attrs:{type:"text",placeholder:e.$t("tasks.task.edit_deadline","Edit deadline...")}})]),e._v(" "),a("a",{staticClass:"icon-only remove-deadline",attrs:{slot:"inner",href:"#"},on:{click:e.removeDeadline},slot:"inner"},[a("img",{attrs:{src:e.$addonAssetsUrl+"slice12.png",srcset:e.$addonAssetsUrl+"slice12@2x.png 2x,"+e.$addonAssetsUrl+"slice12.png 3x"}})])])],1),e._v(" "),e.showChecklist||e.task.data.checklist&&e.task.data.checklist.items?a("f7-list",{staticClass:"list-custom checklist top-0",attrs:{"media-list":""}},[a("li",{staticClass:"item-content"},[a("div",{staticClass:"item-media"},[a("img",{attrs:{src:e.$addonAssetsUrl+"slice17.png",srcset:e.$addonAssetsUrl+"slice17@2x.png 2x,"+e.$addonAssetsUrl+"slice17.png 3x"}})]),e._v(" "),a("div",{staticClass:"item-inner"},[a("div",[e._v(e._s(e.$t("tasks.task.checklist","Checklist")))]),e._v(" "),a("a",{staticClass:"icon-only remove-checklist",attrs:{href:"#"},on:{click:e.removeChecklist}},[a("img",{attrs:{src:e.$addonAssetsUrl+"slice12.png",srcset:e.$addonAssetsUrl+"slice12@2x.png 2x,"+e.$addonAssetsUrl+"slice12.png 3x"}})])])]),e._v(" "),e._l(e.task.data.checklist.items,function(s,t){return a("li",{key:t,staticClass:"item-content",class:{checked:s.complete},on:{click:function(t){e.toggleChecklistItem(s)}}},[a("div",{staticClass:"item-media"},[s.complete?a("img",{attrs:{src:e.$addonAssetsUrl+"slice15.png",srcset:e.$addonAssetsUrl+"slice15@2x.png 2x,"+e.$addonAssetsUrl+"slice15.png 3x"}}):a("img",{attrs:{src:e.$addonAssetsUrl+"slice14.png",srcset:e.$addonAssetsUrl+"slice14@2x.png 2x,"+e.$addonAssetsUrl+"slice14.png 3x"}})]),e._v(" "),a("div",{staticClass:"item-inner"},[e._v(" "+e._s(s.text)+" "),a("a",{staticClass:"icon-only remove-checklist-item",attrs:{href:"#"},on:{click:function(t){e.removeChecklistItem(s)}}},[a("img",{attrs:{src:e.$addonAssetsUrl+"slice12.png",srcset:e.$addonAssetsUrl+"slice12@2x.png 2x,"+e.$addonAssetsUrl+"slice12.png 3x"}})])])])}),e._v(" "),a("li",{staticClass:"item-content"},[a("div",{staticClass:"item-media"},[a("img",{attrs:{src:e.$addonAssetsUrl+"slice16.png",srcset:e.$addonAssetsUrl+"slice16@2x.png 2x,"+e.$addonAssetsUrl+"slice16.png 3x"}})]),e._v(" "),a("div",{staticClass:"item-inner"},[a("input",{staticStyle:{height:"auto"},attrs:{type:"text",placeholder:e.$t("tasks.task.add_items","Add items")},on:{keypress:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.addChecklistItem(t.target)}}})])])],2):e._e(),e._v(" "),a("f7-list",{staticClass:"list-custom activity no-chevron",attrs:{"media-list":""}},[a("f7-list-item",{attrs:{divider:"",title:e.$t("tasks.task.activity","Activity")}}),e._v(" "),e._l(e.task.data.activity,function(t,s){return a("f7-list-item",{key:s,attrs:{after:e.humanTime(t.time),subtitle:"comment"===t.type?t.text:void 0,title:t.user_name,link:"comment"===t.type,"popover-open":"comment"===t.type?".task-popover":void 0}},["comment"===t.type?a("img",{attrs:{slot:"media",src:e.$addonAssetsUrl+"slice11.png",srcset:e.$addonAssetsUrl+"slice11@2x.png 2x, "+e.$addonAssetsUrl+"slice11.png 3x"},slot:"media"}):a("img",{attrs:{slot:"media",src:e.$addonAssetsUrl+"slice7.png",srcset:e.$addonAssetsUrl+"slice7@2x.png 2x, "+e.$addonAssetsUrl+"slice7.png 3x"},slot:"media"}),e._v(" "),"comment"!==t.type?a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.text))]):e._e()])})],2)]:e._e()],2)],1)],1)},staticRenderFns:[],props:{taskId:[Number,String]},data:function data(){return{id:parseInt(this.taskId,10),task:null,taskName:null,saving:!1,showSaveButton:!1,comment:"",showDeadline:!1,showChecklist:!1}},computed:{taskTitle:function taskTitle(){return""}},mounted:function mounted(){var s=this;l.getTask(s.id).then(function(t){s.taskName=t.name,t.data||(t.data={}),s.task=t,s.$nextTick(function(){s.createDatePicker()})})},methods:{humanTime:humanTime,taskStatus:function taskStatus$1(t){taskStatus.call(this,t)},saveTaskName:function saveTaskName(){var t=this;t.taskName!==t.task.name&&(t.taskName=t.task.name,t.saveTask())},saveTaskDescription:function saveTaskDescription(){this.saveTask()},addChecklist:function addChecklist(){this.showChecklist=!0;var t=this.task;t.data||(t.data={}),t.data.checklist||(t.data.checklist={}),t.data.checklist.items||(t.data.checklist.items=[])},removeChecklist:function removeChecklist(){this.showChecklist=!1,this.task.data.checklist={},this.saveTask()},addChecklistItem:function addChecklistItem(t){var s=this,e=s.task,a=t.value.trim();a&&(e.data||s.$set(s.task,"data",{}),e.data.checklist||s.$set(e.data,"checklist",{}),e.data.checklist.items||s.$set(e.data.checklist,"items",[]),e.data.checklist.items.push({complete:!1,text:a}),t.value="",t.blur(),s.saveTask(),s.$set(s,"task",s.task),s.$set(s.task.data.checklist,"items",e.data.checklist.items),s.$forceUpdate())},toggleChecklistItem:function toggleChecklistItem(t){t.complete=!t.complete,this.$set(this.task.data.checklist,"items",this.task.data.checklist.items),this.saveTask()},removeChecklistItem:function removeChecklistItem(t){var s=this;s.task.data.checklist.items.splice(s.task.data.checklist.items.indexOf(t),1),s.$set(s.task.data.checklist,"items",s.task.data.checklist.items),s.saveTask()},addDeadline:function addDeadline(){this.showDeadline=!0},removeDeadline:function removeDeadline(){var t=this;t.showDeadline=!1;var s=t.task;s.end_at&&(s.end_at=null,t.saveTask()),t.$refs.deadlineInput&&(t.$refs.deadlineInput.value="")},addComment:function addComment(){var t=this,s=t.comment;t.comment="";var e=t.$root.user,a={type:"comment",text:s,time:new Date,user_id:e.id,user_name:e.first_name},i=t.task;i.data||(i.data={}),i.data.activity||(i.data.activity=[]),i.data.activity.unshift(a),t.saveTask()},saveTask:function saveTask(){var t=this.task;l.saveTask(t)},save:function save(){this.saving||(this.saving=!0)},createDatePicker:function createDatePicker(){var t,s=this,e=s.task,a=e.end_at,i=!!a;"string"==typeof a&&(a=new Date(a)),a&&(t=[a.getMonth(),a.getDate(),a.getFullYear(),a.getHours(),a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes()]);s.$f7.picker.create({inputEl:s.$refs.deadlineInput,rotateEffect:!0,inputReadOnly:!0,convertToPopover:!1,updateValuesOnMomentum:!1,value:t||void 0,routableModals:!1,formatValue:function formatValue(t,s){var e=s[0]+" "+t[1]+", "+t[2]+" "+t[3]+":"+t[4],a=new Date(e);return!Number.isNaN(a.getTime())&&humanTime(this.currentDate=a)},cols:[{values:"0 1 2 3 4 5 6 7 8 9 10 11".split(" ").map(function(t){return parseInt(t,10)}),displayValues:["January","February","March","April","May","June","July","August","September","October","November","December"],textAlign:"left"},{values:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},{values:function(){for(var t=(new Date).getFullYear(),s=[],e=t;e<=t+10;e+=1)s.push(e);return s}()},{divider:!0,content:"  "},{values:function(){for(var t=[],s=0;s<=23;s+=1)t.push(s);return t}()},{divider:!0,content:":"},{values:function(){for(var t=[],s=0;s<=59;s+=1)t.push(s<10?"0"+s:s);return t}()}],on:{open:function open(){if(!i){i=!0;var t=new Date;this.setValue([t.getMonth(),t.getDate(),t.getFullYear(),t.getHours(),t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()])}},close:function close(){e.end_at=new Date(this.currentDate).toJSON(),s.saveTask()},change:function change(t,s){var e=new Date(t.value[2],1*t.value[0]+1,0).getDate();s[1]>e&&t.cols[1].setValue(e)}}})}}}}},{path:"/tasks/list-edit/:id/"},{path:"/tasks/task-add/",component:{render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("f7-page",{staticClass:"tasks-page",attrs:{id:"tasks__task-add",name:"tasks__task-add"}},[e("f7-navbar",[e("tommy-nav-back"),s._v(" "),e("f7-nav-title",[s._v(s._s(s.$t("tasks.task-add.title","Add Task")))]),s._v(" "),e("f7-nav-right",[s.name&&s.name.trim().length&&!s.saving?e("f7-link",{attrs:{"icon-f7":"check"},on:{click:s.save}}):s._e()],1)],1),s._v(" "),e("f7-list",[e("f7-list-item",[e("f7-input",{attrs:{type:"text",value:s.name,placeholder:s.$t("tasks.task-add.name","Name")},on:{input:function(t){s.name=t.target.value}}})],1)],1)],1)},staticRenderFns:[],data:function data(){return{name:"",saving:!1}},methods:{save:function save(){var t=this;if(!t.saving){t.saving=!0;var s=t.$root.user,e={name:t.name,filters:[{context:"members",name:s.first_name+" "+s.last_name,user_id:s.id}]};l.saveTask(e).then(function(){t.$events.$emit("tasks:reloadListsTasks"),t.$f7router.back()})}}}}}]}();