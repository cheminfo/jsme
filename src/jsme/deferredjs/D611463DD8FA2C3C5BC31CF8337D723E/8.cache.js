$wnd.jsme.runAsyncCallback8('var ooa="400px",poa="Accept",qoa="Paste",roa="Paste the text to import into the text area below.",soa="dragend",toa="dragenter",uoa="dragover",voa="drop",woa="file",xoa="gwt-FileUpload",yoa="gwt-HTML";w(254,242,{});function o$(){o$=x;p$=new nB(soa,new q$)}function r$(a){Bz(a.a);Az(a.a)}function q$(){}w(255,254,{},q$);_.Nd=function(){r$(this)};_.Qd=function(){return p$};var p$;function s$(){s$=x;t$=new nB(toa,new u$)}function u$(){}w(256,254,{},u$);_.Nd=function(){r$(this)};_.Qd=function(){return t$};\nvar t$;function v$(){v$=x;w$=new nB(uoa,new x$)}function x$(){}w(257,254,{},x$);_.Nd=function(){r$(this)};_.Qd=function(){return w$};var w$;function y$(){y$=x;z$=new nB(voa,new A$)}function A$(){}w(258,254,{},A$);\n_.Nd=function(a){var b,c,d,e;Bz(this.a);Az(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;zoa(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(Ys),a.a.b.a.a.d.mb[ut]=null!=b?b:o)};_.Qd=function(){return z$};var z$;function B$(a,b,c){JC(!a.jb?a.jb=new YC(a):a.jb,c,b)}function C$(){this.mb=wz(woa);this.mb[ip]=xoa}w(384,365,nu,C$);_.he=function(a){HF(this,a)};\nfunction D$(a){var b=zz(Xp);OZ(Ns,H_(b));this.mb=b;this.b=new d1(this.mb);this.mb[ip]=yoa;c1(this.b,a,!0);l1(this)}w(388,389,nu,D$);function E$(a,b){var c,d;c=zz(kt);d=zz(Xs);d[lo]=a.a.a;d.style[vt]=a.b.a;var e=(zE(),AE(d));c.appendChild(e);yE(a.d,c);TF(a,b,d)}function F$(){NG.call(this);this.a=(QG(),XG);this.b=(YG(),aH);this.e[Zo]=Re;this.e[Yo]=Re}w(437,381,ru,F$);_.Ge=function(a){var b;b=yz(a.mb);(a=XF(this,a))&&this.d.removeChild(yz(b));return a};\nfunction G$(a){try{a.t=!1;var b,c,d;d=a.eb;c=a.Z;d||(a.mb.style[wt]=Nq,wH(a.mb,!1),a.Z=!1,a.Te());b=a.mb;b.style[Yq]=0+(rA(),as);b.style[ft]=Te;P3(a,xW(Qz($doc)+(Pz()-tz(a.mb,Lr)>>1),0),xW(Rz($doc)+(Oz()-tz(a.mb,Kr)>>1),0));d||((a.Z=c)?(a.mb.style[pp]=ns,a.mb.style[wt]=xt,wH(a.mb,!0),iv(a.db,200)):(a.mb.style[wt]=xt,wH(a.mb,!0)))}finally{a.t=!0}}function H$(a){var b;b=(new W1(a.e)).bd.Tf();DF(b,new I$(a),(tB(),tB(),uB));return b}\nfunction J$(){C3();var a,b,c,d,e;a4.call(this,(t4(),u4),null,!0);this.ni();this.ab=!0;a=new D$(this.f);this.d=new jI;this.d.mb.style[At]=Ue;rF(this.d,Ue);t3(this,ooa);e=new F$;e.mb.style[Mq]=Ue;e.e[Zo]=10;c=(QG(),RG);e.a=c;E$(e,a);E$(e,this.d);this.c=new eH;this.c.e[Zo]=20;for(b=this.li(),c=0,d=b.length;c<d;++c)a=b[c],bH(this.c,a);E$(e,this.c);H3(this,e);R3(this,!1);DF(this.d,new K$(this),(OB(),OB(),PB));this.mi()}w(761,762,HW,J$);_.li=function(){return y(uI,q,50,[H$(this)])};\n_.mi=function(){var a=this.d;a.mb.readOnly=!0;var b=uF(a.mb)+"-readonly";qF(a.te(),b,!0)};_.ni=function(){s4(this.F.b,"Copy")};_.c=null;_.d=null;_.e="Close (ESC)";_.f="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function K$(a){this.a=a}w(764,1,{},K$);_.Yd=function(a){27==(a.a.keyCode||0)&&J3(this.a,!1)};_.a=null;function I$(a){this.a=a}w(765,1,{},I$);_.Td=function(){J3(this.a,!1)};_.a=null;\nfunction L$(a){this.a=a}w(766,1,{},L$);\n_.zd=function(){zF(this.a.d.mb,!0);LG(this.a.d,!0);var a=this.a.d,b;b=uz(a.mb,ut).length;if(0<b&&a.hb){if(0>b)throw new yS("Length must be a positive integer. Length: "+b);if(b>uz(a.mb,ut).length)throw new yS("From Index: 0  To Index: "+b+"  Text Length: "+uz(a.mb,ut).length);var a=a.mb,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function M$(a){var b;b=(new W1(a.a)).bd.Tf();DF(b,new N$(a),(tB(),tB(),uB));return b}function O$(a){a.e=QW;a.f=roa;a.a=poa;s4(a.F.b,qoa)}function P$(a){C3();J$.call(this);this.b=a}w(768,761,HW,P$);_.li=function(){return y(uI,q,50,[M$(this),H$(this)])};_.mi=function(){rF(this.d,"150px")};_.ni=function(){O$(this)};_.Te=function(){$3(this);hz((ez(),fz),new Q$(this))};_.a=null;_.b=null;function R$(a){C3();P$.call(this,a)}w(767,768,HW,R$);\n_.li=function(){var a;return y(uI,q,50,[M$(this),(a=new C$,DF(a,new S$(this),(T_(),T_(),U_)),a),H$(this)])};_.mi=function(){rF(this.d,"150px");var a=new T$(this),b=this.d;B$(b,new U$,(s$(),s$(),t$));B$(b,new V$,(o$(),o$(),p$));B$(b,new W$,(v$(),v$(),w$));B$(b,new X$(a),(y$(),y$(),z$))};_.ni=function(){O$(this);this.f+=" Or drag and drop a file on it."};function S$(a){this.a=a}w(769,1,{},S$);_.Sd=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);Aoa(b,new Y$(this));b.readAsText(a)};\n_.a=null;function Y$(a){this.a=a}w(770,1,{},Y$);_.oi=function(a){gI(this.a.a.d,a)};_.a=null;w(773,1,{});w(772,773,{});_.b=null;_.c=1;_.d=-1;function T$(a){this.a=a;this.b=new Z$(this);this.c=this.d=1}w(771,772,{},T$);_.a=null;function Z$(a){this.a=a}w(774,1,{},Z$);_.oi=function(a){this.a.a.d.mb[ut]=null!=a?a:o};_.a=null;function N$(a){this.a=a}w(778,1,{},N$);_.Td=function(){if(this.a.b){var a=this.a.b,b;b=new wL(a.a,0,uz(this.a.d.mb,ut));hR(a.a.a,b.a)}J3(this.a,!1)};_.a=null;\nfunction Q$(a){this.a=a}w(779,1,{},Q$);_.zd=function(){zF(this.a.d.mb,!0);LG(this.a.d,!0)};_.a=null;w(780,1,Au);_.Kd=function(){var a,b;a=new $$(this.a);void 0!=$wnd.FileReader?b=new R$(a):b=new P$(a);v3(b);G$(b)};function $$(a){this.a=a}w(781,1,{},$$);_.a=null;w(782,1,Au);_.Kd=function(){var a;a=new J$;var b=this.a,c,d;gI(a.d,b);c=(d=ZS(b,"\\r\\n|\\r|\\n|\\n\\r"),d.length);1>=c&&(c=~~(b.length/16));rF(a.d,20*(10>c+1?c+1:10)+as);hz((ez(),fz),new L$(a));v3(a);G$(a)};\nfunction Aoa(a,b){a.onload=function(a){b.oi(a.target.result)}}function zoa(a,b){a.onloadend=function(a){b.oi(a.target.result)}}function X$(a){this.a=a}w(788,1,{},X$);_.a=null;function U$(){}w(789,1,{},U$);function V$(){}w(790,1,{},V$);function W$(){}w(791,1,{},W$);X(773);X(772);X(788);X(789);X(790);X(791);X(254);X(256);X(255);X(257);X(258);X(761);X(768);X(767);X(781);X(764);X(765);X(766);X(778);X(779);X(769);X(770);X(771);X(774);X(388);X(437);X(384);C(zW)(8);\n//@ sourceURL=8.js\n')
