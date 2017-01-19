// Compiled by ClojureScript 1.9.89 {}
goog.provide('tripweb.login');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_bootstrap.input');
goog.require('om_bootstrap.panel');
goog.require('om_tools.dom');
goog.require('goog.history.EventType');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('tripweb.settings');
goog.require('tripweb.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('om_bootstrap.button');
goog.require('net.unit8.tower');
cljs.core.enable_console_print_BANG_.call(null);
tripweb.login.application = document.getElementById("app");
tripweb.login.set_html_BANG_ = (function tripweb$login$set_html_BANG_(el,content){
return (el["innerHTML"] = content);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var history_47171 = (new goog.History());
var navigation_47172 = goog.history.EventType.NAVIGATE;
goog.events.listen(history_47171,navigation_47172,((function (history_47171,navigation_47172){
return (function (p1__47169_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__47169_SHARP_.token);
});})(history_47171,navigation_47172))
);

var G__47170_47173 = history_47171;
G__47170_47173.setEnabled(true);

tripweb.login.ch = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(2)));
tripweb.login.jquery = $;
if(typeof tripweb.login.app_state !== 'undefined'){
} else {
tripweb.login.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),"",new cljs.core.Keyword(null,"modalText","modalText",1729748738),"Modal Text",new cljs.core.Keyword(null,"modalTitle","modalTitle",-1534566551),"Modal Title",new cljs.core.Keyword(null,"state","state",-1988618099),(0)], null));
}
tripweb.login.setLoginError = (function tripweb$login$setLoginError(error){
cljs.core.swap_BANG_.call(null,tripweb.login.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(error));

cljs.core.swap_BANG_.call(null,tripweb.login.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modalTitle","modalTitle",-1534566551)], null),[cljs.core.str("Login Error")].join(''));

cljs.core.swap_BANG_.call(null,tripweb.login.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modalText","modalText",1729748738)], null),[cljs.core.str(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(error))].join(''));

cljs.core.swap_BANG_.call(null,tripweb.login.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),(0));

return tripweb.login.jquery.call(null,(function (){
return tripweb.login.jquery.call(null,"#loginModal").modal();
}));
});
tripweb.login.OnLoginError = (function tripweb$login$OnLoginError(response){
var newdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.get.call(null,new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(response),"error")], null);
return tripweb.login.setLoginError.call(null,newdata);
});
tripweb.login.error_handler = (function tripweb$login$error_handler(p__47174){
var map__47177 = p__47174;
var map__47177__$1 = ((((!((map__47177 == null)))?((((map__47177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47177):map__47177);
var status = cljs.core.get.call(null,map__47177__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__47177__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
tripweb.login.menus_to_map = (function tripweb$login$menus_to_map(menu){
var newdata = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"menucode","menucode",354970839),cljs.core.get.call(null,menu,"menucode"),new cljs.core.Keyword(null,"menulevel","menulevel",-541361409),cljs.core.get.call(null,menu,"menulevel"),new cljs.core.Keyword(null,"menuopt","menuopt",-643854018),cljs.core.get.call(null,menu,"menuopt"),new cljs.core.Keyword(null,"menuorder","menuorder",1787527356),cljs.core.get.call(null,menu,"menuorder"),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,menu,"name"),new cljs.core.Keyword(null,"submenu","submenu",2142563344),cljs.core.get.call(null,menu,"submenu"),new cljs.core.Keyword(null,"urltarget","urltarget",-1451155262),cljs.core.get.call(null,menu,"urltarget")], null);
return newdata;
});
tripweb.login.OnGetSysMenu = (function tripweb$login$OnGetSysMenu(response){
var newdata = cljs.core.map.call(null,tripweb.login.menus_to_map,response);
cljs.core.swap_BANG_.call(null,tripweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sysmenus","sysmenus",-832075038)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,newdata));

console.log(newdata);

return cljs.core.async.put_BANG_.call(null,tripweb.login.ch,(45));
});
tripweb.login.reqsysmenu = (function tripweb$login$reqsysmenu(){
return ajax.core.GET.call(null,[cljs.core.str(tripweb.settings.apipath),cljs.core.str("api/sysmenu")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),tripweb.login.OnGetSysMenu,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tripweb.login.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.core.app_state)))))].join('')], null)], null));
});
tripweb.login.OnGetUser = (function tripweb$login$OnGetUser(response){
var newdata = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"userid","userid",1974246085),cljs.core.get.call(null,response,"userid"),new cljs.core.Keyword(null,"datemask","datemask",-858682774),cljs.core.get.call(null,response,"datemask"),new cljs.core.Keyword(null,"timemask","timemask",1497972182),cljs.core.get.call(null,response,"timemask"),new cljs.core.Keyword(null,"language","language",-1591107564),cljs.core.get.call(null,response,"language")], null);
cljs.core.swap_BANG_.call(null,tripweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"User","User",837761458)], null),newdata);

return tripweb.login.reqsysmenu.call(null);
});
tripweb.login.requser = (function tripweb$login$requser(){
return ajax.core.GET.call(null,[cljs.core.str(tripweb.settings.apipath),cljs.core.str("api/user")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),tripweb.login.OnGetUser,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tripweb.login.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.core.app_state)))))].join('')], null)], null));
});
tripweb.login.OnGetTrips = (function tripweb$login$OnGetTrips(response){
return cljs.core.swap_BANG_.call(null,tripweb.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"trips","trips",477933849),cljs.core.get.call(null,response,(0)));
});
tripweb.login.reqtrips = (function tripweb$login$reqtrips(){
return ajax.core.GET.call(null,[cljs.core.str(tripweb.settings.apipath),cljs.core.str("api/trip?login="),cljs.core.str(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.core.app_state))))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),tripweb.login.OnGetTrips,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tripweb.login.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.core.app_state)))))].join('')], null)], null));
});
tripweb.login.OnLogin = (function tripweb$login$OnLogin(response){
var newdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.get.call(null,response,cljs.core.keyword.call(null,"access_token")),new cljs.core.Keyword(null,"expires","expires",1393008816),cljs.core.get.call(null,response,"expires_in")], null);
console.log([cljs.core.str(newdata)].join(''));

cljs.core.swap_BANG_.call(null,tripweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215)], null),newdata);

cljs.core.swap_BANG_.call(null,tripweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),(1));

tripweb.login.reqtrips.call(null);

return tripweb.login.requser.call(null);
});
tripweb.login.dologin = (function tripweb$login$dologin(username,password){
ajax.core.POST.call(null,[cljs.core.str(tripweb.settings.apipath),cljs.core.str("token")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),tripweb.login.OnLogin,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tripweb.login.OnLoginError,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null),new cljs.core.Keyword(null,"body","body",-2049205669),[cljs.core.str("grant_type=password&username="),cljs.core.str(username),cljs.core.str("&password="),cljs.core.str(password)].join('')], null));

return cljs.core.swap_BANG_.call(null,tripweb.login.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null),(2));
});
tripweb.login.checklogin = (function tripweb$login$checklogin(owner){
var theUserName = om.core.get_node.call(null,owner,"txtUserName").value;
var thePassword = om.core.get_node.call(null,owner,"txtPassword").value;
console.log([cljs.core.str(theUserName)].join(''));

return tripweb.login.dologin.call(null,[cljs.core.str(theUserName)].join(''),[cljs.core.str(thePassword)].join(''));
});
tripweb.login.addModal = (function tripweb$login$addModal(){
return om_tools.dom.element.call(null,React.DOM.div,cljs.core.apply.call(null,React.DOM.div,{"id": "loginModal", "className": "modal fade", "role": "dialog"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-dialog"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"className","className",-1983287057),"close",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null)),cljs.core.apply.call(null,React.DOM.h4,{"className": "modal-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"modalTitle","modalTitle",-1534566551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.login.app_state))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.p,new cljs.core.Keyword(null,"modalText","modalText",1729748738).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.login.app_state)),cljs.core.PersistentVector.EMPTY)],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-default",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"Close")],null))))],null))))],null))))],null)))),cljs.core.PersistentVector.EMPTY);
});

var ufv___47195 = schema.utils.use_fn_validation;
var output_schema47180_47196 = schema.core.Any;
var input_schema47181_47197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker47182_47198 = schema.core.checker.call(null,input_schema47181_47197);
var output_checker47183_47199 = schema.core.checker.call(null,output_schema47180_47196);
/**
 * Inputs: [data owner]
 */
tripweb.login.login_page_view = ((function (ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function tripweb$login$login_page_view(G__47184,G__47185){
var validate__32480__auto__ = ufv___47195.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___47200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47184,G__47185], null);
var temp__4657__auto___47201 = input_checker47182_47198.call(null,args__32481__auto___47200);
if(cljs.core.truth_(temp__4657__auto___47201)){
var error__32482__auto___47202 = temp__4657__auto___47201;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"login-page-view","login-page-view",1666816510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___47202)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47181_47197,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___47200,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47202], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var data = G__47184;
var owner = G__47185;
while(true){
if(typeof tripweb.login.t_tripweb$login47189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
tripweb.login.t_tripweb$login47189 = (function (validate__32480__auto__,owner,data,input_schema47181,output_schema47180,G__47184,output_checker47183,input_checker47182,G__47185,ufv__,login_page_view,meta47190){
this.validate__32480__auto__ = validate__32480__auto__;
this.owner = owner;
this.data = data;
this.input_schema47181 = input_schema47181;
this.output_schema47180 = output_schema47180;
this.G__47184 = G__47184;
this.output_checker47183 = output_checker47183;
this.input_checker47182 = input_checker47182;
this.G__47185 = G__47185;
this.ufv__ = ufv__;
this.login_page_view = login_page_view;
this.meta47190 = meta47190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripweb.login.t_tripweb$login47189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function (_47191,meta47190__$1){
var self__ = this;
var _47191__$1 = this;
return (new tripweb.login.t_tripweb$login47189(self__.validate__32480__auto__,self__.owner,self__.data,self__.input_schema47181,self__.output_schema47180,self__.G__47184,self__.output_checker47183,self__.input_checker47182,self__.G__47185,self__.ufv__,self__.login_page_view,meta47190__$1));
});})(validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

tripweb.login.t_tripweb$login47189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function (_47191){
var self__ = this;
var _47191__$1 = this;
return self__.meta47190;
});})(validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

tripweb.login.t_tripweb$login47189.prototype.om$core$IDisplayName$ = true;

tripweb.login.t_tripweb$login47189.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function (_){
var self__ = this;
var ___$1 = this;
return "login-page-view";
});})(validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

tripweb.login.t_tripweb$login47189.prototype.om$core$IDidUpdate$ = true;

tripweb.login.t_tripweb$login47189.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;
return console.log("starting login screen");
});})(validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

tripweb.login.t_tripweb$login47189.prototype.om$core$IDidMount$ = true;

tripweb.login.t_tripweb$login47189.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.get_node.call(null,self__.owner,"txtUserName").focus();
});})(validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

tripweb.login.t_tripweb$login47189.prototype.om$core$IRender$ = true;

tripweb.login.t_tripweb$login47189.prototype.om$core$IRender$render$arity$1 = ((function (validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "container", "style": {"width": "100%", "paddingTop": "283px", "backgroundImage": "url(/images/loginbackground.png)", "backgroundSize": "cover"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.form,{"className": "form-signin"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"type": "text", "ref": "txtUserName", "defaultValue": tripweb.settings.demouser, "className": "form-control", "placeholder": "User Name"}),om.dom.input.call(null,{"className": "form-control", "ref": "txtPassword", "id": "txtPassword", "defaultValue": om_tools.dom.format_opts.call(null,tripweb.settings.demopassword), "type": "password", "placeholder": "Password"}),React.DOM.button({"className": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.login.app_state)),(0)))?"btn btn-lg btn-primary btn-block":"btn btn-lg btn-primary btn-block m-progress"), "type": "button", "onClick": ((function (___$1,validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function (e){
return tripweb.login.checklogin.call(null,self__.owner);
});})(___$1,validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
},"Login")],null)))),tripweb.login.addModal.call(null),React.DOM.div({"style": {"marginBottom": "200px"}})],null))));
});})(validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

tripweb.login.t_tripweb$login47189.getBasis = ((function (validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-schema47181","input-schema47181",-1673735159,null),new cljs.core.Symbol(null,"output-schema47180","output-schema47180",485012777,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__47184","G__47184",-1240482667,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker47183","output-checker47183",903582582,null),new cljs.core.Symbol(null,"input-checker47182","input-checker47182",-1728508422,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__47185","G__47185",1785056732,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),cljs.core.with_meta(new cljs.core.Symbol(null,"login-page-view","login-page-view",1666816510,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema47180","output-schema47180",485012777,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema47181","input-schema47181",-1673735159,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"meta47190","meta47190",304020106,null)], null);
});})(validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

tripweb.login.t_tripweb$login47189.cljs$lang$type = true;

tripweb.login.t_tripweb$login47189.cljs$lang$ctorStr = "tripweb.login/t_tripweb$login47189";

tripweb.login.t_tripweb$login47189.cljs$lang$ctorPrWriter = ((function (validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"tripweb.login/t_tripweb$login47189");
});})(validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

tripweb.login.__GT_t_tripweb$login47189 = ((function (validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199){
return (function tripweb$login$login_page_view_$___GT_t_tripweb$login47189(validate__32480__auto____$1,owner__$1,data__$1,input_schema47181__$1,output_schema47180__$1,G__47184__$1,output_checker47183__$1,input_checker47182__$1,G__47185__$1,ufv____$1,login_page_view__$1,meta47190){
return (new tripweb.login.t_tripweb$login47189(validate__32480__auto____$1,owner__$1,data__$1,input_schema47181__$1,output_schema47180__$1,G__47184__$1,output_checker47183__$1,input_checker47182__$1,G__47185__$1,ufv____$1,login_page_view__$1,meta47190));
});})(validate__32480__auto__,ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

}

return (new tripweb.login.t_tripweb$login47189(validate__32480__auto__,owner,data,input_schema47181_47197,output_schema47180_47196,G__47184,output_checker47183_47199,input_checker47182_47198,G__47185,ufv___47195,tripweb$login$login_page_view,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___47203 = output_checker47183_47199.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___47203)){
var error__32482__auto___47204 = temp__4657__auto___47203;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"login-page-view","login-page-view",1666816510,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___47204)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47180_47196,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47204], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___47195,output_schema47180_47196,input_schema47181_47197,input_checker47182_47198,output_checker47183_47199))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tripweb.login.login_page_view),schema.core.make_fn_schema.call(null,output_schema47180_47196,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47181_47197], null)));

tripweb.login.__GT_login_page_view = (function tripweb$login$__GT_login_page_view(var_args){
var args47192 = [];
var len__25947__auto___47205 = arguments.length;
var i__25948__auto___47206 = (0);
while(true){
if((i__25948__auto___47206 < len__25947__auto___47205)){
args47192.push((arguments[i__25948__auto___47206]));

var G__47207 = (i__25948__auto___47206 + (1));
i__25948__auto___47206 = G__47207;
continue;
} else {
}
break;
}

var G__47194 = args47192.length;
switch (G__47194) {
case 1:
return tripweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47192.length)].join('')));

}
});

tripweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,tripweb.login.login_page_view,cursor__36194__auto__);
});

tripweb.login.__GT_login_page_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m47179){
return om.core.build.call(null,tripweb.login.login_page_view,cursor__36194__auto__,m47179);
});

tripweb.login.__GT_login_page_view.cljs$lang$maxFixedArity = 2;

if(typeof tripweb.login.website_view !== 'undefined'){
} else {
tripweb.login.website_view = (function (){var method_table__25797__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25798__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25799__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25801__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tripweb.login","website-view"),((function (method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__,hierarchy__25801__auto__){
return (function (data,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,data,null))?cljs.core.deref.call(null,tripweb.core.app_state):cljs.core.deref.call(null,data)));
});})(method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__,hierarchy__25801__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25801__auto__,method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__));
})();
}
cljs.core._add_method.call(null,tripweb.login.website_view,(0),(function (data,owner){
return tripweb.login.login_page_view.call(null,data,owner);
}));
cljs.core._add_method.call(null,tripweb.login.website_view,(1),(function (data,owner){
return tripweb.login.login_page_view.call(null,data,owner);
}));
var action__35970__auto___47215 = (function (params__35971__auto__){
if(cljs.core.map_QMARK_.call(null,params__35971__auto__)){
var map__47209 = params__35971__auto__;
var map__47209__$1 = ((((!((map__47209 == null)))?((((map__47209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47209):map__47209);
return om.core.root.call(null,tripweb.login.login_page_view,tripweb.login.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35971__auto__)){
var vec__47211 = params__35971__auto__;
return om.core.root.call(null,tripweb.login.login_page_view,tripweb.login.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__35970__auto___47215);

tripweb.login.login_page = ((function (action__35970__auto___47215){
return (function tripweb$login$login_page(var_args){
var args__25954__auto__ = [];
var len__25947__auto___47216 = arguments.length;
var i__25948__auto___47217 = (0);
while(true){
if((i__25948__auto___47217 < len__25947__auto___47216)){
args__25954__auto__.push((arguments[i__25948__auto___47217]));

var G__47218 = (i__25948__auto___47217 + (1));
i__25948__auto___47217 = G__47218;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return tripweb.login.login_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(action__35970__auto___47215))
;

tripweb.login.login_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__35970__auto___47215){
return (function (args__35969__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/login",args__35969__auto__);
});})(action__35970__auto___47215))
;

tripweb.login.login_page.cljs$lang$maxFixedArity = (0);

tripweb.login.login_page.cljs$lang$applyTo = ((function (action__35970__auto___47215){
return (function (seq47214){
return tripweb.login.login_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47214));
});})(action__35970__auto___47215))
;

tripweb.login.main = (function tripweb$login$main(){
return document.location = "#/login";
});
var action__35970__auto___47224 = (function (params__35971__auto__){
if(cljs.core.map_QMARK_.call(null,params__35971__auto__)){
var map__47219 = params__35971__auto__;
var map__47219__$1 = ((((!((map__47219 == null)))?((((map__47219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47219):map__47219);
return tripweb.login.set_html_BANG_.call(null,tripweb.login.application,"<h1>LOL! YOU LOST!</h1>");
} else {
if(cljs.core.vector_QMARK_.call(null,params__35971__auto__)){
var vec__47221 = params__35971__auto__;
return tripweb.login.set_html_BANG_.call(null,tripweb.login.application,"<h1>LOL! YOU LOST!</h1>");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__35970__auto___47224);

tripweb.login.main.call(null);

//# sourceMappingURL=login.js.map?rel=1484805919244