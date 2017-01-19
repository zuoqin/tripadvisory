// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___46410 = schema.utils.use_fn_validation;
var output_schema46404_46411 = schema.core.Any;
var input_schema46405_46412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)], null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46406_46413 = schema.core.checker.call(null,input_schema46405_46412);
var output_checker46407_46414 = schema.core.checker.call(null,output_schema46404_46411);
/**
 * Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
 */
om_bootstrap.button.render_anchor = ((function (ufv___46410,output_schema46404_46411,input_schema46405_46412,input_checker46406_46413,output_checker46407_46414){
return (function om_bootstrap$button$render_anchor(G__46408,G__46409){
var validate__32480__auto__ = ufv___46410.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46408,G__46409], null);
var temp__4657__auto___46416 = input_checker46406_46413.call(null,args__32481__auto___46415);
if(cljs.core.truth_(temp__4657__auto___46416)){
var error__32482__auto___46417 = temp__4657__auto___46416;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46417)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46405_46412,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46415,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46417], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__46408;
var children = G__46409;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46418 = output_checker46407_46414.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46418)){
var error__32482__auto___46419 = temp__4657__auto___46418;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46419)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46404_46411,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46419], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46410,output_schema46404_46411,input_schema46405_46412,input_checker46406_46413,output_checker46407_46414))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema46404_46411,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46405_46412], null)));
var ufv___46431 = schema.utils.use_fn_validation;
var output_schema46420_46432 = om_bootstrap.types.Component;
var input_schema46421_46433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,cljs.core.with_meta(new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Button","Button",-1787718586,null)], null))),schema.core.Any], null);
var input_checker46422_46434 = schema.core.checker.call(null,input_schema46421_46433);
var output_checker46423_46435 = schema.core.checker.call(null,output_schema46420_46432);
/**
 * Inputs: [props :- Button & children]
 *   Returns: t/Component
 * 
 *   Renders a button.
 */
om_bootstrap.button.button = ((function (ufv___46431,output_schema46420_46432,input_schema46421_46433,input_checker46422_46434,output_checker46423_46435){
return (function om_bootstrap$button$button(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46436 = arguments.length;
var i__25948__auto___46437 = (0);
while(true){
if((i__25948__auto___46437 < len__25947__auto___46436)){
args__25954__auto__.push((arguments[i__25948__auto___46437]));

var G__46438 = (i__25948__auto___46437 + (1));
i__25948__auto___46437 = G__46438;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___46431,output_schema46420_46432,input_schema46421_46433,input_checker46422_46434,output_checker46423_46435))
;

om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___46431,output_schema46420_46432,input_schema46421_46433,input_checker46422_46434,output_checker46423_46435){
return (function (G__46424,rest46425){
var validate__32480__auto__ = ufv___46431.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46439 = cljs.core.list_STAR_.call(null,G__46424,rest46425);
var temp__4657__auto___46440 = input_checker46422_46434.call(null,args__32481__auto___46439);
if(cljs.core.truth_(temp__4657__auto___46440)){
var error__32482__auto___46441 = temp__4657__auto___46440;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__32482__auto___46441)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46421_46433,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46439,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46441], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var props = G__46424;
var children = rest46425;
while(true){
var vec__46428 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__46428,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__46428,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46442 = output_checker46423_46435.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46442)){
var error__32482__auto___46443 = temp__4657__auto___46442;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button."], null)),cljs.core.pr_str.call(null,error__32482__auto___46443)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46420_46432,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46443], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46431,output_schema46420_46432,input_schema46421_46433,input_checker46422_46434,output_checker46423_46435))
;

om_bootstrap.button.button.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button.cljs$lang$applyTo = ((function (ufv___46431,output_schema46420_46432,input_schema46421_46433,input_checker46422_46434,output_checker46423_46435){
return (function (seq46426){
var G__46427 = cljs.core.first.call(null,seq46426);
var seq46426__$1 = cljs.core.next.call(null,seq46426);
return om_bootstrap.button.button.cljs$core$IFn$_invoke$arity$variadic(G__46427,seq46426__$1);
});})(ufv___46431,output_schema46420_46432,input_schema46421_46433,input_checker46422_46434,output_checker46423_46435))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema46420_46432,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46421_46433], null)));
var ufv___46455 = schema.utils.use_fn_validation;
var output_schema46444_46456 = om_bootstrap.types.Component;
var input_schema46445_46457 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.Any], null);
var input_checker46446_46458 = schema.core.checker.call(null,input_schema46445_46457);
var output_checker46447_46459 = schema.core.checker.call(null,output_schema46444_46456);
/**
 * Inputs: [opts & children]
 *   Returns: t/Component
 * 
 *   Renders a button toolbar.
 */
om_bootstrap.button.toolbar = ((function (ufv___46455,output_schema46444_46456,input_schema46445_46457,input_checker46446_46458,output_checker46447_46459){
return (function om_bootstrap$button$toolbar(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46460 = arguments.length;
var i__25948__auto___46461 = (0);
while(true){
if((i__25948__auto___46461 < len__25947__auto___46460)){
args__25954__auto__.push((arguments[i__25948__auto___46461]));

var G__46462 = (i__25948__auto___46461 + (1));
i__25948__auto___46461 = G__46462;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___46455,output_schema46444_46456,input_schema46445_46457,input_checker46446_46458,output_checker46447_46459))
;

om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___46455,output_schema46444_46456,input_schema46445_46457,input_checker46446_46458,output_checker46447_46459){
return (function (G__46448,rest46449){
var validate__32480__auto__ = ufv___46455.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46463 = cljs.core.list_STAR_.call(null,G__46448,rest46449);
var temp__4657__auto___46464 = input_checker46446_46458.call(null,args__32481__auto___46463);
if(cljs.core.truth_(temp__4657__auto___46464)){
var error__32482__auto___46465 = temp__4657__auto___46464;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__32482__auto___46465)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46445_46457,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46463,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46465], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__46448;
var children = rest46449;
while(true){
var vec__46452 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__46452,(0),null);
var props = cljs.core.nth.call(null,vec__46452,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"role": "toolbar", "className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46466 = output_checker46447_46459.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46466)){
var error__32482__auto___46467 = temp__4657__auto___46466;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders a button toolbar."], null)),cljs.core.pr_str.call(null,error__32482__auto___46467)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46444_46456,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46467], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46455,output_schema46444_46456,input_schema46445_46457,input_checker46446_46458,output_checker46447_46459))
;

om_bootstrap.button.toolbar.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.toolbar.cljs$lang$applyTo = ((function (ufv___46455,output_schema46444_46456,input_schema46445_46457,input_checker46446_46458,output_checker46447_46459){
return (function (seq46450){
var G__46451 = cljs.core.first.call(null,seq46450);
var seq46450__$1 = cljs.core.next.call(null,seq46450);
return om_bootstrap.button.toolbar.cljs$core$IFn$_invoke$arity$variadic(G__46451,seq46450__$1);
});})(ufv___46455,output_schema46444_46456,input_schema46445_46457,input_checker46446_46458,output_checker46447_46459))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema46444_46456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46445_46457], null)));
var ufv___46479 = schema.utils.use_fn_validation;
var output_schema46468_46480 = om_bootstrap.types.Component;
var input_schema46469_46481 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null)], null))),schema.core.Any], null);
var input_checker46470_46482 = schema.core.checker.call(null,input_schema46469_46481);
var output_checker46471_46483 = schema.core.checker.call(null,output_schema46468_46480);
/**
 * Inputs: [opts :- ButtonGroup & children]
 *   Returns: t/Component
 * 
 *   Renders the supplied children in a wrapping button-group div.
 */
om_bootstrap.button.button_group = ((function (ufv___46479,output_schema46468_46480,input_schema46469_46481,input_checker46470_46482,output_checker46471_46483){
return (function om_bootstrap$button$button_group(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46484 = arguments.length;
var i__25948__auto___46485 = (0);
while(true){
if((i__25948__auto___46485 < len__25947__auto___46484)){
args__25954__auto__.push((arguments[i__25948__auto___46485]));

var G__46486 = (i__25948__auto___46485 + (1));
i__25948__auto___46485 = G__46486;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___46479,output_schema46468_46480,input_schema46469_46481,input_checker46470_46482,output_checker46471_46483))
;

om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___46479,output_schema46468_46480,input_schema46469_46481,input_checker46470_46482,output_checker46471_46483){
return (function (G__46472,rest46473){
var validate__32480__auto__ = ufv___46479.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46487 = cljs.core.list_STAR_.call(null,G__46472,rest46473);
var temp__4657__auto___46488 = input_checker46470_46482.call(null,args__32481__auto___46487);
if(cljs.core.truth_(temp__4657__auto___46488)){
var error__32482__auto___46489 = temp__4657__auto___46488;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__32482__auto___46489)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46469_46481,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46487,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46489], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__46472;
var children = rest46473;
while(true){
var vec__46476 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__46476,(0),null);
var props = cljs.core.nth.call(null,vec__46476,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46490 = output_checker46471_46483.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46490)){
var error__32482__auto___46491 = temp__4657__auto___46490;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"button-group","button-group",108385979,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Renders the supplied children in a wrapping button-group div."], null)),cljs.core.pr_str.call(null,error__32482__auto___46491)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46468_46480,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46491], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46479,output_schema46468_46480,input_schema46469_46481,input_checker46470_46482,output_checker46471_46483))
;

om_bootstrap.button.button_group.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.button_group.cljs$lang$applyTo = ((function (ufv___46479,output_schema46468_46480,input_schema46469_46481,input_checker46470_46482,output_checker46471_46483){
return (function (seq46474){
var G__46475 = cljs.core.first.call(null,seq46474);
var seq46474__$1 = cljs.core.next.call(null,seq46474);
return om_bootstrap.button.button_group.cljs$core$IFn$_invoke$arity$variadic(G__46475,seq46474__$1);
});})(ufv___46479,output_schema46468_46480,input_schema46469_46481,input_checker46470_46482,output_checker46471_46483))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema46468_46480,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46469_46481], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function om_bootstrap$button$render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function om_bootstrap$button$render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__36225__auto___46527 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema46496 = schema.core.Any;
var input_schema46497 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map46495","map46495",472353844,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker46498 = schema.core.checker.call(null,input_schema46497);
var output_checker46499 = schema.core.checker.call(null,output_schema46496);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499){
return (function om_bootstrap$button$constructor46493(G__46500){
var validate__32480__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46500], null);
var temp__4657__auto___46529 = input_checker46498.call(null,args__32481__auto___46528);
if(cljs.core.truth_(temp__4657__auto___46529)){
var error__32482__auto___46530 = temp__4657__auto___46529;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor46493","constructor46493",-894439087,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46530)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46497,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46528,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46530], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var map46495 = G__46500;
while(true){
if(cljs.core.map_QMARK_.call(null,map46495)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map46495)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map46495,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button46509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button46509 = (function (input_checker46498,validate__32480__auto__,owner,G__46500,output_schema46496,input_schema46497,constructor46493,output_checker46499,map46495,ufv__,meta46510){
this.input_checker46498 = input_checker46498;
this.validate__32480__auto__ = validate__32480__auto__;
this.owner = owner;
this.G__46500 = G__46500;
this.output_schema46496 = output_schema46496;
this.input_schema46497 = input_schema46497;
this.constructor46493 = constructor46493;
this.output_checker46499 = output_checker46499;
this.map46495 = map46495;
this.ufv__ = ufv__;
this.meta46510 = meta46510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button46509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499){
return (function (_46511,meta46510__$1){
var self__ = this;
var _46511__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button46509(self__.input_checker46498,self__.validate__32480__auto__,self__.owner,self__.G__46500,self__.output_schema46496,self__.input_schema46497,self__.constructor46493,self__.output_checker46499,self__.map46495,self__.ufv__,meta46510__$1));
});})(owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499))
;

om_bootstrap.button.t_om_bootstrap$button46509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499){
return (function (_46511){
var self__ = this;
var _46511__$1 = this;
return self__.meta46510;
});})(owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499))
;

om_bootstrap.button.t_om_bootstrap$button46509.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button46509.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499))
;

om_bootstrap.button.t_om_bootstrap$button46509.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button46509.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__46512 = om.core.get_props.call(null,self__.owner);
var map__46512__$1 = ((((!((map__46512 == null)))?((((map__46512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46512):map__46512);
var opts = cljs.core.get.call(null,map__46512__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__46512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__46513 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__46513,(0),null);
var props = cljs.core.nth.call(null,vec__46513,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__46512,map__46512__$1,opts,children,vec__46513,bs,props,classes,___$1,owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499){
return (function (e){
var temp__4657__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var on_select = temp__4657__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__46512,map__46512__$1,opts,children,vec__46513,bs,props,classes,___$1,owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"onClick": om_tools.dom.format_opts.call(null,handle_click), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "tabIndex": "-1"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var k = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499))
;

om_bootstrap.button.t_om_bootstrap$button46509.getBasis = ((function (owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker46498","input-checker46498",-984608736,null),new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46500","G__46500",705162,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"output-schema46496","output-schema46496",-589336790,null),new cljs.core.Symbol(null,"input-schema46497","input-schema46497",854853610,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor46493","constructor46493",-894439087,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker46499","output-checker46499",411514226,null),new cljs.core.Symbol(null,"map46495","map46495",472353844,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta46510","meta46510",900552323,null)], null);
});})(owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499))
;

om_bootstrap.button.t_om_bootstrap$button46509.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button46509.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button46509";

om_bootstrap.button.t_om_bootstrap$button46509.cljs$lang$ctorPrWriter = ((function (owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"om-bootstrap.button/t_om_bootstrap$button46509");
});})(owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499))
;

om_bootstrap.button.__GT_t_om_bootstrap$button46509 = ((function (owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499){
return (function om_bootstrap$button$constructor46493_$___GT_t_om_bootstrap$button46509(input_checker46498__$1,validate__32480__auto____$1,owner__$1,G__46500__$1,output_schema46496__$1,input_schema46497__$1,constructor46493__$1,output_checker46499__$1,map46495__$1,ufv____$1,meta46510){
return (new om_bootstrap.button.t_om_bootstrap$button46509(input_checker46498__$1,validate__32480__auto____$1,owner__$1,G__46500__$1,output_schema46496__$1,input_schema46497__$1,constructor46493__$1,output_checker46499__$1,map46495__$1,ufv____$1,meta46510));
});})(owner,validate__32480__auto__,ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button46509(input_checker46498,validate__32480__auto__,owner,G__46500,output_schema46496,input_schema46497,om_bootstrap$button$constructor46493,output_checker46499,map46495,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46531 = output_checker46499.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46531)){
var error__32482__auto___46532 = temp__4657__auto___46531;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor46493","constructor46493",-894439087,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46532)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46496,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46532], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv__,output_schema46496,input_schema46497,input_checker46498,output_checker46499))
,schema.core.make_fn_schema.call(null,output_schema46496,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46497], null)));
})();
/**
 * Generates an Om component of a menu item. Done this way so that
 *   wrapping dropdowns will have access to the Om state.
 */
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__36225__auto___46527){
return (function om_bootstrap$button$menu_item_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46533 = arguments.length;
var i__25948__auto___46534 = (0);
while(true){
if((i__25948__auto___46534 < len__25947__auto___46533)){
args__25954__auto__.push((arguments[i__25948__auto___46534]));

var G__46535 = (i__25948__auto___46534 + (1));
i__25948__auto___46534 = G__46535;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});})(component_fnk__36225__auto___46527))
;

om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__36225__auto___46527){
return (function (data__36226__auto__,owner46492,p__46520){
var vec__46521 = p__46520;
var opts__36227__auto__ = cljs.core.nth.call(null,vec__46521,(0),null);
return component_fnk__36225__auto___46527.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__36227__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner46492,new cljs.core.Keyword(null,"data","data",-232669377),data__36226__auto__], null));
});})(component_fnk__36225__auto___46527))
;

om_bootstrap.button.menu_item_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.menu_item_STAR_.cljs$lang$applyTo = ((function (component_fnk__36225__auto___46527){
return (function (seq46517){
var G__46518 = cljs.core.first.call(null,seq46517);
var seq46517__$1 = cljs.core.next.call(null,seq46517);
var G__46519 = cljs.core.first.call(null,seq46517__$1);
var seq46517__$2 = cljs.core.next.call(null,seq46517__$1);
return om_bootstrap.button.menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__46518,G__46519,seq46517__$2);
});})(component_fnk__36225__auto___46527))
;


om_bootstrap.button.__GT_menu_item_STAR_ = (function om_bootstrap$button$__GT_menu_item_STAR_(var_args){
var args46524 = [];
var len__25947__auto___46536 = arguments.length;
var i__25948__auto___46537 = (0);
while(true){
if((i__25948__auto___46537 < len__25947__auto___46536)){
args46524.push((arguments[i__25948__auto___46537]));

var G__46538 = (i__25948__auto___46537 + (1));
i__25948__auto___46537 = G__46538;
continue;
} else {
}
break;
}

var G__46526 = args46524.length;
switch (G__46526) {
case 1:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46524.length)].join('')));

}
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__36194__auto__);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m46494){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__36194__auto__,m46494);
});

om_bootstrap.button.__GT_menu_item_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___46548 = schema.utils.use_fn_validation;
var output_schema46540_46549 = om_bootstrap.types.Component;
var input_schema46541_46550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"MenuItem","MenuItem",1235363736,null)], null))),schema.core.Any], null);
var input_checker46542_46551 = schema.core.checker.call(null,input_schema46541_46550);
var output_checker46543_46552 = schema.core.checker.call(null,output_schema46540_46549);
/**
 * Inputs: [opts :- MenuItem & children]
 *   Returns: t/Component
 */
om_bootstrap.button.menu_item = ((function (ufv___46548,output_schema46540_46549,input_schema46541_46550,input_checker46542_46551,output_checker46543_46552){
return (function om_bootstrap$button$menu_item(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46553 = arguments.length;
var i__25948__auto___46554 = (0);
while(true){
if((i__25948__auto___46554 < len__25947__auto___46553)){
args__25954__auto__.push((arguments[i__25948__auto___46554]));

var G__46555 = (i__25948__auto___46554 + (1));
i__25948__auto___46554 = G__46555;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___46548,output_schema46540_46549,input_schema46541_46550,input_checker46542_46551,output_checker46543_46552))
;

om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___46548,output_schema46540_46549,input_schema46541_46550,input_checker46542_46551,output_checker46543_46552){
return (function (G__46544,rest46545){
var validate__32480__auto__ = ufv___46548.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46556 = cljs.core.list_STAR_.call(null,G__46544,rest46545);
var temp__4657__auto___46557 = input_checker46542_46551.call(null,args__32481__auto___46556);
if(cljs.core.truth_(temp__4657__auto___46557)){
var error__32482__auto___46558 = temp__4657__auto___46557;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46558)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46541_46550,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46556,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46558], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__46544;
var children = rest46545;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46559 = output_checker46543_46552.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46559)){
var error__32482__auto___46560 = temp__4657__auto___46559;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46560)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46540_46549,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46560], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46548,output_schema46540_46549,input_schema46541_46550,input_checker46542_46551,output_checker46543_46552))
;

om_bootstrap.button.menu_item.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.menu_item.cljs$lang$applyTo = ((function (ufv___46548,output_schema46540_46549,input_schema46541_46550,input_checker46542_46551,output_checker46543_46552){
return (function (seq46546){
var G__46547 = cljs.core.first.call(null,seq46546);
var seq46546__$1 = cljs.core.next.call(null,seq46546);
return om_bootstrap.button.menu_item.cljs$core$IFn$_invoke$arity$variadic(G__46547,seq46546__$1);
});})(ufv___46548,output_schema46540_46549,input_schema46541_46550,input_checker46542_46551,output_checker46543_46552))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema46540_46549,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46541_46550], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___46573 = schema.utils.use_fn_validation;
var output_schema46562_46574 = om_bootstrap.types.Component;
var input_schema46563_46575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownMenu","DropdownMenu",881901742,null)], null))),schema.core.Any], null);
var input_checker46564_46576 = schema.core.checker.call(null,input_schema46563_46575);
var output_checker46565_46577 = schema.core.checker.call(null,output_schema46562_46574);
/**
 * Inputs: [opts :- DropdownMenu & children]
 *   Returns: t/Component
 */
om_bootstrap.button.dropdown_menu = ((function (ufv___46573,output_schema46562_46574,input_schema46563_46575,input_checker46564_46576,output_checker46565_46577){
return (function om_bootstrap$button$dropdown_menu(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46578 = arguments.length;
var i__25948__auto___46579 = (0);
while(true){
if((i__25948__auto___46579 < len__25947__auto___46578)){
args__25954__auto__.push((arguments[i__25948__auto___46579]));

var G__46580 = (i__25948__auto___46579 + (1));
i__25948__auto___46579 = G__46580;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___46573,output_schema46562_46574,input_schema46563_46575,input_checker46564_46576,output_checker46565_46577))
;

om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___46573,output_schema46562_46574,input_schema46563_46575,input_checker46564_46576,output_checker46565_46577){
return (function (G__46566,rest46567){
var validate__32480__auto__ = ufv___46573.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46581 = cljs.core.list_STAR_.call(null,G__46566,rest46567);
var temp__4657__auto___46582 = input_checker46564_46576.call(null,args__32481__auto___46581);
if(cljs.core.truth_(temp__4657__auto___46582)){
var error__32482__auto___46583 = temp__4657__auto___46582;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46583)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46563_46575,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46581,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46583], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__46566;
var children = rest46567;
while(true){
var vec__46570 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__46570,(0),null);
var props = cljs.core.nth.call(null,vec__46570,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var on_select = temp__4655__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4655__auto__,vec__46570,bs,props,classes,ul_attrs,validate__32480__auto__,ufv___46573,output_schema46562_46574,input_schema46563_46575,input_checker46564_46576,output_checker46565_46577){
return (function (p1__46561_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__46561_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4655__auto__,vec__46570,bs,props,classes,ul_attrs,validate__32480__auto__,ufv___46573,output_schema46562_46574,input_schema46563_46575,input_checker46564_46576,output_checker46565_46577))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46584 = output_checker46565_46577.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46584)){
var error__32482__auto___46585 = temp__4657__auto___46584;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46585)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46562_46574,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46585], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46573,output_schema46562_46574,input_schema46563_46575,input_checker46564_46576,output_checker46565_46577))
;

om_bootstrap.button.dropdown_menu.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown_menu.cljs$lang$applyTo = ((function (ufv___46573,output_schema46562_46574,input_schema46563_46575,input_checker46564_46576,output_checker46565_46577){
return (function (seq46568){
var G__46569 = cljs.core.first.call(null,seq46568);
var seq46568__$1 = cljs.core.next.call(null,seq46568);
return om_bootstrap.button.dropdown_menu.cljs$core$IFn$_invoke$arity$variadic(G__46569,seq46568__$1);
});})(ufv___46573,output_schema46562_46574,input_schema46563_46575,input_checker46564_46576,output_checker46565_46577))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema46562_46574,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46563_46575], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__36196__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__36196__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__36196__auto__;
})();

var component_fnk__36225__auto___46622 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema46591 = schema.core.Any;
var input_schema46592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map46590","map46590",-1614186562,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker46593 = schema.core.checker.call(null,input_schema46592);
var output_checker46594 = schema.core.checker.call(null,output_schema46591);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function om_bootstrap$button$constructor46588(G__46595){
var validate__32480__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46595], null);
var temp__4657__auto___46624 = input_checker46593.call(null,args__32481__auto___46623);
if(cljs.core.truth_(temp__4657__auto___46624)){
var error__32482__auto___46625 = temp__4657__auto___46624;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor46588","constructor46588",-422470731,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46625)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46592,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46623,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46625], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var map46590 = G__46595;
while(true){
if(cljs.core.map_QMARK_.call(null,map46590)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map46590)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map46590,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map46590,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button46604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button46604 = (function (output_checker46594,validate__32480__auto__,owner,input_schema46592,output_schema46591,state,constructor46588,input_checker46593,G__46595,ufv__,map46590,meta46605){
this.output_checker46594 = output_checker46594;
this.validate__32480__auto__ = validate__32480__auto__;
this.owner = owner;
this.input_schema46592 = input_schema46592;
this.output_schema46591 = output_schema46591;
this.state = state;
this.constructor46588 = constructor46588;
this.input_checker46593 = input_checker46593;
this.G__46595 = G__46595;
this.ufv__ = ufv__;
this.map46590 = map46590;
this.meta46605 = meta46605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button46604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (_46606,meta46605__$1){
var self__ = this;
var _46606__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button46604(self__.output_checker46594,self__.validate__32480__auto__,self__.owner,self__.input_schema46592,self__.output_schema46591,self__.state,self__.constructor46588,self__.input_checker46593,self__.G__46595,self__.ufv__,self__.map46590,meta46605__$1));
});})(state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
;

om_bootstrap.button.t_om_bootstrap$button46604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (_46606){
var self__ = this;
var _46606__$1 = this;
return self__.meta46605;
});})(state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
;

om_bootstrap.button.t_om_bootstrap$button46604.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button46604.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
;

om_bootstrap.button.t_om_bootstrap$button46604.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button46604.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__46607 = om.core.get_props.call(null,self__.owner);
var map__46607__$1 = ((((!((map__46607 == null)))?((((map__46607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46607):map__46607);
var opts = cljs.core.get.call(null,map__46607__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__46607__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__46608 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__46608,(0),null);
var props = cljs.core.nth.call(null,vec__46608,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__46607,map__46607__$1,opts,children,vec__46608,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__46607,map__46607__$1,opts,children,vec__46608,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
], null);
var update_child_props = ((function (open_QMARK_,map__46607,map__46607__$1,opts,children,vec__46608,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__46607,map__46607__$1,opts,children,vec__46608,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (key){
var temp__4655__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4655__auto__)){
var os = temp__4655__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__46607,map__46607__$1,opts,children,vec__46608,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__46607,map__46607__$1,opts,children,vec__46608,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__46607,map__46607__$1,opts,children,vec__46608,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (p1__46586_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__46586_SHARP_,update_child_props);
});})(open_QMARK_,map__46607,map__46607__$1,opts,children,vec__46608,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
,children))], null));
});})(state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
;

om_bootstrap.button.t_om_bootstrap$button46604.getBasis = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker46594","output-checker46594",1293235554,null),new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema46592","input-schema46592",97357031,null),new cljs.core.Symbol(null,"output-schema46591","output-schema46591",2118416206,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor46588","constructor46588",-422470731,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker46593","input-checker46593",633139291,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46595","G__46595",-125082725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"map46590","map46590",-1614186562,null),new cljs.core.Symbol(null,"meta46605","meta46605",-1863281485,null)], null);
});})(state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
;

om_bootstrap.button.t_om_bootstrap$button46604.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button46604.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button46604";

om_bootstrap.button.t_om_bootstrap$button46604.cljs$lang$ctorPrWriter = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"om-bootstrap.button/t_om_bootstrap$button46604");
});})(state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
;

om_bootstrap.button.__GT_t_om_bootstrap$button46604 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594){
return (function om_bootstrap$button$constructor46588_$___GT_t_om_bootstrap$button46604(output_checker46594__$1,validate__32480__auto____$1,owner__$1,input_schema46592__$1,output_schema46591__$1,state__$1,constructor46588__$1,input_checker46593__$1,G__46595__$1,ufv____$1,map46590__$1,meta46605){
return (new om_bootstrap.button.t_om_bootstrap$button46604(output_checker46594__$1,validate__32480__auto____$1,owner__$1,input_schema46592__$1,output_schema46591__$1,state__$1,constructor46588__$1,input_checker46593__$1,G__46595__$1,ufv____$1,map46590__$1,meta46605));
});})(state,owner,validate__32480__auto__,ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button46604(output_checker46594,validate__32480__auto__,owner,input_schema46592,output_schema46591,state,om_bootstrap$button$constructor46588,input_checker46593,G__46595,ufv__,map46590,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46626 = output_checker46594.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46626)){
var error__32482__auto___46627 = temp__4657__auto___46626;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor46588","constructor46588",-422470731,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46627)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46591,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46627], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv__,output_schema46591,input_schema46592,input_checker46593,output_checker46594))
,schema.core.make_fn_schema.call(null,output_schema46591,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46592], null)));
})();
/**
 * Generates a dropdown button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__36225__auto___46622){
return (function om_bootstrap$button$dropdown_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46628 = arguments.length;
var i__25948__auto___46629 = (0);
while(true){
if((i__25948__auto___46629 < len__25947__auto___46628)){
args__25954__auto__.push((arguments[i__25948__auto___46629]));

var G__46630 = (i__25948__auto___46629 + (1));
i__25948__auto___46629 = G__46630;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});})(component_fnk__36225__auto___46622))
;

om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__36225__auto___46622){
return (function (data__36226__auto__,owner46587,p__46615){
var vec__46616 = p__46615;
var opts__36227__auto__ = cljs.core.nth.call(null,vec__46616,(0),null);
return component_fnk__36225__auto___46622.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner46587),new cljs.core.Keyword(null,"opts","opts",155075701),opts__36227__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner46587,new cljs.core.Keyword(null,"data","data",-232669377),data__36226__auto__], null));
});})(component_fnk__36225__auto___46622))
;

om_bootstrap.button.dropdown_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.dropdown_STAR_.cljs$lang$applyTo = ((function (component_fnk__36225__auto___46622){
return (function (seq46612){
var G__46613 = cljs.core.first.call(null,seq46612);
var seq46612__$1 = cljs.core.next.call(null,seq46612);
var G__46614 = cljs.core.first.call(null,seq46612__$1);
var seq46612__$2 = cljs.core.next.call(null,seq46612__$1);
return om_bootstrap.button.dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__46613,G__46614,seq46612__$2);
});})(component_fnk__36225__auto___46622))
;


om_bootstrap.button.__GT_dropdown_STAR_ = (function om_bootstrap$button$__GT_dropdown_STAR_(var_args){
var args46619 = [];
var len__25947__auto___46631 = arguments.length;
var i__25948__auto___46632 = (0);
while(true){
if((i__25948__auto___46632 < len__25947__auto___46631)){
args46619.push((arguments[i__25948__auto___46632]));

var G__46633 = (i__25948__auto___46632 + (1));
i__25948__auto___46632 = G__46633;
continue;
} else {
}
break;
}

var G__46621 = args46619.length;
switch (G__46621) {
case 1:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46619.length)].join('')));

}
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__36194__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m46589){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__36194__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m46589));
});

om_bootstrap.button.__GT_dropdown_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___46643 = schema.utils.use_fn_validation;
var output_schema46635_46644 = om_bootstrap.types.Component;
var input_schema46636_46645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"DropdownButton","DropdownButton",251375015,null)], null))),schema.core.Any], null);
var input_checker46637_46646 = schema.core.checker.call(null,input_schema46636_46645);
var output_checker46638_46647 = schema.core.checker.call(null,output_schema46635_46644);
/**
 * Inputs: [opts :- DropdownButton & children]
 *   Returns: t/Component
 * 
 *   Returns a dropdown button component. The component manages its own
 *   dropdown state.
 */
om_bootstrap.button.dropdown = ((function (ufv___46643,output_schema46635_46644,input_schema46636_46645,input_checker46637_46646,output_checker46638_46647){
return (function om_bootstrap$button$dropdown(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46648 = arguments.length;
var i__25948__auto___46649 = (0);
while(true){
if((i__25948__auto___46649 < len__25947__auto___46648)){
args__25954__auto__.push((arguments[i__25948__auto___46649]));

var G__46650 = (i__25948__auto___46649 + (1));
i__25948__auto___46649 = G__46650;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___46643,output_schema46635_46644,input_schema46636_46645,input_checker46637_46646,output_checker46638_46647))
;

om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___46643,output_schema46635_46644,input_schema46636_46645,input_checker46637_46646,output_checker46638_46647){
return (function (G__46639,rest46640){
var validate__32480__auto__ = ufv___46643.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46651 = cljs.core.list_STAR_.call(null,G__46639,rest46640);
var temp__4657__auto___46652 = input_checker46637_46646.call(null,args__32481__auto___46651);
if(cljs.core.truth_(temp__4657__auto___46652)){
var error__32482__auto___46653 = temp__4657__auto___46652;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__32482__auto___46653)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46636_46645,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46651,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46653], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__46639;
var children = rest46640;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46654 = output_checker46638_46647.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46654)){
var error__32482__auto___46655 = temp__4657__auto___46654;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a dropdown button component. The component manages its own\n  dropdown state."], null)),cljs.core.pr_str.call(null,error__32482__auto___46655)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46635_46644,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46655], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46643,output_schema46635_46644,input_schema46636_46645,input_checker46637_46646,output_checker46638_46647))
;

om_bootstrap.button.dropdown.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.dropdown.cljs$lang$applyTo = ((function (ufv___46643,output_schema46635_46644,input_schema46636_46645,input_checker46637_46646,output_checker46638_46647){
return (function (seq46641){
var G__46642 = cljs.core.first.call(null,seq46641);
var seq46641__$1 = cljs.core.next.call(null,seq46641);
return om_bootstrap.button.dropdown.cljs$core$IFn$_invoke$arity$variadic(G__46642,seq46641__$1);
});})(ufv___46643,output_schema46635_46644,input_schema46636_46645,input_checker46637_46646,output_checker46638_46647))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema46635_46644,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46636_46645], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__36196__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__36196__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__36196__auto__;
})();

var component_fnk__36225__auto___46691 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema46660 = schema.core.Any;
var input_schema46661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any,schema.core.Keyword,schema.core.Any], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"map46659","map46659",908418157,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)))], null);
var input_checker46662 = schema.core.checker.call(null,input_schema46661);
var output_checker46663 = schema.core.checker.call(null,output_schema46660);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function om_bootstrap$button$constructor46657(G__46664){
var validate__32480__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46664], null);
var temp__4657__auto___46693 = input_checker46662.call(null,args__32481__auto___46692);
if(cljs.core.truth_(temp__4657__auto___46693)){
var error__32482__auto___46694 = temp__4657__auto___46693;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor46657","constructor46657",1395825689,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46694)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46661,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46692,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46694], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var map46659 = G__46664;
while(true){
if(cljs.core.map_QMARK_.call(null,map46659)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map46659)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map46659,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map46659,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t_om_bootstrap$button46673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_bootstrap.button.t_om_bootstrap$button46673 = (function (input_checker46662,validate__32480__auto__,G__46664,owner,map46659,output_schema46660,output_checker46663,state,input_schema46661,constructor46657,ufv__,meta46674){
this.input_checker46662 = input_checker46662;
this.validate__32480__auto__ = validate__32480__auto__;
this.G__46664 = G__46664;
this.owner = owner;
this.map46659 = map46659;
this.output_schema46660 = output_schema46660;
this.output_checker46663 = output_checker46663;
this.state = state;
this.input_schema46661 = input_schema46661;
this.constructor46657 = constructor46657;
this.ufv__ = ufv__;
this.meta46674 = meta46674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_bootstrap.button.t_om_bootstrap$button46673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function (_46675,meta46674__$1){
var self__ = this;
var _46675__$1 = this;
return (new om_bootstrap.button.t_om_bootstrap$button46673(self__.input_checker46662,self__.validate__32480__auto__,self__.G__46664,self__.owner,self__.map46659,self__.output_schema46660,self__.output_checker46663,self__.state,self__.input_schema46661,self__.constructor46657,self__.ufv__,meta46674__$1));
});})(state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
;

om_bootstrap.button.t_om_bootstrap$button46673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function (_46675){
var self__ = this;
var _46675__$1 = this;
return self__.meta46674;
});})(state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
;

om_bootstrap.button.t_om_bootstrap$button46673.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t_om_bootstrap$button46673.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
;

om_bootstrap.button.t_om_bootstrap$button46673.prototype.om$core$IRender$ = true;

om_bootstrap.button.t_om_bootstrap$button46673.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__46676 = om.core.get_props.call(null,self__.owner);
var map__46676__$1 = ((((!((map__46676 == null)))?((((map__46676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46676):map__46676);
var opts = cljs.core.get.call(null,map__46676__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var children = cljs.core.get.call(null,map__46676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var vec__46677 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__46677,(0),null);
var props = cljs.core.nth.call(null,vec__46677,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__46676,map__46676__$1,opts,children,vec__46677,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4657__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__46676,map__46676__$1,opts,children,vec__46677,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__46676,map__46676__$1,opts,children,vec__46677,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__46676,map__46676__$1,opts,children,vec__46677,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__46676,map__46676__$1,opts,children,vec__46677,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function (k){
var temp__4657__auto___46695 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4657__auto___46695)){
var f_46696 = temp__4657__auto___46695;
f_46696.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__46676,map__46676__$1,opts,children,vec__46677,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
;

om_bootstrap.button.t_om_bootstrap$button46673.getBasis = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-checker46662","input-checker46662",1672585185,null),new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__46664","G__46664",691459172,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"owner","owner",-392611939),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Symbol("schema.core","Keyword","schema.core/Keyword",-1941817861,null),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"map46659","map46659",908418157,null),new cljs.core.Symbol(null,"output-schema46660","output-schema46660",137477169,null),new cljs.core.Symbol(null,"output-checker46663","output-checker46663",1547595092,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-schema46661","input-schema46661",1549911351,null),cljs.core.with_meta(new cljs.core.Symbol(null,"constructor46657","constructor46657",1395825689,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta46674","meta46674",970146735,null)], null);
});})(state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
;

om_bootstrap.button.t_om_bootstrap$button46673.cljs$lang$type = true;

om_bootstrap.button.t_om_bootstrap$button46673.cljs$lang$ctorStr = "om-bootstrap.button/t_om_bootstrap$button46673";

om_bootstrap.button.t_om_bootstrap$button46673.cljs$lang$ctorPrWriter = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"om-bootstrap.button/t_om_bootstrap$button46673");
});})(state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
;

om_bootstrap.button.__GT_t_om_bootstrap$button46673 = ((function (state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663){
return (function om_bootstrap$button$constructor46657_$___GT_t_om_bootstrap$button46673(input_checker46662__$1,validate__32480__auto____$1,G__46664__$1,owner__$1,map46659__$1,output_schema46660__$1,output_checker46663__$1,state__$1,input_schema46661__$1,constructor46657__$1,ufv____$1,meta46674){
return (new om_bootstrap.button.t_om_bootstrap$button46673(input_checker46662__$1,validate__32480__auto____$1,G__46664__$1,owner__$1,map46659__$1,output_schema46660__$1,output_checker46663__$1,state__$1,input_schema46661__$1,constructor46657__$1,ufv____$1,meta46674));
});})(state,owner,validate__32480__auto__,ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
;

}

return (new om_bootstrap.button.t_om_bootstrap$button46673(input_checker46662,validate__32480__auto__,G__46664,owner,map46659,output_schema46660,output_checker46663,state,input_schema46661,om_bootstrap$button$constructor46657,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46697 = output_checker46663.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46697)){
var error__32482__auto___46698 = temp__4657__auto___46697;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"constructor46657","constructor46657",1395825689,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46698)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46660,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46698], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv__,output_schema46660,input_schema46661,input_checker46662,output_checker46663))
,schema.core.make_fn_schema.call(null,output_schema46660,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46661], null)));
})();
/**
 * Generates a split button component responsible for its own
 *   toggled state. The open? toggling is handled through a dropdown
 *   mixin.
 */
om_bootstrap.button.split_STAR_ = ((function (component_fnk__36225__auto___46691){
return (function om_bootstrap$button$split_STAR_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46699 = arguments.length;
var i__25948__auto___46700 = (0);
while(true){
if((i__25948__auto___46700 < len__25947__auto___46699)){
args__25954__auto__.push((arguments[i__25948__auto___46700]));

var G__46701 = (i__25948__auto___46700 + (1));
i__25948__auto___46700 = G__46701;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});})(component_fnk__36225__auto___46691))
;

om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (component_fnk__36225__auto___46691){
return (function (data__36226__auto__,owner46656,p__46684){
var vec__46685 = p__46684;
var opts__36227__auto__ = cljs.core.nth.call(null,vec__46685,(0),null);
return component_fnk__36225__auto___46691.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner46656),new cljs.core.Keyword(null,"opts","opts",155075701),opts__36227__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner46656,new cljs.core.Keyword(null,"data","data",-232669377),data__36226__auto__], null));
});})(component_fnk__36225__auto___46691))
;

om_bootstrap.button.split_STAR_.cljs$lang$maxFixedArity = (2);

om_bootstrap.button.split_STAR_.cljs$lang$applyTo = ((function (component_fnk__36225__auto___46691){
return (function (seq46681){
var G__46682 = cljs.core.first.call(null,seq46681);
var seq46681__$1 = cljs.core.next.call(null,seq46681);
var G__46683 = cljs.core.first.call(null,seq46681__$1);
var seq46681__$2 = cljs.core.next.call(null,seq46681__$1);
return om_bootstrap.button.split_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__46682,G__46683,seq46681__$2);
});})(component_fnk__36225__auto___46691))
;


om_bootstrap.button.__GT_split_STAR_ = (function om_bootstrap$button$__GT_split_STAR_(var_args){
var args46688 = [];
var len__25947__auto___46702 = arguments.length;
var i__25948__auto___46703 = (0);
while(true){
if((i__25948__auto___46703 < len__25947__auto___46702)){
args46688.push((arguments[i__25948__auto___46703]));

var G__46704 = (i__25948__auto___46703 + (1));
i__25948__auto___46703 = G__46704;
continue;
} else {
}
break;
}

var G__46690 = args46688.length;
switch (G__46690) {
case 1:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46688.length)].join('')));

}
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__36194__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});

om_bootstrap.button.__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m46658){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__36194__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m46658));
});

om_bootstrap.button.__GT_split_STAR_.cljs$lang$maxFixedArity = 2;

var ufv___46714 = schema.utils.use_fn_validation;
var output_schema46706_46715 = schema.core.Any;
var input_schema46707_46716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"SplitButton","SplitButton",1856385687,null)], null))),schema.core.Any], null);
var input_checker46708_46717 = schema.core.checker.call(null,input_schema46707_46716);
var output_checker46709_46718 = schema.core.checker.call(null,output_schema46706_46715);
/**
 * Inputs: [opts :- SplitButton & children]
 */
om_bootstrap.button.split = ((function (ufv___46714,output_schema46706_46715,input_schema46707_46716,input_checker46708_46717,output_checker46709_46718){
return (function om_bootstrap$button$split(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46719 = arguments.length;
var i__25948__auto___46720 = (0);
while(true){
if((i__25948__auto___46720 < len__25947__auto___46719)){
args__25954__auto__.push((arguments[i__25948__auto___46720]));

var G__46721 = (i__25948__auto___46720 + (1));
i__25948__auto___46720 = G__46721;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___46714,output_schema46706_46715,input_schema46707_46716,input_checker46708_46717,output_checker46709_46718))
;

om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___46714,output_schema46706_46715,input_schema46707_46716,input_checker46708_46717,output_checker46709_46718){
return (function (G__46710,rest46711){
var validate__32480__auto__ = ufv___46714.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46722 = cljs.core.list_STAR_.call(null,G__46710,rest46711);
var temp__4657__auto___46723 = input_checker46708_46717.call(null,args__32481__auto___46722);
if(cljs.core.truth_(temp__4657__auto___46723)){
var error__32482__auto___46724 = temp__4657__auto___46723;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46724)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46707_46716,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46722,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46724], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__46710;
var children = rest46711;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46725 = output_checker46709_46718.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46725)){
var error__32482__auto___46726 = temp__4657__auto___46725;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46726)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46706_46715,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46726], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46714,output_schema46706_46715,input_schema46707_46716,input_checker46708_46717,output_checker46709_46718))
;

om_bootstrap.button.split.cljs$lang$maxFixedArity = (1);

om_bootstrap.button.split.cljs$lang$applyTo = ((function (ufv___46714,output_schema46706_46715,input_schema46707_46716,input_checker46708_46717,output_checker46709_46718){
return (function (seq46712){
var G__46713 = cljs.core.first.call(null,seq46712);
var seq46712__$1 = cljs.core.next.call(null,seq46712);
return om_bootstrap.button.split.cljs$core$IFn$_invoke$arity$variadic(G__46713,seq46712__$1);
});})(ufv___46714,output_schema46706_46715,input_schema46707_46716,input_checker46708_46717,output_checker46709_46718))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema46706_46715,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46707_46716], null)));

//# sourceMappingURL=button.js.map?rel=1484804423810