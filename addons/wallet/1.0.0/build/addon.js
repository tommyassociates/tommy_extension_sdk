var addon=function(){var n=window.tommy.api,s={wallet:{},getWallet:function getWallet(){return n.call({endpoint:"wallet",method:"GET",data:{}}).then(function(t){return s.wallet=t})},updateWalletSettings:function updateWalletSettings(a){return void 0===a&&(a={}),Object.keys(a).forEach(function(t){s.wallet[t]=a[t]}),n.call({endpoint:"wallet",method:"PUT",data:a})},getWalletCards:function getWalletCards(){return n.call({endpoint:"wallet/cards",method:"GET",data:{}})},getWalletTransactions:function getWalletTransactions(t){return n.call({endpoint:"wallet/transactions",method:"GET",data:{card_id:t}}).then(function(t){return t.sort(function(t,a){return new Date(t.paid_at).getTime()<new Date(a.paid_at).getTime()?1:-1})})},getWalletTransaction:function getWalletTransaction(t){return n.call({endpoint:"wallet/transactions/"+t,method:"GET",data:{}})},getBalanceHistory:function getBalanceHistory(){},createWalletTransaction:function createWalletTransaction(t){return void 0===t&&(t={}),n.call({endpoint:"wallet/transactions",method:"POST",data:t})}},a={AED:"د.إ",AFN:"؋",ALL:"L",AMD:"֏",ANG:"ƒ",AOA:"Kz",ARS:"$",AUD:"$",AWG:"ƒ",AZN:"₼",BAM:"KM",BBD:"$",BDT:"৳",BGN:"лв",BHD:".د.ب",BIF:"FBu",BMD:"$",BND:"$",BOB:"$b",BRL:"R$",BSD:"$",BTC:"฿",BTN:"Nu.",BWP:"P",BYR:"Br",BYN:"Br",BZD:"BZ$",CAD:"$",CDF:"FC",CHF:"CHF",CLP:"$",CNY:"¥",COP:"$",CRC:"₡",CUC:"$",CUP:"₱",CVE:"$",CZK:"Kč",DJF:"Fdj",DKK:"kr",DOP:"RD$",DZD:"دج",EEK:"kr",EGP:"£",ERN:"Nfk",ETB:"Br",ETH:"Ξ",EUR:"€",FJD:"$",FKP:"£",GBP:"£",GEL:"₾",GGP:"£",GHC:"₵",GHS:"GH₵",GIP:"£",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"$",HKD:"$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"₪",IMP:"£",INR:"₹",IQD:"ع.د",IRR:"﷼",ISK:"kr",JEP:"£",JMD:"J$",JOD:"JD",JPY:"¥",KES:"KSh",KGS:"лв",KHR:"៛",KMF:"CF",KPW:"₩",KRW:"₩",KWD:"KD",KYD:"$",KZT:"лв",LAK:"₭",LBP:"£",LKR:"₨",LRD:"$",LSL:"M",LTC:"Ł",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"lei",MGA:"Ar",MKD:"ден",MMK:"K",MNT:"₮",MOP:"MOP$",MRO:"UM",MRU:"UM",MUR:"₨",MVR:"Rf",MWK:"MK",MXN:"$",MYR:"RM",MZN:"MT",NAD:"$",NGN:"₦",NIO:"C$",NOK:"kr",NPR:"₨",NZD:"$",OMR:"﷼",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"₱",PKR:"₨",PLN:"zł",PYG:"Gs",QAR:"﷼",RMB:"￥",RON:"lei",RSD:"Дин.",RUB:"₽",RWF:"R₣",SAR:"﷼",SBD:"$",SCR:"₨",SDG:"ج.س.",SEK:"kr",SGD:"$",SHP:"£",SLL:"Le",SOS:"S",SRD:"$",SSP:"£",STD:"Db",STN:"Db",SVC:"$",SYP:"£",SZL:"E",THB:"฿",TJS:"SM",TMT:"T",TND:"د.ت",TOP:"T$",TRL:"₤",TRY:"₺",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"₴",UGX:"USh",USD:"$",UYU:"$U",UZS:"лв",VEF:"Bs",VND:"₫",VUV:"VT",WST:"WS$",XAF:"FCFA",XBT:"Ƀ",XCD:"$",XOF:"CFA",XPF:"₣",YER:"﷼",ZAR:"R",ZWD:"Z$"};function currencyMap(t){return t&&a[t]?a[t]:""}function formatTransactionAmount(t){return("paid"===t.status||"failed"===t.status?"-":"+")+" "+currencyMap(t.currency)+t.amount}function formatTransactionDate(t){if(!t)return"";var a=new Date(t),n=a.getFullYear(),e=a.getMonth()+1;e<10&&(e="0"+e);var i=a.getDate();i<10&&(i="0"+i);var s=a.getHours();s<10&&(s="0"+s);var l=a.getMinutes();return l<10&&(l="0"+l),n+"-"+e+"-"+i+" "+s+":"+l}var t={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("f7-list",{staticClass:"wallet-list transaction-list",attrs:{"media-list":"","no-hairlines":"","no-chevron":""}},n._l(n.transactions,function(t,a){return e("f7-list-item",{key:a,attrs:{link:"/wallet/transaction/"+t.id+"/"}},[t.icon_url?e("img",{attrs:{slot:"media",src:t.icon_url},slot:"media"}):e("i",{staticClass:"wallet-icon-placeholder",attrs:{slot:"media"},slot:"media"}),n._v(" "),e("div",{staticClass:"item-details",attrs:{slot:"inner-start"},slot:"inner-start"},[e("div",{staticClass:"item-title-row"},[e("div",{staticClass:"item-title"},[n._v(n._s(t.payee_name))])]),n._v(" "),e("div",{staticClass:"item-text"},[n._v(n._s(n.formatTransactionDate(t.paid_at)))])]),n._v(" "),e("div",{staticClass:"item-after",attrs:{slot:"inner-end"},slot:"inner-end"},[n._v(n._s(n.formatTransactionAmount(t)))])])}))},staticRenderFns:[],props:{transactions:Array},methods:{formatTransactionDate:formatTransactionDate,formatTransactionAmount:formatTransactionAmount}},e={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("f7-page",{attrs:{name:"wallet__index",id:"wallet__index"},on:{"page:beforein":n.onPageBeforeIn,"page:beforeout":n.onPageBeforeOut}},[e("f7-navbar",{attrs:{innerClass:"wallet-index-navbar-inner"}},[e("tommy-nav-menu"),n._v(" "),e("f7-nav-title",[n._v(n._s(n.$t("wallet.index.title","Tommy Wallet")))]),n._v(" "),e("f7-nav-right",[e("f7-link",{attrs:{"icon-f7":"gear",href:"/wallet/settings/"}})],1)],1),n._v(" "),e("div",{staticClass:"wallet-tabs-links"},[e("div",{staticClass:"wallet-tab-link-wrap"},[e("f7-link",{attrs:{"tab-link":"#wallet-tab-wallets","tab-link-active":""}},[e("i",{staticClass:"wallet-tab-link-icon wallet-tab-link-icon-wallet"}),n._v(" "),e("div",{staticClass:"wallet-tab-link-label"},[n._v(n._s(n.$t("wallet.index.tab_link_wallets","Wallets")))])])],1),n._v(" "),e("div",{staticClass:"wallet-tab-link-wrap"},[e("f7-link",{attrs:{"tab-link":"",noLinkClass:""}},[e("i",{staticClass:"wallet-tab-link-icon wallet-tab-link-icon-balance"}),n._v(" "),e("div",{staticClass:"wallet-tab-link-label"},[n._v(n._s(n.$t("wallet.index.tab_link_balance","Balance")))]),n._v(" "),n.balance?e("div",{staticClass:"wallet-balance-value"},[n._v(n._s(n.balance))]):n._e()])],1),n._v(" "),e("div",{staticClass:"wallet-tab-link-wrap"},[e("f7-link",{attrs:{"tab-link":"#wallet-tab-transactions"}},[e("i",{staticClass:"wallet-tab-link-icon wallet-tab-link-icon-transactions"}),n._v(" "),e("div",{staticClass:"wallet-tab-link-label"},[n._v(n._s(n.$t("wallet.index.tab_link_transactions","Transactions")))])])],1)]),n._v(" "),e("f7-tabs",{staticClass:"wallet-tabs"},[e("f7-tab",{attrs:{"tab-active":"",id:"wallet-tab-wallets"}},[e("f7-block-title",[n._v(n._s(n.$t("wallet.index.tab_wallets_title","Wallets")))]),n._v(" "),n.wallets?e("f7-list",{staticClass:"wallet-list wallets-list",attrs:{"media-list":"","no-hairlines":"","no-chevron":""}},n._l(n.wallets,function(t,a){return e("f7-list-item",{key:a,attrs:{link:"/wallet/card/"+t.id+"/?name="+t.name}},[t.icon_url?e("img",{attrs:{slot:"media",src:t.icon_url},slot:"media"}):e("i",{staticClass:"wallet-icon-placeholder",attrs:{slot:"media"},slot:"media"}),n._v(" "),e("div",{staticClass:"item-details",attrs:{slot:"inner-start"},slot:"inner-start"},[e("div",{staticClass:"item-title-row"},[e("div",{staticClass:"item-title"},[n._v(n._s(t.name))])]),n._v(" "),t.type?e("div",{staticClass:"item-text"},[n._v(n._s(t.type))]):n._e()]),n._v(" "),e("div",{staticClass:"item-after",attrs:{slot:"inner-end"},slot:"inner-end"},[n._v(n._s(n.currencyMap(t.currency))+n._s(t.balance))])])})):n._e(),n._v(" "),n.showTestButton?e("f7-block",[e("p",[e("a",{staticClass:"button button-big button-round button-fill",attrs:{href:"#",id:"wallet__createTestTransaction"},on:{click:n.createTestTransaction}},[n._v("Test")])]),n._v(" "),e("p",[e("a",{staticClass:"button button-big button-round button-fill",attrs:{href:"#",id:"wallet__createTestErrorTransaction"},on:{click:n.createTestErrorTransaction}},[n._v("Test insufficient funds")])])]):n._e()],1),n._v(" "),e("f7-tab",{attrs:{id:"wallet-tab-balance"}}),n._v(" "),e("f7-tab",{attrs:{id:"wallet-tab-transactions"},on:{"tab:show":function(){n.transactions&&n.getTransactions()}}},[n.transactions&&n.transactions.length?[e("f7-block-title",[n._v(n._s(n.$t("wallet.index.tab_transactions_title","Transactions")))]),n._v(" "),e("wallet-transaction-list",{attrs:{transactions:n.transactions}})]:n._e(),n._v(" "),n.transactions&&!n.transactions.length?[e("div",{staticClass:"wallet-transactions-empty-message"},[e("img",{attrs:{src:n.$addonAssetsUrl+"empty-transactions.svg"}}),n._v(" "),e("div",[n._v(n._s(n.$t("wallet.index.no_transactions_message","Sorry. You do not have any transactions history yet.")))])])]:n._e()],2)],1)],1)},staticRenderFns:[],components:{walletTransactionList:t},data:function data(){return{balance:null,showTestButton:!1,wallets:null,transactions:null}},mounted:function mounted(){var t=this;t.getBalance(),t.getWallets(),t.getTransactions()},beforeDestroy:function beforeDestroy(){this.$f7router.view.$navbarEl.removeClass("wallet-index-navbar")},methods:{currencyMap:currencyMap,createTestTransaction:function createTestTransaction(){window.tommy.initWalletTransaction({addon:"wallet",payee_name:"Apple / iMac Pro",currency:"CNY",amount:100})},createTestErrorTransaction:function createTestErrorTransaction(){window.tommy.initWalletTransaction({addon:"wallet",payee_name:"Mercedes S600",currency:"USD",amount:1e5})},getTransactions:function getTransactions(){var a=this;s.getWalletTransactions().then(function(t){a.transactions=t})},getWallets:function getWallets(){var a=this;s.getWalletCards().then(function(t){a.wallets=t})},getBalance:function getBalance(){var a=this;s.getWallet().then(function(t){t.show_balance?a.balance=t.balance:a.balance=null})},onPageBeforeIn:function onPageBeforeIn(t,a){var n=this;n.$f7router.view.$navbarEl.addClass("wallet-index-navbar"),"previous"===a.from&&(n.getWallets(),n.getBalance(),n.getTransactions())},onPageBeforeOut:function onPageBeforeOut(){this.$f7router.view.$navbarEl.removeClass("wallet-index-navbar")}}},i={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("f7-page",{attrs:{name:"wallet__settings",id:"wallet__settings"}},[n("f7-navbar",[n("tommy-nav-back"),t._v(" "),n("f7-nav-title",[t._v(t._s(t.$t("wallet.settings.title","Settings")))])],1),t._v(" "),n("f7-list",{staticClass:"wallet-settings-list"},[n("f7-list-item",{attrs:{title:""+t.$t("wallet.settings.balance_label","Show Balance")}},[n("f7-toggle",{attrs:{slot:"after",checked:t.showBalance},on:{change:t.toggleShowBalance},slot:"after"})],1),t._v(" "),n("f7-list-item",{attrs:{title:""+t.$t("wallet.settings.inform_label","Inform")}},[n("f7-toggle",{attrs:{slot:"after",checked:t.enableNotifications},on:{change:t.toggleNotifications},slot:"after"})],1)],1)],1)},staticRenderFns:[],data:function data(){return{showBalance:s.wallet.show_balance,enableNotifications:s.wallet.enable_notifications}},methods:{toggleShowBalance:function toggleShowBalance(t){s.updateWalletSettings({show_balance:t.target.checked})},toggleNotifications:function toggleNotifications(t){s.updateWalletSettings({enable_notifications:t.target.checked})}}};function formatTransactionStatus(t){return t[0].toUpperCase()+t.substr(1)}var l={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("f7-page",{attrs:{name:"wallet__transaction_details",id:"wallet__transaction_details"}},[n("f7-navbar",[n("tommy-nav-back"),t._v(" "),n("f7-nav-title",[t._v(t._s(t.$t("wallet.transaction_details.title","Transaction Details")))])],1),t._v(" "),t.transaction?[n("div",{staticClass:"wallet-transaction-header"},[n("div",{staticClass:"wallet-transaction-header-wrap"},[n("div",{staticClass:"wallet-transaction-icon"},[t.transaction.icon_url?n("img",{attrs:{src:t.transaction.icon_url}}):n("i",{staticClass:"wallet-transaction-icon-placeholder"})]),t._v(" "),n("div",{staticClass:"wallet-transaction-payment-info"},[n("div",{staticClass:"wallet-transaction-payment-name"},[t._v(t._s(t.transaction.payee_name))]),t._v(" "),n("div",{staticClass:"wallet-transaction-payment-amount"},[t._v(t._s(t.formatTransactionAmount(t.transaction)))])])]),t._v(" "),n("div",{staticClass:"wallet-transaction-status"},[t._v(t._s(t.formatTransactionStatus(t.transaction.status)))])]),t._v(" "),n("f7-list",{staticClass:"wallet-transaction-details-list",attrs:{"no-hairlines":""}},[t.transaction.card_name?n("f7-list-item",{attrs:{title:t.$t("wallet.transaction_details.payment_label","Payment"),after:t.transaction.card_name}}):t._e(),t._v(" "),n("f7-list-item",{attrs:{title:t.$t("wallet.transaction_details.time_label","Time"),after:t.formatTransactionDate(t.transaction.paid_at)}}),t._v(" "),n("f7-list-item",{attrs:{title:t.$t("wallet.transaction_details.payee_label","Payee"),after:t.transaction.payee_name}})],1)]:t._e()],2)},staticRenderFns:[],props:{id:[String,Number]},data:function data(){return{transaction:null}},mounted:function mounted(){var a=this;s.getWalletTransaction(a.id).then(function(t){a.transaction=t})},methods:{formatTransactionAmount:formatTransactionAmount,formatTransactionStatus:formatTransactionStatus,formatTransactionDate:formatTransactionDate}},o={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("f7-page",{attrs:{name:"wallet__card_details",id:"wallet__card_details"}},[n("f7-navbar",[n("tommy-nav-back"),t._v(" "),n("f7-nav-title",[t._v(t._s(t.card?t.card.name:t.$f7route.query.name))])],1),t._v(" "),t.transactions?n("wallet-transaction-list",{attrs:{transactions:t.transactions}}):t._e()],1)},staticRenderFns:[],components:{walletTransactionList:t},props:{id:[String,Number]},data:function data(){return{transactions:null}},mounted:function mounted(){var a=this;s.getWalletTransactions(a.id).then(function(t){a.transactions=t})}},m=window.tommy,_=m.i18n;function renderPopupStatus(t){return('\n  <div class="page">\n    <div class="navbar">\n      <div class="navbar-inner">\n        <div class="left">\n          <i class="transaction-popup-logo"></i>\n        </div>\n        <div class="right">\n          <a href="#" class="link icon-only popup-close" data-popup=".wallet__transaction-popup">\n            <i class="icon f7-icons">close</i>\n          </a>\n        </div>\n      </div>\n    </div>\n    <a class="transaction-popup-report-button transaction-popup-fade-in">'+_.t("wallet.transaction_popup.report_button","View Report")+'</a>\n    <div class="page-content">\n      <i class="transaction-popup-status-icon transaction-popup-'+t.status+'-icon"></i>\n      <div class="transaction-popup-status-title">'+t.title+'</div>\n      <div class="transaction-popup-status-message">'+t.message+"</div>\n    </div>\n  </div>\n  ").trim()}var f={cache:{popup:null,params:null},selectWallet:function selectWallet(t,a){var n=m.app.f7,e=t.map(function(t){return{text:t.name,onClick:function onClick(){a&&a(t)}}});n.actions.create({buttons:e}).open()},showLoader:function showLoader(){f.cache.popup.$el.find(".transaction-preloader").length||f.cache.popup.$el.append('<div class="transaction-preloader"></div>')},hideLoader:function hideLoader(){f.cache.popup.$el.find(".transaction-preloader").remove()},clear:function clear(){f.cache.popup.$el&&f.cache.popup.$el.remove(),f.cache.popup.destroy&&f.cache.popup.destroy(),f.cache={}},renderError:function renderError(t){var a=f.cache.popup,n="string"==typeof t?t:t&&t.message||"",e=renderPopupStatus({title:_.t("wallet.transaction_popup.error_title","Fail"),status:"error",message:n});f.cache.onReportBack=function(){return a.$el.html(e)},a.$el.html(e)},renderSuccess:function renderSuccess(t){var a=f.cache.popup,n=t.payee_name,e=t.card_name,i=t.amount,s=t.currency,l=renderPopupStatus({title:_.t("wallet.transaction_popup.success_title","Success"),status:"success",message:_.t("wallet.transaction_popup.success_message",{defaultValue:"You sent {{currency}}{{amount}}.<br>To {{to}}.<br>From {{from}}.",currency:currencyMap(s),amount:i,to:n,from:e})});f.cache.onReportBack=function(){return a.$el.html(l)},a.$el.html(l)},createTransaction:function createTransaction(n){var e=n.card_name,i=m.app.f7;f.showLoader(),s.createWalletTransaction(n).then(function(t){f.hideLoader();var a=Object.assign({},t||{},{card_name:e});(f.cache.transactionDetails=a).status&&"failed"!==a.status?(f.renderSuccess(a),i.$(document).trigger("wallet:transaction",a),m.events.$emit("walletTransaction",a),f.cache.onSuccess&&f.cache.onSuccess(a)):"failed"===a.status&&(f.renderError(Object.assign(a,{message:_.t("wallet.transaction_popup.error_insufficient","Sorry. Your Tommy account balance is insufficient. Please use other payment methods")})),f.cache.onError&&f.cache.onError(a))},function(t){var a=Object.assign({},n,{status:"failed"});f.hideLoader(),f.cache.transactionDetails=a,f.renderError(t),f.cache.onError&&f.cache.onError(t)})},viewReport:function viewReport(){var t=m.app.f7,a=f.cache,n=a.popup,e=function renderPopupReport(t){return'\n  <div class="page">\n    <div class="navbar">\n      <div class="navbar-inner">\n        <div class="left">\n          <a href="#" class="link icon-only transaction-popup-report-back"><i class="icon f7-icons">chevron_left</i></a>\n        </div>\n        <div class="title">'+_.t("wallet.transaction_details.title","Transaction Details")+'</div>\n        <div class="right">\n          <a href="#" class="link icon-only popup-close" data-popup=".wallet__transaction-popup">\n            <i class="icon f7-icons">close</i>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class="page-content transaction-popup-fade-in">\n      <div class="wallet-transaction-header">\n        <div class="wallet-transaction-header-wrap">\n          <div class="wallet-transaction-icon">\n            '+(t.icon_url?'\n              <img src="'+t.icon_url+'">\n            ':'\n              <i class="wallet-transaction-icon-placeholder"></i>\n            ')+'\n          </div>\n          <div class="wallet-transaction-payment-info">\n            <div class="wallet-transaction-payment-name">'+t.payee_name+'</div>\n            <div class="wallet-transaction-payment-amount">'+formatTransactionAmount(t)+'</div>\n          </div>\n        </div>\n        <div class="wallet-transaction-status">'+formatTransactionStatus(t.status)+'</div>\n      </div>\n      <div class="list wallet-transaction-details-list no-hairlines">\n        <ul>\n          '+(t.card_name?'\n          <li class="item-content">\n            <div class="item-inner">\n              <div class="item-title">'+_.t("wallet.transaction_details.payment_label","Payment")+'</div>\n              <div class="item-after">'+t.card_name+"</div>\n            </div>\n          </li>\n          ":"")+'\n          <li class="item-content">\n            <div class="item-inner">\n              <div class="item-title">'+_.t("wallet.transaction_details.time_label","Time")+'</div>\n              <div class="item-after">'+formatTransactionDate(t.paid_at)+'</div>\n            </div>\n          </li>\n          <li class="item-content">\n            <div class="item-inner">\n              <div class="item-title">'+_.t("wallet.transaction_details.payee_label","Payee")+'</div>\n              <div class="item-after">'+t.payee_name+"</div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  "}(a.transactionDetails);n.$el.html(e),t.navbar.size(n.$el)},render:function render(){var t=m.app.f7,a=f.cache,o=a.popup,n=a.params,r=n.addon,c=n.addon_id,d=n.addon_install_id,p=n.payee_name,u=n.amount,v=n.currency;f.showLoader(),s.getWalletCards().then(function(t){var a=1<t.length,n=t[0],e=n.id,i=n.wallet_account_id,s=n.name,l=function renderPopup(t){return'\n  <div class="page">\n    <div class="navbar">\n      <div class="navbar-inner">\n        <div class="left">\n          <i class="transaction-popup-logo"></i>\n        </div>\n        <div class="right">\n          <a href="#" class="link icon-only popup-close" data-popup=".wallet__transaction-popup">\n            <i class="icon f7-icons">close</i>\n          </a>\n        </div>\n      </div>\n    </div>\n    <a class="transaction-popup-confirm-button transaction-popup-fade-in">'+_.t("wallet.transaction_popup.confirm_button","Confirm")+'</a>\n    <div class="page-content">\n      <i class="transaction-popup-wallet-icon transaction-popup-fade-in"></i>\n      <div class="transaction-popup-list transaction-popup-fade-in">\n        <div class="transaction-popup-list-item">'+_.t("wallet.transaction_popup.pay_label","Pay")+'</div>\n        <div class="transaction-popup-list-item">'+t.payee_name+'</div>\n        <div class="transaction-popup-list-item">'+t.currency+t.amount+'</div>\n        <div class="transaction-popup-list-item">'+_.t("wallet.transaction_popup.using_label","Using")+"</div>\n        "+(t.multiple?'\n          <div class="transaction-popup-list-item transaction-popup-list-item-link transaction-popup-select-wallet">'+t.card_name+"</div>\n        ":'\n          <div class="transaction-popup-list-item">'+t.card_name+"</div>\n        ")+"\n      </div>\n    </div>\n  </div>\n  "}({payee_name:p,currency:currencyMap(v),amount:u,card_name:s,multiple:a});f.hideLoader(),o.$el.append(l),o.$el.on("click",".transaction-popup-select-wallet",function(){a&&f.selectWallet(t,function(t){s=t.name,e=t.id,i=t.wallet_account_id,o.$el.find(".transaction-popup-select-wallet").text(s)})}),o.$el.once("click",".transaction-popup-confirm-button",function(){f.createTransaction({addon:r,addon_id:c,addon_install_id:d,payee_name:p,currency:v,amount:u,wallet_card_id:e,wallet_account_id:i,card_name:s})}),o.$el.on("click",".transaction-popup-report-button",function(){o.$el.addClass("transaction-popup-status-rendered"),f.viewReport()}),o.$el.on("click",".transaction-popup-report-back",function(){f.cache.onReportBack&&f.cache.onReportBack()})}).catch(function(){t.popup.close(".wallet__transaction-popup")})},init:function init(t,a,n){void 0===t&&(t={});var e=m.app.f7;f.cache.params=t,f.cache.onSuccess=a,f.cache.onError=n;var i=e.popup.create({content:'\n        <div class="popup popup-tablet-fullscreen wallet__transaction-popup"></div>\n      ',on:{opened:function opened(){f.render()},closed:function closed(){f.clear()}}});i.open(),f.cache.popup=i}};return window.tommy.initWalletTransaction=function initWalletTransaction(t,a,n){f.cache.popup||f.init(t,a,n)},[{path:"/wallet/",component:e},{path:"/wallet/settings/",component:i},{path:"/wallet/transaction/:id/",component:l},{path:"/wallet/card/:id/",component:o}]}();