$wnd.jsme.runAsyncCallback8('var tma="400px",uma="Accept",vma="Paste",wma="Paste the text to import into the text area below.",xma="dragend",yma="dragenter",zma="dragover",Ama="drop",Bma="file",Cma="gwt-FileUpload",Dma="gwt-HTML";w(254,242,{});function p$(){p$=x;q$=new LB(xma,new r$)}function s$(a){$z(a.a);Zz(a.a)}function r$(){}w(255,254,{},r$);_.Dd=function(){s$(this)};_.Gd=function(){return q$};var q$;function t$(){t$=x;u$=new LB(yma,new v$)}function v$(){}w(256,254,{},v$);_.Dd=function(){s$(this)};_.Gd=function(){return u$};\nvar u$;function w$(){w$=x;x$=new LB(zma,new y$)}function y$(){}w(257,254,{},y$);_.Dd=function(){s$(this)};_.Gd=function(){return x$};var x$;function z$(){z$=x;A$=new LB(Ama,new B$)}function B$(){}w(258,254,{},B$);\n_.Dd=function(a){var b,c,d,e;$z(this.a);Zz(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;Ema(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(zt),a.a.b.a.a.d.mb[Vt]=null!=b?b:n)};_.Gd=function(){return A$};var A$;function C$(a,b,c){tD(!a.jb?a.jb=new ID(a):a.jb,c,b)}function D$(){this.mb=Vz(Bma);this.mb[po]=Cma}w(384,365,Eu,D$);_.Yd=function(a){rG(this,a)};\nfunction E$(a){var b=Yz(cp);IZ(ot,B_(b));this.mb=b;this.b=new Z0(this.mb);this.mb[po]=Dma;Y0(this.b,a,!0);g1(this)}w(388,389,Eu,E$);function F$(a,b){var c,d;c=Yz(Mt);d=Yz(yt);d[qn]=a.a.a;d.style[Wt]=a.b.a;var e=(lF(),mF(d));c.appendChild(e);kF(a.d,c);DG(a,b,d)}function G$(){yH.call(this);this.a=(BH(),IH);this.b=(JH(),MH);this.e[go]=We;this.e[fo]=We}w(437,381,Mu,G$);_.ve=function(a){var b;b=Xz(a.mb);(a=HG(this,a))&&this.d.removeChild(Xz(b));return a};\nfunction H$(a){try{a.t=!1;var b,c,d;d=a.eb;c=a.Z;d||(a.mb.style[Xt]=hq,hI(a.mb,!1),a.Z=!1,a.Ie());b=a.mb;b.style[Vq]=0+(PA(),Cs);b.style[Ht]=Ye;K3(a,hw(pA($doc)+(oA()-Sz(a.mb,$r)>>1),0),hw(qA($doc)+(nA()-Sz(a.mb,Zr)>>1),0));d||((a.Z=c)?(a.mb.style[wo]=Ps,a.mb.style[Xt]=Yt,hI(a.mb,!0),Hv(a.db,200)):(a.mb.style[Xt]=Yt,hI(a.mb,!0)))}finally{a.t=!0}}function I$(a){var b;b=(new Q1(a.e)).Tc.If();nG(b,new J$(a),(RB(),RB(),SB));return b}\nfunction K$(){x3();var a,b,c,d,e;W3.call(this,(o4(),p4),null,!0);this.ci();this.ab=!0;a=new E$(this.f);this.d=new VI;this.d.mb.style[au]=$e;bG(this.d,$e);o3(this,tma);e=new G$;e.mb.style[fq]=$e;e.e[go]=10;c=(BH(),CH);e.a=c;F$(e,a);F$(e,this.d);this.c=new QH;this.c.e[go]=20;for(b=this.ai(),c=0,d=b.length;c<d;++c)a=b[c],NH(this.c,a);F$(e,this.c);C3(this,e);M3(this,!1);this.bi()}w(759,760,vW,K$);_.ai=function(){return y(fJ,q,50,[I$(this)])};\n_.bi=function(){var a=this.d;a.mb.readOnly=!0;var b=eG(a.mb)+"-readonly";aG(a.ie(),b,!0)};_.ci=function(){n4(this.F.b,"Copy")};_.c=null;_.d=null;_.e="Close";_.f="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function J$(a){this.a=a}w(762,1,{},J$);_.Jd=function(){E3(this.a,!1)};_.a=null;function L$(a){this.a=a}w(763,1,{},L$);\n_.pd=function(){jG(this.a.d.mb,!0);wH(this.a.d,!0);var a=this.a.d,b;b=Tz(a.mb,Vt).length;if(0<b&&a.hb){if(0>b)throw new wS("Length must be a positive integer. Length: "+b);if(b>Tz(a.mb,Vt).length)throw new wS("From Index: 0  To Index: "+b+"  Text Length: "+Tz(a.mb,Vt).length);var a=a.mb,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function M$(a){var b;b=(new Q1(a.a)).Tc.If();nG(b,new N$(a),(RB(),RB(),SB));return b}function O$(a){a.e=KW;a.f=wma;a.a=uma;n4(a.F.b,vma)}function P$(a){x3();K$.call(this);this.b=a}w(765,759,vW,P$);_.ai=function(){return y(fJ,q,50,[M$(this),I$(this)])};_.bi=function(){bG(this.d,"150px")};_.ci=function(){O$(this)};_.Ie=function(){V3(this);Gz((Dz(),Ez),new Q$(this))};_.a=null;_.b=null;function R$(a){x3();P$.call(this,a)}w(764,765,vW,R$);\n_.ai=function(){var a;return y(fJ,q,50,[M$(this),(a=new D$,nG(a,new S$(this),(N_(),N_(),O_)),a),I$(this)])};_.bi=function(){bG(this.d,"150px");var a=new T$(this),b=this.d;C$(b,new U$,(t$(),t$(),u$));C$(b,new V$,(p$(),p$(),q$));C$(b,new W$,(w$(),w$(),x$));C$(b,new X$(a),(z$(),z$(),A$))};_.ci=function(){O$(this);this.f+=" Or drag and drop a file on it."};function S$(a){this.a=a}w(766,1,{},S$);_.Id=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);Fma(b,new Y$(this));b.readAsText(a)};\n_.a=null;function Y$(a){this.a=a}w(767,1,{},Y$);_.di=function(a){SI(this.a.a.d,a)};_.a=null;w(770,1,{});w(769,770,{});_.b=null;_.c=1;_.d=-1;function T$(a){this.a=a;this.b=new Z$(this);this.c=this.d=1}w(768,769,{},T$);_.a=null;function Z$(a){this.a=a}w(771,1,{},Z$);_.di=function(a){this.a.a.d.mb[Vt]=null!=a?a:n};_.a=null;function N$(a){this.a=a}w(775,1,{},N$);_.Jd=function(){if(this.a.b){var a=this.a.b,b;b=new YL(a.a,0,Tz(this.a.d.mb,Vt));gR(a.a.a,b.a)}E3(this.a,!1)};_.a=null;\nfunction Q$(a){this.a=a}w(776,1,{},Q$);_.pd=function(){jG(this.a.d.mb,!0);wH(this.a.d,!0)};_.a=null;w(777,1,Zu);_.Ad=function(){var a,b;a=new $$(this.a);void 0!=$wnd.FileReader?b=new R$(a):b=new P$(a);q3(b);H$(b)};function $$(a){this.a=a}w(778,1,{},$$);_.a=null;w(779,1,Zu);_.Ad=function(){var a;a=new K$;var b=this.a,c,d;SI(a.d,b);c=(d=XS(b,"\\r\\n|\\r|\\n|\\n\\r"),d.length);1>=c&&(c=~~(b.length/16));bG(a.d,20*(10>c+1?c+1:10)+Cs);Gz((Dz(),Ez),new L$(a));q3(a);H$(a)};\nfunction Fma(a,b){a.onload=function(a){b.di(a.target.result)}}function Ema(a,b){a.onloadend=function(a){b.di(a.target.result)}}function X$(a){this.a=a}w(785,1,{},X$);_.a=null;function U$(){}w(786,1,{},U$);function V$(){}w(787,1,{},V$);function W$(){}w(788,1,{},W$);U(770);U(769);U(785);U(786);U(787);U(788);U(254);U(256);U(255);U(257);U(258);U(759);U(765);U(764);U(778);U(762);U(763);U(775);U(776);U(766);U(767);U(768);U(771);U(388);U(437);U(384);B(uW)(8);\n//@ sourceURL=8.js\n')
