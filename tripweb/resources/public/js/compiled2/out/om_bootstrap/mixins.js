// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om_tools.mixin');
goog.require('schema.core');
var ufv___40565 = schema.utils.use_fn_validation;
var output_schema40558_40566 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema40559_40567 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null))),schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null))], null)))], null);
var input_checker40560_40568 = schema.core.checker.call(null,input_schema40559_40567);
var output_checker40561_40569 = schema.core.checker.call(null,output_schema40558_40566);
/**
 * Inputs: [target :- s/Any event-type :- s/Str callback :- (s/=> s/Any s/Any)]
 *   Returns: (s/=> s/Any)
 * 
 *   Registers the callback on the supplied target for events of type
 * `event-type`. Returns a function of no arguments that, when called,
 * unregisters the callback.
 */
om_bootstrap.mixins.event_listener = ((function (ufv___40565,output_schema40558_40566,input_schema40559_40567,input_checker40560_40568,output_checker40561_40569){
return (function om_bootstrap$mixins$event_listener(G__40562,G__40563,G__40564){
var validate__32480__auto__ = ufv___40565.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___40570 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40562,G__40563,G__40564], null);
var temp__4657__auto___40571 = input_checker40560_40568.call(null,args__32481__auto___40570);
if(cljs.core.truth_(temp__4657__auto___40571)){
var error__32482__auto___40572 = temp__4657__auto___40571;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__32482__auto___40572)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema40559_40567,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___40570,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40572], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var target = G__40562;
var event_type = G__40563;
var callback = G__40564;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__32480__auto__,ufv___40565,output_schema40558_40566,input_schema40559_40567,input_checker40560_40568,output_checker40561_40569){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__32480__auto__,ufv___40565,output_schema40558_40566,input_schema40559_40567,input_checker40560_40568,output_checker40561_40569))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__32480__auto__,ufv___40565,output_schema40558_40566,input_schema40559_40567,input_checker40560_40568,output_checker40561_40569){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__32480__auto__,ufv___40565,output_schema40558_40566,input_schema40559_40567,input_checker40560_40568,output_checker40561_40569))
} else {
return ((function (validate__32480__auto__,ufv___40565,output_schema40558_40566,input_schema40559_40567,input_checker40560_40568,output_checker40561_40569){
return (function (){
return null;
});
;})(validate__32480__auto__,ufv___40565,output_schema40558_40566,input_schema40559_40567,input_checker40560_40568,output_checker40561_40569))

}
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___40573 = output_checker40561_40569.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___40573)){
var error__32482__auto___40574 = temp__4657__auto___40573;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","=>","s/=>",-813269628,null),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Registers the callback on the supplied target for events of type\n   `event-type`. Returns a function of no arguments that, when called,\n   unregisters the callback."], null)),cljs.core.pr_str.call(null,error__32482__auto___40574)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema40558_40566,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___40574], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___40565,output_schema40558_40566,input_schema40559_40567,input_checker40560_40568,output_checker40561_40569))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema40558_40566,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40559_40567], null)));
/**
 * Handles a sequence of listeners for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_listener_mixin = {"componentWillMount": (function (){
var this40575 = this;
return ((function (this40575){
return (function (owner){
return owner.listeners = [];
});})(this40575))
.call(null,this40575);
}), "componentWillUnmount": (function (){
var this40576 = this;
return ((function (this40576){
return (function (owner){
var seq__40581 = cljs.core.seq.call(null,owner.listeners);
var chunk__40582 = null;
var count__40583 = (0);
var i__40584 = (0);
while(true){
if((i__40584 < count__40583)){
var l = cljs.core._nth.call(null,chunk__40582,i__40584);
l.call(null);

var G__40585 = seq__40581;
var G__40586 = chunk__40582;
var G__40587 = count__40583;
var G__40588 = (i__40584 + (1));
seq__40581 = G__40585;
chunk__40582 = G__40586;
count__40583 = G__40587;
i__40584 = G__40588;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40581);
if(temp__4657__auto__){
var seq__40581__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40581__$1)){
var c__25683__auto__ = cljs.core.chunk_first.call(null,seq__40581__$1);
var G__40589 = cljs.core.chunk_rest.call(null,seq__40581__$1);
var G__40590 = c__25683__auto__;
var G__40591 = cljs.core.count.call(null,c__25683__auto__);
var G__40592 = (0);
seq__40581 = G__40589;
chunk__40582 = G__40590;
count__40583 = G__40591;
i__40584 = G__40592;
continue;
} else {
var l = cljs.core.first.call(null,seq__40581__$1);
l.call(null);

var G__40593 = cljs.core.next.call(null,seq__40581__$1);
var G__40594 = null;
var G__40595 = (0);
var G__40596 = (0);
seq__40581 = G__40593;
chunk__40582 = G__40594;
count__40583 = G__40595;
i__40584 = G__40596;
continue;
}
} else {
return null;
}
}
break;
}
});})(this40576))
.call(null,this40576);
}), "set_listener": (function (target40578,event_type40579,callback40580){
var this40577 = this;
return ((function (this40577){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this40577))
.call(null,this40577,target40578,event_type40579,callback40580);
})};
/**
 * Handles a sequence of timeouts for the component, and removes them
 * from the document when the component is unmounted.
 */
om_bootstrap.mixins.set_timeout_mixin = {"componentWillMount": (function (){
var this40598 = this;
return ((function (this40598){
return (function (owner){
return owner.timeouts = [];
});})(this40598))
.call(null,this40598);
}), "componentWillUnmount": (function (){
var this40599 = this;
return ((function (this40599){
return (function (owner){
return owner.timeouts.map(((function (this40599){
return (function (p1__40597_SHARP_){
return clearTimeout(p1__40597_SHARP_);
});})(this40599))
);
});})(this40599))
.call(null,this40599);
}), "set_timeout": (function (f40601,timeout40602){
var this40600 = this;
return ((function (this40600){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this40600))
.call(null,this40600,f40601,timeout40602);
})};
/**
 * Accepts two DOM elements; returns true if the supplied node is
 *   nested inside the supplied root, false otherwise.
 */
om_bootstrap.mixins.in_root_QMARK_ = (function om_bootstrap$mixins$in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__40603 = node__$1.parentNode;
node__$1 = G__40603;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
 * For dropdowns, binds a handler for that sets the dropdown-mixin's
 *   `:open?` state to false if the user clicks outside the owning
 *   component OR hits the escape key.
 */
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(cljs.core.truth_(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner)))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
 * If they're present on the owning object, removes the listeners
 *   registered by the dropdown mixin.
 */
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function om_bootstrap$mixins$unbind_root_close_handlers_BANG_(owner){
var temp__4657__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4657__auto__)){
var listeners = temp__4657__auto__;
var seq__40608_40612 = cljs.core.seq.call(null,listeners);
var chunk__40609_40613 = null;
var count__40610_40614 = (0);
var i__40611_40615 = (0);
while(true){
if((i__40611_40615 < count__40610_40614)){
var l_40616 = cljs.core._nth.call(null,chunk__40609_40613,i__40611_40615);
l_40616.call(null);

var G__40617 = seq__40608_40612;
var G__40618 = chunk__40609_40613;
var G__40619 = count__40610_40614;
var G__40620 = (i__40611_40615 + (1));
seq__40608_40612 = G__40617;
chunk__40609_40613 = G__40618;
count__40610_40614 = G__40619;
i__40611_40615 = G__40620;
continue;
} else {
var temp__4657__auto___40621__$1 = cljs.core.seq.call(null,seq__40608_40612);
if(temp__4657__auto___40621__$1){
var seq__40608_40622__$1 = temp__4657__auto___40621__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40608_40622__$1)){
var c__25683__auto___40623 = cljs.core.chunk_first.call(null,seq__40608_40622__$1);
var G__40624 = cljs.core.chunk_rest.call(null,seq__40608_40622__$1);
var G__40625 = c__25683__auto___40623;
var G__40626 = cljs.core.count.call(null,c__25683__auto___40623);
var G__40627 = (0);
seq__40608_40612 = G__40624;
chunk__40609_40613 = G__40625;
count__40610_40614 = G__40626;
i__40611_40615 = G__40627;
continue;
} else {
var l_40628 = cljs.core.first.call(null,seq__40608_40622__$1);
l_40628.call(null);

var G__40629 = cljs.core.next.call(null,seq__40608_40622__$1);
var G__40630 = null;
var G__40631 = (0);
var G__40632 = (0);
seq__40608_40612 = G__40629;
chunk__40609_40613 = G__40630;
count__40610_40614 = G__40631;
i__40611_40615 = G__40632;
continue;
}
} else {
}
}
break;
}

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
 * Mixin that manages a single piece of state - :open?. If a user
 *   clicks outside the component's owning dom element OR hits the escape
 *   key, the state will jump back to false.
 * 
 *   Down the road this may need to register a callback when the state
 *   changes.
 */
om_bootstrap.mixins.dropdown_mixin = {"getInitialState": (function (){
var this40633 = this;
return ((function (this40633){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this40633))
.call(null,this40633);
}), "componentWillUnmount": (function (){
var this40634 = this;
return ((function (this40634){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this40634))
.call(null,this40634);
}), "isDropdownOpen": (function (){
var this40635 = this;
return ((function (this40635){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this40635))
.call(null,this40635);
}), "setDropdownState": (function (open_QMARK_40637){
var this40636 = this;
return ((function (this40636){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this40636))
.call(null,this40636,open_QMARK_40637);
})};
/**
 * Mixin that enables collapsible Panels. Similar to the Dropdown
 * Mixin it only manages a single piece of state - :collapsed?. The Panel
 * is opened and closen by clicking on the header.
 */
om_bootstrap.mixins.collapsible_mixin = {"getInitialState": (function (){
var this40638 = this;
return ((function (this40638){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null);
});})(this40638))
.call(null,this40638);
}), "isPanelCollapsed": (function (){
var this40639 = this;
return ((function (this40639){
return (function (owner){
var collapsed_QMARK_ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
if((collapsed_QMARK_ == null)){
om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true);

return true;
} else {
return collapsed_QMARK_;
}
});})(this40639))
.call(null,this40639);
}), "toggleCollapsed": (function (){
var this40640 = this;
return ((function (this40640){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this40640))
.call(null,this40640);
})};

//# sourceMappingURL=mixins.js.map?rel=1484804412732