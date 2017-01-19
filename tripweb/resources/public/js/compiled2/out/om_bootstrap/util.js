// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.core');
goog.require('schema.core');
/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 *   the first.  If a key occurs in more than one map, the mapping(s)
 *   from the latter (left-to-right) will be combined with the mapping in
 *   the result by looking up the proper merge function and in the
 *   supplied map of key -> merge-fn and using that for the big merge. If
 *   a key doesn't have a merge function, the right value wins (as with
 *   merge).
 */
om_bootstrap.util.merge_with_fns = (function om_bootstrap$util$merge_with_fns(k__GT_fn,maps){
var merge_entry = (function om_bootstrap$util$merge_with_fns_$_merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4655__auto__ = (function (){var and__24860__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__24860__auto__){
return k__GT_fn.call(null,k);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function om_bootstrap$util$merge_with_fns_$_merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__24872__auto__ = m1;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___40648 = schema.utils.use_fn_validation;
var output_schema40643_40649 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema40644_40650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker40645_40651 = schema.core.checker.call(null,input_schema40644_40650);
var output_checker40646_40652 = schema.core.checker.call(null,output_schema40643_40649);
/**
 * Inputs: [x :- s/Any]
 *   Returns: [s/Any]
 */
om_bootstrap.util.collectify = ((function (ufv___40648,output_schema40643_40649,input_schema40644_40650,input_checker40645_40651,output_checker40646_40652){
return (function om_bootstrap$util$collectify(G__40647){
var validate__32480__auto__ = ufv___40648.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___40653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40647], null);
var temp__4657__auto___40654 = input_checker40645_40651.call(null,args__32481__auto___40653);
if(cljs.core.truth_(temp__4657__auto___40654)){
var error__32482__auto___40655 = temp__4657__auto___40654;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__32482__auto___40655)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40644_40650,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___40653,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40655], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var x = G__40647;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___40656 = output_checker40646_40652.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___40656)){
var error__32482__auto___40657 = temp__4657__auto___40656;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)),cljs.core.pr_str.call(null,error__32482__auto___40657)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40643_40649,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40657], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___40648,output_schema40643_40649,input_schema40644_40650,input_checker40645_40651,output_checker40646_40652))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema40643_40649,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40644_40650], null)));
/**
 * This is the same as om.core/get-props. We added it to get around
 *   the new precondition in Om 0.8.0.
 */
om_bootstrap.util.get_props = (function om_bootstrap$util$get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___40663 = schema.utils.use_fn_validation;
var output_schema40658_40664 = schema.core.Bool;
var input_schema40659_40665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker40660_40666 = schema.core.checker.call(null,input_schema40659_40665);
var output_checker40661_40667 = schema.core.checker.call(null,output_schema40658_40664);
/**
 * Inputs: [x]
 *   Returns: s/Bool
 */
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___40663,output_schema40658_40664,input_schema40659_40665,input_checker40660_40666,output_checker40661_40667){
return (function om_bootstrap$util$om_component_QMARK_(G__40662){
var validate__32480__auto__ = ufv___40663.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___40668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40662], null);
var temp__4657__auto___40669 = input_checker40660_40666.call(null,args__32481__auto___40668);
if(cljs.core.truth_(temp__4657__auto___40669)){
var error__32482__auto___40670 = temp__4657__auto___40669;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___40670)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40659_40665,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___40668,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40670], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var x = G__40662;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___40671 = output_checker40661_40667.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___40671)){
var error__32482__auto___40672 = temp__4657__auto___40671;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___40672)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40658_40664,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40672], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___40663,output_schema40658_40664,input_schema40659_40665,input_checker40660_40666,output_checker40661_40667))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema40658_40664,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40659_40665], null)));
var ufv___40678 = schema.utils.use_fn_validation;
var output_schema40673_40679 = schema.core.Bool;
var input_schema40674_40680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker40675_40681 = schema.core.checker.call(null,input_schema40674_40680);
var output_checker40676_40682 = schema.core.checker.call(null,output_schema40673_40679);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   TODO: Once Om updates its externs to include this file, we can
 *   remove the janky aget call.
 */
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___40678,output_schema40673_40679,input_schema40674_40680,input_checker40675_40681,output_checker40676_40682){
return (function om_bootstrap$util$strict_valid_component_QMARK_(G__40677){
var validate__32480__auto__ = ufv___40678.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___40683 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40677], null);
var temp__4657__auto___40684 = input_checker40675_40681.call(null,args__32481__auto___40683);
if(cljs.core.truth_(temp__4657__auto___40684)){
var error__32482__auto___40685 = temp__4657__auto___40684;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__32482__auto___40685)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40674_40680,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___40683,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40685], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var child = G__40677;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___40686 = output_checker40676_40682.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___40686)){
var error__32482__auto___40687 = temp__4657__auto___40686;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"TODO: Once Om updates its externs to include this file, we can\n  remove the janky aget call."], null)),cljs.core.pr_str.call(null,error__32482__auto___40687)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40673_40679,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40687], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___40678,output_schema40673_40679,input_schema40674_40680,input_checker40675_40681,output_checker40676_40682))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema40673_40679,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40674_40680], null)));
var ufv___40693 = schema.utils.use_fn_validation;
var output_schema40688_40694 = schema.core.Bool;
var input_schema40689_40695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker40690_40696 = schema.core.checker.call(null,input_schema40689_40695);
var output_checker40691_40697 = schema.core.checker.call(null,output_schema40688_40694);
/**
 * Inputs: [child]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied argument is a valid React component,
 *   false otherwise.
 */
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___40693,output_schema40688_40694,input_schema40689_40695,input_checker40690_40696,output_checker40691_40697){
return (function om_bootstrap$util$valid_component_QMARK_(G__40692){
var validate__32480__auto__ = ufv___40693.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___40698 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40692], null);
var temp__4657__auto___40699 = input_checker40690_40696.call(null,args__32481__auto___40698);
if(cljs.core.truth_(temp__4657__auto___40699)){
var error__32482__auto___40700 = temp__4657__auto___40699;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__32482__auto___40700)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40689_40695,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___40698,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40700], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var child = G__40692;
while(true){
var or__24872__auto__ = typeof child === 'string';
if(or__24872__auto__){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = typeof child === 'number';
if(or__24872__auto____$1){
return or__24872__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___40701 = output_checker40691_40697.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___40701)){
var error__32482__auto___40702 = temp__4657__auto___40701;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied argument is a valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__32482__auto___40702)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40688_40694,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40702], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___40693,output_schema40688_40694,input_schema40689_40695,input_checker40690_40696,output_checker40691_40697))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema40688_40694,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40689_40695], null)));
var ufv___40708 = schema.utils.use_fn_validation;
var output_schema40703_40709 = schema.core.Bool;
var input_schema40704_40710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker40705_40711 = schema.core.checker.call(null,input_schema40704_40710);
var output_checker40706_40712 = schema.core.checker.call(null,output_schema40703_40709);
/**
 * Inputs: [children]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied sequence contains some valid React component,
 *   false otherwise.
 */
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___40708,output_schema40703_40709,input_schema40704_40710,input_checker40705_40711,output_checker40706_40712){
return (function om_bootstrap$util$some_valid_component_QMARK_(G__40707){
var validate__32480__auto__ = ufv___40708.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___40713 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40707], null);
var temp__4657__auto___40714 = input_checker40705_40711.call(null,args__32481__auto___40713);
if(cljs.core.truth_(temp__4657__auto___40714)){
var error__32482__auto___40715 = temp__4657__auto___40714;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__32482__auto___40715)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40704_40710,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___40713,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40715], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var children = G__40707;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___40716 = output_checker40706_40712.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___40716)){
var error__32482__auto___40717 = temp__4657__auto___40716;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied sequence contains some valid React component,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__32482__auto___40717)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40703_40709,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40717], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___40708,output_schema40703_40709,input_schema40704_40710,input_checker40705_40711,output_checker40706_40712))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema40703_40709,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40704_40710], null)));
/**
 * Generates a new function that calls each supplied side-effecting
 *   function.
 */
om_bootstrap.util.chain_fns = (function om_bootstrap$util$chain_fns(l,r){
if(cljs.core.truth_((function (){var and__24860__auto__ = l;
if(cljs.core.truth_(and__24860__auto__)){
return r;
} else {
return and__24860__auto__;
}
})())){
return (function() { 
var G__40718__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__40718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40719__i = 0, G__40719__a = new Array(arguments.length -  0);
while (G__40719__i < G__40719__a.length) {G__40719__a[G__40719__i] = arguments[G__40719__i + 0]; ++G__40719__i;}
  args = new cljs.core.IndexedSeq(G__40719__a,0);
} 
return G__40718__delegate.call(this,args);};
G__40718.cljs$lang$maxFixedArity = 0;
G__40718.cljs$lang$applyTo = (function (arglist__40720){
var args = cljs.core.seq(arglist__40720);
return G__40718__delegate(args);
});
G__40718.cljs$core$IFn$_invoke$arity$variadic = G__40718__delegate;
return G__40718;
})()
;
} else {
var or__24872__auto__ = l;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return r;
}
}
});
/**
 * Map of React keyword to a custom function for its merge. Tries to
 *   do a decent job with event handlers as well; currently only
 *   handles :on-select :on-click, :on-blur, kebab-cased as om-tools
 *   prefers.
 */
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__24872__auto__ = l;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
 * Merges two maps that represent React properties. Merges occur
 *   according to the functions defined in `react-merges`.
 */
om_bootstrap.util.merge_props = (function om_bootstrap$util$merge_props(var_args){
var args__25954__auto__ = [];
var len__25947__auto___40722 = arguments.length;
var i__25948__auto___40723 = (0);
while(true){
if((i__25948__auto___40723 < len__25947__auto___40722)){
args__25954__auto__.push((arguments[i__25948__auto___40723]));

var G__40724 = (i__25948__auto___40723 + (1));
i__25948__auto___40723 = G__40724;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (prop_maps){
var react_merge = (function om_bootstrap$util$react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function om_bootstrap$util$normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
});

om_bootstrap.util.merge_props.cljs$lang$maxFixedArity = (0);

om_bootstrap.util.merge_props.cljs$lang$applyTo = (function (seq40721){
return om_bootstrap.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40721));
});

/**
 * Returns a basic, shallow copy of the supplied JS object.
 */
om_bootstrap.util.copy_js = (function om_bootstrap$util$copy_js(arr){
var ret = {};
var seq__40733_40737 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__40734_40738 = null;
var count__40735_40739 = (0);
var i__40736_40740 = (0);
while(true){
if((i__40736_40740 < count__40735_40739)){
var k_40741 = cljs.core._nth.call(null,chunk__40734_40738,i__40736_40740);
if(cljs.core.truth_(arr.hasOwnProperty(k_40741))){
(ret[k_40741] = (arr[k_40741]));
} else {
}

var G__40742 = seq__40733_40737;
var G__40743 = chunk__40734_40738;
var G__40744 = count__40735_40739;
var G__40745 = (i__40736_40740 + (1));
seq__40733_40737 = G__40742;
chunk__40734_40738 = G__40743;
count__40735_40739 = G__40744;
i__40736_40740 = G__40745;
continue;
} else {
var temp__4657__auto___40746 = cljs.core.seq.call(null,seq__40733_40737);
if(temp__4657__auto___40746){
var seq__40733_40747__$1 = temp__4657__auto___40746;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40733_40747__$1)){
var c__25683__auto___40748 = cljs.core.chunk_first.call(null,seq__40733_40747__$1);
var G__40749 = cljs.core.chunk_rest.call(null,seq__40733_40747__$1);
var G__40750 = c__25683__auto___40748;
var G__40751 = cljs.core.count.call(null,c__25683__auto___40748);
var G__40752 = (0);
seq__40733_40737 = G__40749;
chunk__40734_40738 = G__40750;
count__40735_40739 = G__40751;
i__40736_40740 = G__40752;
continue;
} else {
var k_40753 = cljs.core.first.call(null,seq__40733_40747__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_40753))){
(ret[k_40753] = (arr[k_40753]));
} else {
}

var G__40754 = cljs.core.next.call(null,seq__40733_40747__$1);
var G__40755 = null;
var G__40756 = (0);
var G__40757 = (0);
seq__40733_40737 = G__40754;
chunk__40734_40738 = G__40755;
count__40735_40739 = G__40756;
i__40736_40740 = G__40757;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function om_bootstrap$util$create_element(var_args){
var args40758 = [];
var len__25947__auto___40761 = arguments.length;
var i__25948__auto___40762 = (0);
while(true){
if((i__25948__auto___40762 < len__25947__auto___40761)){
args40758.push((arguments[i__25948__auto___40762]));

var G__40763 = (i__25948__auto___40762 + (1));
i__25948__auto___40762 = G__40763;
continue;
} else {
}
break;
}

var G__40760 = args40758.length;
switch (G__40760) {
case 1:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40758.length)].join('')));

}
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.create_element.call(null,child,null);
});

om_bootstrap.util.create_element.cljs$core$IFn$_invoke$arity$2 = (function (child,props){
return React.createElement(child.type,props);
});

om_bootstrap.util.create_element.cljs$lang$maxFixedArity = 2;

/**
 * Merges the supplied extra properties into the underlying Om cursor
 *   and calls the constructor to clone the React component.
 * 
 *   Requires that the supplied child has an Om cursor attached to it! 
 */
om_bootstrap.util.clone_om = (function om_bootstrap$util$clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
 * This function is called if the React component child was NOT
 *   generated by Om. Merges the supplied properties into the -props
 *   field of the supplied React component and creates a shallow copy.
 */
om_bootstrap.util.clone_basic_react = (function om_bootstrap$util$clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4657__auto__)){
var children = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
 * Returns a shallow copy of the supplied component (child); the copy
 *   will have any props provided by extra-props merged in. Props are
 *   merged in the same manner as merge-props, so props like :class will
 *   be merged intelligently.
 * 
 *   extra-props can be a function of the old props that returns new
 *   props, OR it can be a map of props.
 * 
 *   If the supplied child is an Om component, any supplied extra
 *   properties will be merged into the underlying cursor and accessible
 *   in the Om constructor.
 */
om_bootstrap.util.clone_with_props = (function om_bootstrap$util$clone_with_props(var_args){
var args40765 = [];
var len__25947__auto___40768 = arguments.length;
var i__25948__auto___40769 = (0);
while(true){
if((i__25948__auto___40769 < len__25947__auto___40768)){
args40765.push((arguments[i__25948__auto___40769]));

var G__40770 = (i__25948__auto___40769 + (1));
i__25948__auto___40769 = G__40770;
continue;
} else {
}
break;
}

var G__40767 = args40765.length;
switch (G__40767) {
case 1:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40765.length)].join('')));

}
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$1 = (function (child){
return om_bootstrap.util.clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});

om_bootstrap.util.clone_with_props.cljs$core$IFn$_invoke$arity$2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(cljs.core.truth_(om_bootstrap.util.om_component_QMARK_.call(null,child))){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});

om_bootstrap.util.clone_with_props.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=util.js.map?rel=1484804412935