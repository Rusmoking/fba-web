(function(){var t={5148:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return v}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"homepage"},[e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.bannerList,(function(t,s){return e("div",{key:s,staticClass:"swiper-slide"},[e("img",{attrs:{src:i(4859)(`./${t.imgUrl}`)}})])})),0),e("div",{staticClass:"swiper-button-next"}),e("div",{staticClass:"swiper-button-prev"}),e("div",{staticClass:"swiper-pagination"})]),t._m(0),e("div",{staticClass:"ServiceBusiness-content"},[e("div",{staticClass:"Sev-item1 Sev-item"},[e("div",{staticClass:"item-num"},[t._v(t._s(t.SevItemList.item1.itemNum))]),e("div",{staticClass:"item-CN"},[t._v(t._s(t.SevItemList.item1.itemCN))]),e("div",{staticClass:"item-Eng"},[t._v(t._s(t.SevItemList.item1.itemEng))])]),e("div",{staticClass:"Sev-item2 Sev-item"},[e("div",{staticClass:"item-num"},[t._v(t._s(t.SevItemList.item2.itemNum))]),e("div",{staticClass:"item-CN"},[t._v(t._s(t.SevItemList.item2.itemCN))]),e("div",{staticClass:"item-Eng"},[t._v(t._s(t.SevItemList.item2.itemEng))])]),e("div",{staticClass:"Sev-item3 Sev-item"},[e("div",{staticClass:"item-num"},[t._v(t._s(t.SevItemList.item3.itemNum))]),e("div",{staticClass:"item-CN"},[t._v(t._s(t.SevItemList.item3.itemCN))]),e("div",{staticClass:"item-Eng"},[t._v(t._s(t.SevItemList.item3.itemEng))])])]),e("div",{staticClass:"serviceProcess-content"},[t._m(1),e("div",{staticClass:"serviceProcess-main"},t._l(t.serviceProcessList,(function(i,s){return e("div",{key:s,staticClass:"serviceProcess-item"},[e("div",{staticClass:"serviceProcess-icon",class:i.icon}),e("div",{staticClass:"item-title"},[t._v(t._s(i.title))]),e("div",{staticClass:"item-text"},[t._v(t._s(i.text))]),e("div",{staticClass:"item-num"},[t._v(t._s(s+1))])])})),0)]),e("div",{staticClass:"whyChoice-content"},[t._m(2),e("div",{staticClass:"whyChoice-text"},t._l(t.whyChoice,(function(i,s){return e("div",{key:s,staticClass:"whyChoice-item"},[e("div",{staticClass:"item-num"},[t._v(t._s(i.itemNum))]),e("div",{staticClass:"item-text"},[t._v(t._s(i.itemText))])])})),0)])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"big-title"},[e("div",{staticClass:"title-Eng"},[t._v("SERVICE BUSINESS")]),e("div",{staticClass:"title-CN"},[t._v("服务"),e("span",{staticClass:"green"},[t._v("业务")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"big-title"},[e("div",{staticClass:"title-Eng"},[t._v("SERVICE PROCESS")]),e("div",{staticClass:"title-CN"},[t._v("服务"),e("span",{staticClass:"green"},[t._v("流程")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"big-title whyChoice-title"},[e("div",{staticClass:"title-Eng"},[t._v("WHY CHOOSE US")]),e("div",{staticClass:"title-CN"},[t._v("为什么选择"),e("span",{staticClass:"green"},[t._v("我们")])])])}],n=i(781),o={data(){return{mySwiper:void 0,bannerList:[{imgUrl:"image1.png"},{imgUrl:"image2.png"},{imgUrl:"image3.png"}],SevItemList:{item1:{itemNum:"01",itemCN:"提柜清关",itemEng:"Pick up the container for customs clearance"},item2:{itemNum:"02",itemCN:"仓库分货",itemEng:"Warehouse subdivision"},item3:{itemNum:"03",itemCN:"货物派发",itemEng:"Distribution of goods"}},serviceProcessList:[{icon:"icon1",title:"在线咨询",text:"拨打网站电话号码或添加客服微信"},{icon:"icon2",title:"专业团队",text:"专业服务人员一对一服务"},{icon:"icon3",title:"定制合作方案",text:"量身定制服务方案"},{icon:"icon4",title:"签订合同",text:"达成合作方式"},{icon:"icon5",title:"全程服务",text:"售中售后持续跟踪监控物品状态"}],whyChoice:[{itemNum:"01",itemText:"美国洛杉矶港口本地仓库，提供高效服务"},{itemNum:"02",itemText:"仓储及物流资源高效整合，为您解决仓储鸡物流方案"},{itemNum:"03",itemText:"专业客服及仓储团队，为您提供专业的咨询及服务"},{itemNum:"04",itemText:"极致优化操作流程，增加卖家服务体验，缩减卖家流通成本让客户满意为行为准则，提供美国清关（清）、洛彬机和长滩港的集装箱提柜（提），仓库分货（拆）以及运送至电商平台仓库和指定地址（派）等服务,专业团队，价格透明流程简单，一对一客服服务。"}]}},mounted(){this.mySwiper=new n.Z(".swiper-container",{autoplay:!0,delay:1500,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"}}),window.scrollTo({top:0,behavior:"auto"})},methods:{}},r=o,c=i(1001),l=(0,c.Z)(r,s,a,!1,null,null,null),v=l.exports},2538:function(t,e,i){"use strict";var s=i(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],o=i(1001),r={},c=(0,o.Z)(r,a,n,!1,null,null,null),l=c.exports,v=i(2631),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page"},[e("div",{staticClass:"toolbar",on:{click:t.messagepop}},[t._v("添加微信免费咨询")]),e("div",{staticClass:"home-header"},[e("BaseHeader")],1),e("div",{staticClass:"home-main"},[e("router-view"),t._m(0)],1),e("div",{staticClass:"home-footer"},[e("BaseFooter")],1),e("el-dialog",{attrs:{title:"添加联系方式，详细了解产品",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",{staticClass:"pop-content"},[e("div",{staticClass:"contactWay"},[e("div",[t._v("微信号:19313107809(电话同号)")])]),e("div",{staticClass:"contactWay-gif"},[e("el-image",{staticClass:"fba-header-img",attrs:{src:i(9502),fit:"cover"}})],1)])])],1)},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-connect"},[e("div",{staticClass:"connect-title"},[t._v("专注为跨境电商服务，专业的海外仓操作")]),e("div",{staticClass:"connect-text"},[t._v("咨询热线：19313107809（微信同号）")])])}],m=function(){var t=this,e=t._self._c;return e("el-row",{staticClass:"fba-header-wrap",attrs:{type:"flex",justify:"space-between"}},[e("el-col",{staticClass:"fba-header-logo",staticStyle:{"min-width":"525px"},attrs:{span:8,offset:1}},[e("el-image",{staticClass:"fba-header-img",attrs:{src:i(5401),fit:"cover"}}),e("h1",{staticClass:"fba-header-title"},[t._v("中建船舶配套供应链有限公司")])],1),e("el-col",{staticClass:"fba-nav",staticStyle:{"min-width":"500px"},attrs:{offset:2,pull:2}},[e("el-menu",{ref:"navMenu",attrs:{mode:"horizontal","text-color":"black","active-text-color":"black","background-color":"#fff","default-active":t.HeaderIndex,router:""}},[e("el-menu-item",{attrs:{index:"/index"},on:{click:t.reloadHomepage}},[t._v("首页")]),e("el-menu-item",{attrs:{index:"/productCenter"}},[t._v("海外仓服务")]),e("el-menu-item",{attrs:{index:"/companyIntroduction"}},[t._v("公司介绍")]),e("el-menu-item",{attrs:{index:"/contactUs"}},[t._v("联系我们")])],1)],1)],1)},f=[],C={name:"BaseHeader",data(){return{HeaderIndex:"/index"}},mounted(){this.HeaderIndex=this.$route.path},methods:{reloadHomepage(){console.log("首页刷新")}}},p=C,_=(0,o.Z)(p,m,f,!1,null,"30ae25f8",null),g=_.exports,h=function(){var t=this;t._self._c;return t._m(0)},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"fba-footer-wrap"},[e("div",{staticClass:"company-address"},[t._v(" Copyright © 中建船舶配套供应链有限公司 地址：深圳市宝安区福永街道福围社区东福围西街40号鸿福宝楼509室 ")])])}],b={name:"BaseFooter",data(){return{footerIndex:"/index"}},mounted(){},methods:{reloadHomepage(){console.log("首页刷新")}}},w=b,y=(0,o.Z)(w,h,x,!1,null,"5e86ef4b",null),S=y.exports,E={name:"IndexView",data(){return{dialogVisible:!1}},components:{BaseHeader:g,BaseFooter:S},methods:{messagepop(){this.dialogVisible=!0}}},N=E,I=(0,o.Z)(N,d,u,!1,null,null,null),O=I.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"productCenter"},[t._m(0),t._m(1),e("div",{staticClass:"productCenter-main"},[e("div",{staticClass:"mian-title"}),t._m(2),e("div",{staticClass:"mian-content"},[e("h2",{staticClass:"advantage-title"},[t._v("海外仓优点")]),e("div",{staticClass:"advantage-text"},[e("div",{staticClass:"advantage-left"},t._l(t.advantageLeft,(function(i,s){return e("div",{key:s,staticClass:"left-item"},[t._v(" "+t._s(i)+" ")])})),0),t._m(3),e("div",{staticClass:"advantage-right"},t._l(t.advantageright,(function(i,s){return e("div",{key:s,staticClass:"right-item"},[t._v(" "+t._s(i)+" ")])})),0)])])])])},P=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"productCenter-header"},[e("div",{staticClass:"header-content"},[e("div",{staticClass:"header-title"},[t._v("海外仓")]),e("div",{staticClass:"header-divider"}),e("div",{staticClass:"header-text"},[e("div",{staticClass:"header-item"},[e("span",{staticClass:"circle"}),t._v("旺季补仓：不排队、不预约 ")]),e("div",{staticClass:"header-item"},[e("span",{staticClass:"circle"}),t._v("一件代发：带闪电，超大件优势 ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"photo-title"},[e("div",{staticClass:"photo-text"},[e("div",{staticClass:"text-Eng"},[t._v("Estore")]),e("div",{staticClass:"text-CN"},[t._v("海外仓服务")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"title-text"},[e("span",{staticClass:"rectangle"}),e("span",{staticClass:"rectangle"}),t._v(" 在跨境贸易电子商务中，海外仓是指国内企业将商品通过大宗运输的形式运往目标市场国家，在当地仓库储存商品，在根据当地的销售订单，第一时间做出响应，及时从当地仓库直接分拣，包装和配送 ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"advantage-mid"},[e("div",{staticClass:"mid-img1"}),e("div",{staticClass:"mid-img2"})])}],L={data(){return{advantageLeft:["降低物流成本从海外仓发货。特别是在当地发货，物流成本远远低于从中国境内发货","加快物流时效。从海外仓发货，可以节省报关清关所用时间，缩短了运输时间，加快了物流实效性","提高产品曝光率，提升店铺销量","提升客户满意度","有利于开拓市场，扩大产品销售领域与销售范围"],advantageright:["海外仓仓储的货品根据订单地址详情要求，对比选择当地符合订单要求且高时效、低价位的物流进行派送","提高销售利润率，降低物流成本。多平台操作，配合海外仓库存情况，提高时效，降低物流成本","海外仓可以解决很多物流问题，如超大尺寸超重量等，可增加多品类货品","批量将货品运送至海外仓，降低物流费用，进行本土销售，具有竞争力提高单品利润","快捷的本地物流带来好的稳定销量提升买家权重，增加好的客户体验减少退货"]}},mounted(){window.scrollTo({top:0,behavior:"auto"})}},T=L,U=(0,o.Z)(T,k,P,!1,null,null,null),Z=U.exports,H=function(){var t=this;t._self._c;return t._m(0)},j=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"CompanyIntroduction"},[e("div",{staticClass:"CmpItrd-bg"}),e("div",{staticClass:"photo-title"},[e("div",{staticClass:"photo-text"},[e("div",{staticClass:"text-Eng"},[t._v("Estore")]),e("div",{staticClass:"text-CN"},[t._v("海外仓服务")])])]),e("div",{staticClass:"CmpItrd-main"},[e("h2",{staticClass:"main-title"},[t._v("公司介绍")]),e("div",{staticClass:"main-content"},[e("div",{staticClass:"main-text"},[t._v(" MM Ship（Estorescm）目前提供美国的清关（清）、洛彬机和长滩港的集装箱提柜（提），仓库分货（拆）以及零担和整车运送至电商平台仓库和指定地址（派）的服务。 属于远程卖家与美国电商平台之间门到门物流，其中的美国口岸到门部分，主要是亚马逊FBA仓，沃尔玛仓，以及其他电商平台如新蛋仓，Wayfair仓，为DDP美国电商平台美国段。 "),e("p",[t._v("极致优化操作流程，增加卖家服务体验，缩减卖家流通成本让客户满意为行为准则，我们有专业客服及仓储团队，为跨境电商出口美国提供全方位解决方案。")])]),e("div",{staticClass:"main-bg"})])])])}],B={mounted(){window.scrollTo({top:0,behavior:"auto"})}},M=B,V=(0,o.Z)(M,H,j,!1,null,"0ebc1cbf",null),F=V.exports,W=function(){var t=this;t._self._c;return t._m(0)},D=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ContactUs"},[e("div",{staticClass:"ContactUs-bg"}),e("div",{staticClass:"ContactUs-main"},[e("div",{staticClass:"main-bg"}),e("div",{staticClass:"main-text"},[e("div",{staticClass:"text-left"},[e("div",[t._v(" 公司地址: "),e("div",{staticClass:"text-content"},[t._v("深圳市宝安区福永街道福围社区东福围西街40号鸿福宝楼509室")])]),e("div",[t._v(" 联系电话: "),e("div",{staticClass:"text-content"},[t._v("19313107809")])]),e("div",[t._v(" 微信: "),e("div",{staticClass:"text-content"},[t._v("19313107809")])])]),e("div",{staticClass:"text-right"},[e("div",[t._v(" 工作时间: "),e("div",{staticClass:"text-content"},[t._v("9:00-18:00")])])])])])])}],q={mounted(){window.scrollTo({top:0,behavior:"auto"})}},A=q,R=(0,o.Z)(A,W,D,!1,null,null,null),$=R.exports,z=i(5148);s["default"].use(v.ZP);const Y=[{path:"/",name:"home",redirect:"/index",component:O,children:[{path:"/index",name:"Homepage",component:z["default"],props:t=>({columnId:t.query.columnId})},{path:"/productCenter",name:"productCenter",component:Z,meta:{requiresAuth:!0}},{path:"/companyIntroduction",name:"companyIntroduction",component:F,meta:{requiresAuth:!0}},{path:"/contactUs",name:"contactUs",component:$}]},{path:"/about",name:"about",component:()=>Promise.resolve().then(i.bind(i,5148))}],G=new v.ZP({mode:"hash",base:"",routes:Y});var J=G,K=i(3822);s["default"].use(K.ZP);var Q=new K.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),X=i(8499),tt=i.n(X);s["default"].use(tt()),s["default"].config.productionTip=!1,new s["default"]({router:J,store:Q,render:t=>t(l)}).$mount("#app")},4859:function(t,e,i){var s={"./image1.png":6995,"./image2.png":8823,"./image3.png":2914};function a(t){var e=n(t);return i(e)}function n(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id=4859},6995:function(t,e,i){"use strict";t.exports=i.p+"img/image1.e7305406.png"},8823:function(t,e,i){"use strict";t.exports=i.p+"img/image2.1e57d545.png"},2914:function(t,e,i){"use strict";t.exports=i.p+"img/image3.17119fe2.png"},5401:function(t,e,i){"use strict";t.exports=i.p+"img/logo.02eafaea.jpg"},9502:function(t,e,i){"use strict";t.exports=i.p+"img/addWechat.3c45d0d2.gif"}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var n=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=t,function(){i.amdO={}}(),function(){var t=[];i.O=function(e,s,a,n){if(!s){var o=1/0;for(v=0;v<t.length;v++){s=t[v][0],a=t[v][1],n=t[v][2];for(var r=!0,c=0;c<s.length;c++)(!1&n||o>=n)&&Object.keys(i.O).every((function(t){return i.O[t](s[c])}))?s.splice(c--,1):(r=!1,n<o&&(o=n));if(r){t.splice(v--,1);var l=a();void 0!==l&&(e=l)}}return e}n=n||0;for(var v=t.length;v>0&&t[v-1][2]>n;v--)t[v]=t[v-1];t[v]=[s,a,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){i.p=""}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,n,o=s[0],r=s[1],c=s[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(c)var v=c(i)}for(e&&e(s);l<o.length;l++)n=o[l],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(v)},s=self["webpackChunkfba_web"]=self["webpackChunkfba_web"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(2538)}));s=i.O(s)})();
//# sourceMappingURL=app.cdcfee3e.js.map