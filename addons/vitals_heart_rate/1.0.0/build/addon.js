var addon=function(){var a=[{path:"/vitals_heart_rate/",component:"tommy-vitals-element-index"},{path:"/vitals_heart_rate/add/",component:"tommy-vitals-element-add"},{path:"/vitals_heart_rate/settings/",component:"tommy-vitals-element-settings"},{path:"/vitals_heart_rate/history/",component:"tommy-vitals-element-history"}];return a.forEach(function(a){a.options={props:{addon:"vitals_heart_rate",vitalsElement:"heart_rate",indexCardCustomIconName:function indexCardCustomIconName(a){return a&&a.data&&a.data.state?"card-icon-"+a.data.state:""},manualAddExtraFields:[{type:"smartselect",propName:"state",defaultValue:"rest",label:function label(a){return a("vitals_heart_rate.manual_enter.vital_variants_label")},values:function values(a){return[{value:"rest",display:a("vitals_heart_rate.manual_enter.vital_variants.0")},{value:"walk",display:a("vitals_heart_rate.manual_enter.vital_variants.1")},{value:"run",display:a("vitals_heart_rate.manual_enter.vital_variants.2")}]}}],chartColor:"#FEBFB8",chartMarkerColor:"#FD7E70",chartClickedExtra:function chartClickedExtra(a,t){var e=a.data.state;return('\n          <span class="vitals-heart_rate-chart-clicked-state-icon-'+e+'"></span>\n          <span class="vitals-heart_rate-chart-clicked-state-text">'+t("vitals_heart_rate.history.vital_variants."+["rest","walk","run"].indexOf(e))+"</span>\n        ").trim()}}}}),a}();