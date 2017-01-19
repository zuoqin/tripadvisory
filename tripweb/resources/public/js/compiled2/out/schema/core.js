// Compiled by ClojureScript 1.9.89 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__25535__auto__ = (((this$ == null))?null:this$);
var m__25536__auto__ = (schema.core.spec[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,this$);
} else {
var m__25536__auto____$1 = (schema.core.spec["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__25535__auto__ = (((this$ == null))?null:this$);
var m__25536__auto__ = (schema.core.explain[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,this$);
} else {
var m__25536__auto____$1 = (schema.core.explain["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.call(null,schema.utils.error_val,schema.spec.core.run_checker.call(null,(function (s,params){
return schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker.call(null,schema__$1);
return ((function (c){
return (function (value){
var temp__4657__auto___33962 = c.call(null,value);
if(cljs.core.truth_(temp__4657__auto___33962)){
var error_33963 = temp__4657__auto___33962;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_33963)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_33963], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator.call(null,schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition.call(null,s,(function (p1__33964_SHARP_){
var and__24860__auto__ = !((p1__33964_SHARP_ == null));
if(and__24860__auto__){
var or__24872__auto__ = (klass === p1__33964_SHARP_.constructor);
if(or__24872__auto__){
return or__24872__auto__;
} else {
return p1__33964_SHARP_ instanceof klass;
}
} else {
return and__24860__auto__;
}
}),(function (p1__33965_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = klass;
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = p1__33965_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition.call(null,this$,this$);
var temp__4655__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4655__auto__)){
var class_schema = temp__4655__auto__;
return schema.spec.variant.variant_spec.call(null,pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec.call(null,pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4655__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4655__auto__)){
var more_schema = temp__4655__auto__;
return schema.core.explain.call(null,more_schema);
} else {
var pred__33966 = cljs.core._EQ_;
var expr__33967 = this$;
if(cljs.core.truth_(pred__33966.call(null,null,expr__33967))){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
if(cljs.core.truth_(pred__33966.call(null,Boolean,expr__33967))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_(pred__33966.call(null,Number,expr__33967))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_(pred__33966.call(null,null,expr__33967))){
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
} else {
if(cljs.core.truth_(pred__33966.call(null,Date,expr__33967))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_(pred__33966.call(null,cljs.core.UUID,expr__33967))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k33970,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__33972 = (((k33970 instanceof cljs.core.Keyword))?k33970.fqn:null);
switch (G__33972) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33970,else__25497__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.AnythingSchema{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33969){
var self__ = this;
var G__33969__$1 = this;
return (new cljs.core.RecordIter((0),G__33969__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__33969){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__33973 = cljs.core.keyword_identical_QMARK_;
var expr__33974 = k__25502__auto__;
if(cljs.core.truth_(pred__33973.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__33974))){
return (new schema.core.AnythingSchema(G__33969,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__33969),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__33969){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__33969,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__33971){
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__33971),null,cljs.core.dissoc.call(null,G__33971,new cljs.core.Keyword(null,"_","_",1453416199)),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k33980,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__33982 = (((k33980 instanceof cljs.core.Keyword))?k33980.fqn:null);
switch (G__33982) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33980,else__25497__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.EqSchema{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33979){
var self__ = this;
var G__33979__$1 = this;
return (new cljs.core.RecordIter((0),G__33979__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__33979){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__33983 = cljs.core.keyword_identical_QMARK_;
var expr__33984 = k__25502__auto__;
if(cljs.core.truth_(pred__33983.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__33984))){
return (new schema.core.EqSchema(G__33979,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__33979),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__33979){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__33979,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__33977_SHARP_){
return cljs.core._EQ_.call(null,self__.v,p1__33977_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__33978_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = self__.v;
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = p1__33978_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = self__.v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__33981){
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__33981),null,cljs.core.dissoc.call(null,G__33981,new cljs.core.Keyword(null,"v","v",21465059)),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k33990,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__33992 = (((k33990 instanceof cljs.core.Keyword))?k33990.fqn:null);
switch (G__33992) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33990,else__25497__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.Isa{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33989){
var self__ = this;
var G__33989__$1 = this;
return (new cljs.core.RecordIter((0),G__33989__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__33989){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__33993 = cljs.core.keyword_identical_QMARK_;
var expr__33994 = k__25502__auto__;
if(cljs.core.truth_(pred__33993.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33994))){
return (new schema.core.Isa(G__33989,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33993.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__33994))){
return (new schema.core.Isa(self__.h,G__33989,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__33989),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__33989){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__33989,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__33987_SHARP_){
return cljs.core.isa_QMARK_.call(null,self__.h,p1__33987_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__33988_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__33988_SHARP_;
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = self__.parent;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = self__.parent;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__33991){
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33991),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__33991),null,cljs.core.dissoc.call(null,G__33991,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args33997 = [];
var len__25947__auto___34000 = arguments.length;
var i__25948__auto___34001 = (0);
while(true){
if((i__25948__auto___34001 < len__25947__auto___34000)){
args33997.push((arguments[i__25948__auto___34001]));

var G__34002 = (i__25948__auto___34001 + (1));
i__25948__auto___34001 = G__34002;
continue;
} else {
}
break;
}

var G__33999 = args33997.length;
switch (G__33999) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33997.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34007,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34009 = (((k34007 instanceof cljs.core.Keyword))?k34007.fqn:null);
switch (G__34009) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34007,else__25497__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.EnumSchema{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34006){
var self__ = this;
var G__34006__$1 = this;
return (new cljs.core.RecordIter((0),G__34006__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34006){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34010 = cljs.core.keyword_identical_QMARK_;
var expr__34011 = k__25502__auto__;
if(cljs.core.truth_(pred__34010.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__34011))){
return (new schema.core.EnumSchema(G__34006,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34006),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34006){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__34006,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__34004_SHARP_){
return cljs.core.contains_QMARK_.call(null,self__.vs,p1__34004_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__34005_SHARP_){
var x__25706__auto__ = self__.vs;
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = p1__34005_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__34008){
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__34008),null,cljs.core.dissoc.call(null,G__34008,new cljs.core.Keyword(null,"vs","vs",-2022097090)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__25954__auto__ = [];
var len__25947__auto___34015 = arguments.length;
var i__25948__auto___34016 = (0);
while(true){
if((i__25948__auto___34016 < len__25947__auto___34015)){
args__25954__auto__.push((arguments[i__25948__auto___34016]));

var G__34017 = (i__25948__auto___34016 + (1));
i__25948__auto___34016 = G__34017;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set.call(null,vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq34014){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34014));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34020,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34022 = (((k34020 instanceof cljs.core.Keyword))?k34020.fqn:null);
switch (G__34022) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34020,else__25497__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.Predicate{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34019){
var self__ = this;
var G__34019__$1 = this;
return (new cljs.core.RecordIter((0),G__34019__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34019){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34023 = cljs.core.keyword_identical_QMARK_;
var expr__34024 = k__25502__auto__;
if(cljs.core.truth_(pred__34023.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__34024))){
return (new schema.core.Predicate(G__34019,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34023.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__34024))){
return (new schema.core.Predicate(self__.p_QMARK_,G__34019,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34019),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34019){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__34019,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__34018_SHARP_){
var x__25706__auto__ = self__.pred_name;
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = p1__34018_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = self__.pred_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__34021){
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__34021),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__34021),null,cljs.core.dissoc.call(null,G__34021,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args34027 = [];
var len__25947__auto___34030 = arguments.length;
var i__25948__auto___34031 = (0);
while(true){
if((i__25948__auto___34031 < len__25947__auto___34030)){
args34027.push((arguments[i__25948__auto___34031]));

var G__34032 = (i__25948__auto___34031 + (1));
i__25948__auto___34031 = G__34032;
continue;
} else {
}
break;
}

var G__34029 = args34027.length;
switch (G__34029) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34027.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.call(null,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;

schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34037,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34039 = (((k34037 instanceof cljs.core.Keyword))?k34037.fqn:null);
switch (G__34039) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34037,else__25497__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.Protocol{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34036){
var self__ = this;
var G__34036__$1 = this;
return (new cljs.core.RecordIter((0),G__34036__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34036){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34040 = cljs.core.keyword_identical_QMARK_;
var expr__34041 = k__25502__auto__;
if(cljs.core.truth_(pred__34040.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__34041))){
return (new schema.core.Protocol(G__34036,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34036),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34036){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__34036,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__34034_SHARP_){
return new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,p1__34034_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__34035_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.protocol_name.call(null,this$__$1);
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = p1__34035_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.protocol_name.call(null,this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__34038){
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__34038),null,cljs.core.dissoc.call(null,G__34038,new cljs.core.Keyword(null,"p","p",151049309)),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,cljs.core.some_fn.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__32690__32691__auto__){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__32690__32691__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
),schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__34044_SHARP_){
return cljs.core.re_find.call(null,this$__$1,p1__34044_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__34045_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.explain.call(null,this$__$1);
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = p1__34045_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.call(null,[cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core34048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core34048 = (function (meta34049){
this.meta34049 = meta34049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core34048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34050,meta34049__$1){
var self__ = this;
var _34050__$1 = this;
return (new schema.core.t_schema$core34048(meta34049__$1));
});

schema.core.t_schema$core34048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34050){
var self__ = this;
var _34050__$1 = this;
return self__.meta34049;
});

schema.core.t_schema$core34048.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core34048.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__34046_SHARP_){
return (p1__34046_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__34047_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__34047_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
));
});

schema.core.t_schema$core34048.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t_schema$core34048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34049","meta34049",567355150,null)], null);
});

schema.core.t_schema$core34048.cljs$lang$type = true;

schema.core.t_schema$core34048.cljs$lang$ctorStr = "schema.core/t_schema$core34048";

schema.core.t_schema$core34048.cljs$lang$ctorPrWriter = (function (this__25478__auto__,writer__25479__auto__,opt__25480__auto__){
return cljs.core._write.call(null,writer__25479__auto__,"schema.core/t_schema$core34048");
});

schema.core.__GT_t_schema$core34048 = (function schema$core$__GT_t_schema$core34048(meta34049){
return (new schema.core.t_schema$core34048(meta34049));
});

}

return (new schema.core.t_schema$core34048(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34052,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34054 = (((k34052 instanceof cljs.core.Keyword))?k34052.fqn:null);
switch (G__34054) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34052,else__25497__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.Maybe{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34051){
var self__ = this;
var G__34051__$1 = this;
return (new cljs.core.RecordIter((0),G__34051__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34051){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34055 = cljs.core.keyword_identical_QMARK_;
var expr__34056 = k__25502__auto__;
if(cljs.core.truth_(pred__34055.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__34056))){
return (new schema.core.Maybe(G__34051,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34051),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34051){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__34051,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq.call(null,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.explain.call(null,self__.schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__34053){
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__34053),null,cljs.core.dissoc.call(null,G__34053,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34061,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34063 = (((k34061 instanceof cljs.core.Keyword))?k34061.fqn:null);
switch (G__34063) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34061,else__25497__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.NamedSchema{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34060){
var self__ = this;
var G__34060__$1 = this;
return (new cljs.core.RecordIter((0),G__34060__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34060){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34064 = cljs.core.keyword_identical_QMARK_;
var expr__34065 = k__25502__auto__;
if(cljs.core.truth_(pred__34064.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__34065))){
return (new schema.core.NamedSchema(G__34060,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34064.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__34065))){
return (new schema.core.NamedSchema(self__.schema,G__34060,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34060),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34060){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__34060,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),((function (this$__$1){
return (function (p1__34059_SHARP_){
return schema.utils.__GT_NamedError.call(null,self__.name,p1__34059_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.explain.call(null,self__.schema);
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = self__.name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__34062){
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__34062),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__34062),null,cljs.core.dissoc.call(null,G__34062,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34070,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34072 = (((k34070 instanceof cljs.core.Keyword))?k34070.fqn:null);
switch (G__34072) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34070,else__25497__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.Either{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34069){
var self__ = this;
var G__34069__$1 = this;
return (new cljs.core.RecordIter((0),G__34069__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34069){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34073 = cljs.core.keyword_identical_QMARK_;
var expr__34074 = k__25502__auto__;
if(cljs.core.truth_(pred__34073.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__34074))){
return (new schema.core.Either(G__34069,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34069),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34069){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__34069,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__25652__auto__ = ((function (this$__$1){
return (function schema$core$iter__34076(s__34077){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__34077__$1 = s__34077;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34077__$1);
if(temp__4657__auto__){
var s__34077__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34077__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34077__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34079 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34078 = (0);
while(true){
if((i__34078 < size__25651__auto__)){
var s = cljs.core._nth.call(null,c__25650__auto__,i__34078);
cljs.core.chunk_append.call(null,b__34079,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__34081 = (i__34078 + (1));
i__34078 = G__34081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34079),schema$core$iter__34076.call(null,cljs.core.chunk_rest.call(null,s__34077__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34079),null);
}
} else {
var s = cljs.core.first.call(null,s__34077__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__34076.call(null,cljs.core.rest.call(null,s__34077__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__25652__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__34068_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__34068_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null));
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__34071){
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__34071),null,cljs.core.dissoc.call(null,G__34071,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__25954__auto__ = [];
var len__25947__auto___34083 = arguments.length;
var i__25948__auto___34084 = (0);
while(true){
if((i__25948__auto___34084 < len__25947__auto___34083)){
args__25954__auto__.push((arguments[i__25948__auto___34084]));

var G__34085 = (i__25948__auto___34084 + (1));
i__25948__auto___34084 = G__34085;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq34082){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34082));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34088,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34090 = (((k34088 instanceof cljs.core.Keyword))?k34088.fqn:null);
switch (G__34090) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34088,else__25497__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34087){
var self__ = this;
var G__34087__$1 = this;
return (new cljs.core.RecordIter((0),G__34087__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34087){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34091 = cljs.core.keyword_identical_QMARK_;
var expr__34092 = k__25502__auto__;
if(cljs.core.truth_(pred__34091.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__34092))){
return (new schema.core.ConditionalSchema(G__34087,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34091.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__34092))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__34087,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34087),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34087){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__34087,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__25652__auto__ = ((function (this$__$1){
return (function schema$core$iter__34094(s__34095){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__34095__$1 = s__34095;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34095__$1);
if(temp__4657__auto__){
var s__34095__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34095__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34095__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34097 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34096 = (0);
while(true){
if((i__34096 < size__25651__auto__)){
var vec__34104 = cljs.core._nth.call(null,c__25650__auto__,i__34096);
var p = cljs.core.nth.call(null,vec__34104,(0),null);
var s = cljs.core.nth.call(null,vec__34104,(1),null);
cljs.core.chunk_append.call(null,b__34097,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__34115 = (i__34096 + (1));
i__34096 = G__34115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34097),schema$core$iter__34094.call(null,cljs.core.chunk_rest.call(null,s__34095__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34097),null);
}
} else {
var vec__34107 = cljs.core.first.call(null,s__34095__$2);
var p = cljs.core.nth.call(null,vec__34107,(0),null);
var s = cljs.core.nth.call(null,vec__34107,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__34094.call(null,cljs.core.rest.call(null,s__34095__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__25652__auto__.call(null,self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__34086_SHARP_){
var x__25706__auto__ = (function (){var or__24872__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,self__.preds_and_schemas))){
return cljs.core.symbol.call(null,schema.utils.fn_name.call(null,cljs.core.ffirst.call(null,self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})();
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = p1__34086_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__34110){
var vec__34111 = p__34110;
var pred = cljs.core.nth.call(null,vec__34111,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__34111,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,schema.utils.fn_name.call(null,pred)),schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__34089){
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__34089),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__34089),null,cljs.core.dissoc.call(null,G__34089,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__25954__auto__ = [];
var len__25947__auto___34133 = arguments.length;
var i__25948__auto___34134 = (0);
while(true){
if((i__25948__auto___34134 < len__25947__auto___34133)){
args__25954__auto__.push((arguments[i__25948__auto___34134]));

var G__34135 = (i__25948__auto___34134 + (1));
i__25948__auto___34134 = G__34135;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq.call(null,preds_and_schemas)) && ((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas))) || ((cljs.core.last.call(null,preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.count.call(null,preds_and_schemas))));
}

return (new schema.core.ConditionalSchema((function (){var iter__25652__auto__ = (function schema$core$iter__34117(s__34118){
return (new cljs.core.LazySeq(null,(function (){
var s__34118__$1 = s__34118;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34118__$1);
if(temp__4657__auto__){
var s__34118__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34118__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34118__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34120 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34119 = (0);
while(true){
if((i__34119 < size__25651__auto__)){
var vec__34127 = cljs.core._nth.call(null,c__25650__auto__,i__34119);
var pred = cljs.core.nth.call(null,vec__34127,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__34127,(1),null);
cljs.core.chunk_append.call(null,b__34120,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null));

var G__34136 = (i__34119 + (1));
i__34119 = G__34136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34120),schema$core$iter__34117.call(null,cljs.core.chunk_rest.call(null,s__34118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34120),null);
}
} else {
var vec__34130 = cljs.core.first.call(null,s__34118__$2);
var pred = cljs.core.nth.call(null,vec__34130,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__34130,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null),schema$core$iter__34117.call(null,cljs.core.rest.call(null,s__34118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})(),((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas)))?cljs.core.last.call(null,preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq34116){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34116));
});


/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__25535__auto__ = (((this$ == null))?null:this$);
var m__25536__auto__ = (schema.core.precondition[goog.typeOf(x__25535__auto__)]);
if(!((m__25536__auto__ == null))){
return m__25536__auto__.call(null,this$);
} else {
var m__25536__auto____$1 = (schema.core.precondition["_"]);
if(!((m__25536__auto____$1 == null))){
return m__25536__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.call(null,cljs.core.complement.call(null,this$__$1.pre),cljs.core.apply.call(null,cljs.core.some_fn,(function (){var iter__25652__auto__ = ((function (this$__$1){
return (function schema$core$iter__34137(s__34138){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__34138__$1 = s__34138;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34138__$1);
if(temp__4657__auto__){
var s__34138__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34138__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34138__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34140 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34139 = (0);
while(true){
if((i__34139 < size__25651__auto__)){
var map__34145 = cljs.core._nth.call(null,c__25650__auto__,i__34139);
var map__34145__$1 = ((((!((map__34145 == null)))?((((map__34145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34145):map__34145);
var guard = cljs.core.get.call(null,map__34145__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__34145__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append.call(null,b__34140,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))));

var G__34149 = (i__34139 + (1));
i__34139 = G__34149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34140),schema$core$iter__34137.call(null,cljs.core.chunk_rest.call(null,s__34138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34140),null);
}
} else {
var map__34147 = cljs.core.first.call(null,s__34138__$2);
var map__34147__$1 = ((((!((map__34147 == null)))?((((map__34147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34147):map__34147);
var guard = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__34147__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons.call(null,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))),schema$core$iter__34137.call(null,cljs.core.rest.call(null,s__34138__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__25652__auto__.call(null,this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34152,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34154 = (((k34152 instanceof cljs.core.Keyword))?k34152.fqn:null);
switch (G__34154) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34152,else__25497__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.CondPre{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34151){
var self__ = this;
var G__34151__$1 = this;
return (new cljs.core.RecordIter((0),G__34151__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34151){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34155 = cljs.core.keyword_identical_QMARK_;
var expr__34156 = k__25502__auto__;
if(cljs.core.truth_(pred__34155.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__34156))){
return (new schema.core.CondPre(G__34151,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34151),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34151){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__34151,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__25652__auto__ = ((function (this$__$1){
return (function schema$core$iter__34158(s__34159){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__34159__$1 = s__34159;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34159__$1);
if(temp__4657__auto__){
var s__34159__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34159__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34159__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34161 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34160 = (0);
while(true){
if((i__34160 < size__25651__auto__)){
var s = cljs.core._nth.call(null,c__25650__auto__,i__34160);
cljs.core.chunk_append.call(null,b__34161,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__34163 = (i__34160 + (1));
i__34160 = G__34163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34161),schema$core$iter__34158.call(null,cljs.core.chunk_rest.call(null,s__34159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34161),null);
}
} else {
var s = cljs.core.first.call(null,s__34159__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__34158.call(null,cljs.core.rest.call(null,s__34159__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__25652__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__34150_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__34150_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null));
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__34153){
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__34153),null,cljs.core.dissoc.call(null,G__34153,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__25954__auto__ = [];
var len__25947__auto___34165 = arguments.length;
var i__25948__auto___34166 = (0);
while(true){
if((i__25948__auto___34166 < len__25947__auto___34165)){
args__25954__auto__.push((arguments[i__25948__auto___34166]));

var G__34167 = (i__25948__auto___34166 + (1));
i__25948__auto___34166 = G__34167;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq34164){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34164));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34170,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34172 = (((k34170 instanceof cljs.core.Keyword))?k34170.fqn:null);
switch (G__34172) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34170,else__25497__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.call(null,((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = t.call(null,x);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,tx))){
return tx;
} else {
return f.call(null,(function (){var or__24872__auto__ = tx;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return x;
}
})());
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__34168_SHARP_){
return schema.spec.core.sub_checker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__34168_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse.call(null,self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.Both{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34169){
var self__ = this;
var G__34169__$1 = this;
return (new cljs.core.RecordIter((0),G__34169__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,cljs.core.comp.call(null,schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34169){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34173 = cljs.core.keyword_identical_QMARK_;
var expr__34174 = k__25502__auto__;
if(cljs.core.truth_(pred__34173.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__34174))){
return (new schema.core.Both(G__34169,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34169),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34169){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__34169,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__34171){
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__34171),null,cljs.core.dissoc.call(null,G__34171,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__25954__auto__ = [];
var len__25947__auto___34178 = arguments.length;
var i__25948__auto___34179 = (0);
while(true){
if((i__25948__auto___34179 < len__25947__auto___34178)){
args__25954__auto__.push((arguments[i__25948__auto___34179]));

var G__34180 = (i__25948__auto___34179 + (1));
i__25948__auto___34179 = G__34180;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq34177){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34177));
});

/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
schema.core.var_name = (function schema$core$var_name(v){
var map__34183 = cljs.core.meta.call(null,v);
var map__34183__$1 = ((((!((map__34183 == null)))?((((map__34183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34183):map__34183);
var ns = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__34183__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.call(null,[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34186,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34188 = (((k34186 instanceof cljs.core.Keyword))?k34186.fqn:null);
switch (G__34188) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34186,else__25497__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.Recursive{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34185){
var self__ = this;
var G__34185__$1 = this;
return (new cljs.core.RecordIter((0),G__34185__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34185){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34189 = cljs.core.keyword_identical_QMARK_;
var expr__34190 = k__25502__auto__;
if(cljs.core.truth_(pred__34189.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__34190))){
return (new schema.core.Recursive(G__34185,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34185),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34185){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__34185,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,self__.derefable)], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = (((self__.derefable instanceof cljs.core.Var))?cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.var_name.call(null,self__.derefable);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"var","var",870848730,null)):new cljs.core.Symbol(null,"...","...",-1926939749,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null));
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__34187){
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__34187),null,cljs.core.dissoc.call(null,G__34187,new cljs.core.Keyword(null,"derefable","derefable",377265868)),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not an IDeref: %s",schema__$1)));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34196,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34198 = (((k34196 instanceof cljs.core.Keyword))?k34196.fqn:null);
switch (G__34198) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34196,else__25497__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.RequiredKey{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34195){
var self__ = this;
var G__34195__$1 = this;
return (new cljs.core.RecordIter((0),G__34195__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34195){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34199 = cljs.core.keyword_identical_QMARK_;
var expr__34200 = k__25502__auto__;
if(cljs.core.truth_(pred__34199.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__34200))){
return (new schema.core.RequiredKey(G__34195,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34195),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34195){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__34195,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__34197){
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__34197),null,cljs.core.dissoc.call(null,G__34197,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34204,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34206 = (((k34204 instanceof cljs.core.Keyword))?k34204.fqn:null);
switch (G__34206) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34204,else__25497__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.OptionalKey{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34203){
var self__ = this;
var G__34203__$1 = this;
return (new cljs.core.RecordIter((0),G__34203__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34203){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34207 = cljs.core.keyword_identical_QMARK_;
var expr__34208 = k__25502__auto__;
if(cljs.core.truth_(pred__34207.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__34208))){
return (new schema.core.OptionalKey(G__34203,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34203),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34203){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__34203,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__34205){
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__34205),null,cljs.core.dissoc.call(null,G__34205,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__24872__auto__ = schema.core.required_key_QMARK_.call(null,ks);
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return schema.core.optional_key_QMARK_.call(null,ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34212,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34214 = (((k34212 instanceof cljs.core.Keyword))?k34212.fqn:null);
switch (G__34214) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34212,else__25497__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.MapEntry{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34211){
var self__ = this;
var G__34211__$1 = this;
return (new cljs.core.RecordIter((0),G__34211__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34211){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34215 = cljs.core.keyword_identical_QMARK_;
var expr__34216 = k__25502__auto__;
if(cljs.core.truth_(pred__34215.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__34216))){
return (new schema.core.MapEntry(G__34211,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34215.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__34216))){
return (new schema.core.MapEntry(self__.key_schema,G__34211,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34211),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34211){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__34211,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.key.call(null,e));

return e;
});})(this$__$1))
),schema.spec.collection.one_element.call(null,true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.val.call(null,e));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__34218,p__34219,_){
var vec__34220 = p__34218;
var k = cljs.core.nth.call(null,vec__34220,(0),null);
var vec__34223 = p__34219;
var xk = cljs.core.nth.call(null,vec__34223,(0),null);
var xv = cljs.core.nth.call(null,vec__34223,(1),null);
var temp__4655__auto__ = schema.utils.error_val.call(null,xk);
if(cljs.core.truth_(temp__4655__auto__)){
var k_err = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val.call(null,xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.explain.call(null,self__.key_schema);
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = schema.core.explain.call(null,self__.val_schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__34213){
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__34213),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__34213),null,cljs.core.dissoc.call(null,G__34213,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));
if((cljs.core.count.call(null,key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}

return cljs.core.first.call(null,key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
var x__25706__auto__ = (cljs.core.truth_(schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null));
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = schema.core.explicit_schema_key.call(null,kspec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
}
} else {
return schema.core.explain.call(null,kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,this$);
var duplicate_keys_34260 = cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema){
return (function (p1__34227_SHARP_){
return (cljs.core.count.call(null,p1__34227_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_.call(null,duplicate_keys_34260)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",duplicate_keys_34260)));
}

return cljs.core.concat.call(null,(function (){var iter__25652__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__34244(s__34245){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__34245__$1 = s__34245;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34245__$1);
if(temp__4657__auto__){
var s__34245__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34245__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34245__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34247 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34246 = (0);
while(true){
if((i__34246 < size__25651__auto__)){
var vec__34254 = cljs.core._nth.call(null,c__25650__auto__,i__34246);
var k = cljs.core.nth.call(null,vec__34254,(0),null);
var v = cljs.core.nth.call(null,vec__34254,(1),null);
cljs.core.chunk_append.call(null,b__34247,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (i__34246,rk,required_QMARK_,vec__34254,k,v,c__25650__auto__,size__25651__auto__,b__34247,s__34245__$2,temp__4657__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(i__34246,rk,required_QMARK_,vec__34254,k,v,c__25650__auto__,size__25651__auto__,b__34247,s__34245__$2,temp__4657__auto__,extra_keys_schema))
);
})());

var G__34261 = (i__34246 + (1));
i__34246 = G__34261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34247),schema$core$map_elements_$_iter__34244.call(null,cljs.core.chunk_rest.call(null,s__34245__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34247),null);
}
} else {
var vec__34257 = cljs.core.first.call(null,s__34245__$2);
var k = cljs.core.nth.call(null,vec__34257,(0),null);
var v = cljs.core.nth.call(null,vec__34257,(1),null);
return cljs.core.cons.call(null,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (rk,required_QMARK_,vec__34257,k,v,s__34245__$2,temp__4657__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__34257,k,v,s__34245__$2,temp__4657__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__34244.call(null,cljs.core.rest.call(null,s__34245__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__25652__auto__.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,cljs.core.keep.call(null,schema.utils.error_val,elts),(function (){var iter__25652__auto__ = (function schema$core$map_error_$_iter__34278(s__34279){
return (new cljs.core.LazySeq(null,(function (){
var s__34279__$1 = s__34279;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34279__$1);
if(temp__4657__auto__){
var s__34279__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34279__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34279__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34281 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34280 = (0);
while(true){
if((i__34280 < size__25651__auto__)){
var vec__34288 = cljs.core._nth.call(null,c__25650__auto__,i__34280);
var k = cljs.core.nth.call(null,vec__34288,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__34288,(1),null);
cljs.core.chunk_append.call(null,b__34281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__34294 = (i__34280 + (1));
i__34280 = G__34294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34281),schema$core$map_error_$_iter__34278.call(null,cljs.core.chunk_rest.call(null,s__34279__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34281),null);
}
} else {
var vec__34291 = cljs.core.first.call(null,s__34279__$2);
var k = cljs.core.nth.call(null,vec__34291,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__34291,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__34278.call(null,cljs.core.rest.call(null,s__34279__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$,cljs.core.map_QMARK_,(function (p1__32690__32691__auto__){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__32690__32691__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
})),(function (p1__34295_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__34295_SHARP_);
}),schema.core.map_elements.call(null,this$),schema.core.map_error.call(null));
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25652__auto__ = (function schema$core$map_explain_$_iter__34312(s__34313){
return (new cljs.core.LazySeq(null,(function (){
var s__34313__$1 = s__34313;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34313__$1);
if(temp__4657__auto__){
var s__34313__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34313__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34313__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34315 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34314 = (0);
while(true){
if((i__34314 < size__25651__auto__)){
var vec__34322 = cljs.core._nth.call(null,c__25650__auto__,i__34314);
var k = cljs.core.nth.call(null,vec__34322,(0),null);
var v = cljs.core.nth.call(null,vec__34322,(1),null);
cljs.core.chunk_append.call(null,b__34315,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null));

var G__34328 = (i__34314 + (1));
i__34314 = G__34328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34315),schema$core$map_explain_$_iter__34312.call(null,cljs.core.chunk_rest.call(null,s__34313__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34315),null);
}
} else {
var vec__34325 = cljs.core.first.call(null,s__34313__$2);
var k = cljs.core.nth.call(null,vec__34325,(0),null);
var v = cljs.core.nth.call(null,vec__34325,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null),schema$core$map_explain_$_iter__34312.call(null,cljs.core.rest.call(null,s__34313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__32690__32691__auto__){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__32690__32691__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.first.call(null,this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34330,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34332 = (((k34330 instanceof cljs.core.Keyword))?k34330.fqn:null);
switch (G__34332) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34330,else__25497__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.Queue{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34329){
var self__ = this;
var G__34329__$1 = this;
return (new cljs.core.RecordIter((0),G__34329__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34329){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34333 = cljs.core.keyword_identical_QMARK_;
var expr__34334 = k__25502__auto__;
if(cljs.core.truth_(pred__34333.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__34334))){
return (new schema.core.Queue(G__34329,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34329),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34329){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__34329,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__32690__32691__auto__){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__32690__32691__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"queue?","queue?",-880510795,null));
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = schema.core.explain.call(null,self__.schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"queue","queue",-1198599890,null));
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__34331){
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__34331),null,cljs.core.dissoc.call(null,G__34331,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34338,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34340 = (((k34338 instanceof cljs.core.Keyword))?k34338.fqn:null);
switch (G__34340) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34338,else__25497__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.One{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34337){
var self__ = this;
var G__34337__$1 = this;
return (new cljs.core.RecordIter((0),G__34337__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34337){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34341 = cljs.core.keyword_identical_QMARK_;
var expr__34342 = k__25502__auto__;
if(cljs.core.truth_(pred__34341.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__34342))){
return (new schema.core.One(G__34337,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34341.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__34342))){
return (new schema.core.One(self__.schema,G__34337,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34341.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__34342))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__34337,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34337),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34337){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__34337,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__34339){
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__34339),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__34339),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__34339),null,cljs.core.dissoc.call(null,G__34339,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__34354 = cljs.core.split_with.call(null,(function (p1__34345_SHARP_){
return ((p1__34345_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__34345_SHARP_)));
}),s);
var required = cljs.core.nth.call(null,vec__34354,(0),null);
var more = cljs.core.nth.call(null,vec__34354,(1),null);
var vec__34357 = cljs.core.split_with.call(null,((function (vec__34354,required,more){
return (function (p1__34346_SHARP_){
var and__24860__auto__ = (p1__34346_SHARP_ instanceof schema.core.One);
if(and__24860__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__34346_SHARP_);
} else {
return and__24860__auto__;
}
});})(vec__34354,required,more))
,more);
var optional = cljs.core.nth.call(null,vec__34357,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__34357,(1),null);
if(((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.every_QMARK_.call(null,((function (vec__34354,required,more,vec__34357,optional,more__$1){
return (function (p1__34347_SHARP_){
return !((p1__34347_SHARP_ instanceof schema.core.One));
});})(vec__34354,required,more,vec__34357,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Sequence schema %s does not match [one* optional* rest-schema?]",s)));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_.call(null,x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__34360_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__34360_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(this$__$1))
),cljs.core.vec,(function (){var vec__34361 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__34361,(0),null);
var multi = cljs.core.nth.call(null,vec__34361,(1),null);
return cljs.core.concat.call(null,(function (){var iter__25652__auto__ = ((function (vec__34361,singles,multi,this$__$1){
return (function schema$core$iter__34364(s__34365){
return (new cljs.core.LazySeq(null,((function (vec__34361,singles,multi,this$__$1){
return (function (){
var s__34365__$1 = s__34365;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34365__$1);
if(temp__4657__auto__){
var s__34365__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34365__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34365__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34367 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34366 = (0);
while(true){
if((i__34366 < size__25651__auto__)){
var s = cljs.core._nth.call(null,c__25650__auto__,i__34366);
cljs.core.chunk_append.call(null,b__34367,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (i__34366,required_QMARK_,s,c__25650__auto__,size__25651__auto__,b__34367,s__34365__$2,temp__4657__auto__,vec__34361,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4655__auto__ = cljs.core.seq.call(null,x);
if(temp__4655__auto__){
var x__$1 = temp__4655__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (i__34366,temp__4655__auto__,required_QMARK_,s,c__25650__auto__,size__25651__auto__,b__34367,s__34365__$2,temp__4657__auto__,vec__34361,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = s.name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(i__34366,temp__4655__auto__,required_QMARK_,s,c__25650__auto__,size__25651__auto__,b__34367,s__34365__$2,temp__4657__auto__,vec__34361,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(i__34366,required_QMARK_,s,c__25650__auto__,size__25651__auto__,b__34367,s__34365__$2,temp__4657__auto__,vec__34361,singles,multi,this$__$1))
);
})());

var G__34375 = (i__34366 + (1));
i__34366 = G__34375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34367),schema$core$iter__34364.call(null,cljs.core.chunk_rest.call(null,s__34365__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34367),null);
}
} else {
var s = cljs.core.first.call(null,s__34365__$2);
return cljs.core.cons.call(null,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (required_QMARK_,s,s__34365__$2,temp__4657__auto__,vec__34361,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4655__auto__ = cljs.core.seq.call(null,x);
if(temp__4655__auto__){
var x__$1 = temp__4655__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (temp__4655__auto__,required_QMARK_,s,s__34365__$2,temp__4657__auto__,vec__34361,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = s.name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(temp__4655__auto__,required_QMARK_,s,s__34365__$2,temp__4657__auto__,vec__34361,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(required_QMARK_,s,s__34365__$2,temp__4657__auto__,vec__34361,singles,multi,this$__$1))
);
})(),schema$core$iter__34364.call(null,cljs.core.rest.call(null,s__34365__$2)));
}
} else {
return null;
}
break;
}
});})(vec__34361,singles,multi,this$__$1))
,null,null));
});})(vec__34361,singles,multi,this$__$1))
;
return iter__25652__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,multi)], null):null));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.call(null,schema.utils.error_val,elts);
if(cljs.core.seq.call(null,extra)){
return cljs.core.conj.call(null,head,schema.utils.error_val.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = cljs.core.count.call(null,extra);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__34368 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__34368,(0),null);
var multi = cljs.core.nth.call(null,vec__34368,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__25652__auto__ = ((function (vec__34368,singles,multi,this$__$1){
return (function schema$core$iter__34371(s__34372){
return (new cljs.core.LazySeq(null,((function (vec__34368,singles,multi,this$__$1){
return (function (){
var s__34372__$1 = s__34372;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34372__$1);
if(temp__4657__auto__){
var s__34372__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34372__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__34372__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__34374 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__34373 = (0);
while(true){
if((i__34373 < size__25651__auto__)){
var s = cljs.core._nth.call(null,c__25650__auto__,i__34373);
cljs.core.chunk_append.call(null,b__34374,(function (){var x__25706__auto__ = (cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null));
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj.call(null,(function (){var x__25706__auto____$2 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$2);
})(),x__25706__auto____$1);
})(),x__25706__auto__);
})());

var G__34376 = (i__34373 + (1));
i__34373 = G__34376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34374),schema$core$iter__34371.call(null,cljs.core.chunk_rest.call(null,s__34372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34374),null);
}
} else {
var s = cljs.core.first.call(null,s__34372__$2);
return cljs.core.cons.call(null,(function (){var x__25706__auto__ = (cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null));
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s));
return cljs.core._conj.call(null,(function (){var x__25706__auto____$2 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$2);
})(),x__25706__auto____$1);
})(),x__25706__auto__);
})(),schema$core$iter__34371.call(null,cljs.core.rest.call(null,s__34372__$2)));
}
} else {
return null;
}
break;
}
});})(vec__34368,singles,multi,this$__$1))
,null,null));
});})(vec__34368,singles,multi,this$__$1))
;
return iter__25652__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34381,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34383 = (((k34381 instanceof cljs.core.Keyword))?k34381.fqn:null);
switch (G__34383) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34381,else__25497__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.Record{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34380){
var self__ = this;
var G__34380__$1 = this;
return (new cljs.core.RecordIter((0),G__34380__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34380){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34384 = cljs.core.keyword_identical_QMARK_;
var expr__34385 = k__25502__auto__;
if(cljs.core.truth_(pred__34384.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__34385))){
return (new schema.core.Record(G__34380,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34384.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__34385))){
return (new schema.core.Record(self__.klass,G__34380,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34380),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34380){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__34380,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,(function (){var p = schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__34377_SHARP_){
return (p1__34377_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__34378_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = self__.klass;
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = p1__34378_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
);
var temp__4655__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var evf = temp__4655__auto__;
return cljs.core.some_fn.call(null,p,schema.spec.core.precondition.call(null,this$__$1,evf,((function (evf,temp__4655__auto__,p,this$__$1){
return (function (p1__34379_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__34379_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null));
});})(evf,temp__4655__auto__,p,this$__$1))
));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)),schema.core.map_elements.call(null,self__.schema),schema.core.map_error.call(null));
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass));
return cljs.core._conj.call(null,(function (){var x__25706__auto____$1 = schema.core.explain.call(null,self__.schema);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto____$1);
})(),x__25706__auto__);
})(),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__34382){
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__34382),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__34382),null,cljs.core.dissoc.call(null,G__34382,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_.call(null,schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}

return cljs.core.with_meta.call(null,(new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__34393 = cljs.core.split_with.call(null,(function (p1__34388_SHARP_){
return (p1__34388_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.call(null,vec__34393,(0),null);
var more = cljs.core.nth.call(null,vec__34393,(1),null);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__34393,required,more){
return (function (p1__34389_SHARP_){
return schema.core.explain.call(null,p1__34389_SHARP_.schema);
});})(vec__34393,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25494__auto__,k__25495__auto__){
var self__ = this;
var this__25494__auto____$1 = this;
return cljs.core._lookup.call(null,this__25494__auto____$1,k__25495__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25496__auto__,k34397,else__25497__auto__){
var self__ = this;
var this__25496__auto____$1 = this;
var G__34399 = (((k34397 instanceof cljs.core.Keyword))?k34397.fqn:null);
switch (G__34399) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34397,else__25497__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25508__auto__,writer__25509__auto__,opts__25510__auto__){
var self__ = this;
var this__25508__auto____$1 = this;
var pr_pair__25511__auto__ = ((function (this__25508__auto____$1){
return (function (keyval__25512__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,cljs.core.pr_writer,""," ","",opts__25510__auto__,keyval__25512__auto__);
});})(this__25508__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25509__auto__,pr_pair__25511__auto__,"#schema.core.FnSchema{",", ","}",opts__25510__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34396){
var self__ = this;
var G__34396__$1 = this;
return (new cljs.core.RecordIter((0),G__34396__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25492__auto__){
var self__ = this;
var this__25492__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25488__auto__){
var self__ = this;
var this__25488__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25498__auto__){
var self__ = this;
var this__25498__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25489__auto__){
var self__ = this;
var this__25489__auto____$1 = this;
var h__25307__auto__ = self__.__hash;
if(!((h__25307__auto__ == null))){
return h__25307__auto__;
} else {
var h__25307__auto____$1 = cljs.core.hash_imap.call(null,this__25489__auto____$1);
self__.__hash = h__25307__auto____$1;

return h__25307__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25490__auto__,other__25491__auto__){
var self__ = this;
var this__25490__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24860__auto__ = other__25491__auto__;
if(cljs.core.truth_(and__24860__auto__)){
var and__24860__auto____$1 = (this__25490__auto____$1.constructor === other__25491__auto__.constructor);
if(and__24860__auto____$1){
return cljs.core.equiv_map.call(null,this__25490__auto____$1,other__25491__auto__);
} else {
return and__24860__auto____$1;
}
} else {
return and__24860__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25503__auto__,k__25504__auto__){
var self__ = this;
var this__25503__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__25504__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25503__auto____$1),self__.__meta),k__25504__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25504__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25501__auto__,k__25502__auto__,G__34396){
var self__ = this;
var this__25501__auto____$1 = this;
var pred__34400 = cljs.core.keyword_identical_QMARK_;
var expr__34401 = k__25502__auto__;
if(cljs.core.truth_(pred__34400.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__34401))){
return (new schema.core.FnSchema(G__34396,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34400.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__34401))){
return (new schema.core.FnSchema(self__.output_schema,G__34396,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25502__auto__,G__34396),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25506__auto__){
var self__ = this;
var this__25506__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25493__auto__,G__34396){
var self__ = this;
var this__25493__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__34396,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25499__auto__,entry__25500__auto__){
var self__ = this;
var this__25499__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25500__auto__)){
return cljs.core._assoc.call(null,this__25499__auto____$1,cljs.core._nth.call(null,entry__25500__auto__,(0)),cljs.core._nth.call(null,entry__25500__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25499__auto____$1,entry__25500__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__32690__32691__auto__){
return cljs.core._conj.call(null,(function (){var x__25706__auto__ = p1__32690__32691__auto__;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25706__auto__);
})(),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.input_schemas) > (1))){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__25528__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__25528__auto__,writer__25529__auto__){
return cljs.core._write.call(null,writer__25529__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__34398){
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__34398),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__34398),null,cljs.core.dissoc.call(null,G__34398,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq.call(null,input_schema)){
if((cljs.core.last.call(null,input_schema) instanceof schema.core.One)){
return cljs.core.count.call(null,input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq.call(null,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.call(null,schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}

var or__24872__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
var m__32411__auto__ = cljs.core.meta.call(null,f);
var k__32412__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__4655__auto__ = cljs.core.find.call(null,m__32411__auto__,k__32412__auto__);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__32413__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__32413__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__32412__auto__,m__32411__auto__)));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length);
});

//# sourceMappingURL=core.js.map?rel=1484804405122