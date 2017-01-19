// Compiled by ClojureScript 1.9.89 {}
goog.provide('tripweb.users');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('goog.History');
goog.require('tripweb.settings');
goog.require('tripweb.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('net.unit8.tower');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tripweb.users.app_state !== 'undefined'){
} else {
tripweb.users.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"trips","trips",477933849),cljs.core.PersistentVector.EMPTY], null));
}
tripweb.users.OnGetUsers = (function tripweb$users$OnGetUsers(response){
cljs.core.swap_BANG_.call(null,tripweb.users.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.get.call(null,response,"Users"));

return console.log(new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.users.app_state)));
});
tripweb.users.error_handler = (function tripweb$users$error_handler(p__36551){
var map__36554 = p__36551;
var map__36554__$1 = ((((!((map__36554 == null)))?((((map__36554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36554):map__36554);
var status = cljs.core.get.call(null,map__36554__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__36554__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
tripweb.users.getUsers = (function tripweb$users$getUsers(data){
return ajax.core.GET.call(null,[cljs.core.str(tripweb.settings.apipath),cljs.core.str("api/user")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),tripweb.users.OnGetUsers,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tripweb.users.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.core.app_state)))))].join('')], null)], null));
});

var ufv___36572 = schema.utils.use_fn_validation;
var output_schema36557_36573 = schema.core.Any;
var input_schema36558_36574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36559_36575 = schema.core.checker.call(null,input_schema36558_36574);
var output_checker36560_36576 = schema.core.checker.call(null,output_schema36557_36573);
/**
 * Inputs: [data owner]
 */
tripweb.users.showusers_view = ((function (ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576){
return (function tripweb$users$showusers_view(G__36561,G__36562){
var validate__32480__auto__ = ufv___36572.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___36577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36561,G__36562], null);
var temp__4657__auto___36578 = input_checker36559_36575.call(null,args__32481__auto___36577);
if(cljs.core.truth_(temp__4657__auto___36578)){
var error__32482__auto___36579 = temp__4657__auto___36578;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showusers-view","showusers-view",2067057673,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36579)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36558_36574,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___36577,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36579], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var data = G__36561;
var owner = G__36562;
while(true){
if(typeof tripweb.users.t_tripweb$users36566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
tripweb.users.t_tripweb$users36566 = (function (validate__32480__auto__,owner,G__36562,data,showusers_view,input_schema36558,G__36561,output_checker36560,input_checker36559,output_schema36557,ufv__,meta36567){
this.validate__32480__auto__ = validate__32480__auto__;
this.owner = owner;
this.G__36562 = G__36562;
this.data = data;
this.showusers_view = showusers_view;
this.input_schema36558 = input_schema36558;
this.G__36561 = G__36561;
this.output_checker36560 = output_checker36560;
this.input_checker36559 = input_checker36559;
this.output_schema36557 = output_schema36557;
this.ufv__ = ufv__;
this.meta36567 = meta36567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripweb.users.t_tripweb$users36566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576){
return (function (_36568,meta36567__$1){
var self__ = this;
var _36568__$1 = this;
return (new tripweb.users.t_tripweb$users36566(self__.validate__32480__auto__,self__.owner,self__.G__36562,self__.data,self__.showusers_view,self__.input_schema36558,self__.G__36561,self__.output_checker36560,self__.input_checker36559,self__.output_schema36557,self__.ufv__,meta36567__$1));
});})(validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576))
;

tripweb.users.t_tripweb$users36566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576){
return (function (_36568){
var self__ = this;
var _36568__$1 = this;
return self__.meta36567;
});})(validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576))
;

tripweb.users.t_tripweb$users36566.prototype.om$core$IDisplayName$ = true;

tripweb.users.t_tripweb$users36566.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576){
return (function (_){
var self__ = this;
var ___$1 = this;
return "showusers-view";
});})(validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576))
;

tripweb.users.t_tripweb$users36566.prototype.om$core$IRender$ = true;

tripweb.users.t_tripweb$users36566.prototype.om$core$IRender$render$arity$1 = ((function (validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "list-group", "style": {"display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576){
return (function (item){
return om_tools.dom.element.call(null,React.DOM.span,cljs.core.apply.call(null,React.DOM.a,{"className": "list-group-item", "href": om_tools.dom.format_opts.call(null,[cljs.core.str("#/tripdetail/"),cljs.core.str(cljs.core.get.call(null,item,"tripid"))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h4({"className": "list-group-item-heading", "dangerouslySetInnerHTML": {"__html": tripweb.users.setItemSubject.call(null,item)}},null),cljs.core.apply.call(null,React.DOM.h6,{"className": "paddingleft2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,item,"senddate")],null))))],null)))),cljs.core.PersistentVector.EMPTY);
});})(___$1,validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576))
,new cljs.core.Keyword(null,"trips","trips",477933849).cljs$core$IFn$_invoke$arity$1(self__.data))],null))));
});})(validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576))
;

tripweb.users.t_tripweb$users36566.getBasis = ((function (validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36562","G__36562",-1947619034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"showusers-view","showusers-view",2067057673,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema36557","output-schema36557",1927816408,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema36558","input-schema36558",1554579690,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"input-schema36558","input-schema36558",1554579690,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36561","G__36561",-283128400,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker36560","output-checker36560",1060195120,null),new cljs.core.Symbol(null,"input-checker36559","input-checker36559",2019572531,null),new cljs.core.Symbol(null,"output-schema36557","output-schema36557",1927816408,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta36567","meta36567",669969543,null)], null);
});})(validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576))
;

tripweb.users.t_tripweb$users36566.cljs$lang$type = true;

tripweb.users.t_tripweb$users36566.cljs$lang$ctorStr = "tripweb.users/t_tripweb$users36566";

tripweb.users.t_tripweb$users36566.cljs$lang$ctorPrWriter = ((function (validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"tripweb.users/t_tripweb$users36566");
});})(validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576))
;

tripweb.users.__GT_t_tripweb$users36566 = ((function (validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576){
return (function tripweb$users$showusers_view_$___GT_t_tripweb$users36566(validate__32480__auto____$1,owner__$1,G__36562__$1,data__$1,showusers_view__$1,input_schema36558__$1,G__36561__$1,output_checker36560__$1,input_checker36559__$1,output_schema36557__$1,ufv____$1,meta36567){
return (new tripweb.users.t_tripweb$users36566(validate__32480__auto____$1,owner__$1,G__36562__$1,data__$1,showusers_view__$1,input_schema36558__$1,G__36561__$1,output_checker36560__$1,input_checker36559__$1,output_schema36557__$1,ufv____$1,meta36567));
});})(validate__32480__auto__,ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576))
;

}

return (new tripweb.users.t_tripweb$users36566(validate__32480__auto__,owner,G__36562,data,tripweb$users$showusers_view,input_schema36558_36574,G__36561,output_checker36560_36576,input_checker36559_36575,output_schema36557_36573,ufv___36572,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___36580 = output_checker36560_36576.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___36580)){
var error__32482__auto___36581 = temp__4657__auto___36580;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showusers-view","showusers-view",2067057673,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36581)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36557_36573,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36581], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___36572,output_schema36557_36573,input_schema36558_36574,input_checker36559_36575,output_checker36560_36576))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tripweb.users.showusers_view),schema.core.make_fn_schema.call(null,output_schema36557_36573,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36558_36574], null)));

tripweb.users.__GT_showusers_view = (function tripweb$users$__GT_showusers_view(var_args){
var args36569 = [];
var len__25947__auto___36582 = arguments.length;
var i__25948__auto___36583 = (0);
while(true){
if((i__25948__auto___36583 < len__25947__auto___36582)){
args36569.push((arguments[i__25948__auto___36583]));

var G__36584 = (i__25948__auto___36583 + (1));
i__25948__auto___36583 = G__36584;
continue;
} else {
}
break;
}

var G__36571 = args36569.length;
switch (G__36571) {
case 1:
return tripweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36569.length)].join('')));

}
});

tripweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,tripweb.users.showusers_view,cursor__36194__auto__);
});

tripweb.users.__GT_showusers_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m36556){
return om.core.build.call(null,tripweb.users.showusers_view,cursor__36194__auto__,m36556);
});

tripweb.users.__GT_showusers_view.cljs$lang$maxFixedArity = 2;

tripweb.users.onMount = (function tripweb$users$onMount(data){
tripweb.users.getTrips.call(null,data);

return cljs.core.swap_BANG_.call(null,tripweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603)], null),"Trips");
});

var ufv___36602 = schema.utils.use_fn_validation;
var output_schema36587_36603 = schema.core.Any;
var input_schema36588_36604 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36589_36605 = schema.core.checker.call(null,input_schema36588_36604);
var output_checker36590_36606 = schema.core.checker.call(null,output_schema36587_36603);
/**
 * Inputs: [data owner]
 */
tripweb.users.users_view = ((function (ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function tripweb$users$users_view(G__36591,G__36592){
var validate__32480__auto__ = ufv___36602.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___36607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36591,G__36592], null);
var temp__4657__auto___36608 = input_checker36589_36605.call(null,args__32481__auto___36607);
if(cljs.core.truth_(temp__4657__auto___36608)){
var error__32482__auto___36609 = temp__4657__auto___36608;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-view","users-view",2008055244,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36609)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36588_36604,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___36607,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36609], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var data = G__36591;
var owner = G__36592;
while(true){
if(typeof tripweb.users.t_tripweb$users36596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
tripweb.users.t_tripweb$users36596 = (function (output_checker36590,validate__32480__auto__,owner,data,users_view,input_checker36589,G__36591,G__36592,input_schema36588,output_schema36587,ufv__,meta36597){
this.output_checker36590 = output_checker36590;
this.validate__32480__auto__ = validate__32480__auto__;
this.owner = owner;
this.data = data;
this.users_view = users_view;
this.input_checker36589 = input_checker36589;
this.G__36591 = G__36591;
this.G__36592 = G__36592;
this.input_schema36588 = input_schema36588;
this.output_schema36587 = output_schema36587;
this.ufv__ = ufv__;
this.meta36597 = meta36597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripweb.users.t_tripweb$users36596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function (_36598,meta36597__$1){
var self__ = this;
var _36598__$1 = this;
return (new tripweb.users.t_tripweb$users36596(self__.output_checker36590,self__.validate__32480__auto__,self__.owner,self__.data,self__.users_view,self__.input_checker36589,self__.G__36591,self__.G__36592,self__.input_schema36588,self__.output_schema36587,self__.ufv__,meta36597__$1));
});})(validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
;

tripweb.users.t_tripweb$users36596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function (_36598){
var self__ = this;
var _36598__$1 = this;
return self__.meta36597;
});})(validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
;

tripweb.users.t_tripweb$users36596.prototype.om$core$IDisplayName$ = true;

tripweb.users.t_tripweb$users36596.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function (_){
var self__ = this;
var ___$1 = this;
return "users-view";
});})(validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
;

tripweb.users.t_tripweb$users36596.prototype.om$core$IWillMount$ = true;

tripweb.users.t_tripweb$users36596.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function (_){
var self__ = this;
var ___$1 = this;
return tripweb.users.onMount.call(null,self__.data);
});})(validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
;

tripweb.users.t_tripweb$users36596.prototype.om$core$IRender$ = true;

tripweb.users.t_tripweb$users36596.prototype.om$core$IRender$render$arity$1 = ((function (validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var styleprimary = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"70px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,tripweb.core.website_view,tripweb.core.app_state,cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,cljs.core.assoc.call(null,styleprimary,new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function (e){
return tripweb.users.displaymessages.call(null,e);
});})(style,styleprimary,___$1,validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-10"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"style": {"float": "left"}, "className": "glyphicon glyphicon-chevron-down"}),React.DOM.span({"style": {"paddingLeft": "5px"}},"\u6211\u7684\u6D88\u606F")],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"className": "badge", "style": {"float": "right"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(new cljs.core.Keyword(null,"msgcount","msgcount",-358064536).cljs$core$IFn$_invoke$arity$1(self__.data))].join('')],null))))],null))))],null))))],null)))),om.core.build.call(null,tripweb.users.showusers_view,self__.data,cljs.core.PersistentArrayMap.EMPTY)],null)))],null)));
});})(validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
;

tripweb.users.t_tripweb$users36596.getBasis = ((function (validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker36590","output-checker36590",-1767195135,null),new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"users-view","users-view",2008055244,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema36587","output-schema36587",-781442826,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema36588","input-schema36588",895559251,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"input-checker36589","input-checker36589",1544060109,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36591","G__36591",-1097195986,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36592","G__36592",20095280,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema36588","input-schema36588",895559251,null),new cljs.core.Symbol(null,"output-schema36587","output-schema36587",-781442826,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta36597","meta36597",-271192179,null)], null);
});})(validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
;

tripweb.users.t_tripweb$users36596.cljs$lang$type = true;

tripweb.users.t_tripweb$users36596.cljs$lang$ctorStr = "tripweb.users/t_tripweb$users36596";

tripweb.users.t_tripweb$users36596.cljs$lang$ctorPrWriter = ((function (validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"tripweb.users/t_tripweb$users36596");
});})(validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
;

tripweb.users.__GT_t_tripweb$users36596 = ((function (validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606){
return (function tripweb$users$users_view_$___GT_t_tripweb$users36596(output_checker36590__$1,validate__32480__auto____$1,owner__$1,data__$1,users_view__$1,input_checker36589__$1,G__36591__$1,G__36592__$1,input_schema36588__$1,output_schema36587__$1,ufv____$1,meta36597){
return (new tripweb.users.t_tripweb$users36596(output_checker36590__$1,validate__32480__auto____$1,owner__$1,data__$1,users_view__$1,input_checker36589__$1,G__36591__$1,G__36592__$1,input_schema36588__$1,output_schema36587__$1,ufv____$1,meta36597));
});})(validate__32480__auto__,ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
;

}

return (new tripweb.users.t_tripweb$users36596(output_checker36590_36606,validate__32480__auto__,owner,data,tripweb$users$users_view,input_checker36589_36605,G__36591,G__36592,input_schema36588_36604,output_schema36587_36603,ufv___36602,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___36610 = output_checker36590_36606.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___36610)){
var error__32482__auto___36611 = temp__4657__auto___36610;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-view","users-view",2008055244,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36611)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36587_36603,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36611], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___36602,output_schema36587_36603,input_schema36588_36604,input_checker36589_36605,output_checker36590_36606))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tripweb.users.users_view),schema.core.make_fn_schema.call(null,output_schema36587_36603,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36588_36604], null)));

tripweb.users.__GT_users_view = (function tripweb$users$__GT_users_view(var_args){
var args36599 = [];
var len__25947__auto___36612 = arguments.length;
var i__25948__auto___36613 = (0);
while(true){
if((i__25948__auto___36613 < len__25947__auto___36612)){
args36599.push((arguments[i__25948__auto___36613]));

var G__36614 = (i__25948__auto___36613 + (1));
i__25948__auto___36613 = G__36614;
continue;
} else {
}
break;
}

var G__36601 = args36599.length;
switch (G__36601) {
case 1:
return tripweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36599.length)].join('')));

}
});

tripweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,tripweb.users.users_view,cursor__36194__auto__);
});

tripweb.users.__GT_users_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m36586){
return om.core.build.call(null,tripweb.users.users_view,cursor__36194__auto__,m36586);
});

tripweb.users.__GT_users_view.cljs$lang$maxFixedArity = 2;

var action__35970__auto___36622 = (function (params__35971__auto__){
if(cljs.core.map_QMARK_.call(null,params__35971__auto__)){
var map__36616 = params__35971__auto__;
var map__36616__$1 = ((((!((map__36616 == null)))?((((map__36616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36616):map__36616);
return om.core.root.call(null,tripweb.users.users_view,tripweb.users.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35971__auto__)){
var vec__36618 = params__35971__auto__;
return om.core.root.call(null,tripweb.users.users_view,tripweb.users.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/users",action__35970__auto___36622);

tripweb.users.messages_page = ((function (action__35970__auto___36622){
return (function tripweb$users$messages_page(var_args){
var args__25954__auto__ = [];
var len__25947__auto___36623 = arguments.length;
var i__25948__auto___36624 = (0);
while(true){
if((i__25948__auto___36624 < len__25947__auto___36623)){
args__25954__auto__.push((arguments[i__25948__auto___36624]));

var G__36625 = (i__25948__auto___36624 + (1));
i__25948__auto___36624 = G__36625;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return tripweb.users.messages_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(action__35970__auto___36622))
;

tripweb.users.messages_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__35970__auto___36622){
return (function (args__35969__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/users",args__35969__auto__);
});})(action__35970__auto___36622))
;

tripweb.users.messages_page.cljs$lang$maxFixedArity = (0);

tripweb.users.messages_page.cljs$lang$applyTo = ((function (action__35970__auto___36622){
return (function (seq36621){
return tripweb.users.messages_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36621));
});})(action__35970__auto___36622))
;


//# sourceMappingURL=users.js.map?rel=1484804408638