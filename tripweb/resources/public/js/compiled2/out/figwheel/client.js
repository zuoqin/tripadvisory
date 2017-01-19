// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-4";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args45582 = [];
var len__25947__auto___45585 = arguments.length;
var i__25948__auto___45586 = (0);
while(true){
if((i__25948__auto___45586 < len__25947__auto___45585)){
args45582.push((arguments[i__25948__auto___45586]));

var G__45587 = (i__25948__auto___45586 + (1));
i__25948__auto___45586 = G__45587;
continue;
} else {
}
break;
}

var G__45584 = args45582.length;
switch (G__45584) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45582.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___45590 = arguments.length;
var i__25948__auto___45591 = (0);
while(true){
if((i__25948__auto___45591 < len__25947__auto___45590)){
args__25954__auto__.push((arguments[i__25948__auto___45591]));

var G__45592 = (i__25948__auto___45591 + (1));
i__25948__auto___45591 = G__45592;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq45589){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45589));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25954__auto__ = [];
var len__25947__auto___45594 = arguments.length;
var i__25948__auto___45595 = (0);
while(true){
if((i__25948__auto___45595 < len__25947__auto___45594)){
args__25954__auto__.push((arguments[i__25948__auto___45595]));

var G__45596 = (i__25948__auto___45595 + (1));
i__25948__auto___45595 = G__45596;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq45593){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45593));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__45597 = cljs.core._EQ_;
var expr__45598 = (function (){var or__24872__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e45601){if((e45601 instanceof Error)){
var e = e45601;
return false;
} else {
throw e45601;

}
}})();
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__45597.call(null,"true",expr__45598))){
return true;
} else {
if(cljs.core.truth_(pred__45597.call(null,"false",expr__45598))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45598)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e45603){if((e45603 instanceof Error)){
var e = e45603;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e45603;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45604){
var map__45607 = p__45604;
var map__45607__$1 = ((((!((map__45607 == null)))?((((map__45607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45607):map__45607);
var message = cljs.core.get.call(null,map__45607__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45607__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24872__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24860__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24860__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24860__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__37699__auto___45769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___45769,ch){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___45769,ch){
return (function (state_45738){
var state_val_45739 = (state_45738[(1)]);
if((state_val_45739 === (7))){
var inst_45734 = (state_45738[(2)]);
var state_45738__$1 = state_45738;
var statearr_45740_45770 = state_45738__$1;
(statearr_45740_45770[(2)] = inst_45734);

(statearr_45740_45770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (1))){
var state_45738__$1 = state_45738;
var statearr_45741_45771 = state_45738__$1;
(statearr_45741_45771[(2)] = null);

(statearr_45741_45771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (4))){
var inst_45691 = (state_45738[(7)]);
var inst_45691__$1 = (state_45738[(2)]);
var state_45738__$1 = (function (){var statearr_45742 = state_45738;
(statearr_45742[(7)] = inst_45691__$1);

return statearr_45742;
})();
if(cljs.core.truth_(inst_45691__$1)){
var statearr_45743_45772 = state_45738__$1;
(statearr_45743_45772[(1)] = (5));

} else {
var statearr_45744_45773 = state_45738__$1;
(statearr_45744_45773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (15))){
var inst_45698 = (state_45738[(8)]);
var inst_45713 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45698);
var inst_45714 = cljs.core.first.call(null,inst_45713);
var inst_45715 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45714);
var inst_45716 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_45715)].join('');
var inst_45717 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45716);
var state_45738__$1 = state_45738;
var statearr_45745_45774 = state_45738__$1;
(statearr_45745_45774[(2)] = inst_45717);

(statearr_45745_45774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (13))){
var inst_45722 = (state_45738[(2)]);
var state_45738__$1 = state_45738;
var statearr_45746_45775 = state_45738__$1;
(statearr_45746_45775[(2)] = inst_45722);

(statearr_45746_45775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (6))){
var state_45738__$1 = state_45738;
var statearr_45747_45776 = state_45738__$1;
(statearr_45747_45776[(2)] = null);

(statearr_45747_45776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (17))){
var inst_45720 = (state_45738[(2)]);
var state_45738__$1 = state_45738;
var statearr_45748_45777 = state_45738__$1;
(statearr_45748_45777[(2)] = inst_45720);

(statearr_45748_45777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (3))){
var inst_45736 = (state_45738[(2)]);
var state_45738__$1 = state_45738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45738__$1,inst_45736);
} else {
if((state_val_45739 === (12))){
var inst_45697 = (state_45738[(9)]);
var inst_45711 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45697,opts);
var state_45738__$1 = state_45738;
if(cljs.core.truth_(inst_45711)){
var statearr_45749_45778 = state_45738__$1;
(statearr_45749_45778[(1)] = (15));

} else {
var statearr_45750_45779 = state_45738__$1;
(statearr_45750_45779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (2))){
var state_45738__$1 = state_45738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45738__$1,(4),ch);
} else {
if((state_val_45739 === (11))){
var inst_45698 = (state_45738[(8)]);
var inst_45703 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45704 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45698);
var inst_45705 = cljs.core.async.timeout.call(null,(1000));
var inst_45706 = [inst_45704,inst_45705];
var inst_45707 = (new cljs.core.PersistentVector(null,2,(5),inst_45703,inst_45706,null));
var state_45738__$1 = state_45738;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45738__$1,(14),inst_45707);
} else {
if((state_val_45739 === (9))){
var inst_45698 = (state_45738[(8)]);
var inst_45724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45725 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45698);
var inst_45726 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45725);
var inst_45727 = [cljs.core.str("Not loading: "),cljs.core.str(inst_45726)].join('');
var inst_45728 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45727);
var state_45738__$1 = (function (){var statearr_45751 = state_45738;
(statearr_45751[(10)] = inst_45724);

return statearr_45751;
})();
var statearr_45752_45780 = state_45738__$1;
(statearr_45752_45780[(2)] = inst_45728);

(statearr_45752_45780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (5))){
var inst_45691 = (state_45738[(7)]);
var inst_45693 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45694 = (new cljs.core.PersistentArrayMap(null,2,inst_45693,null));
var inst_45695 = (new cljs.core.PersistentHashSet(null,inst_45694,null));
var inst_45696 = figwheel.client.focus_msgs.call(null,inst_45695,inst_45691);
var inst_45697 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45696);
var inst_45698 = cljs.core.first.call(null,inst_45696);
var inst_45699 = figwheel.client.autoload_QMARK_.call(null);
var state_45738__$1 = (function (){var statearr_45753 = state_45738;
(statearr_45753[(8)] = inst_45698);

(statearr_45753[(9)] = inst_45697);

return statearr_45753;
})();
if(cljs.core.truth_(inst_45699)){
var statearr_45754_45781 = state_45738__$1;
(statearr_45754_45781[(1)] = (8));

} else {
var statearr_45755_45782 = state_45738__$1;
(statearr_45755_45782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (14))){
var inst_45709 = (state_45738[(2)]);
var state_45738__$1 = state_45738;
var statearr_45756_45783 = state_45738__$1;
(statearr_45756_45783[(2)] = inst_45709);

(statearr_45756_45783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (16))){
var state_45738__$1 = state_45738;
var statearr_45757_45784 = state_45738__$1;
(statearr_45757_45784[(2)] = null);

(statearr_45757_45784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (10))){
var inst_45730 = (state_45738[(2)]);
var state_45738__$1 = (function (){var statearr_45758 = state_45738;
(statearr_45758[(11)] = inst_45730);

return statearr_45758;
})();
var statearr_45759_45785 = state_45738__$1;
(statearr_45759_45785[(2)] = null);

(statearr_45759_45785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45739 === (8))){
var inst_45697 = (state_45738[(9)]);
var inst_45701 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45697,opts);
var state_45738__$1 = state_45738;
if(cljs.core.truth_(inst_45701)){
var statearr_45760_45786 = state_45738__$1;
(statearr_45760_45786[(1)] = (11));

} else {
var statearr_45761_45787 = state_45738__$1;
(statearr_45761_45787[(1)] = (12));

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
});})(c__37699__auto___45769,ch))
;
return ((function (switch__37587__auto__,c__37699__auto___45769,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37588__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37588__auto____0 = (function (){
var statearr_45765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45765[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37588__auto__);

(statearr_45765[(1)] = (1));

return statearr_45765;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37588__auto____1 = (function (state_45738){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_45738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e45766){if((e45766 instanceof Object)){
var ex__37591__auto__ = e45766;
var statearr_45767_45788 = state_45738;
(statearr_45767_45788[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45789 = state_45738;
state_45738 = G__45789;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37588__auto__ = function(state_45738){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37588__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37588__auto____1.call(this,state_45738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37588__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37588__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___45769,ch))
})();
var state__37701__auto__ = (function (){var statearr_45768 = f__37700__auto__.call(null);
(statearr_45768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___45769);

return statearr_45768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___45769,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45790_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45790_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_45793 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45793){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e45792){if((e45792 instanceof Error)){
var e = e45792;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45793], null));
} else {
var e = e45792;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_45793))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45794){
var map__45803 = p__45794;
var map__45803__$1 = ((((!((map__45803 == null)))?((((map__45803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45803):map__45803);
var opts = map__45803__$1;
var build_id = cljs.core.get.call(null,map__45803__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45803,map__45803__$1,opts,build_id){
return (function (p__45805){
var vec__45806 = p__45805;
var seq__45807 = cljs.core.seq.call(null,vec__45806);
var first__45808 = cljs.core.first.call(null,seq__45807);
var seq__45807__$1 = cljs.core.next.call(null,seq__45807);
var map__45809 = first__45808;
var map__45809__$1 = ((((!((map__45809 == null)))?((((map__45809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45809):map__45809);
var msg = map__45809__$1;
var msg_name = cljs.core.get.call(null,map__45809__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45807__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45806,seq__45807,first__45808,seq__45807__$1,map__45809,map__45809__$1,msg,msg_name,_,map__45803,map__45803__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45806,seq__45807,first__45808,seq__45807__$1,map__45809,map__45809__$1,msg,msg_name,_,map__45803,map__45803__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45803,map__45803__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45817){
var vec__45818 = p__45817;
var seq__45819 = cljs.core.seq.call(null,vec__45818);
var first__45820 = cljs.core.first.call(null,seq__45819);
var seq__45819__$1 = cljs.core.next.call(null,seq__45819);
var map__45821 = first__45820;
var map__45821__$1 = ((((!((map__45821 == null)))?((((map__45821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45821):map__45821);
var msg = map__45821__$1;
var msg_name = cljs.core.get.call(null,map__45821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45819__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45823){
var map__45835 = p__45823;
var map__45835__$1 = ((((!((map__45835 == null)))?((((map__45835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45835):map__45835);
var on_compile_warning = cljs.core.get.call(null,map__45835__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45835__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45835,map__45835__$1,on_compile_warning,on_compile_fail){
return (function (p__45837){
var vec__45838 = p__45837;
var seq__45839 = cljs.core.seq.call(null,vec__45838);
var first__45840 = cljs.core.first.call(null,seq__45839);
var seq__45839__$1 = cljs.core.next.call(null,seq__45839);
var map__45841 = first__45840;
var map__45841__$1 = ((((!((map__45841 == null)))?((((map__45841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45841):map__45841);
var msg = map__45841__$1;
var msg_name = cljs.core.get.call(null,map__45841__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__45839__$1;
var pred__45843 = cljs.core._EQ_;
var expr__45844 = msg_name;
if(cljs.core.truth_(pred__45843.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45844))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45843.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45844))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45835,map__45835__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto__,msg_hist,msg_names,msg){
return (function (state_46052){
var state_val_46053 = (state_46052[(1)]);
if((state_val_46053 === (7))){
var inst_45980 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_45980)){
var statearr_46054_46100 = state_46052__$1;
(statearr_46054_46100[(1)] = (8));

} else {
var statearr_46055_46101 = state_46052__$1;
(statearr_46055_46101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (20))){
var inst_46046 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46056_46102 = state_46052__$1;
(statearr_46056_46102[(2)] = inst_46046);

(statearr_46056_46102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (27))){
var inst_46042 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46057_46103 = state_46052__$1;
(statearr_46057_46103[(2)] = inst_46042);

(statearr_46057_46103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (1))){
var inst_45973 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_45973)){
var statearr_46058_46104 = state_46052__$1;
(statearr_46058_46104[(1)] = (2));

} else {
var statearr_46059_46105 = state_46052__$1;
(statearr_46059_46105[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (24))){
var inst_46044 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46060_46106 = state_46052__$1;
(statearr_46060_46106[(2)] = inst_46044);

(statearr_46060_46106[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (4))){
var inst_46050 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46052__$1,inst_46050);
} else {
if((state_val_46053 === (15))){
var inst_46048 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46061_46107 = state_46052__$1;
(statearr_46061_46107[(2)] = inst_46048);

(statearr_46061_46107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (21))){
var inst_46007 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46062_46108 = state_46052__$1;
(statearr_46062_46108[(2)] = inst_46007);

(statearr_46062_46108[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (31))){
var inst_46031 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_46031)){
var statearr_46063_46109 = state_46052__$1;
(statearr_46063_46109[(1)] = (34));

} else {
var statearr_46064_46110 = state_46052__$1;
(statearr_46064_46110[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (32))){
var inst_46040 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46065_46111 = state_46052__$1;
(statearr_46065_46111[(2)] = inst_46040);

(statearr_46065_46111[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (33))){
var inst_46029 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46066_46112 = state_46052__$1;
(statearr_46066_46112[(2)] = inst_46029);

(statearr_46066_46112[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (13))){
var inst_45994 = figwheel.client.heads_up.clear.call(null);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46052__$1,(16),inst_45994);
} else {
if((state_val_46053 === (22))){
var inst_46011 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46012 = figwheel.client.heads_up.append_warning_message.call(null,inst_46011);
var state_46052__$1 = state_46052;
var statearr_46067_46113 = state_46052__$1;
(statearr_46067_46113[(2)] = inst_46012);

(statearr_46067_46113[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (36))){
var inst_46038 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46068_46114 = state_46052__$1;
(statearr_46068_46114[(2)] = inst_46038);

(statearr_46068_46114[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (29))){
var inst_46022 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46069_46115 = state_46052__$1;
(statearr_46069_46115[(2)] = inst_46022);

(statearr_46069_46115[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (6))){
var inst_45975 = (state_46052[(7)]);
var state_46052__$1 = state_46052;
var statearr_46070_46116 = state_46052__$1;
(statearr_46070_46116[(2)] = inst_45975);

(statearr_46070_46116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (28))){
var inst_46018 = (state_46052[(2)]);
var inst_46019 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46020 = figwheel.client.heads_up.display_warning.call(null,inst_46019);
var state_46052__$1 = (function (){var statearr_46071 = state_46052;
(statearr_46071[(8)] = inst_46018);

return statearr_46071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46052__$1,(29),inst_46020);
} else {
if((state_val_46053 === (25))){
var inst_46016 = figwheel.client.heads_up.clear.call(null);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46052__$1,(28),inst_46016);
} else {
if((state_val_46053 === (34))){
var inst_46033 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46052__$1,(37),inst_46033);
} else {
if((state_val_46053 === (17))){
var inst_46000 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46072_46117 = state_46052__$1;
(statearr_46072_46117[(2)] = inst_46000);

(statearr_46072_46117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (3))){
var inst_45992 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_45992)){
var statearr_46073_46118 = state_46052__$1;
(statearr_46073_46118[(1)] = (13));

} else {
var statearr_46074_46119 = state_46052__$1;
(statearr_46074_46119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (12))){
var inst_45988 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46075_46120 = state_46052__$1;
(statearr_46075_46120[(2)] = inst_45988);

(statearr_46075_46120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (2))){
var inst_45975 = (state_46052[(7)]);
var inst_45975__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46052__$1 = (function (){var statearr_46076 = state_46052;
(statearr_46076[(7)] = inst_45975__$1);

return statearr_46076;
})();
if(cljs.core.truth_(inst_45975__$1)){
var statearr_46077_46121 = state_46052__$1;
(statearr_46077_46121[(1)] = (5));

} else {
var statearr_46078_46122 = state_46052__$1;
(statearr_46078_46122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (23))){
var inst_46014 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_46014)){
var statearr_46079_46123 = state_46052__$1;
(statearr_46079_46123[(1)] = (25));

} else {
var statearr_46080_46124 = state_46052__$1;
(statearr_46080_46124[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (35))){
var state_46052__$1 = state_46052;
var statearr_46081_46125 = state_46052__$1;
(statearr_46081_46125[(2)] = null);

(statearr_46081_46125[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (19))){
var inst_46009 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_46009)){
var statearr_46082_46126 = state_46052__$1;
(statearr_46082_46126[(1)] = (22));

} else {
var statearr_46083_46127 = state_46052__$1;
(statearr_46083_46127[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (11))){
var inst_45984 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46084_46128 = state_46052__$1;
(statearr_46084_46128[(2)] = inst_45984);

(statearr_46084_46128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (9))){
var inst_45986 = figwheel.client.heads_up.clear.call(null);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46052__$1,(12),inst_45986);
} else {
if((state_val_46053 === (5))){
var inst_45977 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46052__$1 = state_46052;
var statearr_46085_46129 = state_46052__$1;
(statearr_46085_46129[(2)] = inst_45977);

(statearr_46085_46129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (14))){
var inst_46002 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_46002)){
var statearr_46086_46130 = state_46052__$1;
(statearr_46086_46130[(1)] = (18));

} else {
var statearr_46087_46131 = state_46052__$1;
(statearr_46087_46131[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (26))){
var inst_46024 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46052__$1 = state_46052;
if(cljs.core.truth_(inst_46024)){
var statearr_46088_46132 = state_46052__$1;
(statearr_46088_46132[(1)] = (30));

} else {
var statearr_46089_46133 = state_46052__$1;
(statearr_46089_46133[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (16))){
var inst_45996 = (state_46052[(2)]);
var inst_45997 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_45998 = figwheel.client.heads_up.display_exception.call(null,inst_45997);
var state_46052__$1 = (function (){var statearr_46090 = state_46052;
(statearr_46090[(9)] = inst_45996);

return statearr_46090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46052__$1,(17),inst_45998);
} else {
if((state_val_46053 === (30))){
var inst_46026 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46027 = figwheel.client.heads_up.display_warning.call(null,inst_46026);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46052__$1,(33),inst_46027);
} else {
if((state_val_46053 === (10))){
var inst_45990 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46091_46134 = state_46052__$1;
(statearr_46091_46134[(2)] = inst_45990);

(statearr_46091_46134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (18))){
var inst_46004 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46005 = figwheel.client.heads_up.display_exception.call(null,inst_46004);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46052__$1,(21),inst_46005);
} else {
if((state_val_46053 === (37))){
var inst_46035 = (state_46052[(2)]);
var state_46052__$1 = state_46052;
var statearr_46092_46135 = state_46052__$1;
(statearr_46092_46135[(2)] = inst_46035);

(statearr_46092_46135[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46053 === (8))){
var inst_45982 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46052__$1 = state_46052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46052__$1,(11),inst_45982);
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
});})(c__37699__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37587__auto__,c__37699__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto____0 = (function (){
var statearr_46096 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46096[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto__);

(statearr_46096[(1)] = (1));

return statearr_46096;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto____1 = (function (state_46052){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_46052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e46097){if((e46097 instanceof Object)){
var ex__37591__auto__ = e46097;
var statearr_46098_46136 = state_46052;
(statearr_46098_46136[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46137 = state_46052;
state_46052 = G__46137;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto__ = function(state_46052){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto____1.call(this,state_46052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto__,msg_hist,msg_names,msg))
})();
var state__37701__auto__ = (function (){var statearr_46099 = f__37700__auto__.call(null);
(statearr_46099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto__);

return statearr_46099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto__,msg_hist,msg_names,msg))
);

return c__37699__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37699__auto___46200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___46200,ch){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___46200,ch){
return (function (state_46183){
var state_val_46184 = (state_46183[(1)]);
if((state_val_46184 === (1))){
var state_46183__$1 = state_46183;
var statearr_46185_46201 = state_46183__$1;
(statearr_46185_46201[(2)] = null);

(statearr_46185_46201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (2))){
var state_46183__$1 = state_46183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46183__$1,(4),ch);
} else {
if((state_val_46184 === (3))){
var inst_46181 = (state_46183[(2)]);
var state_46183__$1 = state_46183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46183__$1,inst_46181);
} else {
if((state_val_46184 === (4))){
var inst_46171 = (state_46183[(7)]);
var inst_46171__$1 = (state_46183[(2)]);
var state_46183__$1 = (function (){var statearr_46186 = state_46183;
(statearr_46186[(7)] = inst_46171__$1);

return statearr_46186;
})();
if(cljs.core.truth_(inst_46171__$1)){
var statearr_46187_46202 = state_46183__$1;
(statearr_46187_46202[(1)] = (5));

} else {
var statearr_46188_46203 = state_46183__$1;
(statearr_46188_46203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (5))){
var inst_46171 = (state_46183[(7)]);
var inst_46173 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46171);
var state_46183__$1 = state_46183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46183__$1,(8),inst_46173);
} else {
if((state_val_46184 === (6))){
var state_46183__$1 = state_46183;
var statearr_46189_46204 = state_46183__$1;
(statearr_46189_46204[(2)] = null);

(statearr_46189_46204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (7))){
var inst_46179 = (state_46183[(2)]);
var state_46183__$1 = state_46183;
var statearr_46190_46205 = state_46183__$1;
(statearr_46190_46205[(2)] = inst_46179);

(statearr_46190_46205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46184 === (8))){
var inst_46175 = (state_46183[(2)]);
var state_46183__$1 = (function (){var statearr_46191 = state_46183;
(statearr_46191[(8)] = inst_46175);

return statearr_46191;
})();
var statearr_46192_46206 = state_46183__$1;
(statearr_46192_46206[(2)] = null);

(statearr_46192_46206[(1)] = (2));


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
});})(c__37699__auto___46200,ch))
;
return ((function (switch__37587__auto__,c__37699__auto___46200,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37588__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37588__auto____0 = (function (){
var statearr_46196 = [null,null,null,null,null,null,null,null,null];
(statearr_46196[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37588__auto__);

(statearr_46196[(1)] = (1));

return statearr_46196;
});
var figwheel$client$heads_up_plugin_$_state_machine__37588__auto____1 = (function (state_46183){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_46183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e46197){if((e46197 instanceof Object)){
var ex__37591__auto__ = e46197;
var statearr_46198_46207 = state_46183;
(statearr_46198_46207[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46208 = state_46183;
state_46183 = G__46208;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37588__auto__ = function(state_46183){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37588__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37588__auto____1.call(this,state_46183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37588__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37588__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___46200,ch))
})();
var state__37701__auto__ = (function (){var statearr_46199 = f__37700__auto__.call(null);
(statearr_46199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___46200);

return statearr_46199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___46200,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto__){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto__){
return (function (state_46229){
var state_val_46230 = (state_46229[(1)]);
if((state_val_46230 === (1))){
var inst_46224 = cljs.core.async.timeout.call(null,(3000));
var state_46229__$1 = state_46229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46229__$1,(2),inst_46224);
} else {
if((state_val_46230 === (2))){
var inst_46226 = (state_46229[(2)]);
var inst_46227 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46229__$1 = (function (){var statearr_46231 = state_46229;
(statearr_46231[(7)] = inst_46226);

return statearr_46231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46229__$1,inst_46227);
} else {
return null;
}
}
});})(c__37699__auto__))
;
return ((function (switch__37587__auto__,c__37699__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37588__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37588__auto____0 = (function (){
var statearr_46235 = [null,null,null,null,null,null,null,null];
(statearr_46235[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37588__auto__);

(statearr_46235[(1)] = (1));

return statearr_46235;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37588__auto____1 = (function (state_46229){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_46229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e46236){if((e46236 instanceof Object)){
var ex__37591__auto__ = e46236;
var statearr_46237_46239 = state_46229;
(statearr_46237_46239[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46240 = state_46229;
state_46229 = G__46240;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37588__auto__ = function(state_46229){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37588__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37588__auto____1.call(this,state_46229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37588__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37588__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto__))
})();
var state__37701__auto__ = (function (){var statearr_46238 = f__37700__auto__.call(null);
(statearr_46238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto__);

return statearr_46238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto__))
);

return c__37699__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto__,figwheel_version,temp__4657__auto__){
return (function (state_46263){
var state_val_46264 = (state_46263[(1)]);
if((state_val_46264 === (1))){
var inst_46257 = cljs.core.async.timeout.call(null,(2000));
var state_46263__$1 = state_46263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46263__$1,(2),inst_46257);
} else {
if((state_val_46264 === (2))){
var inst_46259 = (state_46263[(2)]);
var inst_46260 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_46261 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46260);
var state_46263__$1 = (function (){var statearr_46265 = state_46263;
(statearr_46265[(7)] = inst_46259);

return statearr_46265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46263__$1,inst_46261);
} else {
return null;
}
}
});})(c__37699__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__37587__auto__,c__37699__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto____0 = (function (){
var statearr_46269 = [null,null,null,null,null,null,null,null];
(statearr_46269[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto__);

(statearr_46269[(1)] = (1));

return statearr_46269;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto____1 = (function (state_46263){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_46263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e46270){if((e46270 instanceof Object)){
var ex__37591__auto__ = e46270;
var statearr_46271_46273 = state_46263;
(statearr_46271_46273[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46274 = state_46263;
state_46263 = G__46274;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto__ = function(state_46263){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto____1.call(this,state_46263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto__,figwheel_version,temp__4657__auto__))
})();
var state__37701__auto__ = (function (){var statearr_46272 = f__37700__auto__.call(null);
(statearr_46272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto__);

return statearr_46272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto__,figwheel_version,temp__4657__auto__))
);

return c__37699__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46275){
var map__46279 = p__46275;
var map__46279__$1 = ((((!((map__46279 == null)))?((((map__46279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46279):map__46279);
var file = cljs.core.get.call(null,map__46279__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46279__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46279__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46281 = "";
var G__46281__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__46281),cljs.core.str("file "),cljs.core.str(file)].join(''):G__46281);
var G__46281__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__46281__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__46281__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = line;
if(cljs.core.truth_(and__24860__auto__)){
return column;
} else {
return and__24860__auto__;
}
})())){
return [cljs.core.str(G__46281__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__46281__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46282){
var map__46289 = p__46282;
var map__46289__$1 = ((((!((map__46289 == null)))?((((map__46289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46289):map__46289);
var ed = map__46289__$1;
var formatted_exception = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46291_46295 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46292_46296 = null;
var count__46293_46297 = (0);
var i__46294_46298 = (0);
while(true){
if((i__46294_46298 < count__46293_46297)){
var msg_46299 = cljs.core._nth.call(null,chunk__46292_46296,i__46294_46298);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46299);

var G__46300 = seq__46291_46295;
var G__46301 = chunk__46292_46296;
var G__46302 = count__46293_46297;
var G__46303 = (i__46294_46298 + (1));
seq__46291_46295 = G__46300;
chunk__46292_46296 = G__46301;
count__46293_46297 = G__46302;
i__46294_46298 = G__46303;
continue;
} else {
var temp__4657__auto___46304 = cljs.core.seq.call(null,seq__46291_46295);
if(temp__4657__auto___46304){
var seq__46291_46305__$1 = temp__4657__auto___46304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46291_46305__$1)){
var c__25683__auto___46306 = cljs.core.chunk_first.call(null,seq__46291_46305__$1);
var G__46307 = cljs.core.chunk_rest.call(null,seq__46291_46305__$1);
var G__46308 = c__25683__auto___46306;
var G__46309 = cljs.core.count.call(null,c__25683__auto___46306);
var G__46310 = (0);
seq__46291_46295 = G__46307;
chunk__46292_46296 = G__46308;
count__46293_46297 = G__46309;
i__46294_46298 = G__46310;
continue;
} else {
var msg_46311 = cljs.core.first.call(null,seq__46291_46305__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46311);

var G__46312 = cljs.core.next.call(null,seq__46291_46305__$1);
var G__46313 = null;
var G__46314 = (0);
var G__46315 = (0);
seq__46291_46295 = G__46312;
chunk__46292_46296 = G__46313;
count__46293_46297 = G__46314;
i__46294_46298 = G__46315;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46316){
var map__46319 = p__46316;
var map__46319__$1 = ((((!((map__46319 == null)))?((((map__46319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46319):map__46319);
var w = map__46319__$1;
var message = cljs.core.get.call(null,map__46319__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled2\\out\\figwheel\\client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled2\\out\\figwheel\\client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24860__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24860__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24860__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__46331 = cljs.core.seq.call(null,plugins);
var chunk__46332 = null;
var count__46333 = (0);
var i__46334 = (0);
while(true){
if((i__46334 < count__46333)){
var vec__46335 = cljs.core._nth.call(null,chunk__46332,i__46334);
var k = cljs.core.nth.call(null,vec__46335,(0),null);
var plugin = cljs.core.nth.call(null,vec__46335,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46341 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46331,chunk__46332,count__46333,i__46334,pl_46341,vec__46335,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46341.call(null,msg_hist);
});})(seq__46331,chunk__46332,count__46333,i__46334,pl_46341,vec__46335,k,plugin))
);
} else {
}

var G__46342 = seq__46331;
var G__46343 = chunk__46332;
var G__46344 = count__46333;
var G__46345 = (i__46334 + (1));
seq__46331 = G__46342;
chunk__46332 = G__46343;
count__46333 = G__46344;
i__46334 = G__46345;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46331);
if(temp__4657__auto__){
var seq__46331__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46331__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__46331__$1);
var G__46346 = cljs.core.chunk_rest.call(null,seq__46331__$1);
var G__46347 = c__25683__auto__;
var G__46348 = cljs.core.count.call(null,c__25683__auto__);
var G__46349 = (0);
seq__46331 = G__46346;
chunk__46332 = G__46347;
count__46333 = G__46348;
i__46334 = G__46349;
continue;
} else {
var vec__46338 = cljs.core.first.call(null,seq__46331__$1);
var k = cljs.core.nth.call(null,vec__46338,(0),null);
var plugin = cljs.core.nth.call(null,vec__46338,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46350 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46331,chunk__46332,count__46333,i__46334,pl_46350,vec__46338,k,plugin,seq__46331__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46350.call(null,msg_hist);
});})(seq__46331,chunk__46332,count__46333,i__46334,pl_46350,vec__46338,k,plugin,seq__46331__$1,temp__4657__auto__))
);
} else {
}

var G__46351 = cljs.core.next.call(null,seq__46331__$1);
var G__46352 = null;
var G__46353 = (0);
var G__46354 = (0);
seq__46331 = G__46351;
chunk__46332 = G__46352;
count__46333 = G__46353;
i__46334 = G__46354;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args46355 = [];
var len__25947__auto___46362 = arguments.length;
var i__25948__auto___46363 = (0);
while(true){
if((i__25948__auto___46363 < len__25947__auto___46362)){
args46355.push((arguments[i__25948__auto___46363]));

var G__46364 = (i__25948__auto___46363 + (1));
i__25948__auto___46363 = G__46364;
continue;
} else {
}
break;
}

var G__46357 = args46355.length;
switch (G__46357) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46355.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__46358_46366 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__46359_46367 = null;
var count__46360_46368 = (0);
var i__46361_46369 = (0);
while(true){
if((i__46361_46369 < count__46360_46368)){
var msg_46370 = cljs.core._nth.call(null,chunk__46359_46367,i__46361_46369);
figwheel.client.socket.handle_incoming_message.call(null,msg_46370);

var G__46371 = seq__46358_46366;
var G__46372 = chunk__46359_46367;
var G__46373 = count__46360_46368;
var G__46374 = (i__46361_46369 + (1));
seq__46358_46366 = G__46371;
chunk__46359_46367 = G__46372;
count__46360_46368 = G__46373;
i__46361_46369 = G__46374;
continue;
} else {
var temp__4657__auto___46375 = cljs.core.seq.call(null,seq__46358_46366);
if(temp__4657__auto___46375){
var seq__46358_46376__$1 = temp__4657__auto___46375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46358_46376__$1)){
var c__25683__auto___46377 = cljs.core.chunk_first.call(null,seq__46358_46376__$1);
var G__46378 = cljs.core.chunk_rest.call(null,seq__46358_46376__$1);
var G__46379 = c__25683__auto___46377;
var G__46380 = cljs.core.count.call(null,c__25683__auto___46377);
var G__46381 = (0);
seq__46358_46366 = G__46378;
chunk__46359_46367 = G__46379;
count__46360_46368 = G__46380;
i__46361_46369 = G__46381;
continue;
} else {
var msg_46382 = cljs.core.first.call(null,seq__46358_46376__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_46382);

var G__46383 = cljs.core.next.call(null,seq__46358_46376__$1);
var G__46384 = null;
var G__46385 = (0);
var G__46386 = (0);
seq__46358_46366 = G__46383;
chunk__46359_46367 = G__46384;
count__46360_46368 = G__46385;
i__46361_46369 = G__46386;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25954__auto__ = [];
var len__25947__auto___46391 = arguments.length;
var i__25948__auto___46392 = (0);
while(true){
if((i__25948__auto___46392 < len__25947__auto___46391)){
args__25954__auto__.push((arguments[i__25948__auto___46392]));

var G__46393 = (i__25948__auto___46392 + (1));
i__25948__auto___46392 = G__46393;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46388){
var map__46389 = p__46388;
var map__46389__$1 = ((((!((map__46389 == null)))?((((map__46389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46389):map__46389);
var opts = map__46389__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46387){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46387));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e46395){if((e46395 instanceof Error)){
var e = e46395;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e46395;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__46399){
var map__46400 = p__46399;
var map__46400__$1 = ((((!((map__46400 == null)))?((((map__46400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46400):map__46400);
var msg_name = cljs.core.get.call(null,map__46400__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484804423107