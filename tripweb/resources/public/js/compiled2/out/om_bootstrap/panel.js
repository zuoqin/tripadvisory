// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.panel');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.panel.Panel = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header","header",119441134)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"footer","footer",1606445390)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"list-group","list-group",-304522729)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)),schema.core.Bool], true, false));
var ufv___40881 = schema.utils.use_fn_validation;
var output_schema40870_40882 = om_bootstrap.types.Component;
var input_schema40871_40883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.panel.Panel,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Panel","Panel",-43708258,null)], null))),schema.core.Any], null);
var input_checker40872_40884 = schema.core.checker.call(null,input_schema40871_40883);
var output_checker40873_40885 = schema.core.checker.call(null,output_schema40870_40882);
/**
 * Inputs: [opts :- Panel & children]
 *   Returns: t/Component
 */
om_bootstrap.panel.panel = ((function (ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885){
return (function om_bootstrap$panel$panel(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40886 = arguments.length;
var i__25948__auto___40887 = (0);
while(true){
if((i__25948__auto___40887 < len__25947__auto___40886)){
args__25954__auto__.push((arguments[i__25948__auto___40887]));

var G__40888 = (i__25948__auto___40887 + (1));
i__25948__auto___40887 = G__40888;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885))
;

om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885){
return (function (G__40874,rest40875){
var validate__32480__auto__ = ufv___40881.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___40889 = cljs.core.list_STAR_.call(null,G__40874,rest40875);
var temp__4657__auto___40890 = input_checker40872_40884.call(null,args__32481__auto___40889);
if(cljs.core.truth_(temp__4657__auto___40890)){
var error__32482__auto___40891 = temp__4657__auto___40890;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___40891)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40871_40883,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___40889,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40891], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__40874;
var children = rest40875;
while(true){
var vec__40878 = om_bootstrap.types.separate.call(null,om_bootstrap.panel.Panel,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"panel",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default"], null));
var bs = cljs.core.nth.call(null,vec__40878,(0),null);
var props = cljs.core.nth.call(null,vec__40878,(1),null);
var classes = cljs.core.assoc.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.Keyword(null,"panel","panel",-558637456),true);
if(cljs.core.truth_(new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779).cljs$core$IFn$_invoke$arity$1(bs))){
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"collapsible?","collapsible?",-1508197779)),new cljs.core.Keyword(null,"children","children",-940561982),children], null));
} else {
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var header = temp__4657__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.util.clone_with_props.call(null,header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null))],null))));
} else {
return null;
}
})(),((cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.identity,children))))?null:cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,[cljs.core.str("panel-body"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674).cljs$core$IFn$_invoke$arity$1(bs))?" collapse":null))].join('')), "ref": "body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))))),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"list-group","list-group",-304522729).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var list_group = temp__4657__auto__;
return list_group;
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var footer = temp__4657__auto__;
return cljs.core.apply.call(null,React.DOM.div,{"className": "panel-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[footer],null))));
} else {
return null;
}
})()],null)));
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___40892 = output_checker40873_40885.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___40892)){
var error__32482__auto___40893 = temp__4657__auto___40892;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"panel","panel",1081894071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___40893)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40870_40882,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40893], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885))
;

om_bootstrap.panel.panel.cljs$lang$maxFixedArity = (1);

om_bootstrap.panel.panel.cljs$lang$applyTo = ((function (ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885){
return (function (seq40876){
var G__40877 = cljs.core.first.call(null,seq40876);
var seq40876__$1 = cljs.core.next.call(null,seq40876);
return om_bootstrap.panel.panel.cljs$core$IFn$_invoke$arity$variadic(G__40877,seq40876__$1);
});})(ufv___40881,output_schema40870_40882,input_schema40871_40883,input_checker40872_40884,output_checker40873_40885))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.panel.panel),schema.core.make_fn_schema.call(null,output_schema40870_40882,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40871_40883], null)));
om_bootstrap.panel.collapsible_panel_STAR_$descriptor = (function (){var descriptor__36196__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__36196__auto__["mixins"] = [om_bootstrap.mixins.collapsible_mixin]);

return descriptor__36196__auto__;
})();

var component_fnk__36225__auto___40923 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema40898 = schema.core.Any;
var input_schema40899 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map40897","map40897",16709208,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker40900 = schema.core.checker.call(null,input_schema40899);
var output_checker40901 = schema.core.checker.call(null,output_schema40898);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function om_bootstrap$panel$constructor40895(G__40902){
var validate__32480__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___40924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40902], null);
var temp__4657__auto___40925 = input_checker40900.call(null,args__32481__auto___40924);
if(cljs.core.truth_(temp__4657__auto___40925)){
var error__32482__auto___40926 = temp__4657__auto___40925;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40895","constructor40895",-695817241,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___40926)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40899,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___40924,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40926], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var map40897 = G__40902;
while(true){
if(cljs.core.map_QMARK_.call(null,map40897)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map40897)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map40897,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map40897,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.panel.t_om_bootstrap$panel40908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.panel.t_om_bootstrap$panel40908 = (function (validate__32480__auto__,owner,constructor40895,output_checker40901,input_schema40899,state,input_checker40900,map40897,G__40902,output_schema40898,ufv__,meta40909){
this.validate__32480__auto__ = validate__32480__auto__;
this.owner = owner;
this.constructor40895 = constructor40895;
this.output_checker40901 = output_checker40901;
this.input_schema40899 = input_schema40899;
this.state = state;
this.input_checker40900 = input_checker40900;
this.map40897 = map40897;
this.G__40902 = G__40902;
this.output_schema40898 = output_schema40898;
this.ufv__ = ufv__;
this.meta40909 = meta40909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.panel.t_om_bootstrap$panel40908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (_40910,meta40909__$1){
var self__ = this;
var _40910__$1 = this;
return (new om_bootstrap.panel.t_om_bootstrap$panel40908(self__.validate__32480__auto__,self__.owner,self__.constructor40895,self__.output_checker40901,self__.input_schema40899,self__.state,self__.input_checker40900,self__.map40897,self__.G__40902,self__.output_schema40898,self__.ufv__,meta40909__$1));
});})(state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.panel.t_om_bootstrap$panel40908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (_40910){
var self__ = this;
var _40910__$1 = this;
return self__.meta40909;
});})(state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.panel.t_om_bootstrap$panel40908.prototype.om$core$IDisplayName$ = true;

om_bootstrap.panel.t_om_bootstrap$panel40908.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (_){
var self__ = this;
var ___$1 = this;
return "collapsible-panel*";
});})(state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.panel.t_om_bootstrap$panel40908.prototype.om$core$IRender$ = true;

om_bootstrap.panel.t_om_bootstrap$panel40908.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__40911 = om.core.get_props.call(null,self__.owner);
var map__40911__$1 = ((((!((map__40911 == null)))?((((map__40911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40911):map__40911);
var opts = cljs.core.get.call(null,map__40911__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__40911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var is_collapsed_QMARK_ = (self__.owner["isPanelCollapsed"]).call(null,self__.owner);
var toggle_BANG_ = ((function (map__40911,map__40911__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (___$2){
(self__.owner["toggleCollapsed"]).call(null,self__.owner);

return false;
});})(map__40911,map__40911__$1,opts,children,is_collapsed_QMARK_,___$1,state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;
var collapsible_header = om_tools.dom.element.call(null,React.DOM.h4,cljs.core.apply.call(null,React.DOM.a,{"href": "#", "onClick": om_tools.dom.format_opts.call(null,toggle_BANG_)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(opts)],null)))),cljs.core.PersistentVector.EMPTY);
return om_bootstrap.panel.panel.call(null,om_bootstrap.util.merge_props.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),collapsible_header,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),is_collapsed_QMARK_], null)),children);
});})(state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.panel.t_om_bootstrap$panel40908.getBasis = ((function (state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40895","constructor40895",-695817241,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker40901","output-checker40901",1325029584,null),new cljs.core.Symbol(null,"input-schema40899","input-schema40899",-1763043374,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker40900","input-checker40900",-1732393705,null),new cljs.core.Symbol(null,"map40897","map40897",16709208,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__40902","G__40902",1785810106,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-schema40898","output-schema40898",-252637222,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta40909","meta40909",-1591597841,null)], null);
});})(state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.panel.t_om_bootstrap$panel40908.cljs$lang$type = true;

om_bootstrap.panel.t_om_bootstrap$panel40908.cljs$lang$ctorStr = "om-bootstrap.panel/t_om_bootstrap$panel40908";

om_bootstrap.panel.t_om_bootstrap$panel40908.cljs$lang$ctorPrWriter = ((function (state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"om-bootstrap.panel/t_om_bootstrap$panel40908");
});})(state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

om_bootstrap.panel.__GT_t_om_bootstrap$panel40908 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901){
return (function om_bootstrap$panel$constructor40895_$___GT_t_om_bootstrap$panel40908(validate__32480__auto____$1,owner__$1,constructor40895__$1,output_checker40901__$1,input_schema40899__$1,state__$1,input_checker40900__$1,map40897__$1,G__40902__$1,output_schema40898__$1,ufv____$1,meta40909){
return (new om_bootstrap.panel.t_om_bootstrap$panel40908(validate__32480__auto____$1,owner__$1,constructor40895__$1,output_checker40901__$1,input_schema40899__$1,state__$1,input_checker40900__$1,map40897__$1,G__40902__$1,output_schema40898__$1,ufv____$1,meta40909));
});})(state,owner,validate__32480__auto__,ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
;

}

return (new om_bootstrap.panel.t_om_bootstrap$panel40908(validate__32480__auto__,owner,om_bootstrap$panel$constructor40895,output_checker40901,input_schema40899,state,input_checker40900,map40897,G__40902,output_schema40898,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___40927 = output_checker40901.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___40927)){
var error__32482__auto___40928 = temp__4657__auto___40927;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor40895","constructor40895",-695817241,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___40928)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40898,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40928], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv__,output_schema40898,input_schema40899,input_checker40900,output_checker40901))
,schema.core.make_fn_schema.call(null,output_schema40898,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40899], null)));
})();
/**
 * Generates a collapsible panel component resposible for its own toggled state.
 * The :collapsed? state is handled through a collapsible mixin.
 */
om_bootstrap.panel.collapsible_panel_STAR_ = ((function (component_fnk__36225__auto___40923){
return (function om_bootstrap$panel$collapsible_panel_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40929 = arguments.length;
var i__25948__auto___40930 = (0);
while(true){
if((i__25948__auto___40930 < len__25947__auto___40929)){
args__25954__auto__.push((arguments[i__25948__auto___40930]));

var G__40931 = (i__25948__auto___40930 + (1));
i__25948__auto___40930 = G__40931;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});})(component_fnk__36225__auto___40923))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__36225__auto___40923){
return (function (data__36226__auto__,owner40894,p__40916){
var vec__40917 = p__40916;
var opts__36227__auto__ = cljs.core.nth.call(null,vec__40917,(0),null);
return component_fnk__36225__auto___40923.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner40894),new cljs.core.Keyword(null,"opts","opts",155075701),opts__36227__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner40894,new cljs.core.Keyword(null,"data","data",-232669377),data__36226__auto__], null));
});})(component_fnk__36225__auto___40923))
;

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.panel.collapsible_panel_STAR_.cljs$lang$applyTo = ((function (component_fnk__36225__auto___40923){
return (function (seq40913){
var G__40914 = cljs.core.first.call(null,seq40913);
var seq40913__$1 = cljs.core.next.call(null,seq40913);
var G__40915 = cljs.core.first.call(null,seq40913__$1);
var seq40913__$2 = cljs.core.next.call(null,seq40913__$1);
return om_bootstrap.panel.collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40914,G__40915,seq40913__$2);
});})(component_fnk__36225__auto___40923))
;


om_bootstrap.panel.__GT_collapsible_panel_STAR_ = (function om_bootstrap$panel$__GT_collapsible_panel_STAR_(var_args){
var args40920 = [];
var len__25947__auto___40932 = arguments.length;
var i__25948__auto___40933 = (0);
while(true){
if((i__25948__auto___40933 < len__25947__auto___40932)){
args40920.push((arguments[i__25948__auto___40933]));

var G__40934 = (i__25948__auto___40933 + (1));
i__25948__auto___40933 = G__40934;
continue;
} else {
}
break;
}

var G__40922 = args40920.length;
switch (G__40922) {
case 1:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40920.length)].join('')));

}
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__36194__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m40896){
return om.core.build.call(null,om_bootstrap.panel.collapsible_panel_STAR_,cursor__36194__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.panel.collapsible_panel_STAR_$descriptor], null),m40896));
});

om_bootstrap.panel.__GT_collapsible_panel_STAR_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=panel.js.map?rel=1484804413263