$wnd.jsme.runAsyncCallback8('w(253,241,{});function y3(){y3=x;z3=new Ds("dragend",new A3)}function B3(a){Xq(a.a);Wq(a.a)}function A3(){}w(254,253,{},A3);_.Dd=function(){B3(this)};_.Gd=function(){return z3};var z3;function C3(){C3=x;D3=new Ds("dragenter",new E3)}function E3(){}w(255,253,{},E3);_.Dd=function(){B3(this)};_.Gd=function(){return D3};var D3;function F3(){F3=x;G3=new Ds("dragover",new H3)}function H3(){}w(256,253,{},H3);_.Dd=function(){B3(this)};_.Gd=function(){return G3};var G3;\nfunction I3(){I3=x;J3=new Ds("drop",new K3)}function K3(){}w(257,253,{},K3);_.Dd=function(a){var b,c,d,e;Xq(this.a);Wq(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;L3(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(Zj),a.a.b.a.a.d.mb[uk]=null!=b?b:m)};_.Gd=function(){return J3};var J3;function M3(a,b,c){mu(!a.jb?a.jb=new Bu(a):a.jb,c,b)}\nfunction N3(){this.mb=Sq("file");this.mb[Lg]="gwt-FileUpload"}w(381,362,ll,N3);_.Yd=function(a){ux(this,a)};function O3(a){var b=Vq(hh);ZR(Oj,ZS(b));this.mb=b;this.b=new yU(this.mb);this.mb[Lg]="gwt-HTML";xU(this.b,a,!0);GU(this)}w(385,386,ll,O3);function P3(a,b){var c,d;c=Vq(nk);d=Vq(Yj);d[kg]=a.a.a;d.style[vk]=a.b.a;var e=(lw(),mw(d));c.appendChild(e);kw(a.d,c);Gx(a,b,d)}function Q3(){Cy.call(this);this.a=(Fy(),My);this.b=(Ny(),Qy);this.e[Gg]=bc;this.e[Fg]=bc}w(434,378,tl,Q3);\n_.re=function(a){var b;b=Uq(a.mb);(a=Kx(this,a))&&this.d.removeChild(Uq(b));return a};function R3(a){try{a.t=!1;var b,c,d;d=a.eb;c=a.Z;d||(a.mb.style[wk]=Jh,a.Z=!1,a.Ee());b=a.mb;b.style[Yh]=0+(Fr(),cj);b.style[gk]=dc;oX(a,Rm(hr($doc)+(gr()-Pq(a.mb,Ni)>>1),0),Rm(ir($doc)+(fr()-Pq(a.mb,Mi)>>1),0));d||((a.Z=c)?(a.mb.style[Og]=pj,a.mb.style[wk]=xk,sm(a.db,200)):a.mb.style[wk]=xk)}finally{a.t=!0}}function S3(a){var b;b=(new rV(a.e)).Tc.Ef();qx(b,new T3(a),(Js(),Js(),Ks));return b}\nfunction U3(){bX();var a,b,c,d,e;AX.call(this,(TX(),UX),null,!0);this.$h();this.ab=!0;a=new O3(this.f);this.d=new Yz;this.d.mb.style[Bk]=fc;ex(this.d,fc);TW(this,"400px");e=new Q3;e.mb.style[Ih]=fc;e.e[Gg]=10;c=(Fy(),Gy);e.a=c;P3(e,a);P3(e,this.d);this.c=new Uy;this.c.e[Gg]=20;for(b=this.Yh(),c=0,d=b.length;c<d;++c)a=b[c],Ry(this.c,a);P3(e,this.c);gX(this,e);qX(this,!1);this.Zh()}w(754,755,AO,U3);_.Yh=function(){return y(jA,q,50,[S3(this)])};\n_.Zh=function(){var a=this.d;a.mb.readOnly=!0;var b=hx(a.mb)+"-readonly";dx(a.ee(),b,!0)};_.$h=function(){SX(this.F.b,"Copy")};_.c=null;_.d=null;_.e="Close";_.f="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function T3(a){this.a=a}w(757,1,{},T3);_.Jd=function(){iX(this.a,!1)};_.a=null;function V3(a){this.a=a}w(758,1,{},V3);\n_.pd=function(){mx(this.a.d.mb,!0);Ay(this.a.d,!0);var a=this.a.d,b;b=Qq(a.mb,uk).length;if(0<b&&a.hb){if(0>b)throw new MJ("Length must be a positive integer. Length: "+b);if(b>Qq(a.mb,uk).length)throw new MJ("From Index: 0  To Index: "+b+"  Text Length: "+Qq(a.mb,uk).length);var a=a.mb,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function W3(a){var b;b=(new rV(a.a)).Tc.Ef();qx(b,new X3(a),(Js(),Js(),Ks));return b}function Y3(a){a.e=QO;a.f="Paste the text to import into the text area below.";a.a="Accept";SX(a.F.b,"Paste")}function Z3(a){bX();U3.call(this);this.b=a}w(760,754,AO,Z3);_.Yh=function(){return y(jA,q,50,[W3(this),S3(this)])};_.Zh=function(){ex(this.d,"150px")};_.$h=function(){Y3(this)};_.Ee=function(){zX(this);Cq((zq(),Aq),new $3(this))};_.a=null;_.b=null;\nfunction a4(a){bX();Z3.call(this,a)}w(759,760,AO,a4);_.Yh=function(){var a;return y(jA,q,50,[W3(this),(a=new N3,qx(a,new b4(this),(lT(),lT(),mT)),a),S3(this)])};_.Zh=function(){ex(this.d,"150px");var a=new c4(this),b=this.d;M3(b,new d4,(C3(),C3(),D3));M3(b,new e4,(y3(),y3(),z3));M3(b,new f4,(F3(),F3(),G3));M3(b,new g4(a),(I3(),I3(),J3))};_.$h=function(){Y3(this);this.f+=" Or drag and drop a file on it."};function b4(a){this.a=a}w(761,1,{},b4);\n_.Id=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);h4(b,new i4(this));b.readAsText(a)};_.a=null;function i4(a){this.a=a}w(762,1,{},i4);_._h=function(a){Vz(this.a.a.d,a)};_.a=null;w(765,1,{});w(764,765,{});_.b=null;_.c=1;_.d=-1;function c4(a){this.a=a;this.b=new j4(this);this.c=this.d=1}w(763,764,{},c4);_.a=null;function j4(a){this.a=a}w(766,1,{},j4);_._h=function(a){this.a.a.d.mb[uk]=null!=a?a:m};_.a=null;function X3(a){this.a=a}w(770,1,{},X3);\n_.Jd=function(){if(this.a.b){var a=this.a.b,b;b=new cD(a.a,0,Qq(this.a.d.mb,uk));sI(a.a.a,b.a)}iX(this.a,!1)};_.a=null;function $3(a){this.a=a}w(771,1,{},$3);_.pd=function(){mx(this.a.d.mb,!0);Ay(this.a.d,!0)};_.a=null;w(772,1,Jl);_.Ad=function(){var a,b;a=new k4(this.a);void 0!=$wnd.FileReader?b=new a4(a):b=new Z3(a);VW(b);R3(b)};function k4(a){this.a=a}w(773,1,{},k4);_.a=null;w(774,1,Jl);\n_.Ad=function(){var a;a=new U3;var b=this.a,c,d;Vz(a.d,b);c=(d=mK(b,"\\r\\n|\\r|\\n|\\n\\r"),d.length);1>=c&&(c=~~(b.length/16));ex(a.d,20*(10>c+1?c+1:10)+cj);Cq((zq(),Aq),new V3(a));VW(a);R3(a)};function h4(a,b){a.onload=function(a){b._h(a.target.result)}}function L3(a,b){a.onloadend=function(a){b._h(a.target.result)}}function g4(a){this.a=a}w(780,1,{},g4);_.a=null;function d4(){}w(781,1,{},d4);function e4(){}w(782,1,{},e4);function f4(){}w(783,1,{},f4);U(765);U(764);U(780);U(781);U(782);U(783);U(253);\nU(255);U(254);U(256);U(257);U(754);U(760);U(759);U(773);U(757);U(758);U(770);U(771);U(761);U(762);U(763);U(766);U(385);U(434);U(381);B(zO)(8);\n//@ sourceURL=8.js\n')
