// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24872__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24872__auto__){
return or__24872__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24872__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41070_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41070_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41075 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41076 = null;
var count__41077 = (0);
var i__41078 = (0);
while(true){
if((i__41078 < count__41077)){
var n = cljs.core._nth.call(null,chunk__41076,i__41078);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41079 = seq__41075;
var G__41080 = chunk__41076;
var G__41081 = count__41077;
var G__41082 = (i__41078 + (1));
seq__41075 = G__41079;
chunk__41076 = G__41080;
count__41077 = G__41081;
i__41078 = G__41082;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41075);
if(temp__4657__auto__){
var seq__41075__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41075__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__41075__$1);
var G__41083 = cljs.core.chunk_rest.call(null,seq__41075__$1);
var G__41084 = c__25683__auto__;
var G__41085 = cljs.core.count.call(null,c__25683__auto__);
var G__41086 = (0);
seq__41075 = G__41083;
chunk__41076 = G__41084;
count__41077 = G__41085;
i__41078 = G__41086;
continue;
} else {
var n = cljs.core.first.call(null,seq__41075__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41087 = cljs.core.next.call(null,seq__41075__$1);
var G__41088 = null;
var G__41089 = (0);
var G__41090 = (0);
seq__41075 = G__41087;
chunk__41076 = G__41088;
count__41077 = G__41089;
i__41078 = G__41090;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41141_41152 = cljs.core.seq.call(null,deps);
var chunk__41142_41153 = null;
var count__41143_41154 = (0);
var i__41144_41155 = (0);
while(true){
if((i__41144_41155 < count__41143_41154)){
var dep_41156 = cljs.core._nth.call(null,chunk__41142_41153,i__41144_41155);
topo_sort_helper_STAR_.call(null,dep_41156,(depth + (1)),state);

var G__41157 = seq__41141_41152;
var G__41158 = chunk__41142_41153;
var G__41159 = count__41143_41154;
var G__41160 = (i__41144_41155 + (1));
seq__41141_41152 = G__41157;
chunk__41142_41153 = G__41158;
count__41143_41154 = G__41159;
i__41144_41155 = G__41160;
continue;
} else {
var temp__4657__auto___41161 = cljs.core.seq.call(null,seq__41141_41152);
if(temp__4657__auto___41161){
var seq__41141_41162__$1 = temp__4657__auto___41161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41141_41162__$1)){
var c__25683__auto___41163 = cljs.core.chunk_first.call(null,seq__41141_41162__$1);
var G__41164 = cljs.core.chunk_rest.call(null,seq__41141_41162__$1);
var G__41165 = c__25683__auto___41163;
var G__41166 = cljs.core.count.call(null,c__25683__auto___41163);
var G__41167 = (0);
seq__41141_41152 = G__41164;
chunk__41142_41153 = G__41165;
count__41143_41154 = G__41166;
i__41144_41155 = G__41167;
continue;
} else {
var dep_41168 = cljs.core.first.call(null,seq__41141_41162__$1);
topo_sort_helper_STAR_.call(null,dep_41168,(depth + (1)),state);

var G__41169 = cljs.core.next.call(null,seq__41141_41162__$1);
var G__41170 = null;
var G__41171 = (0);
var G__41172 = (0);
seq__41141_41152 = G__41169;
chunk__41142_41153 = G__41170;
count__41143_41154 = G__41171;
i__41144_41155 = G__41172;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41145){
var vec__41149 = p__41145;
var seq__41150 = cljs.core.seq.call(null,vec__41149);
var first__41151 = cljs.core.first.call(null,seq__41150);
var seq__41150__$1 = cljs.core.next.call(null,seq__41150);
var x = first__41151;
var xs = seq__41150__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41149,seq__41150,first__41151,seq__41150__$1,x,xs,get_deps__$1){
return (function (p1__41091_SHARP_){
return clojure.set.difference.call(null,p1__41091_SHARP_,x);
});})(vec__41149,seq__41150,first__41151,seq__41150__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41185 = cljs.core.seq.call(null,provides);
var chunk__41186 = null;
var count__41187 = (0);
var i__41188 = (0);
while(true){
if((i__41188 < count__41187)){
var prov = cljs.core._nth.call(null,chunk__41186,i__41188);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41189_41197 = cljs.core.seq.call(null,requires);
var chunk__41190_41198 = null;
var count__41191_41199 = (0);
var i__41192_41200 = (0);
while(true){
if((i__41192_41200 < count__41191_41199)){
var req_41201 = cljs.core._nth.call(null,chunk__41190_41198,i__41192_41200);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41201,prov);

var G__41202 = seq__41189_41197;
var G__41203 = chunk__41190_41198;
var G__41204 = count__41191_41199;
var G__41205 = (i__41192_41200 + (1));
seq__41189_41197 = G__41202;
chunk__41190_41198 = G__41203;
count__41191_41199 = G__41204;
i__41192_41200 = G__41205;
continue;
} else {
var temp__4657__auto___41206 = cljs.core.seq.call(null,seq__41189_41197);
if(temp__4657__auto___41206){
var seq__41189_41207__$1 = temp__4657__auto___41206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41189_41207__$1)){
var c__25683__auto___41208 = cljs.core.chunk_first.call(null,seq__41189_41207__$1);
var G__41209 = cljs.core.chunk_rest.call(null,seq__41189_41207__$1);
var G__41210 = c__25683__auto___41208;
var G__41211 = cljs.core.count.call(null,c__25683__auto___41208);
var G__41212 = (0);
seq__41189_41197 = G__41209;
chunk__41190_41198 = G__41210;
count__41191_41199 = G__41211;
i__41192_41200 = G__41212;
continue;
} else {
var req_41213 = cljs.core.first.call(null,seq__41189_41207__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41213,prov);

var G__41214 = cljs.core.next.call(null,seq__41189_41207__$1);
var G__41215 = null;
var G__41216 = (0);
var G__41217 = (0);
seq__41189_41197 = G__41214;
chunk__41190_41198 = G__41215;
count__41191_41199 = G__41216;
i__41192_41200 = G__41217;
continue;
}
} else {
}
}
break;
}

var G__41218 = seq__41185;
var G__41219 = chunk__41186;
var G__41220 = count__41187;
var G__41221 = (i__41188 + (1));
seq__41185 = G__41218;
chunk__41186 = G__41219;
count__41187 = G__41220;
i__41188 = G__41221;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41185);
if(temp__4657__auto__){
var seq__41185__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41185__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__41185__$1);
var G__41222 = cljs.core.chunk_rest.call(null,seq__41185__$1);
var G__41223 = c__25683__auto__;
var G__41224 = cljs.core.count.call(null,c__25683__auto__);
var G__41225 = (0);
seq__41185 = G__41222;
chunk__41186 = G__41223;
count__41187 = G__41224;
i__41188 = G__41225;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41185__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41193_41226 = cljs.core.seq.call(null,requires);
var chunk__41194_41227 = null;
var count__41195_41228 = (0);
var i__41196_41229 = (0);
while(true){
if((i__41196_41229 < count__41195_41228)){
var req_41230 = cljs.core._nth.call(null,chunk__41194_41227,i__41196_41229);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41230,prov);

var G__41231 = seq__41193_41226;
var G__41232 = chunk__41194_41227;
var G__41233 = count__41195_41228;
var G__41234 = (i__41196_41229 + (1));
seq__41193_41226 = G__41231;
chunk__41194_41227 = G__41232;
count__41195_41228 = G__41233;
i__41196_41229 = G__41234;
continue;
} else {
var temp__4657__auto___41235__$1 = cljs.core.seq.call(null,seq__41193_41226);
if(temp__4657__auto___41235__$1){
var seq__41193_41236__$1 = temp__4657__auto___41235__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41193_41236__$1)){
var c__25683__auto___41237 = cljs.core.chunk_first.call(null,seq__41193_41236__$1);
var G__41238 = cljs.core.chunk_rest.call(null,seq__41193_41236__$1);
var G__41239 = c__25683__auto___41237;
var G__41240 = cljs.core.count.call(null,c__25683__auto___41237);
var G__41241 = (0);
seq__41193_41226 = G__41238;
chunk__41194_41227 = G__41239;
count__41195_41228 = G__41240;
i__41196_41229 = G__41241;
continue;
} else {
var req_41242 = cljs.core.first.call(null,seq__41193_41236__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41242,prov);

var G__41243 = cljs.core.next.call(null,seq__41193_41236__$1);
var G__41244 = null;
var G__41245 = (0);
var G__41246 = (0);
seq__41193_41226 = G__41243;
chunk__41194_41227 = G__41244;
count__41195_41228 = G__41245;
i__41196_41229 = G__41246;
continue;
}
} else {
}
}
break;
}

var G__41247 = cljs.core.next.call(null,seq__41185__$1);
var G__41248 = null;
var G__41249 = (0);
var G__41250 = (0);
seq__41185 = G__41247;
chunk__41186 = G__41248;
count__41187 = G__41249;
i__41188 = G__41250;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41255_41259 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41256_41260 = null;
var count__41257_41261 = (0);
var i__41258_41262 = (0);
while(true){
if((i__41258_41262 < count__41257_41261)){
var ns_41263 = cljs.core._nth.call(null,chunk__41256_41260,i__41258_41262);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41263);

var G__41264 = seq__41255_41259;
var G__41265 = chunk__41256_41260;
var G__41266 = count__41257_41261;
var G__41267 = (i__41258_41262 + (1));
seq__41255_41259 = G__41264;
chunk__41256_41260 = G__41265;
count__41257_41261 = G__41266;
i__41258_41262 = G__41267;
continue;
} else {
var temp__4657__auto___41268 = cljs.core.seq.call(null,seq__41255_41259);
if(temp__4657__auto___41268){
var seq__41255_41269__$1 = temp__4657__auto___41268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41255_41269__$1)){
var c__25683__auto___41270 = cljs.core.chunk_first.call(null,seq__41255_41269__$1);
var G__41271 = cljs.core.chunk_rest.call(null,seq__41255_41269__$1);
var G__41272 = c__25683__auto___41270;
var G__41273 = cljs.core.count.call(null,c__25683__auto___41270);
var G__41274 = (0);
seq__41255_41259 = G__41271;
chunk__41256_41260 = G__41272;
count__41257_41261 = G__41273;
i__41258_41262 = G__41274;
continue;
} else {
var ns_41275 = cljs.core.first.call(null,seq__41255_41269__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41275);

var G__41276 = cljs.core.next.call(null,seq__41255_41269__$1);
var G__41277 = null;
var G__41278 = (0);
var G__41279 = (0);
seq__41255_41259 = G__41276;
chunk__41256_41260 = G__41277;
count__41257_41261 = G__41278;
i__41258_41262 = G__41279;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24872__auto__ = goog.require__;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41280__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41281__i = 0, G__41281__a = new Array(arguments.length -  0);
while (G__41281__i < G__41281__a.length) {G__41281__a[G__41281__i] = arguments[G__41281__i + 0]; ++G__41281__i;}
  args = new cljs.core.IndexedSeq(G__41281__a,0);
} 
return G__41280__delegate.call(this,args);};
G__41280.cljs$lang$maxFixedArity = 0;
G__41280.cljs$lang$applyTo = (function (arglist__41282){
var args = cljs.core.seq(arglist__41282);
return G__41280__delegate(args);
});
G__41280.cljs$core$IFn$_invoke$arity$variadic = G__41280__delegate;
return G__41280;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41284 = cljs.core._EQ_;
var expr__41285 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41284.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41285))){
var path_parts = ((function (pred__41284,expr__41285){
return (function (p1__41283_SHARP_){
return clojure.string.split.call(null,p1__41283_SHARP_,/[\/\\]/);
});})(pred__41284,expr__41285))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__41284,expr__41285){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41287){if((e41287 instanceof Error)){
var e = e41287;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41287;

}
}})());
});
;})(path_parts,sep,root,pred__41284,expr__41285))
} else {
if(cljs.core.truth_(pred__41284.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41285))){
return ((function (pred__41284,expr__41285){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__41284,expr__41285){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__41284,expr__41285))
);

return deferred.addErrback(((function (deferred,pred__41284,expr__41285){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__41284,expr__41285))
);
});
;})(pred__41284,expr__41285))
} else {
return ((function (pred__41284,expr__41285){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41284,expr__41285))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41288,callback){
var map__41291 = p__41288;
var map__41291__$1 = ((((!((map__41291 == null)))?((((map__41291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41291):map__41291);
var file_msg = map__41291__$1;
var request_url = cljs.core.get.call(null,map__41291__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41291,map__41291__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41291,map__41291__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__37699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto__){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto__){
return (function (state_41315){
var state_val_41316 = (state_41315[(1)]);
if((state_val_41316 === (7))){
var inst_41311 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
var statearr_41317_41337 = state_41315__$1;
(statearr_41317_41337[(2)] = inst_41311);

(statearr_41317_41337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (1))){
var state_41315__$1 = state_41315;
var statearr_41318_41338 = state_41315__$1;
(statearr_41318_41338[(2)] = null);

(statearr_41318_41338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (4))){
var inst_41295 = (state_41315[(7)]);
var inst_41295__$1 = (state_41315[(2)]);
var state_41315__$1 = (function (){var statearr_41319 = state_41315;
(statearr_41319[(7)] = inst_41295__$1);

return statearr_41319;
})();
if(cljs.core.truth_(inst_41295__$1)){
var statearr_41320_41339 = state_41315__$1;
(statearr_41320_41339[(1)] = (5));

} else {
var statearr_41321_41340 = state_41315__$1;
(statearr_41321_41340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (6))){
var state_41315__$1 = state_41315;
var statearr_41322_41341 = state_41315__$1;
(statearr_41322_41341[(2)] = null);

(statearr_41322_41341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (3))){
var inst_41313 = (state_41315[(2)]);
var state_41315__$1 = state_41315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41315__$1,inst_41313);
} else {
if((state_val_41316 === (2))){
var state_41315__$1 = state_41315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41315__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41316 === (11))){
var inst_41307 = (state_41315[(2)]);
var state_41315__$1 = (function (){var statearr_41323 = state_41315;
(statearr_41323[(8)] = inst_41307);

return statearr_41323;
})();
var statearr_41324_41342 = state_41315__$1;
(statearr_41324_41342[(2)] = null);

(statearr_41324_41342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (9))){
var inst_41299 = (state_41315[(9)]);
var inst_41301 = (state_41315[(10)]);
var inst_41303 = inst_41301.call(null,inst_41299);
var state_41315__$1 = state_41315;
var statearr_41325_41343 = state_41315__$1;
(statearr_41325_41343[(2)] = inst_41303);

(statearr_41325_41343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (5))){
var inst_41295 = (state_41315[(7)]);
var inst_41297 = figwheel.client.file_reloading.blocking_load.call(null,inst_41295);
var state_41315__$1 = state_41315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41315__$1,(8),inst_41297);
} else {
if((state_val_41316 === (10))){
var inst_41299 = (state_41315[(9)]);
var inst_41305 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41299);
var state_41315__$1 = state_41315;
var statearr_41326_41344 = state_41315__$1;
(statearr_41326_41344[(2)] = inst_41305);

(statearr_41326_41344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41316 === (8))){
var inst_41295 = (state_41315[(7)]);
var inst_41301 = (state_41315[(10)]);
var inst_41299 = (state_41315[(2)]);
var inst_41300 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41301__$1 = cljs.core.get.call(null,inst_41300,inst_41295);
var state_41315__$1 = (function (){var statearr_41327 = state_41315;
(statearr_41327[(9)] = inst_41299);

(statearr_41327[(10)] = inst_41301__$1);

return statearr_41327;
})();
if(cljs.core.truth_(inst_41301__$1)){
var statearr_41328_41345 = state_41315__$1;
(statearr_41328_41345[(1)] = (9));

} else {
var statearr_41329_41346 = state_41315__$1;
(statearr_41329_41346[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37699__auto__))
;
return ((function (switch__37587__auto__,c__37699__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37588__auto__ = null;
var figwheel$client$file_reloading$state_machine__37588__auto____0 = (function (){
var statearr_41333 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41333[(0)] = figwheel$client$file_reloading$state_machine__37588__auto__);

(statearr_41333[(1)] = (1));

return statearr_41333;
});
var figwheel$client$file_reloading$state_machine__37588__auto____1 = (function (state_41315){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_41315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e41334){if((e41334 instanceof Object)){
var ex__37591__auto__ = e41334;
var statearr_41335_41347 = state_41315;
(statearr_41335_41347[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41348 = state_41315;
state_41315 = G__41348;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37588__auto__ = function(state_41315){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37588__auto____1.call(this,state_41315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37588__auto____0;
figwheel$client$file_reloading$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37588__auto____1;
return figwheel$client$file_reloading$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto__))
})();
var state__37701__auto__ = (function (){var statearr_41336 = f__37700__auto__.call(null);
(statearr_41336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto__);

return statearr_41336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto__))
);

return c__37699__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41349,callback){
var map__41352 = p__41349;
var map__41352__$1 = ((((!((map__41352 == null)))?((((map__41352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41352):map__41352);
var file_msg = map__41352__$1;
var namespace = cljs.core.get.call(null,map__41352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41352,map__41352__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41352,map__41352__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41354){
var map__41357 = p__41354;
var map__41357__$1 = ((((!((map__41357 == null)))?((((map__41357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41357):map__41357);
var file_msg = map__41357__$1;
var namespace = cljs.core.get.call(null,map__41357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24860__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24860__auto__){
var or__24872__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24860__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41359,callback){
var map__41362 = p__41359;
var map__41362__$1 = ((((!((map__41362 == null)))?((((map__41362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41362):map__41362);
var file_msg = map__41362__$1;
var request_url = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__37699__auto___41466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___41466,out){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___41466,out){
return (function (state_41448){
var state_val_41449 = (state_41448[(1)]);
if((state_val_41449 === (1))){
var inst_41422 = cljs.core.seq.call(null,files);
var inst_41423 = cljs.core.first.call(null,inst_41422);
var inst_41424 = cljs.core.next.call(null,inst_41422);
var inst_41425 = files;
var state_41448__$1 = (function (){var statearr_41450 = state_41448;
(statearr_41450[(7)] = inst_41424);

(statearr_41450[(8)] = inst_41423);

(statearr_41450[(9)] = inst_41425);

return statearr_41450;
})();
var statearr_41451_41467 = state_41448__$1;
(statearr_41451_41467[(2)] = null);

(statearr_41451_41467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (2))){
var inst_41431 = (state_41448[(10)]);
var inst_41425 = (state_41448[(9)]);
var inst_41430 = cljs.core.seq.call(null,inst_41425);
var inst_41431__$1 = cljs.core.first.call(null,inst_41430);
var inst_41432 = cljs.core.next.call(null,inst_41430);
var inst_41433 = (inst_41431__$1 == null);
var inst_41434 = cljs.core.not.call(null,inst_41433);
var state_41448__$1 = (function (){var statearr_41452 = state_41448;
(statearr_41452[(11)] = inst_41432);

(statearr_41452[(10)] = inst_41431__$1);

return statearr_41452;
})();
if(inst_41434){
var statearr_41453_41468 = state_41448__$1;
(statearr_41453_41468[(1)] = (4));

} else {
var statearr_41454_41469 = state_41448__$1;
(statearr_41454_41469[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (3))){
var inst_41446 = (state_41448[(2)]);
var state_41448__$1 = state_41448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41448__$1,inst_41446);
} else {
if((state_val_41449 === (4))){
var inst_41431 = (state_41448[(10)]);
var inst_41436 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41431);
var state_41448__$1 = state_41448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41448__$1,(7),inst_41436);
} else {
if((state_val_41449 === (5))){
var inst_41442 = cljs.core.async.close_BANG_.call(null,out);
var state_41448__$1 = state_41448;
var statearr_41455_41470 = state_41448__$1;
(statearr_41455_41470[(2)] = inst_41442);

(statearr_41455_41470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (6))){
var inst_41444 = (state_41448[(2)]);
var state_41448__$1 = state_41448;
var statearr_41456_41471 = state_41448__$1;
(statearr_41456_41471[(2)] = inst_41444);

(statearr_41456_41471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (7))){
var inst_41432 = (state_41448[(11)]);
var inst_41438 = (state_41448[(2)]);
var inst_41439 = cljs.core.async.put_BANG_.call(null,out,inst_41438);
var inst_41425 = inst_41432;
var state_41448__$1 = (function (){var statearr_41457 = state_41448;
(statearr_41457[(9)] = inst_41425);

(statearr_41457[(12)] = inst_41439);

return statearr_41457;
})();
var statearr_41458_41472 = state_41448__$1;
(statearr_41458_41472[(2)] = null);

(statearr_41458_41472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__37699__auto___41466,out))
;
return ((function (switch__37587__auto__,c__37699__auto___41466,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto____0 = (function (){
var statearr_41462 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41462[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto__);

(statearr_41462[(1)] = (1));

return statearr_41462;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto____1 = (function (state_41448){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_41448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e41463){if((e41463 instanceof Object)){
var ex__37591__auto__ = e41463;
var statearr_41464_41473 = state_41448;
(statearr_41464_41473[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41474 = state_41448;
state_41448 = G__41474;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto__ = function(state_41448){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto____1.call(this,state_41448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___41466,out))
})();
var state__37701__auto__ = (function (){var statearr_41465 = f__37700__auto__.call(null);
(statearr_41465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___41466);

return statearr_41465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___41466,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41475,opts){
var map__41479 = p__41475;
var map__41479__$1 = ((((!((map__41479 == null)))?((((map__41479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41479):map__41479);
var eval_body__$1 = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24860__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24860__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24860__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41481){var e = e41481;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41482_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41482_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41491){
var vec__41492 = p__41491;
var k = cljs.core.nth.call(null,vec__41492,(0),null);
var v = cljs.core.nth.call(null,vec__41492,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41495){
var vec__41496 = p__41495;
var k = cljs.core.nth.call(null,vec__41496,(0),null);
var v = cljs.core.nth.call(null,vec__41496,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41502,p__41503){
var map__41750 = p__41502;
var map__41750__$1 = ((((!((map__41750 == null)))?((((map__41750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41750):map__41750);
var opts = map__41750__$1;
var before_jsload = cljs.core.get.call(null,map__41750__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41750__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41750__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41751 = p__41503;
var map__41751__$1 = ((((!((map__41751 == null)))?((((map__41751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41751):map__41751);
var msg = map__41751__$1;
var files = cljs.core.get.call(null,map__41751__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41751__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41751__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41904){
var state_val_41905 = (state_41904[(1)]);
if((state_val_41905 === (7))){
var inst_41767 = (state_41904[(7)]);
var inst_41766 = (state_41904[(8)]);
var inst_41765 = (state_41904[(9)]);
var inst_41768 = (state_41904[(10)]);
var inst_41773 = cljs.core._nth.call(null,inst_41766,inst_41768);
var inst_41774 = figwheel.client.file_reloading.eval_body.call(null,inst_41773,opts);
var inst_41775 = (inst_41768 + (1));
var tmp41906 = inst_41767;
var tmp41907 = inst_41766;
var tmp41908 = inst_41765;
var inst_41765__$1 = tmp41908;
var inst_41766__$1 = tmp41907;
var inst_41767__$1 = tmp41906;
var inst_41768__$1 = inst_41775;
var state_41904__$1 = (function (){var statearr_41909 = state_41904;
(statearr_41909[(7)] = inst_41767__$1);

(statearr_41909[(11)] = inst_41774);

(statearr_41909[(8)] = inst_41766__$1);

(statearr_41909[(9)] = inst_41765__$1);

(statearr_41909[(10)] = inst_41768__$1);

return statearr_41909;
})();
var statearr_41910_41996 = state_41904__$1;
(statearr_41910_41996[(2)] = null);

(statearr_41910_41996[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (20))){
var inst_41808 = (state_41904[(12)]);
var inst_41816 = figwheel.client.file_reloading.sort_files.call(null,inst_41808);
var state_41904__$1 = state_41904;
var statearr_41911_41997 = state_41904__$1;
(statearr_41911_41997[(2)] = inst_41816);

(statearr_41911_41997[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (27))){
var state_41904__$1 = state_41904;
var statearr_41912_41998 = state_41904__$1;
(statearr_41912_41998[(2)] = null);

(statearr_41912_41998[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (1))){
var inst_41757 = (state_41904[(13)]);
var inst_41754 = before_jsload.call(null,files);
var inst_41755 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41756 = (function (){return ((function (inst_41757,inst_41754,inst_41755,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41499_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41499_SHARP_);
});
;})(inst_41757,inst_41754,inst_41755,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41757__$1 = cljs.core.filter.call(null,inst_41756,files);
var inst_41758 = cljs.core.not_empty.call(null,inst_41757__$1);
var state_41904__$1 = (function (){var statearr_41913 = state_41904;
(statearr_41913[(14)] = inst_41755);

(statearr_41913[(15)] = inst_41754);

(statearr_41913[(13)] = inst_41757__$1);

return statearr_41913;
})();
if(cljs.core.truth_(inst_41758)){
var statearr_41914_41999 = state_41904__$1;
(statearr_41914_41999[(1)] = (2));

} else {
var statearr_41915_42000 = state_41904__$1;
(statearr_41915_42000[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (24))){
var state_41904__$1 = state_41904;
var statearr_41916_42001 = state_41904__$1;
(statearr_41916_42001[(2)] = null);

(statearr_41916_42001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (39))){
var inst_41858 = (state_41904[(16)]);
var state_41904__$1 = state_41904;
var statearr_41917_42002 = state_41904__$1;
(statearr_41917_42002[(2)] = inst_41858);

(statearr_41917_42002[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (46))){
var inst_41899 = (state_41904[(2)]);
var state_41904__$1 = state_41904;
var statearr_41918_42003 = state_41904__$1;
(statearr_41918_42003[(2)] = inst_41899);

(statearr_41918_42003[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (4))){
var inst_41802 = (state_41904[(2)]);
var inst_41803 = cljs.core.List.EMPTY;
var inst_41804 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41803);
var inst_41805 = (function (){return ((function (inst_41802,inst_41803,inst_41804,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41500_SHARP_){
var and__24860__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41500_SHARP_);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41500_SHARP_));
} else {
return and__24860__auto__;
}
});
;})(inst_41802,inst_41803,inst_41804,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41806 = cljs.core.filter.call(null,inst_41805,files);
var inst_41807 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41808 = cljs.core.concat.call(null,inst_41806,inst_41807);
var state_41904__$1 = (function (){var statearr_41919 = state_41904;
(statearr_41919[(17)] = inst_41802);

(statearr_41919[(12)] = inst_41808);

(statearr_41919[(18)] = inst_41804);

return statearr_41919;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41920_42004 = state_41904__$1;
(statearr_41920_42004[(1)] = (16));

} else {
var statearr_41921_42005 = state_41904__$1;
(statearr_41921_42005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (15))){
var inst_41792 = (state_41904[(2)]);
var state_41904__$1 = state_41904;
var statearr_41922_42006 = state_41904__$1;
(statearr_41922_42006[(2)] = inst_41792);

(statearr_41922_42006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (21))){
var inst_41818 = (state_41904[(19)]);
var inst_41818__$1 = (state_41904[(2)]);
var inst_41819 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41818__$1);
var state_41904__$1 = (function (){var statearr_41923 = state_41904;
(statearr_41923[(19)] = inst_41818__$1);

return statearr_41923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41904__$1,(22),inst_41819);
} else {
if((state_val_41905 === (31))){
var inst_41902 = (state_41904[(2)]);
var state_41904__$1 = state_41904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41904__$1,inst_41902);
} else {
if((state_val_41905 === (32))){
var inst_41858 = (state_41904[(16)]);
var inst_41863 = inst_41858.cljs$lang$protocol_mask$partition0$;
var inst_41864 = (inst_41863 & (64));
var inst_41865 = inst_41858.cljs$core$ISeq$;
var inst_41866 = (inst_41864) || (inst_41865);
var state_41904__$1 = state_41904;
if(cljs.core.truth_(inst_41866)){
var statearr_41924_42007 = state_41904__$1;
(statearr_41924_42007[(1)] = (35));

} else {
var statearr_41925_42008 = state_41904__$1;
(statearr_41925_42008[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (40))){
var inst_41879 = (state_41904[(20)]);
var inst_41878 = (state_41904[(2)]);
var inst_41879__$1 = cljs.core.get.call(null,inst_41878,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41880 = cljs.core.get.call(null,inst_41878,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41881 = cljs.core.not_empty.call(null,inst_41879__$1);
var state_41904__$1 = (function (){var statearr_41926 = state_41904;
(statearr_41926[(20)] = inst_41879__$1);

(statearr_41926[(21)] = inst_41880);

return statearr_41926;
})();
if(cljs.core.truth_(inst_41881)){
var statearr_41927_42009 = state_41904__$1;
(statearr_41927_42009[(1)] = (41));

} else {
var statearr_41928_42010 = state_41904__$1;
(statearr_41928_42010[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (33))){
var state_41904__$1 = state_41904;
var statearr_41929_42011 = state_41904__$1;
(statearr_41929_42011[(2)] = false);

(statearr_41929_42011[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (13))){
var inst_41778 = (state_41904[(22)]);
var inst_41782 = cljs.core.chunk_first.call(null,inst_41778);
var inst_41783 = cljs.core.chunk_rest.call(null,inst_41778);
var inst_41784 = cljs.core.count.call(null,inst_41782);
var inst_41765 = inst_41783;
var inst_41766 = inst_41782;
var inst_41767 = inst_41784;
var inst_41768 = (0);
var state_41904__$1 = (function (){var statearr_41930 = state_41904;
(statearr_41930[(7)] = inst_41767);

(statearr_41930[(8)] = inst_41766);

(statearr_41930[(9)] = inst_41765);

(statearr_41930[(10)] = inst_41768);

return statearr_41930;
})();
var statearr_41931_42012 = state_41904__$1;
(statearr_41931_42012[(2)] = null);

(statearr_41931_42012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (22))){
var inst_41822 = (state_41904[(23)]);
var inst_41818 = (state_41904[(19)]);
var inst_41821 = (state_41904[(24)]);
var inst_41826 = (state_41904[(25)]);
var inst_41821__$1 = (state_41904[(2)]);
var inst_41822__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41821__$1);
var inst_41823 = (function (){var all_files = inst_41818;
var res_SINGLEQUOTE_ = inst_41821__$1;
var res = inst_41822__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41822,inst_41818,inst_41821,inst_41826,inst_41821__$1,inst_41822__$1,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41501_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41501_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41822,inst_41818,inst_41821,inst_41826,inst_41821__$1,inst_41822__$1,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41824 = cljs.core.filter.call(null,inst_41823,inst_41821__$1);
var inst_41825 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41826__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41825);
var inst_41827 = cljs.core.not_empty.call(null,inst_41826__$1);
var state_41904__$1 = (function (){var statearr_41932 = state_41904;
(statearr_41932[(23)] = inst_41822__$1);

(statearr_41932[(24)] = inst_41821__$1);

(statearr_41932[(25)] = inst_41826__$1);

(statearr_41932[(26)] = inst_41824);

return statearr_41932;
})();
if(cljs.core.truth_(inst_41827)){
var statearr_41933_42013 = state_41904__$1;
(statearr_41933_42013[(1)] = (23));

} else {
var statearr_41934_42014 = state_41904__$1;
(statearr_41934_42014[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (36))){
var state_41904__$1 = state_41904;
var statearr_41935_42015 = state_41904__$1;
(statearr_41935_42015[(2)] = false);

(statearr_41935_42015[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (41))){
var inst_41879 = (state_41904[(20)]);
var inst_41883 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41884 = cljs.core.map.call(null,inst_41883,inst_41879);
var inst_41885 = cljs.core.pr_str.call(null,inst_41884);
var inst_41886 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_41885)].join('');
var inst_41887 = figwheel.client.utils.log.call(null,inst_41886);
var state_41904__$1 = state_41904;
var statearr_41936_42016 = state_41904__$1;
(statearr_41936_42016[(2)] = inst_41887);

(statearr_41936_42016[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (43))){
var inst_41880 = (state_41904[(21)]);
var inst_41890 = (state_41904[(2)]);
var inst_41891 = cljs.core.not_empty.call(null,inst_41880);
var state_41904__$1 = (function (){var statearr_41937 = state_41904;
(statearr_41937[(27)] = inst_41890);

return statearr_41937;
})();
if(cljs.core.truth_(inst_41891)){
var statearr_41938_42017 = state_41904__$1;
(statearr_41938_42017[(1)] = (44));

} else {
var statearr_41939_42018 = state_41904__$1;
(statearr_41939_42018[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (29))){
var inst_41822 = (state_41904[(23)]);
var inst_41818 = (state_41904[(19)]);
var inst_41821 = (state_41904[(24)]);
var inst_41858 = (state_41904[(16)]);
var inst_41826 = (state_41904[(25)]);
var inst_41824 = (state_41904[(26)]);
var inst_41854 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41857 = (function (){var all_files = inst_41818;
var res_SINGLEQUOTE_ = inst_41821;
var res = inst_41822;
var files_not_loaded = inst_41824;
var dependencies_that_loaded = inst_41826;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41822,inst_41818,inst_41821,inst_41858,inst_41826,inst_41824,inst_41854,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41856){
var map__41940 = p__41856;
var map__41940__$1 = ((((!((map__41940 == null)))?((((map__41940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41940):map__41940);
var namespace = cljs.core.get.call(null,map__41940__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41822,inst_41818,inst_41821,inst_41858,inst_41826,inst_41824,inst_41854,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41858__$1 = cljs.core.group_by.call(null,inst_41857,inst_41824);
var inst_41860 = (inst_41858__$1 == null);
var inst_41861 = cljs.core.not.call(null,inst_41860);
var state_41904__$1 = (function (){var statearr_41942 = state_41904;
(statearr_41942[(16)] = inst_41858__$1);

(statearr_41942[(28)] = inst_41854);

return statearr_41942;
})();
if(inst_41861){
var statearr_41943_42019 = state_41904__$1;
(statearr_41943_42019[(1)] = (32));

} else {
var statearr_41944_42020 = state_41904__$1;
(statearr_41944_42020[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (44))){
var inst_41880 = (state_41904[(21)]);
var inst_41893 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41880);
var inst_41894 = cljs.core.pr_str.call(null,inst_41893);
var inst_41895 = [cljs.core.str("not required: "),cljs.core.str(inst_41894)].join('');
var inst_41896 = figwheel.client.utils.log.call(null,inst_41895);
var state_41904__$1 = state_41904;
var statearr_41945_42021 = state_41904__$1;
(statearr_41945_42021[(2)] = inst_41896);

(statearr_41945_42021[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (6))){
var inst_41799 = (state_41904[(2)]);
var state_41904__$1 = state_41904;
var statearr_41946_42022 = state_41904__$1;
(statearr_41946_42022[(2)] = inst_41799);

(statearr_41946_42022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (28))){
var inst_41824 = (state_41904[(26)]);
var inst_41851 = (state_41904[(2)]);
var inst_41852 = cljs.core.not_empty.call(null,inst_41824);
var state_41904__$1 = (function (){var statearr_41947 = state_41904;
(statearr_41947[(29)] = inst_41851);

return statearr_41947;
})();
if(cljs.core.truth_(inst_41852)){
var statearr_41948_42023 = state_41904__$1;
(statearr_41948_42023[(1)] = (29));

} else {
var statearr_41949_42024 = state_41904__$1;
(statearr_41949_42024[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (25))){
var inst_41822 = (state_41904[(23)]);
var inst_41838 = (state_41904[(2)]);
var inst_41839 = cljs.core.not_empty.call(null,inst_41822);
var state_41904__$1 = (function (){var statearr_41950 = state_41904;
(statearr_41950[(30)] = inst_41838);

return statearr_41950;
})();
if(cljs.core.truth_(inst_41839)){
var statearr_41951_42025 = state_41904__$1;
(statearr_41951_42025[(1)] = (26));

} else {
var statearr_41952_42026 = state_41904__$1;
(statearr_41952_42026[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (34))){
var inst_41873 = (state_41904[(2)]);
var state_41904__$1 = state_41904;
if(cljs.core.truth_(inst_41873)){
var statearr_41953_42027 = state_41904__$1;
(statearr_41953_42027[(1)] = (38));

} else {
var statearr_41954_42028 = state_41904__$1;
(statearr_41954_42028[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (17))){
var state_41904__$1 = state_41904;
var statearr_41955_42029 = state_41904__$1;
(statearr_41955_42029[(2)] = recompile_dependents);

(statearr_41955_42029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (3))){
var state_41904__$1 = state_41904;
var statearr_41956_42030 = state_41904__$1;
(statearr_41956_42030[(2)] = null);

(statearr_41956_42030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (12))){
var inst_41795 = (state_41904[(2)]);
var state_41904__$1 = state_41904;
var statearr_41957_42031 = state_41904__$1;
(statearr_41957_42031[(2)] = inst_41795);

(statearr_41957_42031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (2))){
var inst_41757 = (state_41904[(13)]);
var inst_41764 = cljs.core.seq.call(null,inst_41757);
var inst_41765 = inst_41764;
var inst_41766 = null;
var inst_41767 = (0);
var inst_41768 = (0);
var state_41904__$1 = (function (){var statearr_41958 = state_41904;
(statearr_41958[(7)] = inst_41767);

(statearr_41958[(8)] = inst_41766);

(statearr_41958[(9)] = inst_41765);

(statearr_41958[(10)] = inst_41768);

return statearr_41958;
})();
var statearr_41959_42032 = state_41904__$1;
(statearr_41959_42032[(2)] = null);

(statearr_41959_42032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (23))){
var inst_41822 = (state_41904[(23)]);
var inst_41818 = (state_41904[(19)]);
var inst_41821 = (state_41904[(24)]);
var inst_41826 = (state_41904[(25)]);
var inst_41824 = (state_41904[(26)]);
var inst_41829 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41831 = (function (){var all_files = inst_41818;
var res_SINGLEQUOTE_ = inst_41821;
var res = inst_41822;
var files_not_loaded = inst_41824;
var dependencies_that_loaded = inst_41826;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41822,inst_41818,inst_41821,inst_41826,inst_41824,inst_41829,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41830){
var map__41960 = p__41830;
var map__41960__$1 = ((((!((map__41960 == null)))?((((map__41960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41960):map__41960);
var request_url = cljs.core.get.call(null,map__41960__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41822,inst_41818,inst_41821,inst_41826,inst_41824,inst_41829,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41832 = cljs.core.reverse.call(null,inst_41826);
var inst_41833 = cljs.core.map.call(null,inst_41831,inst_41832);
var inst_41834 = cljs.core.pr_str.call(null,inst_41833);
var inst_41835 = figwheel.client.utils.log.call(null,inst_41834);
var state_41904__$1 = (function (){var statearr_41962 = state_41904;
(statearr_41962[(31)] = inst_41829);

return statearr_41962;
})();
var statearr_41963_42033 = state_41904__$1;
(statearr_41963_42033[(2)] = inst_41835);

(statearr_41963_42033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (35))){
var state_41904__$1 = state_41904;
var statearr_41964_42034 = state_41904__$1;
(statearr_41964_42034[(2)] = true);

(statearr_41964_42034[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (19))){
var inst_41808 = (state_41904[(12)]);
var inst_41814 = figwheel.client.file_reloading.expand_files.call(null,inst_41808);
var state_41904__$1 = state_41904;
var statearr_41965_42035 = state_41904__$1;
(statearr_41965_42035[(2)] = inst_41814);

(statearr_41965_42035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (11))){
var state_41904__$1 = state_41904;
var statearr_41966_42036 = state_41904__$1;
(statearr_41966_42036[(2)] = null);

(statearr_41966_42036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (9))){
var inst_41797 = (state_41904[(2)]);
var state_41904__$1 = state_41904;
var statearr_41967_42037 = state_41904__$1;
(statearr_41967_42037[(2)] = inst_41797);

(statearr_41967_42037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (5))){
var inst_41767 = (state_41904[(7)]);
var inst_41768 = (state_41904[(10)]);
var inst_41770 = (inst_41768 < inst_41767);
var inst_41771 = inst_41770;
var state_41904__$1 = state_41904;
if(cljs.core.truth_(inst_41771)){
var statearr_41968_42038 = state_41904__$1;
(statearr_41968_42038[(1)] = (7));

} else {
var statearr_41969_42039 = state_41904__$1;
(statearr_41969_42039[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (14))){
var inst_41778 = (state_41904[(22)]);
var inst_41787 = cljs.core.first.call(null,inst_41778);
var inst_41788 = figwheel.client.file_reloading.eval_body.call(null,inst_41787,opts);
var inst_41789 = cljs.core.next.call(null,inst_41778);
var inst_41765 = inst_41789;
var inst_41766 = null;
var inst_41767 = (0);
var inst_41768 = (0);
var state_41904__$1 = (function (){var statearr_41970 = state_41904;
(statearr_41970[(7)] = inst_41767);

(statearr_41970[(8)] = inst_41766);

(statearr_41970[(9)] = inst_41765);

(statearr_41970[(10)] = inst_41768);

(statearr_41970[(32)] = inst_41788);

return statearr_41970;
})();
var statearr_41971_42040 = state_41904__$1;
(statearr_41971_42040[(2)] = null);

(statearr_41971_42040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (45))){
var state_41904__$1 = state_41904;
var statearr_41972_42041 = state_41904__$1;
(statearr_41972_42041[(2)] = null);

(statearr_41972_42041[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (26))){
var inst_41822 = (state_41904[(23)]);
var inst_41818 = (state_41904[(19)]);
var inst_41821 = (state_41904[(24)]);
var inst_41826 = (state_41904[(25)]);
var inst_41824 = (state_41904[(26)]);
var inst_41841 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41843 = (function (){var all_files = inst_41818;
var res_SINGLEQUOTE_ = inst_41821;
var res = inst_41822;
var files_not_loaded = inst_41824;
var dependencies_that_loaded = inst_41826;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41822,inst_41818,inst_41821,inst_41826,inst_41824,inst_41841,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41842){
var map__41973 = p__41842;
var map__41973__$1 = ((((!((map__41973 == null)))?((((map__41973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41973):map__41973);
var namespace = cljs.core.get.call(null,map__41973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41822,inst_41818,inst_41821,inst_41826,inst_41824,inst_41841,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41844 = cljs.core.map.call(null,inst_41843,inst_41822);
var inst_41845 = cljs.core.pr_str.call(null,inst_41844);
var inst_41846 = figwheel.client.utils.log.call(null,inst_41845);
var inst_41847 = (function (){var all_files = inst_41818;
var res_SINGLEQUOTE_ = inst_41821;
var res = inst_41822;
var files_not_loaded = inst_41824;
var dependencies_that_loaded = inst_41826;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41822,inst_41818,inst_41821,inst_41826,inst_41824,inst_41841,inst_41843,inst_41844,inst_41845,inst_41846,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41822,inst_41818,inst_41821,inst_41826,inst_41824,inst_41841,inst_41843,inst_41844,inst_41845,inst_41846,state_val_41905,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41848 = setTimeout(inst_41847,(10));
var state_41904__$1 = (function (){var statearr_41975 = state_41904;
(statearr_41975[(33)] = inst_41841);

(statearr_41975[(34)] = inst_41846);

return statearr_41975;
})();
var statearr_41976_42042 = state_41904__$1;
(statearr_41976_42042[(2)] = inst_41848);

(statearr_41976_42042[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (16))){
var state_41904__$1 = state_41904;
var statearr_41977_42043 = state_41904__$1;
(statearr_41977_42043[(2)] = reload_dependents);

(statearr_41977_42043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (38))){
var inst_41858 = (state_41904[(16)]);
var inst_41875 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41858);
var state_41904__$1 = state_41904;
var statearr_41978_42044 = state_41904__$1;
(statearr_41978_42044[(2)] = inst_41875);

(statearr_41978_42044[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (30))){
var state_41904__$1 = state_41904;
var statearr_41979_42045 = state_41904__$1;
(statearr_41979_42045[(2)] = null);

(statearr_41979_42045[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (10))){
var inst_41778 = (state_41904[(22)]);
var inst_41780 = cljs.core.chunked_seq_QMARK_.call(null,inst_41778);
var state_41904__$1 = state_41904;
if(inst_41780){
var statearr_41980_42046 = state_41904__$1;
(statearr_41980_42046[(1)] = (13));

} else {
var statearr_41981_42047 = state_41904__$1;
(statearr_41981_42047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (18))){
var inst_41812 = (state_41904[(2)]);
var state_41904__$1 = state_41904;
if(cljs.core.truth_(inst_41812)){
var statearr_41982_42048 = state_41904__$1;
(statearr_41982_42048[(1)] = (19));

} else {
var statearr_41983_42049 = state_41904__$1;
(statearr_41983_42049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (42))){
var state_41904__$1 = state_41904;
var statearr_41984_42050 = state_41904__$1;
(statearr_41984_42050[(2)] = null);

(statearr_41984_42050[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (37))){
var inst_41870 = (state_41904[(2)]);
var state_41904__$1 = state_41904;
var statearr_41985_42051 = state_41904__$1;
(statearr_41985_42051[(2)] = inst_41870);

(statearr_41985_42051[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41905 === (8))){
var inst_41765 = (state_41904[(9)]);
var inst_41778 = (state_41904[(22)]);
var inst_41778__$1 = cljs.core.seq.call(null,inst_41765);
var state_41904__$1 = (function (){var statearr_41986 = state_41904;
(statearr_41986[(22)] = inst_41778__$1);

return statearr_41986;
})();
if(inst_41778__$1){
var statearr_41987_42052 = state_41904__$1;
(statearr_41987_42052[(1)] = (10));

} else {
var statearr_41988_42053 = state_41904__$1;
(statearr_41988_42053[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37587__auto__,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto____0 = (function (){
var statearr_41992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41992[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto__);

(statearr_41992[(1)] = (1));

return statearr_41992;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto____1 = (function (state_41904){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_41904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e41993){if((e41993 instanceof Object)){
var ex__37591__auto__ = e41993;
var statearr_41994_42054 = state_41904;
(statearr_41994_42054[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42055 = state_41904;
state_41904 = G__42055;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto__ = function(state_41904){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto____1.call(this,state_41904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37701__auto__ = (function (){var statearr_41995 = f__37700__auto__.call(null);
(statearr_41995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto__);

return statearr_41995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto__,map__41750,map__41750__$1,opts,before_jsload,on_jsload,reload_dependents,map__41751,map__41751__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37699__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42058,link){
var map__42061 = p__42058;
var map__42061__$1 = ((((!((map__42061 == null)))?((((map__42061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42061):map__42061);
var file = cljs.core.get.call(null,map__42061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__42061,map__42061__$1,file){
return (function (p1__42056_SHARP_,p2__42057_SHARP_){
if(cljs.core._EQ_.call(null,p1__42056_SHARP_,p2__42057_SHARP_)){
return p1__42056_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__42061,map__42061__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42067){
var map__42068 = p__42067;
var map__42068__$1 = ((((!((map__42068 == null)))?((((map__42068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42068):map__42068);
var match_length = cljs.core.get.call(null,map__42068__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42068__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42063_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42063_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args42070 = [];
var len__25947__auto___42073 = arguments.length;
var i__25948__auto___42074 = (0);
while(true){
if((i__25948__auto___42074 < len__25947__auto___42073)){
args42070.push((arguments[i__25948__auto___42074]));

var G__42075 = (i__25948__auto___42074 + (1));
i__25948__auto___42074 = G__42075;
continue;
} else {
}
break;
}

var G__42072 = args42070.length;
switch (G__42072) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42070.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42077_SHARP_,p2__42078_SHARP_){
return cljs.core.assoc.call(null,p1__42077_SHARP_,cljs.core.get.call(null,p2__42078_SHARP_,key),p2__42078_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42079){
var map__42082 = p__42079;
var map__42082__$1 = ((((!((map__42082 == null)))?((((map__42082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42082):map__42082);
var f_data = map__42082__$1;
var file = cljs.core.get.call(null,map__42082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42084,files_msg){
var map__42091 = p__42084;
var map__42091__$1 = ((((!((map__42091 == null)))?((((map__42091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42091):map__42091);
var opts = map__42091__$1;
var on_cssload = cljs.core.get.call(null,map__42091__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__42093_42097 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__42094_42098 = null;
var count__42095_42099 = (0);
var i__42096_42100 = (0);
while(true){
if((i__42096_42100 < count__42095_42099)){
var f_42101 = cljs.core._nth.call(null,chunk__42094_42098,i__42096_42100);
figwheel.client.file_reloading.reload_css_file.call(null,f_42101);

var G__42102 = seq__42093_42097;
var G__42103 = chunk__42094_42098;
var G__42104 = count__42095_42099;
var G__42105 = (i__42096_42100 + (1));
seq__42093_42097 = G__42102;
chunk__42094_42098 = G__42103;
count__42095_42099 = G__42104;
i__42096_42100 = G__42105;
continue;
} else {
var temp__4657__auto___42106 = cljs.core.seq.call(null,seq__42093_42097);
if(temp__4657__auto___42106){
var seq__42093_42107__$1 = temp__4657__auto___42106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42093_42107__$1)){
var c__25683__auto___42108 = cljs.core.chunk_first.call(null,seq__42093_42107__$1);
var G__42109 = cljs.core.chunk_rest.call(null,seq__42093_42107__$1);
var G__42110 = c__25683__auto___42108;
var G__42111 = cljs.core.count.call(null,c__25683__auto___42108);
var G__42112 = (0);
seq__42093_42097 = G__42109;
chunk__42094_42098 = G__42110;
count__42095_42099 = G__42111;
i__42096_42100 = G__42112;
continue;
} else {
var f_42113 = cljs.core.first.call(null,seq__42093_42107__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_42113);

var G__42114 = cljs.core.next.call(null,seq__42093_42107__$1);
var G__42115 = null;
var G__42116 = (0);
var G__42117 = (0);
seq__42093_42097 = G__42114;
chunk__42094_42098 = G__42115;
count__42095_42099 = G__42116;
i__42096_42100 = G__42117;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__42091,map__42091__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__42091,map__42091__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484804414279