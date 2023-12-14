import{s as H,f as A,a as T,l as X,A as $e,g as S,d as _,c as C,h as N,m as Y,j as v,k as ne,x as D,i as I,B as J,n as Z,y as j,C as me,r as _e,u as de,v as pe,w as ge,D as se,E as he,e as le,F as re,G as ve,H as ke,I as ye}from"../chunks/scheduler.afabb3ec.js";import{S as F,i as G,a as g,t as h,b as y,d as E,m as b,e as w,g as ce,c as fe}from"../chunks/index.5bfae8ca.js";function ae(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const Ee=!0,Ue=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ee},Symbol.toStringTag,{value:"Module"}));function be(r){let e,n,t,s,l,a;return{c(){e=A("link"),n=T(),t=A("span"),s=X(r[0]),this.h()},l(c){const o=$e("svelte-v01l8y",document.head);e=S(o,"LINK",{href:!0,rel:!0}),o.forEach(_),n=C(c),t=S(c,"SPAN",{class:!0,style:!0});var u=N(t);s=Y(u,r[0]),u.forEach(_),this.h()},h(){v(e,"href","https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"),v(e,"rel","stylesheet"),v(t,"class","material-icons-outlined icon svelte-970gl7"),ne(t,"--color",r[2])},m(c,o){D(document.head,e),I(c,n,o),I(c,t,o),D(t,s),l||(a=J(t,"click",function(){me(r[1])&&r[1].apply(this,arguments)}),l=!0)},p(c,[o]){r=c,o&1&&Z(s,r[0]),o&4&&ne(t,"--color",r[2])},i:j,o:j,d(c){c&&(_(n),_(t)),_(e),l=!1,a()}}}function we(r,e,n){let{name:t}=e,{handler:s=()=>{}}=e,{color:l="green"}=e;return r.$$set=a=>{"name"in a&&n(0,t=a.name),"handler"in a&&n(1,s=a.handler),"color"in a&&n(2,l=a.color)},[t,s,l]}class M extends F{constructor(e){super(),G(this,e,we,be,H,{name:0,handler:1,color:2})}}function Ie(r){let e,n;const t=r[1].default,s=_e(t,r,r[0],null);return{c(){e=A("div"),s&&s.c(),this.h()},l(l){e=S(l,"DIV",{class:!0});var a=N(e);s&&s.l(a),a.forEach(_),this.h()},h(){v(e,"class","cell svelte-1kvmlzk")},m(l,a){I(l,e,a),s&&s.m(e,null),n=!0},p(l,[a]){s&&s.p&&(!n||a&1)&&de(s,t,l,l[0],n?ge(t,l[0],a,null):pe(l[0]),null)},i(l){n||(g(s,l),n=!0)},o(l){h(s,l),n=!1},d(l){l&&_(e),s&&s.d(l)}}}function De(r,e,n){let{$$slots:t={},$$scope:s}=e;return r.$$set=l=>{"$$scope"in l&&n(0,s=l.$$scope)},[s,t]}class R extends F{constructor(e){super(),G(this,e,De,Ie,H,{})}}function Ae(r){let e,n=r[1](r[0])+"",t,s,l,a;return{c(){e=A("span"),t=X(n),this.h()},l(c){e=S(c,"SPAN",{class:!0});var o=N(e);t=Y(o,n),o.forEach(_),this.h()},h(){v(e,"class",s=se(r[1](r[0]))+" svelte-1cymccp")},m(c,o){I(c,e,o),D(e,t),l||(a=J(e,"click",r[2]),l=!0)},p(c,[o]){o&1&&n!==(n=c[1](c[0])+"")&&Z(t,n),o&1&&s!==(s=se(c[1](c[0]))+" svelte-1cymccp")&&v(e,"class",s)},i:j,o:j,d(c){c&&_(e),l=!1,a()}}}function Se(r,e,n){let{prio:t=3}=e;const s=a=>({1:"ALTA",2:"MEDIA",3:"BASSA"})[a],l=()=>{n(0,t=(t+1)%3+1)};return r.$$set=a=>{"prio"in a&&n(0,t=a.prio)},[t,s,l]}class Te extends F{constructor(e){super(),G(this,e,Se,Ae,H,{prio:0})}}function Ce(r){let e=r[0].id+"",n;return{c(){n=X(e)},l(t){n=Y(t,e)},m(t,s){I(t,n,s)},p(t,s){s&1&&e!==(e=t[0].id+"")&&Z(n,e)},d(t){t&&_(n)}}}function Ve(r){let e,n;return e=new M({props:{name:"task_alt",handler:r[2]}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p:j,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Ne(r){let e,n;return e=new M({props:{name:"circle",handler:r[2],color:"red"}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p:j,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function Pe(r){let e,n,t,s;const l=[Ne,Ve],a=[];function c(o,u){return o[0].done==!1?0:1}return e=c(r),n=a[e]=l[e](r),{c(){n.c(),t=le()},l(o){n.l(o),t=le()},m(o,u){a[e].m(o,u),I(o,t,u),s=!0},p(o,u){let k=e;e=c(o),e===k?a[e].p(o,u):(ce(),h(a[k],1,1,()=>{a[k]=null}),fe(),n=a[e],n?n.p(o,u):(n=a[e]=l[e](o),n.c()),g(n,1),n.m(t.parentNode,t))},i(o){s||(g(n),s=!0)},o(o){h(n),s=!1},d(o){o&&_(t),a[e].d(o)}}}function Be(r){let e,n,t,s;return{c(){e=A("input"),this.h()},l(l){e=S(l,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),this.h()},h(){v(e,"type","text"),v(e,"class","todo-item-input-text svelte-272g70"),v(e,"id",n=r[0].id),v(e,"placeholder","Inserisci il nuovo todo")},m(l,a){I(l,e,a),re(e,r[0].task),t||(s=[J(e,"input",r[4]),J(e,"change",r[3])],t=!0)},p(l,a){a&1&&n!==(n=l[0].id)&&v(e,"id",n),a&1&&e.value!==l[0].task&&re(e,l[0].task)},d(l){l&&_(e),t=!1,ve(s)}}}function Me(r){let e,n;return e=new Te({}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function je(r){let e,n;return e=new M({props:{name:"delete_forever",color:"red",handler:r[5]}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p:j,i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function ze(r){let e,n,t,s,l,a,c,o,u,k;return e=new R({props:{$$slots:{default:[Ce]},$$scope:{ctx:r}}}),t=new R({props:{$$slots:{default:[Pe]},$$scope:{ctx:r}}}),l=new R({props:{$$slots:{default:[Be]},$$scope:{ctx:r}}}),c=new R({props:{$$slots:{default:[Me]},$$scope:{ctx:r}}}),u=new R({props:{$$slots:{default:[je]},$$scope:{ctx:r}}}),{c(){y(e.$$.fragment),n=T(),y(t.$$.fragment),s=T(),y(l.$$.fragment),a=T(),y(c.$$.fragment),o=T(),y(u.$$.fragment)},l(i){E(e.$$.fragment,i),n=C(i),E(t.$$.fragment,i),s=C(i),E(l.$$.fragment,i),a=C(i),E(c.$$.fragment,i),o=C(i),E(u.$$.fragment,i)},m(i,$){b(e,i,$),I(i,n,$),b(t,i,$),I(i,s,$),b(l,i,$),I(i,a,$),b(c,i,$),I(i,o,$),b(u,i,$),k=!0},p(i,[$]){const O={};$&129&&(O.$$scope={dirty:$,ctx:i}),e.$set(O);const P={};$&129&&(P.$$scope={dirty:$,ctx:i}),t.$set(P);const V={};$&129&&(V.$$scope={dirty:$,ctx:i}),l.$set(V);const q={};$&128&&(q.$$scope={dirty:$,ctx:i}),c.$set(q);const B={};$&128&&(B.$$scope={dirty:$,ctx:i}),u.$set(B)},i(i){k||(g(e.$$.fragment,i),g(t.$$.fragment,i),g(l.$$.fragment,i),g(c.$$.fragment,i),g(u.$$.fragment,i),k=!0)},o(i){h(e.$$.fragment,i),h(t.$$.fragment,i),h(l.$$.fragment,i),h(c.$$.fragment,i),h(u.$$.fragment,i),k=!1},d(i){i&&(_(n),_(s),_(a),_(o)),w(e,i),w(t,i),w(l,i),w(c,i),w(u,i)}}}function Le(r,e,n){let{todo:t}=e;const s=he(),l=k=>{s("change",{type:k,id:t.id})},a=()=>{n(0,t.done=!t.done,t)},c=()=>{document.getElementById(t.id).blur()};function o(){t.task=this.value,n(0,t)}const u=()=>l("delete");return r.$$set=k=>{"todo"in k&&n(0,t=k.todo)},[t,l,a,c,o,u]}class Oe extends F{constructor(e){super(),G(this,e,Le,ze,H,{todo:0})}}function oe(r,e,n){const t=r.slice();return t[5]=e[n],t}function ie(r){let e,n;return e=new Oe({props:{todo:r[5]}}),e.$on("change",r[2]),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,s){b(e,t,s),n=!0},p(t,s){const l={};s&1&&(l.todo=t[5]),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}function qe(r){let e,n="ToDos",t,s,l,a,c,o,u,k,i,$,O,P,V,q,B,z,Q,U;a=new M({props:{name:"tag"}}),u=new M({props:{name:"task_alt"}}),$=new M({props:{name:"list"}}),V=new M({props:{name:"schedule"}}),z=new M({props:{name:"add_box",handler:r[1]}});let L=ae(r[0]),d=[];for(let f=0;f<L.length;f+=1)d[f]=ie(oe(r,L,f));const ue=f=>h(d[f],1,1,()=>{d[f]=null});return{c(){e=A("h1"),e.textContent=n,t=T(),s=A("div"),l=A("div"),y(a.$$.fragment),c=T(),o=A("div"),y(u.$$.fragment),k=T(),i=A("div"),y($.$$.fragment),O=T(),P=A("div"),y(V.$$.fragment),q=T(),B=A("div"),y(z.$$.fragment),Q=T();for(let f=0;f<d.length;f+=1)d[f].c();this.h()},l(f){e=S(f,"H1",{"data-svelte-h":!0}),ke(e)!=="svelte-wp79qt"&&(e.textContent=n),t=C(f),s=S(f,"DIV",{class:!0});var m=N(s);l=S(m,"DIV",{class:!0});var p=N(l);E(a.$$.fragment,p),p.forEach(_),c=C(m),o=S(m,"DIV",{class:!0});var K=N(o);E(u.$$.fragment,K),K.forEach(_),k=C(m),i=S(m,"DIV",{class:!0});var x=N(i);E($.$$.fragment,x),x.forEach(_),O=C(m),P=S(m,"DIV",{class:!0});var ee=N(P);E(V.$$.fragment,ee),ee.forEach(_),q=C(m),B=S(m,"DIV",{class:!0});var te=N(B);E(z.$$.fragment,te),te.forEach(_),Q=C(m);for(let W=0;W<d.length;W+=1)d[W].l(m);m.forEach(_),this.h()},h(){v(l,"class","header svelte-1onsh24"),v(o,"class","header svelte-1onsh24"),v(i,"class","header svelte-1onsh24"),v(P,"class","header svelte-1onsh24"),v(B,"class","header header-last  svelte-1onsh24"),v(s,"class","todo-list svelte-1onsh24")},m(f,m){I(f,e,m),I(f,t,m),I(f,s,m),D(s,l),b(a,l,null),D(s,c),D(s,o),b(u,o,null),D(s,k),D(s,i),b($,i,null),D(s,O),D(s,P),b(V,P,null),D(s,q),D(s,B),b(z,B,null),D(s,Q);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(s,null);U=!0},p(f,[m]){if(m&5){L=ae(f[0]);let p;for(p=0;p<L.length;p+=1){const K=oe(f,L,p);d[p]?(d[p].p(K,m),g(d[p],1)):(d[p]=ie(K),d[p].c(),g(d[p],1),d[p].m(s,null))}for(ce(),p=L.length;p<d.length;p+=1)ue(p);fe()}},i(f){if(!U){g(a.$$.fragment,f),g(u.$$.fragment,f),g($.$$.fragment,f),g(V.$$.fragment,f),g(z.$$.fragment,f);for(let m=0;m<L.length;m+=1)g(d[m]);U=!0}},o(f){h(a.$$.fragment,f),h(u.$$.fragment,f),h($.$$.fragment,f),h(V.$$.fragment,f),h(z.$$.fragment,f),d=d.filter(Boolean);for(let m=0;m<d.length;m+=1)h(d[m]);U=!1},d(f){f&&(_(e),_(t),_(s)),w(a),w(u),w($),w(V),w(z),ye(d,f)}}}function He(r,e,n){let t=[],s=0;const l=async()=>{let o={id:++s,task:"",done:!1,priority:3};console.log("CREATE:",o),n(0,t=[...t,o])},a=async o=>{c(o.detail.id)},c=o=>{console.log("DELETE:",o),n(0,t=t.filter(u=>u.id!=o))};return[t,l,a]}class Fe extends F{constructor(e){super(),G(this,e,He,qe,H,{})}}function Ge(r){let e,n,t;return n=new Fe({}),{c(){e=A("main"),y(n.$$.fragment),this.h()},l(s){e=S(s,"MAIN",{class:!0});var l=N(e);E(n.$$.fragment,l),l.forEach(_),this.h()},h(){v(e,"class","svelte-5pk6cz")},m(s,l){I(s,e,l),b(n,e,null),t=!0},p:j,i(s){t||(g(n.$$.fragment,s),t=!0)},o(s){h(n.$$.fragment,s),t=!1},d(s){s&&_(e),w(n)}}}class Je extends F{constructor(e){super(),G(this,e,null,Ge,H,{})}}export{Je as component,Ue as universal};