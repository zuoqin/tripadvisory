// Compiled by ClojureScript 1.9.89 {}
goog.provide('net.unit8.tower');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('net.unit8.tower.utils');
goog.require('clojure.browser.net');
/**
 * Returns locale keyword for given Locale object or locale keyword.
 */
net.unit8.tower.locale_key = cljs.core.memoize.call(null,(function (p1__36397_SHARP_){
return cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,p1__36397_SHARP_),"_","-"));
}));
/**
 * Like clojure.core/format but takes a locale.
 */
net.unit8.tower.fmt_str = (function net$unit8$tower$fmt_str(var_args){
var args__25954__auto__ = [];
var len__25947__auto___36401 = arguments.length;
var i__25948__auto___36402 = (0);
while(true){
if((i__25948__auto___36402 < len__25947__auto___36401)){
args__25954__auto__.push((arguments[i__25948__auto___36402]));

var G__36403 = (i__25948__auto___36402 + (1));
i__25948__auto___36402 = G__36403;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((2) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((2)),(0),null)):null);
return net.unit8.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25955__auto__);
});

net.unit8.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic = (function (loc,fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

net.unit8.tower.fmt_str.cljs$lang$maxFixedArity = (2);

net.unit8.tower.fmt_str.cljs$lang$applyTo = (function (seq36398){
var G__36399 = cljs.core.first.call(null,seq36398);
var seq36398__$1 = cljs.core.next.call(null,seq36398);
var G__36400 = cljs.core.first.call(null,seq36398__$1);
var seq36398__$2 = cljs.core.next.call(null,seq36398__$1);
return net.unit8.tower.fmt_str.cljs$core$IFn$_invoke$arity$variadic(G__36399,G__36400,seq36398__$2);
});

/**
 * Global fallback dev-mode?.
 */
net.unit8.tower.dev_mode_QMARK_ = cljs.core.atom.call(null,true);
/**
 * Global fallback dev-mode?.
 */
net.unit8.tower.fallback_locale = cljs.core.atom.call(null,new cljs.core.Keyword(null,"en","en",88457073));
/**
 * Merges scope keywords: (scope :a.b :c/d :e) => :a.b.c.d/e
 */
net.unit8.tower.scoped = cljs.core.memoize.call(null,(function() { 
var G__36404__delegate = function (ks){
return net.unit8.tower.utils.merge_keywords.call(null,ks);
};
var G__36404 = function (var_args){
var ks = null;
if (arguments.length > 0) {
var G__36405__i = 0, G__36405__a = new Array(arguments.length -  0);
while (G__36405__i < G__36405__a.length) {G__36405__a[G__36405__i] = arguments[G__36405__i + 0]; ++G__36405__i;}
  ks = new cljs.core.IndexedSeq(G__36405__a,0);
} 
return G__36404__delegate.call(this,ks);};
G__36404.cljs$lang$maxFixedArity = 0;
G__36404.cljs$lang$applyTo = (function (arglist__36406){
var ks = cljs.core.seq(arglist__36406);
return G__36404__delegate(ks);
});
G__36404.cljs$core$IFn$_invoke$arity$variadic = G__36404__delegate;
return G__36404;
})()
);
net.unit8.tower._STAR_tscope_STAR_ = null;
net.unit8.tower.dict_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * [:locale :ns1 ... :nsN unscoped-key<decorator> translation] =>
 *   {:ns1.<...>.nsN/unscoped-key {:locale (f translation decorator)}}
 */
net.unit8.tower.compile_dict_path = (function net$unit8$tower$compile_dict_path(raw_dict,path){
if((cljs.core.count.call(null,path) >= (3))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Malformed dictionary path: "),cljs.core.str(path)].join('')),cljs.core.str("\n"),cljs.core.str("(>= (count path) 3)")].join('')));
}

var vec__36414 = cljs.core.vec.call(null,path);
var loc = cljs.core.nth.call(null,vec__36414,(0),null);
var path__$1 = vec__36414;
var translation = cljs.core.peek.call(null,path__$1);
var scope_ks = cljs.core.subvec.call(null,path__$1,(1),(cljs.core.count.call(null,path__$1) - (2)));
var vec__36417 = cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.re_find.call(null,/([^!\*_]+)([!\*_].*)*/,cljs.core.name.call(null,cljs.core.peek.call(null,cljs.core.pop.call(null,path__$1)))));
var _ = cljs.core.nth.call(null,vec__36417,(0),null);
var unscoped_k = cljs.core.nth.call(null,vec__36417,(1),null);
var decorator = cljs.core.nth.call(null,vec__36417,(2),null);
var translation__$1 = ((!((translation instanceof cljs.core.Keyword)))?translation:(function (){var target = cljs.core.get_in.call(null,raw_dict,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc], null),cljs.core.mapv.call(null,cljs.core.keyword,net.unit8.tower.utils.explode_keyword.call(null,translation))));
if((target instanceof cljs.core.Keyword)){
return null;
} else {
return target;
}
})());
var temp__4657__auto__ = (cljs.core.truth_(translation__$1)?(function (){var G__36420 = (((decorator instanceof cljs.core.Keyword))?decorator.fqn:null);
switch (G__36420) {
case "_comment":
return null;

break;
case "_note":
return null;

break;
case "_html":
return translation__$1;

break;
case "!":
return translation__$1;

break;
case "_md":
return net.unit8.tower.utils.markdown.call(null,net.unit8.tower.utils.html_escape.call(null,translation__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inline?","inline?",-1674483791),false], null));

break;
case "*":
return net.unit8.tower.utils.markdown.call(null,net.unit8.tower.utils.html_escape.call(null,translation__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inline?","inline?",-1674483791),false], null));

break;
default:
return net.unit8.tower.utils.markdown.call(null,net.unit8.tower.utils.html_escape.call(null,translation__$1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inline?","inline?",-1674483791),true], null));

}
})():null);
if(cljs.core.truth_(temp__4657__auto__)){
var translation__$2 = temp__4657__auto__;
return cljs.core.PersistentArrayMap.fromArray([cljs.core.apply.call(null,net.unit8.tower.scoped,cljs.core.conj.call(null,scope_ks,unscoped_k)),cljs.core.PersistentArrayMap.fromArray([loc,translation__$2], true, false)], true, false);
} else {
return null;
}
});
/**
 * Merges each locale's translations over its parent locale translations.
 */
net.unit8.tower.inherit_parent_trs = (function net$unit8$tower$inherit_parent_trs(dict){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = (function net$unit8$tower$inherit_parent_trs_$_iter__36427(s__36428){
return (new cljs.core.LazySeq(null,(function (){
var s__36428__$1 = s__36428;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36428__$1);
if(temp__4657__auto__){
var s__36428__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36428__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__36428__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__36430 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__36429 = (0);
while(true){
if((i__36429 < size__25651__auto__)){
var loc = cljs.core._nth.call(null,c__25650__auto__,i__36429);
cljs.core.chunk_append.call(null,b__36430,(function (){var loc_parts = clojure.string.split.call(null,cljs.core.name.call(null,loc),/[-_]/);
var loc_tree = cljs.core.mapv.call(null,((function (i__36429,loc_parts,loc,c__25650__auto__,size__25651__auto__,b__36430,s__36428__$2,temp__4657__auto__){
return (function (p1__36422_SHARP_){
return cljs.core.keyword.call(null,clojure.string.join.call(null,"-",p1__36422_SHARP_));
});})(i__36429,loc_parts,loc,c__25650__auto__,size__25651__auto__,b__36430,s__36428__$2,temp__4657__auto__))
,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,cljs.core.butlast,loc_parts)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,cljs.core.apply.call(null,net.unit8.tower.utils.merge_deep,cljs.core.map.call(null,dict,cljs.core.rseq.call(null,loc_tree)))], null);
})());

var G__36431 = (i__36429 + (1));
i__36429 = G__36431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36430),net$unit8$tower$inherit_parent_trs_$_iter__36427.call(null,cljs.core.chunk_rest.call(null,s__36428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36430),null);
}
} else {
var loc = cljs.core.first.call(null,s__36428__$2);
return cljs.core.cons.call(null,(function (){var loc_parts = clojure.string.split.call(null,cljs.core.name.call(null,loc),/[-_]/);
var loc_tree = cljs.core.mapv.call(null,((function (loc_parts,loc,s__36428__$2,temp__4657__auto__){
return (function (p1__36422_SHARP_){
return cljs.core.keyword.call(null,clojure.string.join.call(null,"-",p1__36422_SHARP_));
});})(loc_parts,loc,s__36428__$2,temp__4657__auto__))
,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,cljs.core.butlast,loc_parts)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,cljs.core.apply.call(null,net.unit8.tower.utils.merge_deep,cljs.core.map.call(null,dict,cljs.core.rseq.call(null,loc_tree)))], null);
})(),net$unit8$tower$inherit_parent_trs_$_iter__36427.call(null,cljs.core.rest.call(null,s__36428__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,cljs.core.keys.call(null,dict));
})());
});
net.unit8.tower.compile_dict_inner = (function net$unit8$tower$compile_dict_inner(key,raw_dict){
var dd = cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,cljs.core.map.call(null,cljs.core.partial.call(null,net.unit8.tower.compile_dict_path,raw_dict),net.unit8.tower.utils.leaf_nodes.call(null,net.unit8.tower.inherit_parent_trs.call(null,raw_dict))));
cljs.core.swap_BANG_.call(null,net.unit8.tower.dict_cache,cljs.core.assoc,key,dd);

return dd;
});
net.unit8.tower.compile_dict = (function net$unit8$tower$compile_dict(raw_dict,dev_mode_QMARK_){
var temp__4655__auto__ = (function (){var and__24860__auto__ = cljs.core.not.call(null,dev_mode_QMARK_);
if(and__24860__auto__){
return cljs.core.deref.call(null,net.unit8.tower.dict_cache).call(null,raw_dict);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var dd = temp__4655__auto__;
return dd;
} else {
if(!(typeof raw_dict === 'string')){
return net.unit8.tower.compile_dict_inner.call(null,raw_dict,raw_dict);
} else {
var req = (new XMLHttpRequest());
req.open("GET",raw_dict,false);

req.send(null);

return net.unit8.tower.compile_dict_inner.call(null,raw_dict,cljs.core.js__GT_clj.call(null,JSON.parse(req.responseText),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}
}
});
net.unit8.tower.translate = (function net$unit8$tower$translate(var_args){
var args__25954__auto__ = [];
var len__25947__auto___36445 = arguments.length;
var i__25948__auto___36446 = (0);
while(true){
if((i__25948__auto___36446 < len__25947__auto___36445)){
args__25954__auto__.push((arguments[i__25948__auto___36446]));

var G__36447 = (i__25948__auto___36446 + (1));
i__25948__auto___36446 = G__36447;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((4) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((4)),(0),null)):null);
return net.unit8.tower.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25955__auto__);
});

net.unit8.tower.translate.cljs$core$IFn$_invoke$arity$variadic = (function (loc,config,scope,k_or_ks,fmt_args){
var map__36443 = config;
var map__36443__$1 = ((((!((map__36443 == null)))?((((map__36443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36443):map__36443);
var dev_mode_QMARK_ = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091),cljs.core.deref.call(null,net.unit8.tower.dev_mode_QMARK_));
var dictionary = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var fallback_locale = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"fallback-locale","fallback-locale",-1300697761),(function (){var or__24872__auto__ = new cljs.core.Keyword(null,"default-locale","default-locale",-677515761).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.deref.call(null,net.unit8.tower.fallback_locale);
}
})());
var log_missing_translation_fn = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"log-missing-translation-fn","log-missing-translation-fn",-1222017068));
var root_scope = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"root-scope","root-scope",322629014));
var fmt_fn = cljs.core.get.call(null,map__36443__$1,new cljs.core.Keyword(null,"fmt-fn","fmt-fn",1822593570),net.unit8.tower.fmt_str);
var scope__$1 = null;
var dict = net.unit8.tower.compile_dict.call(null,dictionary,dev_mode_QMARK_);
var ks = ((cljs.core.vector_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null));
var get_tr = ((function (map__36443,map__36443__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks){
return (function (p1__36432_SHARP_,p2__36433_SHARP_,p3__36434_SHARP_){
return cljs.core.get_in.call(null,p1__36432_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [net.unit8.tower.scoped.call(null,scope__$1,p2__36433_SHARP_),net.unit8.tower.locale_key.call(null,p3__36434_SHARP_)], null));
});})(map__36443,map__36443__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks))
;
var tr = (function (){var or__24872__auto__ = cljs.core.some.call(null,((function (map__36443,map__36443__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr){
return (function (p1__36435_SHARP_){
return get_tr.call(null,dict,p1__36435_SHARP_,loc);
});})(map__36443,map__36443__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr))
,cljs.core.take_while.call(null,cljs.core.keyword_QMARK_,ks));
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var last_k = cljs.core.peek.call(null,ks);
if(!((last_k instanceof cljs.core.Keyword))){
return last_k;
} else {
var temp__4657__auto___36448 = log_missing_translation_fn;
if(cljs.core.truth_(temp__4657__auto___36448)){
var log_f_36449 = temp__4657__auto___36448;
log_f_36449.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dev-mode?","dev-mode?",-392099091),dev_mode_QMARK_,new cljs.core.Keyword(null,"locale","locale",-2115712697),loc,new cljs.core.Keyword(null,"scope","scope",-439358418),scope__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks], null));
} else {
}

var or__24872__auto____$1 = cljs.core.some.call(null,((function (last_k,or__24872__auto__,map__36443,map__36443__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr){
return (function (p1__36436_SHARP_){
return get_tr.call(null,dict,p1__36436_SHARP_,fallback_locale);
});})(last_k,or__24872__auto__,map__36443,map__36443__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr))
,ks);
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
var temp__4657__auto__ = (function (){var or__24872__auto____$2 = get_tr.call(null,dict,new cljs.core.Keyword(null,"missing","missing",362507769),loc);
if(cljs.core.truth_(or__24872__auto____$2)){
return or__24872__auto____$2;
} else {
return get_tr.call(null,dict,new cljs.core.Keyword(null,"missing","missing",362507769),fallback_locale);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pattern = temp__4657__auto__;
var str_STAR_ = ((function (pattern,temp__4657__auto__,or__24872__auto____$1,last_k,or__24872__auto__,map__36443,map__36443__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr){
return (function (p1__36437_SHARP_){
if((p1__36437_SHARP_ == null)){
return "nil";
} else {
return [cljs.core.str(p1__36437_SHARP_)].join('');
}
});})(pattern,temp__4657__auto__,or__24872__auto____$1,last_k,or__24872__auto__,map__36443,map__36443__$1,dev_mode_QMARK_,dictionary,fallback_locale,log_missing_translation_fn,root_scope,fmt_fn,scope__$1,dict,ks,get_tr))
;
return net.unit8.tower.fmt_str.call(null,loc,pattern,str_STAR_.call(null,loc),str_STAR_.call(null,scope__$1),str_STAR_.call(null,ks));
} else {
return null;
}
}
}
}
})();
if(cljs.core.not.call(null,fmt_args)){
return tr;
} else {
return cljs.core.apply.call(null,fmt_fn,loc,tr,fmt_args);
}
});

net.unit8.tower.translate.cljs$lang$maxFixedArity = (4);

net.unit8.tower.translate.cljs$lang$applyTo = (function (seq36438){
var G__36439 = cljs.core.first.call(null,seq36438);
var seq36438__$1 = cljs.core.next.call(null,seq36438);
var G__36440 = cljs.core.first.call(null,seq36438__$1);
var seq36438__$2 = cljs.core.next.call(null,seq36438__$1);
var G__36441 = cljs.core.first.call(null,seq36438__$2);
var seq36438__$3 = cljs.core.next.call(null,seq36438__$2);
var G__36442 = cljs.core.first.call(null,seq36438__$3);
var seq36438__$4 = cljs.core.next.call(null,seq36438__$3);
return net.unit8.tower.translate.cljs$core$IFn$_invoke$arity$variadic(G__36439,G__36440,G__36441,G__36442,seq36438__$4);
});

/**
 * Like `translate` but uses a thread-local translation scope.
 */
net.unit8.tower.t = (function net$unit8$tower$t(var_args){
var args__25954__auto__ = [];
var len__25947__auto___36454 = arguments.length;
var i__25948__auto___36455 = (0);
while(true){
if((i__25948__auto___36455 < len__25947__auto___36454)){
args__25954__auto__.push((arguments[i__25948__auto___36455]));

var G__36456 = (i__25948__auto___36455 + (1));
i__25948__auto___36455 = G__36456;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return net.unit8.tower.t.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

net.unit8.tower.t.cljs$core$IFn$_invoke$arity$variadic = (function (loc,config,k_or_ks,fmt_str_args){
return cljs.core.apply.call(null,net.unit8.tower.translate,loc,config,new cljs.core.Keyword("net.unit8.tower","scope-var","net.unit8.tower/scope-var",258916991),k_or_ks,fmt_str_args);
});

net.unit8.tower.t.cljs$lang$maxFixedArity = (3);

net.unit8.tower.t.cljs$lang$applyTo = (function (seq36450){
var G__36451 = cljs.core.first.call(null,seq36450);
var seq36450__$1 = cljs.core.next.call(null,seq36450);
var G__36452 = cljs.core.first.call(null,seq36450__$1);
var seq36450__$2 = cljs.core.next.call(null,seq36450__$1);
var G__36453 = cljs.core.first.call(null,seq36450__$2);
var seq36450__$3 = cljs.core.next.call(null,seq36450__$2);
return net.unit8.tower.t.cljs$core$IFn$_invoke$arity$variadic(G__36451,G__36452,G__36453,seq36450__$3);
});


//# sourceMappingURL=tower.js.map?rel=1484804408138