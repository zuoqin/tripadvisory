// Compiled by ClojureScript 1.9.89 {}
goog.provide('tripweb.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_tools.dom');
goog.require('goog.history.EventType');
goog.require('om_tools.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('tripweb.settings');
goog.require('om.core');
goog.require('secretary.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tripweb.core.app_state !== 'undefined'){
} else {
tripweb.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1247994814),(1),new cljs.core.Keyword(null,"current","current",-1088038603),"Home"], null));
}
tripweb.core.jquery = $;
tripweb.core.doLogout = (function tripweb$core$doLogout(data){
return cljs.core.swap_BANG_.call(null,tripweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),(0));
});
tripweb.core.goUsers = (function tripweb$core$goUsers(data){
return cljs.core.swap_BANG_.call(null,tripweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),(1));
});

var ufv___36475 = schema.utils.use_fn_validation;
var output_schema36460_36476 = schema.core.Any;
var input_schema36461_36477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36462_36478 = schema.core.checker.call(null,input_schema36461_36477);
var output_checker36463_36479 = schema.core.checker.call(null,output_schema36460_36476);
/**
 * Inputs: [_ _]
 */
tripweb.core.logout_view = ((function (ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479){
return (function tripweb$core$logout_view(G__36464,G__36465){
var validate__32480__auto__ = ufv___36475.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___36480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36464,G__36465], null);
var temp__4657__auto___36481 = input_checker36462_36478.call(null,args__32481__auto___36480);
if(cljs.core.truth_(temp__4657__auto___36481)){
var error__32482__auto___36482 = temp__4657__auto___36481;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"logout-view","logout-view",-923812057,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36482)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36461_36477,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___36480,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36482], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var _ = G__36464;
var ___$1 = G__36465;
while(true){
if(typeof tripweb.core.t_tripweb$core36469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
tripweb.core.t_tripweb$core36469 = (function (G__36464,validate__32480__auto__,output_schema36460,logout_view,output_checker36463,_,input_checker36462,G__36465,input_schema36461,ufv__,meta36470){
this.G__36464 = G__36464;
this.validate__32480__auto__ = validate__32480__auto__;
this.output_schema36460 = output_schema36460;
this.logout_view = logout_view;
this.output_checker36463 = output_checker36463;
this._ = _;
this.input_checker36462 = input_checker36462;
this.G__36465 = G__36465;
this.input_schema36461 = input_schema36461;
this.ufv__ = ufv__;
this.meta36470 = meta36470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripweb.core.t_tripweb$core36469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479){
return (function (_36471,meta36470__$1){
var self__ = this;
var _36471__$1 = this;
return (new tripweb.core.t_tripweb$core36469(self__.G__36464,self__.validate__32480__auto__,self__.output_schema36460,self__.logout_view,self__.output_checker36463,self__._,self__.input_checker36462,self__.G__36465,self__.input_schema36461,self__.ufv__,meta36470__$1));
});})(validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479))
;

tripweb.core.t_tripweb$core36469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479){
return (function (_36471){
var self__ = this;
var _36471__$1 = this;
return self__.meta36470;
});})(validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479))
;

tripweb.core.t_tripweb$core36469.prototype.om$core$IDisplayName$ = true;

tripweb.core.t_tripweb$core36469.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return "logout-view";
});})(validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479))
;

tripweb.core.t_tripweb$core36469.prototype.om$core$IRender$ = true;

tripweb.core.t_tripweb$core36469.prototype.om$core$IRender$render$arity$1 = ((function (validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,style,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"href","href",-793805698),"#/login"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,["Login"],null)))],null)));
});})(validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479))
;

tripweb.core.t_tripweb$core36469.getBasis = ((function (validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__36464","G__36464",-1326955232,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),new cljs.core.Symbol(null,"output-schema36460","output-schema36460",1795749285,null),cljs.core.with_meta(new cljs.core.Symbol(null,"logout-view","logout-view",-923812057,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema36460","output-schema36460",1795749285,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema36461","input-schema36461",724409304,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [_ _]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)))], null)),new cljs.core.Symbol(null,"output-checker36463","output-checker36463",-594093237,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"input-checker36462","input-checker36462",247365942,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36465","G__36465",-1271341642,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema36461","input-schema36461",724409304,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta36470","meta36470",-226341309,null)], null);
});})(validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479))
;

tripweb.core.t_tripweb$core36469.cljs$lang$type = true;

tripweb.core.t_tripweb$core36469.cljs$lang$ctorStr = "tripweb.core/t_tripweb$core36469";

tripweb.core.t_tripweb$core36469.cljs$lang$ctorPrWriter = ((function (validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"tripweb.core/t_tripweb$core36469");
});})(validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479))
;

tripweb.core.__GT_t_tripweb$core36469 = ((function (validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479){
return (function tripweb$core$logout_view_$___GT_t_tripweb$core36469(G__36464__$1,validate__32480__auto____$1,output_schema36460__$1,logout_view__$1,output_checker36463__$1,___$2,input_checker36462__$1,G__36465__$1,input_schema36461__$1,ufv____$1,meta36470){
return (new tripweb.core.t_tripweb$core36469(G__36464__$1,validate__32480__auto____$1,output_schema36460__$1,logout_view__$1,output_checker36463__$1,___$2,input_checker36462__$1,G__36465__$1,input_schema36461__$1,ufv____$1,meta36470));
});})(validate__32480__auto__,ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479))
;

}

return (new tripweb.core.t_tripweb$core36469(G__36464,validate__32480__auto__,output_schema36460_36476,tripweb$core$logout_view,output_checker36463_36479,___$1,input_checker36462_36478,G__36465,input_schema36461_36477,ufv___36475,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___36483 = output_checker36463_36479.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___36483)){
var error__32482__auto___36484 = temp__4657__auto___36483;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"logout-view","logout-view",-923812057,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36484)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36460_36476,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36484], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___36475,output_schema36460_36476,input_schema36461_36477,input_checker36462_36478,output_checker36463_36479))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tripweb.core.logout_view),schema.core.make_fn_schema.call(null,output_schema36460_36476,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36461_36477], null)));

tripweb.core.__GT_logout_view = (function tripweb$core$__GT_logout_view(var_args){
var args36472 = [];
var len__25947__auto___36485 = arguments.length;
var i__25948__auto___36486 = (0);
while(true){
if((i__25948__auto___36486 < len__25947__auto___36485)){
args36472.push((arguments[i__25948__auto___36486]));

var G__36487 = (i__25948__auto___36486 + (1));
i__25948__auto___36486 = G__36487;
continue;
} else {
}
break;
}

var G__36474 = args36472.length;
switch (G__36474) {
case 1:
return tripweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36472.length)].join('')));

}
});

tripweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,tripweb.core.logout_view,cursor__36194__auto__);
});

tripweb.core.__GT_logout_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m36459){
return om.core.build.call(null,tripweb.core.logout_view,cursor__36194__auto__,m36459);
});

tripweb.core.__GT_logout_view.cljs$lang$maxFixedArity = 2;


var ufv___36505 = schema.utils.use_fn_validation;
var output_schema36490_36506 = schema.core.Any;
var input_schema36491_36507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36492_36508 = schema.core.checker.call(null,input_schema36491_36507);
var output_checker36493_36509 = schema.core.checker.call(null,output_schema36490_36506);
/**
 * Inputs: [data owner]
 */
tripweb.core.users_navigation_view = ((function (ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function tripweb$core$users_navigation_view(G__36494,G__36495){
var validate__32480__auto__ = ufv___36505.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___36510 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36494,G__36495], null);
var temp__4657__auto___36511 = input_checker36492_36508.call(null,args__32481__auto___36510);
if(cljs.core.truth_(temp__4657__auto___36511)){
var error__32482__auto___36512 = temp__4657__auto___36511;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-navigation-view","users-navigation-view",-19184075,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36512)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36491_36507,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___36510,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36512], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var data = G__36494;
var owner = G__36495;
while(true){
if(typeof tripweb.core.t_tripweb$core36499 !== 'undefined'){
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
tripweb.core.t_tripweb$core36499 = (function (validate__32480__auto__,owner,data,output_schema36490,G__36494,output_checker36493,input_schema36491,users_navigation_view,input_checker36492,G__36495,ufv__,meta36500){
this.validate__32480__auto__ = validate__32480__auto__;
this.owner = owner;
this.data = data;
this.output_schema36490 = output_schema36490;
this.G__36494 = G__36494;
this.output_checker36493 = output_checker36493;
this.input_schema36491 = input_schema36491;
this.users_navigation_view = users_navigation_view;
this.input_checker36492 = input_checker36492;
this.G__36495 = G__36495;
this.ufv__ = ufv__;
this.meta36500 = meta36500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripweb.core.t_tripweb$core36499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function (_36501,meta36500__$1){
var self__ = this;
var _36501__$1 = this;
return (new tripweb.core.t_tripweb$core36499(self__.validate__32480__auto__,self__.owner,self__.data,self__.output_schema36490,self__.G__36494,self__.output_checker36493,self__.input_schema36491,self__.users_navigation_view,self__.input_checker36492,self__.G__36495,self__.ufv__,meta36500__$1));
});})(validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

tripweb.core.t_tripweb$core36499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function (_36501){
var self__ = this;
var _36501__$1 = this;
return self__.meta36500;
});})(validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

tripweb.core.t_tripweb$core36499.prototype.om$core$IDisplayName$ = true;

tripweb.core.t_tripweb$core36499.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function (_){
var self__ = this;
var ___$1 = this;
return "users-navigation-view";
});})(validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

tripweb.core.t_tripweb$core36499.prototype.om$core$IDidMount$ = true;

tripweb.core.t_tripweb$core36499.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function (_){
var self__ = this;
var ___$1 = this;
return tripweb.core.onMount.call(null,self__.data);
});})(validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

tripweb.core.t_tripweb$core36499.prototype.om$core$IDidUpdate$ = true;

tripweb.core.t_tripweb$core36499.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function (this$,prev_props,prev_state){
var self__ = this;
var this$__$1 = this;

return self__.data;
});})(validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

tripweb.core.t_tripweb$core36499.prototype.om$core$IRender$ = true;

tripweb.core.t_tripweb$core36499.prototype.om$core$IRender$render$arity$1 = ((function (validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var stylehome = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px"], null)], null);
return cljs.core.apply.call(null,React.DOM.nav,{"className": "navbar navbar-default navbar-static-top", "role": "navigation"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.button,{"type": "button", "className": "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-collapse"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "sr-only"},"Toggle navigation"),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})],null)))),om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,stylehome,new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-brand"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"id": "pageTitle"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data))],null))))],null)))],null)))),React.DOM.ul({"className": "nav navbar-top-links navbar-right"})],null))));
});})(validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

tripweb.core.t_tripweb$core36499.getBasis = ((function (validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"output-schema36490","output-schema36490",-1463276213,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36494","G__36494",-2045898452,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker36493","output-checker36493",1075784114,null),new cljs.core.Symbol(null,"input-schema36491","input-schema36491",1043994388,null),cljs.core.with_meta(new cljs.core.Symbol(null,"users-navigation-view","users-navigation-view",-19184075,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema36490","output-schema36490",-1463276213,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema36491","input-schema36491",1043994388,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"input-checker36492","input-checker36492",1272057881,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36495","G__36495",-1082109670,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta36500","meta36500",-2076533248,null)], null);
});})(validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

tripweb.core.t_tripweb$core36499.cljs$lang$type = true;

tripweb.core.t_tripweb$core36499.cljs$lang$ctorStr = "tripweb.core/t_tripweb$core36499";

tripweb.core.t_tripweb$core36499.cljs$lang$ctorPrWriter = ((function (validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"tripweb.core/t_tripweb$core36499");
});})(validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

tripweb.core.__GT_t_tripweb$core36499 = ((function (validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509){
return (function tripweb$core$users_navigation_view_$___GT_t_tripweb$core36499(validate__32480__auto____$1,owner__$1,data__$1,output_schema36490__$1,G__36494__$1,output_checker36493__$1,input_schema36491__$1,users_navigation_view__$1,input_checker36492__$1,G__36495__$1,ufv____$1,meta36500){
return (new tripweb.core.t_tripweb$core36499(validate__32480__auto____$1,owner__$1,data__$1,output_schema36490__$1,G__36494__$1,output_checker36493__$1,input_schema36491__$1,users_navigation_view__$1,input_checker36492__$1,G__36495__$1,ufv____$1,meta36500));
});})(validate__32480__auto__,ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

}

return (new tripweb.core.t_tripweb$core36499(validate__32480__auto__,owner,data,output_schema36490_36506,G__36494,output_checker36493_36509,input_schema36491_36507,tripweb$core$users_navigation_view,input_checker36492_36508,G__36495,ufv___36505,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___36513 = output_checker36493_36509.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___36513)){
var error__32482__auto___36514 = temp__4657__auto___36513;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"users-navigation-view","users-navigation-view",-19184075,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36514)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36490_36506,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36514], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___36505,output_schema36490_36506,input_schema36491_36507,input_checker36492_36508,output_checker36493_36509))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tripweb.core.users_navigation_view),schema.core.make_fn_schema.call(null,output_schema36490_36506,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36491_36507], null)));

tripweb.core.__GT_users_navigation_view = (function tripweb$core$__GT_users_navigation_view(var_args){
var args36502 = [];
var len__25947__auto___36515 = arguments.length;
var i__25948__auto___36516 = (0);
while(true){
if((i__25948__auto___36516 < len__25947__auto___36515)){
args36502.push((arguments[i__25948__auto___36516]));

var G__36517 = (i__25948__auto___36516 + (1));
i__25948__auto___36516 = G__36517;
continue;
} else {
}
break;
}

var G__36504 = args36502.length;
switch (G__36504) {
case 1:
return tripweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36502.length)].join('')));

}
});

tripweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,tripweb.core.users_navigation_view,cursor__36194__auto__);
});

tripweb.core.__GT_users_navigation_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m36489){
return om.core.build.call(null,tripweb.core.users_navigation_view,cursor__36194__auto__,m36489);
});

tripweb.core.__GT_users_navigation_view.cljs$lang$maxFixedArity = 2;


var ufv___36535 = schema.utils.use_fn_validation;
var output_schema36520_36536 = schema.core.Any;
var input_schema36521_36537 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36522_36538 = schema.core.checker.call(null,input_schema36521_36537);
var output_checker36523_36539 = schema.core.checker.call(null,output_schema36520_36536);
/**
 * Inputs: [data owner]
 */
tripweb.core.trips_navigation_view = ((function (ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539){
return (function tripweb$core$trips_navigation_view(G__36524,G__36525){
var validate__32480__auto__ = ufv___36535.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___36540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36524,G__36525], null);
var temp__4657__auto___36541 = input_checker36522_36538.call(null,args__32481__auto___36540);
if(cljs.core.truth_(temp__4657__auto___36541)){
var error__32482__auto___36542 = temp__4657__auto___36541;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"trips-navigation-view","trips-navigation-view",-1557877011,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36542)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36521_36537,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___36540,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36542], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var data = G__36524;
var owner = G__36525;
while(true){
if(typeof tripweb.core.t_tripweb$core36529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
tripweb.core.t_tripweb$core36529 = (function (G__36525,validate__32480__auto__,output_schema36520,owner,output_checker36523,data,trips_navigation_view,G__36524,input_checker36522,ufv__,input_schema36521,meta36530){
this.G__36525 = G__36525;
this.validate__32480__auto__ = validate__32480__auto__;
this.output_schema36520 = output_schema36520;
this.owner = owner;
this.output_checker36523 = output_checker36523;
this.data = data;
this.trips_navigation_view = trips_navigation_view;
this.G__36524 = G__36524;
this.input_checker36522 = input_checker36522;
this.ufv__ = ufv__;
this.input_schema36521 = input_schema36521;
this.meta36530 = meta36530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripweb.core.t_tripweb$core36529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539){
return (function (_36531,meta36530__$1){
var self__ = this;
var _36531__$1 = this;
return (new tripweb.core.t_tripweb$core36529(self__.G__36525,self__.validate__32480__auto__,self__.output_schema36520,self__.owner,self__.output_checker36523,self__.data,self__.trips_navigation_view,self__.G__36524,self__.input_checker36522,self__.ufv__,self__.input_schema36521,meta36530__$1));
});})(validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539))
;

tripweb.core.t_tripweb$core36529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539){
return (function (_36531){
var self__ = this;
var _36531__$1 = this;
return self__.meta36530;
});})(validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539))
;

tripweb.core.t_tripweb$core36529.prototype.om$core$IDisplayName$ = true;

tripweb.core.t_tripweb$core36529.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539){
return (function (_){
var self__ = this;
var ___$1 = this;
return "trips-navigation-view";
});})(validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539))
;

tripweb.core.t_tripweb$core36529.prototype.om$core$IRender$ = true;

tripweb.core.t_tripweb$core36529.prototype.om$core$IRender$render$arity$1 = ((function (validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var stylehome = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null);
return cljs.core.apply.call(null,React.DOM.nav,{"className": "navbar navbar-default navbar-fixed-top", "role": "navigation"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "navbar-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.button,{"type": "button", "className": "navbar-toggle", "data-toggle": "collapse", "data-target": ".navbar-ex1-collapse"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "sr-only"},"Toggle navigation"),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"}),React.DOM.span({"className": "icon-bar"})],null)))),om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,stylehome,new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-brand"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"id": "pageTitle"},"The title")],null)))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "collapse navbar-collapse navbar-ex1-collapse", "id": "menu"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.ul,{"className": "nav navbar-nav"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.li,om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"href","href",-793805698),"#/eportal"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "glyphicon glyphicon-home"}),"Trips block"],null))),cljs.core.PersistentVector.EMPTY)],null)))),cljs.core.apply.call(null,React.DOM.ul,{"className": "nav navbar-nav navbar-right"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.li,om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"href","href",-793805698),"#/trips"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "glyphicon glyphicon-cog"}),"Trips"],null))),cljs.core.PersistentVector.EMPTY),om_tools.dom.element.call(null,React.DOM.li,om_tools.dom.element.call(null,React.DOM.a,cljs.core.assoc.call(null,style,new cljs.core.Keyword(null,"href","href",-793805698),"#/users"),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"className": "glyphicon glyphicon-log-out"}),"Users"],null))),cljs.core.PersistentVector.EMPTY)],null))))],null))))],null))));
});})(validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539))
;

tripweb.core.t_tripweb$core36529.getBasis = ((function (validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__36525","G__36525",620324034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),new cljs.core.Symbol(null,"output-schema36520","output-schema36520",-15651773,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"output-checker36523","output-checker36523",-1743002266,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"trips-navigation-view","trips-navigation-view",-1557877011,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema36520","output-schema36520",-15651773,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema36521","input-schema36521",-497363650,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36524","G__36524",2040990806,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker36522","input-checker36522",1170220828,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"input-schema36521","input-schema36521",-497363650,null),new cljs.core.Symbol(null,"meta36530","meta36530",1628734048,null)], null);
});})(validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539))
;

tripweb.core.t_tripweb$core36529.cljs$lang$type = true;

tripweb.core.t_tripweb$core36529.cljs$lang$ctorStr = "tripweb.core/t_tripweb$core36529";

tripweb.core.t_tripweb$core36529.cljs$lang$ctorPrWriter = ((function (validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"tripweb.core/t_tripweb$core36529");
});})(validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539))
;

tripweb.core.__GT_t_tripweb$core36529 = ((function (validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539){
return (function tripweb$core$trips_navigation_view_$___GT_t_tripweb$core36529(G__36525__$1,validate__32480__auto____$1,output_schema36520__$1,owner__$1,output_checker36523__$1,data__$1,trips_navigation_view__$1,G__36524__$1,input_checker36522__$1,ufv____$1,input_schema36521__$1,meta36530){
return (new tripweb.core.t_tripweb$core36529(G__36525__$1,validate__32480__auto____$1,output_schema36520__$1,owner__$1,output_checker36523__$1,data__$1,trips_navigation_view__$1,G__36524__$1,input_checker36522__$1,ufv____$1,input_schema36521__$1,meta36530));
});})(validate__32480__auto__,ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539))
;

}

return (new tripweb.core.t_tripweb$core36529(G__36525,validate__32480__auto__,output_schema36520_36536,owner,output_checker36523_36539,data,tripweb$core$trips_navigation_view,G__36524,input_checker36522_36538,ufv___36535,input_schema36521_36537,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___36543 = output_checker36523_36539.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___36543)){
var error__32482__auto___36544 = temp__4657__auto___36543;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"trips-navigation-view","trips-navigation-view",-1557877011,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36544)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36520_36536,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36544], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___36535,output_schema36520_36536,input_schema36521_36537,input_checker36522_36538,output_checker36523_36539))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tripweb.core.trips_navigation_view),schema.core.make_fn_schema.call(null,output_schema36520_36536,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36521_36537], null)));

tripweb.core.__GT_trips_navigation_view = (function tripweb$core$__GT_trips_navigation_view(var_args){
var args36532 = [];
var len__25947__auto___36545 = arguments.length;
var i__25948__auto___36546 = (0);
while(true){
if((i__25948__auto___36546 < len__25947__auto___36545)){
args36532.push((arguments[i__25948__auto___36546]));

var G__36547 = (i__25948__auto___36546 + (1));
i__25948__auto___36546 = G__36547;
continue;
} else {
}
break;
}

var G__36534 = args36532.length;
switch (G__36534) {
case 1:
return tripweb.core.__GT_trips_navigation_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripweb.core.__GT_trips_navigation_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36532.length)].join('')));

}
});

tripweb.core.__GT_trips_navigation_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,tripweb.core.trips_navigation_view,cursor__36194__auto__);
});

tripweb.core.__GT_trips_navigation_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m36519){
return om.core.build.call(null,tripweb.core.trips_navigation_view,cursor__36194__auto__,m36519);
});

tripweb.core.__GT_trips_navigation_view.cljs$lang$maxFixedArity = 2;

if(typeof tripweb.core.website_view !== 'undefined'){
} else {
tripweb.core.website_view = (function (){var method_table__25797__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25798__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25799__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25800__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25801__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tripweb.core","website-view"),((function (method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__,hierarchy__25801__auto__){
return (function (data,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,data,null))?cljs.core.deref.call(null,tripweb.core.app_state):cljs.core.deref.call(null,data)));
});})(method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__,hierarchy__25801__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25801__auto__,method_table__25797__auto__,prefer_table__25798__auto__,method_cache__25799__auto__,cached_hierarchy__25800__auto__));
})();
}
cljs.core._add_method.call(null,tripweb.core.website_view,(0),(function (data,owner){
return tripweb.core.logout_view.call(null,data,owner);
}));
cljs.core._add_method.call(null,tripweb.core.website_view,(1),(function (data,owner){
return tripweb.core.trips_navigation_view.call(null,data,owner);
}));
cljs.core._add_method.call(null,tripweb.core.website_view,(2),(function (data,owner){
return tripweb.core.users_navigation_view.call(null,data,owner);
}));
tripweb.core.main = (function tripweb$core$main(){
document.location = "#/";

return (window["location"] = "#/login");
});

//# sourceMappingURL=core.js.map?rel=1484804408435