var addon=function(){var t=window.tommy.api,e=function getData(e){return t.getFragments({addon:"myprogress",kind:"Myprogress",with_filters:!0,with_permission_to:!0,actor_id:e,user_id:e,with_attachments:!0})},i=function saveData(e,s){return s.attachments&&s.attachments.length&&(s.attachments=s.attachments.filter(function(e){return"string"==typeof e})),s.id?(s.with_attachments=!0,t.updateFragment(s.id,s,{dataType:"json",contentType:"application/json",processData:!1})):t.createFragment({with_attachments:!0,addon:"myprogress",kind:"Myprogress",with_filters:!0,with_permission_to:!0,data:s.data,attachments:s.attachments,actor_id:e,user_id:e},{dataType:"json",contentType:"application/json",processData:!1})};return[{path:"/myprogress/",component:{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("f7-page",{staticClass:"myprogress-page myprogress-home-page"},[i("f7-navbar",[i("tommy-nav-menu"),t._v(" "),i("f7-nav-title",[t._v(t._s(t.$t("myprogress.index.title")))])],1),t._v(" "),t.items?i("f7-progressbar",{staticClass:"myprogress-progressbar",attrs:{slot:"static",progress:t.itemsProgress},slot:"static"}):t._e(),t._v(" "),t.items?i("div",{staticClass:"myprogress-progress"},[t._v(t._s(t.itemsProgressCount)+"/10")]):t._e(),t._v(" "),t.items?i("div",{staticClass:"myprogress-list"},[i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("1.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label"},[t._v(t._s(t.$t("myprogress.points.training")))])]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.training.checked},on:{change:function(e){t.toggleItem("training")}}}),t._v(" "),i("i")])])]),t._v(" "),i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("2.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label",on:{click:function(e){t.nationalIdOpened=!0}}},[t._v(t._s(t.$t("myprogress.points.national_id")))]),t._v(" "),t.items.national_id.files?i("div",{staticClass:"myprogress-item-uploads"},t._l(t.items.national_id.files,function(s,e){return i("div",{key:e,staticClass:"myprogress-item-upload",style:"background-image: url("+t.fileUrl(s)+")",on:{click:function(e){t.previewImage(s,e)}}},[i("span",{staticClass:"myprogress-item-delete",on:{click:function(e){t.deleteImage("national_id",s)}}})])})):t._e(),t._v(" "),t.items.national_id.checked?t._e():i("a",{staticClass:"myprogress-button",attrs:{href:"#"},on:{click:function(e){t.nationalIdOpened=!0}}},[t._v(t._s(t.$t("myprogress.index.upload")))])]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.national_id.checked},on:{change:function(e){t.toggleItem("national_id")}}}),t._v(" "),i("i")])])]),t._v(" "),i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("3.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label",on:{click:function(e){t.profilePhotoOpened=!0}}},[t._v(t._s(t.$t("myprogress.points.profile_photo")))]),t._v(" "),t.items.profile_photo.files?i("div",{staticClass:"myprogress-item-uploads"},t._l(t.items.profile_photo.files,function(s,e){return i("div",{key:e,staticClass:"myprogress-item-upload",style:"background-image: url("+t.fileUrl(s)+")",on:{click:function(e){t.previewImage(s,e)}}},[i("span",{staticClass:"myprogress-item-delete",on:{click:function(e){t.deleteImage("profile_photo",s)}}})])})):t._e(),t._v(" "),t.items.profile_photo.checked?t._e():i("a",{staticClass:"myprogress-button",attrs:{href:"#"},on:{click:function(e){t.profilePhotoOpened=!0}}},[t._v(t._s(t.$t("myprogress.index.upload")))])]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.profile_photo.checked},on:{change:function(e){t.toggleItem("profile_photo")}}}),t._v(" "),i("i")])])]),t._v(" "),i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("4.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label",on:{click:function(e){t.healthCertOpened=!0}}},[t._v(t._s(t.$t("myprogress.points.health_cert")))]),t._v(" "),t.items.health_cert.files?i("div",{staticClass:"myprogress-item-uploads"},t._l(t.items.health_cert.files,function(s,e){return i("div",{key:e,staticClass:"myprogress-item-upload",style:"background-image: url("+t.fileUrl(s)+")",on:{click:function(e){t.previewImage(s,e)}}},[i("span",{staticClass:"myprogress-item-delete",on:{click:function(e){t.deleteImage("health_cert",s)}}})])})):t._e(),t._v(" "),t.items.health_cert.checked?t._e():i("a",{staticClass:"myprogress-button",attrs:{href:"#"},on:{click:function(e){t.healthCertOpened=!0}}},[t._v(t._s(t.$t("myprogress.index.upload")))])]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.health_cert.checked},on:{change:function(e){t.toggleItem("health_cert")}}}),t._v(" "),i("i")])])]),t._v(" "),i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("5.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label",on:{click:function(e){t.addressOpened=!0}}},[t._v(t._s(t.$t("myprogress.points.address")))]),t._v(" "),t.items.address.city&&t.items.address.address?i("div",{staticClass:"myprogress-item-data"},[i("div",[t._v(t._s(t.items.address.city)+" "+t._s(t.items.address.address))]),t._v(" "),t.items.address.size?i("div",[t._v(t._s(t.$t("myprogress.upload.address_size_"+t.items.address.size)))]):t._e()]):t._e(),t._v(" "),t.items.address.checked?t._e():i("a",{staticClass:"myprogress-button",attrs:{href:"#"},on:{click:function(e){t.addressOpened=!0}}},[t._v(t._s(t.$t("myprogress.index.fill_address")))])]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.address.checked},on:{change:function(e){t.toggleItem("address")}}}),t._v(" "),i("i")])])]),t._v(" "),i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("6.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label",on:{click:function(e){t.residentialPermitOpened=!0}}},[t._v(t._s(t.$t("myprogress.points.residential_permit")))]),t._v(" "),t.items.residential_permit.files?i("div",{staticClass:"myprogress-item-uploads"},t._l(t.items.residential_permit.files,function(s,e){return i("div",{key:e,staticClass:"myprogress-item-upload",style:"background-image: url("+t.fileUrl(s)+")",on:{click:function(e){t.previewImage(s,e)}}},[i("span",{staticClass:"myprogress-item-delete",on:{click:function(e){t.deleteImage("residential_permit",s)}}})])})):t._e(),t._v(" "),t.items.residential_permit.checked?t._e():i("a",{staticClass:"myprogress-button",attrs:{href:"#"},on:{click:function(e){t.residentialPermitOpened=!0}}},[t._v(t._s(t.$t("myprogress.index.upload")))])]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.residential_permit.checked},on:{change:function(e){t.toggleItem("residential_permit")}}}),t._v(" "),i("i")])])]),t._v(" "),i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("7.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label"},[t._v(t._s(t.$t("myprogress.points.approval"))+" "),t.isPendingApproval?i("span",{staticClass:"myprogress-pending-label"},[t._v("("+t._s(t.$t("myprogress.index.pending"))+")")]):t._e()])]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.approval.checked},on:{change:function(e){t.toggleItem("approval")}}}),t._v(" "),i("i")])])]),t._v(" "),i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("8.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label"},[t._v(t._s(t.$t("myprogress.points.sign_contract")))]),t._v(" "),7===t.itemsProgressCount?i("a",{staticClass:"myprogress-button",attrs:{href:"#"},on:{click:function(e){t.contractOpened=!0}}},[t._v(t._s(t.$t("myprogress.index.view_contract")))]):t._e()]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.sign_contract.checked},on:{change:function(e){t.toggleItem("sign_contract")}}}),t._v(" "),i("i")])])]),t._v(" "),i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("9.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label"},[t._v(t._s(t.$t("myprogress.points.receive_tuome_bag")))])]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.receive_tuome_bag.checked},on:{change:function(e){t.toggleItem("receive_tuome_bag")}}}),t._v(" "),i("i")])])]),t._v(" "),i("div",{staticClass:"myprogress-list-item"},[i("div",{staticClass:"myprogress-item-number"},[t._v("10.")]),t._v(" "),i("div",{staticClass:"myprogress-item-content"},[i("div",{staticClass:"myprogress-item-label"},[t._v(t._s(t.$t("myprogress.points.the_first_job")))])]),t._v(" "),i("div",{staticClass:"myprogress-item-checkbox"},[i("label",{staticClass:"myprogress-checkbox",class:{disabled:t.isNurse}},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.items.the_first_job.checked},on:{change:function(e){t.toggleItem("the_first_job")}}}),t._v(" "),i("i")])])])]):t._e(),t._v(" "),t.profilePhotoOpened?i("UploadPopup",{attrs:{slot:"fixed",title:t.$t("myprogress.upload.profile_photo_title"),intro:t.$t("myprogress.upload.profile_photo_intro"),reminder:t.$t("myprogress.upload.profile_photo_reminder"),reminderImageSrc:t.$addonAssetsUrl+"/reminder_profile_photo.png",uploadText:t.$t("myprogress.upload.profile_photo_upload_text")},on:{closed:function(e){t.profilePhotoOpened=!1},uploaded:function(e){t.updateUploaded("profile_photo",e)}},slot:"fixed"}):t._e(),t._v(" "),t.healthCertOpened?i("UploadPopup",{attrs:{slot:"fixed",title:t.$t("myprogress.upload.health_cert_title"),intro:t.$t("myprogress.upload.health_cert_intro"),reminder:t.$t("myprogress.upload.health_cert_reminder"),reminderImageSrc:t.$addonAssetsUrl+"/reminder_health_cert.png",uploadText:t.$t("myprogress.upload.health_cert_upload_text"),multipleUpload:!0},on:{uploaded:function(e){t.updateUploaded("health_cert",e)},closed:function(e){t.healthCertOpened=!1}},slot:"fixed"}):t._e(),t._v(" "),t.nationalIdOpened?i("UploadPopup",{attrs:{slot:"fixed",title:t.$t("myprogress.upload.national_id_title"),intro:t.$t("myprogress.upload.national_id_intro"),reminder:t.$t("myprogress.upload.national_id_reminder"),reminderImageSrc:t.$addonAssetsUrl+"/reminder_national_id.png",uploadText:t.$t("myprogress.upload.national_id_upload_text"),multipleUpload:!0},on:{uploaded:function(e){t.updateUploaded("national_id",e)},closed:function(e){t.nationalIdOpened=!1}},slot:"fixed"}):t._e(),t._v(" "),t.residentialPermitOpened?i("UploadPopup",{attrs:{slot:"fixed",title:t.$t("myprogress.upload.residential_permit_title"),intro:t.$t("myprogress.upload.residential_permit_intro"),reminder:t.$t("myprogress.upload.residential_permit_reminder"),reminderImageSrc:t.$addonAssetsUrl+"/reminder_residential_permit.png",uploadText:t.$t("myprogress.upload.residential_permit_upload_text"),multipleUpload:!0},on:{uploaded:function(e){t.updateUploaded("residential_permit",e)},closed:function(e){t.residentialPermitOpened=!1}},slot:"fixed"}):t._e(),t._v(" "),t.addressOpened?i("AddressPopup",{attrs:{slot:"fixed",cityInitial:t.items.address.city,addressInitial:t.items.address.address,sizeInitial:t.items.address.size},on:{save:t.saveAddress,closed:function(e){t.addressOpened=!1}},slot:"fixed"}):t._e(),t._v(" "),t.contractOpened?i("ContractPopup",{attrs:{slot:"fixed"},on:{submit:t.submitContract,closed:function(e){t.contractOpened=!1}},slot:"fixed"}):t._e()],1)},staticRenderFns:[],components:{UploadPopup:{render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("f7-popup",{attrs:{opened:s.opened},on:{"popup:closed":s.onClosed}},[t("f7-view",{attrs:{init:!1}},[t("f7-page",{staticClass:"myprogress-upload"},[t("f7-navbar",[t("f7-nav-title",[s._v(s._s(s.title))]),s._v(" "),t("f7-nav-right",[t("f7-link",{attrs:{"popup-close":"","icon-f7":"close"}})],1)],1),s._v(" "),"step-1"===s.step?t("div",{staticClass:"myprogress-upload-button",attrs:{slot:"fixed"},on:{click:function(e){s.setStep("step-2")}},slot:"fixed"},[s._v(s._s(s.$t("myprogress.upload.button_upload")))]):s._e(),s._v(" "),"step-2"===s.step?t("div",{staticClass:"myprogress-upload-button",class:{disabled:s.uploading||s.files.length<(s.multipleUpload?2:1)},attrs:{slot:"fixed"},on:{click:function(e){s.setStep("step-3")}},slot:"fixed"},[s._v(s._s(s.$t("myprogress.upload.button_submit")))]):s._e(),s._v(" "),"step-3"===s.step?t("div",{staticClass:"myprogress-upload-button popup-close",attrs:{slot:"fixed"},slot:"fixed"},[s._v(s._s(s.$t("myprogress.upload.button_next")))]):s._e(),s._v(" "),"step-1"===s.step?[t("div",{staticClass:"myprogress-upload-intro",domProps:{innerHTML:s._s(s.intro.replace(/\n/g,"<br>"))}}),s._v(" "),t("div",{staticClass:"myprogress-upload-reminder-label"},[s._v(s._s(s.$t("myprogress.upload.reminder_label"))+":")]),s._v(" "),t("div",{staticClass:"myprogress-upload-reminder-image"},[t("img",{attrs:{src:s.reminderImageSrc}})]),s._v(" "),t("div",{staticClass:"myprogress-upload-reminder-text"},[s._v(s._s(s.reminder))])]:s._e(),s._v(" "),"step-2"===s.step?[t("div",{staticClass:"myprogress-upload-text"},[s._v(s._s(s.uploadText))]),s._v(" "),s.multipleUpload?t("f7-swiper",{ref:"swiper",attrs:{params:{speed:500}}},[t("f7-swiper-slide",[t("label",{staticClass:"myprogress-upload-camera",class:{"has-uploads":!!s.files[0]}},[s.files[0]?s._e():[t("i"),s._v(" "),t("span",[s._v(s._s(s.$t("myprogress.upload.add_photos_label")))])],s._v(" "),s.previews[0]?[t("img",{attrs:{src:s.previews[0]}})]:s._e(),s._v(" "),t("input",{attrs:{type:"file",accept:"image/*",capture:""},on:{change:function(e){s.onFilesChange(e,0)}}})],2)]),s._v(" "),t("f7-swiper-slide",[t("label",{staticClass:"myprogress-upload-camera",class:{"has-uploads":!!s.files[1]}},[s.files[1]?s._e():[t("i"),s._v(" "),t("span",[s._v(s._s(s.$t("myprogress.upload.add_photos_label")))])],s._v(" "),s.previews[1]?[t("img",{attrs:{src:s.previews[1]}})]:s._e(),s._v(" "),t("input",{attrs:{type:"file",accept:"image/*",capture:""},on:{change:function(e){s.onFilesChange(e,1)}}})],2)])],1):t("label",{staticClass:"myprogress-upload-camera",class:{"has-uploads":0<s.files.length}},[0===s.files.length?[t("i"),s._v(" "),t("span",[s._v(s._s(s.$t("myprogress.upload.add_photos_label")))])]:s._e(),s._v(" "),0<s.previews.length?[t("img",{key:s.index,attrs:{src:s.previews[0]}})]:s._e(),s._v(" "),t("input",{attrs:{type:"file",accept:"image/*",capture:""},on:{change:function(e){s.onFilesChange(e,0)}}})],2)]:s._e(),s._v(" "),"step-3"===s.step?[t("div",{staticClass:"myprogress-upload-text"},[s._v(s._s(s.uploadText))]),s._v(" "),t("div",{staticClass:"myprogress-thank-you"},[t("i"),s._v(" "),t("span",[s._v(s._s(s.$t("myprogress.upload.thank_you_label")))])])]:s._e()],2)],1)],1)},staticRenderFns:[],props:{title:String,intro:String,reminder:String,reminderImageSrc:String,uploadText:String,multipleUpload:{type:Boolean,default:!1}},data:function data(){return{opened:!1,step:"step-1",uploads:[],files:[],previews:[],uploading:!1}},watch:{files:function files(){var i=this,files=i.files;i.previews=[],files.forEach(function(e,s){if(e){var t=new FileReader;t.onload=function(e){i.$set(i.previews,s,e.target.result)},t.readAsDataURL(e)}})}},mounted:function mounted(){var e=this;this.$nextTick(function(){e.opened=!0})},methods:{stepBack:function stepBack(){},setStep:function setStep(e){var s=this;"step-3"!==e?s.step=e:s.uploadFiles().then(function(){s.step=e})},uploadFiles:function uploadFiles(){var i=this;return i.uploading=!0,new Promise(function(t,s){return Promise.all(i.files.map(function(e){return i.$api.uploadFiles([e])})).then(function(e){var s=[];e.forEach(function(e){s.push.apply(s,e)}),i.$emit("uploaded",s),t(e)}).catch(function(e){s(e),console.error(e)})})},onFilesChange:function onFilesChange(e,s){var t=this;t.$set(t.files,s,e.target.files[0]),t.$nextTick(function(){0===s&&!t.files[1]&&t.multipleUpload&&t.$refs.swiper.swiper.slideNext(),1===s&&!t.files[0]&&t.multipleUpload&&t.$refs.swiper.swiper.slidePrev()})},onClosed:function onClosed(){this.$emit("closed")}}},AddressPopup:{render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("f7-popup",{attrs:{opened:s.opened},on:{"popup:closed":s.onClosed}},[t("f7-view",{attrs:{init:!1}},[t("f7-page",{staticClass:"myprogress-upload myprogress-address-page"},[t("f7-navbar",[t("f7-nav-title",[s._v(s._s(s.$t("myprogress.upload.address_title")))]),s._v(" "),t("f7-nav-right",[t("f7-link",{attrs:{"popup-close":"","icon-f7":"close"}})],1)],1),s._v(" "),"step-1"===s.step?t("div",{staticClass:"myprogress-upload-button",attrs:{slot:"fixed"},on:{click:function(e){s.setStep("step-2")}},slot:"fixed"},[s._v(s._s(s.$t("myprogress.upload.button_continue")))]):s._e(),s._v(" "),"step-1"===s.step?[t("div",{staticClass:"myprogress-upload-intro"},[t("p",[t("img",{attrs:{src:s.$addonAssetsUrl+"/icon-address.svg"}})]),s._v(" "),t("div",{domProps:{innerHTML:s._s(s.$t("myprogress.upload.address_text").replace(/\n/g,"<br>"))}})])]:s._e(),s._v(" "),"step-2"===s.step?[t("div",{staticClass:"myprogress-address-card"},[t("input",{attrs:{placeholder:s.$t("myprogress.upload.address_city_placeholder"),type:"text"},domProps:{value:s.city},on:{input:function(e){s.city=e.target.value}}}),s._v(" "),t("textarea",{attrs:{placeholder:s.$t("myprogress.upload.address_address_placeholder")},domProps:{value:s.address},on:{input:function(e){s.address=e.target.value}}}),s._v(" "),t("p",{staticClass:"myprogress-address-radios-label"},[s._v(s._s(s.$t("myprogress.upload.address_choose_size")))]),s._v(" "),t("div",{staticClass:"myprogress-address-radios"},[t("div",{staticClass:"myprogress-address-radio",class:{checked:"m"===s.size},on:{click:function(e){s.size="m"}}},[s._v(s._s(s.$t("myprogress.upload.address_size_m")))]),s._v(" "),t("div",{staticClass:"myprogress-address-radio",class:{checked:"l"===s.size},on:{click:function(e){s.size="l"}}},[s._v(s._s(s.$t("myprogress.upload.address_size_l")))]),s._v(" "),t("div",{staticClass:"myprogress-address-radio",class:{checked:"xl"===s.size},on:{click:function(e){s.size="xl"}}},[s._v(s._s(s.$t("myprogress.upload.address_size_xl")))]),s._v(" "),t("div",{staticClass:"myprogress-address-radio",class:{checked:"xxl"===s.size},on:{click:function(e){s.size="xxl"}}},[s._v(s._s(s.$t("myprogress.upload.address_size_xxl")))])]),s._v(" "),t("a",{class:{disabled:!s.city||!s.address||!s.size},on:{click:s.save}},[s._v(s._s(s.$t("myprogress.upload.button_save")))])])]:s._e()],2)],1)],1)},staticRenderFns:[],props:{title:String,intro:String,reminder:String,reminderImageSrc:String,uploadText:String,multipleUpload:{type:Boolean,default:!1},cityInitial:String,addressInitial:String,sizeInitial:String},data:function data(){return{opened:!1,step:"step-1",city:this.cityInitial||"",address:this.addressInitial||"",size:this.sizeInitial||""}},mounted:function mounted(){var e=this;this.$nextTick(function(){e.opened=!0})},methods:{save:function save(){var e=this,s=e.city,t=e.address,i=e.size;e.$emit("save",{city:s,address:t,size:i}),e.$f7.popup.close()},setStep:function setStep(e){var s=this;"step-3"!==e?s.step=e:s.uploadFiles().then(function(){s.step=e})},onClosed:function onClosed(){this.$emit("closed")}}},ContractPopup:{render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("f7-popup",{attrs:{opened:s.opened},on:{"popup:closed":s.onClosed}},[t("f7-view",{attrs:{init:!1}},[t("f7-page",{staticClass:"myprogress-upload myprogress-contract-page"},[t("f7-navbar",[t("f7-nav-title",[s._v(s._s(s.$t("myprogress.upload.contract_page_title")))]),s._v(" "),t("f7-nav-right",[t("f7-link",{attrs:{"popup-close":"","icon-f7":"close"}})],1)],1),s._v(" "),t("div",{staticClass:"myprogress-upload-button",attrs:{slot:"fixed"},on:{click:function(e){s.sign()}},slot:"fixed"},[s._v(s._s(s.$t("myprogress.upload.contract_page_button")))]),s._v(" "),t("div",{staticClass:"myprogress-contract-title"},[s._v(s._s(s.$t("myprogress.upload.contract_title")))]),s._v(" "),t("div",{staticClass:"myprogress-contract-text",domProps:{innerHTML:s._s(s.$t("myprogress.upload.contract_text"))}})],1)],1)],1)},staticRenderFns:[],data:function data(){return{opened:!1}},mounted:function mounted(){var e=this;this.$nextTick(function(){e.opened=!0})},methods:{sign:function sign(){this.$emit("submit"),this.$f7.popup.close()},onClosed:function onClosed(){this.$emit("closed")}}}},data:function data(){return{fragment:null,items:null,actorId:this.$f7route.query.actor_id,profilePhotoOpened:!1,healthCertOpened:!1,residentialPermitOpened:!1,nationalIdOpened:!1,addressOpened:!1,contractOpened:!1}},computed:{isPendingApproval:function isPendingApproval(){var e=this;return 6===e.itemsProgressCount&&e.items.training.checked&&e.items.national_id.checked&&e.items.profile_photo.checked&&e.items.health_cert.checked&&e.items.address.checked&&e.items.residential_permit.checked},itemsProgress:function itemsProgress(){return this.itemsProgressCount/10*100},itemsProgressCount:function itemsProgressCount(){var s=this;return Object.keys(this.items).filter(function(e){return!0===s.items[e].checked}).length},isNurse:function isNurse(){var e=this;return!(!e.$root.user||"job"!==e.$root.user.onboarding)||(!(!e.$root.account||!("Nurse"===e.$root.account.kind||0<=e.$root.account.roles.indexOf("Nurse")))||(!(!e.$root.account||!("Jobseeker"===e.$root.account.kind||0<=e.$root.account.roles.indexOf("Jobseeker")))||!(!e.$root.account||!("Employee"===e.$root.account.kind||0<=e.$root.account.roles.indexOf("Employee")))))}},mounted:function mounted(){this.getData()},methods:{submitContract:function submitContract(){this.items.sign_contract.checked=!0,this.saveData()},fileUrl:function fileUrl(s){var t,i=this;try{t=i.fragment.attachments.filter(function(e){return e.signed_id===s.signed_id})[0].url}catch(e){t=i.$config.cdnUrl+"/"+s.signed_id+"/"+s.filename}return t||""},deleteImage:function deleteImage(e,s){var t=this,i=t.items[e].files.length;t.items[e].files.splice(t.items[e].files.indexOf(s),1);var r=t.items[e].files.length;(0===r||1===r&&2===i)&&(t.items[e].checked=!1),t.fragment.destroy_attachment=s.signed_id||s,t.saveData()},previewImage:function previewImage(e,s){var t=this;if(!t.$$(s.target).closest(".myprogress-item-delete").length){var i=t.$f7.photoBrowser.create({photos:[t.fileUrl(e)],toolbar:!1,backLinkText:t.$t("label.back"),type:"standalone",renderNavbar:function renderNavbar(){return'\n            <div class="navbar">\n              <div class="navbar-inner sliding">\n                <div class="left">\n                  <a href="#" class="link popup-close" data-popup=".photo-browser-popup">\n                    <i class="icon icon-back"></i>\n                    <span>'+t.$t("label.back")+'</span>\n                  </a>\n                </div>\n                <div class="right"></div>\n              </div>\n            </div>\n          '}});i.once("closed",function(){setTimeout(function(){i.destroy(),i=null})}),i.open()}},toggleItem:function toggleItem(e){var s=this;if(s.items[e].checked=!s.items[e].checked,s.saveData(),8<=s.itemsProgressCount&&s.actorId){var t=s.$root.teamMembers.filter(function(e){return e.user_id===parseInt(s.actorId,10)})[0];if(!t)return;if(t.roles||(t.roles=[]),0<=t.roles.indexOf("Employee"))return;0<=t.roles.indexOf("Jobseeker")&&t.roles.splice(t.roles.indexOf("Jobseeker"),1),t.roles.indexOf("Employee")<0&&t.roles.push("Employee"),s.$api.updateCurrentTeamMember(parseInt(s.actorId,10),t)}},updateUploaded:function updateUploaded(e,s){var t=this;t.items[e].checked=!0,t.items[e].files=s.map(function(e){return t.fragment.attachments?t.fragment.attachments.push(e.signed_id):t.fragment.attachments=[e.signed.id],{signed_id:e.signed_id,filename:e.filename}}),t.saveData()},saveAddress:function saveAddress(e){var s=e.city,t=e.address,i=e.size,r=this;r.items.address.checked=!0,r.items.address.city=s,r.items.address.address=t,r.items.address.size=i,r.saveData()},saveData:function saveData(){var s=this,e=s.fragment;e.data.items=s.items,i(s.actorId||s.$root.user.id,e).then(function(e){e&&e.id&&(s.fragment=e,s.$set(s,"fragment",e))})},getData:function getData(){var s=this;e(s.actorId||s.$root.user.id).then(function(e){e.length?(s.fragment=e[0],s.items=s.fragment.data.items):(s.items={training:{checked:!1},national_id:{checked:!1},profile_photo:{checked:!1},health_cert:{checked:!1},address:{checked:!1},residential_permit:{checked:!1},approval:{checked:!1},sign_contract:{checked:!1},receive_tuome_bag:{checked:!1},the_first_job:{checked:!1}},s.fragment={data:{items:s.items}})})}}}}]}();