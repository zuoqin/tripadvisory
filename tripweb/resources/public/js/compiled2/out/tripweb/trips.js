// Compiled by ClojureScript 1.9.89 {}
goog.provide('tripweb.trips');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('goog.History');
goog.require('tripweb.settings');
goog.require('tripweb.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('net.unit8.tower');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tripweb.trips.app_state !== 'undefined'){
} else {
tripweb.trips.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"trips","trips",477933849),cljs.core.PersistentVector.EMPTY], null));
}
tripweb.trips.OnGetUsers = (function tripweb$trips$OnGetUsers(response){
cljs.core.swap_BANG_.call(null,tripweb.trips.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.get.call(null,response,"Users"));

return console.log(new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.trips.app_state)));
});
tripweb.trips.OnGetTrips = (function tripweb$trips$OnGetTrips(response){
cljs.core.swap_BANG_.call(null,tripweb.trips.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"trips","trips",477933849),cljs.core.get.call(null,response,"Trips"));

return console.log(new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.trips.app_state)));
});
tripweb.trips.OnGetMessagesPage = (function tripweb$trips$OnGetMessagesPage(response){
var messages = new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.trips.app_state));
return cljs.core.swap_BANG_.call(null,tripweb.trips.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,messages,cljs.core.get.call(null,response,"Messages"))));
});
tripweb.trips.error_handler = (function tripweb$trips$error_handler(p__36630){
var map__36633 = p__36630;
var map__36633__$1 = ((((!((map__36633 == null)))?((((map__36633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36633):map__36633);
var status = cljs.core.get.call(null,map__36633__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__36633__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
tripweb.trips.getUsers = (function tripweb$trips$getUsers(data){
return ajax.core.GET.call(null,[cljs.core.str(tripweb.settings.apipath),cljs.core.str("api/user")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),tripweb.trips.OnGetUsers,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tripweb.trips.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.core.app_state)))))].join('')], null)], null));
});
tripweb.trips.getTrips = (function tripweb$trips$getTrips(data){
return ajax.core.GET.call(null,[cljs.core.str(tripweb.settings.apipath),cljs.core.str("api/trip?login="),cljs.core.str(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.core.app_state)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),tripweb.trips.OnGetTrips,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tripweb.trips.error_handler,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tripweb.core.app_state)))))].join('')], null)], null));
});

var ufv___36651 = schema.utils.use_fn_validation;
var output_schema36636_36652 = schema.core.Any;
var input_schema36637_36653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36638_36654 = schema.core.checker.call(null,input_schema36637_36653);
var output_checker36639_36655 = schema.core.checker.call(null,output_schema36636_36652);
/**
 * Inputs: [data owner]
 */
tripweb.trips.showtrips_view = ((function (ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655){
return (function tripweb$trips$showtrips_view(G__36640,G__36641){
var validate__32480__auto__ = ufv___36651.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___36656 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36640,G__36641], null);
var temp__4657__auto___36657 = input_checker36638_36654.call(null,args__32481__auto___36656);
if(cljs.core.truth_(temp__4657__auto___36657)){
var error__32482__auto___36658 = temp__4657__auto___36657;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showtrips-view","showtrips-view",241786119,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36658)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36637_36653,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___36656,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36658], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var data = G__36640;
var owner = G__36641;
while(true){
if(typeof tripweb.trips.t_tripweb$trips36645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
tripweb.trips.t_tripweb$trips36645 = (function (G__36641,validate__32480__auto__,owner,data,showtrips_view,input_schema36637,G__36640,output_checker36639,input_checker36638,output_schema36636,ufv__,meta36646){
this.G__36641 = G__36641;
this.validate__32480__auto__ = validate__32480__auto__;
this.owner = owner;
this.data = data;
this.showtrips_view = showtrips_view;
this.input_schema36637 = input_schema36637;
this.G__36640 = G__36640;
this.output_checker36639 = output_checker36639;
this.input_checker36638 = input_checker36638;
this.output_schema36636 = output_schema36636;
this.ufv__ = ufv__;
this.meta36646 = meta36646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripweb.trips.t_tripweb$trips36645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655){
return (function (_36647,meta36646__$1){
var self__ = this;
var _36647__$1 = this;
return (new tripweb.trips.t_tripweb$trips36645(self__.G__36641,self__.validate__32480__auto__,self__.owner,self__.data,self__.showtrips_view,self__.input_schema36637,self__.G__36640,self__.output_checker36639,self__.input_checker36638,self__.output_schema36636,self__.ufv__,meta36646__$1));
});})(validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655))
;

tripweb.trips.t_tripweb$trips36645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655){
return (function (_36647){
var self__ = this;
var _36647__$1 = this;
return self__.meta36646;
});})(validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655))
;

tripweb.trips.t_tripweb$trips36645.prototype.om$core$IDisplayName$ = true;

tripweb.trips.t_tripweb$trips36645.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655){
return (function (_){
var self__ = this;
var ___$1 = this;
return "showtrips-view";
});})(validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655))
;

tripweb.trips.t_tripweb$trips36645.prototype.om$core$IRender$ = true;

tripweb.trips.t_tripweb$trips36645.prototype.om$core$IRender$render$arity$1 = ((function (validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"className": "list-group", "style": {"display": "block"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,((function (___$1,validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655){
return (function (item){
return om_tools.dom.element.call(null,React.DOM.span,cljs.core.apply.call(null,React.DOM.a,{"className": "list-group-item", "href": om_tools.dom.format_opts.call(null,[cljs.core.str("#/tripdetail/"),cljs.core.str(cljs.core.get.call(null,item,"tripid"))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h4({"className": "list-group-item-heading", "dangerouslySetInnerHTML": {"__html": tripweb.trips.setItemSubject.call(null,item)}},null),cljs.core.apply.call(null,React.DOM.h6,{"className": "paddingleft2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.get.call(null,item,"senddate")],null))))],null)))),cljs.core.PersistentVector.EMPTY);
});})(___$1,validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655))
,new cljs.core.Keyword(null,"trips","trips",477933849).cljs$core$IFn$_invoke$arity$1(self__.data))],null))));
});})(validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655))
;

tripweb.trips.t_tripweb$trips36645.getBasis = ((function (validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__36641","G__36641",1908930209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"showtrips-view","showtrips-view",241786119,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema36636","output-schema36636",1837856789,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema36637","input-schema36637",1266756521,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"input-schema36637","input-schema36637",1266756521,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36640","G__36640",-947729268,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker36639","output-checker36639",27180685,null),new cljs.core.Symbol(null,"input-checker36638","input-checker36638",826316079,null),new cljs.core.Symbol(null,"output-schema36636","output-schema36636",1837856789,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta36646","meta36646",1934259015,null)], null);
});})(validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655))
;

tripweb.trips.t_tripweb$trips36645.cljs$lang$type = true;

tripweb.trips.t_tripweb$trips36645.cljs$lang$ctorStr = "tripweb.trips/t_tripweb$trips36645";

tripweb.trips.t_tripweb$trips36645.cljs$lang$ctorPrWriter = ((function (validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"tripweb.trips/t_tripweb$trips36645");
});})(validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655))
;

tripweb.trips.__GT_t_tripweb$trips36645 = ((function (validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655){
return (function tripweb$trips$showtrips_view_$___GT_t_tripweb$trips36645(G__36641__$1,validate__32480__auto____$1,owner__$1,data__$1,showtrips_view__$1,input_schema36637__$1,G__36640__$1,output_checker36639__$1,input_checker36638__$1,output_schema36636__$1,ufv____$1,meta36646){
return (new tripweb.trips.t_tripweb$trips36645(G__36641__$1,validate__32480__auto____$1,owner__$1,data__$1,showtrips_view__$1,input_schema36637__$1,G__36640__$1,output_checker36639__$1,input_checker36638__$1,output_schema36636__$1,ufv____$1,meta36646));
});})(validate__32480__auto__,ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655))
;

}

return (new tripweb.trips.t_tripweb$trips36645(G__36641,validate__32480__auto__,owner,data,tripweb$trips$showtrips_view,input_schema36637_36653,G__36640,output_checker36639_36655,input_checker36638_36654,output_schema36636_36652,ufv___36651,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___36659 = output_checker36639_36655.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___36659)){
var error__32482__auto___36660 = temp__4657__auto___36659;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"showtrips-view","showtrips-view",241786119,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36660)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36636_36652,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36660], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___36651,output_schema36636_36652,input_schema36637_36653,input_checker36638_36654,output_checker36639_36655))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tripweb.trips.showtrips_view),schema.core.make_fn_schema.call(null,output_schema36636_36652,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36637_36653], null)));

tripweb.trips.__GT_showtrips_view = (function tripweb$trips$__GT_showtrips_view(var_args){
var args36648 = [];
var len__25947__auto___36661 = arguments.length;
var i__25948__auto___36662 = (0);
while(true){
if((i__25948__auto___36662 < len__25947__auto___36661)){
args36648.push((arguments[i__25948__auto___36662]));

var G__36663 = (i__25948__auto___36662 + (1));
i__25948__auto___36662 = G__36663;
continue;
} else {
}
break;
}

var G__36650 = args36648.length;
switch (G__36650) {
case 1:
return tripweb.trips.__GT_showtrips_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripweb.trips.__GT_showtrips_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36648.length)].join('')));

}
});

tripweb.trips.__GT_showtrips_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,tripweb.trips.showtrips_view,cursor__36194__auto__);
});

tripweb.trips.__GT_showtrips_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m36635){
return om.core.build.call(null,tripweb.trips.showtrips_view,cursor__36194__auto__,m36635);
});

tripweb.trips.__GT_showtrips_view.cljs$lang$maxFixedArity = 2;

tripweb.trips.onMount = (function tripweb$trips$onMount(data){
tripweb.trips.getTrips.call(null,data);

return cljs.core.swap_BANG_.call(null,tripweb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603)], null),"Trips");
});

var ufv___36681 = schema.utils.use_fn_validation;
var output_schema36666_36682 = schema.core.Any;
var input_schema36667_36683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker36668_36684 = schema.core.checker.call(null,input_schema36667_36683);
var output_checker36669_36685 = schema.core.checker.call(null,output_schema36666_36682);
/**
 * Inputs: [data owner]
 */
tripweb.trips.trips_view = ((function (ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function tripweb$trips$trips_view(G__36670,G__36671){
var validate__32480__auto__ = ufv___36681.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___36686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36670,G__36671], null);
var temp__4657__auto___36687 = input_checker36668_36684.call(null,args__32481__auto___36686);
if(cljs.core.truth_(temp__4657__auto___36687)){
var error__32482__auto___36688 = temp__4657__auto___36687;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"trips-view","trips-view",1084856250,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36688)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema36667_36683,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___36686,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36688], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var data = G__36670;
var owner = G__36671;
while(true){
if(typeof tripweb.trips.t_tripweb$trips36675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
tripweb.trips.t_tripweb$trips36675 = (function (validate__32480__auto__,owner,data,output_schema36666,output_checker36669,G__36671,G__36670,input_checker36668,input_schema36667,trips_view,ufv__,meta36676){
this.validate__32480__auto__ = validate__32480__auto__;
this.owner = owner;
this.data = data;
this.output_schema36666 = output_schema36666;
this.output_checker36669 = output_checker36669;
this.G__36671 = G__36671;
this.G__36670 = G__36670;
this.input_checker36668 = input_checker36668;
this.input_schema36667 = input_schema36667;
this.trips_view = trips_view;
this.ufv__ = ufv__;
this.meta36676 = meta36676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripweb.trips.t_tripweb$trips36675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function (_36677,meta36676__$1){
var self__ = this;
var _36677__$1 = this;
return (new tripweb.trips.t_tripweb$trips36675(self__.validate__32480__auto__,self__.owner,self__.data,self__.output_schema36666,self__.output_checker36669,self__.G__36671,self__.G__36670,self__.input_checker36668,self__.input_schema36667,self__.trips_view,self__.ufv__,meta36676__$1));
});})(validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
;

tripweb.trips.t_tripweb$trips36675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function (_36677){
var self__ = this;
var _36677__$1 = this;
return self__.meta36676;
});})(validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
;

tripweb.trips.t_tripweb$trips36675.prototype.om$core$IDisplayName$ = true;

tripweb.trips.t_tripweb$trips36675.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function (_){
var self__ = this;
var ___$1 = this;
return "trips-view";
});})(validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
;

tripweb.trips.t_tripweb$trips36675.prototype.om$core$IWillMount$ = true;

tripweb.trips.t_tripweb$trips36675.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function (_){
var self__ = this;
var ___$1 = this;
return tripweb.trips.onMount.call(null,self__.data);
});})(validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
;

tripweb.trips.t_tripweb$trips36675.prototype.om$core$IRender$ = true;

tripweb.trips.t_tripweb$trips36675.prototype.om$core$IRender$render$arity$1 = ((function (validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function (_){
var self__ = this;
var ___$1 = this;
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"0px"], null)], null);
var styleprimary = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"70px"], null)], null);
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,tripweb.core.website_view,tripweb.core.app_state,cljs.core.PersistentArrayMap.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,cljs.core.assoc.call(null,styleprimary,new cljs.core.Keyword(null,"className","className",-1983287057),"panel panel-primary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (style,styleprimary,___$1,validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function (e){
return tripweb.trips.displaymessages.call(null,e);
});})(style,styleprimary,___$1,validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-10"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.span({"style": {"float": "left"}, "className": "glyphicon glyphicon-chevron-down"}),React.DOM.span({"style": {"paddingLeft": "5px"}},"\u6211\u7684\u6D88\u606F")],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.span,{"className": "badge", "style": {"float": "right"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[[cljs.core.str(new cljs.core.Keyword(null,"msgcount","msgcount",-358064536).cljs$core$IFn$_invoke$arity$1(self__.data))].join('')],null))))],null))))],null))))],null)))),om.core.build.call(null,tripweb.trips.showtrips_view,self__.data,cljs.core.PersistentArrayMap.EMPTY)],null)))],null)));
});})(validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
;

tripweb.trips.t_tripweb$trips36675.getBasis = ((function (validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validate__32480__auto__","validate__32480__auto__",242895426,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"output-schema36666","output-schema36666",-268678554,null),new cljs.core.Symbol(null,"output-checker36669","output-checker36669",-495862966,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36671","G__36671",-427868788,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__36670","G__36670",-863092813,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker36668","input-checker36668",-1012296331,null),new cljs.core.Symbol(null,"input-schema36667","input-schema36667",-943494630,null),cljs.core.with_meta(new cljs.core.Symbol(null,"trips-view","trips-view",1084856250,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema36666","output-schema36666",-268678554,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema36667","input-schema36667",-943494630,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta36676","meta36676",1217923779,null)], null);
});})(validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
;

tripweb.trips.t_tripweb$trips36675.cljs$lang$type = true;

tripweb.trips.t_tripweb$trips36675.cljs$lang$ctorStr = "tripweb.trips/t_tripweb$trips36675";

tripweb.trips.t_tripweb$trips36675.cljs$lang$ctorPrWriter = ((function (validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"tripweb.trips/t_tripweb$trips36675");
});})(validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
;

tripweb.trips.__GT_t_tripweb$trips36675 = ((function (validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685){
return (function tripweb$trips$trips_view_$___GT_t_tripweb$trips36675(validate__32480__auto____$1,owner__$1,data__$1,output_schema36666__$1,output_checker36669__$1,G__36671__$1,G__36670__$1,input_checker36668__$1,input_schema36667__$1,trips_view__$1,ufv____$1,meta36676){
return (new tripweb.trips.t_tripweb$trips36675(validate__32480__auto____$1,owner__$1,data__$1,output_schema36666__$1,output_checker36669__$1,G__36671__$1,G__36670__$1,input_checker36668__$1,input_schema36667__$1,trips_view__$1,ufv____$1,meta36676));
});})(validate__32480__auto__,ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
;

}

return (new tripweb.trips.t_tripweb$trips36675(validate__32480__auto__,owner,data,output_schema36666_36682,output_checker36669_36685,G__36671,G__36670,input_checker36668_36684,input_schema36667_36683,tripweb$trips$trips_view,ufv___36681,null));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___36689 = output_checker36669_36685.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___36689)){
var error__32482__auto___36690 = temp__4657__auto___36689;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"trips-view","trips-view",1084856250,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___36690)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema36666_36682,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___36690], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___36681,output_schema36666_36682,input_schema36667_36683,input_checker36668_36684,output_checker36669_36685))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,tripweb.trips.trips_view),schema.core.make_fn_schema.call(null,output_schema36666_36682,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36667_36683], null)));

tripweb.trips.__GT_trips_view = (function tripweb$trips$__GT_trips_view(var_args){
var args36678 = [];
var len__25947__auto___36691 = arguments.length;
var i__25948__auto___36692 = (0);
while(true){
if((i__25948__auto___36692 < len__25947__auto___36691)){
args36678.push((arguments[i__25948__auto___36692]));

var G__36693 = (i__25948__auto___36692 + (1));
i__25948__auto___36692 = G__36693;
continue;
} else {
}
break;
}

var G__36680 = args36678.length;
switch (G__36680) {
case 1:
return tripweb.trips.__GT_trips_view.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripweb.trips.__GT_trips_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36678.length)].join('')));

}
});

tripweb.trips.__GT_trips_view.cljs$core$IFn$_invoke$arity$1 = (function (cursor__36194__auto__){
return om.core.build.call(null,tripweb.trips.trips_view,cursor__36194__auto__);
});

tripweb.trips.__GT_trips_view.cljs$core$IFn$_invoke$arity$2 = (function (cursor__36194__auto__,m36665){
return om.core.build.call(null,tripweb.trips.trips_view,cursor__36194__auto__,m36665);
});

tripweb.trips.__GT_trips_view.cljs$lang$maxFixedArity = 2;

var action__35970__auto___36701 = (function (params__35971__auto__){
if(cljs.core.map_QMARK_.call(null,params__35971__auto__)){
var map__36695 = params__35971__auto__;
var map__36695__$1 = ((((!((map__36695 == null)))?((((map__36695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36695):map__36695);
return om.core.root.call(null,tripweb.trips.trips_view,tripweb.trips.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35971__auto__)){
var vec__36697 = params__35971__auto__;
return om.core.root.call(null,tripweb.trips.trips_view,tripweb.trips.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/messages",action__35970__auto___36701);

tripweb.trips.messages_page = ((function (action__35970__auto___36701){
return (function tripweb$trips$messages_page(var_args){
var args__25954__auto__ = [];
var len__25947__auto___36702 = arguments.length;
var i__25948__auto___36703 = (0);
while(true){
if((i__25948__auto___36703 < len__25947__auto___36702)){
args__25954__auto__.push((arguments[i__25948__auto___36703]));

var G__36704 = (i__25948__auto___36703 + (1));
i__25948__auto___36703 = G__36704;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return tripweb.trips.messages_page.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});})(action__35970__auto___36701))
;

tripweb.trips.messages_page.cljs$core$IFn$_invoke$arity$variadic = ((function (action__35970__auto___36701){
return (function (args__35969__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/messages",args__35969__auto__);
});})(action__35970__auto___36701))
;

tripweb.trips.messages_page.cljs$lang$maxFixedArity = (0);

tripweb.trips.messages_page.cljs$lang$applyTo = ((function (action__35970__auto___36701){
return (function (seq36700){
return tripweb.trips.messages_page.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36700));
});})(action__35970__auto___36701))
;


//# sourceMappingURL=trips.js.map?rel=1484804408888