// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37744 = [];
var len__25947__auto___37750 = arguments.length;
var i__25948__auto___37751 = (0);
while(true){
if((i__25948__auto___37751 < len__25947__auto___37750)){
args37744.push((arguments[i__25948__auto___37751]));

var G__37752 = (i__25948__auto___37751 + (1));
i__25948__auto___37751 = G__37752;
continue;
} else {
}
break;
}

var G__37746 = args37744.length;
switch (G__37746) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37744.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37747 = (function (f,blockable,meta37748){
this.f = f;
this.blockable = blockable;
this.meta37748 = meta37748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37749,meta37748__$1){
var self__ = this;
var _37749__$1 = this;
return (new cljs.core.async.t_cljs$core$async37747(self__.f,self__.blockable,meta37748__$1));
});

cljs.core.async.t_cljs$core$async37747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37749){
var self__ = this;
var _37749__$1 = this;
return self__.meta37748;
});

cljs.core.async.t_cljs$core$async37747.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37747.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37748","meta37748",-766054761,null)], null);
});

cljs.core.async.t_cljs$core$async37747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37747";

cljs.core.async.t_cljs$core$async37747.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async37747");
});

cljs.core.async.__GT_t_cljs$core$async37747 = (function cljs$core$async$__GT_t_cljs$core$async37747(f__$1,blockable__$1,meta37748){
return (new cljs.core.async.t_cljs$core$async37747(f__$1,blockable__$1,meta37748));
});

}

return (new cljs.core.async.t_cljs$core$async37747(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args37756 = [];
var len__25947__auto___37759 = arguments.length;
var i__25948__auto___37760 = (0);
while(true){
if((i__25948__auto___37760 < len__25947__auto___37759)){
args37756.push((arguments[i__25948__auto___37760]));

var G__37761 = (i__25948__auto___37760 + (1));
i__25948__auto___37760 = G__37761;
continue;
} else {
}
break;
}

var G__37758 = args37756.length;
switch (G__37758) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37756.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37763 = [];
var len__25947__auto___37766 = arguments.length;
var i__25948__auto___37767 = (0);
while(true){
if((i__25948__auto___37767 < len__25947__auto___37766)){
args37763.push((arguments[i__25948__auto___37767]));

var G__37768 = (i__25948__auto___37767 + (1));
i__25948__auto___37767 = G__37768;
continue;
} else {
}
break;
}

var G__37765 = args37763.length;
switch (G__37765) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37763.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37770 = [];
var len__25947__auto___37773 = arguments.length;
var i__25948__auto___37774 = (0);
while(true){
if((i__25948__auto___37774 < len__25947__auto___37773)){
args37770.push((arguments[i__25948__auto___37774]));

var G__37775 = (i__25948__auto___37774 + (1));
i__25948__auto___37774 = G__37775;
continue;
} else {
}
break;
}

var G__37772 = args37770.length;
switch (G__37772) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37770.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37777 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37777);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37777,ret){
return (function (){
return fn1.call(null,val_37777);
});})(val_37777,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37778 = [];
var len__25947__auto___37781 = arguments.length;
var i__25948__auto___37782 = (0);
while(true){
if((i__25948__auto___37782 < len__25947__auto___37781)){
args37778.push((arguments[i__25948__auto___37782]));

var G__37783 = (i__25948__auto___37782 + (1));
i__25948__auto___37782 = G__37783;
continue;
} else {
}
break;
}

var G__37780 = args37778.length;
switch (G__37780) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37778.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25787__auto___37785 = n;
var x_37786 = (0);
while(true){
if((x_37786 < n__25787__auto___37785)){
(a[x_37786] = (0));

var G__37787 = (x_37786 + (1));
x_37786 = G__37787;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37788 = (i + (1));
i = G__37788;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37792 = (function (alt_flag,flag,meta37793){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37793 = meta37793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37794,meta37793__$1){
var self__ = this;
var _37794__$1 = this;
return (new cljs.core.async.t_cljs$core$async37792(self__.alt_flag,self__.flag,meta37793__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37794){
var self__ = this;
var _37794__$1 = this;
return self__.meta37793;
});})(flag))
;

cljs.core.async.t_cljs$core$async37792.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37792.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37792.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37793","meta37793",-745786669,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37792";

cljs.core.async.t_cljs$core$async37792.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async37792");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37792 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37792(alt_flag__$1,flag__$1,meta37793){
return (new cljs.core.async.t_cljs$core$async37792(alt_flag__$1,flag__$1,meta37793));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37792(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37798 = (function (alt_handler,flag,cb,meta37799){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37799 = meta37799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37800,meta37799__$1){
var self__ = this;
var _37800__$1 = this;
return (new cljs.core.async.t_cljs$core$async37798(self__.alt_handler,self__.flag,self__.cb,meta37799__$1));
});

cljs.core.async.t_cljs$core$async37798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37800){
var self__ = this;
var _37800__$1 = this;
return self__.meta37799;
});

cljs.core.async.t_cljs$core$async37798.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37799","meta37799",68309487,null)], null);
});

cljs.core.async.t_cljs$core$async37798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37798";

cljs.core.async.t_cljs$core$async37798.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async37798");
});

cljs.core.async.__GT_t_cljs$core$async37798 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37798(alt_handler__$1,flag__$1,cb__$1,meta37799){
return (new cljs.core.async.t_cljs$core$async37798(alt_handler__$1,flag__$1,cb__$1,meta37799));
});

}

return (new cljs.core.async.t_cljs$core$async37798(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37801_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37801_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37802_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37802_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24872__auto__ = wport;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37803 = (i + (1));
i = G__37803;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24872__auto__ = ret;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24860__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24860__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___37809 = arguments.length;
var i__25948__auto___37810 = (0);
while(true){
if((i__25948__auto___37810 < len__25947__auto___37809)){
args__25954__auto__.push((arguments[i__25948__auto___37810]));

var G__37811 = (i__25948__auto___37810 + (1));
i__25948__auto___37810 = G__37811;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37806){
var map__37807 = p__37806;
var map__37807__$1 = ((((!((map__37807 == null)))?((((map__37807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37807):map__37807);
var opts = map__37807__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37804){
var G__37805 = cljs.core.first.call(null,seq37804);
var seq37804__$1 = cljs.core.next.call(null,seq37804);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37805,seq37804__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37812 = [];
var len__25947__auto___37862 = arguments.length;
var i__25948__auto___37863 = (0);
while(true){
if((i__25948__auto___37863 < len__25947__auto___37862)){
args37812.push((arguments[i__25948__auto___37863]));

var G__37864 = (i__25948__auto___37863 + (1));
i__25948__auto___37863 = G__37864;
continue;
} else {
}
break;
}

var G__37814 = args37812.length;
switch (G__37814) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37812.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37699__auto___37866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___37866){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___37866){
return (function (state_37838){
var state_val_37839 = (state_37838[(1)]);
if((state_val_37839 === (7))){
var inst_37834 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
var statearr_37840_37867 = state_37838__$1;
(statearr_37840_37867[(2)] = inst_37834);

(statearr_37840_37867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (1))){
var state_37838__$1 = state_37838;
var statearr_37841_37868 = state_37838__$1;
(statearr_37841_37868[(2)] = null);

(statearr_37841_37868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (4))){
var inst_37817 = (state_37838[(7)]);
var inst_37817__$1 = (state_37838[(2)]);
var inst_37818 = (inst_37817__$1 == null);
var state_37838__$1 = (function (){var statearr_37842 = state_37838;
(statearr_37842[(7)] = inst_37817__$1);

return statearr_37842;
})();
if(cljs.core.truth_(inst_37818)){
var statearr_37843_37869 = state_37838__$1;
(statearr_37843_37869[(1)] = (5));

} else {
var statearr_37844_37870 = state_37838__$1;
(statearr_37844_37870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (13))){
var state_37838__$1 = state_37838;
var statearr_37845_37871 = state_37838__$1;
(statearr_37845_37871[(2)] = null);

(statearr_37845_37871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (6))){
var inst_37817 = (state_37838[(7)]);
var state_37838__$1 = state_37838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37838__$1,(11),to,inst_37817);
} else {
if((state_val_37839 === (3))){
var inst_37836 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37838__$1,inst_37836);
} else {
if((state_val_37839 === (12))){
var state_37838__$1 = state_37838;
var statearr_37846_37872 = state_37838__$1;
(statearr_37846_37872[(2)] = null);

(statearr_37846_37872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (2))){
var state_37838__$1 = state_37838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37838__$1,(4),from);
} else {
if((state_val_37839 === (11))){
var inst_37827 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
if(cljs.core.truth_(inst_37827)){
var statearr_37847_37873 = state_37838__$1;
(statearr_37847_37873[(1)] = (12));

} else {
var statearr_37848_37874 = state_37838__$1;
(statearr_37848_37874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (9))){
var state_37838__$1 = state_37838;
var statearr_37849_37875 = state_37838__$1;
(statearr_37849_37875[(2)] = null);

(statearr_37849_37875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (5))){
var state_37838__$1 = state_37838;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37850_37876 = state_37838__$1;
(statearr_37850_37876[(1)] = (8));

} else {
var statearr_37851_37877 = state_37838__$1;
(statearr_37851_37877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (14))){
var inst_37832 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
var statearr_37852_37878 = state_37838__$1;
(statearr_37852_37878[(2)] = inst_37832);

(statearr_37852_37878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (10))){
var inst_37824 = (state_37838[(2)]);
var state_37838__$1 = state_37838;
var statearr_37853_37879 = state_37838__$1;
(statearr_37853_37879[(2)] = inst_37824);

(statearr_37853_37879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37839 === (8))){
var inst_37821 = cljs.core.async.close_BANG_.call(null,to);
var state_37838__$1 = state_37838;
var statearr_37854_37880 = state_37838__$1;
(statearr_37854_37880[(2)] = inst_37821);

(statearr_37854_37880[(1)] = (10));


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
});})(c__37699__auto___37866))
;
return ((function (switch__37587__auto__,c__37699__auto___37866){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_37858 = [null,null,null,null,null,null,null,null];
(statearr_37858[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_37858[(1)] = (1));

return statearr_37858;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_37838){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_37838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e37859){if((e37859 instanceof Object)){
var ex__37591__auto__ = e37859;
var statearr_37860_37881 = state_37838;
(statearr_37860_37881[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37882 = state_37838;
state_37838 = G__37882;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_37838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_37838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___37866))
})();
var state__37701__auto__ = (function (){var statearr_37861 = f__37700__auto__.call(null);
(statearr_37861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___37866);

return statearr_37861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___37866))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38070){
var vec__38071 = p__38070;
var v = cljs.core.nth.call(null,vec__38071,(0),null);
var p = cljs.core.nth.call(null,vec__38071,(1),null);
var job = vec__38071;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37699__auto___38257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___38257,res,vec__38071,v,p,job,jobs,results){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___38257,res,vec__38071,v,p,job,jobs,results){
return (function (state_38078){
var state_val_38079 = (state_38078[(1)]);
if((state_val_38079 === (1))){
var state_38078__$1 = state_38078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38078__$1,(2),res,v);
} else {
if((state_val_38079 === (2))){
var inst_38075 = (state_38078[(2)]);
var inst_38076 = cljs.core.async.close_BANG_.call(null,res);
var state_38078__$1 = (function (){var statearr_38080 = state_38078;
(statearr_38080[(7)] = inst_38075);

return statearr_38080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38078__$1,inst_38076);
} else {
return null;
}
}
});})(c__37699__auto___38257,res,vec__38071,v,p,job,jobs,results))
;
return ((function (switch__37587__auto__,c__37699__auto___38257,res,vec__38071,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0 = (function (){
var statearr_38084 = [null,null,null,null,null,null,null,null];
(statearr_38084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__);

(statearr_38084[(1)] = (1));

return statearr_38084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1 = (function (state_38078){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_38078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e38085){if((e38085 instanceof Object)){
var ex__37591__auto__ = e38085;
var statearr_38086_38258 = state_38078;
(statearr_38086_38258[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38259 = state_38078;
state_38078 = G__38259;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = function(state_38078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1.call(this,state_38078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___38257,res,vec__38071,v,p,job,jobs,results))
})();
var state__37701__auto__ = (function (){var statearr_38087 = f__37700__auto__.call(null);
(statearr_38087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___38257);

return statearr_38087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___38257,res,vec__38071,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38088){
var vec__38089 = p__38088;
var v = cljs.core.nth.call(null,vec__38089,(0),null);
var p = cljs.core.nth.call(null,vec__38089,(1),null);
var job = vec__38089;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25787__auto___38260 = n;
var __38261 = (0);
while(true){
if((__38261 < n__25787__auto___38260)){
var G__38092_38262 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38092_38262) {
case "compute":
var c__37699__auto___38264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38261,c__37699__auto___38264,G__38092_38262,n__25787__auto___38260,jobs,results,process,async){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (__38261,c__37699__auto___38264,G__38092_38262,n__25787__auto___38260,jobs,results,process,async){
return (function (state_38105){
var state_val_38106 = (state_38105[(1)]);
if((state_val_38106 === (1))){
var state_38105__$1 = state_38105;
var statearr_38107_38265 = state_38105__$1;
(statearr_38107_38265[(2)] = null);

(statearr_38107_38265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (2))){
var state_38105__$1 = state_38105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38105__$1,(4),jobs);
} else {
if((state_val_38106 === (3))){
var inst_38103 = (state_38105[(2)]);
var state_38105__$1 = state_38105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38105__$1,inst_38103);
} else {
if((state_val_38106 === (4))){
var inst_38095 = (state_38105[(2)]);
var inst_38096 = process.call(null,inst_38095);
var state_38105__$1 = state_38105;
if(cljs.core.truth_(inst_38096)){
var statearr_38108_38266 = state_38105__$1;
(statearr_38108_38266[(1)] = (5));

} else {
var statearr_38109_38267 = state_38105__$1;
(statearr_38109_38267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (5))){
var state_38105__$1 = state_38105;
var statearr_38110_38268 = state_38105__$1;
(statearr_38110_38268[(2)] = null);

(statearr_38110_38268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (6))){
var state_38105__$1 = state_38105;
var statearr_38111_38269 = state_38105__$1;
(statearr_38111_38269[(2)] = null);

(statearr_38111_38269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38106 === (7))){
var inst_38101 = (state_38105[(2)]);
var state_38105__$1 = state_38105;
var statearr_38112_38270 = state_38105__$1;
(statearr_38112_38270[(2)] = inst_38101);

(statearr_38112_38270[(1)] = (3));


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
});})(__38261,c__37699__auto___38264,G__38092_38262,n__25787__auto___38260,jobs,results,process,async))
;
return ((function (__38261,switch__37587__auto__,c__37699__auto___38264,G__38092_38262,n__25787__auto___38260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0 = (function (){
var statearr_38116 = [null,null,null,null,null,null,null];
(statearr_38116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__);

(statearr_38116[(1)] = (1));

return statearr_38116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1 = (function (state_38105){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_38105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e38117){if((e38117 instanceof Object)){
var ex__37591__auto__ = e38117;
var statearr_38118_38271 = state_38105;
(statearr_38118_38271[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38272 = state_38105;
state_38105 = G__38272;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = function(state_38105){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1.call(this,state_38105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__;
})()
;})(__38261,switch__37587__auto__,c__37699__auto___38264,G__38092_38262,n__25787__auto___38260,jobs,results,process,async))
})();
var state__37701__auto__ = (function (){var statearr_38119 = f__37700__auto__.call(null);
(statearr_38119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___38264);

return statearr_38119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(__38261,c__37699__auto___38264,G__38092_38262,n__25787__auto___38260,jobs,results,process,async))
);


break;
case "async":
var c__37699__auto___38273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38261,c__37699__auto___38273,G__38092_38262,n__25787__auto___38260,jobs,results,process,async){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (__38261,c__37699__auto___38273,G__38092_38262,n__25787__auto___38260,jobs,results,process,async){
return (function (state_38132){
var state_val_38133 = (state_38132[(1)]);
if((state_val_38133 === (1))){
var state_38132__$1 = state_38132;
var statearr_38134_38274 = state_38132__$1;
(statearr_38134_38274[(2)] = null);

(statearr_38134_38274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (2))){
var state_38132__$1 = state_38132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38132__$1,(4),jobs);
} else {
if((state_val_38133 === (3))){
var inst_38130 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38132__$1,inst_38130);
} else {
if((state_val_38133 === (4))){
var inst_38122 = (state_38132[(2)]);
var inst_38123 = async.call(null,inst_38122);
var state_38132__$1 = state_38132;
if(cljs.core.truth_(inst_38123)){
var statearr_38135_38275 = state_38132__$1;
(statearr_38135_38275[(1)] = (5));

} else {
var statearr_38136_38276 = state_38132__$1;
(statearr_38136_38276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (5))){
var state_38132__$1 = state_38132;
var statearr_38137_38277 = state_38132__$1;
(statearr_38137_38277[(2)] = null);

(statearr_38137_38277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (6))){
var state_38132__$1 = state_38132;
var statearr_38138_38278 = state_38132__$1;
(statearr_38138_38278[(2)] = null);

(statearr_38138_38278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (7))){
var inst_38128 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
var statearr_38139_38279 = state_38132__$1;
(statearr_38139_38279[(2)] = inst_38128);

(statearr_38139_38279[(1)] = (3));


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
});})(__38261,c__37699__auto___38273,G__38092_38262,n__25787__auto___38260,jobs,results,process,async))
;
return ((function (__38261,switch__37587__auto__,c__37699__auto___38273,G__38092_38262,n__25787__auto___38260,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0 = (function (){
var statearr_38143 = [null,null,null,null,null,null,null];
(statearr_38143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__);

(statearr_38143[(1)] = (1));

return statearr_38143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1 = (function (state_38132){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_38132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e38144){if((e38144 instanceof Object)){
var ex__37591__auto__ = e38144;
var statearr_38145_38280 = state_38132;
(statearr_38145_38280[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38281 = state_38132;
state_38132 = G__38281;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = function(state_38132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1.call(this,state_38132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__;
})()
;})(__38261,switch__37587__auto__,c__37699__auto___38273,G__38092_38262,n__25787__auto___38260,jobs,results,process,async))
})();
var state__37701__auto__ = (function (){var statearr_38146 = f__37700__auto__.call(null);
(statearr_38146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___38273);

return statearr_38146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(__38261,c__37699__auto___38273,G__38092_38262,n__25787__auto___38260,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38282 = (__38261 + (1));
__38261 = G__38282;
continue;
} else {
}
break;
}

var c__37699__auto___38283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___38283,jobs,results,process,async){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___38283,jobs,results,process,async){
return (function (state_38168){
var state_val_38169 = (state_38168[(1)]);
if((state_val_38169 === (1))){
var state_38168__$1 = state_38168;
var statearr_38170_38284 = state_38168__$1;
(statearr_38170_38284[(2)] = null);

(statearr_38170_38284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38169 === (2))){
var state_38168__$1 = state_38168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38168__$1,(4),from);
} else {
if((state_val_38169 === (3))){
var inst_38166 = (state_38168[(2)]);
var state_38168__$1 = state_38168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38168__$1,inst_38166);
} else {
if((state_val_38169 === (4))){
var inst_38149 = (state_38168[(7)]);
var inst_38149__$1 = (state_38168[(2)]);
var inst_38150 = (inst_38149__$1 == null);
var state_38168__$1 = (function (){var statearr_38171 = state_38168;
(statearr_38171[(7)] = inst_38149__$1);

return statearr_38171;
})();
if(cljs.core.truth_(inst_38150)){
var statearr_38172_38285 = state_38168__$1;
(statearr_38172_38285[(1)] = (5));

} else {
var statearr_38173_38286 = state_38168__$1;
(statearr_38173_38286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38169 === (5))){
var inst_38152 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38168__$1 = state_38168;
var statearr_38174_38287 = state_38168__$1;
(statearr_38174_38287[(2)] = inst_38152);

(statearr_38174_38287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38169 === (6))){
var inst_38154 = (state_38168[(8)]);
var inst_38149 = (state_38168[(7)]);
var inst_38154__$1 = cljs.core.async.chan.call(null,(1));
var inst_38155 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38156 = [inst_38149,inst_38154__$1];
var inst_38157 = (new cljs.core.PersistentVector(null,2,(5),inst_38155,inst_38156,null));
var state_38168__$1 = (function (){var statearr_38175 = state_38168;
(statearr_38175[(8)] = inst_38154__$1);

return statearr_38175;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38168__$1,(8),jobs,inst_38157);
} else {
if((state_val_38169 === (7))){
var inst_38164 = (state_38168[(2)]);
var state_38168__$1 = state_38168;
var statearr_38176_38288 = state_38168__$1;
(statearr_38176_38288[(2)] = inst_38164);

(statearr_38176_38288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38169 === (8))){
var inst_38154 = (state_38168[(8)]);
var inst_38159 = (state_38168[(2)]);
var state_38168__$1 = (function (){var statearr_38177 = state_38168;
(statearr_38177[(9)] = inst_38159);

return statearr_38177;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38168__$1,(9),results,inst_38154);
} else {
if((state_val_38169 === (9))){
var inst_38161 = (state_38168[(2)]);
var state_38168__$1 = (function (){var statearr_38178 = state_38168;
(statearr_38178[(10)] = inst_38161);

return statearr_38178;
})();
var statearr_38179_38289 = state_38168__$1;
(statearr_38179_38289[(2)] = null);

(statearr_38179_38289[(1)] = (2));


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
});})(c__37699__auto___38283,jobs,results,process,async))
;
return ((function (switch__37587__auto__,c__37699__auto___38283,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0 = (function (){
var statearr_38183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__);

(statearr_38183[(1)] = (1));

return statearr_38183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1 = (function (state_38168){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_38168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e38184){if((e38184 instanceof Object)){
var ex__37591__auto__ = e38184;
var statearr_38185_38290 = state_38168;
(statearr_38185_38290[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38291 = state_38168;
state_38168 = G__38291;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = function(state_38168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1.call(this,state_38168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___38283,jobs,results,process,async))
})();
var state__37701__auto__ = (function (){var statearr_38186 = f__37700__auto__.call(null);
(statearr_38186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___38283);

return statearr_38186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___38283,jobs,results,process,async))
);


var c__37699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto__,jobs,results,process,async){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto__,jobs,results,process,async){
return (function (state_38224){
var state_val_38225 = (state_38224[(1)]);
if((state_val_38225 === (7))){
var inst_38220 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38226_38292 = state_38224__$1;
(statearr_38226_38292[(2)] = inst_38220);

(statearr_38226_38292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (20))){
var state_38224__$1 = state_38224;
var statearr_38227_38293 = state_38224__$1;
(statearr_38227_38293[(2)] = null);

(statearr_38227_38293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (1))){
var state_38224__$1 = state_38224;
var statearr_38228_38294 = state_38224__$1;
(statearr_38228_38294[(2)] = null);

(statearr_38228_38294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (4))){
var inst_38189 = (state_38224[(7)]);
var inst_38189__$1 = (state_38224[(2)]);
var inst_38190 = (inst_38189__$1 == null);
var state_38224__$1 = (function (){var statearr_38229 = state_38224;
(statearr_38229[(7)] = inst_38189__$1);

return statearr_38229;
})();
if(cljs.core.truth_(inst_38190)){
var statearr_38230_38295 = state_38224__$1;
(statearr_38230_38295[(1)] = (5));

} else {
var statearr_38231_38296 = state_38224__$1;
(statearr_38231_38296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (15))){
var inst_38202 = (state_38224[(8)]);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38224__$1,(18),to,inst_38202);
} else {
if((state_val_38225 === (21))){
var inst_38215 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38232_38297 = state_38224__$1;
(statearr_38232_38297[(2)] = inst_38215);

(statearr_38232_38297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (13))){
var inst_38217 = (state_38224[(2)]);
var state_38224__$1 = (function (){var statearr_38233 = state_38224;
(statearr_38233[(9)] = inst_38217);

return statearr_38233;
})();
var statearr_38234_38298 = state_38224__$1;
(statearr_38234_38298[(2)] = null);

(statearr_38234_38298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (6))){
var inst_38189 = (state_38224[(7)]);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38224__$1,(11),inst_38189);
} else {
if((state_val_38225 === (17))){
var inst_38210 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
if(cljs.core.truth_(inst_38210)){
var statearr_38235_38299 = state_38224__$1;
(statearr_38235_38299[(1)] = (19));

} else {
var statearr_38236_38300 = state_38224__$1;
(statearr_38236_38300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (3))){
var inst_38222 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38224__$1,inst_38222);
} else {
if((state_val_38225 === (12))){
var inst_38199 = (state_38224[(10)]);
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38224__$1,(14),inst_38199);
} else {
if((state_val_38225 === (2))){
var state_38224__$1 = state_38224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38224__$1,(4),results);
} else {
if((state_val_38225 === (19))){
var state_38224__$1 = state_38224;
var statearr_38237_38301 = state_38224__$1;
(statearr_38237_38301[(2)] = null);

(statearr_38237_38301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (11))){
var inst_38199 = (state_38224[(2)]);
var state_38224__$1 = (function (){var statearr_38238 = state_38224;
(statearr_38238[(10)] = inst_38199);

return statearr_38238;
})();
var statearr_38239_38302 = state_38224__$1;
(statearr_38239_38302[(2)] = null);

(statearr_38239_38302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (9))){
var state_38224__$1 = state_38224;
var statearr_38240_38303 = state_38224__$1;
(statearr_38240_38303[(2)] = null);

(statearr_38240_38303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (5))){
var state_38224__$1 = state_38224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38241_38304 = state_38224__$1;
(statearr_38241_38304[(1)] = (8));

} else {
var statearr_38242_38305 = state_38224__$1;
(statearr_38242_38305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (14))){
var inst_38204 = (state_38224[(11)]);
var inst_38202 = (state_38224[(8)]);
var inst_38202__$1 = (state_38224[(2)]);
var inst_38203 = (inst_38202__$1 == null);
var inst_38204__$1 = cljs.core.not.call(null,inst_38203);
var state_38224__$1 = (function (){var statearr_38243 = state_38224;
(statearr_38243[(11)] = inst_38204__$1);

(statearr_38243[(8)] = inst_38202__$1);

return statearr_38243;
})();
if(inst_38204__$1){
var statearr_38244_38306 = state_38224__$1;
(statearr_38244_38306[(1)] = (15));

} else {
var statearr_38245_38307 = state_38224__$1;
(statearr_38245_38307[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (16))){
var inst_38204 = (state_38224[(11)]);
var state_38224__$1 = state_38224;
var statearr_38246_38308 = state_38224__$1;
(statearr_38246_38308[(2)] = inst_38204);

(statearr_38246_38308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (10))){
var inst_38196 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38247_38309 = state_38224__$1;
(statearr_38247_38309[(2)] = inst_38196);

(statearr_38247_38309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (18))){
var inst_38207 = (state_38224[(2)]);
var state_38224__$1 = state_38224;
var statearr_38248_38310 = state_38224__$1;
(statearr_38248_38310[(2)] = inst_38207);

(statearr_38248_38310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38225 === (8))){
var inst_38193 = cljs.core.async.close_BANG_.call(null,to);
var state_38224__$1 = state_38224;
var statearr_38249_38311 = state_38224__$1;
(statearr_38249_38311[(2)] = inst_38193);

(statearr_38249_38311[(1)] = (10));


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
});})(c__37699__auto__,jobs,results,process,async))
;
return ((function (switch__37587__auto__,c__37699__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0 = (function (){
var statearr_38253 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__);

(statearr_38253[(1)] = (1));

return statearr_38253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1 = (function (state_38224){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_38224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e38254){if((e38254 instanceof Object)){
var ex__37591__auto__ = e38254;
var statearr_38255_38312 = state_38224;
(statearr_38255_38312[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38313 = state_38224;
state_38224 = G__38313;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__ = function(state_38224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1.call(this,state_38224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37588__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto__,jobs,results,process,async))
})();
var state__37701__auto__ = (function (){var statearr_38256 = f__37700__auto__.call(null);
(statearr_38256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto__);

return statearr_38256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto__,jobs,results,process,async))
);

return c__37699__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args38314 = [];
var len__25947__auto___38317 = arguments.length;
var i__25948__auto___38318 = (0);
while(true){
if((i__25948__auto___38318 < len__25947__auto___38317)){
args38314.push((arguments[i__25948__auto___38318]));

var G__38319 = (i__25948__auto___38318 + (1));
i__25948__auto___38318 = G__38319;
continue;
} else {
}
break;
}

var G__38316 = args38314.length;
switch (G__38316) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38314.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args38321 = [];
var len__25947__auto___38324 = arguments.length;
var i__25948__auto___38325 = (0);
while(true){
if((i__25948__auto___38325 < len__25947__auto___38324)){
args38321.push((arguments[i__25948__auto___38325]));

var G__38326 = (i__25948__auto___38325 + (1));
i__25948__auto___38325 = G__38326;
continue;
} else {
}
break;
}

var G__38323 = args38321.length;
switch (G__38323) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38321.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args38328 = [];
var len__25947__auto___38381 = arguments.length;
var i__25948__auto___38382 = (0);
while(true){
if((i__25948__auto___38382 < len__25947__auto___38381)){
args38328.push((arguments[i__25948__auto___38382]));

var G__38383 = (i__25948__auto___38382 + (1));
i__25948__auto___38382 = G__38383;
continue;
} else {
}
break;
}

var G__38330 = args38328.length;
switch (G__38330) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38328.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37699__auto___38385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___38385,tc,fc){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___38385,tc,fc){
return (function (state_38356){
var state_val_38357 = (state_38356[(1)]);
if((state_val_38357 === (7))){
var inst_38352 = (state_38356[(2)]);
var state_38356__$1 = state_38356;
var statearr_38358_38386 = state_38356__$1;
(statearr_38358_38386[(2)] = inst_38352);

(statearr_38358_38386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (1))){
var state_38356__$1 = state_38356;
var statearr_38359_38387 = state_38356__$1;
(statearr_38359_38387[(2)] = null);

(statearr_38359_38387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (4))){
var inst_38333 = (state_38356[(7)]);
var inst_38333__$1 = (state_38356[(2)]);
var inst_38334 = (inst_38333__$1 == null);
var state_38356__$1 = (function (){var statearr_38360 = state_38356;
(statearr_38360[(7)] = inst_38333__$1);

return statearr_38360;
})();
if(cljs.core.truth_(inst_38334)){
var statearr_38361_38388 = state_38356__$1;
(statearr_38361_38388[(1)] = (5));

} else {
var statearr_38362_38389 = state_38356__$1;
(statearr_38362_38389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (13))){
var state_38356__$1 = state_38356;
var statearr_38363_38390 = state_38356__$1;
(statearr_38363_38390[(2)] = null);

(statearr_38363_38390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (6))){
var inst_38333 = (state_38356[(7)]);
var inst_38339 = p.call(null,inst_38333);
var state_38356__$1 = state_38356;
if(cljs.core.truth_(inst_38339)){
var statearr_38364_38391 = state_38356__$1;
(statearr_38364_38391[(1)] = (9));

} else {
var statearr_38365_38392 = state_38356__$1;
(statearr_38365_38392[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (3))){
var inst_38354 = (state_38356[(2)]);
var state_38356__$1 = state_38356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38356__$1,inst_38354);
} else {
if((state_val_38357 === (12))){
var state_38356__$1 = state_38356;
var statearr_38366_38393 = state_38356__$1;
(statearr_38366_38393[(2)] = null);

(statearr_38366_38393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (2))){
var state_38356__$1 = state_38356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38356__$1,(4),ch);
} else {
if((state_val_38357 === (11))){
var inst_38333 = (state_38356[(7)]);
var inst_38343 = (state_38356[(2)]);
var state_38356__$1 = state_38356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38356__$1,(8),inst_38343,inst_38333);
} else {
if((state_val_38357 === (9))){
var state_38356__$1 = state_38356;
var statearr_38367_38394 = state_38356__$1;
(statearr_38367_38394[(2)] = tc);

(statearr_38367_38394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (5))){
var inst_38336 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38337 = cljs.core.async.close_BANG_.call(null,fc);
var state_38356__$1 = (function (){var statearr_38368 = state_38356;
(statearr_38368[(8)] = inst_38336);

return statearr_38368;
})();
var statearr_38369_38395 = state_38356__$1;
(statearr_38369_38395[(2)] = inst_38337);

(statearr_38369_38395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (14))){
var inst_38350 = (state_38356[(2)]);
var state_38356__$1 = state_38356;
var statearr_38370_38396 = state_38356__$1;
(statearr_38370_38396[(2)] = inst_38350);

(statearr_38370_38396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (10))){
var state_38356__$1 = state_38356;
var statearr_38371_38397 = state_38356__$1;
(statearr_38371_38397[(2)] = fc);

(statearr_38371_38397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38357 === (8))){
var inst_38345 = (state_38356[(2)]);
var state_38356__$1 = state_38356;
if(cljs.core.truth_(inst_38345)){
var statearr_38372_38398 = state_38356__$1;
(statearr_38372_38398[(1)] = (12));

} else {
var statearr_38373_38399 = state_38356__$1;
(statearr_38373_38399[(1)] = (13));

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
});})(c__37699__auto___38385,tc,fc))
;
return ((function (switch__37587__auto__,c__37699__auto___38385,tc,fc){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_38377 = [null,null,null,null,null,null,null,null,null];
(statearr_38377[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_38377[(1)] = (1));

return statearr_38377;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_38356){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_38356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e38378){if((e38378 instanceof Object)){
var ex__37591__auto__ = e38378;
var statearr_38379_38400 = state_38356;
(statearr_38379_38400[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38401 = state_38356;
state_38356 = G__38401;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_38356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_38356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___38385,tc,fc))
})();
var state__37701__auto__ = (function (){var statearr_38380 = f__37700__auto__.call(null);
(statearr_38380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___38385);

return statearr_38380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___38385,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto__){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto__){
return (function (state_38465){
var state_val_38466 = (state_38465[(1)]);
if((state_val_38466 === (7))){
var inst_38461 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38467_38488 = state_38465__$1;
(statearr_38467_38488[(2)] = inst_38461);

(statearr_38467_38488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (1))){
var inst_38445 = init;
var state_38465__$1 = (function (){var statearr_38468 = state_38465;
(statearr_38468[(7)] = inst_38445);

return statearr_38468;
})();
var statearr_38469_38489 = state_38465__$1;
(statearr_38469_38489[(2)] = null);

(statearr_38469_38489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (4))){
var inst_38448 = (state_38465[(8)]);
var inst_38448__$1 = (state_38465[(2)]);
var inst_38449 = (inst_38448__$1 == null);
var state_38465__$1 = (function (){var statearr_38470 = state_38465;
(statearr_38470[(8)] = inst_38448__$1);

return statearr_38470;
})();
if(cljs.core.truth_(inst_38449)){
var statearr_38471_38490 = state_38465__$1;
(statearr_38471_38490[(1)] = (5));

} else {
var statearr_38472_38491 = state_38465__$1;
(statearr_38472_38491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (6))){
var inst_38452 = (state_38465[(9)]);
var inst_38445 = (state_38465[(7)]);
var inst_38448 = (state_38465[(8)]);
var inst_38452__$1 = f.call(null,inst_38445,inst_38448);
var inst_38453 = cljs.core.reduced_QMARK_.call(null,inst_38452__$1);
var state_38465__$1 = (function (){var statearr_38473 = state_38465;
(statearr_38473[(9)] = inst_38452__$1);

return statearr_38473;
})();
if(inst_38453){
var statearr_38474_38492 = state_38465__$1;
(statearr_38474_38492[(1)] = (8));

} else {
var statearr_38475_38493 = state_38465__$1;
(statearr_38475_38493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (3))){
var inst_38463 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38465__$1,inst_38463);
} else {
if((state_val_38466 === (2))){
var state_38465__$1 = state_38465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38465__$1,(4),ch);
} else {
if((state_val_38466 === (9))){
var inst_38452 = (state_38465[(9)]);
var inst_38445 = inst_38452;
var state_38465__$1 = (function (){var statearr_38476 = state_38465;
(statearr_38476[(7)] = inst_38445);

return statearr_38476;
})();
var statearr_38477_38494 = state_38465__$1;
(statearr_38477_38494[(2)] = null);

(statearr_38477_38494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (5))){
var inst_38445 = (state_38465[(7)]);
var state_38465__$1 = state_38465;
var statearr_38478_38495 = state_38465__$1;
(statearr_38478_38495[(2)] = inst_38445);

(statearr_38478_38495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (10))){
var inst_38459 = (state_38465[(2)]);
var state_38465__$1 = state_38465;
var statearr_38479_38496 = state_38465__$1;
(statearr_38479_38496[(2)] = inst_38459);

(statearr_38479_38496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38466 === (8))){
var inst_38452 = (state_38465[(9)]);
var inst_38455 = cljs.core.deref.call(null,inst_38452);
var state_38465__$1 = state_38465;
var statearr_38480_38497 = state_38465__$1;
(statearr_38480_38497[(2)] = inst_38455);

(statearr_38480_38497[(1)] = (10));


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
});})(c__37699__auto__))
;
return ((function (switch__37587__auto__,c__37699__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37588__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37588__auto____0 = (function (){
var statearr_38484 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38484[(0)] = cljs$core$async$reduce_$_state_machine__37588__auto__);

(statearr_38484[(1)] = (1));

return statearr_38484;
});
var cljs$core$async$reduce_$_state_machine__37588__auto____1 = (function (state_38465){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_38465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e38485){if((e38485 instanceof Object)){
var ex__37591__auto__ = e38485;
var statearr_38486_38498 = state_38465;
(statearr_38486_38498[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38499 = state_38465;
state_38465 = G__38499;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37588__auto__ = function(state_38465){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37588__auto____1.call(this,state_38465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37588__auto____0;
cljs$core$async$reduce_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37588__auto____1;
return cljs$core$async$reduce_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto__))
})();
var state__37701__auto__ = (function (){var statearr_38487 = f__37700__auto__.call(null);
(statearr_38487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto__);

return statearr_38487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto__))
);

return c__37699__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args38500 = [];
var len__25947__auto___38552 = arguments.length;
var i__25948__auto___38553 = (0);
while(true){
if((i__25948__auto___38553 < len__25947__auto___38552)){
args38500.push((arguments[i__25948__auto___38553]));

var G__38554 = (i__25948__auto___38553 + (1));
i__25948__auto___38553 = G__38554;
continue;
} else {
}
break;
}

var G__38502 = args38500.length;
switch (G__38502) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38500.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto__){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto__){
return (function (state_38527){
var state_val_38528 = (state_38527[(1)]);
if((state_val_38528 === (7))){
var inst_38509 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
var statearr_38529_38556 = state_38527__$1;
(statearr_38529_38556[(2)] = inst_38509);

(statearr_38529_38556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (1))){
var inst_38503 = cljs.core.seq.call(null,coll);
var inst_38504 = inst_38503;
var state_38527__$1 = (function (){var statearr_38530 = state_38527;
(statearr_38530[(7)] = inst_38504);

return statearr_38530;
})();
var statearr_38531_38557 = state_38527__$1;
(statearr_38531_38557[(2)] = null);

(statearr_38531_38557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (4))){
var inst_38504 = (state_38527[(7)]);
var inst_38507 = cljs.core.first.call(null,inst_38504);
var state_38527__$1 = state_38527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38527__$1,(7),ch,inst_38507);
} else {
if((state_val_38528 === (13))){
var inst_38521 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
var statearr_38532_38558 = state_38527__$1;
(statearr_38532_38558[(2)] = inst_38521);

(statearr_38532_38558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (6))){
var inst_38512 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
if(cljs.core.truth_(inst_38512)){
var statearr_38533_38559 = state_38527__$1;
(statearr_38533_38559[(1)] = (8));

} else {
var statearr_38534_38560 = state_38527__$1;
(statearr_38534_38560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (3))){
var inst_38525 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38527__$1,inst_38525);
} else {
if((state_val_38528 === (12))){
var state_38527__$1 = state_38527;
var statearr_38535_38561 = state_38527__$1;
(statearr_38535_38561[(2)] = null);

(statearr_38535_38561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (2))){
var inst_38504 = (state_38527[(7)]);
var state_38527__$1 = state_38527;
if(cljs.core.truth_(inst_38504)){
var statearr_38536_38562 = state_38527__$1;
(statearr_38536_38562[(1)] = (4));

} else {
var statearr_38537_38563 = state_38527__$1;
(statearr_38537_38563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (11))){
var inst_38518 = cljs.core.async.close_BANG_.call(null,ch);
var state_38527__$1 = state_38527;
var statearr_38538_38564 = state_38527__$1;
(statearr_38538_38564[(2)] = inst_38518);

(statearr_38538_38564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (9))){
var state_38527__$1 = state_38527;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38539_38565 = state_38527__$1;
(statearr_38539_38565[(1)] = (11));

} else {
var statearr_38540_38566 = state_38527__$1;
(statearr_38540_38566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (5))){
var inst_38504 = (state_38527[(7)]);
var state_38527__$1 = state_38527;
var statearr_38541_38567 = state_38527__$1;
(statearr_38541_38567[(2)] = inst_38504);

(statearr_38541_38567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (10))){
var inst_38523 = (state_38527[(2)]);
var state_38527__$1 = state_38527;
var statearr_38542_38568 = state_38527__$1;
(statearr_38542_38568[(2)] = inst_38523);

(statearr_38542_38568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38528 === (8))){
var inst_38504 = (state_38527[(7)]);
var inst_38514 = cljs.core.next.call(null,inst_38504);
var inst_38504__$1 = inst_38514;
var state_38527__$1 = (function (){var statearr_38543 = state_38527;
(statearr_38543[(7)] = inst_38504__$1);

return statearr_38543;
})();
var statearr_38544_38569 = state_38527__$1;
(statearr_38544_38569[(2)] = null);

(statearr_38544_38569[(1)] = (2));


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
});})(c__37699__auto__))
;
return ((function (switch__37587__auto__,c__37699__auto__){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_38548 = [null,null,null,null,null,null,null,null];
(statearr_38548[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_38548[(1)] = (1));

return statearr_38548;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_38527){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_38527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e38549){if((e38549 instanceof Object)){
var ex__37591__auto__ = e38549;
var statearr_38550_38570 = state_38527;
(statearr_38550_38570[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38571 = state_38527;
state_38527 = G__38571;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_38527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_38527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto__))
})();
var state__37701__auto__ = (function (){var statearr_38551 = f__37700__auto__.call(null);
(statearr_38551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto__);

return statearr_38551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto__))
);

return c__37699__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25535__auto__ = (((_ == null))?null:_);
var m__25536__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,_);
} else {
var m__25536__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38797 = (function (mult,ch,cs,meta38798){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38798 = meta38798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38799,meta38798__$1){
var self__ = this;
var _38799__$1 = this;
return (new cljs.core.async.t_cljs$core$async38797(self__.mult,self__.ch,self__.cs,meta38798__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38799){
var self__ = this;
var _38799__$1 = this;
return self__.meta38798;
});})(cs))
;

cljs.core.async.t_cljs$core$async38797.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38797.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38797.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38797.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38797.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38797.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38798","meta38798",1594351532,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38797";

cljs.core.async.t_cljs$core$async38797.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async38797");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38797 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38797(mult__$1,ch__$1,cs__$1,meta38798){
return (new cljs.core.async.t_cljs$core$async38797(mult__$1,ch__$1,cs__$1,meta38798));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38797(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37699__auto___39022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___39022,cs,m,dchan,dctr,done){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___39022,cs,m,dchan,dctr,done){
return (function (state_38934){
var state_val_38935 = (state_38934[(1)]);
if((state_val_38935 === (7))){
var inst_38930 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38936_39023 = state_38934__$1;
(statearr_38936_39023[(2)] = inst_38930);

(statearr_38936_39023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (20))){
var inst_38833 = (state_38934[(7)]);
var inst_38845 = cljs.core.first.call(null,inst_38833);
var inst_38846 = cljs.core.nth.call(null,inst_38845,(0),null);
var inst_38847 = cljs.core.nth.call(null,inst_38845,(1),null);
var state_38934__$1 = (function (){var statearr_38937 = state_38934;
(statearr_38937[(8)] = inst_38846);

return statearr_38937;
})();
if(cljs.core.truth_(inst_38847)){
var statearr_38938_39024 = state_38934__$1;
(statearr_38938_39024[(1)] = (22));

} else {
var statearr_38939_39025 = state_38934__$1;
(statearr_38939_39025[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (27))){
var inst_38875 = (state_38934[(9)]);
var inst_38882 = (state_38934[(10)]);
var inst_38877 = (state_38934[(11)]);
var inst_38802 = (state_38934[(12)]);
var inst_38882__$1 = cljs.core._nth.call(null,inst_38875,inst_38877);
var inst_38883 = cljs.core.async.put_BANG_.call(null,inst_38882__$1,inst_38802,done);
var state_38934__$1 = (function (){var statearr_38940 = state_38934;
(statearr_38940[(10)] = inst_38882__$1);

return statearr_38940;
})();
if(cljs.core.truth_(inst_38883)){
var statearr_38941_39026 = state_38934__$1;
(statearr_38941_39026[(1)] = (30));

} else {
var statearr_38942_39027 = state_38934__$1;
(statearr_38942_39027[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (1))){
var state_38934__$1 = state_38934;
var statearr_38943_39028 = state_38934__$1;
(statearr_38943_39028[(2)] = null);

(statearr_38943_39028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (24))){
var inst_38833 = (state_38934[(7)]);
var inst_38852 = (state_38934[(2)]);
var inst_38853 = cljs.core.next.call(null,inst_38833);
var inst_38811 = inst_38853;
var inst_38812 = null;
var inst_38813 = (0);
var inst_38814 = (0);
var state_38934__$1 = (function (){var statearr_38944 = state_38934;
(statearr_38944[(13)] = inst_38813);

(statearr_38944[(14)] = inst_38814);

(statearr_38944[(15)] = inst_38811);

(statearr_38944[(16)] = inst_38852);

(statearr_38944[(17)] = inst_38812);

return statearr_38944;
})();
var statearr_38945_39029 = state_38934__$1;
(statearr_38945_39029[(2)] = null);

(statearr_38945_39029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (39))){
var state_38934__$1 = state_38934;
var statearr_38949_39030 = state_38934__$1;
(statearr_38949_39030[(2)] = null);

(statearr_38949_39030[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (4))){
var inst_38802 = (state_38934[(12)]);
var inst_38802__$1 = (state_38934[(2)]);
var inst_38803 = (inst_38802__$1 == null);
var state_38934__$1 = (function (){var statearr_38950 = state_38934;
(statearr_38950[(12)] = inst_38802__$1);

return statearr_38950;
})();
if(cljs.core.truth_(inst_38803)){
var statearr_38951_39031 = state_38934__$1;
(statearr_38951_39031[(1)] = (5));

} else {
var statearr_38952_39032 = state_38934__$1;
(statearr_38952_39032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (15))){
var inst_38813 = (state_38934[(13)]);
var inst_38814 = (state_38934[(14)]);
var inst_38811 = (state_38934[(15)]);
var inst_38812 = (state_38934[(17)]);
var inst_38829 = (state_38934[(2)]);
var inst_38830 = (inst_38814 + (1));
var tmp38946 = inst_38813;
var tmp38947 = inst_38811;
var tmp38948 = inst_38812;
var inst_38811__$1 = tmp38947;
var inst_38812__$1 = tmp38948;
var inst_38813__$1 = tmp38946;
var inst_38814__$1 = inst_38830;
var state_38934__$1 = (function (){var statearr_38953 = state_38934;
(statearr_38953[(13)] = inst_38813__$1);

(statearr_38953[(18)] = inst_38829);

(statearr_38953[(14)] = inst_38814__$1);

(statearr_38953[(15)] = inst_38811__$1);

(statearr_38953[(17)] = inst_38812__$1);

return statearr_38953;
})();
var statearr_38954_39033 = state_38934__$1;
(statearr_38954_39033[(2)] = null);

(statearr_38954_39033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (21))){
var inst_38856 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38958_39034 = state_38934__$1;
(statearr_38958_39034[(2)] = inst_38856);

(statearr_38958_39034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (31))){
var inst_38882 = (state_38934[(10)]);
var inst_38886 = done.call(null,null);
var inst_38887 = cljs.core.async.untap_STAR_.call(null,m,inst_38882);
var state_38934__$1 = (function (){var statearr_38959 = state_38934;
(statearr_38959[(19)] = inst_38886);

return statearr_38959;
})();
var statearr_38960_39035 = state_38934__$1;
(statearr_38960_39035[(2)] = inst_38887);

(statearr_38960_39035[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (32))){
var inst_38875 = (state_38934[(9)]);
var inst_38874 = (state_38934[(20)]);
var inst_38877 = (state_38934[(11)]);
var inst_38876 = (state_38934[(21)]);
var inst_38889 = (state_38934[(2)]);
var inst_38890 = (inst_38877 + (1));
var tmp38955 = inst_38875;
var tmp38956 = inst_38874;
var tmp38957 = inst_38876;
var inst_38874__$1 = tmp38956;
var inst_38875__$1 = tmp38955;
var inst_38876__$1 = tmp38957;
var inst_38877__$1 = inst_38890;
var state_38934__$1 = (function (){var statearr_38961 = state_38934;
(statearr_38961[(9)] = inst_38875__$1);

(statearr_38961[(20)] = inst_38874__$1);

(statearr_38961[(22)] = inst_38889);

(statearr_38961[(11)] = inst_38877__$1);

(statearr_38961[(21)] = inst_38876__$1);

return statearr_38961;
})();
var statearr_38962_39036 = state_38934__$1;
(statearr_38962_39036[(2)] = null);

(statearr_38962_39036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (40))){
var inst_38902 = (state_38934[(23)]);
var inst_38906 = done.call(null,null);
var inst_38907 = cljs.core.async.untap_STAR_.call(null,m,inst_38902);
var state_38934__$1 = (function (){var statearr_38963 = state_38934;
(statearr_38963[(24)] = inst_38906);

return statearr_38963;
})();
var statearr_38964_39037 = state_38934__$1;
(statearr_38964_39037[(2)] = inst_38907);

(statearr_38964_39037[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (33))){
var inst_38893 = (state_38934[(25)]);
var inst_38895 = cljs.core.chunked_seq_QMARK_.call(null,inst_38893);
var state_38934__$1 = state_38934;
if(inst_38895){
var statearr_38965_39038 = state_38934__$1;
(statearr_38965_39038[(1)] = (36));

} else {
var statearr_38966_39039 = state_38934__$1;
(statearr_38966_39039[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (13))){
var inst_38823 = (state_38934[(26)]);
var inst_38826 = cljs.core.async.close_BANG_.call(null,inst_38823);
var state_38934__$1 = state_38934;
var statearr_38967_39040 = state_38934__$1;
(statearr_38967_39040[(2)] = inst_38826);

(statearr_38967_39040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (22))){
var inst_38846 = (state_38934[(8)]);
var inst_38849 = cljs.core.async.close_BANG_.call(null,inst_38846);
var state_38934__$1 = state_38934;
var statearr_38968_39041 = state_38934__$1;
(statearr_38968_39041[(2)] = inst_38849);

(statearr_38968_39041[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (36))){
var inst_38893 = (state_38934[(25)]);
var inst_38897 = cljs.core.chunk_first.call(null,inst_38893);
var inst_38898 = cljs.core.chunk_rest.call(null,inst_38893);
var inst_38899 = cljs.core.count.call(null,inst_38897);
var inst_38874 = inst_38898;
var inst_38875 = inst_38897;
var inst_38876 = inst_38899;
var inst_38877 = (0);
var state_38934__$1 = (function (){var statearr_38969 = state_38934;
(statearr_38969[(9)] = inst_38875);

(statearr_38969[(20)] = inst_38874);

(statearr_38969[(11)] = inst_38877);

(statearr_38969[(21)] = inst_38876);

return statearr_38969;
})();
var statearr_38970_39042 = state_38934__$1;
(statearr_38970_39042[(2)] = null);

(statearr_38970_39042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (41))){
var inst_38893 = (state_38934[(25)]);
var inst_38909 = (state_38934[(2)]);
var inst_38910 = cljs.core.next.call(null,inst_38893);
var inst_38874 = inst_38910;
var inst_38875 = null;
var inst_38876 = (0);
var inst_38877 = (0);
var state_38934__$1 = (function (){var statearr_38971 = state_38934;
(statearr_38971[(9)] = inst_38875);

(statearr_38971[(20)] = inst_38874);

(statearr_38971[(11)] = inst_38877);

(statearr_38971[(21)] = inst_38876);

(statearr_38971[(27)] = inst_38909);

return statearr_38971;
})();
var statearr_38972_39043 = state_38934__$1;
(statearr_38972_39043[(2)] = null);

(statearr_38972_39043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (43))){
var state_38934__$1 = state_38934;
var statearr_38973_39044 = state_38934__$1;
(statearr_38973_39044[(2)] = null);

(statearr_38973_39044[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (29))){
var inst_38918 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38974_39045 = state_38934__$1;
(statearr_38974_39045[(2)] = inst_38918);

(statearr_38974_39045[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (44))){
var inst_38927 = (state_38934[(2)]);
var state_38934__$1 = (function (){var statearr_38975 = state_38934;
(statearr_38975[(28)] = inst_38927);

return statearr_38975;
})();
var statearr_38976_39046 = state_38934__$1;
(statearr_38976_39046[(2)] = null);

(statearr_38976_39046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (6))){
var inst_38866 = (state_38934[(29)]);
var inst_38865 = cljs.core.deref.call(null,cs);
var inst_38866__$1 = cljs.core.keys.call(null,inst_38865);
var inst_38867 = cljs.core.count.call(null,inst_38866__$1);
var inst_38868 = cljs.core.reset_BANG_.call(null,dctr,inst_38867);
var inst_38873 = cljs.core.seq.call(null,inst_38866__$1);
var inst_38874 = inst_38873;
var inst_38875 = null;
var inst_38876 = (0);
var inst_38877 = (0);
var state_38934__$1 = (function (){var statearr_38977 = state_38934;
(statearr_38977[(30)] = inst_38868);

(statearr_38977[(29)] = inst_38866__$1);

(statearr_38977[(9)] = inst_38875);

(statearr_38977[(20)] = inst_38874);

(statearr_38977[(11)] = inst_38877);

(statearr_38977[(21)] = inst_38876);

return statearr_38977;
})();
var statearr_38978_39047 = state_38934__$1;
(statearr_38978_39047[(2)] = null);

(statearr_38978_39047[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (28))){
var inst_38874 = (state_38934[(20)]);
var inst_38893 = (state_38934[(25)]);
var inst_38893__$1 = cljs.core.seq.call(null,inst_38874);
var state_38934__$1 = (function (){var statearr_38979 = state_38934;
(statearr_38979[(25)] = inst_38893__$1);

return statearr_38979;
})();
if(inst_38893__$1){
var statearr_38980_39048 = state_38934__$1;
(statearr_38980_39048[(1)] = (33));

} else {
var statearr_38981_39049 = state_38934__$1;
(statearr_38981_39049[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (25))){
var inst_38877 = (state_38934[(11)]);
var inst_38876 = (state_38934[(21)]);
var inst_38879 = (inst_38877 < inst_38876);
var inst_38880 = inst_38879;
var state_38934__$1 = state_38934;
if(cljs.core.truth_(inst_38880)){
var statearr_38982_39050 = state_38934__$1;
(statearr_38982_39050[(1)] = (27));

} else {
var statearr_38983_39051 = state_38934__$1;
(statearr_38983_39051[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (34))){
var state_38934__$1 = state_38934;
var statearr_38984_39052 = state_38934__$1;
(statearr_38984_39052[(2)] = null);

(statearr_38984_39052[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (17))){
var state_38934__$1 = state_38934;
var statearr_38985_39053 = state_38934__$1;
(statearr_38985_39053[(2)] = null);

(statearr_38985_39053[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (3))){
var inst_38932 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38934__$1,inst_38932);
} else {
if((state_val_38935 === (12))){
var inst_38861 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38986_39054 = state_38934__$1;
(statearr_38986_39054[(2)] = inst_38861);

(statearr_38986_39054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (2))){
var state_38934__$1 = state_38934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38934__$1,(4),ch);
} else {
if((state_val_38935 === (23))){
var state_38934__$1 = state_38934;
var statearr_38987_39055 = state_38934__$1;
(statearr_38987_39055[(2)] = null);

(statearr_38987_39055[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (35))){
var inst_38916 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38988_39056 = state_38934__$1;
(statearr_38988_39056[(2)] = inst_38916);

(statearr_38988_39056[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (19))){
var inst_38833 = (state_38934[(7)]);
var inst_38837 = cljs.core.chunk_first.call(null,inst_38833);
var inst_38838 = cljs.core.chunk_rest.call(null,inst_38833);
var inst_38839 = cljs.core.count.call(null,inst_38837);
var inst_38811 = inst_38838;
var inst_38812 = inst_38837;
var inst_38813 = inst_38839;
var inst_38814 = (0);
var state_38934__$1 = (function (){var statearr_38989 = state_38934;
(statearr_38989[(13)] = inst_38813);

(statearr_38989[(14)] = inst_38814);

(statearr_38989[(15)] = inst_38811);

(statearr_38989[(17)] = inst_38812);

return statearr_38989;
})();
var statearr_38990_39057 = state_38934__$1;
(statearr_38990_39057[(2)] = null);

(statearr_38990_39057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (11))){
var inst_38833 = (state_38934[(7)]);
var inst_38811 = (state_38934[(15)]);
var inst_38833__$1 = cljs.core.seq.call(null,inst_38811);
var state_38934__$1 = (function (){var statearr_38991 = state_38934;
(statearr_38991[(7)] = inst_38833__$1);

return statearr_38991;
})();
if(inst_38833__$1){
var statearr_38992_39058 = state_38934__$1;
(statearr_38992_39058[(1)] = (16));

} else {
var statearr_38993_39059 = state_38934__$1;
(statearr_38993_39059[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (9))){
var inst_38863 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38994_39060 = state_38934__$1;
(statearr_38994_39060[(2)] = inst_38863);

(statearr_38994_39060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (5))){
var inst_38809 = cljs.core.deref.call(null,cs);
var inst_38810 = cljs.core.seq.call(null,inst_38809);
var inst_38811 = inst_38810;
var inst_38812 = null;
var inst_38813 = (0);
var inst_38814 = (0);
var state_38934__$1 = (function (){var statearr_38995 = state_38934;
(statearr_38995[(13)] = inst_38813);

(statearr_38995[(14)] = inst_38814);

(statearr_38995[(15)] = inst_38811);

(statearr_38995[(17)] = inst_38812);

return statearr_38995;
})();
var statearr_38996_39061 = state_38934__$1;
(statearr_38996_39061[(2)] = null);

(statearr_38996_39061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (14))){
var state_38934__$1 = state_38934;
var statearr_38997_39062 = state_38934__$1;
(statearr_38997_39062[(2)] = null);

(statearr_38997_39062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (45))){
var inst_38924 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38998_39063 = state_38934__$1;
(statearr_38998_39063[(2)] = inst_38924);

(statearr_38998_39063[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (26))){
var inst_38866 = (state_38934[(29)]);
var inst_38920 = (state_38934[(2)]);
var inst_38921 = cljs.core.seq.call(null,inst_38866);
var state_38934__$1 = (function (){var statearr_38999 = state_38934;
(statearr_38999[(31)] = inst_38920);

return statearr_38999;
})();
if(inst_38921){
var statearr_39000_39064 = state_38934__$1;
(statearr_39000_39064[(1)] = (42));

} else {
var statearr_39001_39065 = state_38934__$1;
(statearr_39001_39065[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (16))){
var inst_38833 = (state_38934[(7)]);
var inst_38835 = cljs.core.chunked_seq_QMARK_.call(null,inst_38833);
var state_38934__$1 = state_38934;
if(inst_38835){
var statearr_39002_39066 = state_38934__$1;
(statearr_39002_39066[(1)] = (19));

} else {
var statearr_39003_39067 = state_38934__$1;
(statearr_39003_39067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (38))){
var inst_38913 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_39004_39068 = state_38934__$1;
(statearr_39004_39068[(2)] = inst_38913);

(statearr_39004_39068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (30))){
var state_38934__$1 = state_38934;
var statearr_39005_39069 = state_38934__$1;
(statearr_39005_39069[(2)] = null);

(statearr_39005_39069[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (10))){
var inst_38814 = (state_38934[(14)]);
var inst_38812 = (state_38934[(17)]);
var inst_38822 = cljs.core._nth.call(null,inst_38812,inst_38814);
var inst_38823 = cljs.core.nth.call(null,inst_38822,(0),null);
var inst_38824 = cljs.core.nth.call(null,inst_38822,(1),null);
var state_38934__$1 = (function (){var statearr_39006 = state_38934;
(statearr_39006[(26)] = inst_38823);

return statearr_39006;
})();
if(cljs.core.truth_(inst_38824)){
var statearr_39007_39070 = state_38934__$1;
(statearr_39007_39070[(1)] = (13));

} else {
var statearr_39008_39071 = state_38934__$1;
(statearr_39008_39071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (18))){
var inst_38859 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_39009_39072 = state_38934__$1;
(statearr_39009_39072[(2)] = inst_38859);

(statearr_39009_39072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (42))){
var state_38934__$1 = state_38934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38934__$1,(45),dchan);
} else {
if((state_val_38935 === (37))){
var inst_38802 = (state_38934[(12)]);
var inst_38893 = (state_38934[(25)]);
var inst_38902 = (state_38934[(23)]);
var inst_38902__$1 = cljs.core.first.call(null,inst_38893);
var inst_38903 = cljs.core.async.put_BANG_.call(null,inst_38902__$1,inst_38802,done);
var state_38934__$1 = (function (){var statearr_39010 = state_38934;
(statearr_39010[(23)] = inst_38902__$1);

return statearr_39010;
})();
if(cljs.core.truth_(inst_38903)){
var statearr_39011_39073 = state_38934__$1;
(statearr_39011_39073[(1)] = (39));

} else {
var statearr_39012_39074 = state_38934__$1;
(statearr_39012_39074[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (8))){
var inst_38813 = (state_38934[(13)]);
var inst_38814 = (state_38934[(14)]);
var inst_38816 = (inst_38814 < inst_38813);
var inst_38817 = inst_38816;
var state_38934__$1 = state_38934;
if(cljs.core.truth_(inst_38817)){
var statearr_39013_39075 = state_38934__$1;
(statearr_39013_39075[(1)] = (10));

} else {
var statearr_39014_39076 = state_38934__$1;
(statearr_39014_39076[(1)] = (11));

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
});})(c__37699__auto___39022,cs,m,dchan,dctr,done))
;
return ((function (switch__37587__auto__,c__37699__auto___39022,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37588__auto__ = null;
var cljs$core$async$mult_$_state_machine__37588__auto____0 = (function (){
var statearr_39018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39018[(0)] = cljs$core$async$mult_$_state_machine__37588__auto__);

(statearr_39018[(1)] = (1));

return statearr_39018;
});
var cljs$core$async$mult_$_state_machine__37588__auto____1 = (function (state_38934){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_38934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e39019){if((e39019 instanceof Object)){
var ex__37591__auto__ = e39019;
var statearr_39020_39077 = state_38934;
(statearr_39020_39077[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39078 = state_38934;
state_38934 = G__39078;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37588__auto__ = function(state_38934){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37588__auto____1.call(this,state_38934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37588__auto____0;
cljs$core$async$mult_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37588__auto____1;
return cljs$core$async$mult_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___39022,cs,m,dchan,dctr,done))
})();
var state__37701__auto__ = (function (){var statearr_39021 = f__37700__auto__.call(null);
(statearr_39021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___39022);

return statearr_39021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___39022,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args39079 = [];
var len__25947__auto___39082 = arguments.length;
var i__25948__auto___39083 = (0);
while(true){
if((i__25948__auto___39083 < len__25947__auto___39082)){
args39079.push((arguments[i__25948__auto___39083]));

var G__39084 = (i__25948__auto___39083 + (1));
i__25948__auto___39083 = G__39084;
continue;
} else {
}
break;
}

var G__39081 = args39079.length;
switch (G__39081) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39079.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m);
} else {
var m__25536__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,state_map);
} else {
var m__25536__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25535__auto__ = (((m == null))?null:m);
var m__25536__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,m,mode);
} else {
var m__25536__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25954__auto__ = [];
var len__25947__auto___39096 = arguments.length;
var i__25948__auto___39097 = (0);
while(true){
if((i__25948__auto___39097 < len__25947__auto___39096)){
args__25954__auto__.push((arguments[i__25948__auto___39097]));

var G__39098 = (i__25948__auto___39097 + (1));
i__25948__auto___39097 = G__39098;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39090){
var map__39091 = p__39090;
var map__39091__$1 = ((((!((map__39091 == null)))?((((map__39091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39091):map__39091);
var opts = map__39091__$1;
var statearr_39093_39099 = state;
(statearr_39093_39099[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__39091,map__39091__$1,opts){
return (function (val){
var statearr_39094_39100 = state;
(statearr_39094_39100[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39091,map__39091__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_39095_39101 = state;
(statearr_39095_39101[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39086){
var G__39087 = cljs.core.first.call(null,seq39086);
var seq39086__$1 = cljs.core.next.call(null,seq39086);
var G__39088 = cljs.core.first.call(null,seq39086__$1);
var seq39086__$2 = cljs.core.next.call(null,seq39086__$1);
var G__39089 = cljs.core.first.call(null,seq39086__$2);
var seq39086__$3 = cljs.core.next.call(null,seq39086__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39087,G__39088,G__39089,seq39086__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39267 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39268){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39268 = meta39268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39269,meta39268__$1){
var self__ = this;
var _39269__$1 = this;
return (new cljs.core.async.t_cljs$core$async39267(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39268__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39269){
var self__ = this;
var _39269__$1 = this;
return self__.meta39268;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39267.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39268","meta39268",1736728731,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39267";

cljs.core.async.t_cljs$core$async39267.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39267");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39267 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39267(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39268){
return (new cljs.core.async.t_cljs$core$async39267(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39268));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39267(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37699__auto___39432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___39432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___39432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39369){
var state_val_39370 = (state_39369[(1)]);
if((state_val_39370 === (7))){
var inst_39285 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
var statearr_39371_39433 = state_39369__$1;
(statearr_39371_39433[(2)] = inst_39285);

(statearr_39371_39433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (20))){
var inst_39297 = (state_39369[(7)]);
var state_39369__$1 = state_39369;
var statearr_39372_39434 = state_39369__$1;
(statearr_39372_39434[(2)] = inst_39297);

(statearr_39372_39434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (27))){
var state_39369__$1 = state_39369;
var statearr_39373_39435 = state_39369__$1;
(statearr_39373_39435[(2)] = null);

(statearr_39373_39435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (1))){
var inst_39273 = (state_39369[(8)]);
var inst_39273__$1 = calc_state.call(null);
var inst_39275 = (inst_39273__$1 == null);
var inst_39276 = cljs.core.not.call(null,inst_39275);
var state_39369__$1 = (function (){var statearr_39374 = state_39369;
(statearr_39374[(8)] = inst_39273__$1);

return statearr_39374;
})();
if(inst_39276){
var statearr_39375_39436 = state_39369__$1;
(statearr_39375_39436[(1)] = (2));

} else {
var statearr_39376_39437 = state_39369__$1;
(statearr_39376_39437[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (24))){
var inst_39320 = (state_39369[(9)]);
var inst_39343 = (state_39369[(10)]);
var inst_39329 = (state_39369[(11)]);
var inst_39343__$1 = inst_39320.call(null,inst_39329);
var state_39369__$1 = (function (){var statearr_39377 = state_39369;
(statearr_39377[(10)] = inst_39343__$1);

return statearr_39377;
})();
if(cljs.core.truth_(inst_39343__$1)){
var statearr_39378_39438 = state_39369__$1;
(statearr_39378_39438[(1)] = (29));

} else {
var statearr_39379_39439 = state_39369__$1;
(statearr_39379_39439[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (4))){
var inst_39288 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
if(cljs.core.truth_(inst_39288)){
var statearr_39380_39440 = state_39369__$1;
(statearr_39380_39440[(1)] = (8));

} else {
var statearr_39381_39441 = state_39369__$1;
(statearr_39381_39441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (15))){
var inst_39314 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
if(cljs.core.truth_(inst_39314)){
var statearr_39382_39442 = state_39369__$1;
(statearr_39382_39442[(1)] = (19));

} else {
var statearr_39383_39443 = state_39369__$1;
(statearr_39383_39443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (21))){
var inst_39319 = (state_39369[(12)]);
var inst_39319__$1 = (state_39369[(2)]);
var inst_39320 = cljs.core.get.call(null,inst_39319__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39321 = cljs.core.get.call(null,inst_39319__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39322 = cljs.core.get.call(null,inst_39319__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39369__$1 = (function (){var statearr_39384 = state_39369;
(statearr_39384[(9)] = inst_39320);

(statearr_39384[(13)] = inst_39321);

(statearr_39384[(12)] = inst_39319__$1);

return statearr_39384;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39369__$1,(22),inst_39322);
} else {
if((state_val_39370 === (31))){
var inst_39351 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
if(cljs.core.truth_(inst_39351)){
var statearr_39385_39444 = state_39369__$1;
(statearr_39385_39444[(1)] = (32));

} else {
var statearr_39386_39445 = state_39369__$1;
(statearr_39386_39445[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (32))){
var inst_39328 = (state_39369[(14)]);
var state_39369__$1 = state_39369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39369__$1,(35),out,inst_39328);
} else {
if((state_val_39370 === (33))){
var inst_39319 = (state_39369[(12)]);
var inst_39297 = inst_39319;
var state_39369__$1 = (function (){var statearr_39387 = state_39369;
(statearr_39387[(7)] = inst_39297);

return statearr_39387;
})();
var statearr_39388_39446 = state_39369__$1;
(statearr_39388_39446[(2)] = null);

(statearr_39388_39446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (13))){
var inst_39297 = (state_39369[(7)]);
var inst_39304 = inst_39297.cljs$lang$protocol_mask$partition0$;
var inst_39305 = (inst_39304 & (64));
var inst_39306 = inst_39297.cljs$core$ISeq$;
var inst_39307 = (inst_39305) || (inst_39306);
var state_39369__$1 = state_39369;
if(cljs.core.truth_(inst_39307)){
var statearr_39389_39447 = state_39369__$1;
(statearr_39389_39447[(1)] = (16));

} else {
var statearr_39390_39448 = state_39369__$1;
(statearr_39390_39448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (22))){
var inst_39329 = (state_39369[(11)]);
var inst_39328 = (state_39369[(14)]);
var inst_39327 = (state_39369[(2)]);
var inst_39328__$1 = cljs.core.nth.call(null,inst_39327,(0),null);
var inst_39329__$1 = cljs.core.nth.call(null,inst_39327,(1),null);
var inst_39330 = (inst_39328__$1 == null);
var inst_39331 = cljs.core._EQ_.call(null,inst_39329__$1,change);
var inst_39332 = (inst_39330) || (inst_39331);
var state_39369__$1 = (function (){var statearr_39391 = state_39369;
(statearr_39391[(11)] = inst_39329__$1);

(statearr_39391[(14)] = inst_39328__$1);

return statearr_39391;
})();
if(cljs.core.truth_(inst_39332)){
var statearr_39392_39449 = state_39369__$1;
(statearr_39392_39449[(1)] = (23));

} else {
var statearr_39393_39450 = state_39369__$1;
(statearr_39393_39450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (36))){
var inst_39319 = (state_39369[(12)]);
var inst_39297 = inst_39319;
var state_39369__$1 = (function (){var statearr_39394 = state_39369;
(statearr_39394[(7)] = inst_39297);

return statearr_39394;
})();
var statearr_39395_39451 = state_39369__$1;
(statearr_39395_39451[(2)] = null);

(statearr_39395_39451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (29))){
var inst_39343 = (state_39369[(10)]);
var state_39369__$1 = state_39369;
var statearr_39396_39452 = state_39369__$1;
(statearr_39396_39452[(2)] = inst_39343);

(statearr_39396_39452[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (6))){
var state_39369__$1 = state_39369;
var statearr_39397_39453 = state_39369__$1;
(statearr_39397_39453[(2)] = false);

(statearr_39397_39453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (28))){
var inst_39339 = (state_39369[(2)]);
var inst_39340 = calc_state.call(null);
var inst_39297 = inst_39340;
var state_39369__$1 = (function (){var statearr_39398 = state_39369;
(statearr_39398[(15)] = inst_39339);

(statearr_39398[(7)] = inst_39297);

return statearr_39398;
})();
var statearr_39399_39454 = state_39369__$1;
(statearr_39399_39454[(2)] = null);

(statearr_39399_39454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (25))){
var inst_39365 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
var statearr_39400_39455 = state_39369__$1;
(statearr_39400_39455[(2)] = inst_39365);

(statearr_39400_39455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (34))){
var inst_39363 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
var statearr_39401_39456 = state_39369__$1;
(statearr_39401_39456[(2)] = inst_39363);

(statearr_39401_39456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (17))){
var state_39369__$1 = state_39369;
var statearr_39402_39457 = state_39369__$1;
(statearr_39402_39457[(2)] = false);

(statearr_39402_39457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (3))){
var state_39369__$1 = state_39369;
var statearr_39403_39458 = state_39369__$1;
(statearr_39403_39458[(2)] = false);

(statearr_39403_39458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (12))){
var inst_39367 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39369__$1,inst_39367);
} else {
if((state_val_39370 === (2))){
var inst_39273 = (state_39369[(8)]);
var inst_39278 = inst_39273.cljs$lang$protocol_mask$partition0$;
var inst_39279 = (inst_39278 & (64));
var inst_39280 = inst_39273.cljs$core$ISeq$;
var inst_39281 = (inst_39279) || (inst_39280);
var state_39369__$1 = state_39369;
if(cljs.core.truth_(inst_39281)){
var statearr_39404_39459 = state_39369__$1;
(statearr_39404_39459[(1)] = (5));

} else {
var statearr_39405_39460 = state_39369__$1;
(statearr_39405_39460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (23))){
var inst_39328 = (state_39369[(14)]);
var inst_39334 = (inst_39328 == null);
var state_39369__$1 = state_39369;
if(cljs.core.truth_(inst_39334)){
var statearr_39406_39461 = state_39369__$1;
(statearr_39406_39461[(1)] = (26));

} else {
var statearr_39407_39462 = state_39369__$1;
(statearr_39407_39462[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (35))){
var inst_39354 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
if(cljs.core.truth_(inst_39354)){
var statearr_39408_39463 = state_39369__$1;
(statearr_39408_39463[(1)] = (36));

} else {
var statearr_39409_39464 = state_39369__$1;
(statearr_39409_39464[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (19))){
var inst_39297 = (state_39369[(7)]);
var inst_39316 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39297);
var state_39369__$1 = state_39369;
var statearr_39410_39465 = state_39369__$1;
(statearr_39410_39465[(2)] = inst_39316);

(statearr_39410_39465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (11))){
var inst_39297 = (state_39369[(7)]);
var inst_39301 = (inst_39297 == null);
var inst_39302 = cljs.core.not.call(null,inst_39301);
var state_39369__$1 = state_39369;
if(inst_39302){
var statearr_39411_39466 = state_39369__$1;
(statearr_39411_39466[(1)] = (13));

} else {
var statearr_39412_39467 = state_39369__$1;
(statearr_39412_39467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (9))){
var inst_39273 = (state_39369[(8)]);
var state_39369__$1 = state_39369;
var statearr_39413_39468 = state_39369__$1;
(statearr_39413_39468[(2)] = inst_39273);

(statearr_39413_39468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (5))){
var state_39369__$1 = state_39369;
var statearr_39414_39469 = state_39369__$1;
(statearr_39414_39469[(2)] = true);

(statearr_39414_39469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (14))){
var state_39369__$1 = state_39369;
var statearr_39415_39470 = state_39369__$1;
(statearr_39415_39470[(2)] = false);

(statearr_39415_39470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (26))){
var inst_39329 = (state_39369[(11)]);
var inst_39336 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39329);
var state_39369__$1 = state_39369;
var statearr_39416_39471 = state_39369__$1;
(statearr_39416_39471[(2)] = inst_39336);

(statearr_39416_39471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (16))){
var state_39369__$1 = state_39369;
var statearr_39417_39472 = state_39369__$1;
(statearr_39417_39472[(2)] = true);

(statearr_39417_39472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (38))){
var inst_39359 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
var statearr_39418_39473 = state_39369__$1;
(statearr_39418_39473[(2)] = inst_39359);

(statearr_39418_39473[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (30))){
var inst_39320 = (state_39369[(9)]);
var inst_39321 = (state_39369[(13)]);
var inst_39329 = (state_39369[(11)]);
var inst_39346 = cljs.core.empty_QMARK_.call(null,inst_39320);
var inst_39347 = inst_39321.call(null,inst_39329);
var inst_39348 = cljs.core.not.call(null,inst_39347);
var inst_39349 = (inst_39346) && (inst_39348);
var state_39369__$1 = state_39369;
var statearr_39419_39474 = state_39369__$1;
(statearr_39419_39474[(2)] = inst_39349);

(statearr_39419_39474[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (10))){
var inst_39273 = (state_39369[(8)]);
var inst_39293 = (state_39369[(2)]);
var inst_39294 = cljs.core.get.call(null,inst_39293,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39295 = cljs.core.get.call(null,inst_39293,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39296 = cljs.core.get.call(null,inst_39293,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39297 = inst_39273;
var state_39369__$1 = (function (){var statearr_39420 = state_39369;
(statearr_39420[(16)] = inst_39296);

(statearr_39420[(17)] = inst_39294);

(statearr_39420[(7)] = inst_39297);

(statearr_39420[(18)] = inst_39295);

return statearr_39420;
})();
var statearr_39421_39475 = state_39369__$1;
(statearr_39421_39475[(2)] = null);

(statearr_39421_39475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (18))){
var inst_39311 = (state_39369[(2)]);
var state_39369__$1 = state_39369;
var statearr_39422_39476 = state_39369__$1;
(statearr_39422_39476[(2)] = inst_39311);

(statearr_39422_39476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (37))){
var state_39369__$1 = state_39369;
var statearr_39423_39477 = state_39369__$1;
(statearr_39423_39477[(2)] = null);

(statearr_39423_39477[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39370 === (8))){
var inst_39273 = (state_39369[(8)]);
var inst_39290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39273);
var state_39369__$1 = state_39369;
var statearr_39424_39478 = state_39369__$1;
(statearr_39424_39478[(2)] = inst_39290);

(statearr_39424_39478[(1)] = (10));


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
});})(c__37699__auto___39432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37587__auto__,c__37699__auto___39432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37588__auto__ = null;
var cljs$core$async$mix_$_state_machine__37588__auto____0 = (function (){
var statearr_39428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39428[(0)] = cljs$core$async$mix_$_state_machine__37588__auto__);

(statearr_39428[(1)] = (1));

return statearr_39428;
});
var cljs$core$async$mix_$_state_machine__37588__auto____1 = (function (state_39369){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_39369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e39429){if((e39429 instanceof Object)){
var ex__37591__auto__ = e39429;
var statearr_39430_39479 = state_39369;
(statearr_39430_39479[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39480 = state_39369;
state_39369 = G__39480;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37588__auto__ = function(state_39369){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37588__auto____1.call(this,state_39369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37588__auto____0;
cljs$core$async$mix_$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37588__auto____1;
return cljs$core$async$mix_$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___39432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37701__auto__ = (function (){var statearr_39431 = f__37700__auto__.call(null);
(statearr_39431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___39432);

return statearr_39431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___39432,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25536__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v,ch);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args39481 = [];
var len__25947__auto___39484 = arguments.length;
var i__25948__auto___39485 = (0);
while(true){
if((i__25948__auto___39485 < len__25947__auto___39484)){
args39481.push((arguments[i__25948__auto___39485]));

var G__39486 = (i__25948__auto___39485 + (1));
i__25948__auto___39485 = G__39486;
continue;
} else {
}
break;
}

var G__39483 = args39481.length;
switch (G__39483) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39481.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25535__auto__ = (((p == null))?null:p);
var m__25536__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,p,v);
} else {
var m__25536__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args39489 = [];
var len__25947__auto___39614 = arguments.length;
var i__25948__auto___39615 = (0);
while(true){
if((i__25948__auto___39615 < len__25947__auto___39614)){
args39489.push((arguments[i__25948__auto___39615]));

var G__39616 = (i__25948__auto___39615 + (1));
i__25948__auto___39615 = G__39616;
continue;
} else {
}
break;
}

var G__39491 = args39489.length;
switch (G__39491) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39489.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24872__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24872__auto__,mults){
return (function (p1__39488_SHARP_){
if(cljs.core.truth_(p1__39488_SHARP_.call(null,topic))){
return p1__39488_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39488_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24872__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39492 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39493){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39493 = meta39493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39494,meta39493__$1){
var self__ = this;
var _39494__$1 = this;
return (new cljs.core.async.t_cljs$core$async39492(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39493__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39494){
var self__ = this;
var _39494__$1 = this;
return self__.meta39493;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39492.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39492.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async39492.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39492.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39492.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39492.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39492.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39493","meta39493",1980813504,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39492";

cljs.core.async.t_cljs$core$async39492.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39492");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39492 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39492(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39493){
return (new cljs.core.async.t_cljs$core$async39492(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39493));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39492(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37699__auto___39618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___39618,mults,ensure_mult,p){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___39618,mults,ensure_mult,p){
return (function (state_39566){
var state_val_39567 = (state_39566[(1)]);
if((state_val_39567 === (7))){
var inst_39562 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
var statearr_39568_39619 = state_39566__$1;
(statearr_39568_39619[(2)] = inst_39562);

(statearr_39568_39619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (20))){
var state_39566__$1 = state_39566;
var statearr_39569_39620 = state_39566__$1;
(statearr_39569_39620[(2)] = null);

(statearr_39569_39620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (1))){
var state_39566__$1 = state_39566;
var statearr_39570_39621 = state_39566__$1;
(statearr_39570_39621[(2)] = null);

(statearr_39570_39621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (24))){
var inst_39545 = (state_39566[(7)]);
var inst_39554 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39545);
var state_39566__$1 = state_39566;
var statearr_39571_39622 = state_39566__$1;
(statearr_39571_39622[(2)] = inst_39554);

(statearr_39571_39622[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (4))){
var inst_39497 = (state_39566[(8)]);
var inst_39497__$1 = (state_39566[(2)]);
var inst_39498 = (inst_39497__$1 == null);
var state_39566__$1 = (function (){var statearr_39572 = state_39566;
(statearr_39572[(8)] = inst_39497__$1);

return statearr_39572;
})();
if(cljs.core.truth_(inst_39498)){
var statearr_39573_39623 = state_39566__$1;
(statearr_39573_39623[(1)] = (5));

} else {
var statearr_39574_39624 = state_39566__$1;
(statearr_39574_39624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (15))){
var inst_39539 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
var statearr_39575_39625 = state_39566__$1;
(statearr_39575_39625[(2)] = inst_39539);

(statearr_39575_39625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (21))){
var inst_39559 = (state_39566[(2)]);
var state_39566__$1 = (function (){var statearr_39576 = state_39566;
(statearr_39576[(9)] = inst_39559);

return statearr_39576;
})();
var statearr_39577_39626 = state_39566__$1;
(statearr_39577_39626[(2)] = null);

(statearr_39577_39626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (13))){
var inst_39521 = (state_39566[(10)]);
var inst_39523 = cljs.core.chunked_seq_QMARK_.call(null,inst_39521);
var state_39566__$1 = state_39566;
if(inst_39523){
var statearr_39578_39627 = state_39566__$1;
(statearr_39578_39627[(1)] = (16));

} else {
var statearr_39579_39628 = state_39566__$1;
(statearr_39579_39628[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (22))){
var inst_39551 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
if(cljs.core.truth_(inst_39551)){
var statearr_39580_39629 = state_39566__$1;
(statearr_39580_39629[(1)] = (23));

} else {
var statearr_39581_39630 = state_39566__$1;
(statearr_39581_39630[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (6))){
var inst_39545 = (state_39566[(7)]);
var inst_39547 = (state_39566[(11)]);
var inst_39497 = (state_39566[(8)]);
var inst_39545__$1 = topic_fn.call(null,inst_39497);
var inst_39546 = cljs.core.deref.call(null,mults);
var inst_39547__$1 = cljs.core.get.call(null,inst_39546,inst_39545__$1);
var state_39566__$1 = (function (){var statearr_39582 = state_39566;
(statearr_39582[(7)] = inst_39545__$1);

(statearr_39582[(11)] = inst_39547__$1);

return statearr_39582;
})();
if(cljs.core.truth_(inst_39547__$1)){
var statearr_39583_39631 = state_39566__$1;
(statearr_39583_39631[(1)] = (19));

} else {
var statearr_39584_39632 = state_39566__$1;
(statearr_39584_39632[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (25))){
var inst_39556 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
var statearr_39585_39633 = state_39566__$1;
(statearr_39585_39633[(2)] = inst_39556);

(statearr_39585_39633[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (17))){
var inst_39521 = (state_39566[(10)]);
var inst_39530 = cljs.core.first.call(null,inst_39521);
var inst_39531 = cljs.core.async.muxch_STAR_.call(null,inst_39530);
var inst_39532 = cljs.core.async.close_BANG_.call(null,inst_39531);
var inst_39533 = cljs.core.next.call(null,inst_39521);
var inst_39507 = inst_39533;
var inst_39508 = null;
var inst_39509 = (0);
var inst_39510 = (0);
var state_39566__$1 = (function (){var statearr_39586 = state_39566;
(statearr_39586[(12)] = inst_39509);

(statearr_39586[(13)] = inst_39510);

(statearr_39586[(14)] = inst_39532);

(statearr_39586[(15)] = inst_39508);

(statearr_39586[(16)] = inst_39507);

return statearr_39586;
})();
var statearr_39587_39634 = state_39566__$1;
(statearr_39587_39634[(2)] = null);

(statearr_39587_39634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (3))){
var inst_39564 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39566__$1,inst_39564);
} else {
if((state_val_39567 === (12))){
var inst_39541 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
var statearr_39588_39635 = state_39566__$1;
(statearr_39588_39635[(2)] = inst_39541);

(statearr_39588_39635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (2))){
var state_39566__$1 = state_39566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39566__$1,(4),ch);
} else {
if((state_val_39567 === (23))){
var state_39566__$1 = state_39566;
var statearr_39589_39636 = state_39566__$1;
(statearr_39589_39636[(2)] = null);

(statearr_39589_39636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (19))){
var inst_39547 = (state_39566[(11)]);
var inst_39497 = (state_39566[(8)]);
var inst_39549 = cljs.core.async.muxch_STAR_.call(null,inst_39547);
var state_39566__$1 = state_39566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39566__$1,(22),inst_39549,inst_39497);
} else {
if((state_val_39567 === (11))){
var inst_39521 = (state_39566[(10)]);
var inst_39507 = (state_39566[(16)]);
var inst_39521__$1 = cljs.core.seq.call(null,inst_39507);
var state_39566__$1 = (function (){var statearr_39590 = state_39566;
(statearr_39590[(10)] = inst_39521__$1);

return statearr_39590;
})();
if(inst_39521__$1){
var statearr_39591_39637 = state_39566__$1;
(statearr_39591_39637[(1)] = (13));

} else {
var statearr_39592_39638 = state_39566__$1;
(statearr_39592_39638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (9))){
var inst_39543 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
var statearr_39593_39639 = state_39566__$1;
(statearr_39593_39639[(2)] = inst_39543);

(statearr_39593_39639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (5))){
var inst_39504 = cljs.core.deref.call(null,mults);
var inst_39505 = cljs.core.vals.call(null,inst_39504);
var inst_39506 = cljs.core.seq.call(null,inst_39505);
var inst_39507 = inst_39506;
var inst_39508 = null;
var inst_39509 = (0);
var inst_39510 = (0);
var state_39566__$1 = (function (){var statearr_39594 = state_39566;
(statearr_39594[(12)] = inst_39509);

(statearr_39594[(13)] = inst_39510);

(statearr_39594[(15)] = inst_39508);

(statearr_39594[(16)] = inst_39507);

return statearr_39594;
})();
var statearr_39595_39640 = state_39566__$1;
(statearr_39595_39640[(2)] = null);

(statearr_39595_39640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (14))){
var state_39566__$1 = state_39566;
var statearr_39599_39641 = state_39566__$1;
(statearr_39599_39641[(2)] = null);

(statearr_39599_39641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (16))){
var inst_39521 = (state_39566[(10)]);
var inst_39525 = cljs.core.chunk_first.call(null,inst_39521);
var inst_39526 = cljs.core.chunk_rest.call(null,inst_39521);
var inst_39527 = cljs.core.count.call(null,inst_39525);
var inst_39507 = inst_39526;
var inst_39508 = inst_39525;
var inst_39509 = inst_39527;
var inst_39510 = (0);
var state_39566__$1 = (function (){var statearr_39600 = state_39566;
(statearr_39600[(12)] = inst_39509);

(statearr_39600[(13)] = inst_39510);

(statearr_39600[(15)] = inst_39508);

(statearr_39600[(16)] = inst_39507);

return statearr_39600;
})();
var statearr_39601_39642 = state_39566__$1;
(statearr_39601_39642[(2)] = null);

(statearr_39601_39642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (10))){
var inst_39509 = (state_39566[(12)]);
var inst_39510 = (state_39566[(13)]);
var inst_39508 = (state_39566[(15)]);
var inst_39507 = (state_39566[(16)]);
var inst_39515 = cljs.core._nth.call(null,inst_39508,inst_39510);
var inst_39516 = cljs.core.async.muxch_STAR_.call(null,inst_39515);
var inst_39517 = cljs.core.async.close_BANG_.call(null,inst_39516);
var inst_39518 = (inst_39510 + (1));
var tmp39596 = inst_39509;
var tmp39597 = inst_39508;
var tmp39598 = inst_39507;
var inst_39507__$1 = tmp39598;
var inst_39508__$1 = tmp39597;
var inst_39509__$1 = tmp39596;
var inst_39510__$1 = inst_39518;
var state_39566__$1 = (function (){var statearr_39602 = state_39566;
(statearr_39602[(12)] = inst_39509__$1);

(statearr_39602[(13)] = inst_39510__$1);

(statearr_39602[(15)] = inst_39508__$1);

(statearr_39602[(16)] = inst_39507__$1);

(statearr_39602[(17)] = inst_39517);

return statearr_39602;
})();
var statearr_39603_39643 = state_39566__$1;
(statearr_39603_39643[(2)] = null);

(statearr_39603_39643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (18))){
var inst_39536 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
var statearr_39604_39644 = state_39566__$1;
(statearr_39604_39644[(2)] = inst_39536);

(statearr_39604_39644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (8))){
var inst_39509 = (state_39566[(12)]);
var inst_39510 = (state_39566[(13)]);
var inst_39512 = (inst_39510 < inst_39509);
var inst_39513 = inst_39512;
var state_39566__$1 = state_39566;
if(cljs.core.truth_(inst_39513)){
var statearr_39605_39645 = state_39566__$1;
(statearr_39605_39645[(1)] = (10));

} else {
var statearr_39606_39646 = state_39566__$1;
(statearr_39606_39646[(1)] = (11));

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
});})(c__37699__auto___39618,mults,ensure_mult,p))
;
return ((function (switch__37587__auto__,c__37699__auto___39618,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_39610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39610[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_39610[(1)] = (1));

return statearr_39610;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_39566){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_39566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e39611){if((e39611 instanceof Object)){
var ex__37591__auto__ = e39611;
var statearr_39612_39647 = state_39566;
(statearr_39612_39647[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39648 = state_39566;
state_39566 = G__39648;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_39566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_39566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___39618,mults,ensure_mult,p))
})();
var state__37701__auto__ = (function (){var statearr_39613 = f__37700__auto__.call(null);
(statearr_39613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___39618);

return statearr_39613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___39618,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args39649 = [];
var len__25947__auto___39652 = arguments.length;
var i__25948__auto___39653 = (0);
while(true){
if((i__25948__auto___39653 < len__25947__auto___39652)){
args39649.push((arguments[i__25948__auto___39653]));

var G__39654 = (i__25948__auto___39653 + (1));
i__25948__auto___39653 = G__39654;
continue;
} else {
}
break;
}

var G__39651 = args39649.length;
switch (G__39651) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39649.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args39656 = [];
var len__25947__auto___39659 = arguments.length;
var i__25948__auto___39660 = (0);
while(true){
if((i__25948__auto___39660 < len__25947__auto___39659)){
args39656.push((arguments[i__25948__auto___39660]));

var G__39661 = (i__25948__auto___39660 + (1));
i__25948__auto___39660 = G__39661;
continue;
} else {
}
break;
}

var G__39658 = args39656.length;
switch (G__39658) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39656.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args39663 = [];
var len__25947__auto___39734 = arguments.length;
var i__25948__auto___39735 = (0);
while(true){
if((i__25948__auto___39735 < len__25947__auto___39734)){
args39663.push((arguments[i__25948__auto___39735]));

var G__39736 = (i__25948__auto___39735 + (1));
i__25948__auto___39735 = G__39736;
continue;
} else {
}
break;
}

var G__39665 = args39663.length;
switch (G__39665) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39663.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37699__auto___39738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___39738,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___39738,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39704){
var state_val_39705 = (state_39704[(1)]);
if((state_val_39705 === (7))){
var state_39704__$1 = state_39704;
var statearr_39706_39739 = state_39704__$1;
(statearr_39706_39739[(2)] = null);

(statearr_39706_39739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (1))){
var state_39704__$1 = state_39704;
var statearr_39707_39740 = state_39704__$1;
(statearr_39707_39740[(2)] = null);

(statearr_39707_39740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (4))){
var inst_39668 = (state_39704[(7)]);
var inst_39670 = (inst_39668 < cnt);
var state_39704__$1 = state_39704;
if(cljs.core.truth_(inst_39670)){
var statearr_39708_39741 = state_39704__$1;
(statearr_39708_39741[(1)] = (6));

} else {
var statearr_39709_39742 = state_39704__$1;
(statearr_39709_39742[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (15))){
var inst_39700 = (state_39704[(2)]);
var state_39704__$1 = state_39704;
var statearr_39710_39743 = state_39704__$1;
(statearr_39710_39743[(2)] = inst_39700);

(statearr_39710_39743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (13))){
var inst_39693 = cljs.core.async.close_BANG_.call(null,out);
var state_39704__$1 = state_39704;
var statearr_39711_39744 = state_39704__$1;
(statearr_39711_39744[(2)] = inst_39693);

(statearr_39711_39744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (6))){
var state_39704__$1 = state_39704;
var statearr_39712_39745 = state_39704__$1;
(statearr_39712_39745[(2)] = null);

(statearr_39712_39745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (3))){
var inst_39702 = (state_39704[(2)]);
var state_39704__$1 = state_39704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39704__$1,inst_39702);
} else {
if((state_val_39705 === (12))){
var inst_39690 = (state_39704[(8)]);
var inst_39690__$1 = (state_39704[(2)]);
var inst_39691 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39690__$1);
var state_39704__$1 = (function (){var statearr_39713 = state_39704;
(statearr_39713[(8)] = inst_39690__$1);

return statearr_39713;
})();
if(cljs.core.truth_(inst_39691)){
var statearr_39714_39746 = state_39704__$1;
(statearr_39714_39746[(1)] = (13));

} else {
var statearr_39715_39747 = state_39704__$1;
(statearr_39715_39747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (2))){
var inst_39667 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39668 = (0);
var state_39704__$1 = (function (){var statearr_39716 = state_39704;
(statearr_39716[(7)] = inst_39668);

(statearr_39716[(9)] = inst_39667);

return statearr_39716;
})();
var statearr_39717_39748 = state_39704__$1;
(statearr_39717_39748[(2)] = null);

(statearr_39717_39748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (11))){
var inst_39668 = (state_39704[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39704,(10),Object,null,(9));
var inst_39677 = chs__$1.call(null,inst_39668);
var inst_39678 = done.call(null,inst_39668);
var inst_39679 = cljs.core.async.take_BANG_.call(null,inst_39677,inst_39678);
var state_39704__$1 = state_39704;
var statearr_39718_39749 = state_39704__$1;
(statearr_39718_39749[(2)] = inst_39679);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39704__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (9))){
var inst_39668 = (state_39704[(7)]);
var inst_39681 = (state_39704[(2)]);
var inst_39682 = (inst_39668 + (1));
var inst_39668__$1 = inst_39682;
var state_39704__$1 = (function (){var statearr_39719 = state_39704;
(statearr_39719[(7)] = inst_39668__$1);

(statearr_39719[(10)] = inst_39681);

return statearr_39719;
})();
var statearr_39720_39750 = state_39704__$1;
(statearr_39720_39750[(2)] = null);

(statearr_39720_39750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (5))){
var inst_39688 = (state_39704[(2)]);
var state_39704__$1 = (function (){var statearr_39721 = state_39704;
(statearr_39721[(11)] = inst_39688);

return statearr_39721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39704__$1,(12),dchan);
} else {
if((state_val_39705 === (14))){
var inst_39690 = (state_39704[(8)]);
var inst_39695 = cljs.core.apply.call(null,f,inst_39690);
var state_39704__$1 = state_39704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39704__$1,(16),out,inst_39695);
} else {
if((state_val_39705 === (16))){
var inst_39697 = (state_39704[(2)]);
var state_39704__$1 = (function (){var statearr_39722 = state_39704;
(statearr_39722[(12)] = inst_39697);

return statearr_39722;
})();
var statearr_39723_39751 = state_39704__$1;
(statearr_39723_39751[(2)] = null);

(statearr_39723_39751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (10))){
var inst_39672 = (state_39704[(2)]);
var inst_39673 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39704__$1 = (function (){var statearr_39724 = state_39704;
(statearr_39724[(13)] = inst_39672);

return statearr_39724;
})();
var statearr_39725_39752 = state_39704__$1;
(statearr_39725_39752[(2)] = inst_39673);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39704__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (8))){
var inst_39686 = (state_39704[(2)]);
var state_39704__$1 = state_39704;
var statearr_39726_39753 = state_39704__$1;
(statearr_39726_39753[(2)] = inst_39686);

(statearr_39726_39753[(1)] = (5));


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
});})(c__37699__auto___39738,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37587__auto__,c__37699__auto___39738,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_39730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39730[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_39730[(1)] = (1));

return statearr_39730;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_39704){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_39704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e39731){if((e39731 instanceof Object)){
var ex__37591__auto__ = e39731;
var statearr_39732_39754 = state_39704;
(statearr_39732_39754[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39755 = state_39704;
state_39704 = G__39755;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_39704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_39704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___39738,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37701__auto__ = (function (){var statearr_39733 = f__37700__auto__.call(null);
(statearr_39733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___39738);

return statearr_39733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___39738,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args39757 = [];
var len__25947__auto___39815 = arguments.length;
var i__25948__auto___39816 = (0);
while(true){
if((i__25948__auto___39816 < len__25947__auto___39815)){
args39757.push((arguments[i__25948__auto___39816]));

var G__39817 = (i__25948__auto___39816 + (1));
i__25948__auto___39816 = G__39817;
continue;
} else {
}
break;
}

var G__39759 = args39757.length;
switch (G__39759) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39757.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37699__auto___39819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___39819,out){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___39819,out){
return (function (state_39791){
var state_val_39792 = (state_39791[(1)]);
if((state_val_39792 === (7))){
var inst_39771 = (state_39791[(7)]);
var inst_39770 = (state_39791[(8)]);
var inst_39770__$1 = (state_39791[(2)]);
var inst_39771__$1 = cljs.core.nth.call(null,inst_39770__$1,(0),null);
var inst_39772 = cljs.core.nth.call(null,inst_39770__$1,(1),null);
var inst_39773 = (inst_39771__$1 == null);
var state_39791__$1 = (function (){var statearr_39793 = state_39791;
(statearr_39793[(7)] = inst_39771__$1);

(statearr_39793[(9)] = inst_39772);

(statearr_39793[(8)] = inst_39770__$1);

return statearr_39793;
})();
if(cljs.core.truth_(inst_39773)){
var statearr_39794_39820 = state_39791__$1;
(statearr_39794_39820[(1)] = (8));

} else {
var statearr_39795_39821 = state_39791__$1;
(statearr_39795_39821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39792 === (1))){
var inst_39760 = cljs.core.vec.call(null,chs);
var inst_39761 = inst_39760;
var state_39791__$1 = (function (){var statearr_39796 = state_39791;
(statearr_39796[(10)] = inst_39761);

return statearr_39796;
})();
var statearr_39797_39822 = state_39791__$1;
(statearr_39797_39822[(2)] = null);

(statearr_39797_39822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39792 === (4))){
var inst_39761 = (state_39791[(10)]);
var state_39791__$1 = state_39791;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39791__$1,(7),inst_39761);
} else {
if((state_val_39792 === (6))){
var inst_39787 = (state_39791[(2)]);
var state_39791__$1 = state_39791;
var statearr_39798_39823 = state_39791__$1;
(statearr_39798_39823[(2)] = inst_39787);

(statearr_39798_39823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39792 === (3))){
var inst_39789 = (state_39791[(2)]);
var state_39791__$1 = state_39791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39791__$1,inst_39789);
} else {
if((state_val_39792 === (2))){
var inst_39761 = (state_39791[(10)]);
var inst_39763 = cljs.core.count.call(null,inst_39761);
var inst_39764 = (inst_39763 > (0));
var state_39791__$1 = state_39791;
if(cljs.core.truth_(inst_39764)){
var statearr_39800_39824 = state_39791__$1;
(statearr_39800_39824[(1)] = (4));

} else {
var statearr_39801_39825 = state_39791__$1;
(statearr_39801_39825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39792 === (11))){
var inst_39761 = (state_39791[(10)]);
var inst_39780 = (state_39791[(2)]);
var tmp39799 = inst_39761;
var inst_39761__$1 = tmp39799;
var state_39791__$1 = (function (){var statearr_39802 = state_39791;
(statearr_39802[(10)] = inst_39761__$1);

(statearr_39802[(11)] = inst_39780);

return statearr_39802;
})();
var statearr_39803_39826 = state_39791__$1;
(statearr_39803_39826[(2)] = null);

(statearr_39803_39826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39792 === (9))){
var inst_39771 = (state_39791[(7)]);
var state_39791__$1 = state_39791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39791__$1,(11),out,inst_39771);
} else {
if((state_val_39792 === (5))){
var inst_39785 = cljs.core.async.close_BANG_.call(null,out);
var state_39791__$1 = state_39791;
var statearr_39804_39827 = state_39791__$1;
(statearr_39804_39827[(2)] = inst_39785);

(statearr_39804_39827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39792 === (10))){
var inst_39783 = (state_39791[(2)]);
var state_39791__$1 = state_39791;
var statearr_39805_39828 = state_39791__$1;
(statearr_39805_39828[(2)] = inst_39783);

(statearr_39805_39828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39792 === (8))){
var inst_39761 = (state_39791[(10)]);
var inst_39771 = (state_39791[(7)]);
var inst_39772 = (state_39791[(9)]);
var inst_39770 = (state_39791[(8)]);
var inst_39775 = (function (){var cs = inst_39761;
var vec__39766 = inst_39770;
var v = inst_39771;
var c = inst_39772;
return ((function (cs,vec__39766,v,c,inst_39761,inst_39771,inst_39772,inst_39770,state_val_39792,c__37699__auto___39819,out){
return (function (p1__39756_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39756_SHARP_);
});
;})(cs,vec__39766,v,c,inst_39761,inst_39771,inst_39772,inst_39770,state_val_39792,c__37699__auto___39819,out))
})();
var inst_39776 = cljs.core.filterv.call(null,inst_39775,inst_39761);
var inst_39761__$1 = inst_39776;
var state_39791__$1 = (function (){var statearr_39806 = state_39791;
(statearr_39806[(10)] = inst_39761__$1);

return statearr_39806;
})();
var statearr_39807_39829 = state_39791__$1;
(statearr_39807_39829[(2)] = null);

(statearr_39807_39829[(1)] = (2));


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
});})(c__37699__auto___39819,out))
;
return ((function (switch__37587__auto__,c__37699__auto___39819,out){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_39811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39811[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_39811[(1)] = (1));

return statearr_39811;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_39791){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_39791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e39812){if((e39812 instanceof Object)){
var ex__37591__auto__ = e39812;
var statearr_39813_39830 = state_39791;
(statearr_39813_39830[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39831 = state_39791;
state_39791 = G__39831;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_39791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_39791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___39819,out))
})();
var state__37701__auto__ = (function (){var statearr_39814 = f__37700__auto__.call(null);
(statearr_39814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___39819);

return statearr_39814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___39819,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args39832 = [];
var len__25947__auto___39881 = arguments.length;
var i__25948__auto___39882 = (0);
while(true){
if((i__25948__auto___39882 < len__25947__auto___39881)){
args39832.push((arguments[i__25948__auto___39882]));

var G__39883 = (i__25948__auto___39882 + (1));
i__25948__auto___39882 = G__39883;
continue;
} else {
}
break;
}

var G__39834 = args39832.length;
switch (G__39834) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39832.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37699__auto___39885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___39885,out){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___39885,out){
return (function (state_39858){
var state_val_39859 = (state_39858[(1)]);
if((state_val_39859 === (7))){
var inst_39840 = (state_39858[(7)]);
var inst_39840__$1 = (state_39858[(2)]);
var inst_39841 = (inst_39840__$1 == null);
var inst_39842 = cljs.core.not.call(null,inst_39841);
var state_39858__$1 = (function (){var statearr_39860 = state_39858;
(statearr_39860[(7)] = inst_39840__$1);

return statearr_39860;
})();
if(inst_39842){
var statearr_39861_39886 = state_39858__$1;
(statearr_39861_39886[(1)] = (8));

} else {
var statearr_39862_39887 = state_39858__$1;
(statearr_39862_39887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (1))){
var inst_39835 = (0);
var state_39858__$1 = (function (){var statearr_39863 = state_39858;
(statearr_39863[(8)] = inst_39835);

return statearr_39863;
})();
var statearr_39864_39888 = state_39858__$1;
(statearr_39864_39888[(2)] = null);

(statearr_39864_39888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (4))){
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39858__$1,(7),ch);
} else {
if((state_val_39859 === (6))){
var inst_39853 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39865_39889 = state_39858__$1;
(statearr_39865_39889[(2)] = inst_39853);

(statearr_39865_39889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (3))){
var inst_39855 = (state_39858[(2)]);
var inst_39856 = cljs.core.async.close_BANG_.call(null,out);
var state_39858__$1 = (function (){var statearr_39866 = state_39858;
(statearr_39866[(9)] = inst_39855);

return statearr_39866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39858__$1,inst_39856);
} else {
if((state_val_39859 === (2))){
var inst_39835 = (state_39858[(8)]);
var inst_39837 = (inst_39835 < n);
var state_39858__$1 = state_39858;
if(cljs.core.truth_(inst_39837)){
var statearr_39867_39890 = state_39858__$1;
(statearr_39867_39890[(1)] = (4));

} else {
var statearr_39868_39891 = state_39858__$1;
(statearr_39868_39891[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (11))){
var inst_39835 = (state_39858[(8)]);
var inst_39845 = (state_39858[(2)]);
var inst_39846 = (inst_39835 + (1));
var inst_39835__$1 = inst_39846;
var state_39858__$1 = (function (){var statearr_39869 = state_39858;
(statearr_39869[(10)] = inst_39845);

(statearr_39869[(8)] = inst_39835__$1);

return statearr_39869;
})();
var statearr_39870_39892 = state_39858__$1;
(statearr_39870_39892[(2)] = null);

(statearr_39870_39892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (9))){
var state_39858__$1 = state_39858;
var statearr_39871_39893 = state_39858__$1;
(statearr_39871_39893[(2)] = null);

(statearr_39871_39893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (5))){
var state_39858__$1 = state_39858;
var statearr_39872_39894 = state_39858__$1;
(statearr_39872_39894[(2)] = null);

(statearr_39872_39894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (10))){
var inst_39850 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39873_39895 = state_39858__$1;
(statearr_39873_39895[(2)] = inst_39850);

(statearr_39873_39895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (8))){
var inst_39840 = (state_39858[(7)]);
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39858__$1,(11),out,inst_39840);
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
});})(c__37699__auto___39885,out))
;
return ((function (switch__37587__auto__,c__37699__auto___39885,out){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_39877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39877[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_39877[(1)] = (1));

return statearr_39877;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_39858){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_39858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e39878){if((e39878 instanceof Object)){
var ex__37591__auto__ = e39878;
var statearr_39879_39896 = state_39858;
(statearr_39879_39896[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39897 = state_39858;
state_39858 = G__39897;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_39858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_39858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___39885,out))
})();
var state__37701__auto__ = (function (){var statearr_39880 = f__37700__auto__.call(null);
(statearr_39880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___39885);

return statearr_39880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___39885,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39905 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39905 = (function (map_LT_,f,ch,meta39906){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39906 = meta39906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39907,meta39906__$1){
var self__ = this;
var _39907__$1 = this;
return (new cljs.core.async.t_cljs$core$async39905(self__.map_LT_,self__.f,self__.ch,meta39906__$1));
});

cljs.core.async.t_cljs$core$async39905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39907){
var self__ = this;
var _39907__$1 = this;
return self__.meta39906;
});

cljs.core.async.t_cljs$core$async39905.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39905.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39905.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39908 = (function (map_LT_,f,ch,meta39906,_,fn1,meta39909){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39906 = meta39906;
this._ = _;
this.fn1 = fn1;
this.meta39909 = meta39909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39910,meta39909__$1){
var self__ = this;
var _39910__$1 = this;
return (new cljs.core.async.t_cljs$core$async39908(self__.map_LT_,self__.f,self__.ch,self__.meta39906,self__._,self__.fn1,meta39909__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39910){
var self__ = this;
var _39910__$1 = this;
return self__.meta39909;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39908.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39908.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39898_SHARP_){
return f1.call(null,(((p1__39898_SHARP_ == null))?null:self__.f.call(null,p1__39898_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39908.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39906","meta39906",1632292978,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39905","cljs.core.async/t_cljs$core$async39905",2106300976,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39909","meta39909",-578105731,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39908";

cljs.core.async.t_cljs$core$async39908.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39908");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39908 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39908(map_LT___$1,f__$1,ch__$1,meta39906__$1,___$2,fn1__$1,meta39909){
return (new cljs.core.async.t_cljs$core$async39908(map_LT___$1,f__$1,ch__$1,meta39906__$1,___$2,fn1__$1,meta39909));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39908(self__.map_LT_,self__.f,self__.ch,self__.meta39906,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24860__auto__ = ret;
if(cljs.core.truth_(and__24860__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24860__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39905.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39906","meta39906",1632292978,null)], null);
});

cljs.core.async.t_cljs$core$async39905.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39905";

cljs.core.async.t_cljs$core$async39905.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39905");
});

cljs.core.async.__GT_t_cljs$core$async39905 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39905(map_LT___$1,f__$1,ch__$1,meta39906){
return (new cljs.core.async.t_cljs$core$async39905(map_LT___$1,f__$1,ch__$1,meta39906));
});

}

return (new cljs.core.async.t_cljs$core$async39905(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39914 = (function (map_GT_,f,ch,meta39915){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39915 = meta39915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39916,meta39915__$1){
var self__ = this;
var _39916__$1 = this;
return (new cljs.core.async.t_cljs$core$async39914(self__.map_GT_,self__.f,self__.ch,meta39915__$1));
});

cljs.core.async.t_cljs$core$async39914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39916){
var self__ = this;
var _39916__$1 = this;
return self__.meta39915;
});

cljs.core.async.t_cljs$core$async39914.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39914.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39914.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39914.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39914.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39914.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39915","meta39915",-1572937310,null)], null);
});

cljs.core.async.t_cljs$core$async39914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39914";

cljs.core.async.t_cljs$core$async39914.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39914");
});

cljs.core.async.__GT_t_cljs$core$async39914 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39914(map_GT___$1,f__$1,ch__$1,meta39915){
return (new cljs.core.async.t_cljs$core$async39914(map_GT___$1,f__$1,ch__$1,meta39915));
});

}

return (new cljs.core.async.t_cljs$core$async39914(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39920 = (function (filter_GT_,p,ch,meta39921){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39921 = meta39921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39922,meta39921__$1){
var self__ = this;
var _39922__$1 = this;
return (new cljs.core.async.t_cljs$core$async39920(self__.filter_GT_,self__.p,self__.ch,meta39921__$1));
});

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39922){
var self__ = this;
var _39922__$1 = this;
return self__.meta39921;
});

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39921","meta39921",-649543493,null)], null);
});

cljs.core.async.t_cljs$core$async39920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39920";

cljs.core.async.t_cljs$core$async39920.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"cljs.core.async/t_cljs$core$async39920");
});

cljs.core.async.__GT_t_cljs$core$async39920 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39920(filter_GT___$1,p__$1,ch__$1,meta39921){
return (new cljs.core.async.t_cljs$core$async39920(filter_GT___$1,p__$1,ch__$1,meta39921));
});

}

return (new cljs.core.async.t_cljs$core$async39920(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39923 = [];
var len__25947__auto___39967 = arguments.length;
var i__25948__auto___39968 = (0);
while(true){
if((i__25948__auto___39968 < len__25947__auto___39967)){
args39923.push((arguments[i__25948__auto___39968]));

var G__39969 = (i__25948__auto___39968 + (1));
i__25948__auto___39968 = G__39969;
continue;
} else {
}
break;
}

var G__39925 = args39923.length;
switch (G__39925) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39923.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37699__auto___39971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___39971,out){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___39971,out){
return (function (state_39946){
var state_val_39947 = (state_39946[(1)]);
if((state_val_39947 === (7))){
var inst_39942 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39948_39972 = state_39946__$1;
(statearr_39948_39972[(2)] = inst_39942);

(statearr_39948_39972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (1))){
var state_39946__$1 = state_39946;
var statearr_39949_39973 = state_39946__$1;
(statearr_39949_39973[(2)] = null);

(statearr_39949_39973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (4))){
var inst_39928 = (state_39946[(7)]);
var inst_39928__$1 = (state_39946[(2)]);
var inst_39929 = (inst_39928__$1 == null);
var state_39946__$1 = (function (){var statearr_39950 = state_39946;
(statearr_39950[(7)] = inst_39928__$1);

return statearr_39950;
})();
if(cljs.core.truth_(inst_39929)){
var statearr_39951_39974 = state_39946__$1;
(statearr_39951_39974[(1)] = (5));

} else {
var statearr_39952_39975 = state_39946__$1;
(statearr_39952_39975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (6))){
var inst_39928 = (state_39946[(7)]);
var inst_39933 = p.call(null,inst_39928);
var state_39946__$1 = state_39946;
if(cljs.core.truth_(inst_39933)){
var statearr_39953_39976 = state_39946__$1;
(statearr_39953_39976[(1)] = (8));

} else {
var statearr_39954_39977 = state_39946__$1;
(statearr_39954_39977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (3))){
var inst_39944 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39946__$1,inst_39944);
} else {
if((state_val_39947 === (2))){
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39946__$1,(4),ch);
} else {
if((state_val_39947 === (11))){
var inst_39936 = (state_39946[(2)]);
var state_39946__$1 = state_39946;
var statearr_39955_39978 = state_39946__$1;
(statearr_39955_39978[(2)] = inst_39936);

(statearr_39955_39978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (9))){
var state_39946__$1 = state_39946;
var statearr_39956_39979 = state_39946__$1;
(statearr_39956_39979[(2)] = null);

(statearr_39956_39979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (5))){
var inst_39931 = cljs.core.async.close_BANG_.call(null,out);
var state_39946__$1 = state_39946;
var statearr_39957_39980 = state_39946__$1;
(statearr_39957_39980[(2)] = inst_39931);

(statearr_39957_39980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (10))){
var inst_39939 = (state_39946[(2)]);
var state_39946__$1 = (function (){var statearr_39958 = state_39946;
(statearr_39958[(8)] = inst_39939);

return statearr_39958;
})();
var statearr_39959_39981 = state_39946__$1;
(statearr_39959_39981[(2)] = null);

(statearr_39959_39981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39947 === (8))){
var inst_39928 = (state_39946[(7)]);
var state_39946__$1 = state_39946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39946__$1,(11),out,inst_39928);
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
});})(c__37699__auto___39971,out))
;
return ((function (switch__37587__auto__,c__37699__auto___39971,out){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_39963 = [null,null,null,null,null,null,null,null,null];
(statearr_39963[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_39963[(1)] = (1));

return statearr_39963;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_39946){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_39946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e39964){if((e39964 instanceof Object)){
var ex__37591__auto__ = e39964;
var statearr_39965_39982 = state_39946;
(statearr_39965_39982[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39983 = state_39946;
state_39946 = G__39983;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_39946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_39946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___39971,out))
})();
var state__37701__auto__ = (function (){var statearr_39966 = f__37700__auto__.call(null);
(statearr_39966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___39971);

return statearr_39966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___39971,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39984 = [];
var len__25947__auto___39987 = arguments.length;
var i__25948__auto___39988 = (0);
while(true){
if((i__25948__auto___39988 < len__25947__auto___39987)){
args39984.push((arguments[i__25948__auto___39988]));

var G__39989 = (i__25948__auto___39988 + (1));
i__25948__auto___39988 = G__39989;
continue;
} else {
}
break;
}

var G__39986 = args39984.length;
switch (G__39986) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39984.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto__){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto__){
return (function (state_40156){
var state_val_40157 = (state_40156[(1)]);
if((state_val_40157 === (7))){
var inst_40152 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40158_40199 = state_40156__$1;
(statearr_40158_40199[(2)] = inst_40152);

(statearr_40158_40199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (20))){
var inst_40122 = (state_40156[(7)]);
var inst_40133 = (state_40156[(2)]);
var inst_40134 = cljs.core.next.call(null,inst_40122);
var inst_40108 = inst_40134;
var inst_40109 = null;
var inst_40110 = (0);
var inst_40111 = (0);
var state_40156__$1 = (function (){var statearr_40159 = state_40156;
(statearr_40159[(8)] = inst_40109);

(statearr_40159[(9)] = inst_40111);

(statearr_40159[(10)] = inst_40133);

(statearr_40159[(11)] = inst_40110);

(statearr_40159[(12)] = inst_40108);

return statearr_40159;
})();
var statearr_40160_40200 = state_40156__$1;
(statearr_40160_40200[(2)] = null);

(statearr_40160_40200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (1))){
var state_40156__$1 = state_40156;
var statearr_40161_40201 = state_40156__$1;
(statearr_40161_40201[(2)] = null);

(statearr_40161_40201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (4))){
var inst_40097 = (state_40156[(13)]);
var inst_40097__$1 = (state_40156[(2)]);
var inst_40098 = (inst_40097__$1 == null);
var state_40156__$1 = (function (){var statearr_40162 = state_40156;
(statearr_40162[(13)] = inst_40097__$1);

return statearr_40162;
})();
if(cljs.core.truth_(inst_40098)){
var statearr_40163_40202 = state_40156__$1;
(statearr_40163_40202[(1)] = (5));

} else {
var statearr_40164_40203 = state_40156__$1;
(statearr_40164_40203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (15))){
var state_40156__$1 = state_40156;
var statearr_40168_40204 = state_40156__$1;
(statearr_40168_40204[(2)] = null);

(statearr_40168_40204[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (21))){
var state_40156__$1 = state_40156;
var statearr_40169_40205 = state_40156__$1;
(statearr_40169_40205[(2)] = null);

(statearr_40169_40205[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (13))){
var inst_40109 = (state_40156[(8)]);
var inst_40111 = (state_40156[(9)]);
var inst_40110 = (state_40156[(11)]);
var inst_40108 = (state_40156[(12)]);
var inst_40118 = (state_40156[(2)]);
var inst_40119 = (inst_40111 + (1));
var tmp40165 = inst_40109;
var tmp40166 = inst_40110;
var tmp40167 = inst_40108;
var inst_40108__$1 = tmp40167;
var inst_40109__$1 = tmp40165;
var inst_40110__$1 = tmp40166;
var inst_40111__$1 = inst_40119;
var state_40156__$1 = (function (){var statearr_40170 = state_40156;
(statearr_40170[(8)] = inst_40109__$1);

(statearr_40170[(9)] = inst_40111__$1);

(statearr_40170[(11)] = inst_40110__$1);

(statearr_40170[(14)] = inst_40118);

(statearr_40170[(12)] = inst_40108__$1);

return statearr_40170;
})();
var statearr_40171_40206 = state_40156__$1;
(statearr_40171_40206[(2)] = null);

(statearr_40171_40206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (22))){
var state_40156__$1 = state_40156;
var statearr_40172_40207 = state_40156__$1;
(statearr_40172_40207[(2)] = null);

(statearr_40172_40207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (6))){
var inst_40097 = (state_40156[(13)]);
var inst_40106 = f.call(null,inst_40097);
var inst_40107 = cljs.core.seq.call(null,inst_40106);
var inst_40108 = inst_40107;
var inst_40109 = null;
var inst_40110 = (0);
var inst_40111 = (0);
var state_40156__$1 = (function (){var statearr_40173 = state_40156;
(statearr_40173[(8)] = inst_40109);

(statearr_40173[(9)] = inst_40111);

(statearr_40173[(11)] = inst_40110);

(statearr_40173[(12)] = inst_40108);

return statearr_40173;
})();
var statearr_40174_40208 = state_40156__$1;
(statearr_40174_40208[(2)] = null);

(statearr_40174_40208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (17))){
var inst_40122 = (state_40156[(7)]);
var inst_40126 = cljs.core.chunk_first.call(null,inst_40122);
var inst_40127 = cljs.core.chunk_rest.call(null,inst_40122);
var inst_40128 = cljs.core.count.call(null,inst_40126);
var inst_40108 = inst_40127;
var inst_40109 = inst_40126;
var inst_40110 = inst_40128;
var inst_40111 = (0);
var state_40156__$1 = (function (){var statearr_40175 = state_40156;
(statearr_40175[(8)] = inst_40109);

(statearr_40175[(9)] = inst_40111);

(statearr_40175[(11)] = inst_40110);

(statearr_40175[(12)] = inst_40108);

return statearr_40175;
})();
var statearr_40176_40209 = state_40156__$1;
(statearr_40176_40209[(2)] = null);

(statearr_40176_40209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (3))){
var inst_40154 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40156__$1,inst_40154);
} else {
if((state_val_40157 === (12))){
var inst_40142 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40177_40210 = state_40156__$1;
(statearr_40177_40210[(2)] = inst_40142);

(statearr_40177_40210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (2))){
var state_40156__$1 = state_40156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40156__$1,(4),in$);
} else {
if((state_val_40157 === (23))){
var inst_40150 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40178_40211 = state_40156__$1;
(statearr_40178_40211[(2)] = inst_40150);

(statearr_40178_40211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (19))){
var inst_40137 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40179_40212 = state_40156__$1;
(statearr_40179_40212[(2)] = inst_40137);

(statearr_40179_40212[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (11))){
var inst_40122 = (state_40156[(7)]);
var inst_40108 = (state_40156[(12)]);
var inst_40122__$1 = cljs.core.seq.call(null,inst_40108);
var state_40156__$1 = (function (){var statearr_40180 = state_40156;
(statearr_40180[(7)] = inst_40122__$1);

return statearr_40180;
})();
if(inst_40122__$1){
var statearr_40181_40213 = state_40156__$1;
(statearr_40181_40213[(1)] = (14));

} else {
var statearr_40182_40214 = state_40156__$1;
(statearr_40182_40214[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (9))){
var inst_40144 = (state_40156[(2)]);
var inst_40145 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40156__$1 = (function (){var statearr_40183 = state_40156;
(statearr_40183[(15)] = inst_40144);

return statearr_40183;
})();
if(cljs.core.truth_(inst_40145)){
var statearr_40184_40215 = state_40156__$1;
(statearr_40184_40215[(1)] = (21));

} else {
var statearr_40185_40216 = state_40156__$1;
(statearr_40185_40216[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (5))){
var inst_40100 = cljs.core.async.close_BANG_.call(null,out);
var state_40156__$1 = state_40156;
var statearr_40186_40217 = state_40156__$1;
(statearr_40186_40217[(2)] = inst_40100);

(statearr_40186_40217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (14))){
var inst_40122 = (state_40156[(7)]);
var inst_40124 = cljs.core.chunked_seq_QMARK_.call(null,inst_40122);
var state_40156__$1 = state_40156;
if(inst_40124){
var statearr_40187_40218 = state_40156__$1;
(statearr_40187_40218[(1)] = (17));

} else {
var statearr_40188_40219 = state_40156__$1;
(statearr_40188_40219[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (16))){
var inst_40140 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40189_40220 = state_40156__$1;
(statearr_40189_40220[(2)] = inst_40140);

(statearr_40189_40220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (10))){
var inst_40109 = (state_40156[(8)]);
var inst_40111 = (state_40156[(9)]);
var inst_40116 = cljs.core._nth.call(null,inst_40109,inst_40111);
var state_40156__$1 = state_40156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40156__$1,(13),out,inst_40116);
} else {
if((state_val_40157 === (18))){
var inst_40122 = (state_40156[(7)]);
var inst_40131 = cljs.core.first.call(null,inst_40122);
var state_40156__$1 = state_40156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40156__$1,(20),out,inst_40131);
} else {
if((state_val_40157 === (8))){
var inst_40111 = (state_40156[(9)]);
var inst_40110 = (state_40156[(11)]);
var inst_40113 = (inst_40111 < inst_40110);
var inst_40114 = inst_40113;
var state_40156__$1 = state_40156;
if(cljs.core.truth_(inst_40114)){
var statearr_40190_40221 = state_40156__$1;
(statearr_40190_40221[(1)] = (10));

} else {
var statearr_40191_40222 = state_40156__$1;
(statearr_40191_40222[(1)] = (11));

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
});})(c__37699__auto__))
;
return ((function (switch__37587__auto__,c__37699__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37588__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37588__auto____0 = (function (){
var statearr_40195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40195[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37588__auto__);

(statearr_40195[(1)] = (1));

return statearr_40195;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37588__auto____1 = (function (state_40156){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_40156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e40196){if((e40196 instanceof Object)){
var ex__37591__auto__ = e40196;
var statearr_40197_40223 = state_40156;
(statearr_40197_40223[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40224 = state_40156;
state_40156 = G__40224;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37588__auto__ = function(state_40156){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37588__auto____1.call(this,state_40156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37588__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37588__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto__))
})();
var state__37701__auto__ = (function (){var statearr_40198 = f__37700__auto__.call(null);
(statearr_40198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto__);

return statearr_40198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto__))
);

return c__37699__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args40225 = [];
var len__25947__auto___40228 = arguments.length;
var i__25948__auto___40229 = (0);
while(true){
if((i__25948__auto___40229 < len__25947__auto___40228)){
args40225.push((arguments[i__25948__auto___40229]));

var G__40230 = (i__25948__auto___40229 + (1));
i__25948__auto___40229 = G__40230;
continue;
} else {
}
break;
}

var G__40227 = args40225.length;
switch (G__40227) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40225.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args40232 = [];
var len__25947__auto___40235 = arguments.length;
var i__25948__auto___40236 = (0);
while(true){
if((i__25948__auto___40236 < len__25947__auto___40235)){
args40232.push((arguments[i__25948__auto___40236]));

var G__40237 = (i__25948__auto___40236 + (1));
i__25948__auto___40236 = G__40237;
continue;
} else {
}
break;
}

var G__40234 = args40232.length;
switch (G__40234) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40232.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args40239 = [];
var len__25947__auto___40290 = arguments.length;
var i__25948__auto___40291 = (0);
while(true){
if((i__25948__auto___40291 < len__25947__auto___40290)){
args40239.push((arguments[i__25948__auto___40291]));

var G__40292 = (i__25948__auto___40291 + (1));
i__25948__auto___40291 = G__40292;
continue;
} else {
}
break;
}

var G__40241 = args40239.length;
switch (G__40241) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40239.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37699__auto___40294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___40294,out){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___40294,out){
return (function (state_40265){
var state_val_40266 = (state_40265[(1)]);
if((state_val_40266 === (7))){
var inst_40260 = (state_40265[(2)]);
var state_40265__$1 = state_40265;
var statearr_40267_40295 = state_40265__$1;
(statearr_40267_40295[(2)] = inst_40260);

(statearr_40267_40295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40266 === (1))){
var inst_40242 = null;
var state_40265__$1 = (function (){var statearr_40268 = state_40265;
(statearr_40268[(7)] = inst_40242);

return statearr_40268;
})();
var statearr_40269_40296 = state_40265__$1;
(statearr_40269_40296[(2)] = null);

(statearr_40269_40296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40266 === (4))){
var inst_40245 = (state_40265[(8)]);
var inst_40245__$1 = (state_40265[(2)]);
var inst_40246 = (inst_40245__$1 == null);
var inst_40247 = cljs.core.not.call(null,inst_40246);
var state_40265__$1 = (function (){var statearr_40270 = state_40265;
(statearr_40270[(8)] = inst_40245__$1);

return statearr_40270;
})();
if(inst_40247){
var statearr_40271_40297 = state_40265__$1;
(statearr_40271_40297[(1)] = (5));

} else {
var statearr_40272_40298 = state_40265__$1;
(statearr_40272_40298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40266 === (6))){
var state_40265__$1 = state_40265;
var statearr_40273_40299 = state_40265__$1;
(statearr_40273_40299[(2)] = null);

(statearr_40273_40299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40266 === (3))){
var inst_40262 = (state_40265[(2)]);
var inst_40263 = cljs.core.async.close_BANG_.call(null,out);
var state_40265__$1 = (function (){var statearr_40274 = state_40265;
(statearr_40274[(9)] = inst_40262);

return statearr_40274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40265__$1,inst_40263);
} else {
if((state_val_40266 === (2))){
var state_40265__$1 = state_40265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40265__$1,(4),ch);
} else {
if((state_val_40266 === (11))){
var inst_40245 = (state_40265[(8)]);
var inst_40254 = (state_40265[(2)]);
var inst_40242 = inst_40245;
var state_40265__$1 = (function (){var statearr_40275 = state_40265;
(statearr_40275[(10)] = inst_40254);

(statearr_40275[(7)] = inst_40242);

return statearr_40275;
})();
var statearr_40276_40300 = state_40265__$1;
(statearr_40276_40300[(2)] = null);

(statearr_40276_40300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40266 === (9))){
var inst_40245 = (state_40265[(8)]);
var state_40265__$1 = state_40265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40265__$1,(11),out,inst_40245);
} else {
if((state_val_40266 === (5))){
var inst_40245 = (state_40265[(8)]);
var inst_40242 = (state_40265[(7)]);
var inst_40249 = cljs.core._EQ_.call(null,inst_40245,inst_40242);
var state_40265__$1 = state_40265;
if(inst_40249){
var statearr_40278_40301 = state_40265__$1;
(statearr_40278_40301[(1)] = (8));

} else {
var statearr_40279_40302 = state_40265__$1;
(statearr_40279_40302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40266 === (10))){
var inst_40257 = (state_40265[(2)]);
var state_40265__$1 = state_40265;
var statearr_40280_40303 = state_40265__$1;
(statearr_40280_40303[(2)] = inst_40257);

(statearr_40280_40303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40266 === (8))){
var inst_40242 = (state_40265[(7)]);
var tmp40277 = inst_40242;
var inst_40242__$1 = tmp40277;
var state_40265__$1 = (function (){var statearr_40281 = state_40265;
(statearr_40281[(7)] = inst_40242__$1);

return statearr_40281;
})();
var statearr_40282_40304 = state_40265__$1;
(statearr_40282_40304[(2)] = null);

(statearr_40282_40304[(1)] = (2));


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
});})(c__37699__auto___40294,out))
;
return ((function (switch__37587__auto__,c__37699__auto___40294,out){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_40286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40286[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_40286[(1)] = (1));

return statearr_40286;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_40265){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_40265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e40287){if((e40287 instanceof Object)){
var ex__37591__auto__ = e40287;
var statearr_40288_40305 = state_40265;
(statearr_40288_40305[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40306 = state_40265;
state_40265 = G__40306;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_40265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_40265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___40294,out))
})();
var state__37701__auto__ = (function (){var statearr_40289 = f__37700__auto__.call(null);
(statearr_40289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___40294);

return statearr_40289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___40294,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40307 = [];
var len__25947__auto___40377 = arguments.length;
var i__25948__auto___40378 = (0);
while(true){
if((i__25948__auto___40378 < len__25947__auto___40377)){
args40307.push((arguments[i__25948__auto___40378]));

var G__40379 = (i__25948__auto___40378 + (1));
i__25948__auto___40378 = G__40379;
continue;
} else {
}
break;
}

var G__40309 = args40307.length;
switch (G__40309) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40307.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37699__auto___40381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___40381,out){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___40381,out){
return (function (state_40347){
var state_val_40348 = (state_40347[(1)]);
if((state_val_40348 === (7))){
var inst_40343 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40349_40382 = state_40347__$1;
(statearr_40349_40382[(2)] = inst_40343);

(statearr_40349_40382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (1))){
var inst_40310 = (new Array(n));
var inst_40311 = inst_40310;
var inst_40312 = (0);
var state_40347__$1 = (function (){var statearr_40350 = state_40347;
(statearr_40350[(7)] = inst_40311);

(statearr_40350[(8)] = inst_40312);

return statearr_40350;
})();
var statearr_40351_40383 = state_40347__$1;
(statearr_40351_40383[(2)] = null);

(statearr_40351_40383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (4))){
var inst_40315 = (state_40347[(9)]);
var inst_40315__$1 = (state_40347[(2)]);
var inst_40316 = (inst_40315__$1 == null);
var inst_40317 = cljs.core.not.call(null,inst_40316);
var state_40347__$1 = (function (){var statearr_40352 = state_40347;
(statearr_40352[(9)] = inst_40315__$1);

return statearr_40352;
})();
if(inst_40317){
var statearr_40353_40384 = state_40347__$1;
(statearr_40353_40384[(1)] = (5));

} else {
var statearr_40354_40385 = state_40347__$1;
(statearr_40354_40385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (15))){
var inst_40337 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40355_40386 = state_40347__$1;
(statearr_40355_40386[(2)] = inst_40337);

(statearr_40355_40386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (13))){
var state_40347__$1 = state_40347;
var statearr_40356_40387 = state_40347__$1;
(statearr_40356_40387[(2)] = null);

(statearr_40356_40387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (6))){
var inst_40312 = (state_40347[(8)]);
var inst_40333 = (inst_40312 > (0));
var state_40347__$1 = state_40347;
if(cljs.core.truth_(inst_40333)){
var statearr_40357_40388 = state_40347__$1;
(statearr_40357_40388[(1)] = (12));

} else {
var statearr_40358_40389 = state_40347__$1;
(statearr_40358_40389[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (3))){
var inst_40345 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40347__$1,inst_40345);
} else {
if((state_val_40348 === (12))){
var inst_40311 = (state_40347[(7)]);
var inst_40335 = cljs.core.vec.call(null,inst_40311);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40347__$1,(15),out,inst_40335);
} else {
if((state_val_40348 === (2))){
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40347__$1,(4),ch);
} else {
if((state_val_40348 === (11))){
var inst_40327 = (state_40347[(2)]);
var inst_40328 = (new Array(n));
var inst_40311 = inst_40328;
var inst_40312 = (0);
var state_40347__$1 = (function (){var statearr_40359 = state_40347;
(statearr_40359[(7)] = inst_40311);

(statearr_40359[(8)] = inst_40312);

(statearr_40359[(10)] = inst_40327);

return statearr_40359;
})();
var statearr_40360_40390 = state_40347__$1;
(statearr_40360_40390[(2)] = null);

(statearr_40360_40390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (9))){
var inst_40311 = (state_40347[(7)]);
var inst_40325 = cljs.core.vec.call(null,inst_40311);
var state_40347__$1 = state_40347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40347__$1,(11),out,inst_40325);
} else {
if((state_val_40348 === (5))){
var inst_40311 = (state_40347[(7)]);
var inst_40320 = (state_40347[(11)]);
var inst_40312 = (state_40347[(8)]);
var inst_40315 = (state_40347[(9)]);
var inst_40319 = (inst_40311[inst_40312] = inst_40315);
var inst_40320__$1 = (inst_40312 + (1));
var inst_40321 = (inst_40320__$1 < n);
var state_40347__$1 = (function (){var statearr_40361 = state_40347;
(statearr_40361[(11)] = inst_40320__$1);

(statearr_40361[(12)] = inst_40319);

return statearr_40361;
})();
if(cljs.core.truth_(inst_40321)){
var statearr_40362_40391 = state_40347__$1;
(statearr_40362_40391[(1)] = (8));

} else {
var statearr_40363_40392 = state_40347__$1;
(statearr_40363_40392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (14))){
var inst_40340 = (state_40347[(2)]);
var inst_40341 = cljs.core.async.close_BANG_.call(null,out);
var state_40347__$1 = (function (){var statearr_40365 = state_40347;
(statearr_40365[(13)] = inst_40340);

return statearr_40365;
})();
var statearr_40366_40393 = state_40347__$1;
(statearr_40366_40393[(2)] = inst_40341);

(statearr_40366_40393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (10))){
var inst_40331 = (state_40347[(2)]);
var state_40347__$1 = state_40347;
var statearr_40367_40394 = state_40347__$1;
(statearr_40367_40394[(2)] = inst_40331);

(statearr_40367_40394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40348 === (8))){
var inst_40311 = (state_40347[(7)]);
var inst_40320 = (state_40347[(11)]);
var tmp40364 = inst_40311;
var inst_40311__$1 = tmp40364;
var inst_40312 = inst_40320;
var state_40347__$1 = (function (){var statearr_40368 = state_40347;
(statearr_40368[(7)] = inst_40311__$1);

(statearr_40368[(8)] = inst_40312);

return statearr_40368;
})();
var statearr_40369_40395 = state_40347__$1;
(statearr_40369_40395[(2)] = null);

(statearr_40369_40395[(1)] = (2));


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
});})(c__37699__auto___40381,out))
;
return ((function (switch__37587__auto__,c__37699__auto___40381,out){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_40373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40373[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_40373[(1)] = (1));

return statearr_40373;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_40347){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_40347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e40374){if((e40374 instanceof Object)){
var ex__37591__auto__ = e40374;
var statearr_40375_40396 = state_40347;
(statearr_40375_40396[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40397 = state_40347;
state_40347 = G__40397;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_40347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_40347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___40381,out))
})();
var state__37701__auto__ = (function (){var statearr_40376 = f__37700__auto__.call(null);
(statearr_40376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___40381);

return statearr_40376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___40381,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40398 = [];
var len__25947__auto___40472 = arguments.length;
var i__25948__auto___40473 = (0);
while(true){
if((i__25948__auto___40473 < len__25947__auto___40472)){
args40398.push((arguments[i__25948__auto___40473]));

var G__40474 = (i__25948__auto___40473 + (1));
i__25948__auto___40473 = G__40474;
continue;
} else {
}
break;
}

var G__40400 = args40398.length;
switch (G__40400) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40398.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37699__auto___40476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37699__auto___40476,out){
return (function (){
var f__37700__auto__ = (function (){var switch__37587__auto__ = ((function (c__37699__auto___40476,out){
return (function (state_40442){
var state_val_40443 = (state_40442[(1)]);
if((state_val_40443 === (7))){
var inst_40438 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
var statearr_40444_40477 = state_40442__$1;
(statearr_40444_40477[(2)] = inst_40438);

(statearr_40444_40477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (1))){
var inst_40401 = [];
var inst_40402 = inst_40401;
var inst_40403 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40442__$1 = (function (){var statearr_40445 = state_40442;
(statearr_40445[(7)] = inst_40402);

(statearr_40445[(8)] = inst_40403);

return statearr_40445;
})();
var statearr_40446_40478 = state_40442__$1;
(statearr_40446_40478[(2)] = null);

(statearr_40446_40478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (4))){
var inst_40406 = (state_40442[(9)]);
var inst_40406__$1 = (state_40442[(2)]);
var inst_40407 = (inst_40406__$1 == null);
var inst_40408 = cljs.core.not.call(null,inst_40407);
var state_40442__$1 = (function (){var statearr_40447 = state_40442;
(statearr_40447[(9)] = inst_40406__$1);

return statearr_40447;
})();
if(inst_40408){
var statearr_40448_40479 = state_40442__$1;
(statearr_40448_40479[(1)] = (5));

} else {
var statearr_40449_40480 = state_40442__$1;
(statearr_40449_40480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (15))){
var inst_40432 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
var statearr_40450_40481 = state_40442__$1;
(statearr_40450_40481[(2)] = inst_40432);

(statearr_40450_40481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (13))){
var state_40442__$1 = state_40442;
var statearr_40451_40482 = state_40442__$1;
(statearr_40451_40482[(2)] = null);

(statearr_40451_40482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (6))){
var inst_40402 = (state_40442[(7)]);
var inst_40427 = inst_40402.length;
var inst_40428 = (inst_40427 > (0));
var state_40442__$1 = state_40442;
if(cljs.core.truth_(inst_40428)){
var statearr_40452_40483 = state_40442__$1;
(statearr_40452_40483[(1)] = (12));

} else {
var statearr_40453_40484 = state_40442__$1;
(statearr_40453_40484[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (3))){
var inst_40440 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40442__$1,inst_40440);
} else {
if((state_val_40443 === (12))){
var inst_40402 = (state_40442[(7)]);
var inst_40430 = cljs.core.vec.call(null,inst_40402);
var state_40442__$1 = state_40442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40442__$1,(15),out,inst_40430);
} else {
if((state_val_40443 === (2))){
var state_40442__$1 = state_40442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40442__$1,(4),ch);
} else {
if((state_val_40443 === (11))){
var inst_40406 = (state_40442[(9)]);
var inst_40410 = (state_40442[(10)]);
var inst_40420 = (state_40442[(2)]);
var inst_40421 = [];
var inst_40422 = inst_40421.push(inst_40406);
var inst_40402 = inst_40421;
var inst_40403 = inst_40410;
var state_40442__$1 = (function (){var statearr_40454 = state_40442;
(statearr_40454[(7)] = inst_40402);

(statearr_40454[(11)] = inst_40420);

(statearr_40454[(12)] = inst_40422);

(statearr_40454[(8)] = inst_40403);

return statearr_40454;
})();
var statearr_40455_40485 = state_40442__$1;
(statearr_40455_40485[(2)] = null);

(statearr_40455_40485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (9))){
var inst_40402 = (state_40442[(7)]);
var inst_40418 = cljs.core.vec.call(null,inst_40402);
var state_40442__$1 = state_40442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40442__$1,(11),out,inst_40418);
} else {
if((state_val_40443 === (5))){
var inst_40406 = (state_40442[(9)]);
var inst_40410 = (state_40442[(10)]);
var inst_40403 = (state_40442[(8)]);
var inst_40410__$1 = f.call(null,inst_40406);
var inst_40411 = cljs.core._EQ_.call(null,inst_40410__$1,inst_40403);
var inst_40412 = cljs.core.keyword_identical_QMARK_.call(null,inst_40403,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40413 = (inst_40411) || (inst_40412);
var state_40442__$1 = (function (){var statearr_40456 = state_40442;
(statearr_40456[(10)] = inst_40410__$1);

return statearr_40456;
})();
if(cljs.core.truth_(inst_40413)){
var statearr_40457_40486 = state_40442__$1;
(statearr_40457_40486[(1)] = (8));

} else {
var statearr_40458_40487 = state_40442__$1;
(statearr_40458_40487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (14))){
var inst_40435 = (state_40442[(2)]);
var inst_40436 = cljs.core.async.close_BANG_.call(null,out);
var state_40442__$1 = (function (){var statearr_40460 = state_40442;
(statearr_40460[(13)] = inst_40435);

return statearr_40460;
})();
var statearr_40461_40488 = state_40442__$1;
(statearr_40461_40488[(2)] = inst_40436);

(statearr_40461_40488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (10))){
var inst_40425 = (state_40442[(2)]);
var state_40442__$1 = state_40442;
var statearr_40462_40489 = state_40442__$1;
(statearr_40462_40489[(2)] = inst_40425);

(statearr_40462_40489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40443 === (8))){
var inst_40402 = (state_40442[(7)]);
var inst_40406 = (state_40442[(9)]);
var inst_40410 = (state_40442[(10)]);
var inst_40415 = inst_40402.push(inst_40406);
var tmp40459 = inst_40402;
var inst_40402__$1 = tmp40459;
var inst_40403 = inst_40410;
var state_40442__$1 = (function (){var statearr_40463 = state_40442;
(statearr_40463[(7)] = inst_40402__$1);

(statearr_40463[(14)] = inst_40415);

(statearr_40463[(8)] = inst_40403);

return statearr_40463;
})();
var statearr_40464_40490 = state_40442__$1;
(statearr_40464_40490[(2)] = null);

(statearr_40464_40490[(1)] = (2));


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
});})(c__37699__auto___40476,out))
;
return ((function (switch__37587__auto__,c__37699__auto___40476,out){
return (function() {
var cljs$core$async$state_machine__37588__auto__ = null;
var cljs$core$async$state_machine__37588__auto____0 = (function (){
var statearr_40468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40468[(0)] = cljs$core$async$state_machine__37588__auto__);

(statearr_40468[(1)] = (1));

return statearr_40468;
});
var cljs$core$async$state_machine__37588__auto____1 = (function (state_40442){
while(true){
var ret_value__37589__auto__ = (function (){try{while(true){
var result__37590__auto__ = switch__37587__auto__.call(null,state_40442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37590__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37590__auto__;
}
break;
}
}catch (e40469){if((e40469 instanceof Object)){
var ex__37591__auto__ = e40469;
var statearr_40470_40491 = state_40442;
(statearr_40470_40491[(5)] = ex__37591__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40492 = state_40442;
state_40442 = G__40492;
continue;
} else {
return ret_value__37589__auto__;
}
break;
}
});
cljs$core$async$state_machine__37588__auto__ = function(state_40442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37588__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37588__auto____1.call(this,state_40442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37588__auto____0;
cljs$core$async$state_machine__37588__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37588__auto____1;
return cljs$core$async$state_machine__37588__auto__;
})()
;})(switch__37587__auto__,c__37699__auto___40476,out))
})();
var state__37701__auto__ = (function (){var statearr_40471 = f__37700__auto__.call(null);
(statearr_40471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37699__auto___40476);

return statearr_40471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37701__auto__);
});})(c__37699__auto___40476,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484804412029