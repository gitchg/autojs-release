!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){e.exports={VERSION:"3.0",CLIENT:"weibo",STATUS_NEED_ACTIVE:1,STATUS_NEED_LOGIN:2,log:"",curAct:"",curTitleContent:"",curComment:"键(shui)盘(jun)侠你们清楚自己在干嘛吗？",curName:"",deviceIMEI:"",nickname:"",curGroupId:0,curTitle:"",canReply:!1,mainActName:"com.sina.weibo.MainTabActivity",isLogined:!0,needExit:!1,maxReplyCount:2,curReplyCount:0,lastReplyTime:0,curMinReplyIntv:1800,curLoop:!1,isComment:1,curKeyword:null,curKeywords:["十年沧桑谁解"],itemLogin:"11698",itemJihuo:"1507",token:"01612967355ef542176c2740c0855e2a5921725c4701",exceptPhone:"170.171.180.198.165.166",curPhone:"",curLoginCode:"",curHotTextItem:"",curUsername:"",curPassword:"",curRegisterCode:"",itemRegister:"47028",config:{debug:!1,disabled:!1,canReply:!1,canReplyDisabled:!1,exit:!1,model:0,groupId:0,topOfGroup:10,groupDelay:2e3,subGroupId:-1,groupItems:["推荐","榜单","社会","搞笑","情感","时尚","校园","摄影","艺术","明星","美女","NBA"],keywords:["十年沧桑谁解"],addFollowRate:30,showDetialRate:5,maxReplyCount:2,minReplyIntv:1800,loop:!1,isComment:1,itemLogin:"11698",itemJihuo:"1507",itemRegister:"47028",exceptPhone:"170.171.180.198.165.166",token:"01612967355ef542176c2740c0855e2a5921725c4701"},PageEnum:{LOGIN:1,INPUT_CODE:2,ACCOUNT_CONFIRM:3,SELECT_CLASS:4,RECOMMEND:5,SIGEN:6,USER_CENTER:7,DETAIL:8,HOME_HOT:9,MINE:10,SETTING:11,ACCOUNTS:12,HOME_FOLLOW:13,HOME_SEARCH:14,SEARCH:15,SEARCH_HOT:16,SEARCH_TALK:17,SEARCH_TOP:18,SEARCH_SUPTALK:19,HOME_MESSAGE:20,USER_WEIBO:21,EDIT_SHARE:22,ADD_FOLLOW_WITH_SHARE:23,ACCOUNT_ERROR:24,WELCOME_CAMEBACK:25,WRITE_WEIBO:26,WELCOME_WEIBO:27,ACCOUNT_ERROR_2:28,ACCOUNT_ERROR_3:29,ACCOUNT_ERROR_4:30,HOME:31,ACCOUNT_ERROR_5:32,ACCOUNT_ERROR_6:33,REGISTER:35,ACCOUNT_SEND_CONFIRM:36,REGISTER_OK:37,UPDATED:38},STEP:{NOCHANGE:0,LOGIN:1,WRITE:3,LOGOUT:9,NICKNAME:2,ISSTEP:5,NEEDLOGOUT:6,LOGINED:7,RUNNING:8,BEFORE:9}}},function(e,t,n){var o=n(0),i=n(3),a={getConfig:function(){try{let e=o.curName,t=http.get("https://kapi.i-tax.ren/api/aichat/config?f="+o.CLIENT+"&n="+encodeURIComponent(e)+"&t="+(new Date).getTime()+"&d="+device.getIMEI()+"&v="+o.VERSION).body.string();if(t){let e=JSON.parse(t);e&&(e.disabled||(o.config=e),o.token=o.config.token?o.config.token:o.token,o.itemJihuo=o.config.itemJihuo?o.config.itemJihuo:o.itemJihuo,o.itemLogin=o.config.itemLogin?o.config.itemLogin:o.itemLogin,o.itemRegister=o.config.itemRegister?o.config.itemRegister:o.itemRegister,o.exceptPhone=o.config.exceptPhone?o.config.exceptPhone:o.exceptPhone,o.canReply=o.config.canReplyDisabled?o.canReply:o.config.canReply,o.config.debug?console.show():console.hide())}return t}catch(e){}},getKeyword:function(){try{let e=http.get("https://kapi.i-tax.ren/api/aichat/keyword?f="+o.CLIENT+"&n="+encodeURIComponent(o.curName)+"&t="+(new Date).getTime()+"&d="+device.getIMEI()+"&v="+o.VERSION).body.string();return e&&(o.curKeyword=e),e}catch(e){o.curKeyword=null}},getReplyMsg:function(e){try{let t=e||o.curTitleContent.substr(0,255),n=http.get("https://kapi.i-tax.ren/api/aichat/reply?f="+o.CLIENT+"&c="+encodeURIComponent(t)+"&t="+(new Date).getTime()+"&d="+device.getIMEI()+"&v="+o.VERSION).body.string();return o.curComment=n,n}catch(e){o.curComment=null}},getComment:function(){return this.postReplyMsg()},getLoginPhone:function(){return i.getPhone(o.itemLogin)},getActivePhone:function(){return i.getPhone(o.itemJihuo)},getLoginCode:function(){return i.getSMS(o.curPhone,o.itemLogin)},getHotTextItem:function(){let e=["推荐","榜单","社会","搞笑","情感","时尚","校园","摄影","艺术","明星","美女","NBA"];o.config&&o.config.groupItems&&o.config.groupItems.length>0&&(e=o.config.groupItems),o.curGroupId=0;let t=random(0,e.length-1);return o.config&&o.config.subGroupId>-1&&(t=o.config.subGroupId),o.curHotTextItem=e[t],e[t]},getGivenWeiboTitle:function(){return"青凌巴山越岭"},postReplyMsg:function(e){r=http.postJson("https://kapi.i-tax.ren/api/aichat/reply",{n:o.curName,c:e||o.curTitleContent,d:device.getIMEI(),t:(new Date).getTime(),v:o.VERSION,f:o.CLIENT});let t=r.body.string();return o.curComment=t,t},postUpdateStatus:function(e){r=http.postJson("https://kapi.i-tax.ren/api/aichat/status",{n:o.curName,s:e,d:device.getIMEI(),t:(new Date).getTime(),v:o.VERSION,f:o.CLIENT});let t=r.body.string();return o.curComment=t,t},getTuling:function(e){r=http.postJson("http://www.tuling123.com/openapi/api",{key:"65458a5df537443b89b31f1c03202a80",info:"你好啊",userid:"1"});let t=r.body.string();return toast(t),o.curComment=t,t},loginOk:function(e,t,n,i){try{let r=t;return http.get("https://kapi.i-tax.ren/api/aichat/loginok?f="+o.CLIENT+"&n="+encodeURIComponent(r)+"&msg="+encodeURIComponent(i)+"&t="+(new Date).getTime()+"&d="+device.getIMEI()+"&p="+e+"&tp="+n).body.string()}catch(e){}},getCode:function(e){try{e=e||o.curPhone;let t=name;return http.get("https://kapi.i-tax.ren/api/aichat/phone/code?f="+o.CLIENT+"&n="+encodeURIComponent(t)+"&t="+(new Date).getTime()+"&d="+device.getIMEI()+"&p="+e).body.string()}catch(e){}},getRegisterPhone:function(){return i.getPhone(o.itemRegister)},getRegisterCode:function(){return i.getSMS(o.curPhone,o.itemRegister)},getRegisterSendCode:function(){return i.sendSMS(o.curPhone,o.itemRegister,"注册验证")},getRegisterName:function(){let e=["Aaron","Abbott","Abel","Abner","Abraham","Adair","Adam","Adolph","Adonis","Alan","Albert","Aldrich","Alexander","Alfred","Alger","Allen","Alston","Alva","Alvin","Alvis","Amos","Andre","Andrew","Andy","Angelo","Augus","Ansel","Antony","Antonio","Archer","Archibald","Aries","Arlen","Armand","Armstrong","Arno","Arthur","Arvin","Asa","Atwood","Aubrey","August","Augustine","Avery"],t=e[random(0,e.length-1)]+random(1e4,99999);return t=t.toLowerCase(),toast("username:"+t),console.log("username:"+t),t},getRegisterPassword:function(){return"16181814"},getRegisterOk:function(){let e={name:o.curName,phone:o.curPhone,item:o.itemRegister,client:o.CLIENT};return console.log("register ok:",e),this.loginOk(o.curPhone,o.curName,"register",JSON.stringify(e))},finish:function(){let e={name:o.curName,phone:o.curPhone,item:o.itemRegister,client:o.CLIENT};return console.log("register ok:",e),this.loginOk(o.curPhone,o.curName,"register",JSON.stringify(e))}};e.exports=a},function(module,exports){var Utils={titleCase:function(e){return e.toLowerCase().split("_").map(function(e){return e.replace(e.charAt(0),e.charAt(0).toUpperCase())}).join("")},fill:function(e,t){for(var n=[],o=0;o<e;o+=1)n.push(JSON.parse(JSON.stringify(t)));return n},get:function(arr,name,value){return arr.find(function(obj){if(eval("obj."+name+" == value"))return obj})},isNull:function(e){return!e&&0!==e&&"boolean"!=typeof e}};module.exports=Utils},function(e,t,n){var o=n(0),i={_errorCode:{1001:"参数token不能为空",1002:"参数action不能为空",1003:"参数action错误",1004:"token失效",1005:"用户名或密码错误",1006:"用户名不能为空",1007:"密码不能为空",1008:"账户余额不足",1009:"账户被禁用",1010:"参数错误",1011:"账户待审核",1012:"登录数达到上限",2001:"参数itemid不能为空",2002:"项目不存在",2003:"项目未启用",2004:"暂时没有可用的号码",2005:"获取号码数量已达到上限",2006:"参数mobile不能为空",2007:"号码已被释放",2008:"号码已离线",2009:"发送内容不能为空",2010:"号码正在使用中",3001:"尚未收到短信",3002:"等待发送",3003:"正在发送",3004:"发送失败",3005:"订单不存在",3006:"专属通道不存在",3007:"专属通道未启用",3008:"专属通道密码与项目不匹配",9001:"系统错误",9002:"系统异常",9003:"系统繁忙"},getPhone:function(e){var t="http://api.fxhyd.cn/UserInterface.aspx?action=getmobile&token="+o.token+"&itemid="+e+"&excludeno="+o.exceptPhone+"&timestamp="+(new Date).getTime(),n=http.get(t);console.log("从平台获取手机号码code = "+n.statusCode);var i=n.body.string();if(console.log("从平台获取手机号码html = "+i),-1!=i.indexOf("success")){var r=(i=i.split("|"))[1];return console.log("手机号码=",r),r}return console.log(this._errorCode[i]),console.log("从平台获取手机号码异常,请检查网络或者token是否失效,脚本停止"),null},getSMS:function(e,t){for(var n=50,i=null,r=null,a="http://api.fxhyd.cn/UserInterface.aspx?action=getsms&token="+o.token+"&itemid="+t+"&mobile="+e+"&release=1&timestamp="+(new Date).getTime();n>0&&(i=http.get(a),console.log("从平台获取手机验证码code = "+i.statusCode),r=i.body.string(),console.log("从平台获取手机验证码html = "+r),toast(r),3001==r);)n-=1,sleep(3e3);if(r&&-1!=r.indexOf("success")){var l=(r=r.split("|"))[1].match(/\d{6}/g).join("");return console.log("验证码=",l),l}return console.log(this._errorCode[r]),console.log("从平台获取手机验证码异常,请检查网络或者token是否失效"),null},sendSMS:function(e,t,n){var i="http://api.fxhyd.cn/UserInterface.aspx?action=sendsms&token="+o.token+"&itemid="+t+"&mobile="+e+"&sms="+n+"&timestamp="+(new Date).getTime(),r=http.get(i);console.log("从手机号码发送code = "+r.statusCode);var a=r.body.string();return toast(a),console.log("从平台发送手机号码html = "+a),-1!=a.indexOf("success")?a:(console.log(this._errorCode[a]),console.log("从平台发送短信异常,请检查网络或者Env.是否失效,脚本停止"),null)},addPhoneBack:function(e,t){var n="http://api.fxhyd.cn/UserInterface.aspx?action=addignore&token="+o.token+"&itemid="+t+"&mobile="+e+"&timestamp="+(new Date).getTime(),i=http.get(n);console.log("拉黑手机号码code = "+i.statusCode);var r=i.body.string();if(console.log("拉黑手机号码html = "+r),-1==r.indexOf("success"))return console.log(this._errorCode[r]),console.log("拉黑手机号码异常,请检查网络或者token是否失效,脚本停止"),null;console.log("手机号码拉黑成功=",e)}};e.exports=i},function(module,exports,__webpack_require__){var Utils=__webpack_require__(2),Api=__webpack_require__(1),Env=__webpack_require__(0),operate={curPage:function(e){let t={name:"",pageid:0};for(let n in e)this.doExists(e[n].mark)&&(t=e[n]);return t},nextStep:function(e,t){let n={next:0,pageid:0,jobs:[]};for(let o in t){let i=t[o];i.pageid===e&&(n=i)}return n.next},isPage:function(e){return this.doExists(e)},build:function(item){let target=null;for(let k in item){let v=item[k];""!=v&&null!=v&&null!=v&&(target=target?eval("target."+k+"(v)"):eval(k+"(v)"))}return target},parseItem:function(e){let t=JSON.parse(JSON.stringify(e)),n=1;for(let o in e){let i=e[o];""!=i&&null!=i&&null!=i&&(t[o]=i.split("||"),n*=t[o].length)}let o=Utils.fill(n,e);for(let e in t){let i=t[e];if(Array.isArray(i))for(let t=0;t<i.length;t+=1)for(let r=0;r<n/i.length;r+=1){o[t*(n/i.length)+r][e]=i[t]}else for(let t=0;t<n;t+=1)o[t][e]=i}return o},findNode:function(e,t){let n=null;if(t&&!Utils.isNull(t.indexOf)){if(!Utils.isNull(t.parent)&&t.parent>0){n=this.build(e).findOne();let o=t.parent;for(;o>0;)n=n.parent,o--;n=n.children()}else n=this.build(e).find();n=this.indexOfNode(n,t)}else n=this.build(e).findOnce();return n||console.log("can not find ctrl",JSON.stringify(e),JSON.stringify(t)),n},indexOfNode:function(target,param){let maxTry=1;!Utils.isNull(param.indexOf.try)&&param.indexOf.try>-1&&(maxTry=param.indexOf.try);let tryt=maxTry;for(;tryt>0&&target.length<=0;)this.doSwipe({},{count:1}),target=this.build(mark).find(),tryt--;if(target.length>0)if("number"==typeof param.indexOf)target=-1==param.indexOf||param.indexOf>=target.length?target[target.length-1]:target[param.indexOf];else if("object"==typeof param.indexOf&&"object"==typeof param.indexOf.get)if(Utils.isNull(param.indexOf.tag))if(Utils.isNull(param.indexOf.default))target=target[0];else{let str=param.indexOf.default;target=eval("target.findOne("+param.indexOf.tag+"(str))")}else{let str=this.doGet(param.indexOf.get);target=eval("target.findOne("+param.indexOf.tag+"(str))")}else target=target[0];else target=null;for(;maxTry-tryt>0;)this.doSwipe({},{count:1,isUp:!0}),tryt++;return target},doClick:function(e,t){console.log("do click");let n=this.findNode(e,t);return n?n.clickable()?n.click():t&&t.clickChild?this.clickChild(n):this.clickParent(n):(console.log("not do click"),!1)},doTap:function(e,t){console.log("do tap");let n=this.findNode(e,t);return n?(Tap(n.bounds().centerX(),n.bounds().centerY()),sleep(500),Tap(n.bounds().centerX()+1,n.bounds().centerY()),Tap(n.bounds().centerX()-1,n.bounds().centerY()),Tap(n.bounds().centerX()+2,n.bounds().centerY()),Tap(n.bounds().centerX()-2,n.bounds().centerY()),!0):(console.log("not do tap"),!1)},doInput:function(e,t){console.log("do input");let n=this.findNode(e,t);if(n){Tap(n.bounds().centerX(),n.bounds().centerY()),sleep(1e3);let e="login_code";t&&!Utils.isNull(t.get)&&(e=t.get);let o=this.doGet(e);if(o){let e=o.split("");e.length>0&&setText(e[0]);for(let t=1;t<e.length;t++){let n=e[t];input(n),sleep(random(1e3,1500))}return!0}}else console.log("not do input");return!1},doSetText:function(e,t){console.log("do set text");let n=this.findNode(e,t);if(n){let e={name:"comment"};t&&!Utils.isNull(t.get)&&(e=t.get);let o=this.doGet(e);if(o)return n.setText(o)}else console.log("not do set text");return!1},doText:function(e,t){console.log("do text");let n=this.findNode(e,t);if(n){let e={name:"title_content"};t&&!Utils.isNull(t.set)&&(e=t.set);let o=n.text();return this.doSet(e,{default:o}),console.log(o.substr(0,100)),o}return console.log("not do text"),null},doDesc:function(e,t){console.log("do desc");let n=this.findNode(e,t);return n?(Env.curTitleContent=n.desc(),console.log(Env.curTitleContent.substr(0,100)),n.desc()):(console.log("not do desc"),null)},doSwipe:function(e,t){console.log("do swipe");let n=random(200,400),o=-1;t&&!Utils.isNull(t.count)&&t.count>-1&&(o=parseInt(t.count)),-1!=o&&null!=o&&null!=o&&""!=o||(o=random(1,3));let i=!1;for(t&&!Utils.isNull(t.isUp)&&(i=t.isUp);o>0;)console.log("swipe:"+o,i),i?Swipe(n+random(0,25),180+random(0,100),n+random(0,29),580+random(0,158),200+random(0,200)):Swipe(n+random(0,29),580+random(0,158),n+random(0,25),180+random(0,100),200+random(0,200)),sleep(random(500,1e3)),o-=1;return!0},doRefresh:function(e,t){return console.log("do refresh"),Swipe(310,250,310,600),sleep(1e3+random(0,2e3)),!0},doBack:function(e,t){return console.log("do back"),back(),!0},doSleep:function(e,t){let n=-1;return t&&!Utils.isNull(t.delay)&&t.delay>-1&&(n=parseInt(t.delay)),-1!=n&&null!=n&&null!=n&&""!=n||(n=random(1e3,2e3)),console.log("do sleep",n),sleep(n),!0},doEnter:function(){console.log("do enter"),KeyCode("KEYCODE_ENTER")},doWait:function(e,t){console.log("do wait for");let n=this.build(e),o="Wait For";return Utils.isNull(e.text)||(o+=":Text:"+e.text),Utils.isNull(e.desc)||(o+=":Desc:"+e.desc),Utils.isNull(e.id)||(o+=":Id:"+e.id),console.log(o),toast(o),n.waitFor()},doExists:function(e,t){let n=this.build(e);return!!n&&n.exists()},clickParent:function(e){if(e){let t=e.depth();for(;t>0&&null!=e;){if(e.clickable()){e.click(),t=-1;break}if(!e.parent()){t=-1;break}e=e.parent(),t-=1}if(-1==t)return!0}else console.log("not click parent");return!1},clickChild:function(e){if(e){if(e.clickable())return e.click();e.children().forEach(e=>{if(e.clickable())return e.click()})}else console.log("not click child");return!1},doSet:function(mark,param){if(console.log("do set"),mark&&!Utils.isNull(mark.name)){let valName="cur"+Utils.titleCase(mark.name),value="";return param&&!Utils.isNull(param.default)&&(value=param.default),eval("Env."+valName+"=value;")}return null},doGet:function(mark,param){if(console.log("do get"),mark&&!Utils.isNull(mark.name)){let valName="Env.cur"+Utils.titleCase(mark.name);if(Utils.isNull(mark.uri))return eval(valName);{"api"==mark.uri&&(valName=Utils.titleCase(mark.uri)+".get"+Utils.titleCase(mark.name)+"();");let rs=eval(valName),setName={name:mark.name};return param&&!Utils.isNull(param.set)&&(setName=param.set),this.doSet(setName,{default:rs}),rs}}return null},doFun:function({name:name,mark:mark,param:param}){let delay=1e3;if(param&&param.delay>-1&&(delay=param.delay),sleep(delay),name){let funName="do"+Utils.titleCase(name);return eval("this."+funName+"(mark,param);")}console.log("not do fun:"+name)},delay:function(){let e=!1!==arguments[0],t="number"==typeof arguments[0]?arguments[0]:1e3;e?(sleep(t),console.log("delay",t)):console.log("not delay")}};module.exports=operate},function(e,t,n){var o=n(0),i=n(1),r=n(2),a=n(4),l={_curPage:0,_curConf:null,_pageList:[],_curStep:0,_curJob:{},_needExit:!1,init:function(e){auto();var t=new RootAutomator;events.on("exit",function(){t.exit()});let n=e.package;currentPackage()!=n&&(launch(n),waitForPackage(n),sleep(5e3));let o=e.activity;r.isNull||(toast("Wait For Activity:",o),console.log("Wait For Activity:",o),waitForActivity(o)),i.getConfig(),toast("获取配置成功"),console.log("获取配置成功"),sleep(1e3)},main:function(e,t){for(this._curJob=e,this.init(this._curJob),"function"==typeof t&&t(this._curJob),o.CLIENT=this._curJob.CLIENT;!this._needExit;){this.nextStep();for(let e of this._curJob.default.steps)e.step==this._curStep&&this.run(JSON.parse(JSON.stringify(e)));sleep(3e3)}i.finish()},nextStep:function(){let e=a.curPage(this._curJob.pages);this._curPage!=e.pageid&&(e.operates&&e.operates.finish&&e.operates.finish.length>0&&this._pageList.push(e),this._curPage=e.pageid,this._curConf=e);let t=this._curJob.default.someone;for(let e of this._curJob.default.steps)if(e.step===this._curStep&&t.length>0){t=e.step.someone;break}this._curStep=a.nextStep(this._curPage,t),toast("找到："+e.name,this._curStep),console.log("找到："+e.name,this._curStep)},run:function(e){this.doPage(e,this._curConf),sleep(2e3)},doPage:function(e,t){let n=null;if(console.log("items.length start",e.must.length,this._curStep),t&&t.pageid&&e.must.length>0){for(let o in e.must)if(t.pageid===e.must[o].pageid){n=e.must[o],e.must.splice(o,1);break}if(null==n)for(let e in this._curJob.default.someone)if(t.pageid===this._curJob.default.someone[e].pageid){n=this._curJob.default.someone[e];break}if(null!=n){if(n.next&&(this._curStep=n.next),n&&n.jobs)for(let e of n.jobs){if(!a.isPage(t.mark))break;a.doFun(e)}r.isNull(n.exit)||!0!==n.exit||(this._needExit=!0)}}console.log("items.must.length end",e.must.length,this._curStep)},reset:function(){for(;;){let e=a.curPage(this._curJob.pages);if(o.PageEnum.HOME!=e.pageid){toast("找到："+e.name),console.log("找到："+e.name);break}this.doBack(),sleep(2e3)}},doBack:function(){a.doFun({name:"back"})},finishPage:function(e){result=!1;for(let t=e.length-1;t>=0;t--){let n=e[t];if(n.operates&&n.operates.finish)if(a.isPage(n.mark)){for(let e of n.operates.finish)a.doFun(e);e.splice(t,1),console.log("delete finish page:",n.name)}else console.log("finish, but not in right page:",n.name);sleep(2e3)}return e.length<=0&&(result=!1),console.log("finishPage:",JSON.stringify(e),result),result}};e.exports=l},,,,,,,function(e,t,n){e.exports=n(13)},function(e,t,n){var o=n(5),i=n(0),r={CLIENT:"百度地图-签到",package:"com.baidu.BaiduMap",activity:"com.baidu.baidumaps.MapsActivity",get default(){return{steps:[this.running],maxTimes:[-1],someone:[{next:i.STEP.RUNNING,pageid:i.PageEnum.UPDATED,jobs:this.pages.UPDATED.operates.next},{next:i.STEP.RUNNING,pageid:i.PageEnum.HOME,jobs:this.pages.HOME.operates.next},{next:i.STEP.RUNNING,pageid:i.PageEnum.MINE,jobs:this.pages.MINE.operates.next},{next:i.STEP.RUNNING,pageid:i.PageEnum.SIGEN,jobs:this.pages.SIGEN.operates.next},{next:i.STEP.RUNNING,pageid:i.PageEnum.HOME_MESSAGE,jobs:this.pages.HOME_MESSAGE.operates.next,exit:!0}]}},get running(){return{step:i.STEP.RUNNING,must:[{pageid:i.PageEnum.UPDATED,jobs:this.pages.UPDATED.operates.next},{pageid:i.PageEnum.HOME,jobs:this.pages.HOME.operates.next},{pageid:i.PageEnum.MINE,jobs:this.pages.MINE.operates.next},{pageid:i.PageEnum.SIGEN,jobs:this.pages.SIGEN.operates.next},{pageid:i.PageEnum.HOME_MESSAGE,jobs:this.pages.HOME_MESSAGE.operates.next,exit:!0}],someone:[]}},pages:{UPDATED:{desc:"关闭更新弹窗",name:"关闭更新弹窗",pageid:i.PageEnum.UPDATED,mark:{id:"cancel_update"},next:[],operates:{next:[{name:"click",mark:{id:"cancel_update"}}]}},MINE:{desc:"个人中心",name:"个人中心",pageid:i.PageEnum.MINE,mark:{id:"user_info_user_head_icon"},next:[],operates:{next:[{name:"click",mark:{id:"ll_lv_signin"}},{name:"sleep"},{name:"click",mark:{text:"不选择地点"}},{name:"sleep"}],finish:[{name:"back"}]}},HOME:{desc:"首页",name:"首页",pageid:i.PageEnum.HOME,mark:{id:"user_head_portrait_icon"},next:[],operates:{next:[{name:"click",mark:{id:"user_head_portrait_icon"}},{name:"sleep"}],finish:[{name:"back"}]}},SIGEN:{desc:"我在这里",name:"我在这里",pageid:i.PageEnum.SIGEN,mark:{id:"tv_title_text",text:"我在这里"},next:[],operates:{next:[{name:"click",mark:{text:"不选择地点"}},{name:"sleep"},{name:"click",mark:{id:"sign_name"}},{name:"sleep"}]}},HOME_MESSAGE:{desc:"聊天页面",name:"聊天页面",pageid:i.PageEnum.HOME_MESSAGE,mark:{id:"user_sys_question_btn"},next:[],operates:{next:[{name:"click",mark:{id:"iv_left_btn"}},{name:"sleep"}],finish:[{name:"back"}]}}}};var a=JSON.parse(JSON.stringify(r));o.main(a,function(){sleep(1e3)})}]);