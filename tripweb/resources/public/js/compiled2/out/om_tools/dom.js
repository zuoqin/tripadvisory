// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__24872__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__24872__auto__){
return or__24872__auto__;
} else {
var G__31039 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__31039) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__31042 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__31042) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__31048){
var vec__31049 = p__31048;
var k = cljs.core.nth.call(null,vec__31049,(0),null);
var v = cljs.core.nth.call(null,vec__31049,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__24872__auto__ = React.isValidElement;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__31055 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__31055,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__31055,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args31058 = [];
var len__25947__auto___31708 = arguments.length;
var i__25948__auto___31709 = (0);
while(true){
if((i__25948__auto___31709 < len__25947__auto___31708)){
args31058.push((arguments[i__25948__auto___31709]));

var G__31710 = (i__25948__auto___31709 + (1));
i__25948__auto___31709 = G__31710;
continue;
} else {
}
break;
}

var G__31062 = args31058.length;
switch (G__31062) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31058.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq31059){
var G__31060 = cljs.core.first.call(null,seq31059);
var seq31059__$1 = cljs.core.next.call(null,seq31059);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__31060,seq31059__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args31063 = [];
var len__25947__auto___31712 = arguments.length;
var i__25948__auto___31713 = (0);
while(true){
if((i__25948__auto___31713 < len__25947__auto___31712)){
args31063.push((arguments[i__25948__auto___31713]));

var G__31714 = (i__25948__auto___31713 + (1));
i__25948__auto___31713 = G__31714;
continue;
} else {
}
break;
}

var G__31067 = args31063.length;
switch (G__31067) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31063.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq31064){
var G__31065 = cljs.core.first.call(null,seq31064);
var seq31064__$1 = cljs.core.next.call(null,seq31064);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__31065,seq31064__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args31068 = [];
var len__25947__auto___31716 = arguments.length;
var i__25948__auto___31717 = (0);
while(true){
if((i__25948__auto___31717 < len__25947__auto___31716)){
args31068.push((arguments[i__25948__auto___31717]));

var G__31718 = (i__25948__auto___31717 + (1));
i__25948__auto___31717 = G__31718;
continue;
} else {
}
break;
}

var G__31072 = args31068.length;
switch (G__31072) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31068.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq31069){
var G__31070 = cljs.core.first.call(null,seq31069);
var seq31069__$1 = cljs.core.next.call(null,seq31069);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__31070,seq31069__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args31073 = [];
var len__25947__auto___31720 = arguments.length;
var i__25948__auto___31721 = (0);
while(true){
if((i__25948__auto___31721 < len__25947__auto___31720)){
args31073.push((arguments[i__25948__auto___31721]));

var G__31722 = (i__25948__auto___31721 + (1));
i__25948__auto___31721 = G__31722;
continue;
} else {
}
break;
}

var G__31077 = args31073.length;
switch (G__31077) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31073.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq31074){
var G__31075 = cljs.core.first.call(null,seq31074);
var seq31074__$1 = cljs.core.next.call(null,seq31074);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__31075,seq31074__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args31078 = [];
var len__25947__auto___31724 = arguments.length;
var i__25948__auto___31725 = (0);
while(true){
if((i__25948__auto___31725 < len__25947__auto___31724)){
args31078.push((arguments[i__25948__auto___31725]));

var G__31726 = (i__25948__auto___31725 + (1));
i__25948__auto___31725 = G__31726;
continue;
} else {
}
break;
}

var G__31082 = args31078.length;
switch (G__31082) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31078.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq31079){
var G__31080 = cljs.core.first.call(null,seq31079);
var seq31079__$1 = cljs.core.next.call(null,seq31079);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__31080,seq31079__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args31083 = [];
var len__25947__auto___31728 = arguments.length;
var i__25948__auto___31729 = (0);
while(true){
if((i__25948__auto___31729 < len__25947__auto___31728)){
args31083.push((arguments[i__25948__auto___31729]));

var G__31730 = (i__25948__auto___31729 + (1));
i__25948__auto___31729 = G__31730;
continue;
} else {
}
break;
}

var G__31087 = args31083.length;
switch (G__31087) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31083.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq31084){
var G__31085 = cljs.core.first.call(null,seq31084);
var seq31084__$1 = cljs.core.next.call(null,seq31084);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__31085,seq31084__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args31088 = [];
var len__25947__auto___31732 = arguments.length;
var i__25948__auto___31733 = (0);
while(true){
if((i__25948__auto___31733 < len__25947__auto___31732)){
args31088.push((arguments[i__25948__auto___31733]));

var G__31734 = (i__25948__auto___31733 + (1));
i__25948__auto___31733 = G__31734;
continue;
} else {
}
break;
}

var G__31092 = args31088.length;
switch (G__31092) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31088.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq31089){
var G__31090 = cljs.core.first.call(null,seq31089);
var seq31089__$1 = cljs.core.next.call(null,seq31089);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__31090,seq31089__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args31093 = [];
var len__25947__auto___31736 = arguments.length;
var i__25948__auto___31737 = (0);
while(true){
if((i__25948__auto___31737 < len__25947__auto___31736)){
args31093.push((arguments[i__25948__auto___31737]));

var G__31738 = (i__25948__auto___31737 + (1));
i__25948__auto___31737 = G__31738;
continue;
} else {
}
break;
}

var G__31097 = args31093.length;
switch (G__31097) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31093.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq31094){
var G__31095 = cljs.core.first.call(null,seq31094);
var seq31094__$1 = cljs.core.next.call(null,seq31094);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__31095,seq31094__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args31098 = [];
var len__25947__auto___31740 = arguments.length;
var i__25948__auto___31741 = (0);
while(true){
if((i__25948__auto___31741 < len__25947__auto___31740)){
args31098.push((arguments[i__25948__auto___31741]));

var G__31742 = (i__25948__auto___31741 + (1));
i__25948__auto___31741 = G__31742;
continue;
} else {
}
break;
}

var G__31102 = args31098.length;
switch (G__31102) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31098.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq31099){
var G__31100 = cljs.core.first.call(null,seq31099);
var seq31099__$1 = cljs.core.next.call(null,seq31099);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__31100,seq31099__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args31103 = [];
var len__25947__auto___31744 = arguments.length;
var i__25948__auto___31745 = (0);
while(true){
if((i__25948__auto___31745 < len__25947__auto___31744)){
args31103.push((arguments[i__25948__auto___31745]));

var G__31746 = (i__25948__auto___31745 + (1));
i__25948__auto___31745 = G__31746;
continue;
} else {
}
break;
}

var G__31107 = args31103.length;
switch (G__31107) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31103.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq31104){
var G__31105 = cljs.core.first.call(null,seq31104);
var seq31104__$1 = cljs.core.next.call(null,seq31104);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__31105,seq31104__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args31108 = [];
var len__25947__auto___31748 = arguments.length;
var i__25948__auto___31749 = (0);
while(true){
if((i__25948__auto___31749 < len__25947__auto___31748)){
args31108.push((arguments[i__25948__auto___31749]));

var G__31750 = (i__25948__auto___31749 + (1));
i__25948__auto___31749 = G__31750;
continue;
} else {
}
break;
}

var G__31112 = args31108.length;
switch (G__31112) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31108.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq31109){
var G__31110 = cljs.core.first.call(null,seq31109);
var seq31109__$1 = cljs.core.next.call(null,seq31109);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__31110,seq31109__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args31113 = [];
var len__25947__auto___31752 = arguments.length;
var i__25948__auto___31753 = (0);
while(true){
if((i__25948__auto___31753 < len__25947__auto___31752)){
args31113.push((arguments[i__25948__auto___31753]));

var G__31754 = (i__25948__auto___31753 + (1));
i__25948__auto___31753 = G__31754;
continue;
} else {
}
break;
}

var G__31117 = args31113.length;
switch (G__31117) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31113.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq31114){
var G__31115 = cljs.core.first.call(null,seq31114);
var seq31114__$1 = cljs.core.next.call(null,seq31114);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__31115,seq31114__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args31118 = [];
var len__25947__auto___31756 = arguments.length;
var i__25948__auto___31757 = (0);
while(true){
if((i__25948__auto___31757 < len__25947__auto___31756)){
args31118.push((arguments[i__25948__auto___31757]));

var G__31758 = (i__25948__auto___31757 + (1));
i__25948__auto___31757 = G__31758;
continue;
} else {
}
break;
}

var G__31122 = args31118.length;
switch (G__31122) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31118.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq31119){
var G__31120 = cljs.core.first.call(null,seq31119);
var seq31119__$1 = cljs.core.next.call(null,seq31119);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__31120,seq31119__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args31123 = [];
var len__25947__auto___31760 = arguments.length;
var i__25948__auto___31761 = (0);
while(true){
if((i__25948__auto___31761 < len__25947__auto___31760)){
args31123.push((arguments[i__25948__auto___31761]));

var G__31762 = (i__25948__auto___31761 + (1));
i__25948__auto___31761 = G__31762;
continue;
} else {
}
break;
}

var G__31127 = args31123.length;
switch (G__31127) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31123.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq31124){
var G__31125 = cljs.core.first.call(null,seq31124);
var seq31124__$1 = cljs.core.next.call(null,seq31124);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__31125,seq31124__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args31128 = [];
var len__25947__auto___31764 = arguments.length;
var i__25948__auto___31765 = (0);
while(true){
if((i__25948__auto___31765 < len__25947__auto___31764)){
args31128.push((arguments[i__25948__auto___31765]));

var G__31766 = (i__25948__auto___31765 + (1));
i__25948__auto___31765 = G__31766;
continue;
} else {
}
break;
}

var G__31132 = args31128.length;
switch (G__31132) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31128.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq31129){
var G__31130 = cljs.core.first.call(null,seq31129);
var seq31129__$1 = cljs.core.next.call(null,seq31129);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__31130,seq31129__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args31133 = [];
var len__25947__auto___31768 = arguments.length;
var i__25948__auto___31769 = (0);
while(true){
if((i__25948__auto___31769 < len__25947__auto___31768)){
args31133.push((arguments[i__25948__auto___31769]));

var G__31770 = (i__25948__auto___31769 + (1));
i__25948__auto___31769 = G__31770;
continue;
} else {
}
break;
}

var G__31137 = args31133.length;
switch (G__31137) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31133.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq31134){
var G__31135 = cljs.core.first.call(null,seq31134);
var seq31134__$1 = cljs.core.next.call(null,seq31134);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__31135,seq31134__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args31138 = [];
var len__25947__auto___31772 = arguments.length;
var i__25948__auto___31773 = (0);
while(true){
if((i__25948__auto___31773 < len__25947__auto___31772)){
args31138.push((arguments[i__25948__auto___31773]));

var G__31774 = (i__25948__auto___31773 + (1));
i__25948__auto___31773 = G__31774;
continue;
} else {
}
break;
}

var G__31142 = args31138.length;
switch (G__31142) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31138.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq31139){
var G__31140 = cljs.core.first.call(null,seq31139);
var seq31139__$1 = cljs.core.next.call(null,seq31139);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__31140,seq31139__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args31143 = [];
var len__25947__auto___31776 = arguments.length;
var i__25948__auto___31777 = (0);
while(true){
if((i__25948__auto___31777 < len__25947__auto___31776)){
args31143.push((arguments[i__25948__auto___31777]));

var G__31778 = (i__25948__auto___31777 + (1));
i__25948__auto___31777 = G__31778;
continue;
} else {
}
break;
}

var G__31147 = args31143.length;
switch (G__31147) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31143.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq31144){
var G__31145 = cljs.core.first.call(null,seq31144);
var seq31144__$1 = cljs.core.next.call(null,seq31144);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__31145,seq31144__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args31148 = [];
var len__25947__auto___31780 = arguments.length;
var i__25948__auto___31781 = (0);
while(true){
if((i__25948__auto___31781 < len__25947__auto___31780)){
args31148.push((arguments[i__25948__auto___31781]));

var G__31782 = (i__25948__auto___31781 + (1));
i__25948__auto___31781 = G__31782;
continue;
} else {
}
break;
}

var G__31152 = args31148.length;
switch (G__31152) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31148.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq31149){
var G__31150 = cljs.core.first.call(null,seq31149);
var seq31149__$1 = cljs.core.next.call(null,seq31149);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__31150,seq31149__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args31153 = [];
var len__25947__auto___31784 = arguments.length;
var i__25948__auto___31785 = (0);
while(true){
if((i__25948__auto___31785 < len__25947__auto___31784)){
args31153.push((arguments[i__25948__auto___31785]));

var G__31786 = (i__25948__auto___31785 + (1));
i__25948__auto___31785 = G__31786;
continue;
} else {
}
break;
}

var G__31157 = args31153.length;
switch (G__31157) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31153.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq31154){
var G__31155 = cljs.core.first.call(null,seq31154);
var seq31154__$1 = cljs.core.next.call(null,seq31154);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__31155,seq31154__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args31158 = [];
var len__25947__auto___31788 = arguments.length;
var i__25948__auto___31789 = (0);
while(true){
if((i__25948__auto___31789 < len__25947__auto___31788)){
args31158.push((arguments[i__25948__auto___31789]));

var G__31790 = (i__25948__auto___31789 + (1));
i__25948__auto___31789 = G__31790;
continue;
} else {
}
break;
}

var G__31162 = args31158.length;
switch (G__31162) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31158.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq31159){
var G__31160 = cljs.core.first.call(null,seq31159);
var seq31159__$1 = cljs.core.next.call(null,seq31159);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__31160,seq31159__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args31163 = [];
var len__25947__auto___31792 = arguments.length;
var i__25948__auto___31793 = (0);
while(true){
if((i__25948__auto___31793 < len__25947__auto___31792)){
args31163.push((arguments[i__25948__auto___31793]));

var G__31794 = (i__25948__auto___31793 + (1));
i__25948__auto___31793 = G__31794;
continue;
} else {
}
break;
}

var G__31167 = args31163.length;
switch (G__31167) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31163.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq31164){
var G__31165 = cljs.core.first.call(null,seq31164);
var seq31164__$1 = cljs.core.next.call(null,seq31164);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__31165,seq31164__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args31168 = [];
var len__25947__auto___31796 = arguments.length;
var i__25948__auto___31797 = (0);
while(true){
if((i__25948__auto___31797 < len__25947__auto___31796)){
args31168.push((arguments[i__25948__auto___31797]));

var G__31798 = (i__25948__auto___31797 + (1));
i__25948__auto___31797 = G__31798;
continue;
} else {
}
break;
}

var G__31172 = args31168.length;
switch (G__31172) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31168.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq31169){
var G__31170 = cljs.core.first.call(null,seq31169);
var seq31169__$1 = cljs.core.next.call(null,seq31169);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__31170,seq31169__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args31173 = [];
var len__25947__auto___31800 = arguments.length;
var i__25948__auto___31801 = (0);
while(true){
if((i__25948__auto___31801 < len__25947__auto___31800)){
args31173.push((arguments[i__25948__auto___31801]));

var G__31802 = (i__25948__auto___31801 + (1));
i__25948__auto___31801 = G__31802;
continue;
} else {
}
break;
}

var G__31177 = args31173.length;
switch (G__31177) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31173.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq31174){
var G__31175 = cljs.core.first.call(null,seq31174);
var seq31174__$1 = cljs.core.next.call(null,seq31174);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__31175,seq31174__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args31178 = [];
var len__25947__auto___31804 = arguments.length;
var i__25948__auto___31805 = (0);
while(true){
if((i__25948__auto___31805 < len__25947__auto___31804)){
args31178.push((arguments[i__25948__auto___31805]));

var G__31806 = (i__25948__auto___31805 + (1));
i__25948__auto___31805 = G__31806;
continue;
} else {
}
break;
}

var G__31182 = args31178.length;
switch (G__31182) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31178.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq31179){
var G__31180 = cljs.core.first.call(null,seq31179);
var seq31179__$1 = cljs.core.next.call(null,seq31179);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__31180,seq31179__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args31183 = [];
var len__25947__auto___31808 = arguments.length;
var i__25948__auto___31809 = (0);
while(true){
if((i__25948__auto___31809 < len__25947__auto___31808)){
args31183.push((arguments[i__25948__auto___31809]));

var G__31810 = (i__25948__auto___31809 + (1));
i__25948__auto___31809 = G__31810;
continue;
} else {
}
break;
}

var G__31187 = args31183.length;
switch (G__31187) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31183.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq31184){
var G__31185 = cljs.core.first.call(null,seq31184);
var seq31184__$1 = cljs.core.next.call(null,seq31184);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__31185,seq31184__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args31188 = [];
var len__25947__auto___31812 = arguments.length;
var i__25948__auto___31813 = (0);
while(true){
if((i__25948__auto___31813 < len__25947__auto___31812)){
args31188.push((arguments[i__25948__auto___31813]));

var G__31814 = (i__25948__auto___31813 + (1));
i__25948__auto___31813 = G__31814;
continue;
} else {
}
break;
}

var G__31192 = args31188.length;
switch (G__31192) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31188.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq31189){
var G__31190 = cljs.core.first.call(null,seq31189);
var seq31189__$1 = cljs.core.next.call(null,seq31189);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__31190,seq31189__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args31193 = [];
var len__25947__auto___31816 = arguments.length;
var i__25948__auto___31817 = (0);
while(true){
if((i__25948__auto___31817 < len__25947__auto___31816)){
args31193.push((arguments[i__25948__auto___31817]));

var G__31818 = (i__25948__auto___31817 + (1));
i__25948__auto___31817 = G__31818;
continue;
} else {
}
break;
}

var G__31197 = args31193.length;
switch (G__31197) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31193.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq31194){
var G__31195 = cljs.core.first.call(null,seq31194);
var seq31194__$1 = cljs.core.next.call(null,seq31194);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__31195,seq31194__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args31198 = [];
var len__25947__auto___31820 = arguments.length;
var i__25948__auto___31821 = (0);
while(true){
if((i__25948__auto___31821 < len__25947__auto___31820)){
args31198.push((arguments[i__25948__auto___31821]));

var G__31822 = (i__25948__auto___31821 + (1));
i__25948__auto___31821 = G__31822;
continue;
} else {
}
break;
}

var G__31202 = args31198.length;
switch (G__31202) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31198.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq31199){
var G__31200 = cljs.core.first.call(null,seq31199);
var seq31199__$1 = cljs.core.next.call(null,seq31199);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__31200,seq31199__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args31203 = [];
var len__25947__auto___31824 = arguments.length;
var i__25948__auto___31825 = (0);
while(true){
if((i__25948__auto___31825 < len__25947__auto___31824)){
args31203.push((arguments[i__25948__auto___31825]));

var G__31826 = (i__25948__auto___31825 + (1));
i__25948__auto___31825 = G__31826;
continue;
} else {
}
break;
}

var G__31207 = args31203.length;
switch (G__31207) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31203.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq31204){
var G__31205 = cljs.core.first.call(null,seq31204);
var seq31204__$1 = cljs.core.next.call(null,seq31204);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__31205,seq31204__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args31208 = [];
var len__25947__auto___31828 = arguments.length;
var i__25948__auto___31829 = (0);
while(true){
if((i__25948__auto___31829 < len__25947__auto___31828)){
args31208.push((arguments[i__25948__auto___31829]));

var G__31830 = (i__25948__auto___31829 + (1));
i__25948__auto___31829 = G__31830;
continue;
} else {
}
break;
}

var G__31212 = args31208.length;
switch (G__31212) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31208.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq31209){
var G__31210 = cljs.core.first.call(null,seq31209);
var seq31209__$1 = cljs.core.next.call(null,seq31209);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__31210,seq31209__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args31213 = [];
var len__25947__auto___31832 = arguments.length;
var i__25948__auto___31833 = (0);
while(true){
if((i__25948__auto___31833 < len__25947__auto___31832)){
args31213.push((arguments[i__25948__auto___31833]));

var G__31834 = (i__25948__auto___31833 + (1));
i__25948__auto___31833 = G__31834;
continue;
} else {
}
break;
}

var G__31217 = args31213.length;
switch (G__31217) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31213.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq31214){
var G__31215 = cljs.core.first.call(null,seq31214);
var seq31214__$1 = cljs.core.next.call(null,seq31214);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__31215,seq31214__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args31223 = [];
var len__25947__auto___31836 = arguments.length;
var i__25948__auto___31837 = (0);
while(true){
if((i__25948__auto___31837 < len__25947__auto___31836)){
args31223.push((arguments[i__25948__auto___31837]));

var G__31838 = (i__25948__auto___31837 + (1));
i__25948__auto___31837 = G__31838;
continue;
} else {
}
break;
}

var G__31227 = args31223.length;
switch (G__31227) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31223.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq31224){
var G__31225 = cljs.core.first.call(null,seq31224);
var seq31224__$1 = cljs.core.next.call(null,seq31224);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__31225,seq31224__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args31228 = [];
var len__25947__auto___31840 = arguments.length;
var i__25948__auto___31841 = (0);
while(true){
if((i__25948__auto___31841 < len__25947__auto___31840)){
args31228.push((arguments[i__25948__auto___31841]));

var G__31842 = (i__25948__auto___31841 + (1));
i__25948__auto___31841 = G__31842;
continue;
} else {
}
break;
}

var G__31232 = args31228.length;
switch (G__31232) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31228.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq31229){
var G__31230 = cljs.core.first.call(null,seq31229);
var seq31229__$1 = cljs.core.next.call(null,seq31229);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__31230,seq31229__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args31233 = [];
var len__25947__auto___31844 = arguments.length;
var i__25948__auto___31845 = (0);
while(true){
if((i__25948__auto___31845 < len__25947__auto___31844)){
args31233.push((arguments[i__25948__auto___31845]));

var G__31846 = (i__25948__auto___31845 + (1));
i__25948__auto___31845 = G__31846;
continue;
} else {
}
break;
}

var G__31237 = args31233.length;
switch (G__31237) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31233.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq31234){
var G__31235 = cljs.core.first.call(null,seq31234);
var seq31234__$1 = cljs.core.next.call(null,seq31234);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__31235,seq31234__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args31238 = [];
var len__25947__auto___31848 = arguments.length;
var i__25948__auto___31849 = (0);
while(true){
if((i__25948__auto___31849 < len__25947__auto___31848)){
args31238.push((arguments[i__25948__auto___31849]));

var G__31850 = (i__25948__auto___31849 + (1));
i__25948__auto___31849 = G__31850;
continue;
} else {
}
break;
}

var G__31242 = args31238.length;
switch (G__31242) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31238.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq31239){
var G__31240 = cljs.core.first.call(null,seq31239);
var seq31239__$1 = cljs.core.next.call(null,seq31239);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__31240,seq31239__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args31243 = [];
var len__25947__auto___31852 = arguments.length;
var i__25948__auto___31853 = (0);
while(true){
if((i__25948__auto___31853 < len__25947__auto___31852)){
args31243.push((arguments[i__25948__auto___31853]));

var G__31854 = (i__25948__auto___31853 + (1));
i__25948__auto___31853 = G__31854;
continue;
} else {
}
break;
}

var G__31247 = args31243.length;
switch (G__31247) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31243.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq31244){
var G__31245 = cljs.core.first.call(null,seq31244);
var seq31244__$1 = cljs.core.next.call(null,seq31244);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__31245,seq31244__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args31248 = [];
var len__25947__auto___31856 = arguments.length;
var i__25948__auto___31857 = (0);
while(true){
if((i__25948__auto___31857 < len__25947__auto___31856)){
args31248.push((arguments[i__25948__auto___31857]));

var G__31858 = (i__25948__auto___31857 + (1));
i__25948__auto___31857 = G__31858;
continue;
} else {
}
break;
}

var G__31252 = args31248.length;
switch (G__31252) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31248.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq31249){
var G__31250 = cljs.core.first.call(null,seq31249);
var seq31249__$1 = cljs.core.next.call(null,seq31249);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__31250,seq31249__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args31253 = [];
var len__25947__auto___31860 = arguments.length;
var i__25948__auto___31861 = (0);
while(true){
if((i__25948__auto___31861 < len__25947__auto___31860)){
args31253.push((arguments[i__25948__auto___31861]));

var G__31862 = (i__25948__auto___31861 + (1));
i__25948__auto___31861 = G__31862;
continue;
} else {
}
break;
}

var G__31257 = args31253.length;
switch (G__31257) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31253.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq31254){
var G__31255 = cljs.core.first.call(null,seq31254);
var seq31254__$1 = cljs.core.next.call(null,seq31254);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__31255,seq31254__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args31258 = [];
var len__25947__auto___31864 = arguments.length;
var i__25948__auto___31865 = (0);
while(true){
if((i__25948__auto___31865 < len__25947__auto___31864)){
args31258.push((arguments[i__25948__auto___31865]));

var G__31866 = (i__25948__auto___31865 + (1));
i__25948__auto___31865 = G__31866;
continue;
} else {
}
break;
}

var G__31262 = args31258.length;
switch (G__31262) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31258.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq31259){
var G__31260 = cljs.core.first.call(null,seq31259);
var seq31259__$1 = cljs.core.next.call(null,seq31259);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__31260,seq31259__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args31263 = [];
var len__25947__auto___31868 = arguments.length;
var i__25948__auto___31869 = (0);
while(true){
if((i__25948__auto___31869 < len__25947__auto___31868)){
args31263.push((arguments[i__25948__auto___31869]));

var G__31870 = (i__25948__auto___31869 + (1));
i__25948__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var G__31267 = args31263.length;
switch (G__31267) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31263.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq31264){
var G__31265 = cljs.core.first.call(null,seq31264);
var seq31264__$1 = cljs.core.next.call(null,seq31264);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__31265,seq31264__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args31268 = [];
var len__25947__auto___31872 = arguments.length;
var i__25948__auto___31873 = (0);
while(true){
if((i__25948__auto___31873 < len__25947__auto___31872)){
args31268.push((arguments[i__25948__auto___31873]));

var G__31874 = (i__25948__auto___31873 + (1));
i__25948__auto___31873 = G__31874;
continue;
} else {
}
break;
}

var G__31272 = args31268.length;
switch (G__31272) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31268.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq31269){
var G__31270 = cljs.core.first.call(null,seq31269);
var seq31269__$1 = cljs.core.next.call(null,seq31269);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__31270,seq31269__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args31273 = [];
var len__25947__auto___31876 = arguments.length;
var i__25948__auto___31877 = (0);
while(true){
if((i__25948__auto___31877 < len__25947__auto___31876)){
args31273.push((arguments[i__25948__auto___31877]));

var G__31878 = (i__25948__auto___31877 + (1));
i__25948__auto___31877 = G__31878;
continue;
} else {
}
break;
}

var G__31277 = args31273.length;
switch (G__31277) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31273.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq31274){
var G__31275 = cljs.core.first.call(null,seq31274);
var seq31274__$1 = cljs.core.next.call(null,seq31274);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__31275,seq31274__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args31278 = [];
var len__25947__auto___31880 = arguments.length;
var i__25948__auto___31881 = (0);
while(true){
if((i__25948__auto___31881 < len__25947__auto___31880)){
args31278.push((arguments[i__25948__auto___31881]));

var G__31882 = (i__25948__auto___31881 + (1));
i__25948__auto___31881 = G__31882;
continue;
} else {
}
break;
}

var G__31282 = args31278.length;
switch (G__31282) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31278.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq31279){
var G__31280 = cljs.core.first.call(null,seq31279);
var seq31279__$1 = cljs.core.next.call(null,seq31279);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__31280,seq31279__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args31283 = [];
var len__25947__auto___31884 = arguments.length;
var i__25948__auto___31885 = (0);
while(true){
if((i__25948__auto___31885 < len__25947__auto___31884)){
args31283.push((arguments[i__25948__auto___31885]));

var G__31886 = (i__25948__auto___31885 + (1));
i__25948__auto___31885 = G__31886;
continue;
} else {
}
break;
}

var G__31287 = args31283.length;
switch (G__31287) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31283.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq31284){
var G__31285 = cljs.core.first.call(null,seq31284);
var seq31284__$1 = cljs.core.next.call(null,seq31284);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__31285,seq31284__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args31288 = [];
var len__25947__auto___31888 = arguments.length;
var i__25948__auto___31889 = (0);
while(true){
if((i__25948__auto___31889 < len__25947__auto___31888)){
args31288.push((arguments[i__25948__auto___31889]));

var G__31890 = (i__25948__auto___31889 + (1));
i__25948__auto___31889 = G__31890;
continue;
} else {
}
break;
}

var G__31292 = args31288.length;
switch (G__31292) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31288.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq31289){
var G__31290 = cljs.core.first.call(null,seq31289);
var seq31289__$1 = cljs.core.next.call(null,seq31289);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__31290,seq31289__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args31293 = [];
var len__25947__auto___31892 = arguments.length;
var i__25948__auto___31893 = (0);
while(true){
if((i__25948__auto___31893 < len__25947__auto___31892)){
args31293.push((arguments[i__25948__auto___31893]));

var G__31894 = (i__25948__auto___31893 + (1));
i__25948__auto___31893 = G__31894;
continue;
} else {
}
break;
}

var G__31297 = args31293.length;
switch (G__31297) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31293.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq31294){
var G__31295 = cljs.core.first.call(null,seq31294);
var seq31294__$1 = cljs.core.next.call(null,seq31294);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__31295,seq31294__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args31298 = [];
var len__25947__auto___31896 = arguments.length;
var i__25948__auto___31897 = (0);
while(true){
if((i__25948__auto___31897 < len__25947__auto___31896)){
args31298.push((arguments[i__25948__auto___31897]));

var G__31898 = (i__25948__auto___31897 + (1));
i__25948__auto___31897 = G__31898;
continue;
} else {
}
break;
}

var G__31302 = args31298.length;
switch (G__31302) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31298.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq31299){
var G__31300 = cljs.core.first.call(null,seq31299);
var seq31299__$1 = cljs.core.next.call(null,seq31299);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__31300,seq31299__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args31303 = [];
var len__25947__auto___31900 = arguments.length;
var i__25948__auto___31901 = (0);
while(true){
if((i__25948__auto___31901 < len__25947__auto___31900)){
args31303.push((arguments[i__25948__auto___31901]));

var G__31902 = (i__25948__auto___31901 + (1));
i__25948__auto___31901 = G__31902;
continue;
} else {
}
break;
}

var G__31307 = args31303.length;
switch (G__31307) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31303.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq31304){
var G__31305 = cljs.core.first.call(null,seq31304);
var seq31304__$1 = cljs.core.next.call(null,seq31304);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__31305,seq31304__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args31308 = [];
var len__25947__auto___31904 = arguments.length;
var i__25948__auto___31905 = (0);
while(true){
if((i__25948__auto___31905 < len__25947__auto___31904)){
args31308.push((arguments[i__25948__auto___31905]));

var G__31906 = (i__25948__auto___31905 + (1));
i__25948__auto___31905 = G__31906;
continue;
} else {
}
break;
}

var G__31312 = args31308.length;
switch (G__31312) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31308.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq31309){
var G__31310 = cljs.core.first.call(null,seq31309);
var seq31309__$1 = cljs.core.next.call(null,seq31309);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__31310,seq31309__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args31313 = [];
var len__25947__auto___31908 = arguments.length;
var i__25948__auto___31909 = (0);
while(true){
if((i__25948__auto___31909 < len__25947__auto___31908)){
args31313.push((arguments[i__25948__auto___31909]));

var G__31910 = (i__25948__auto___31909 + (1));
i__25948__auto___31909 = G__31910;
continue;
} else {
}
break;
}

var G__31317 = args31313.length;
switch (G__31317) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31313.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq31314){
var G__31315 = cljs.core.first.call(null,seq31314);
var seq31314__$1 = cljs.core.next.call(null,seq31314);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__31315,seq31314__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args31318 = [];
var len__25947__auto___31912 = arguments.length;
var i__25948__auto___31913 = (0);
while(true){
if((i__25948__auto___31913 < len__25947__auto___31912)){
args31318.push((arguments[i__25948__auto___31913]));

var G__31914 = (i__25948__auto___31913 + (1));
i__25948__auto___31913 = G__31914;
continue;
} else {
}
break;
}

var G__31322 = args31318.length;
switch (G__31322) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31318.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq31319){
var G__31320 = cljs.core.first.call(null,seq31319);
var seq31319__$1 = cljs.core.next.call(null,seq31319);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__31320,seq31319__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args31323 = [];
var len__25947__auto___31916 = arguments.length;
var i__25948__auto___31917 = (0);
while(true){
if((i__25948__auto___31917 < len__25947__auto___31916)){
args31323.push((arguments[i__25948__auto___31917]));

var G__31918 = (i__25948__auto___31917 + (1));
i__25948__auto___31917 = G__31918;
continue;
} else {
}
break;
}

var G__31327 = args31323.length;
switch (G__31327) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31323.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq31324){
var G__31325 = cljs.core.first.call(null,seq31324);
var seq31324__$1 = cljs.core.next.call(null,seq31324);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__31325,seq31324__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args31328 = [];
var len__25947__auto___31920 = arguments.length;
var i__25948__auto___31921 = (0);
while(true){
if((i__25948__auto___31921 < len__25947__auto___31920)){
args31328.push((arguments[i__25948__auto___31921]));

var G__31922 = (i__25948__auto___31921 + (1));
i__25948__auto___31921 = G__31922;
continue;
} else {
}
break;
}

var G__31332 = args31328.length;
switch (G__31332) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31328.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq31329){
var G__31330 = cljs.core.first.call(null,seq31329);
var seq31329__$1 = cljs.core.next.call(null,seq31329);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__31330,seq31329__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args31333 = [];
var len__25947__auto___31924 = arguments.length;
var i__25948__auto___31925 = (0);
while(true){
if((i__25948__auto___31925 < len__25947__auto___31924)){
args31333.push((arguments[i__25948__auto___31925]));

var G__31926 = (i__25948__auto___31925 + (1));
i__25948__auto___31925 = G__31926;
continue;
} else {
}
break;
}

var G__31337 = args31333.length;
switch (G__31337) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31333.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq31334){
var G__31335 = cljs.core.first.call(null,seq31334);
var seq31334__$1 = cljs.core.next.call(null,seq31334);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__31335,seq31334__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args31338 = [];
var len__25947__auto___31928 = arguments.length;
var i__25948__auto___31929 = (0);
while(true){
if((i__25948__auto___31929 < len__25947__auto___31928)){
args31338.push((arguments[i__25948__auto___31929]));

var G__31930 = (i__25948__auto___31929 + (1));
i__25948__auto___31929 = G__31930;
continue;
} else {
}
break;
}

var G__31342 = args31338.length;
switch (G__31342) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31338.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq31339){
var G__31340 = cljs.core.first.call(null,seq31339);
var seq31339__$1 = cljs.core.next.call(null,seq31339);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__31340,seq31339__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args31343 = [];
var len__25947__auto___31932 = arguments.length;
var i__25948__auto___31933 = (0);
while(true){
if((i__25948__auto___31933 < len__25947__auto___31932)){
args31343.push((arguments[i__25948__auto___31933]));

var G__31934 = (i__25948__auto___31933 + (1));
i__25948__auto___31933 = G__31934;
continue;
} else {
}
break;
}

var G__31347 = args31343.length;
switch (G__31347) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31343.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq31344){
var G__31345 = cljs.core.first.call(null,seq31344);
var seq31344__$1 = cljs.core.next.call(null,seq31344);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__31345,seq31344__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args31348 = [];
var len__25947__auto___31936 = arguments.length;
var i__25948__auto___31937 = (0);
while(true){
if((i__25948__auto___31937 < len__25947__auto___31936)){
args31348.push((arguments[i__25948__auto___31937]));

var G__31938 = (i__25948__auto___31937 + (1));
i__25948__auto___31937 = G__31938;
continue;
} else {
}
break;
}

var G__31352 = args31348.length;
switch (G__31352) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31348.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq31349){
var G__31350 = cljs.core.first.call(null,seq31349);
var seq31349__$1 = cljs.core.next.call(null,seq31349);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__31350,seq31349__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args31353 = [];
var len__25947__auto___31940 = arguments.length;
var i__25948__auto___31941 = (0);
while(true){
if((i__25948__auto___31941 < len__25947__auto___31940)){
args31353.push((arguments[i__25948__auto___31941]));

var G__31942 = (i__25948__auto___31941 + (1));
i__25948__auto___31941 = G__31942;
continue;
} else {
}
break;
}

var G__31357 = args31353.length;
switch (G__31357) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31353.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq31354){
var G__31355 = cljs.core.first.call(null,seq31354);
var seq31354__$1 = cljs.core.next.call(null,seq31354);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__31355,seq31354__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args31358 = [];
var len__25947__auto___31944 = arguments.length;
var i__25948__auto___31945 = (0);
while(true){
if((i__25948__auto___31945 < len__25947__auto___31944)){
args31358.push((arguments[i__25948__auto___31945]));

var G__31946 = (i__25948__auto___31945 + (1));
i__25948__auto___31945 = G__31946;
continue;
} else {
}
break;
}

var G__31362 = args31358.length;
switch (G__31362) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31358.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq31359){
var G__31360 = cljs.core.first.call(null,seq31359);
var seq31359__$1 = cljs.core.next.call(null,seq31359);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__31360,seq31359__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args31363 = [];
var len__25947__auto___31948 = arguments.length;
var i__25948__auto___31949 = (0);
while(true){
if((i__25948__auto___31949 < len__25947__auto___31948)){
args31363.push((arguments[i__25948__auto___31949]));

var G__31950 = (i__25948__auto___31949 + (1));
i__25948__auto___31949 = G__31950;
continue;
} else {
}
break;
}

var G__31367 = args31363.length;
switch (G__31367) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31363.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq31364){
var G__31365 = cljs.core.first.call(null,seq31364);
var seq31364__$1 = cljs.core.next.call(null,seq31364);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__31365,seq31364__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args31368 = [];
var len__25947__auto___31952 = arguments.length;
var i__25948__auto___31953 = (0);
while(true){
if((i__25948__auto___31953 < len__25947__auto___31952)){
args31368.push((arguments[i__25948__auto___31953]));

var G__31954 = (i__25948__auto___31953 + (1));
i__25948__auto___31953 = G__31954;
continue;
} else {
}
break;
}

var G__31372 = args31368.length;
switch (G__31372) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31368.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq31369){
var G__31370 = cljs.core.first.call(null,seq31369);
var seq31369__$1 = cljs.core.next.call(null,seq31369);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__31370,seq31369__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args31373 = [];
var len__25947__auto___31956 = arguments.length;
var i__25948__auto___31957 = (0);
while(true){
if((i__25948__auto___31957 < len__25947__auto___31956)){
args31373.push((arguments[i__25948__auto___31957]));

var G__31958 = (i__25948__auto___31957 + (1));
i__25948__auto___31957 = G__31958;
continue;
} else {
}
break;
}

var G__31377 = args31373.length;
switch (G__31377) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31373.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq31374){
var G__31375 = cljs.core.first.call(null,seq31374);
var seq31374__$1 = cljs.core.next.call(null,seq31374);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__31375,seq31374__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args31378 = [];
var len__25947__auto___31960 = arguments.length;
var i__25948__auto___31961 = (0);
while(true){
if((i__25948__auto___31961 < len__25947__auto___31960)){
args31378.push((arguments[i__25948__auto___31961]));

var G__31962 = (i__25948__auto___31961 + (1));
i__25948__auto___31961 = G__31962;
continue;
} else {
}
break;
}

var G__31382 = args31378.length;
switch (G__31382) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31378.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq31379){
var G__31380 = cljs.core.first.call(null,seq31379);
var seq31379__$1 = cljs.core.next.call(null,seq31379);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__31380,seq31379__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args31383 = [];
var len__25947__auto___31964 = arguments.length;
var i__25948__auto___31965 = (0);
while(true){
if((i__25948__auto___31965 < len__25947__auto___31964)){
args31383.push((arguments[i__25948__auto___31965]));

var G__31966 = (i__25948__auto___31965 + (1));
i__25948__auto___31965 = G__31966;
continue;
} else {
}
break;
}

var G__31387 = args31383.length;
switch (G__31387) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31383.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq31384){
var G__31385 = cljs.core.first.call(null,seq31384);
var seq31384__$1 = cljs.core.next.call(null,seq31384);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__31385,seq31384__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args31388 = [];
var len__25947__auto___31968 = arguments.length;
var i__25948__auto___31969 = (0);
while(true){
if((i__25948__auto___31969 < len__25947__auto___31968)){
args31388.push((arguments[i__25948__auto___31969]));

var G__31970 = (i__25948__auto___31969 + (1));
i__25948__auto___31969 = G__31970;
continue;
} else {
}
break;
}

var G__31392 = args31388.length;
switch (G__31392) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31388.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq31389){
var G__31390 = cljs.core.first.call(null,seq31389);
var seq31389__$1 = cljs.core.next.call(null,seq31389);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__31390,seq31389__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args31393 = [];
var len__25947__auto___31972 = arguments.length;
var i__25948__auto___31973 = (0);
while(true){
if((i__25948__auto___31973 < len__25947__auto___31972)){
args31393.push((arguments[i__25948__auto___31973]));

var G__31974 = (i__25948__auto___31973 + (1));
i__25948__auto___31973 = G__31974;
continue;
} else {
}
break;
}

var G__31397 = args31393.length;
switch (G__31397) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31393.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq31394){
var G__31395 = cljs.core.first.call(null,seq31394);
var seq31394__$1 = cljs.core.next.call(null,seq31394);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__31395,seq31394__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args31398 = [];
var len__25947__auto___31976 = arguments.length;
var i__25948__auto___31977 = (0);
while(true){
if((i__25948__auto___31977 < len__25947__auto___31976)){
args31398.push((arguments[i__25948__auto___31977]));

var G__31978 = (i__25948__auto___31977 + (1));
i__25948__auto___31977 = G__31978;
continue;
} else {
}
break;
}

var G__31402 = args31398.length;
switch (G__31402) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31398.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq31399){
var G__31400 = cljs.core.first.call(null,seq31399);
var seq31399__$1 = cljs.core.next.call(null,seq31399);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__31400,seq31399__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args31403 = [];
var len__25947__auto___31980 = arguments.length;
var i__25948__auto___31981 = (0);
while(true){
if((i__25948__auto___31981 < len__25947__auto___31980)){
args31403.push((arguments[i__25948__auto___31981]));

var G__31982 = (i__25948__auto___31981 + (1));
i__25948__auto___31981 = G__31982;
continue;
} else {
}
break;
}

var G__31407 = args31403.length;
switch (G__31407) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31403.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq31404){
var G__31405 = cljs.core.first.call(null,seq31404);
var seq31404__$1 = cljs.core.next.call(null,seq31404);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__31405,seq31404__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args31408 = [];
var len__25947__auto___31984 = arguments.length;
var i__25948__auto___31985 = (0);
while(true){
if((i__25948__auto___31985 < len__25947__auto___31984)){
args31408.push((arguments[i__25948__auto___31985]));

var G__31986 = (i__25948__auto___31985 + (1));
i__25948__auto___31985 = G__31986;
continue;
} else {
}
break;
}

var G__31412 = args31408.length;
switch (G__31412) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31408.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq31409){
var G__31410 = cljs.core.first.call(null,seq31409);
var seq31409__$1 = cljs.core.next.call(null,seq31409);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__31410,seq31409__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args31413 = [];
var len__25947__auto___31988 = arguments.length;
var i__25948__auto___31989 = (0);
while(true){
if((i__25948__auto___31989 < len__25947__auto___31988)){
args31413.push((arguments[i__25948__auto___31989]));

var G__31990 = (i__25948__auto___31989 + (1));
i__25948__auto___31989 = G__31990;
continue;
} else {
}
break;
}

var G__31417 = args31413.length;
switch (G__31417) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31413.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq31414){
var G__31415 = cljs.core.first.call(null,seq31414);
var seq31414__$1 = cljs.core.next.call(null,seq31414);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__31415,seq31414__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args31418 = [];
var len__25947__auto___31992 = arguments.length;
var i__25948__auto___31993 = (0);
while(true){
if((i__25948__auto___31993 < len__25947__auto___31992)){
args31418.push((arguments[i__25948__auto___31993]));

var G__31994 = (i__25948__auto___31993 + (1));
i__25948__auto___31993 = G__31994;
continue;
} else {
}
break;
}

var G__31422 = args31418.length;
switch (G__31422) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31418.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq31419){
var G__31420 = cljs.core.first.call(null,seq31419);
var seq31419__$1 = cljs.core.next.call(null,seq31419);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__31420,seq31419__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args31423 = [];
var len__25947__auto___31996 = arguments.length;
var i__25948__auto___31997 = (0);
while(true){
if((i__25948__auto___31997 < len__25947__auto___31996)){
args31423.push((arguments[i__25948__auto___31997]));

var G__31998 = (i__25948__auto___31997 + (1));
i__25948__auto___31997 = G__31998;
continue;
} else {
}
break;
}

var G__31427 = args31423.length;
switch (G__31427) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31423.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq31424){
var G__31425 = cljs.core.first.call(null,seq31424);
var seq31424__$1 = cljs.core.next.call(null,seq31424);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__31425,seq31424__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args31428 = [];
var len__25947__auto___32000 = arguments.length;
var i__25948__auto___32001 = (0);
while(true){
if((i__25948__auto___32001 < len__25947__auto___32000)){
args31428.push((arguments[i__25948__auto___32001]));

var G__32002 = (i__25948__auto___32001 + (1));
i__25948__auto___32001 = G__32002;
continue;
} else {
}
break;
}

var G__31432 = args31428.length;
switch (G__31432) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31428.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq31429){
var G__31430 = cljs.core.first.call(null,seq31429);
var seq31429__$1 = cljs.core.next.call(null,seq31429);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__31430,seq31429__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args31433 = [];
var len__25947__auto___32004 = arguments.length;
var i__25948__auto___32005 = (0);
while(true){
if((i__25948__auto___32005 < len__25947__auto___32004)){
args31433.push((arguments[i__25948__auto___32005]));

var G__32006 = (i__25948__auto___32005 + (1));
i__25948__auto___32005 = G__32006;
continue;
} else {
}
break;
}

var G__31437 = args31433.length;
switch (G__31437) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31433.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq31434){
var G__31435 = cljs.core.first.call(null,seq31434);
var seq31434__$1 = cljs.core.next.call(null,seq31434);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__31435,seq31434__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args31438 = [];
var len__25947__auto___32008 = arguments.length;
var i__25948__auto___32009 = (0);
while(true){
if((i__25948__auto___32009 < len__25947__auto___32008)){
args31438.push((arguments[i__25948__auto___32009]));

var G__32010 = (i__25948__auto___32009 + (1));
i__25948__auto___32009 = G__32010;
continue;
} else {
}
break;
}

var G__31442 = args31438.length;
switch (G__31442) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31438.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq31439){
var G__31440 = cljs.core.first.call(null,seq31439);
var seq31439__$1 = cljs.core.next.call(null,seq31439);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__31440,seq31439__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args31443 = [];
var len__25947__auto___32012 = arguments.length;
var i__25948__auto___32013 = (0);
while(true){
if((i__25948__auto___32013 < len__25947__auto___32012)){
args31443.push((arguments[i__25948__auto___32013]));

var G__32014 = (i__25948__auto___32013 + (1));
i__25948__auto___32013 = G__32014;
continue;
} else {
}
break;
}

var G__31447 = args31443.length;
switch (G__31447) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31443.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq31444){
var G__31445 = cljs.core.first.call(null,seq31444);
var seq31444__$1 = cljs.core.next.call(null,seq31444);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__31445,seq31444__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args31448 = [];
var len__25947__auto___32016 = arguments.length;
var i__25948__auto___32017 = (0);
while(true){
if((i__25948__auto___32017 < len__25947__auto___32016)){
args31448.push((arguments[i__25948__auto___32017]));

var G__32018 = (i__25948__auto___32017 + (1));
i__25948__auto___32017 = G__32018;
continue;
} else {
}
break;
}

var G__31452 = args31448.length;
switch (G__31452) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31448.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq31449){
var G__31450 = cljs.core.first.call(null,seq31449);
var seq31449__$1 = cljs.core.next.call(null,seq31449);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__31450,seq31449__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args31453 = [];
var len__25947__auto___32020 = arguments.length;
var i__25948__auto___32021 = (0);
while(true){
if((i__25948__auto___32021 < len__25947__auto___32020)){
args31453.push((arguments[i__25948__auto___32021]));

var G__32022 = (i__25948__auto___32021 + (1));
i__25948__auto___32021 = G__32022;
continue;
} else {
}
break;
}

var G__31457 = args31453.length;
switch (G__31457) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31453.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq31454){
var G__31455 = cljs.core.first.call(null,seq31454);
var seq31454__$1 = cljs.core.next.call(null,seq31454);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__31455,seq31454__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args31458 = [];
var len__25947__auto___32024 = arguments.length;
var i__25948__auto___32025 = (0);
while(true){
if((i__25948__auto___32025 < len__25947__auto___32024)){
args31458.push((arguments[i__25948__auto___32025]));

var G__32026 = (i__25948__auto___32025 + (1));
i__25948__auto___32025 = G__32026;
continue;
} else {
}
break;
}

var G__31462 = args31458.length;
switch (G__31462) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31458.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq31459){
var G__31460 = cljs.core.first.call(null,seq31459);
var seq31459__$1 = cljs.core.next.call(null,seq31459);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__31460,seq31459__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args31463 = [];
var len__25947__auto___32028 = arguments.length;
var i__25948__auto___32029 = (0);
while(true){
if((i__25948__auto___32029 < len__25947__auto___32028)){
args31463.push((arguments[i__25948__auto___32029]));

var G__32030 = (i__25948__auto___32029 + (1));
i__25948__auto___32029 = G__32030;
continue;
} else {
}
break;
}

var G__31467 = args31463.length;
switch (G__31467) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31463.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq31464){
var G__31465 = cljs.core.first.call(null,seq31464);
var seq31464__$1 = cljs.core.next.call(null,seq31464);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__31465,seq31464__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args31468 = [];
var len__25947__auto___32032 = arguments.length;
var i__25948__auto___32033 = (0);
while(true){
if((i__25948__auto___32033 < len__25947__auto___32032)){
args31468.push((arguments[i__25948__auto___32033]));

var G__32034 = (i__25948__auto___32033 + (1));
i__25948__auto___32033 = G__32034;
continue;
} else {
}
break;
}

var G__31472 = args31468.length;
switch (G__31472) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31468.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq31469){
var G__31470 = cljs.core.first.call(null,seq31469);
var seq31469__$1 = cljs.core.next.call(null,seq31469);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__31470,seq31469__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args31473 = [];
var len__25947__auto___32036 = arguments.length;
var i__25948__auto___32037 = (0);
while(true){
if((i__25948__auto___32037 < len__25947__auto___32036)){
args31473.push((arguments[i__25948__auto___32037]));

var G__32038 = (i__25948__auto___32037 + (1));
i__25948__auto___32037 = G__32038;
continue;
} else {
}
break;
}

var G__31477 = args31473.length;
switch (G__31477) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31473.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq31474){
var G__31475 = cljs.core.first.call(null,seq31474);
var seq31474__$1 = cljs.core.next.call(null,seq31474);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__31475,seq31474__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args31478 = [];
var len__25947__auto___32040 = arguments.length;
var i__25948__auto___32041 = (0);
while(true){
if((i__25948__auto___32041 < len__25947__auto___32040)){
args31478.push((arguments[i__25948__auto___32041]));

var G__32042 = (i__25948__auto___32041 + (1));
i__25948__auto___32041 = G__32042;
continue;
} else {
}
break;
}

var G__31482 = args31478.length;
switch (G__31482) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31478.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq31479){
var G__31480 = cljs.core.first.call(null,seq31479);
var seq31479__$1 = cljs.core.next.call(null,seq31479);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__31480,seq31479__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args31483 = [];
var len__25947__auto___32044 = arguments.length;
var i__25948__auto___32045 = (0);
while(true){
if((i__25948__auto___32045 < len__25947__auto___32044)){
args31483.push((arguments[i__25948__auto___32045]));

var G__32046 = (i__25948__auto___32045 + (1));
i__25948__auto___32045 = G__32046;
continue;
} else {
}
break;
}

var G__31487 = args31483.length;
switch (G__31487) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31483.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq31484){
var G__31485 = cljs.core.first.call(null,seq31484);
var seq31484__$1 = cljs.core.next.call(null,seq31484);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__31485,seq31484__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args31488 = [];
var len__25947__auto___32048 = arguments.length;
var i__25948__auto___32049 = (0);
while(true){
if((i__25948__auto___32049 < len__25947__auto___32048)){
args31488.push((arguments[i__25948__auto___32049]));

var G__32050 = (i__25948__auto___32049 + (1));
i__25948__auto___32049 = G__32050;
continue;
} else {
}
break;
}

var G__31492 = args31488.length;
switch (G__31492) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31488.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq31489){
var G__31490 = cljs.core.first.call(null,seq31489);
var seq31489__$1 = cljs.core.next.call(null,seq31489);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__31490,seq31489__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args31493 = [];
var len__25947__auto___32052 = arguments.length;
var i__25948__auto___32053 = (0);
while(true){
if((i__25948__auto___32053 < len__25947__auto___32052)){
args31493.push((arguments[i__25948__auto___32053]));

var G__32054 = (i__25948__auto___32053 + (1));
i__25948__auto___32053 = G__32054;
continue;
} else {
}
break;
}

var G__31497 = args31493.length;
switch (G__31497) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31493.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq31494){
var G__31495 = cljs.core.first.call(null,seq31494);
var seq31494__$1 = cljs.core.next.call(null,seq31494);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__31495,seq31494__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args31498 = [];
var len__25947__auto___32056 = arguments.length;
var i__25948__auto___32057 = (0);
while(true){
if((i__25948__auto___32057 < len__25947__auto___32056)){
args31498.push((arguments[i__25948__auto___32057]));

var G__32058 = (i__25948__auto___32057 + (1));
i__25948__auto___32057 = G__32058;
continue;
} else {
}
break;
}

var G__31502 = args31498.length;
switch (G__31502) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31498.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq31499){
var G__31500 = cljs.core.first.call(null,seq31499);
var seq31499__$1 = cljs.core.next.call(null,seq31499);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__31500,seq31499__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args31503 = [];
var len__25947__auto___32060 = arguments.length;
var i__25948__auto___32061 = (0);
while(true){
if((i__25948__auto___32061 < len__25947__auto___32060)){
args31503.push((arguments[i__25948__auto___32061]));

var G__32062 = (i__25948__auto___32061 + (1));
i__25948__auto___32061 = G__32062;
continue;
} else {
}
break;
}

var G__31507 = args31503.length;
switch (G__31507) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31503.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq31504){
var G__31505 = cljs.core.first.call(null,seq31504);
var seq31504__$1 = cljs.core.next.call(null,seq31504);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__31505,seq31504__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args31508 = [];
var len__25947__auto___32064 = arguments.length;
var i__25948__auto___32065 = (0);
while(true){
if((i__25948__auto___32065 < len__25947__auto___32064)){
args31508.push((arguments[i__25948__auto___32065]));

var G__32066 = (i__25948__auto___32065 + (1));
i__25948__auto___32065 = G__32066;
continue;
} else {
}
break;
}

var G__31512 = args31508.length;
switch (G__31512) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31508.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq31509){
var G__31510 = cljs.core.first.call(null,seq31509);
var seq31509__$1 = cljs.core.next.call(null,seq31509);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__31510,seq31509__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args31513 = [];
var len__25947__auto___32068 = arguments.length;
var i__25948__auto___32069 = (0);
while(true){
if((i__25948__auto___32069 < len__25947__auto___32068)){
args31513.push((arguments[i__25948__auto___32069]));

var G__32070 = (i__25948__auto___32069 + (1));
i__25948__auto___32069 = G__32070;
continue;
} else {
}
break;
}

var G__31517 = args31513.length;
switch (G__31517) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31513.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq31514){
var G__31515 = cljs.core.first.call(null,seq31514);
var seq31514__$1 = cljs.core.next.call(null,seq31514);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__31515,seq31514__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args31518 = [];
var len__25947__auto___32072 = arguments.length;
var i__25948__auto___32073 = (0);
while(true){
if((i__25948__auto___32073 < len__25947__auto___32072)){
args31518.push((arguments[i__25948__auto___32073]));

var G__32074 = (i__25948__auto___32073 + (1));
i__25948__auto___32073 = G__32074;
continue;
} else {
}
break;
}

var G__31522 = args31518.length;
switch (G__31522) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31518.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq31519){
var G__31520 = cljs.core.first.call(null,seq31519);
var seq31519__$1 = cljs.core.next.call(null,seq31519);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__31520,seq31519__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args31523 = [];
var len__25947__auto___32076 = arguments.length;
var i__25948__auto___32077 = (0);
while(true){
if((i__25948__auto___32077 < len__25947__auto___32076)){
args31523.push((arguments[i__25948__auto___32077]));

var G__32078 = (i__25948__auto___32077 + (1));
i__25948__auto___32077 = G__32078;
continue;
} else {
}
break;
}

var G__31527 = args31523.length;
switch (G__31527) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31523.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq31524){
var G__31525 = cljs.core.first.call(null,seq31524);
var seq31524__$1 = cljs.core.next.call(null,seq31524);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__31525,seq31524__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args31528 = [];
var len__25947__auto___32080 = arguments.length;
var i__25948__auto___32081 = (0);
while(true){
if((i__25948__auto___32081 < len__25947__auto___32080)){
args31528.push((arguments[i__25948__auto___32081]));

var G__32082 = (i__25948__auto___32081 + (1));
i__25948__auto___32081 = G__32082;
continue;
} else {
}
break;
}

var G__31532 = args31528.length;
switch (G__31532) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31528.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq31529){
var G__31530 = cljs.core.first.call(null,seq31529);
var seq31529__$1 = cljs.core.next.call(null,seq31529);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__31530,seq31529__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args31533 = [];
var len__25947__auto___32084 = arguments.length;
var i__25948__auto___32085 = (0);
while(true){
if((i__25948__auto___32085 < len__25947__auto___32084)){
args31533.push((arguments[i__25948__auto___32085]));

var G__32086 = (i__25948__auto___32085 + (1));
i__25948__auto___32085 = G__32086;
continue;
} else {
}
break;
}

var G__31537 = args31533.length;
switch (G__31537) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31533.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq31534){
var G__31535 = cljs.core.first.call(null,seq31534);
var seq31534__$1 = cljs.core.next.call(null,seq31534);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__31535,seq31534__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args31538 = [];
var len__25947__auto___32088 = arguments.length;
var i__25948__auto___32089 = (0);
while(true){
if((i__25948__auto___32089 < len__25947__auto___32088)){
args31538.push((arguments[i__25948__auto___32089]));

var G__32090 = (i__25948__auto___32089 + (1));
i__25948__auto___32089 = G__32090;
continue;
} else {
}
break;
}

var G__31542 = args31538.length;
switch (G__31542) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31538.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq31539){
var G__31540 = cljs.core.first.call(null,seq31539);
var seq31539__$1 = cljs.core.next.call(null,seq31539);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__31540,seq31539__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args31543 = [];
var len__25947__auto___32092 = arguments.length;
var i__25948__auto___32093 = (0);
while(true){
if((i__25948__auto___32093 < len__25947__auto___32092)){
args31543.push((arguments[i__25948__auto___32093]));

var G__32094 = (i__25948__auto___32093 + (1));
i__25948__auto___32093 = G__32094;
continue;
} else {
}
break;
}

var G__31547 = args31543.length;
switch (G__31547) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31543.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq31544){
var G__31545 = cljs.core.first.call(null,seq31544);
var seq31544__$1 = cljs.core.next.call(null,seq31544);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__31545,seq31544__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args31548 = [];
var len__25947__auto___32096 = arguments.length;
var i__25948__auto___32097 = (0);
while(true){
if((i__25948__auto___32097 < len__25947__auto___32096)){
args31548.push((arguments[i__25948__auto___32097]));

var G__32098 = (i__25948__auto___32097 + (1));
i__25948__auto___32097 = G__32098;
continue;
} else {
}
break;
}

var G__31552 = args31548.length;
switch (G__31552) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31548.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq31549){
var G__31550 = cljs.core.first.call(null,seq31549);
var seq31549__$1 = cljs.core.next.call(null,seq31549);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__31550,seq31549__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args31553 = [];
var len__25947__auto___32100 = arguments.length;
var i__25948__auto___32101 = (0);
while(true){
if((i__25948__auto___32101 < len__25947__auto___32100)){
args31553.push((arguments[i__25948__auto___32101]));

var G__32102 = (i__25948__auto___32101 + (1));
i__25948__auto___32101 = G__32102;
continue;
} else {
}
break;
}

var G__31557 = args31553.length;
switch (G__31557) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31553.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq31554){
var G__31555 = cljs.core.first.call(null,seq31554);
var seq31554__$1 = cljs.core.next.call(null,seq31554);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__31555,seq31554__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args31558 = [];
var len__25947__auto___32104 = arguments.length;
var i__25948__auto___32105 = (0);
while(true){
if((i__25948__auto___32105 < len__25947__auto___32104)){
args31558.push((arguments[i__25948__auto___32105]));

var G__32106 = (i__25948__auto___32105 + (1));
i__25948__auto___32105 = G__32106;
continue;
} else {
}
break;
}

var G__31562 = args31558.length;
switch (G__31562) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31558.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq31559){
var G__31560 = cljs.core.first.call(null,seq31559);
var seq31559__$1 = cljs.core.next.call(null,seq31559);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__31560,seq31559__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args31563 = [];
var len__25947__auto___32108 = arguments.length;
var i__25948__auto___32109 = (0);
while(true){
if((i__25948__auto___32109 < len__25947__auto___32108)){
args31563.push((arguments[i__25948__auto___32109]));

var G__32110 = (i__25948__auto___32109 + (1));
i__25948__auto___32109 = G__32110;
continue;
} else {
}
break;
}

var G__31567 = args31563.length;
switch (G__31567) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31563.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq31564){
var G__31565 = cljs.core.first.call(null,seq31564);
var seq31564__$1 = cljs.core.next.call(null,seq31564);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__31565,seq31564__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args31568 = [];
var len__25947__auto___32112 = arguments.length;
var i__25948__auto___32113 = (0);
while(true){
if((i__25948__auto___32113 < len__25947__auto___32112)){
args31568.push((arguments[i__25948__auto___32113]));

var G__32114 = (i__25948__auto___32113 + (1));
i__25948__auto___32113 = G__32114;
continue;
} else {
}
break;
}

var G__31572 = args31568.length;
switch (G__31572) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31568.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq31569){
var G__31570 = cljs.core.first.call(null,seq31569);
var seq31569__$1 = cljs.core.next.call(null,seq31569);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__31570,seq31569__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args31573 = [];
var len__25947__auto___32116 = arguments.length;
var i__25948__auto___32117 = (0);
while(true){
if((i__25948__auto___32117 < len__25947__auto___32116)){
args31573.push((arguments[i__25948__auto___32117]));

var G__32118 = (i__25948__auto___32117 + (1));
i__25948__auto___32117 = G__32118;
continue;
} else {
}
break;
}

var G__31577 = args31573.length;
switch (G__31577) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31573.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq31574){
var G__31575 = cljs.core.first.call(null,seq31574);
var seq31574__$1 = cljs.core.next.call(null,seq31574);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__31575,seq31574__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args31578 = [];
var len__25947__auto___32120 = arguments.length;
var i__25948__auto___32121 = (0);
while(true){
if((i__25948__auto___32121 < len__25947__auto___32120)){
args31578.push((arguments[i__25948__auto___32121]));

var G__32122 = (i__25948__auto___32121 + (1));
i__25948__auto___32121 = G__32122;
continue;
} else {
}
break;
}

var G__31582 = args31578.length;
switch (G__31582) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31578.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq31579){
var G__31580 = cljs.core.first.call(null,seq31579);
var seq31579__$1 = cljs.core.next.call(null,seq31579);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__31580,seq31579__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args31583 = [];
var len__25947__auto___32124 = arguments.length;
var i__25948__auto___32125 = (0);
while(true){
if((i__25948__auto___32125 < len__25947__auto___32124)){
args31583.push((arguments[i__25948__auto___32125]));

var G__32126 = (i__25948__auto___32125 + (1));
i__25948__auto___32125 = G__32126;
continue;
} else {
}
break;
}

var G__31587 = args31583.length;
switch (G__31587) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31583.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq31584){
var G__31585 = cljs.core.first.call(null,seq31584);
var seq31584__$1 = cljs.core.next.call(null,seq31584);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__31585,seq31584__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args31588 = [];
var len__25947__auto___32128 = arguments.length;
var i__25948__auto___32129 = (0);
while(true){
if((i__25948__auto___32129 < len__25947__auto___32128)){
args31588.push((arguments[i__25948__auto___32129]));

var G__32130 = (i__25948__auto___32129 + (1));
i__25948__auto___32129 = G__32130;
continue;
} else {
}
break;
}

var G__31592 = args31588.length;
switch (G__31592) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31588.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq31589){
var G__31590 = cljs.core.first.call(null,seq31589);
var seq31589__$1 = cljs.core.next.call(null,seq31589);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__31590,seq31589__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args31593 = [];
var len__25947__auto___32132 = arguments.length;
var i__25948__auto___32133 = (0);
while(true){
if((i__25948__auto___32133 < len__25947__auto___32132)){
args31593.push((arguments[i__25948__auto___32133]));

var G__32134 = (i__25948__auto___32133 + (1));
i__25948__auto___32133 = G__32134;
continue;
} else {
}
break;
}

var G__31597 = args31593.length;
switch (G__31597) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31593.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq31594){
var G__31595 = cljs.core.first.call(null,seq31594);
var seq31594__$1 = cljs.core.next.call(null,seq31594);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__31595,seq31594__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args31598 = [];
var len__25947__auto___32136 = arguments.length;
var i__25948__auto___32137 = (0);
while(true){
if((i__25948__auto___32137 < len__25947__auto___32136)){
args31598.push((arguments[i__25948__auto___32137]));

var G__32138 = (i__25948__auto___32137 + (1));
i__25948__auto___32137 = G__32138;
continue;
} else {
}
break;
}

var G__31602 = args31598.length;
switch (G__31602) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31598.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq31599){
var G__31600 = cljs.core.first.call(null,seq31599);
var seq31599__$1 = cljs.core.next.call(null,seq31599);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__31600,seq31599__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args31603 = [];
var len__25947__auto___32140 = arguments.length;
var i__25948__auto___32141 = (0);
while(true){
if((i__25948__auto___32141 < len__25947__auto___32140)){
args31603.push((arguments[i__25948__auto___32141]));

var G__32142 = (i__25948__auto___32141 + (1));
i__25948__auto___32141 = G__32142;
continue;
} else {
}
break;
}

var G__31607 = args31603.length;
switch (G__31607) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31603.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq31604){
var G__31605 = cljs.core.first.call(null,seq31604);
var seq31604__$1 = cljs.core.next.call(null,seq31604);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__31605,seq31604__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args31608 = [];
var len__25947__auto___32144 = arguments.length;
var i__25948__auto___32145 = (0);
while(true){
if((i__25948__auto___32145 < len__25947__auto___32144)){
args31608.push((arguments[i__25948__auto___32145]));

var G__32146 = (i__25948__auto___32145 + (1));
i__25948__auto___32145 = G__32146;
continue;
} else {
}
break;
}

var G__31612 = args31608.length;
switch (G__31612) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31608.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq31609){
var G__31610 = cljs.core.first.call(null,seq31609);
var seq31609__$1 = cljs.core.next.call(null,seq31609);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__31610,seq31609__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args31613 = [];
var len__25947__auto___32148 = arguments.length;
var i__25948__auto___32149 = (0);
while(true){
if((i__25948__auto___32149 < len__25947__auto___32148)){
args31613.push((arguments[i__25948__auto___32149]));

var G__32150 = (i__25948__auto___32149 + (1));
i__25948__auto___32149 = G__32150;
continue;
} else {
}
break;
}

var G__31617 = args31613.length;
switch (G__31617) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31613.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq31614){
var G__31615 = cljs.core.first.call(null,seq31614);
var seq31614__$1 = cljs.core.next.call(null,seq31614);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__31615,seq31614__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args31618 = [];
var len__25947__auto___32152 = arguments.length;
var i__25948__auto___32153 = (0);
while(true){
if((i__25948__auto___32153 < len__25947__auto___32152)){
args31618.push((arguments[i__25948__auto___32153]));

var G__32154 = (i__25948__auto___32153 + (1));
i__25948__auto___32153 = G__32154;
continue;
} else {
}
break;
}

var G__31622 = args31618.length;
switch (G__31622) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31618.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq31619){
var G__31620 = cljs.core.first.call(null,seq31619);
var seq31619__$1 = cljs.core.next.call(null,seq31619);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__31620,seq31619__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args31623 = [];
var len__25947__auto___32156 = arguments.length;
var i__25948__auto___32157 = (0);
while(true){
if((i__25948__auto___32157 < len__25947__auto___32156)){
args31623.push((arguments[i__25948__auto___32157]));

var G__32158 = (i__25948__auto___32157 + (1));
i__25948__auto___32157 = G__32158;
continue;
} else {
}
break;
}

var G__31627 = args31623.length;
switch (G__31627) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31623.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq31624){
var G__31625 = cljs.core.first.call(null,seq31624);
var seq31624__$1 = cljs.core.next.call(null,seq31624);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__31625,seq31624__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args31628 = [];
var len__25947__auto___32160 = arguments.length;
var i__25948__auto___32161 = (0);
while(true){
if((i__25948__auto___32161 < len__25947__auto___32160)){
args31628.push((arguments[i__25948__auto___32161]));

var G__32162 = (i__25948__auto___32161 + (1));
i__25948__auto___32161 = G__32162;
continue;
} else {
}
break;
}

var G__31632 = args31628.length;
switch (G__31632) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31628.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq31629){
var G__31630 = cljs.core.first.call(null,seq31629);
var seq31629__$1 = cljs.core.next.call(null,seq31629);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__31630,seq31629__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args31633 = [];
var len__25947__auto___32164 = arguments.length;
var i__25948__auto___32165 = (0);
while(true){
if((i__25948__auto___32165 < len__25947__auto___32164)){
args31633.push((arguments[i__25948__auto___32165]));

var G__32166 = (i__25948__auto___32165 + (1));
i__25948__auto___32165 = G__32166;
continue;
} else {
}
break;
}

var G__31637 = args31633.length;
switch (G__31637) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31633.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq31634){
var G__31635 = cljs.core.first.call(null,seq31634);
var seq31634__$1 = cljs.core.next.call(null,seq31634);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__31635,seq31634__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args31638 = [];
var len__25947__auto___32168 = arguments.length;
var i__25948__auto___32169 = (0);
while(true){
if((i__25948__auto___32169 < len__25947__auto___32168)){
args31638.push((arguments[i__25948__auto___32169]));

var G__32170 = (i__25948__auto___32169 + (1));
i__25948__auto___32169 = G__32170;
continue;
} else {
}
break;
}

var G__31642 = args31638.length;
switch (G__31642) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31638.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq31639){
var G__31640 = cljs.core.first.call(null,seq31639);
var seq31639__$1 = cljs.core.next.call(null,seq31639);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__31640,seq31639__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args31643 = [];
var len__25947__auto___32172 = arguments.length;
var i__25948__auto___32173 = (0);
while(true){
if((i__25948__auto___32173 < len__25947__auto___32172)){
args31643.push((arguments[i__25948__auto___32173]));

var G__32174 = (i__25948__auto___32173 + (1));
i__25948__auto___32173 = G__32174;
continue;
} else {
}
break;
}

var G__31647 = args31643.length;
switch (G__31647) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31643.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq31644){
var G__31645 = cljs.core.first.call(null,seq31644);
var seq31644__$1 = cljs.core.next.call(null,seq31644);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__31645,seq31644__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args31648 = [];
var len__25947__auto___32176 = arguments.length;
var i__25948__auto___32177 = (0);
while(true){
if((i__25948__auto___32177 < len__25947__auto___32176)){
args31648.push((arguments[i__25948__auto___32177]));

var G__32178 = (i__25948__auto___32177 + (1));
i__25948__auto___32177 = G__32178;
continue;
} else {
}
break;
}

var G__31652 = args31648.length;
switch (G__31652) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31648.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq31649){
var G__31650 = cljs.core.first.call(null,seq31649);
var seq31649__$1 = cljs.core.next.call(null,seq31649);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__31650,seq31649__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args31653 = [];
var len__25947__auto___32180 = arguments.length;
var i__25948__auto___32181 = (0);
while(true){
if((i__25948__auto___32181 < len__25947__auto___32180)){
args31653.push((arguments[i__25948__auto___32181]));

var G__32182 = (i__25948__auto___32181 + (1));
i__25948__auto___32181 = G__32182;
continue;
} else {
}
break;
}

var G__31657 = args31653.length;
switch (G__31657) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31653.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq31654){
var G__31655 = cljs.core.first.call(null,seq31654);
var seq31654__$1 = cljs.core.next.call(null,seq31654);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__31655,seq31654__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args31658 = [];
var len__25947__auto___32184 = arguments.length;
var i__25948__auto___32185 = (0);
while(true){
if((i__25948__auto___32185 < len__25947__auto___32184)){
args31658.push((arguments[i__25948__auto___32185]));

var G__32186 = (i__25948__auto___32185 + (1));
i__25948__auto___32185 = G__32186;
continue;
} else {
}
break;
}

var G__31662 = args31658.length;
switch (G__31662) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31658.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq31659){
var G__31660 = cljs.core.first.call(null,seq31659);
var seq31659__$1 = cljs.core.next.call(null,seq31659);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__31660,seq31659__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args31663 = [];
var len__25947__auto___32188 = arguments.length;
var i__25948__auto___32189 = (0);
while(true){
if((i__25948__auto___32189 < len__25947__auto___32188)){
args31663.push((arguments[i__25948__auto___32189]));

var G__32190 = (i__25948__auto___32189 + (1));
i__25948__auto___32189 = G__32190;
continue;
} else {
}
break;
}

var G__31667 = args31663.length;
switch (G__31667) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31663.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq31664){
var G__31665 = cljs.core.first.call(null,seq31664);
var seq31664__$1 = cljs.core.next.call(null,seq31664);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__31665,seq31664__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args31668 = [];
var len__25947__auto___32192 = arguments.length;
var i__25948__auto___32193 = (0);
while(true){
if((i__25948__auto___32193 < len__25947__auto___32192)){
args31668.push((arguments[i__25948__auto___32193]));

var G__32194 = (i__25948__auto___32193 + (1));
i__25948__auto___32193 = G__32194;
continue;
} else {
}
break;
}

var G__31672 = args31668.length;
switch (G__31672) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31668.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq31669){
var G__31670 = cljs.core.first.call(null,seq31669);
var seq31669__$1 = cljs.core.next.call(null,seq31669);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__31670,seq31669__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args31673 = [];
var len__25947__auto___32196 = arguments.length;
var i__25948__auto___32197 = (0);
while(true){
if((i__25948__auto___32197 < len__25947__auto___32196)){
args31673.push((arguments[i__25948__auto___32197]));

var G__32198 = (i__25948__auto___32197 + (1));
i__25948__auto___32197 = G__32198;
continue;
} else {
}
break;
}

var G__31677 = args31673.length;
switch (G__31677) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31673.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq31674){
var G__31675 = cljs.core.first.call(null,seq31674);
var seq31674__$1 = cljs.core.next.call(null,seq31674);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__31675,seq31674__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args31678 = [];
var len__25947__auto___32200 = arguments.length;
var i__25948__auto___32201 = (0);
while(true){
if((i__25948__auto___32201 < len__25947__auto___32200)){
args31678.push((arguments[i__25948__auto___32201]));

var G__32202 = (i__25948__auto___32201 + (1));
i__25948__auto___32201 = G__32202;
continue;
} else {
}
break;
}

var G__31682 = args31678.length;
switch (G__31682) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31678.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq31679){
var G__31680 = cljs.core.first.call(null,seq31679);
var seq31679__$1 = cljs.core.next.call(null,seq31679);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__31680,seq31679__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args31683 = [];
var len__25947__auto___32204 = arguments.length;
var i__25948__auto___32205 = (0);
while(true){
if((i__25948__auto___32205 < len__25947__auto___32204)){
args31683.push((arguments[i__25948__auto___32205]));

var G__32206 = (i__25948__auto___32205 + (1));
i__25948__auto___32205 = G__32206;
continue;
} else {
}
break;
}

var G__31687 = args31683.length;
switch (G__31687) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31683.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq31684){
var G__31685 = cljs.core.first.call(null,seq31684);
var seq31684__$1 = cljs.core.next.call(null,seq31684);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__31685,seq31684__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args31688 = [];
var len__25947__auto___32208 = arguments.length;
var i__25948__auto___32209 = (0);
while(true){
if((i__25948__auto___32209 < len__25947__auto___32208)){
args31688.push((arguments[i__25948__auto___32209]));

var G__32210 = (i__25948__auto___32209 + (1));
i__25948__auto___32209 = G__32210;
continue;
} else {
}
break;
}

var G__31692 = args31688.length;
switch (G__31692) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31688.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq31689){
var G__31690 = cljs.core.first.call(null,seq31689);
var seq31689__$1 = cljs.core.next.call(null,seq31689);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__31690,seq31689__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.use = (function om_tools$dom$use(var_args){
var args31693 = [];
var len__25947__auto___32212 = arguments.length;
var i__25948__auto___32213 = (0);
while(true){
if((i__25948__auto___32213 < len__25947__auto___32212)){
args31693.push((arguments[i__25948__auto___32213]));

var G__32214 = (i__25948__auto___32213 + (1));
i__25948__auto___32213 = G__32214;
continue;
} else {
}
break;
}

var G__31697 = args31693.length;
switch (G__31697) {
case 0:
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31693.slice((1)),(0),null));
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.use,null,null);
});

om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,React.DOM.use,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.use.cljs$lang$applyTo = (function (seq31694){
var G__31695 = cljs.core.first.call(null,seq31694);
var seq31694__$1 = cljs.core.next.call(null,seq31694);
return om_tools.dom.use.cljs$core$IFn$_invoke$arity$variadic(G__31695,seq31694__$1);
});

om_tools.dom.use.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args31698 = [];
var len__25947__auto___32216 = arguments.length;
var i__25948__auto___32217 = (0);
while(true){
if((i__25948__auto___32217 < len__25947__auto___32216)){
args31698.push((arguments[i__25948__auto___32217]));

var G__32218 = (i__25948__auto___32217 + (1));
i__25948__auto___32217 = G__32218;
continue;
} else {
}
break;
}

var G__31702 = args31698.length;
switch (G__31702) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31698.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq31699){
var G__31700 = cljs.core.first.call(null,seq31699);
var seq31699__$1 = cljs.core.next.call(null,seq31699);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__31700,seq31699__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args31703 = [];
var len__25947__auto___32220 = arguments.length;
var i__25948__auto___32221 = (0);
while(true){
if((i__25948__auto___32221 < len__25947__auto___32220)){
args31703.push((arguments[i__25948__auto___32221]));

var G__32222 = (i__25948__auto___32221 + (1));
i__25948__auto___32221 = G__32222;
continue;
} else {
}
break;
}

var G__31707 = args31703.length;
switch (G__31707) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31703.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq31704){
var G__31705 = cljs.core.first.call(null,seq31704);
var seq31704__$1 = cljs.core.next.call(null,seq31704);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__31705,seq31704__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args31218 = [];
var len__25947__auto___32224 = arguments.length;
var i__25948__auto___32225 = (0);
while(true){
if((i__25948__auto___32225 < len__25947__auto___32224)){
args31218.push((arguments[i__25948__auto___32225]));

var G__32226 = (i__25948__auto___32225 + (1));
i__25948__auto___32225 = G__32226;
continue;
} else {
}
break;
}

var G__31222 = args31218.length;
switch (G__31222) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args31218.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25966__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__31026__auto__,children__31027__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__31026__auto__,children__31027__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq31219){
var G__31220 = cljs.core.first.call(null,seq31219);
var seq31219__$1 = cljs.core.next.call(null,seq31219);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__31220,seq31219__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1484804402106