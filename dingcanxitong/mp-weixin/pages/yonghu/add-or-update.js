(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"16b9":function(t,n,e){"use strict";var i=e("3e75"),r=e.n(i);r.a},"3e75":function(t,n,e){},"54fe":function(t,n,e){"use strict";e.r(n);var i=e("dded"),r=e("ab80");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("16b9");var u,o=e("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"93f97002",null,!1,i["a"],u);n["default"]=s.exports},"6cc4":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,r,a,u){try{var o=t[a](u),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(i,r)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var u=t.apply(n,e);function o(t){a(u,i,r,o,s,"next",t)}function s(t){a(u,i,r,o,s,"throw",t)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("a588"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{yonghuming:"",mima:"",xingming:"",xingbie:"",touxiang:"",lianxidianhua:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuming:!1,mima:!1,xingming:!1,xingbie:!1,touxiang:!1,lianxidianhua:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(i.default.mark((function n(e){var r,a,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(a=n.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=t.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid),!e.id){n.next=14;break}return this.ruleForm.id=e.id,n.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:a=n.sent,this.ruleForm=a.data;case 14:if(!e.cross){n.next=45;break}u=t.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 17:if((n.t1=n.t0()).done){n.next=45;break}if(o=n.t1.value,"yonghuming"!=o){n.next=23;break}return this.ruleForm.yonghuming=u[o],this.ro.yonghuming=!0,n.abrupt("continue",17);case 23:if("mima"!=o){n.next=27;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,n.abrupt("continue",17);case 27:if("xingming"!=o){n.next=31;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,n.abrupt("continue",17);case 31:if("xingbie"!=o){n.next=35;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,n.abrupt("continue",17);case 35:if("touxiang"!=o){n.next=39;break}return this.ruleForm.touxiang=u[o],this.ro.touxiang=!0,n.abrupt("continue",17);case 39:if("lianxidianhua"!=o){n.next=43;break}return this.ruleForm.lianxidianhua=u[o],this.ro.lianxidianhua=!0,n.abrupt("continue",17);case 43:n.next=17;break;case 45:this.styleChange();case 46:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(t){this.xingbieIndex=t.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var t=this;this.$api.upload((function(n){t.ruleForm.touxiang=t.$base.url+"upload/"+n.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=u(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.yonghuming){t.next=3;break}return this.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xingming){t.next=9;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if(!this.ruleForm.id){t.next=14;break}return t.next=12,this.$api.update("yonghu",this.ruleForm);case 12:t.next=16;break;case 14:return t.next=16,this.$api.add("yonghu",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var n=new Date,e=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===t?e-=60:"end"===t&&(e+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(e,"-").concat(i,"-").concat(r)},toggleTab:function(t){this.$refs[t].show()}}};n.default=s}).call(this,e("543d")["default"])},ab80:function(t,n,e){"use strict";e.r(n);var i=e("6cc4"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=r.a},af36:function(t,n,e){"use strict";(function(t){e("c89d"),e("921b");i(e("66fd"));var n=i(e("54fe"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},dded:function(t,n,e){"use strict";var i,r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}))}},[["af36","common/runtime","common/vendor"]]]);