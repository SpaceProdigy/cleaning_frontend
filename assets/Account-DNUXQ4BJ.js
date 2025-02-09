import{s as d,B as v,q as R,u as w,a as W,j as e,T as c,I as j,t as X,P as l,v as Y,r as g,w as Z,x as ee,y as te,z as ne,C as ie,D as se,E as N,F as ae,i as F,k as M,G as oe,H as le,c as re,b as ce,A as de,J as pe,K as ue}from"./index-CBlpFFCk.js";import{d as z,T as P,a as _,b as $,c as xe,S as he,M as me}from"./Close-BMiOY5H9.js";import{C as A,F as fe,I as ge}from"./OutlinedInput-DqLRc645.js";import{B as k}from"./Button-D7hFKcM8.js";const je=d(v)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`,ve=d(R)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`,C=d(R)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,be=d(v)`
  display: flex;
  gap: 10px;
  align-items: center;
`;function V({setIsLoginInput:t,loginValue:p,dispatch:n,setLoginValue:u,isLoginInput:i,user:s,isLoading:o}){const f=w(W),b=()=>{t(!0)},y=()=>{t(!1)},r=async()=>{await n(X({displayName:p,userId:s==null?void 0:s.uid,type:"updateDisplayName"})),p&&t(!1)},x=a=>{a.length<=30&&u(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[f==="en"?"Login:":"Логін:"," ",e.jsx(c,{variant:"subtitle2",component:"span",children:!i&&(s==null?void 0:s.displayName)})]}),!i&&e.jsx(j,{color:"info",onClick:b,disabled:o,children:e.jsx(z,{})}),i&&e.jsxs(be,{children:[e.jsx(P,{value:p,onChange:a=>x(a.target.value),variant:"standard",helperText:"Max 30 characters",style:{minWidth:150}}),p.length>2&&e.jsxs(j,{color:"success",onClick:r,disabled:o,children:[!o&&e.jsx(_,{}),o&&e.jsx(A,{size:"20px"})]}),e.jsx(j,{color:"info",onClick:y,disabled:o,children:e.jsx($,{})})]})]})}V.propTypes={setIsLoginInput:l.func.isRequired,loginValue:l.string.isRequired,dispatch:l.func.isRequired,setLoginValue:l.func.isRequired,isLoginInput:l.bool.isRequired,user:l.object.isRequired,isLoading:l.bool.isRequired};const ye=d(v)`
  position: relative;
  background-image: ${({src:t})=>`url(${t||Y})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
`,Re=d(v)`
  position: absolute;
  bottom: 0px;
  right: -20px;
`,Ie=d(v)`
  position: absolute;
  bottom: 0px;
  right: -65px;
`,Se=d("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),we=d(v)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11111190;
  border-radius: 50%;
  z-index: 10;
`,Ce=d(v)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;function O({user:t,language:p,isLoading:n,dispatch:u}){const[i,s]=g.useState(null),[o,f]=g.useState(null),b=async()=>{!i.file||!t.uid||(await u(Z({data:i.file,setLoadingProgress:f,id:t.uid})),s(null))},y=()=>{s(null)},r=async x=>{s(null),f(null);const a=x.target.files[0],h=5*1024*1024;if(!a){s(null);return}if((a==null?void 0:a.size)>h){ee("info",p==="en"?"The image must not exceed 5 MB":"Зображення має бути не більше 5 Мб");return}const I=URL.createObjectURL(a);s({preview:I,file:a})};return e.jsxs(ye,{src:i!=null&&i.preview?i.preview:t==null?void 0:t.photoURL,children:[e.jsx(Re,{children:!i&&e.jsxs(j,{color:"info",component:"label",disabled:n,children:[e.jsx(z,{}),e.jsx(Se,{type:"file",onChange:x=>r(x),accept:".png, .jpg, .jpeg"})]})}),i&&e.jsxs(Ie,{children:[e.jsxs(j,{color:"success",type:"button",disabled:n,onClick:b,children:[!n&&e.jsx(_,{}),n&&e.jsx(A,{size:"20px"})]}),e.jsx(j,{color:"info",type:"button",onClick:y,sx:{ml:1},disabled:n,children:e.jsx($,{})})]}),i&&e.jsxs(we,{children:[e.jsx(A,{variant:"determinate",value:o??0}),e.jsx(Ce,{children:e.jsx(c,{variant:"caption",component:"div",color:"text.secondary",children:`${Math.round(o??0)}%`})})]})]})}O.propTypes={user:l.object.isRequired,language:l.string.isRequired,isLoading:l.bool.isRequired,dispatch:l.func.isRequired};const Ae=d(R)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`,ke=d(R)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,qe=d(v)`
  position: absolute;
  top: 5px;
  right: 5px;
`,Le=d(R)`
  position: relative;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,Te=d("form")`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`,We=d(R)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  gap: 20px;
`,U=[...Object.values(ie).slice(0,-3),"superAdmin","admin"];function B({dispatch:t,isLoading:p}){const[n,u]=g.useState("admin"),[i,s]=g.useState(""),o=w(te),f=()=>{t(se(U))},b=r=>{t(N({type:"delete",userId:r}))},y=r=>{r.preventDefault(),!(!n||!i||i===""||n==="")&&t(N({userId:i.includes("@")?null:i,role:n,email:i.includes("@")?i:null,type:"add"}))};return e.jsx(e.Fragment,{children:e.jsxs(Ae,{children:[e.jsx(v,{children:e.jsx(k,{type:"button",disabled:p,variant:"contained",onClick:f,children:"Fetch admins"})}),e.jsx(ke,{children:(o==null?void 0:o.length)>0&&(o==null?void 0:o.map(({email:r,role:x,userId:a,displayName:h,_id:I})=>{if(!(x.includes("viewer")&&x.length===1))return e.jsxs(Le,{elevation:3,children:[e.jsx(qe,{children:e.jsx(j,{size:"small",color:"error",onClick:()=>b(I),children:e.jsx(xe,{fontSize:"small"})})}),e.jsxs(c,{variant:"subtitle2",children:["ROLE:",x.map((S,q,L)=>L.length>1?` ${S} /`:` ${S} `)]}),e.jsxs(c,{variant:"subtitle2",children:["ID: ",a]}),e.jsxs(c,{variant:"subtitle2",children:["Email: ",r]}),e.jsxs(c,{variant:"subtitle2",children:["Login: ",h]})]},I)}))}),e.jsx(R,{elevation:2,sx:{p:"20px",width:"100%"},children:e.jsxs(Te,{onSubmit:y,children:[e.jsx(R,{elevation:3,sx:{p:"20px",width:"100%"},children:e.jsx(c,{textAlign:"center",color:"#FFD700",children:"Add Email or ID"})}),e.jsxs(We,{elevation:3,children:[e.jsxs(fe,{fullWidth:!0,children:[e.jsx(ge,{children:"Roles"}),e.jsx(he,{value:n,label:"Roles",onChange:r=>u(r.target.value),children:U.map(r=>e.jsx(me,{value:r,children:r},ne()))})]}),e.jsx(P,{fullWidth:!0,sx:{mt:2},label:"Email or ID",value:i,onChange:r=>s(r.target.value)}),e.jsx(k,{type:"submit",disabled:p,children:"Submit"})]})]})})]})})}B.propTypes={isLoading:l.bool.isRequired,dispatch:l.func.isRequired,language:l.string.isRequired};const ze=d(v)`
  display: flex;
  gap: 10px;
  align-items: center;
`;function J({isRoomInput:t,setIsRoomInput:p,roomValue:n,setRoomValue:u,dispatch:i,user:s,isLoading:o}){const f=w(W),b=()=>{p(!0)},y=()=>{p(!1)},r=async()=>{await i(ae({id:s.uid,roomNumber:Number(n)})),n&&p(!1)},x=a=>{const h=a.replace(/\D/g,"");h.length<=5&&u(h)};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[f==="en"?"Room:":"Кімніта:"," ",!(s!=null&&s.roomNumber)&&!t&&e.jsx(c,{variant:"caption",component:"span",children:f==="en"?"Enter your room number":"Введіть номер вашої кімнати"}),e.jsx(c,{variant:"subtitle2",component:"span",children:!t&&(s==null?void 0:s.roomNumber)})]}),!t&&e.jsx(j,{color:"info",onClick:b,disabled:o,children:e.jsx(z,{})}),t&&e.jsxs(ze,{children:[e.jsx(P,{value:n,onChange:a=>x(a.target.value),variant:"standard",helperText:"Max 5 characters",style:{minWidth:150}}),n.length>0&&e.jsxs(j,{color:"success",onClick:r,disabled:o,children:[!o&&e.jsx(_,{}),o&&e.jsx(A,{size:"20px"})]}),e.jsx(j,{color:"info",onClick:y,disabled:o,children:e.jsx($,{})})]})]})}J.propTypes={setIsRoomInput:l.func.isRequired,roomValue:l.string.isRequired,isRoomInput:l.bool.isRequired,setRoomValue:l.func.isRequired,dispatch:l.func.isRequired,user:l.object.isRequired,isLoading:l.bool.isRequired};var D={},Pe=M;Object.defineProperty(D,"__esModule",{value:!0});var G=D.default=void 0,_e=Pe(F()),$e=e;G=D.default=(0,_e.default)((0,$e.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm1 14h-2v-2h2zm0-4h-2V7h2z"}),"GppMaybe");var E={},De=M;Object.defineProperty(E,"__esModule",{value:!0});var H=E.default=void 0,Ee=De(F()),Ne=e;H=E.default=(0,Ee.default)((0,Ne.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"}),"VerifiedUser");function Oe(){const t=w(oe),p=w(le),n=w(W),u=w(re),[i,s]=g.useState(!1),[o,f]=g.useState((t==null?void 0:t.displayName)??""),[b,y]=g.useState(!1),[r,x]=g.useState(t!=null&&t.roomNumber?String(t==null?void 0:t.roomNumber):""),a=ce(),[h,I]=g.useState(()=>{const m=localStorage.getItem("timeLeft");return m?JSON.parse(m):60}),[S,q]=g.useState(()=>{const m=localStorage.getItem("isActive");return m?JSON.parse(m):!1});g.useEffect(()=>{if(!(t!=null&&t.emailVerified)){let m;return S&&h>0?m=setInterval(()=>{I(T=>T-1)},1e3):h===0&&(clearInterval(m),q(!1)),localStorage.setItem("timeLeft",JSON.stringify(h)),localStorage.setItem("isActive",JSON.stringify(S)),()=>clearInterval(m)}},[S,h,t==null?void 0:t.emailVerified]);const L=()=>{a(pe({setIsActive:q})),I(60)},K=()=>a(ue());return e.jsxs(je,{children:[e.jsx(de,{}),e.jsx(O,{user:t,language:n,isLoading:u,dispatch:a}),e.jsxs(ve,{children:[e.jsx(C,{elevation:2,children:e.jsx(V,{setIsLoginInput:s,loginValue:o,dispatch:a,setLoginValue:f,isLoginInput:i,user:t,isLoading:u})}),!(t!=null&&t.emailVerified)&&e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"caption",textAlign:"center",children:n==="en"?"Verify your email to have more opportunities":"Веріфікуй свій емейл щоб мати більше можливостей"}),h>0?e.jsx(c,{textAlign:"center",children:h}):e.jsx(k,{type:"button",size:"small",onClick:L,disabled:S||u,children:n==="en"?"to verify":"верифікувати"})]}),e.jsxs(C,{elevation:2,children:[e.jsxs(c,{children:[n==="en"?"Email:":"Пошта:"," ",e.jsx(c,{variant:"subtitle2",component:"span",children:t==null?void 0:t.email})]}),t!=null&&t.emailVerified?e.jsx(H,{color:"success"}):e.jsx(G,{color:"warning"})]}),e.jsx(C,{elevation:2,children:e.jsxs(c,{whiteSpace:"nowrap",children:["User ID:"," ",e.jsx(c,{variant:"subtitle2",component:"span",children:t==null?void 0:t.uid})]})}),e.jsx(C,{elevation:2,children:e.jsx(J,{isRoomInput:b,setIsRoomInput:y,roomValue:r,setRoomValue:x,dispatch:a,user:t,isLoading:u})}),e.jsx(C,{elevation:2,children:e.jsxs(c,{children:[n==="en"?"Role:":"Роль:"," ",e.jsx(c,{variant:"subtitle2",component:"span",color:"#008000",children:p.map((m,T,Q)=>Q.length===1||T===0?m.toLocaleUpperCase():` / ${m.toLocaleUpperCase()}`)})]})})]}),p.includes("superAdmin")&&e.jsx(B,{dispatch:a,isLoading:u,language:n}),e.jsx(k,{type:"button",variant:"contained",onClick:K,children:n==="en"?"Log out":"Вийти"})]})}export{Oe as default};
