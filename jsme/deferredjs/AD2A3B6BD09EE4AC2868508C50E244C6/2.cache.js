$wnd.jsme.runAsyncCallback2('var l1="Any",m1="Aromatic",n1="Nonring",o1="Reset",p1="Ring";function q1(a,b){if(0>b||b>=a.pb.options.length)throw new kA;}function r1(a,b){q1(a,b);return a.pb.options[b].value}function s1(){this.pb=$doc.createElement("select");this.pb[gg]="gwt-ListBox"}t(398,373,fm,s1);function t1(){t1=u}\nfunction u1(a,b){if(null==b)throw new Uw("Missing message: awt.103");var c=-1,d,e,f;f=a.Gc.a.pb;e=$doc.createElement(sj);e.text=b;e.removeAttribute("bidiwrapped");e.value=b;d=f.options.length;(0>c||c>d)&&(c=d);c==d?f.add(e,null):(c=f.options[c],f.add(e,c))}function v1(){t1();hD.call(this);new ln;this.Gc=new w1((iD(),this))}t(462,449,{54:1,56:1,63:1,76:1,84:1},v1);_.ye=function(){return nD(this.Gc,this)};\n_.Ne=function(){return(null==this.Dc&&(this.Dc=UC(this)),this.Dc)+Ya+this.Oc+Ya+this.Pc+Ya+this.Lc+ul+this.Ac+(this.Kc?l:",hidden")+",current="+r1(this.Gc.a,this.Gc.a.pb.selectedIndex)};function x1(){vT.call(this,7)}t(476,1,Rm,x1);function y1(a){a.Gc.qf(a.j);!WC(a)&&US(a);OS(a)}\nfunction z1(a,b,c){WT.call(this);this.Gc&&this.Gc.rf(!1);nT(this,!1);iE(this,new vT(0));a=new yT(a,1);QS(this,a,null);a=new nE;QS(a,this.i,null);QS(this,a,null);b&&(this.j=XC(b),mT(this),VT(this.j,~~(Ur(b.rc.pb,pj)/2)-~~(this.Lc/2),~~(Ur(b.rc.pb,oj)/2)-~~(this.Ac/2)));c&&MS(this,c)}t(636,637,UP,z1);_.dh=function(){return kQ};t(654,652,im);_.jd=function(){y1(new z1(this.b,this.a,(jH(),lH)))};t(656,652,im);_.jd=function(){this.a.Xb?this.a.Xb.Gc.Je()?this.a.Xb.Gc.tf():y1(this.a.Xb):this.a.Xb=new A1(this.a)};\nfunction B1(a,b){JS(b)==a.a?MS(b,(KE(),UE)):MS(b,a.a)}\nfunction C1(a){var b,c,d,e;e=l;d=!1;JS(D1)!=a.a?(e=Ia,d=!0):JS(E1)!=a.a?(e="!#6",d=!0):JS(F1)!=a.a?(MS(G1,(KE(),UE)),MS(H1,UE),MS(I1,UE),MS(J1,UE),e="F,Cl,Br,I"):(b=JS(K1)!=a.a,c=JS(L1)!=a.a,JS(M1)!=a.a&&(b?e+="c,":c?e+="C,":e+="#6,"),JS(N1)!=a.a&&(b?e+="n,":c?e+="N,":e+="#7,"),JS(O1)!=a.a&&(b?e+="o,":c?e+="O,":e+="#8,"),JS(P1)!=a.a&&(b?e+="s,":c?e+="S,":e+="#16,"),JS(Q1)!=a.a&&(b?e+="p,":c?e+="P,":e+="#15,"),JS(G1)!=a.a&&(e+="F,"),JS(H1)!=a.a&&(e+="Cl,"),JS(I1)!=a.a&&(e+="Br,"),JS(J1)!=a.a&&(e+=\n"I,"),qM(e,Ya)&&(e=e.substr(0,e.length-1-0)),1>e.length&&!a.b&&(b?e=hf:c?e=Uc:(MS(D1,(KE(),UE)),e=Ia)));b=l;d&&JS(K1)!=a.a&&(b+=";a");d&&JS(L1)!=a.a&&(b+=";A");JS(R1)!=a.a&&(b+=";R");JS(S1)!=a.a&&(b+=";!R");JS(D1)!=a.a&&0<b.length?e=b.substr(1,b.length-1):e+=b;d=T1.Gc.a.pb.selectedIndex;0<d&&(--d,e+=";H"+d);d=U1.Gc.a.pb.selectedIndex;0<d&&(--d,e+=";D"+d);JS(V1)!=a.a&&(e="~");JS(W1)!=a.a&&(e=uc);JS(X1)!=a.a&&(e=Tc);JS(Y1)!=a.a&&(e="!@");BT(a.e,e)}\nfunction Z1(a){$1(a);a2(a);var b=T1.Gc.a;q1(b,0);b.pb.options[0].selected=!0;b=U1.Gc.a;q1(b,0);b.pb.options[0].selected=!0;MS(K1,a.a);MS(L1,a.a);MS(R1,a.a);MS(S1,a.a);MS(T1,a.a);MS(U1,a.a);b2(a)}function $1(a){MS(M1,a.a);MS(N1,a.a);MS(O1,a.a);MS(P1,a.a);MS(Q1,a.a);MS(G1,a.a);MS(H1,a.a);MS(I1,a.a);MS(J1,a.a)}function a2(a){MS(D1,a.a);MS(E1,a.a);MS(F1,a.a)}function b2(a){MS(V1,a.a);MS(W1,a.a);MS(X1,a.a);MS(Y1,a.a);a.b=!1}\nfunction A1(a){qT.call(this,"Atom/Bond Query");this.i=new hT(this.dh());DE(this.r,new XT(this));this.a=(jH(),lH);this.c=a;this.d||(a=XC(a),this.d=new AT(a),VT(this.d,-150,10));this.j=this.d;iE(this,new x1);MS(this,this.a);a=new nE;iE(a,new lF(0,3,1));QS(a,new xT("Atom type :"),null);D1=new hT(l1);E1=new hT("Any except C");F1=new hT("Halogen");QS(a,D1,null);QS(a,E1,null);QS(a,F1,null);QS(this,a,null);a=new nE;iE(a,new lF(0,3,1));QS(a,new yT("Or select one or more from the list :",0),null);QS(this,\na,null);a=new nE;iE(a,new lF(0,3,1));M1=new hT(sd);N1=new hT(le);O1=new hT(se);P1=new hT(we);Q1=new hT(te);G1=new hT(Id);H1=new hT(wd);I1=new hT(jd);J1=new hT(Pd);QS(a,M1,null);QS(a,N1,null);QS(a,O1,null);QS(a,P1,null);QS(a,Q1,null);QS(a,G1,null);QS(a,H1,null);QS(a,I1,null);QS(a,J1,null);QS(this,a,null);a=new nE;iE(a,new lF(0,3,1));T1=new v1;u1(T1,l1);u1(T1,$b);u1(T1,ic);u1(T1,qc);u1(T1,tc);QS(a,new xT("Number of hydrogens :  "),null);QS(a,T1,null);QS(this,a,null);a=new nE;iE(a,new lF(0,3,1));U1=\nnew v1;u1(U1,l1);u1(U1,$b);u1(U1,ic);u1(U1,qc);u1(U1,tc);u1(U1,"4");u1(U1,"5");u1(U1,"6");QS(a,new yT("Number of connections :",0),null);QS(a,U1,null);QS(a,new yT(" (H\'s don\'t count.)",0),null);QS(this,a,null);a=new nE;iE(a,new lF(0,3,1));QS(a,new xT("Atom is :"),null);K1=new hT(m1);QS(a,K1,null);L1=new hT("Nonaromatic");QS(a,L1,null);R1=new hT(p1);QS(a,R1,null);S1=new hT(n1);QS(a,S1,null);QS(this,a,null);a=new nE;MS(a,aF(JS(this)));iE(a,new lF(0,3,1));QS(a,new xT("Bond is :"),null);V1=new hT(l1);\nQS(a,V1,null);W1=new hT(m1);QS(a,W1,null);X1=new hT(p1);QS(a,X1,null);Y1=new hT(n1);QS(a,Y1,null);QS(this,a,null);a=new nE;iE(a,new lF(1,3,1));this.e=new SF(Ia,20);QS(a,this.e,null);QS(a,new hT(o1),null);QS(a,this.i,null);QS(this,a,null);this.Gc&&this.Gc.rf(!1);nT(this,!1);$1(this);a2(this);b2(this);MS(K1,this.a);MS(L1,this.a);MS(R1,this.a);MS(S1,this.a);MS(T1,this.a);MS(U1,this.a);B1(this,D1);mT(this);this.Gc.qf(this.j);!WC(this)&&US(this);OS(this)}t(670,637,UP,A1);\n_.eh=function(a,b){var c;H(b,o1)?(Z1(this),B1(this,D1),C1(this)):D(a.f,53)?(b2(this),Ax(a.f)===Ax(D1)?($1(this),a2(this)):Ax(a.f)===Ax(E1)?($1(this),a2(this)):Ax(a.f)===Ax(F1)?($1(this),a2(this)):Ax(a.f)===Ax(R1)?MS(S1,this.a):Ax(a.f)===Ax(S1)?(MS(R1,this.a),MS(K1,this.a)):Ax(a.f)===Ax(K1)?(MS(L1,this.a),MS(S1,this.a)):Ax(a.f)===Ax(L1)?MS(K1,this.a):Ax(a.f)===Ax(V1)||Ax(a.f)===Ax(W1)||Ax(a.f)===Ax(X1)||Ax(a.f)===Ax(Y1)?(Z1(this),this.b=!0):a2(this),B1(this,a.f),C1(this)):D(a.f,54)&&(b2(this),c=a.f,\n0==c.Gc.a.pb.selectedIndex?MS(c,this.a):MS(c,(KE(),UE)),C1(this));107!=this.c.j&&(this.c.j=107,sE(this.c));return!0};_.b=!1;_.c=null;_.d=null;var D1=_.e=null,V1=null,E1=null,K1=null,W1=null,I1=null,M1=null,U1=null,T1=null,H1=null,G1=null,F1=null,J1=null,N1=null,L1=null,S1=null,Y1=null,O1=null,Q1=null,R1=null,X1=null,P1=null;function w1(a){IO();KO.call(this);this.a=new s1;Sz(this.a,new c2(this,a),(hR(),hR(),iR))}t(722,720,{},w1);_.pf=function(){return this.a};_.a=null;\nfunction c2(a,b){this.a=a;this.b=b}t(723,1,{},c2);_.rd=function(a){iD();ZT(a,this.b,r1(this.a.a,this.a.a.pb.selectedIndex))};_.a=null;_.b=null;t(758,729,{});_.tf=function(){OU(this.c)};U(636);U(670);U(462);U(722);U(723);U(398);v(TP)(2);\n//@ sourceURL=2.js\n')
