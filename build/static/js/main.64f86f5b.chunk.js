(this.webpackJsonpwordapi=this.webpackJsonpwordapi||[]).push([[0],{61:function(e,t,a){},68:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(11),i=a.n(s),r=a(17),o=a(109),l=(a(61),a(4));var j=()=>Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(r.b,{to:"/",children:Object(l.jsx)(o.a,{className:"header--button__home",size:"large",color:"primary",children:"Home"})}),Object(l.jsx)(r.b,{to:"/word",children:Object(l.jsx)(o.a,{className:"header--button__word",size:"large",color:"primary",children:"Word"})})]}),d=a(118);a(68);var b=({addWord:e})=>{const[t,a]=Object(n.useState)("");return Object(l.jsxs)("form",{className:"word-add-form d-flex",onSubmit:n=>{n.preventDefault(),e(t),a("")},children:[Object(l.jsx)(d.a,{id:"outlined-search",label:"Type any word...",type:"text",variant:"outlined",onChange:e=>a(e.target.value),value:t}),Object(l.jsx)(o.a,{variant:"contained",color:"secondary",type:"submit",value:"Submit",children:"Search"})]})};a(43).config();class h{async getData(e){const t=await fetch(`/.netlify/functions/getApiKey?wordLabel=${e}`);return await t.json()}getDefinition(e){return this.getData(`${e}/definitions`).then((e=>e.definitions[0].definition))}getPartOfSpeech(e){return this.getData(`${e}/definitions`).then((e=>e.definitions[0].partOfSpeech)).catch((()=>"No info"))}getSynonyms(e){return this.getData(`${e}/synonyms`).then((e=>e.synonyms)).catch((()=>"No info"))}getAntonyms(e){return this.getData(`${e}/antonyms`).then((e=>e.antonyms)).catch((()=>"No info"))}getSimilar(e){return this.getData(`${e}/similarTo`).then((e=>e.similarTo)).catch((()=>"No info"))}getSyllables(e){return this.getData(e).then((e=>e.syllables.list)).then((e=>e.toString())).then((e=>e.replace(/,/g,"\u2022"))).catch((()=>"No info"))}getPronunciation(e){return this.getData(e).then((e=>e.pronunciation.all)).catch((()=>"No info"))}getTypeOf(e){return this.getData(`${e}/typeOf`).then((e=>e.typeOf)).catch((()=>"No info"))}}var O=a(113),p=a(114),m=a(115),x=a(116),u=a(74),g=a(117);const f=Object(O.a)((e=>({root:{width:"30%",marginLeft:"35%",marginRight:"35%",marginBottom:"50px",borderRadius:16,boxShadow:"0 8px 16px 0 #BDC9D7",textAlign:"center"},title:{fontSize:14},pos:{marginBottom:12},paper:{margin:e.spacing(1),padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},paperMain:{fontSize:20,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}))),y=new h;var S=()=>{const e=f(),t=Object(n.useContext)(D),[a,c]=Object(n.useState)(""),[s,i]=Object(n.useState)(""),[o,j]=Object(n.useState)(""),[d,b]=Object(n.useState)(""),[h,O]=Object(n.useState)(""),[S,w]=Object(n.useState)(""),[N,v]=Object(n.useState)(""),[C,k]=Object(n.useState)(""),[A,W]=Object(n.useState)(""),$=async t=>{j(await y.getDefinition(t)),w(await y.getPartOfSpeech(t)),b(await y.getSyllables(t)),O(await y.getPronunciation(t));const a=(await y.getSynonyms(t)).map((t=>Object(l.jsx)(r.b,{to:"/word",onClick:()=>E(t),children:Object(l.jsx)(u.a,{className:e.paper,children:t})})));v(a);const n=(await y.getAntonyms(t)).map((t=>Object(l.jsx)(r.b,{to:"/word",onClick:()=>E(t),children:Object(l.jsx)(u.a,{className:e.paper,children:t})})));k(n);const c=(await y.getSimilar(t)).map((t=>Object(l.jsx)(r.b,{to:"/word",onClick:()=>E(t),children:Object(l.jsx)(u.a,{className:e.paper,children:t})})));i(c);const s=(await y.getTypeOf(t)).map((t=>Object(l.jsx)(u.a,{className:e.paper,children:t})));W(s)},E=e=>{c(e)};return Object(n.useEffect)((()=>{$(t)}),[t]),Object(n.useEffect)((()=>{$(a)}),[a]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p.a,{className:e.root,children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)(x.a,{variant:"h5",component:"h2",children:d}),Object(l.jsx)(x.a,{className:e.pos,color:"textSecondary",children:S}),Object(l.jsxs)(x.a,{variant:"body2",component:"p",children:[o,Object(l.jsx)("br",{}),h]})]})}),Object(l.jsx)("div",{className:e.grid,children:Object(l.jsxs)(g.a,{container:!0,direction:"row",justify:"space-around",children:[Object(l.jsx)(g.a,{item:!0,xs:3,children:Object(l.jsxs)(g.a,{container:!0,direction:"column",children:[Object(l.jsx)(u.a,{className:e.paperMain,elevation:3,children:"Synonyms"}),N]})}),Object(l.jsx)(g.a,{item:!0,xs:3,children:Object(l.jsxs)(g.a,{container:!0,direction:"column",children:[Object(l.jsx)(u.a,{className:e.paperMain,elevation:3,children:"Antonyms"}),C]})}),Object(l.jsx)(g.a,{item:!0,xs:3,children:Object(l.jsxs)(g.a,{container:!0,direction:"column",children:[Object(l.jsx)(u.a,{className:e.paperMain,elevation:3,children:"Similar to"}),s]})}),Object(l.jsx)(g.a,{item:!0,xs:3,children:Object(l.jsxs)(g.a,{container:!0,direction:"column",children:[Object(l.jsx)(u.a,{className:e.paperMain,elevation:3,children:"Type of"}),A]})})]})})]})},w=a(12),N=a(119);a(72);a(43).config();const v=Object(O.a)((e=>({root:{display:"flex",justifyContent:"center",flexWrap:"wrap",listStyle:"none","& > *":{margin:e.spacing(1)}}}))),D=c.a.createContext(""),C=new h;var k=()=>{const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)(""),[s,i]=Object(n.useState)(""),[o,d]=Object(n.useState)([]),h=v();Object(n.useEffect)((()=>{(async()=>{try{i(await C.getDefinition(e))}catch(t){console.log(t),""!==e&&i("No info, try another one")}})(),d([...o,e])}),[e]);const O=e=>{t(e)};Object(n.useEffect)((()=>{const e=localStorage.getItem("lastWords");e&&d(JSON.parse(e))}),[]),Object(n.useEffect)((()=>{localStorage.setItem("lastWords",JSON.stringify(o))}));const p=e=>{c(e)},m=()=>{let e=localStorage.getItem("lastWords"),t=JSON.parse(e);if(t){return t.slice(-5).map((e=>Object(l.jsx)(r.b,{to:"/word",onClick:()=>p(e),children:Object(l.jsx)(N.a,{label:e,component:"a",clickable:!0})}))).slice(1)}return null};return Object(l.jsxs)(r.a,{children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(j,{})}),Object(l.jsxs)(D.Provider,{value:a,children:[Object(l.jsx)(w.a,{path:"/",exact:!0,component:()=>Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{addWord:O}),Object(l.jsx)("div",{className:h.root,children:Object(l.jsx)(m,{})}),Object(l.jsx)("div",{className:"word--definition",onClick:p(e),children:Object(l.jsxs)(r.b,{to:"/word",children:[e.toUpperCase()," ",s]})})]})}),Object(l.jsx)(w.a,{path:"/word",component:S})]})]})};i.a.render(Object(l.jsx)(k,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.64f86f5b.chunk.js.map