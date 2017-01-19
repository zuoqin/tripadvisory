// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43436){
var map__43461 = p__43436;
var map__43461__$1 = ((((!((map__43461 == null)))?((((map__43461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43461):map__43461);
var m = map__43461__$1;
var n = cljs.core.get.call(null,map__43461__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43463_43485 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43464_43486 = null;
var count__43465_43487 = (0);
var i__43466_43488 = (0);
while(true){
if((i__43466_43488 < count__43465_43487)){
var f_43489 = cljs.core._nth.call(null,chunk__43464_43486,i__43466_43488);
cljs.core.println.call(null,"  ",f_43489);

var G__43490 = seq__43463_43485;
var G__43491 = chunk__43464_43486;
var G__43492 = count__43465_43487;
var G__43493 = (i__43466_43488 + (1));
seq__43463_43485 = G__43490;
chunk__43464_43486 = G__43491;
count__43465_43487 = G__43492;
i__43466_43488 = G__43493;
continue;
} else {
var temp__4657__auto___43494 = cljs.core.seq.call(null,seq__43463_43485);
if(temp__4657__auto___43494){
var seq__43463_43495__$1 = temp__4657__auto___43494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43463_43495__$1)){
var c__25683__auto___43496 = cljs.core.chunk_first.call(null,seq__43463_43495__$1);
var G__43497 = cljs.core.chunk_rest.call(null,seq__43463_43495__$1);
var G__43498 = c__25683__auto___43496;
var G__43499 = cljs.core.count.call(null,c__25683__auto___43496);
var G__43500 = (0);
seq__43463_43485 = G__43497;
chunk__43464_43486 = G__43498;
count__43465_43487 = G__43499;
i__43466_43488 = G__43500;
continue;
} else {
var f_43501 = cljs.core.first.call(null,seq__43463_43495__$1);
cljs.core.println.call(null,"  ",f_43501);

var G__43502 = cljs.core.next.call(null,seq__43463_43495__$1);
var G__43503 = null;
var G__43504 = (0);
var G__43505 = (0);
seq__43463_43485 = G__43502;
chunk__43464_43486 = G__43503;
count__43465_43487 = G__43504;
i__43466_43488 = G__43505;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43506 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24872__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43506);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43506)))?cljs.core.second.call(null,arglists_43506):arglists_43506));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43467_43507 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43468_43508 = null;
var count__43469_43509 = (0);
var i__43470_43510 = (0);
while(true){
if((i__43470_43510 < count__43469_43509)){
var vec__43471_43511 = cljs.core._nth.call(null,chunk__43468_43508,i__43470_43510);
var name_43512 = cljs.core.nth.call(null,vec__43471_43511,(0),null);
var map__43474_43513 = cljs.core.nth.call(null,vec__43471_43511,(1),null);
var map__43474_43514__$1 = ((((!((map__43474_43513 == null)))?((((map__43474_43513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43474_43513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43474_43513):map__43474_43513);
var doc_43515 = cljs.core.get.call(null,map__43474_43514__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43516 = cljs.core.get.call(null,map__43474_43514__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43512);

cljs.core.println.call(null," ",arglists_43516);

if(cljs.core.truth_(doc_43515)){
cljs.core.println.call(null," ",doc_43515);
} else {
}

var G__43517 = seq__43467_43507;
var G__43518 = chunk__43468_43508;
var G__43519 = count__43469_43509;
var G__43520 = (i__43470_43510 + (1));
seq__43467_43507 = G__43517;
chunk__43468_43508 = G__43518;
count__43469_43509 = G__43519;
i__43470_43510 = G__43520;
continue;
} else {
var temp__4657__auto___43521 = cljs.core.seq.call(null,seq__43467_43507);
if(temp__4657__auto___43521){
var seq__43467_43522__$1 = temp__4657__auto___43521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43467_43522__$1)){
var c__25683__auto___43523 = cljs.core.chunk_first.call(null,seq__43467_43522__$1);
var G__43524 = cljs.core.chunk_rest.call(null,seq__43467_43522__$1);
var G__43525 = c__25683__auto___43523;
var G__43526 = cljs.core.count.call(null,c__25683__auto___43523);
var G__43527 = (0);
seq__43467_43507 = G__43524;
chunk__43468_43508 = G__43525;
count__43469_43509 = G__43526;
i__43470_43510 = G__43527;
continue;
} else {
var vec__43476_43528 = cljs.core.first.call(null,seq__43467_43522__$1);
var name_43529 = cljs.core.nth.call(null,vec__43476_43528,(0),null);
var map__43479_43530 = cljs.core.nth.call(null,vec__43476_43528,(1),null);
var map__43479_43531__$1 = ((((!((map__43479_43530 == null)))?((((map__43479_43530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43479_43530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43479_43530):map__43479_43530);
var doc_43532 = cljs.core.get.call(null,map__43479_43531__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43533 = cljs.core.get.call(null,map__43479_43531__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43529);

cljs.core.println.call(null," ",arglists_43533);

if(cljs.core.truth_(doc_43532)){
cljs.core.println.call(null," ",doc_43532);
} else {
}

var G__43534 = cljs.core.next.call(null,seq__43467_43522__$1);
var G__43535 = null;
var G__43536 = (0);
var G__43537 = (0);
seq__43467_43507 = G__43534;
chunk__43468_43508 = G__43535;
count__43469_43509 = G__43536;
i__43470_43510 = G__43537;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__43481 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43482 = null;
var count__43483 = (0);
var i__43484 = (0);
while(true){
if((i__43484 < count__43483)){
var role = cljs.core._nth.call(null,chunk__43482,i__43484);
var temp__4657__auto___43538__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___43538__$1)){
var spec_43539 = temp__4657__auto___43538__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_43539));
} else {
}

var G__43540 = seq__43481;
var G__43541 = chunk__43482;
var G__43542 = count__43483;
var G__43543 = (i__43484 + (1));
seq__43481 = G__43540;
chunk__43482 = G__43541;
count__43483 = G__43542;
i__43484 = G__43543;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__43481);
if(temp__4657__auto____$1){
var seq__43481__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43481__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__43481__$1);
var G__43544 = cljs.core.chunk_rest.call(null,seq__43481__$1);
var G__43545 = c__25683__auto__;
var G__43546 = cljs.core.count.call(null,c__25683__auto__);
var G__43547 = (0);
seq__43481 = G__43544;
chunk__43482 = G__43545;
count__43483 = G__43546;
i__43484 = G__43547;
continue;
} else {
var role = cljs.core.first.call(null,seq__43481__$1);
var temp__4657__auto___43548__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___43548__$2)){
var spec_43549 = temp__4657__auto___43548__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_43549));
} else {
}

var G__43550 = cljs.core.next.call(null,seq__43481__$1);
var G__43551 = null;
var G__43552 = (0);
var G__43553 = (0);
seq__43481 = G__43550;
chunk__43482 = G__43551;
count__43483 = G__43552;
i__43484 = G__43553;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1484804417388