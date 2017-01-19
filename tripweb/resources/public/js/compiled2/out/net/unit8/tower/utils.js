// Compiled by ClojureScript 1.9.89 {}
goog.provide('net.unit8.tower.utils');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Takes a nested map and squashes it into a sequence of paths to leaf nodes.
 *   Based on 'flatten-tree' by James Reaves on Google Groups.
 */
net.unit8.tower.utils.leaf_nodes = (function net$unit8$tower$utils$leaf_nodes(m){
if(cljs.core.map_QMARK_.call(null,m)){
var iter__25652__auto__ = (function net$unit8$tower$utils$leaf_nodes_$_iter__36263(s__36264){
return (new cljs.core.LazySeq(null,(function (){
var s__36264__$1 = s__36264;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36264__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__36272 = cljs.core.first.call(null,xs__5205__auto__);
var k = cljs.core.nth.call(null,vec__36272,(0),null);
var v = cljs.core.nth.call(null,vec__36272,(1),null);
var iterys__25648__auto__ = ((function (s__36264__$1,vec__36272,k,v,xs__5205__auto__,temp__4657__auto__){
return (function net$unit8$tower$utils$leaf_nodes_$_iter__36263_$_iter__36265(s__36266){
return (new cljs.core.LazySeq(null,((function (s__36264__$1,vec__36272,k,v,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__36266__$1 = s__36266;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__36266__$1);
if(temp__4657__auto____$1){
var s__36266__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36266__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__36266__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__36268 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__36267 = (0);
while(true){
if((i__36267 < size__25651__auto__)){
var w = cljs.core._nth.call(null,c__25650__auto__,i__36267);
cljs.core.chunk_append.call(null,b__36268,cljs.core.cons.call(null,k,w));

var G__36275 = (i__36267 + (1));
i__36267 = G__36275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36268),net$unit8$tower$utils$leaf_nodes_$_iter__36263_$_iter__36265.call(null,cljs.core.chunk_rest.call(null,s__36266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36268),null);
}
} else {
var w = cljs.core.first.call(null,s__36266__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,k,w),net$unit8$tower$utils$leaf_nodes_$_iter__36263_$_iter__36265.call(null,cljs.core.rest.call(null,s__36266__$2)));
}
} else {
return null;
}
break;
}
});})(s__36264__$1,vec__36272,k,v,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__36264__$1,vec__36272,k,v,xs__5205__auto__,temp__4657__auto__))
;
var fs__25649__auto__ = cljs.core.seq.call(null,iterys__25648__auto__.call(null,net$unit8$tower$utils$leaf_nodes.call(null,v)));
if(fs__25649__auto__){
return cljs.core.concat.call(null,fs__25649__auto__,net$unit8$tower$utils$leaf_nodes_$_iter__36263.call(null,cljs.core.rest.call(null,s__36264__$1)));
} else {
var G__36276 = cljs.core.rest.call(null,s__36264__$1);
s__36264__$1 = G__36276;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,m);
} else {
var x__25706__auto__ = (function (){var x__25706__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
}
});
net.unit8.tower.utils.html_breaks = (function net$unit8$tower$utils$html_breaks(s){
return clojure.string.replace.call(null,s,/(\r?\n|\r)/,"<br/>");
});
net.unit8.tower.utils.html_escape = (function net$unit8$tower$utils$html_escape(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
});
net.unit8.tower.utils.md_to_html_string = (function net$unit8$tower$utils$md_to_html_string(s){
return s;
});
net.unit8.tower.utils.markdown = (function net$unit8$tower$utils$markdown(var_args){
var args__25954__auto__ = [];
var len__25947__auto___36285 = arguments.length;
var i__25948__auto___36286 = (0);
while(true){
if((i__25948__auto___36286 < len__25947__auto___36285)){
args__25954__auto__.push((arguments[i__25948__auto___36286]));

var G__36287 = (i__25948__auto___36286 + (1));
i__25948__auto___36286 = G__36287;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return net.unit8.tower.utils.markdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

net.unit8.tower.utils.markdown.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__36279){
var vec__36280 = p__36279;
var map__36283 = cljs.core.nth.call(null,vec__36280,(0),null);
var map__36283__$1 = ((((!((map__36283 == null)))?((((map__36283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36283):map__36283);
var opts = map__36283__$1;
var inline_QMARK_ = cljs.core.get.call(null,map__36283__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var auto_links_QMARK_ = cljs.core.get.call(null,map__36283__$1,new cljs.core.Keyword(null,"auto-links?","auto-links?",-264376204));
var s__$1 = [cljs.core.str(s)].join('');
var s__$2 = ((cljs.core.not.call(null,auto_links_QMARK_))?s__$1:clojure.string.replace.call(null,s__$1,/https?:\/\/([\w\/\.-]+)/,"[$1]($0)"));
var s__$3 = ((cljs.core.not.call(null,inline_QMARK_))?s__$2:clojure.string.replace.call(null,s__$2,/(\r?\n|\r)+/," "));
var s__$4 = cljs.core.apply.call(null,net.unit8.tower.utils.md_to_html_string,s__$3,cljs.core.reduce.call(null,cljs.core.concat,opts));
var s__$5 = ((cljs.core.not.call(null,inline_QMARK_))?s__$4:clojure.string.replace.call(null,s__$4,/^<p>(.*?)<\/p>$/,"$1"));
return s__$5;
});

net.unit8.tower.utils.markdown.cljs$lang$maxFixedArity = (1);

net.unit8.tower.utils.markdown.cljs$lang$applyTo = (function (seq36277){
var G__36278 = cljs.core.first.call(null,seq36277);
var seq36277__$1 = cljs.core.next.call(null,seq36277);
return net.unit8.tower.utils.markdown.cljs$core$IFn$_invoke$arity$variadic(G__36278,seq36277__$1);
});

/**
 * Like `name` but includes namespace in string when present.
 */
net.unit8.tower.utils.fq_name = (function net$unit8$tower$utils$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4655__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
net.unit8.tower.utils.explode_keyword = (function net$unit8$tower$utils$explode_keyword(k){
return clojure.string.split.call(null,net.unit8.tower.utils.fq_name.call(null,k),/[\.\/]/);
});
net.unit8.tower.utils.merge_keywords = (function net$unit8$tower$utils$merge_keywords(var_args){
var args__25954__auto__ = [];
var len__25947__auto___36294 = arguments.length;
var i__25948__auto___36295 = (0);
while(true){
if((i__25948__auto___36295 < len__25947__auto___36294)){
args__25954__auto__.push((arguments[i__25948__auto___36295]));

var G__36296 = (i__25948__auto___36295 + (1));
i__25948__auto___36295 = G__36296;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return net.unit8.tower.utils.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

net.unit8.tower.utils.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__36290){
var vec__36291 = p__36290;
var as_ns_QMARK_ = cljs.core.nth.call(null,vec__36291,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,net.unit8.tower.utils.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(as_ns_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

net.unit8.tower.utils.merge_keywords.cljs$lang$maxFixedArity = (1);

net.unit8.tower.utils.merge_keywords.cljs$lang$applyTo = (function (seq36288){
var G__36289 = cljs.core.first.call(null,seq36288);
var seq36288__$1 = cljs.core.next.call(null,seq36288);
return net.unit8.tower.utils.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__36289,seq36288__$1);
});

/**
 * Like `merge-with` but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 * 
 *   (merge-deep-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
 *                  {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
 *   => {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
 */
net.unit8.tower.utils.merge_deep_with = (function net$unit8$tower$utils$merge_deep_with(var_args){
var args__25954__auto__ = [];
var len__25947__auto___36299 = arguments.length;
var i__25948__auto___36300 = (0);
while(true){
if((i__25948__auto___36300 < len__25947__auto___36299)){
args__25954__auto__.push((arguments[i__25948__auto___36300]));

var G__36301 = (i__25948__auto___36300 + (1));
i__25948__auto___36300 = G__36301;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return net.unit8.tower.utils.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

net.unit8.tower.utils.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.call(null,(function() { 
var net$unit8$tower$utils$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.call(null,cljs.core.merge_with,net$unit8$tower$utils$m,maps__$1);
} else {
return cljs.core.apply.call(null,f,maps__$1);
}
};
var net$unit8$tower$utils$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__36302__i = 0, G__36302__a = new Array(arguments.length -  0);
while (G__36302__i < G__36302__a.length) {G__36302__a[G__36302__i] = arguments[G__36302__i + 0]; ++G__36302__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__36302__a,0);
} 
return net$unit8$tower$utils$m__delegate.call(this,maps__$1);};
net$unit8$tower$utils$m.cljs$lang$maxFixedArity = 0;
net$unit8$tower$utils$m.cljs$lang$applyTo = (function (arglist__36303){
var maps__$1 = cljs.core.seq(arglist__36303);
return net$unit8$tower$utils$m__delegate(maps__$1);
});
net$unit8$tower$utils$m.cljs$core$IFn$_invoke$arity$variadic = net$unit8$tower$utils$m__delegate;
return net$unit8$tower$utils$m;
})()
,maps);
});

net.unit8.tower.utils.merge_deep_with.cljs$lang$maxFixedArity = (1);

net.unit8.tower.utils.merge_deep_with.cljs$lang$applyTo = (function (seq36297){
var G__36298 = cljs.core.first.call(null,seq36297);
var seq36297__$1 = cljs.core.next.call(null,seq36297);
return net.unit8.tower.utils.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic(G__36298,seq36297__$1);
});

net.unit8.tower.utils.merge_deep = cljs.core.partial.call(null,net.unit8.tower.utils.merge_deep_with,(function (x,y){
return y;
}));

//# sourceMappingURL=utils.js.map?rel=1484804407278