// Compiled by ClojureScript 1.9.89 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__33214__33215__auto__){
if(!((p1__33214__33215__auto__ == null))){
if((false) || (p1__33214__33215__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__33214__33215__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__33214__33215__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__33214__33215__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.cond_pre.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__34715_SHARP_){
return (cljs.core.val.call(null,p1__34715_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__34719 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__34719,(0),null);
var v = cljs.core.nth.call(null,vec__34719,(1),null);
var p = vec__34719;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return s1;

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___34727 = schema.utils.use_fn_validation;
var output_schema34722_34728 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema34723_34729 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker34724_34730 = schema.core.checker.call(null,input_schema34723_34729);
var output_checker34725_34731 = schema.core.checker.call(null,output_schema34722_34728);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___34727,output_schema34722_34728,input_schema34723_34729,input_checker34724_34730,output_checker34725_34731){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__34726){
var validate__32480__auto__ = ufv___34727.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___34732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34726], null);
var temp__4657__auto___34733 = input_checker34724_34730.call(null,args__32481__auto___34732);
if(cljs.core.truth_(temp__4657__auto___34733)){
var error__32482__auto___34734 = temp__4657__auto___34733;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__32482__auto___34734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34723_34729,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___34732,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34734], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var k = G__34726;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___34735 = output_checker34725_34731.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___34735)){
var error__32482__auto___34736 = temp__4657__auto___34735;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__32482__auto___34736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34722_34728,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34736], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___34727,output_schema34722_34728,input_schema34723_34729,input_checker34724_34730,output_checker34725_34731))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema34722_34728,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34723_34729], null)));
var ufv___34742 = schema.utils.use_fn_validation;
var output_schema34737_34743 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema34738_34744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker34739_34745 = schema.core.checker.call(null,input_schema34738_34744);
var output_checker34740_34746 = schema.core.checker.call(null,output_schema34737_34743);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___34742,output_schema34737_34743,input_schema34738_34744,input_checker34739_34745,output_checker34740_34746){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__34741){
var validate__32480__auto__ = ufv___34742.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___34747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34741], null);
var temp__4657__auto___34748 = input_checker34739_34745.call(null,args__32481__auto___34747);
if(cljs.core.truth_(temp__4657__auto___34748)){
var error__32482__auto___34749 = temp__4657__auto___34748;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__32482__auto___34749)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34738_34744,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___34747,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34749], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var s = G__34741;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___34750 = output_checker34740_34746.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___34750)){
var error__32482__auto___34751 = temp__4657__auto___34750;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__32482__auto___34751)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34737_34743,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34751], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___34742,output_schema34737_34743,input_schema34738_34744,input_checker34739_34745,output_checker34740_34746))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema34737_34743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34738_34744], null)));
var ufv___34757 = schema.utils.use_fn_validation;
var output_schema34752_34758 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema34753_34759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker34754_34760 = schema.core.checker.call(null,input_schema34753_34759);
var output_checker34755_34761 = schema.core.checker.call(null,output_schema34752_34758);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___34757,output_schema34752_34758,input_schema34753_34759,input_checker34754_34760,output_checker34755_34761){
return (function plumbing$fnk$schema$split_schema_keys(G__34756){
var validate__32480__auto__ = ufv___34757.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___34762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34756], null);
var temp__4657__auto___34763 = input_checker34754_34760.call(null,args__32481__auto___34762);
if(cljs.core.truth_(temp__4657__auto___34763)){
var error__32482__auto___34764 = temp__4657__auto___34763;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__32482__auto___34764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34753_34759,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___34762,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34764], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var s = G__34756;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___34765 = output_checker34755_34761.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___34765)){
var error__32482__auto___34766 = temp__4657__auto___34765;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__32482__auto___34766)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34752_34758,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34766], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___34757,output_schema34752_34758,input_schema34753_34759,input_checker34754_34760,output_checker34755_34761))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema34752_34758,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34753_34759], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__25954__auto__ = [];
var len__25947__auto___34778 = arguments.length;
var i__25948__auto___34779 = (0);
while(true){
if((i__25948__auto___34779 < len__25947__auto___34778)){
args__25954__auto__.push((arguments[i__25948__auto___34779]));

var G__34780 = (i__25948__auto___34779 + (1));
i__25948__auto___34779 = G__34780;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__34771){
var vec__34772 = p__34771;
var k = cljs.core.nth.call(null,vec__34772,(0),null);
var v = cljs.core.nth.call(null,vec__34772,(1),null);
var pk = key_project.call(null,k);
var temp__4655__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__34775 = temp__4655__auto__;
var ok = cljs.core.nth.call(null,vec__34775,(0),null);
var ov = cljs.core.nth.call(null,vec__34775,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq34767){
var G__34768 = cljs.core.first.call(null,seq34767);
var seq34767__$1 = cljs.core.next.call(null,seq34767);
var G__34769 = cljs.core.first.call(null,seq34767__$1);
var seq34767__$2 = cljs.core.next.call(null,seq34767__$1);
var G__34770 = cljs.core.first.call(null,seq34767__$2);
var seq34767__$3 = cljs.core.next.call(null,seq34767__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__34768,G__34769,G__34770,seq34767__$3);
});

var ufv___34788 = schema.utils.use_fn_validation;
var output_schema34782_34789 = plumbing.fnk.schema.InputSchema;
var input_schema34783_34790 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker34784_34791 = schema.core.checker.call(null,input_schema34783_34790);
var output_checker34785_34792 = schema.core.checker.call(null,output_schema34782_34789);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___34788,output_schema34782_34789,input_schema34783_34790,input_checker34784_34791,output_checker34785_34792){
return (function plumbing$fnk$schema$union_input_schemata(G__34786,G__34787){
var validate__32480__auto__ = ufv___34788.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___34793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34786,G__34787], null);
var temp__4657__auto___34794 = input_checker34784_34791.call(null,args__32481__auto___34793);
if(cljs.core.truth_(temp__4657__auto___34794)){
var error__32482__auto___34795 = temp__4657__auto___34794;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__32482__auto___34795)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34783_34790,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___34793,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34795], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var i1 = G__34786;
var i2 = G__34787;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__32480__auto__,ufv___34788,output_schema34782_34789,input_schema34783_34790,input_checker34784_34791,output_checker34785_34792){
return (function (p1__34781_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__34781_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__34781_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__32480__auto__,ufv___34788,output_schema34782_34789,input_schema34783_34790,input_checker34784_34791,output_checker34785_34792))
,((function (validate__32480__auto__,ufv___34788,output_schema34782_34789,input_schema34783_34790,input_checker34784_34791,output_checker34785_34792){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error("Assert failed: (= k1 k2)"));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__32480__auto__,ufv___34788,output_schema34782_34789,input_schema34783_34790,input_checker34784_34791,output_checker34785_34792))
,((function (validate__32480__auto__,ufv___34788,output_schema34782_34789,input_schema34783_34790,input_checker34784_34791,output_checker34785_34792){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__24860__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__24860__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__24860__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__32480__auto__,ufv___34788,output_schema34782_34789,input_schema34783_34790,input_checker34784_34791,output_checker34785_34792))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___34796 = output_checker34785_34792.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___34796)){
var error__32482__auto___34797 = temp__4657__auto___34796;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__32482__auto___34797)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34782_34789,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34797], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___34788,output_schema34782_34789,input_schema34783_34790,input_checker34784_34791,output_checker34785_34792))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema34782_34789,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34783_34790], null)));
var ufv___34803 = schema.utils.use_fn_validation;
var output_schema34798_34804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema34799_34805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker34800_34806 = schema.core.checker.call(null,input_schema34799_34805);
var output_checker34801_34807 = schema.core.checker.call(null,output_schema34798_34804);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___34803,output_schema34798_34804,input_schema34799_34805,input_checker34800_34806,output_checker34801_34807){
return (function plumbing$fnk$schema$required_toplevel_keys(G__34802){
var validate__32480__auto__ = ufv___34803.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___34808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34802], null);
var temp__4657__auto___34809 = input_checker34800_34806.call(null,args__32481__auto___34808);
if(cljs.core.truth_(temp__4657__auto___34809)){
var error__32482__auto___34810 = temp__4657__auto___34809;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__32482__auto___34810)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34799_34805,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___34808,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34810], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var input_schema = G__34802;
while(true){
return cljs.core.keep.call(null,((function (validate__32480__auto__,ufv___34803,output_schema34798_34804,input_schema34799_34805,input_checker34800_34806,output_checker34801_34807){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__32480__auto__,ufv___34803,output_schema34798_34804,input_schema34799_34805,input_checker34800_34806,output_checker34801_34807))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___34811 = output_checker34801_34807.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___34811)){
var error__32482__auto___34812 = temp__4657__auto___34811;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__32482__auto___34812)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34798_34804,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34812], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___34803,output_schema34798_34804,input_schema34799_34805,input_checker34800_34806,output_checker34801_34807))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema34798_34804,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34799_34805], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__34829(s__34830){
return (new cljs.core.LazySeq(null,(function (){
var s__34830__$1 = s__34830;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34830__$1);
if(temp__4657__auto__){
var s__34830__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34830__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34830__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34832 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34831 = (0);
while(true){
if((i__34831 < size__25651__auto__)){
var vec__34839 = cljs.core._nth.call(null,c__25650__auto__,i__34831);
var k = cljs.core.nth.call(null,vec__34839,(0),null);
var v = cljs.core.nth.call(null,vec__34839,(1),null);
cljs.core.chunk_append.call(null,b__34832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__34845 = (i__34831 + (1));
i__34831 = G__34845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34832),plumbing$fnk$schema$guess_expr_output_schema_$_iter__34829.call(null,cljs.core.chunk_rest.call(null,s__34830__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34832),null);
}
} else {
var vec__34842 = cljs.core.first.call(null,s__34830__$2);
var k = cljs.core.nth.call(null,vec__34842,(0),null);
var v = cljs.core.nth.call(null,vec__34842,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__34829.call(null,cljs.core.rest.call(null,s__34830__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.explain.call(null,output_schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__34862(s__34863){
return (new cljs.core.LazySeq(null,(function (){
var s__34863__$1 = s__34863;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34863__$1);
if(temp__4657__auto__){
var s__34863__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34863__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34863__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34865 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34864 = (0);
while(true){
if((i__34864 < size__25651__auto__)){
var vec__34872 = cljs.core._nth.call(null,c__25650__auto__,i__34864);
var k = cljs.core.nth.call(null,vec__34872,(0),null);
var v = cljs.core.nth.call(null,vec__34872,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__24872__auto__ = required_QMARK_;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__34865,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__34878 = (i__34864 + (1));
i__34864 = G__34878;
continue;
} else {
var G__34879 = (i__34864 + (1));
i__34864 = G__34879;
continue;
}
} else {
var G__34880 = (i__34864 + (1));
i__34864 = G__34880;
continue;
}
} else {
var G__34881 = (i__34864 + (1));
i__34864 = G__34881;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34865),plumbing$fnk$schema$schema_diff_$_iter__34862.call(null,cljs.core.chunk_rest.call(null,s__34863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34865),null);
}
} else {
var vec__34875 = cljs.core.first.call(null,s__34863__$2);
var k = cljs.core.nth.call(null,vec__34875,(0),null);
var v = cljs.core.nth.call(null,vec__34875,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__24872__auto__ = required_QMARK_;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__34862.call(null,cljs.core.rest.call(null,s__34863__$2)));
} else {
var G__34882 = cljs.core.rest.call(null,s__34863__$2);
s__34863__$1 = G__34882;
continue;
}
} else {
var G__34883 = cljs.core.rest.call(null,s__34863__$2);
s__34863__$1 = G__34883;
continue;
}
} else {
var G__34884 = cljs.core.rest.call(null,s__34863__$2);
s__34863__$1 = G__34884;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___34931 = schema.utils.use_fn_validation;
var output_schema34885_34932 = schema.core.Any;
var input_schema34886_34933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker34887_34934 = schema.core.checker.call(null,input_schema34886_34933);
var output_checker34888_34935 = schema.core.checker.call(null,output_schema34885_34932);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___34931,output_schema34885_34932,input_schema34886_34933,input_checker34887_34934,output_checker34888_34935){
return (function plumbing$fnk$schema$compose_schemata(G__34889,G__34890){
var validate__32480__auto__ = true;
if(validate__32480__auto__){
var args__32481__auto___34936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34889,G__34890], null);
var temp__4657__auto___34937 = input_checker34887_34934.call(null,args__32481__auto___34936);
if(cljs.core.truth_(temp__4657__auto___34937)){
var error__32482__auto___34938 = temp__4657__auto___34937;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__32482__auto___34938)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34886_34933,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___34936,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34938], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var G__34917 = G__34889;
var vec__34919 = G__34917;
var i2 = cljs.core.nth.call(null,vec__34919,(0),null);
var o2 = cljs.core.nth.call(null,vec__34919,(1),null);
var G__34918 = G__34890;
var vec__34922 = G__34918;
var i1 = cljs.core.nth.call(null,vec__34922,(0),null);
var o1 = cljs.core.nth.call(null,vec__34922,(1),null);
var G__34917__$1 = G__34917;
var G__34918__$1 = G__34918;
while(true){
var vec__34925 = G__34917__$1;
var i2__$1 = cljs.core.nth.call(null,vec__34925,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__34925,(1),null);
var vec__34928 = G__34918__$1;
var i1__$1 = cljs.core.nth.call(null,vec__34928,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__34928,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__32480__auto__){
var temp__4657__auto___34939 = output_checker34888_34935.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___34939)){
var error__32482__auto___34940 = temp__4657__auto___34939;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__32482__auto___34940)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34885_34932,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___34940], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___34931,output_schema34885_34932,input_schema34886_34933,input_checker34887_34934,output_checker34888_34935))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema34885_34932,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34886_34933], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___35083 = schema.utils.use_fn_validation;
var output_schema34941_35084 = schema.core.Any;
var input_schema34942_35085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker34943_35086 = schema.core.checker.call(null,input_schema34942_35085);
var output_checker34944_35087 = schema.core.checker.call(null,output_schema34941_35084);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087){
return (function plumbing$fnk$schema$split_schema(G__34945,G__34946){
var validate__32480__auto__ = ufv___35083.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___35088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__34945,G__34946], null);
var temp__4657__auto___35089 = input_checker34943_35086.call(null,args__32481__auto___35088);
if(cljs.core.truth_(temp__4657__auto___35089)){
var error__32482__auto___35090 = temp__4657__auto___35089;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__32482__auto___35090)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema34942_35085,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___35088,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___35090], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var s = G__34945;
var ks = G__34946;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__25652__auto__ = ((function (ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087){
return (function plumbing$fnk$schema$split_schema_$_iter__35015(s__35016){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087){
return (function (){
var s__35016__$1 = s__35016;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35016__$1);
if(temp__4657__auto__){
var s__35016__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35016__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__35016__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__35018 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__35017 = (0);
while(true){
if((i__35017 < size__25651__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__25650__auto__,i__35017);
cljs.core.chunk_append.call(null,b__35018,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = ((function (i__35017,in_QMARK_,c__25650__auto__,size__25651__auto__,b__35018,s__35016__$2,temp__4657__auto__,ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087){
return (function plumbing$fnk$schema$split_schema_$_iter__35015_$_iter__35051(s__35052){
return (new cljs.core.LazySeq(null,((function (i__35017,in_QMARK_,c__25650__auto__,size__25651__auto__,b__35018,s__35016__$2,temp__4657__auto__,ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087){
return (function (){
var s__35052__$1 = s__35052;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__35052__$1);
if(temp__4657__auto____$1){
var s__35052__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35052__$2)){
var c__25650__auto____$1 = cljs.core.chunk_first.call(null,s__35052__$2);
var size__25651__auto____$1 = cljs.core.count.call(null,c__25650__auto____$1);
var b__35054 = cljs.core.chunk_buffer.call(null,size__25651__auto____$1);
if((function (){var i__35053 = (0);
while(true){
if((i__35053 < size__25651__auto____$1)){
var vec__35061 = cljs.core._nth.call(null,c__25650__auto____$1,i__35053);
var k = cljs.core.nth.call(null,vec__35061,(0),null);
var v = cljs.core.nth.call(null,vec__35061,(1),null);
if(cljs.core.truth_((function (){var and__24860__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24860__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__35054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35091 = (i__35053 + (1));
i__35053 = G__35091;
continue;
} else {
var G__35092 = (i__35053 + (1));
i__35053 = G__35092;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35054),plumbing$fnk$schema$split_schema_$_iter__35015_$_iter__35051.call(null,cljs.core.chunk_rest.call(null,s__35052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35054),null);
}
} else {
var vec__35064 = cljs.core.first.call(null,s__35052__$2);
var k = cljs.core.nth.call(null,vec__35064,(0),null);
var v = cljs.core.nth.call(null,vec__35064,(1),null);
if(cljs.core.truth_((function (){var and__24860__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24860__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__35015_$_iter__35051.call(null,cljs.core.rest.call(null,s__35052__$2)));
} else {
var G__35093 = cljs.core.rest.call(null,s__35052__$2);
s__35052__$1 = G__35093;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__35017,in_QMARK_,c__25650__auto__,size__25651__auto__,b__35018,s__35016__$2,temp__4657__auto__,ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087))
,null,null));
});})(i__35017,in_QMARK_,c__25650__auto__,size__25651__auto__,b__35018,s__35016__$2,temp__4657__auto__,ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087))
;
return iter__25652__auto__.call(null,s);
})()));

var G__35094 = (i__35017 + (1));
i__35017 = G__35094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35018),plumbing$fnk$schema$split_schema_$_iter__35015.call(null,cljs.core.chunk_rest.call(null,s__35016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35018),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__35016__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = ((function (in_QMARK_,s__35016__$2,temp__4657__auto__,ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087){
return (function plumbing$fnk$schema$split_schema_$_iter__35015_$_iter__35067(s__35068){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__35016__$2,temp__4657__auto__,ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087){
return (function (){
var s__35068__$1 = s__35068;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__35068__$1);
if(temp__4657__auto____$1){
var s__35068__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35068__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__35068__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__35070 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__35069 = (0);
while(true){
if((i__35069 < size__25651__auto__)){
var vec__35077 = cljs.core._nth.call(null,c__25650__auto__,i__35069);
var k = cljs.core.nth.call(null,vec__35077,(0),null);
var v = cljs.core.nth.call(null,vec__35077,(1),null);
if(cljs.core.truth_((function (){var and__24860__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24860__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__35070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35095 = (i__35069 + (1));
i__35069 = G__35095;
continue;
} else {
var G__35096 = (i__35069 + (1));
i__35069 = G__35096;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35070),plumbing$fnk$schema$split_schema_$_iter__35015_$_iter__35067.call(null,cljs.core.chunk_rest.call(null,s__35068__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35070),null);
}
} else {
var vec__35080 = cljs.core.first.call(null,s__35068__$2);
var k = cljs.core.nth.call(null,vec__35080,(0),null);
var v = cljs.core.nth.call(null,vec__35080,(1),null);
if(cljs.core.truth_((function (){var and__24860__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__24860__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__35015_$_iter__35067.call(null,cljs.core.rest.call(null,s__35068__$2)));
} else {
var G__35097 = cljs.core.rest.call(null,s__35068__$2);
s__35068__$1 = G__35097;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__35016__$2,temp__4657__auto__,ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087))
,null,null));
});})(in_QMARK_,s__35016__$2,temp__4657__auto__,ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087))
;
return iter__25652__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__35015.call(null,cljs.core.rest.call(null,s__35016__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087))
,null,null));
});})(ks__$1,validate__32480__auto__,ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087))
;
return iter__25652__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___35098 = output_checker34944_35087.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___35098)){
var error__32482__auto___35099 = temp__4657__auto___35098;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__32482__auto___35099)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema34941_35084,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___35099], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___35083,output_schema34941_35084,input_schema34942_35085,input_checker34943_35086,output_checker34944_35087))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema34941_35084,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema34942_35085], null)));
var ufv___35170 = schema.utils.use_fn_validation;
var output_schema35100_35171 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema35101_35172 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker35102_35173 = schema.core.checker.call(null,input_schema35101_35172);
var output_checker35103_35174 = schema.core.checker.call(null,output_schema35100_35171);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___35170,output_schema35100_35171,input_schema35101_35172,input_checker35102_35173,output_checker35103_35174){
return (function plumbing$fnk$schema$sequence_schemata(G__35104,G__35105){
var validate__32480__auto__ = ufv___35170.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___35175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35104,G__35105], null);
var temp__4657__auto___35176 = input_checker35102_35173.call(null,args__32481__auto___35175);
if(cljs.core.truth_(temp__4657__auto___35176)){
var error__32482__auto___35177 = temp__4657__auto___35176;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__32482__auto___35177)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35101_35172,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___35175,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___35177], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var G__35147 = G__35104;
var vec__35149 = G__35147;
var i1 = cljs.core.nth.call(null,vec__35149,(0),null);
var o1 = cljs.core.nth.call(null,vec__35149,(1),null);
var G__35148 = G__35105;
var vec__35152 = G__35148;
var k = cljs.core.nth.call(null,vec__35152,(0),null);
var vec__35155 = cljs.core.nth.call(null,vec__35152,(1),null);
var i2 = cljs.core.nth.call(null,vec__35155,(0),null);
var o2 = cljs.core.nth.call(null,vec__35155,(1),null);
var G__35147__$1 = G__35147;
var G__35148__$1 = G__35148;
while(true){
var vec__35158 = G__35147__$1;
var i1__$1 = cljs.core.nth.call(null,vec__35158,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__35158,(1),null);
var vec__35161 = G__35148__$1;
var k__$1 = cljs.core.nth.call(null,vec__35161,(0),null);
var vec__35164 = cljs.core.nth.call(null,vec__35161,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__35164,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__35164,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__35167 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__35167,(0),null);
var unused = cljs.core.nth.call(null,vec__35167,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___35178 = output_checker35103_35174.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___35178)){
var error__32482__auto___35179 = temp__4657__auto___35178;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__32482__auto___35179)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35100_35171,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___35179], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___35170,output_schema35100_35171,input_schema35101_35172,input_checker35102_35173,output_checker35103_35174))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema35100_35171,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35101_35172], null)));

//# sourceMappingURL=schema.js.map?rel=1484804405794