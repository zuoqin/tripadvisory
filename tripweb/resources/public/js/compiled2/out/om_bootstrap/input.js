// Compiled by ClojureScript 1.9.89 {}
goog.provide('om_bootstrap.input');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('clojure.string');
goog.require('om.core');
om_bootstrap.input.Addons = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-after","addon-after",634985306)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-button","addon-button",136745317)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807)),schema.core.either.call(null,schema.core.Str,om_bootstrap.types.Component)], true, false);
/**
 * Helps render feedback icons.
 */
om_bootstrap.input.FeedbackIcons = cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),schema.core.enum$.call(null,"success","warning","error"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821)),schema.core.Bool], true, false);
/**
 * Input fields that match these bad dawgs:
 *   https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Input.jsx
 */
om_bootstrap.input.Input = om_bootstrap.types.bootstrap.call(null,cljs.core.merge.call(null,om_bootstrap.input.Addons,om_bootstrap.input.FeedbackIcons,cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"type","type",1174270348)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label","label",1718410804)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261)),schema.core.named.call(null,schema.core.Bool,"DON'T render a wrapping form group?"),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"help","help",-439233446)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212)),schema.core.Str], true, false)));
om_bootstrap.input.Radio = om_bootstrap.types.bootstrap.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"label","label",1718410804),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"inline?","inline?",-1674483791)),schema.core.Bool], true, false));
var ufv___46742 = schema.utils.use_fn_validation;
var output_schema46729_46743 = schema.core.Str;
var input_schema46730_46744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.Str,schema.core.Keyword),schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"klasses","klasses",-380235757,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.PersistentArrayMap.fromArray([cljs.core.list(new cljs.core.Symbol("s","either","s/either",-2144372885,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], true, false)], null)))], null);
var input_checker46731_46745 = schema.core.checker.call(null,input_schema46730_46744);
var output_checker46732_46746 = schema.core.checker.call(null,output_schema46729_46743);
/**
 * Inputs: [klasses :- {(s/either s/Str s/Keyword) s/Bool}]
 *   Returns: s/Str
 * 
 *   Mimics the class-set behavior from React. Pass in a map of
 *   potential class to Boolean; you'll get back a class string that
 *   represents the final class to apply.
 * 
 *   TODO: Use class-set from om-tools.
 */
om_bootstrap.input.class_set = ((function (ufv___46742,output_schema46729_46743,input_schema46730_46744,input_checker46731_46745,output_checker46732_46746){
return (function om_bootstrap$input$class_set(G__46733){
var validate__32480__auto__ = ufv___46742.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46733], null);
var temp__4657__auto___46748 = input_checker46731_46745.call(null,args__32481__auto___46747);
if(cljs.core.truth_(temp__4657__auto___46748)){
var error__32482__auto___46749 = temp__4657__auto___46748;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Mimics the class-set behavior from React. Pass in a map of\n  potential class to Boolean; you'll get back a class string that\n  represents the final class to apply.\n\n  TODO: Use class-set from om-tools."], null)),cljs.core.pr_str.call(null,error__32482__auto___46749)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46730_46744,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46747,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46749], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var klasses = G__46733;
while(true){
return clojure.string.join.call(null," ",cljs.core.mapcat.call(null,((function (validate__32480__auto__,ufv___46742,output_schema46729_46743,input_schema46730_46744,input_checker46731_46745,output_checker46732_46746){
return (function (p__46738){
var vec__46739 = p__46738;
var k = cljs.core.nth.call(null,vec__46739,(0),null);
var keep_QMARK_ = cljs.core.nth.call(null,vec__46739,(1),null);
if(cljs.core.truth_(keep_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k)], null);
} else {
return null;
}
});})(validate__32480__auto__,ufv___46742,output_schema46729_46743,input_schema46730_46744,input_checker46731_46745,output_checker46732_46746))
,klasses));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46750 = output_checker46732_46746.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46750)){
var error__32482__auto___46751 = temp__4657__auto___46750;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"class-set","class-set",-355600496,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Mimics the class-set behavior from React. Pass in a map of\n  potential class to Boolean; you'll get back a class string that\n  represents the final class to apply.\n\n  TODO: Use class-set from om-tools."], null)),cljs.core.pr_str.call(null,error__32482__auto___46751)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46729_46743,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46751], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46742,output_schema46729_46743,input_schema46730_46744,input_checker46731_46745,output_checker46732_46746))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.class_set),schema.core.make_fn_schema.call(null,output_schema46729_46743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46730_46744], null)));
var ufv___46757 = schema.utils.use_fn_validation;
var output_schema46752_46758 = om_bootstrap.types.Component;
var input_schema46753_46759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"glyph-name","glyph-name",350405338,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null)))], null);
var input_checker46754_46760 = schema.core.checker.call(null,input_schema46753_46759);
var output_checker46755_46761 = schema.core.checker.call(null,output_schema46752_46758);
/**
 * Inputs: [glyph-name :- s/Str]
 *   Returns: t/Component
 * 
 *   To be used with :addon-before or :addon-after.
 */
om_bootstrap.input.glyph = ((function (ufv___46757,output_schema46752_46758,input_schema46753_46759,input_checker46754_46760,output_checker46755_46761){
return (function om_bootstrap$input$glyph(G__46756){
var validate__32480__auto__ = ufv___46757.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46756], null);
var temp__4657__auto___46763 = input_checker46754_46760.call(null,args__32481__auto___46762);
if(cljs.core.truth_(temp__4657__auto___46763)){
var error__32482__auto___46764 = temp__4657__auto___46763;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"To be used with :addon-before or :addon-after."], null)),cljs.core.pr_str.call(null,error__32482__auto___46764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46753_46759,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46762,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46764], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var glyph_name = G__46756;
while(true){
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,[cljs.core.str("glyphicon glyphicon-"),cljs.core.str(glyph_name)].join(''))});
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46765 = output_checker46755_46761.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46765)){
var error__32482__auto___46766 = temp__4657__auto___46765;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"glyph","glyph",-534987652,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"To be used with :addon-before or :addon-after."], null)),cljs.core.pr_str.call(null,error__32482__auto___46766)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46752_46758,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46766], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46757,output_schema46752_46758,input_schema46753_46759,input_checker46754_46760,output_checker46755_46761))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.glyph),schema.core.make_fn_schema.call(null,output_schema46752_46758,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46753_46759], null)));
var ufv___46784 = schema.utils.use_fn_validation;
var output_schema46767_46785 = om_bootstrap.types.Component;
var input_schema46768_46786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.FeedbackIcons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker46769_46787 = schema.core.checker.call(null,input_schema46768_46786);
var output_checker46770_46788 = schema.core.checker.call(null,output_schema46767_46785);
/**
 * Inputs: [{:keys [feedback? bs-style]} :- FeedbackIcons]
 *   Returns: t/Component
 */
om_bootstrap.input.render_icon = ((function (ufv___46784,output_schema46767_46785,input_schema46768_46786,input_checker46769_46787,output_checker46770_46788){
return (function om_bootstrap$input$render_icon(G__46771){
var validate__32480__auto__ = ufv___46784.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46771], null);
var temp__4657__auto___46790 = input_checker46769_46787.call(null,args__32481__auto___46789);
if(cljs.core.truth_(temp__4657__auto___46790)){
var error__32482__auto___46791 = temp__4657__auto___46790;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46791)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46768_46786,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46789,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46791], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var G__46779 = G__46771;
var map__46780 = G__46779;
var map__46780__$1 = ((((!((map__46780 == null)))?((((map__46780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46780):map__46780);
var feedback_QMARK_ = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var bs_style = cljs.core.get.call(null,map__46780__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var G__46779__$1 = G__46779;
while(true){
var map__46782 = G__46779__$1;
var map__46782__$1 = ((((!((map__46782 == null)))?((((map__46782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46782):map__46782);
var feedback_QMARK___$1 = cljs.core.get.call(null,map__46782__$1,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821));
var bs_style__$1 = cljs.core.get.call(null,map__46782__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
if(cljs.core.truth_(feedback_QMARK___$1)){
var klasses = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"glyphicon","glyphicon",-2083132161),true,new cljs.core.Keyword(null,"form-control-feedback","form-control-feedback",-26248681),true,new cljs.core.Keyword(null,"glyphicon-ok","glyphicon-ok",-980475854),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-warning-sign","glyphicon-warning-sign",-715964093),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"glyphicon-remove","glyphicon-remove",16420020),cljs.core._EQ_.call(null,"error",bs_style__$1)], null);
return React.DOM.span({"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))});
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46792 = output_checker46770_46788.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46792)){
var error__32482__auto___46793 = temp__4657__auto___46792;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-icon","render-icon",511977669,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46793)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46767_46785,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46793], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46784,output_schema46767_46785,input_schema46768_46786,input_checker46769_46787,output_checker46770_46788))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_icon),schema.core.make_fn_schema.call(null,output_schema46767_46785,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46768_46786], null)));
var ufv___46799 = schema.utils.use_fn_validation;
var output_schema46794_46800 = schema.core.Any;
var input_schema46795_46801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.maybe.call(null,schema.core.Str),cljs.core.with_meta(new cljs.core.Symbol(null,"help","help",1201298081,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null))], null)))], null);
var input_checker46796_46802 = schema.core.checker.call(null,input_schema46795_46801);
var output_checker46797_46803 = schema.core.checker.call(null,output_schema46794_46800);
/**
 * Inputs: [help :- (s/maybe s/Str)]
 */
om_bootstrap.input.render_help = ((function (ufv___46799,output_schema46794_46800,input_schema46795_46801,input_checker46796_46802,output_checker46797_46803){
return (function om_bootstrap$input$render_help(G__46798){
var validate__32480__auto__ = ufv___46799.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46798], null);
var temp__4657__auto___46805 = input_checker46796_46802.call(null,args__32481__auto___46804);
if(cljs.core.truth_(temp__4657__auto___46805)){
var error__32482__auto___46806 = temp__4657__auto___46805;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46806)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46795_46801,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46804,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46806], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var help = G__46798;
while(true){
if(cljs.core.truth_(help)){
return cljs.core.apply.call(null,React.DOM.span,{"className": "help-block"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[help],null))));
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46807 = output_checker46797_46803.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46807)){
var error__32482__auto___46808 = temp__4657__auto___46807;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-help","render-help",-1879333594,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46808)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46794_46800,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46808], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46799,output_schema46794_46800,input_schema46795_46801,input_checker46796_46802,output_checker46797_46803))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_help),schema.core.make_fn_schema.call(null,output_schema46794_46800,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46795_46801], null)));
var ufv___46827 = schema.utils.use_fn_validation;
var output_schema46809_46828 = schema.core.Any;
var input_schema46810_46829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Addons,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Any","s/Any",1277490110,null)], null)))], null);
var input_checker46811_46830 = schema.core.checker.call(null,input_schema46810_46829);
var output_checker46812_46831 = schema.core.checker.call(null,output_schema46809_46828);
/**
 * Inputs: [{:keys [addon-before addon-after addon-button addon-button-before addon-button-after]} :- Addons items :- s/Any]
 * 
 *   Items is a vector of render instances.
 */
om_bootstrap.input.render_input_group = ((function (ufv___46827,output_schema46809_46828,input_schema46810_46829,input_checker46811_46830,output_checker46812_46831){
return (function om_bootstrap$input$render_input_group(G__46813,G__46814){
var validate__32480__auto__ = ufv___46827.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46813,G__46814], null);
var temp__4657__auto___46833 = input_checker46811_46830.call(null,args__32481__auto___46832);
if(cljs.core.truth_(temp__4657__auto___46833)){
var error__32482__auto___46834 = temp__4657__auto___46833;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Items is a vector of render instances."], null)),cljs.core.pr_str.call(null,error__32482__auto___46834)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46810_46829,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46832,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46834], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var G__46822 = G__46813;
var map__46823 = G__46822;
var map__46823__$1 = ((((!((map__46823 == null)))?((((map__46823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46823):map__46823);
var addon_before = cljs.core.get.call(null,map__46823__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var addon_after = cljs.core.get.call(null,map__46823__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_button = cljs.core.get.call(null,map__46823__$1,new cljs.core.Keyword(null,"addon-button","addon-button",136745317));
var addon_button_before = cljs.core.get.call(null,map__46823__$1,new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251));
var addon_button_after = cljs.core.get.call(null,map__46823__$1,new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807));
var items = G__46814;
var G__46822__$1 = G__46822;
var items__$1 = items;
while(true){
var map__46825 = G__46822__$1;
var map__46825__$1 = ((((!((map__46825 == null)))?((((map__46825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46825):map__46825);
var addon_before__$1 = cljs.core.get.call(null,map__46825__$1,new cljs.core.Keyword(null,"addon-before","addon-before",-500360384));
var addon_after__$1 = cljs.core.get.call(null,map__46825__$1,new cljs.core.Keyword(null,"addon-after","addon-after",634985306));
var addon_button__$1 = cljs.core.get.call(null,map__46825__$1,new cljs.core.Keyword(null,"addon-button","addon-button",136745317));
var addon_button_before__$1 = cljs.core.get.call(null,map__46825__$1,new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251));
var addon_button_after__$1 = cljs.core.get.call(null,map__46825__$1,new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807));
var items__$2 = items__$1;
if(cljs.core.truth_((function (){var or__24872__auto__ = addon_before__$1;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var or__24872__auto____$1 = addon_after__$1;
if(cljs.core.truth_(or__24872__auto____$1)){
return or__24872__auto____$1;
} else {
var or__24872__auto____$2 = addon_button__$1;
if(cljs.core.truth_(or__24872__auto____$2)){
return or__24872__auto____$2;
} else {
var or__24872__auto____$3 = addon_button_before__$1;
if(cljs.core.truth_(or__24872__auto____$3)){
return or__24872__auto____$3;
} else {
return addon_button_after__$1;
}
}
}
}
})())){
return cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(addon_before__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_before__$1],null)))):null),(cljs.core.truth_(addon_button_before__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-btn"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_button_before__$1],null)))):null),items__$2,(cljs.core.truth_(addon_after__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-addon"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_after__$1],null)))):null),(cljs.core.truth_(addon_button__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-btn"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_button__$1],null)))):null),(cljs.core.truth_(addon_button_after__$1)?cljs.core.apply.call(null,React.DOM.span,{"className": "input-group-btn"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[addon_button_after__$1],null)))):null)],null))));
} else {
return items__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46835 = output_checker46812_46831.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46835)){
var error__32482__auto___46836 = temp__4657__auto___46835;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input-group","render-input-group",361721583,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Items is a vector of render instances."], null)),cljs.core.pr_str.call(null,error__32482__auto___46836)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46809_46828,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46836], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46827,output_schema46809_46828,input_schema46810_46829,input_checker46811_46830,output_checker46812_46831))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input_group),schema.core.make_fn_schema.call(null,output_schema46809_46828,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46810_46829], null)));
var ufv___46854 = schema.utils.use_fn_validation;
var output_schema46837_46855 = schema.core.Bool;
var input_schema46838_46856 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker46839_46857 = schema.core.checker.call(null,input_schema46838_46856);
var output_checker46840_46858 = schema.core.checker.call(null,output_schema46837_46855);
/**
 * Inputs: [{type :type} :- Input]
 *   Returns: s/Bool
 * 
 *   Returns true if the supplied input is of type checkbox or radio,
 *   false otherwise.
 */
om_bootstrap.input.checkbox_or_radio_QMARK_ = ((function (ufv___46854,output_schema46837_46855,input_schema46838_46856,input_checker46839_46857,output_checker46840_46858){
return (function om_bootstrap$input$checkbox_or_radio_QMARK_(G__46841){
var validate__32480__auto__ = ufv___46854.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46859 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46841], null);
var temp__4657__auto___46860 = input_checker46839_46857.call(null,args__32481__auto___46859);
if(cljs.core.truth_(temp__4657__auto___46860)){
var error__32482__auto___46861 = temp__4657__auto___46860;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied input is of type checkbox or radio,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__32482__auto___46861)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46838_46856,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46859,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46861], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var G__46849 = G__46841;
var map__46850 = G__46849;
var map__46850__$1 = ((((!((map__46850 == null)))?((((map__46850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46850):map__46850);
var type = cljs.core.get.call(null,map__46850__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__46849__$1 = G__46849;
while(true){
var map__46852 = G__46849__$1;
var map__46852__$1 = ((((!((map__46852 == null)))?((((map__46852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46852):map__46852);
var type__$1 = cljs.core.get.call(null,map__46852__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (cljs.core._EQ_.call(null,type__$1,"checkbox")) || (cljs.core._EQ_.call(null,type__$1,"radio"));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46862 = output_checker46840_46858.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46862)){
var error__32482__auto___46863 = temp__4657__auto___46862;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio?","checkbox-or-radio?",-1047589288,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns true if the supplied input is of type checkbox or radio,\n  false otherwise."], null)),cljs.core.pr_str.call(null,error__32482__auto___46863)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46837_46855,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46863], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46854,output_schema46837_46855,input_schema46838_46856,input_checker46839_46857,output_checker46840_46858))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_),schema.core.make_fn_schema.call(null,output_schema46837_46855,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46838_46856], null)));
var ufv___46882 = schema.utils.use_fn_validation;
var output_schema46864_46883 = om_bootstrap.types.Component;
var input_schema46865_46884 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46866_46885 = schema.core.checker.call(null,input_schema46865_46884);
var output_checker46867_46886 = schema.core.checker.call(null,output_schema46864_46883);
/**
 * Inputs: [{type :type} :- Input children]
 *   Returns: t/Component
 * 
 *   Wraps this business in a div.
 */
om_bootstrap.input.checkbox_or_radio_wrapper = ((function (ufv___46882,output_schema46864_46883,input_schema46865_46884,input_checker46866_46885,output_checker46867_46886){
return (function om_bootstrap$input$checkbox_or_radio_wrapper(G__46868,G__46869){
var validate__32480__auto__ = ufv___46882.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46868,G__46869], null);
var temp__4657__auto___46888 = input_checker46866_46885.call(null,args__32481__auto___46887);
if(cljs.core.truth_(temp__4657__auto___46888)){
var error__32482__auto___46889 = temp__4657__auto___46888;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps this business in a div."], null)),cljs.core.pr_str.call(null,error__32482__auto___46889)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46865_46884,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46887,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46889], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var G__46877 = G__46868;
var map__46878 = G__46877;
var map__46878__$1 = ((((!((map__46878 == null)))?((((map__46878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46878):map__46878);
var type = cljs.core.get.call(null,map__46878__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = G__46869;
var G__46877__$1 = G__46877;
var children__$1 = children;
while(true){
var map__46880 = G__46877__$1;
var map__46880__$1 = ((((!((map__46880 == null)))?((((map__46880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46880):map__46880);
var type__$1 = cljs.core.get.call(null,map__46880__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children__$2 = children__$1;
var klasses = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),cljs.core._EQ_.call(null,"checkbox",type__$1),new cljs.core.Keyword(null,"radio","radio",1323726374),cljs.core._EQ_.call(null,"radio",type__$1)], null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,klasses))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46890 = output_checker46867_46886.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46890)){
var error__32482__auto___46891 = temp__4657__auto___46890;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"checkbox-or-radio-wrapper","checkbox-or-radio-wrapper",-964759132,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps this business in a div."], null)),cljs.core.pr_str.call(null,error__32482__auto___46891)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46864_46883,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46891], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46882,output_schema46864_46883,input_schema46865_46884,input_checker46866_46885,output_checker46867_46886))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.checkbox_or_radio_wrapper),schema.core.make_fn_schema.call(null,output_schema46864_46883,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46865_46884], null)));
var ufv___46911 = schema.utils.use_fn_validation;
var output_schema46892_46912 = schema.core.Any;
var input_schema46893_46913 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Input","Input",1777023215,null)], null)))], null);
var input_schema46897_46914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46894_46915 = schema.core.checker.call(null,input_schema46893_46913);
var output_checker46895_46916 = schema.core.checker.call(null,output_schema46892_46912);
var input_checker46898_46917 = schema.core.checker.call(null,input_schema46897_46914);
var output_checker46899_46918 = schema.core.checker.call(null,output_schema46892_46912);
/**
 * Inputs: ([input :- Input] [{lc :label-classname, label :label, :as input} :- Input child])
 * 
 *   This doesn't handle any control group stuff.
 */
om_bootstrap.input.render_label = ((function (ufv___46911,output_schema46892_46912,input_schema46893_46913,input_schema46897_46914,input_checker46894_46915,output_checker46895_46916,input_checker46898_46917,output_checker46899_46918){
return (function om_bootstrap$input$render_label(var_args){
var args46902 = [];
var len__25947__auto___46919 = arguments.length;
var i__25948__auto___46920 = (0);
while(true){
if((i__25948__auto___46920 < len__25947__auto___46919)){
args46902.push((arguments[i__25948__auto___46920]));

var G__46921 = (i__25948__auto___46920 + (1));
i__25948__auto___46920 = G__46921;
continue;
} else {
}
break;
}

var G__46904 = args46902.length;
switch (G__46904) {
case 1:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46902.length)].join('')));

}
});})(ufv___46911,output_schema46892_46912,input_schema46893_46913,input_schema46897_46914,input_checker46894_46915,output_checker46895_46916,input_checker46898_46917,output_checker46899_46918))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___46911,output_schema46892_46912,input_schema46893_46913,input_schema46897_46914,input_checker46894_46915,output_checker46895_46916,input_checker46898_46917,output_checker46899_46918){
return (function (G__46896){
var validate__32480__auto__ = ufv___46911.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46896], null);
var temp__4657__auto___46924 = input_checker46894_46915.call(null,args__32481__auto___46923);
if(cljs.core.truth_(temp__4657__auto___46924)){
var error__32482__auto___46925 = temp__4657__auto___46924;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__32482__auto___46925)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46893_46913,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46923,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46925], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var input = G__46896;
while(true){
return om_bootstrap.input.render_label.call(null,input,null);
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46926 = output_checker46895_46916.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46926)){
var error__32482__auto___46927 = temp__4657__auto___46926;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__32482__auto___46927)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46892_46912,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46927], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46911,output_schema46892_46912,input_schema46893_46913,input_schema46897_46914,input_checker46894_46915,output_checker46895_46916,input_checker46898_46917,output_checker46899_46918))
;

om_bootstrap.input.render_label.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___46911,output_schema46892_46912,input_schema46893_46913,input_schema46897_46914,input_checker46894_46915,output_checker46895_46916,input_checker46898_46917,output_checker46899_46918){
return (function (G__46900,G__46901){
var validate__32480__auto__ = ufv___46911.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46900,G__46901], null);
var temp__4657__auto___46929 = input_checker46898_46917.call(null,args__32481__auto___46928);
if(cljs.core.truth_(temp__4657__auto___46929)){
var error__32482__auto___46930 = temp__4657__auto___46929;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__32482__auto___46930)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46897_46914,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46928,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46930], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var G__46906 = G__46900;
var map__46907 = G__46906;
var map__46907__$1 = ((((!((map__46907 == null)))?((((map__46907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46907):map__46907);
var input = map__46907__$1;
var lc = cljs.core.get.call(null,map__46907__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label = cljs.core.get.call(null,map__46907__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child = G__46901;
var G__46906__$1 = G__46906;
var child__$1 = child;
while(true){
var map__46909 = G__46906__$1;
var map__46909__$1 = ((((!((map__46909 == null)))?((((map__46909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46909):map__46909);
var input__$1 = map__46909__$1;
var lc__$1 = cljs.core.get.call(null,map__46909__$1,new cljs.core.Keyword(null,"label-classname","label-classname",-1752600212));
var label__$1 = cljs.core.get.call(null,map__46909__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var child__$2 = child__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"control-label","control-label",1226436372),cljs.core.not.call(null,om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input__$1))], null),(cljs.core.truth_(lc__$1)?cljs.core.PersistentArrayMap.fromArray([lc__$1,cljs.core.boolean$.call(null,lc__$1)], true, false):null));
if(cljs.core.truth_(label__$1)){
return cljs.core.apply.call(null,React.DOM.label,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2,label__$1],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46931 = output_checker46899_46918.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46931)){
var error__32482__auto___46932 = temp__4657__auto___46931;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-label","render-label",-2019535210,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"This doesn't handle any control group stuff."], null)),cljs.core.pr_str.call(null,error__32482__auto___46932)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46892_46912,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46932], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46911,output_schema46892_46912,input_schema46893_46913,input_schema46897_46914,input_checker46894_46915,output_checker46895_46916,input_checker46898_46917,output_checker46899_46918))
;

om_bootstrap.input.render_label.cljs$lang$maxFixedArity = 2;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_label),schema.core.make_fn_schema.call(null,output_schema46892_46912,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46893_46913,input_schema46897_46914], null)));
var ufv___46951 = schema.utils.use_fn_validation;
var output_schema46933_46952 = schema.core.Any;
var input_schema46934_46953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46935_46954 = schema.core.checker.call(null,input_schema46934_46953);
var output_checker46936_46955 = schema.core.checker.call(null,output_schema46933_46952);
/**
 * Inputs: [{wc :wrapper-classname} :- Input child]
 */
om_bootstrap.input.render_wrapper = ((function (ufv___46951,output_schema46933_46952,input_schema46934_46953,input_checker46935_46954,output_checker46936_46955){
return (function om_bootstrap$input$render_wrapper(G__46937,G__46938){
var validate__32480__auto__ = ufv___46951.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46937,G__46938], null);
var temp__4657__auto___46957 = input_checker46935_46954.call(null,args__32481__auto___46956);
if(cljs.core.truth_(temp__4657__auto___46957)){
var error__32482__auto___46958 = temp__4657__auto___46957;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46958)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46934_46953,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46956,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46958], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var G__46946 = G__46937;
var map__46947 = G__46946;
var map__46947__$1 = ((((!((map__46947 == null)))?((((map__46947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46947):map__46947);
var wc = cljs.core.get.call(null,map__46947__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child = G__46938;
var G__46946__$1 = G__46946;
var child__$1 = child;
while(true){
var map__46949 = G__46946__$1;
var map__46949__$1 = ((((!((map__46949 == null)))?((((map__46949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46949):map__46949);
var wc__$1 = cljs.core.get.call(null,map__46949__$1,new cljs.core.Keyword(null,"wrapper-classname","wrapper-classname",1629533866));
var child__$2 = child__$1;
if(cljs.core.truth_(wc__$1)){
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,wc__$1)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[child__$2],null))));
} else {
return child__$2;
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46959 = output_checker46936_46955.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46959)){
var error__32482__auto___46960 = temp__4657__auto___46959;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-wrapper","render-wrapper",79817165,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___46960)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46933_46952,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46960], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46951,output_schema46933_46952,input_schema46934_46953,input_checker46935_46954,output_checker46936_46955))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_wrapper),schema.core.make_fn_schema.call(null,output_schema46933_46952,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46934_46953], null)));
var ufv___46979 = schema.utils.use_fn_validation;
var output_schema46961_46980 = om_bootstrap.types.Component;
var input_schema46962_46981 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46963_46982 = schema.core.checker.call(null,input_schema46962_46981);
var output_checker46964_46983 = schema.core.checker.call(null,output_schema46961_46980);
/**
 * Inputs: [{bs-style :bs-style, cn :group-classname, :as input} :- Input children]
 *   Returns: t/Component
 * 
 *   Wraps the entire form group.
 */
om_bootstrap.input.render_form_group = ((function (ufv___46979,output_schema46961_46980,input_schema46962_46981,input_checker46963_46982,output_checker46964_46983){
return (function om_bootstrap$input$render_form_group(G__46965,G__46966){
var validate__32480__auto__ = ufv___46979.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___46984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46965,G__46966], null);
var temp__4657__auto___46985 = input_checker46963_46982.call(null,args__32481__auto___46984);
if(cljs.core.truth_(temp__4657__auto___46985)){
var error__32482__auto___46986 = temp__4657__auto___46985;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps the entire form group."], null)),cljs.core.pr_str.call(null,error__32482__auto___46986)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46962_46981,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___46984,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46986], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var G__46974 = G__46965;
var map__46975 = G__46974;
var map__46975__$1 = ((((!((map__46975 == null)))?((((map__46975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46975):map__46975);
var input = map__46975__$1;
var bs_style = cljs.core.get.call(null,map__46975__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn = cljs.core.get.call(null,map__46975__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children = G__46966;
var G__46974__$1 = G__46974;
var children__$1 = children;
while(true){
var map__46977 = G__46974__$1;
var map__46977__$1 = ((((!((map__46977 == null)))?((((map__46977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46977):map__46977);
var input__$1 = map__46977__$1;
var bs_style__$1 = cljs.core.get.call(null,map__46977__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var cn__$1 = cljs.core.get.call(null,map__46977__$1,new cljs.core.Keyword(null,"group-classname","group-classname",-610987816));
var children__$2 = children__$1;
var classes = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-group","form-group",-267875328),cljs.core.not.call(null,new cljs.core.Keyword(null,"skip-form-group?","skip-form-group?",210862261).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-feedback","has-feedback",1328001802),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821).cljs$core$IFn$_invoke$arity$1(input__$1)),new cljs.core.Keyword(null,"has-success","has-success",685004255),cljs.core._EQ_.call(null,"success",bs_style__$1),new cljs.core.Keyword(null,"has-warning","has-warning",1993894136),cljs.core._EQ_.call(null,"warning",bs_style__$1),new cljs.core.Keyword(null,"has-error","has-error",-786302929),cljs.core._EQ_.call(null,"error",bs_style__$1)], null),(cljs.core.truth_(cn__$1)?cljs.core.PersistentArrayMap.fromArray([cn__$1,cljs.core.boolean$.call(null,cn__$1)], true, false):null));
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_bootstrap.input.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$2],null))));
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___46987 = output_checker46964_46983.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___46987)){
var error__32482__auto___46988 = temp__4657__auto___46987;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-form-group","render-form-group",2039718866,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps the entire form group."], null)),cljs.core.pr_str.call(null,error__32482__auto___46988)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46961_46980,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___46988], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46979,output_schema46961_46980,input_schema46962_46981,input_checker46963_46982,output_checker46964_46983))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_form_group),schema.core.make_fn_schema.call(null,output_schema46961_46980,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46962_46981], null)));
var ufv___46998 = schema.utils.use_fn_validation;
var output_schema46989_46999 = om_bootstrap.types.Component;
var input_schema46990_47000 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Input","Input",1777023215,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker46991_47001 = schema.core.checker.call(null,input_schema46990_47000);
var output_checker46992_47002 = schema.core.checker.call(null,output_schema46989_46999);
/**
 * Inputs: [input :- Input attrs children]
 *   Returns: t/Component
 */
om_bootstrap.input.render_input = ((function (ufv___46998,output_schema46989_46999,input_schema46990_47000,input_checker46991_47001,output_checker46992_47002){
return (function om_bootstrap$input$render_input(G__46993,G__46994,G__46995){
var validate__32480__auto__ = ufv___46998.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___47003 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46993,G__46994,G__46995], null);
var temp__4657__auto___47004 = input_checker46991_47001.call(null,args__32481__auto___47003);
if(cljs.core.truth_(temp__4657__auto___47004)){
var error__32482__auto___47005 = temp__4657__auto___47004;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input","render-input",243083212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___47005)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema46990_47000,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___47003,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47005], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var input = G__46993;
var attrs = G__46994;
var children = G__46995;
while(true){
var props = ((function (validate__32480__auto__,ufv___46998,output_schema46989_46999,input_schema46990_47000,input_checker46991_47001,output_checker46992_47002){
return (function (klass){
return om_bootstrap.util.merge_props.call(null,attrs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),klass,new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input"], null));
});})(validate__32480__auto__,ufv___46998,output_schema46989_46999,input_schema46990_47000,input_checker46991_47001,output_checker46992_47002))
;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input))){
return children;
} else {
var G__46997 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input);
switch (G__46997) {
case "select":
return om_tools.dom.select.call(null,props.call(null,"form-control"),children);

break;
case "textarea":
return om_tools.dom.element.call(null,om.dom.textarea,props.call(null,"form-control"),cljs.core.PersistentVector.EMPTY);

break;
case "static":
return om_tools.dom.element.call(null,React.DOM.p,props.call(null,"form-control-static"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs)],null)));

break;
default:
return om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props.call(null,(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))?"":"form-control")),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___47007 = output_checker46992_47002.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___47007)){
var error__32482__auto___47008 = temp__4657__auto___47007;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"render-input","render-input",243083212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null)),cljs.core.pr_str.call(null,error__32482__auto___47008)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema46989_46999,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47008], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___46998,output_schema46989_46999,input_schema46990_47000,input_checker46991_47001,output_checker46992_47002))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.render_input),schema.core.make_fn_schema.call(null,output_schema46989_46999,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46990_47000], null)));
var ufv___47020 = schema.utils.use_fn_validation;
var output_schema47009_47021 = om_bootstrap.types.Component;
var input_schema47010_47022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Input,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Input","Input",1777023215,null)], null))),schema.core.Any], null);
var input_checker47011_47023 = schema.core.checker.call(null,input_schema47010_47022);
var output_checker47012_47024 = schema.core.checker.call(null,output_schema47009_47021);
/**
 * Inputs: [opts :- Input & children]
 *   Returns: t/Component
 * 
 *   Returns an input component. This currently does NOT handle any of
 *   the default values or validation messages that we'll need to make
 *   this work, though.
 */
om_bootstrap.input.input = ((function (ufv___47020,output_schema47009_47021,input_schema47010_47022,input_checker47011_47023,output_checker47012_47024){
return (function om_bootstrap$input$input(var_args){
var args__25954__auto__ = [];
var len__25947__auto___47025 = arguments.length;
var i__25948__auto___47026 = (0);
while(true){
if((i__25948__auto___47026 < len__25947__auto___47025)){
args__25954__auto__.push((arguments[i__25948__auto___47026]));

var G__47027 = (i__25948__auto___47026 + (1));
i__25948__auto___47026 = G__47027;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});})(ufv___47020,output_schema47009_47021,input_schema47010_47022,input_checker47011_47023,output_checker47012_47024))
;

om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ufv___47020,output_schema47009_47021,input_schema47010_47022,input_checker47011_47023,output_checker47012_47024){
return (function (G__47013,rest47014){
var validate__32480__auto__ = ufv___47020.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___47028 = cljs.core.list_STAR_.call(null,G__47013,rest47014);
var temp__4657__auto___47029 = input_checker47011_47023.call(null,args__32481__auto___47028);
if(cljs.core.truth_(temp__4657__auto___47029)){
var error__32482__auto___47030 = temp__4657__auto___47029;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns an input component. This currently does NOT handle any of\n  the default values or validation messages that we'll need to make\n  this work, though."], null)),cljs.core.pr_str.call(null,error__32482__auto___47030)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47010_47022,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___47028,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47030], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__47013;
var children = rest47014;
while(true){
var vec__47017 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Input,opts);
var input = cljs.core.nth.call(null,vec__47017,(0),null);
var attrs = cljs.core.nth.call(null,vec__47017,(1),null);
if(cljs.core.truth_(om_bootstrap.input.checkbox_or_radio_QMARK_.call(null,input))){
return om_bootstrap.input.render_form_group.call(null,input,om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.checkbox_or_radio_wrapper.call(null,input,om_bootstrap.input.render_label.call(null,input,om_bootstrap.input.render_input.call(null,input,attrs,children))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null)));
} else {
return om_bootstrap.input.render_form_group.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_label.call(null,input),om_bootstrap.input.render_wrapper.call(null,input,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.input.render_input_group.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"addon-before","addon-before",-500360384),new cljs.core.Keyword(null,"addon-after","addon-after",634985306),new cljs.core.Keyword(null,"addon-button","addon-button",136745317),new cljs.core.Keyword(null,"addon-button-before","addon-button-before",-143956251),new cljs.core.Keyword(null,"addon-button-after","addon-button-after",-1815680807)], null)),om_bootstrap.input.render_input.call(null,input,attrs,children)),om_bootstrap.input.render_icon.call(null,cljs.core.select_keys.call(null,input,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedback?","feedback?",-1945951821),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)], null))),om_bootstrap.input.render_help.call(null,new cljs.core.Keyword(null,"help","help",-439233446).cljs$core$IFn$_invoke$arity$1(input))], null))], null));
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___47031 = output_checker47012_47024.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___47031)){
var error__32482__auto___47032 = temp__4657__auto___47031;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns an input component. This currently does NOT handle any of\n  the default values or validation messages that we'll need to make\n  this work, though."], null)),cljs.core.pr_str.call(null,error__32482__auto___47032)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47009_47021,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47032], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___47020,output_schema47009_47021,input_schema47010_47022,input_checker47011_47023,output_checker47012_47024))
;

om_bootstrap.input.input.cljs$lang$maxFixedArity = (1);

om_bootstrap.input.input.cljs$lang$applyTo = ((function (ufv___47020,output_schema47009_47021,input_schema47010_47022,input_checker47011_47023,output_checker47012_47024){
return (function (seq47015){
var G__47016 = cljs.core.first.call(null,seq47015);
var seq47015__$1 = cljs.core.next.call(null,seq47015);
return om_bootstrap.input.input.cljs$core$IFn$_invoke$arity$variadic(G__47016,seq47015__$1);
});})(ufv___47020,output_schema47009_47021,input_schema47010_47022,input_checker47011_47023,output_checker47012_47024))
;


schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.input),schema.core.make_fn_schema.call(null,output_schema47009_47021,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47010_47022], null)));
var ufv___47048 = schema.utils.use_fn_validation;
var output_schema47033_47049 = om_bootstrap.types.Component;
var input_schema47034_47050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.input.Radio,cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Radio","Radio",1790223405,null)], null)))], null);
var input_checker47035_47051 = schema.core.checker.call(null,input_schema47034_47050);
var output_checker47036_47052 = schema.core.checker.call(null,output_schema47033_47049);
/**
 * Inputs: [opts :- Radio]
 *   Returns: t/Component
 * 
 *   Generates a radio button entry, to place into a radio button
 * grouping.
 */
om_bootstrap.input.radio_option = ((function (ufv___47048,output_schema47033_47049,input_schema47034_47050,input_checker47035_47051,output_checker47036_47052){
return (function om_bootstrap$input$radio_option(G__47037){
var validate__32480__auto__ = ufv___47048.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___47053 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47037], null);
var temp__4657__auto___47054 = input_checker47035_47051.call(null,args__32481__auto___47053);
if(cljs.core.truth_(temp__4657__auto___47054)){
var error__32482__auto___47055 = temp__4657__auto___47054;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a radio button entry, to place into a radio button\n   grouping."], null)),cljs.core.pr_str.call(null,error__32482__auto___47055)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47034_47050,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___47053,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47055], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var opts = G__47037;
while(true){
var vec__47043 = om_bootstrap.types.separate.call(null,om_bootstrap.input.Radio,opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"input",new cljs.core.Keyword(null,"key","key",-1516042587),"input",new cljs.core.Keyword(null,"type","type",1174270348),"radio"], null));
var bs = cljs.core.nth.call(null,vec__47043,(0),null);
var props = cljs.core.nth.call(null,vec__47043,(1),null);
var map__47046 = bs;
var map__47046__$1 = ((((!((map__47046 == null)))?((((map__47046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47046):map__47046);
var label = cljs.core.get.call(null,map__47046__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var checked_QMARK_ = cljs.core.get.call(null,map__47046__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var inline_QMARK_ = cljs.core.get.call(null,map__47046__$1,new cljs.core.Keyword(null,"inline?","inline?",-1674483791));
var core = om_tools.dom.element.call(null,om.dom.input,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(inline_QMARK_)){
return cljs.core.apply.call(null,React.DOM.label,{"className": "radio-inline"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))));
} else {
return cljs.core.apply.call(null,React.DOM.div,{"className": "radio"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.label,{},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[core,label],null))))],null))));
}
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___47056 = output_checker47036_47052.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___47056)){
var error__32482__auto___47057 = temp__4657__auto___47056;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"radio-option","radio-option",726779012,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("t","Component","t/Component",1015042821,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Generates a radio button entry, to place into a radio button\n   grouping."], null)),cljs.core.pr_str.call(null,error__32482__auto___47057)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47033_47049,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47057], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___47048,output_schema47033_47049,input_schema47034_47050,input_checker47035_47051,output_checker47036_47052))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.radio_option),schema.core.make_fn_schema.call(null,output_schema47033_47049,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47034_47050], null)));
var ufv___47096 = schema.utils.use_fn_validation;
var output_schema47058_47097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.types.Component], null);
var input_schema47059_47098 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Str,cljs.core.with_meta(new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("s","Str","s/Str",907974338,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.pair.call(null,schema.core.Str,"option value",schema.core.Str,"option label")], null),cljs.core.with_meta(new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Str","s/Str",907974338,null),"option value",new cljs.core.Symbol("s","Str","s/Str",907974338,null),"option label")], null)], null)))], null);
var input_checker47060_47099 = schema.core.checker.call(null,input_schema47059_47098);
var output_checker47061_47100 = schema.core.checker.call(null,output_schema47058_47097);
/**
 * Inputs: [header :- s/Str opts :- [(s/pair s/Str "option value" s/Str "option label")]]
 *   Returns: [t/Component]
 * 
 *   Returns a sequence of options for use as the children of a select
 *   input.
 */
om_bootstrap.input.options = ((function (ufv___47096,output_schema47058_47097,input_schema47059_47098,input_checker47060_47099,output_checker47061_47100){
return (function om_bootstrap$input$options(G__47062,G__47063){
var validate__32480__auto__ = ufv___47096.get_cell();
if(cljs.core.truth_(validate__32480__auto__)){
var args__32481__auto___47101 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47062,G__47063], null);
var temp__4657__auto___47102 = input_checker47060_47099.call(null,args__32481__auto___47101);
if(cljs.core.truth_(temp__4657__auto___47102)){
var error__32482__auto___47103 = temp__4657__auto___47102;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence of options for use as the children of a select\n  input."], null)),cljs.core.pr_str.call(null,error__32482__auto___47103)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema47059_47098,new cljs.core.Keyword(null,"value","value",305978217),args__32481__auto___47101,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47103], null));
} else {
}
} else {
}

var o__32483__auto__ = (function (){var header = G__47062;
var opts = G__47063;
while(true){
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": ""},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[header],null)))),(function (){var iter__25652__auto__ = ((function (validate__32480__auto__,ufv___47096,output_schema47058_47097,input_schema47059_47098,input_checker47060_47099,output_checker47061_47100){
return (function om_bootstrap$input$options_$_iter__47080(s__47081){
return (new cljs.core.LazySeq(null,((function (validate__32480__auto__,ufv___47096,output_schema47058_47097,input_schema47059_47098,input_checker47060_47099,output_checker47061_47100){
return (function (){
var s__47081__$1 = s__47081;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47081__$1);
if(temp__4657__auto__){
var s__47081__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47081__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__47081__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__47083 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__47082 = (0);
while(true){
if((i__47082 < size__25651__auto__)){
var vec__47090 = cljs.core._nth.call(null,c__25650__auto__,i__47082);
var v = cljs.core.nth.call(null,vec__47090,(0),null);
var label = cljs.core.nth.call(null,vec__47090,(1),null);
cljs.core.chunk_append.call(null,b__47083,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))));

var G__47104 = (i__47082 + (1));
i__47082 = G__47104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47083),om_bootstrap$input$options_$_iter__47080.call(null,cljs.core.chunk_rest.call(null,s__47081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47083),null);
}
} else {
var vec__47093 = cljs.core.first.call(null,s__47081__$2);
var v = cljs.core.nth.call(null,vec__47093,(0),null);
var label = cljs.core.nth.call(null,vec__47093,(1),null);
return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,v)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),om_bootstrap$input$options_$_iter__47080.call(null,cljs.core.rest.call(null,s__47081__$2)));
}
} else {
return null;
}
break;
}
});})(validate__32480__auto__,ufv___47096,output_schema47058_47097,input_schema47059_47098,input_checker47060_47099,output_checker47061_47100))
,null,null));
});})(validate__32480__auto__,ufv___47096,output_schema47058_47097,input_schema47059_47098,input_checker47060_47099,output_checker47061_47100))
;
return iter__25652__auto__.call(null,opts);
})());
break;
}
})();
if(cljs.core.truth_(validate__32480__auto__)){
var temp__4657__auto___47105 = output_checker47061_47100.call(null,o__32483__auto__);
if(cljs.core.truth_(temp__4657__auto___47105)){
var error__32482__auto___47106 = temp__4657__auto___47105;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("t","Component","t/Component",1015042821,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a sequence of options for use as the children of a select\n  input."], null)),cljs.core.pr_str.call(null,error__32482__auto___47106)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema47058_47097,new cljs.core.Keyword(null,"value","value",305978217),o__32483__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__32482__auto___47106], null));
} else {
}
} else {
}

return o__32483__auto__;
});})(ufv___47096,output_schema47058_47097,input_schema47059_47098,input_checker47060_47099,output_checker47061_47100))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.input.options),schema.core.make_fn_schema.call(null,output_schema47058_47097,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47059_47098], null)));

//# sourceMappingURL=input.js.map?rel=1484804424435