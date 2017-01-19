// Compiled by ClojureScript 1.9.89 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args35604 = [];
var len__25947__auto___35613 = arguments.length;
var i__25948__auto___35614 = (0);
while(true){
if((i__25948__auto___35614 < len__25947__auto___35613)){
args35604.push((arguments[i__25948__auto___35614]));

var G__35615 = (i__25948__auto___35614 + (1));
i__25948__auto___35614 = G__35615;
continue;
} else {
}
break;
}

var G__35612 = args35604.length;
switch (G__35612) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35604.slice((5)),(0),null));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__25966__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq35605){
var G__35606 = cljs.core.first.call(null,seq35605);
var seq35605__$1 = cljs.core.next.call(null,seq35605);
var G__35607 = cljs.core.first.call(null,seq35605__$1);
var seq35605__$2 = cljs.core.next.call(null,seq35605__$1);
var G__35608 = cljs.core.first.call(null,seq35605__$2);
var seq35605__$3 = cljs.core.next.call(null,seq35605__$2);
var G__35609 = cljs.core.first.call(null,seq35605__$3);
var seq35605__$4 = cljs.core.next.call(null,seq35605__$3);
var G__35610 = cljs.core.first.call(null,seq35605__$4);
var seq35605__$5 = cljs.core.next.call(null,seq35605__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__35606,G__35607,G__35608,G__35609,G__35610,seq35605__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);

/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__35342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35629_35639 = cljs.core.seq.call(null,m);
var chunk__35630_35640 = null;
var count__35631_35641 = (0);
var i__35632_35642 = (0);
while(true){
if((i__35632_35642 < count__35631_35641)){
var vec__35633_35643 = cljs.core._nth.call(null,chunk__35630_35640,i__35632_35642);
var k_35644 = cljs.core.nth.call(null,vec__35633_35643,(0),null);
var v_35645 = cljs.core.nth.call(null,vec__35633_35643,(1),null);
var m35628_35646 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35628_35646,k_35644,f.call(null,v_35645)));

var G__35647 = seq__35629_35639;
var G__35648 = chunk__35630_35640;
var G__35649 = count__35631_35641;
var G__35650 = (i__35632_35642 + (1));
seq__35629_35639 = G__35647;
chunk__35630_35640 = G__35648;
count__35631_35641 = G__35649;
i__35632_35642 = G__35650;
continue;
} else {
var temp__4657__auto___35651 = cljs.core.seq.call(null,seq__35629_35639);
if(temp__4657__auto___35651){
var seq__35629_35652__$1 = temp__4657__auto___35651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35629_35652__$1)){
var c__25683__auto___35653 = cljs.core.chunk_first.call(null,seq__35629_35652__$1);
var G__35654 = cljs.core.chunk_rest.call(null,seq__35629_35652__$1);
var G__35655 = c__25683__auto___35653;
var G__35656 = cljs.core.count.call(null,c__25683__auto___35653);
var G__35657 = (0);
seq__35629_35639 = G__35654;
chunk__35630_35640 = G__35655;
count__35631_35641 = G__35656;
i__35632_35642 = G__35657;
continue;
} else {
var vec__35636_35658 = cljs.core.first.call(null,seq__35629_35652__$1);
var k_35659 = cljs.core.nth.call(null,vec__35636_35658,(0),null);
var v_35660 = cljs.core.nth.call(null,vec__35636_35658,(1),null);
var m35628_35661 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35628_35661,k_35659,f.call(null,v_35660)));

var G__35662 = cljs.core.next.call(null,seq__35629_35652__$1);
var G__35663 = null;
var G__35664 = (0);
var G__35665 = (0);
seq__35629_35639 = G__35662;
chunk__35630_35640 = G__35663;
count__35631_35641 = G__35664;
i__35632_35642 = G__35665;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__35342__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__35342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35678_35688 = cljs.core.seq.call(null,m);
var chunk__35679_35689 = null;
var count__35680_35690 = (0);
var i__35681_35691 = (0);
while(true){
if((i__35681_35691 < count__35680_35690)){
var vec__35682_35692 = cljs.core._nth.call(null,chunk__35679_35689,i__35681_35691);
var k_35693 = cljs.core.nth.call(null,vec__35682_35692,(0),null);
var v_35694 = cljs.core.nth.call(null,vec__35682_35692,(1),null);
var m35677_35695 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35677_35695,f.call(null,k_35693),v_35694));

var G__35696 = seq__35678_35688;
var G__35697 = chunk__35679_35689;
var G__35698 = count__35680_35690;
var G__35699 = (i__35681_35691 + (1));
seq__35678_35688 = G__35696;
chunk__35679_35689 = G__35697;
count__35680_35690 = G__35698;
i__35681_35691 = G__35699;
continue;
} else {
var temp__4657__auto___35700 = cljs.core.seq.call(null,seq__35678_35688);
if(temp__4657__auto___35700){
var seq__35678_35701__$1 = temp__4657__auto___35700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35678_35701__$1)){
var c__25683__auto___35702 = cljs.core.chunk_first.call(null,seq__35678_35701__$1);
var G__35703 = cljs.core.chunk_rest.call(null,seq__35678_35701__$1);
var G__35704 = c__25683__auto___35702;
var G__35705 = cljs.core.count.call(null,c__25683__auto___35702);
var G__35706 = (0);
seq__35678_35688 = G__35703;
chunk__35679_35689 = G__35704;
count__35680_35690 = G__35705;
i__35681_35691 = G__35706;
continue;
} else {
var vec__35685_35707 = cljs.core.first.call(null,seq__35678_35701__$1);
var k_35708 = cljs.core.nth.call(null,vec__35685_35707,(0),null);
var v_35709 = cljs.core.nth.call(null,vec__35685_35707,(1),null);
var m35677_35710 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35677_35710,f.call(null,k_35708),v_35709));

var G__35711 = cljs.core.next.call(null,seq__35678_35701__$1);
var G__35712 = null;
var G__35713 = (0);
var G__35714 = (0);
seq__35678_35688 = G__35711;
chunk__35679_35689 = G__35712;
count__35680_35690 = G__35713;
i__35681_35691 = G__35714;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__35342__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__35342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35721_35725 = cljs.core.seq.call(null,ks);
var chunk__35722_35726 = null;
var count__35723_35727 = (0);
var i__35724_35728 = (0);
while(true){
if((i__35724_35728 < count__35723_35727)){
var k_35729 = cljs.core._nth.call(null,chunk__35722_35726,i__35724_35728);
var m35720_35730 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35720_35730,k_35729,f.call(null,k_35729)));

var G__35731 = seq__35721_35725;
var G__35732 = chunk__35722_35726;
var G__35733 = count__35723_35727;
var G__35734 = (i__35724_35728 + (1));
seq__35721_35725 = G__35731;
chunk__35722_35726 = G__35732;
count__35723_35727 = G__35733;
i__35724_35728 = G__35734;
continue;
} else {
var temp__4657__auto___35735 = cljs.core.seq.call(null,seq__35721_35725);
if(temp__4657__auto___35735){
var seq__35721_35736__$1 = temp__4657__auto___35735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35721_35736__$1)){
var c__25683__auto___35737 = cljs.core.chunk_first.call(null,seq__35721_35736__$1);
var G__35738 = cljs.core.chunk_rest.call(null,seq__35721_35736__$1);
var G__35739 = c__25683__auto___35737;
var G__35740 = cljs.core.count.call(null,c__25683__auto___35737);
var G__35741 = (0);
seq__35721_35725 = G__35738;
chunk__35722_35726 = G__35739;
count__35723_35727 = G__35740;
i__35724_35728 = G__35741;
continue;
} else {
var k_35742 = cljs.core.first.call(null,seq__35721_35736__$1);
var m35720_35743 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35720_35743,k_35742,f.call(null,k_35742)));

var G__35744 = cljs.core.next.call(null,seq__35721_35736__$1);
var G__35745 = null;
var G__35746 = (0);
var G__35747 = (0);
seq__35721_35725 = G__35744;
chunk__35722_35726 = G__35745;
count__35723_35727 = G__35746;
i__35724_35728 = G__35747;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__35342__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__35342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35754_35758 = cljs.core.seq.call(null,vs);
var chunk__35755_35759 = null;
var count__35756_35760 = (0);
var i__35757_35761 = (0);
while(true){
if((i__35757_35761 < count__35756_35760)){
var v_35762 = cljs.core._nth.call(null,chunk__35755_35759,i__35757_35761);
var m35753_35763 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35753_35763,f.call(null,v_35762),v_35762));

var G__35764 = seq__35754_35758;
var G__35765 = chunk__35755_35759;
var G__35766 = count__35756_35760;
var G__35767 = (i__35757_35761 + (1));
seq__35754_35758 = G__35764;
chunk__35755_35759 = G__35765;
count__35756_35760 = G__35766;
i__35757_35761 = G__35767;
continue;
} else {
var temp__4657__auto___35768 = cljs.core.seq.call(null,seq__35754_35758);
if(temp__4657__auto___35768){
var seq__35754_35769__$1 = temp__4657__auto___35768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35754_35769__$1)){
var c__25683__auto___35770 = cljs.core.chunk_first.call(null,seq__35754_35769__$1);
var G__35771 = cljs.core.chunk_rest.call(null,seq__35754_35769__$1);
var G__35772 = c__25683__auto___35770;
var G__35773 = cljs.core.count.call(null,c__25683__auto___35770);
var G__35774 = (0);
seq__35754_35758 = G__35771;
chunk__35755_35759 = G__35772;
count__35756_35760 = G__35773;
i__35757_35761 = G__35774;
continue;
} else {
var v_35775 = cljs.core.first.call(null,seq__35754_35769__$1);
var m35753_35776 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35753_35776,f.call(null,v_35775),v_35775));

var G__35777 = cljs.core.next.call(null,seq__35754_35769__$1);
var G__35778 = null;
var G__35779 = (0);
var G__35780 = (0);
seq__35754_35758 = G__35777;
chunk__35755_35759 = G__35778;
count__35756_35760 = G__35779;
i__35757_35761 = G__35780;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__35342__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__35781){
var vec__35785 = p__35781;
var seq__35786 = cljs.core.seq.call(null,vec__35785);
var first__35787 = cljs.core.first.call(null,seq__35786);
var seq__35786__$1 = cljs.core.next.call(null,seq__35786);
var k = first__35787;
var ks = seq__35786__$1;
if(cljs.core.truth_(m)){
var temp__4655__auto__ = (function (){var and__24860__auto__ = ks;
if(and__24860__auto__){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__24860__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__35342__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__35800_35810 = cljs.core.seq.call(null,x);
var chunk__35801_35811 = null;
var count__35802_35812 = (0);
var i__35803_35813 = (0);
while(true){
if((i__35803_35813 < count__35802_35812)){
var vec__35804_35814 = cljs.core._nth.call(null,chunk__35801_35811,i__35803_35813);
var k_35815 = cljs.core.nth.call(null,vec__35804_35814,(0),null);
var v_35816 = cljs.core.nth.call(null,vec__35804_35814,(1),null);
var m35799_35817 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35799_35817,((typeof k_35815 === 'string')?cljs.core.keyword.call(null,k_35815):k_35815),plumbing$core$keywordize_map.call(null,v_35816)));

var G__35818 = seq__35800_35810;
var G__35819 = chunk__35801_35811;
var G__35820 = count__35802_35812;
var G__35821 = (i__35803_35813 + (1));
seq__35800_35810 = G__35818;
chunk__35801_35811 = G__35819;
count__35802_35812 = G__35820;
i__35803_35813 = G__35821;
continue;
} else {
var temp__4657__auto___35822 = cljs.core.seq.call(null,seq__35800_35810);
if(temp__4657__auto___35822){
var seq__35800_35823__$1 = temp__4657__auto___35822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35800_35823__$1)){
var c__25683__auto___35824 = cljs.core.chunk_first.call(null,seq__35800_35823__$1);
var G__35825 = cljs.core.chunk_rest.call(null,seq__35800_35823__$1);
var G__35826 = c__25683__auto___35824;
var G__35827 = cljs.core.count.call(null,c__25683__auto___35824);
var G__35828 = (0);
seq__35800_35810 = G__35825;
chunk__35801_35811 = G__35826;
count__35802_35812 = G__35827;
i__35803_35813 = G__35828;
continue;
} else {
var vec__35807_35829 = cljs.core.first.call(null,seq__35800_35823__$1);
var k_35830 = cljs.core.nth.call(null,vec__35807_35829,(0),null);
var v_35831 = cljs.core.nth.call(null,vec__35807_35829,(1),null);
var m35799_35832 = cljs.core.deref.call(null,m_atom__35342__auto__);
cljs.core.reset_BANG_.call(null,m_atom__35342__auto__,cljs.core.assoc_BANG_.call(null,m35799_35832,((typeof k_35830 === 'string')?cljs.core.keyword.call(null,k_35830):k_35830),plumbing$core$keywordize_map.call(null,v_35831)));

var G__35833 = cljs.core.next.call(null,seq__35800_35823__$1);
var G__35834 = null;
var G__35835 = (0);
var G__35836 = (0);
seq__35800_35810 = G__35833;
chunk__35801_35811 = G__35834;
count__35802_35812 = G__35835;
i__35803_35813 = G__35836;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__35342__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4655__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var pair__35418__auto__ = temp__4655__auto__;
return cljs.core.val.call(null,pair__35418__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__35837 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__35838 = cljs.core.next.call(null,ks);
m = G__35837;
ks = G__35838;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35857 = arguments.length;
var i__25948__auto___35858 = (0);
while(true){
if((i__25948__auto___35858 < len__25947__auto___35857)){
args__25954__auto__.push((arguments[i__25948__auto___35858]));

var G__35859 = (i__25948__auto___35858 + (1));
i__25948__auto___35858 = G__35859;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((1) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((1)),(0),null)):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25955__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__24872__auto__ = m;
if(cljs.core.truth_(or__24872__auto__)){
return or__24872__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__25652__auto__ = (function plumbing$core$iter__35841(s__35842){
return (new cljs.core.LazySeq(null,(function (){
var s__35842__$1 = s__35842;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35842__$1);
if(temp__4657__auto__){
var s__35842__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35842__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__35842__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__35844 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__35843 = (0);
while(true){
if((i__35843 < size__25651__auto__)){
var vec__35851 = cljs.core._nth.call(null,c__25650__auto__,i__35843);
var k = cljs.core.nth.call(null,vec__35851,(0),null);
var v = cljs.core.nth.call(null,vec__35851,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__35844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35860 = (i__35843 + (1));
i__35843 = G__35860;
continue;
} else {
var G__35861 = (i__35843 + (1));
i__35843 = G__35861;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35844),plumbing$core$iter__35841.call(null,cljs.core.chunk_rest.call(null,s__35842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35844),null);
}
} else {
var vec__35854 = cljs.core.first.call(null,s__35842__$2);
var k = cljs.core.nth.call(null,vec__35854,(0),null);
var v = cljs.core.nth.call(null,vec__35854,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__35841.call(null,cljs.core.rest.call(null,s__35842__$2)));
} else {
var G__35862 = cljs.core.rest.call(null,s__35842__$2);
s__35842__$1 = G__35862;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25652__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq35839){
var G__35840 = cljs.core.first.call(null,seq35839);
var seq35839__$1 = cljs.core.next.call(null,seq35839);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__35840,seq35839__$1);
});

/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35867 = arguments.length;
var i__25948__auto___35868 = (0);
while(true){
if((i__25948__auto___35868 < len__25947__auto___35867)){
args__25954__auto__.push((arguments[i__25948__auto___35868]));

var G__35869 = (i__25948__auto___35868 + (1));
i__25948__auto___35868 = G__35869;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((3) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((3)),(0),null)):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25955__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq35863){
var G__35864 = cljs.core.first.call(null,seq35863);
var seq35863__$1 = cljs.core.next.call(null,seq35863);
var G__35865 = cljs.core.first.call(null,seq35863__$1);
var seq35863__$2 = cljs.core.next.call(null,seq35863__$1);
var G__35866 = cljs.core.first.call(null,seq35863__$2);
var seq35863__$3 = cljs.core.next.call(null,seq35863__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__35864,G__35865,G__35866,seq35863__$3);
});

/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4657__auto__ = cljs.core.next.call(null,s);
if(temp__4657__auto__){
var n = temp__4657__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args35870 = [];
var len__25947__auto___35873 = arguments.length;
var i__25948__auto___35874 = (0);
while(true){
if((i__25948__auto___35874 < len__25947__auto___35873)){
args35870.push((arguments[i__25948__auto___35874]));

var G__35875 = (i__25948__auto___35874 + (1));
i__25948__auto___35874 = G__35875;
continue;
} else {
}
break;
}

var G__35872 = args35870.length;
switch (G__35872) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35870.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;

/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4657__auto__ = cljs.core.seq.call(null,xs);
if(temp__4657__auto__){
var xs__$1 = temp__4657__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__25652__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__35881(s__35882){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__35882__$1 = s__35882;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35882__$1);
if(temp__4657__auto__){
var s__35882__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35882__$2)){
var c__25650__auto__ = cljs.core.chunk_first.call(null,s__35882__$2);
var size__25651__auto__ = cljs.core.count.call(null,c__25650__auto__);
var b__35884 = cljs.core.chunk_buffer.call(null,size__25651__auto__);
if((function (){var i__35883 = (0);
while(true){
if((i__35883 < size__25651__auto__)){
var x = cljs.core._nth.call(null,c__25650__auto__,i__35883);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__35884,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__35885 = (i__35883 + (1));
i__35883 = G__35885;
continue;
} else {
var G__35886 = (i__35883 + (1));
i__35883 = G__35886;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35884),plumbing$core$distinct_by_$_iter__35881.call(null,cljs.core.chunk_rest.call(null,s__35882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35884),null);
}
} else {
var x = cljs.core.first.call(null,s__35882__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__35881.call(null,cljs.core.rest.call(null,s__35882__$2)));
} else {
var G__35887 = cljs.core.rest.call(null,s__35882__$2);
s__35882__$1 = G__35887;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__25652__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__25954__auto__ = [];
var len__25947__auto___35889 = arguments.length;
var i__25948__auto___35890 = (0);
while(true){
if((i__25948__auto___35890 < len__25947__auto___35889)){
args__25954__auto__.push((arguments[i__25948__auto___35890]));

var G__35891 = (i__25948__auto___35890 + (1));
i__25948__auto___35890 = G__35891;
continue;
} else {
}
break;
}

var argseq__25955__auto__ = ((((0) < args__25954__auto__.length))?(new cljs.core.IndexedSeq(args__25954__auto__.slice((0)),(0),null)):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__25955__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq35888){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35888));
});

/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args35892 = [];
var len__25947__auto___35898 = arguments.length;
var i__25948__auto___35899 = (0);
while(true){
if((i__25948__auto___35899 < len__25947__auto___35898)){
args35892.push((arguments[i__25948__auto___35899]));

var G__35900 = (i__25948__auto___35899 + (1));
i__25948__auto___35899 = G__35900;
continue;
} else {
}
break;
}

var G__35897 = args35892.length;
switch (G__35897) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35892.slice((2)),(0),null));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__35902 = plumbing.core.conj_when.call(null,coll,x);
var G__35903 = cljs.core.first.call(null,xs);
var G__35904 = cljs.core.next.call(null,xs);
coll = G__35902;
x = G__35903;
xs = G__35904;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq35893){
var G__35894 = cljs.core.first.call(null,seq35893);
var seq35893__$1 = cljs.core.next.call(null,seq35893);
var G__35895 = cljs.core.first.call(null,seq35893__$1);
var seq35893__$2 = cljs.core.next.call(null,seq35893__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__35894,G__35895,seq35893__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args35906 = [];
var len__25947__auto___35912 = arguments.length;
var i__25948__auto___35913 = (0);
while(true){
if((i__25948__auto___35913 < len__25947__auto___35912)){
args35906.push((arguments[i__25948__auto___35913]));

var G__35914 = (i__25948__auto___35913 + (1));
i__25948__auto___35913 = G__35914;
continue;
} else {
}
break;
}

var G__35911 = args35906.length;
switch (G__35911) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35906.slice((2)),(0),null));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__35905_SHARP_){
return cljs.core.apply.call(null,f,p1__35905_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq35907){
var G__35908 = cljs.core.first.call(null,seq35907);
var seq35907__$1 = cljs.core.next.call(null,seq35907);
var G__35909 = cljs.core.first.call(null,seq35907__$1);
var seq35907__$2 = cljs.core.next.call(null,seq35907__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35908,G__35909,seq35907__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args35916 = [];
var len__25947__auto___35922 = arguments.length;
var i__25948__auto___35923 = (0);
while(true){
if((i__25948__auto___35923 < len__25947__auto___35922)){
args35916.push((arguments[i__25948__auto___35923]));

var G__35924 = (i__25948__auto___35923 + (1));
i__25948__auto___35923 = G__35924;
continue;
} else {
}
break;
}

var G__35921 = args35916.length;
switch (G__35921) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25966__auto__ = (new cljs.core.IndexedSeq(args35916.slice((2)),(0),null));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25966__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq35917){
var G__35918 = cljs.core.first.call(null,seq35917);
var seq35917__$1 = cljs.core.next.call(null,seq35917);
var G__35919 = cljs.core.first.call(null,seq35917__$1);
var seq35917__$2 = cljs.core.next.call(null,seq35917__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__35918,G__35919,seq35917__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);


//# sourceMappingURL=core.js.map?rel=1484804406325