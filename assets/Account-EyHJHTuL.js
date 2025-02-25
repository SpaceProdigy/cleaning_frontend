import{s as h,B as b,q as R,u as C,a as L,j as e,T as c,I as v,t as te,P as l,v as ne,r as j,w as ie,x as S,y as se,z as ae,C as oe,D as le,E as F,F as re,i as O,k as G,G as ce,H as de,J as pe,c as ue,b as he,A as xe,o as me,K as fe,L as je,M as ge}from"./index-D466n0lN.js";import{d as W,T as M,a as z,b as P,c as ve,S as be,M as ye,I as V}from"./Close-DZqpd8BB.js";import{C as D,F as we,I as Re}from"./OutlinedInput-BRQv3ESJ.js";import{B as q}from"./Button-CGB-Z9KI.js";const Ie=h(b)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`,Ce=h(R)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`,A=h(R)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,ke=h(b)`
  display: flex;
  gap: 10px;
  align-items: center;
`;function Y({setIsLoginInput:t,loginValue:r,dispatch:n,setLoginValue:p,isLoginInput:i,user:a,isLoading:s}){const x=C(L),g=()=>{t(!0)},u=()=>{t(!1)},d=async()=>{await n(te({displayName:r,userId:a==null?void 0:a.uid,type:"updateDisplayName"})),r&&t(!1)},m=o=>{o.length<=30&&p(o)};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[x==="en"?"Login:":"Логін:"," ",e.jsx(c,{variant:"subtitle2",component:"span",children:!i&&(a==null?void 0:a.displayName)})]}),!i&&e.jsx(v,{color:"info",onClick:g,disabled:s,children:e.jsx(W,{})}),i&&e.jsxs(ke,{children:[e.jsx(M,{value:r,onChange:o=>m(o.target.value),variant:"standard",helperText:"Max 30 characters",style:{minWidth:150}}),r.length>2&&e.jsxs(v,{color:"success",onClick:d,disabled:s,children:[!s&&e.jsx(z,{}),s&&e.jsx(D,{size:"20px"})]}),e.jsx(v,{color:"info",onClick:u,disabled:s,children:e.jsx(P,{})})]})]})}Y.propTypes={setIsLoginInput:l.func.isRequired,loginValue:l.string.isRequired,dispatch:l.func.isRequired,setLoginValue:l.func.isRequired,isLoginInput:l.bool.isRequired,user:l.object.isRequired,isLoading:l.bool.isRequired};const qe=h(b)`
  position: relative;
  background-image: ${({src:t})=>`url(${t||ne})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
`,Ae=h(b)`
  position: absolute;
  bottom: 0px;
  right: -20px;
`,Se=h(b)`
  position: absolute;
  bottom: 0px;
  right: -65px;
`,Te=h("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),De=h(b)`
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
`,Ee=h(b)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;function H({user:t,language:r,isLoading:n,dispatch:p}){const[i,a]=j.useState(null),[s,x]=j.useState(null),g=async()=>{!i.file||!t.uid||(await p(ie({data:i.file,setLoadingProgress:x,id:t.uid})),a(null))},u=()=>{a(null)},d=async m=>{a(null),x(null);const o=m.target.files[0],y=5*1024*1024;if(!o){a(null);return}if((o==null?void 0:o.size)>y){S("info",r==="en"?"The image must not exceed 5 MB":"Зображення має бути не більше 5 Мб");return}const w=URL.createObjectURL(o);a({preview:w,file:o})};return e.jsxs(qe,{src:i!=null&&i.preview?i.preview:t==null?void 0:t.photoURL,children:[e.jsx(Ae,{children:!i&&e.jsxs(v,{color:"info",component:"label",disabled:n,children:[e.jsx(W,{}),e.jsx(Te,{type:"file",onChange:m=>d(m),accept:".png, .jpg, .jpeg"})]})}),i&&e.jsxs(Se,{children:[e.jsxs(v,{color:"success",type:"button",disabled:n,onClick:g,children:[!n&&e.jsx(z,{}),n&&e.jsx(D,{size:"20px"})]}),e.jsx(v,{color:"info",type:"button",onClick:u,sx:{ml:1},disabled:n,children:e.jsx(P,{})})]}),i&&e.jsxs(De,{children:[e.jsx(D,{variant:"determinate",value:s??0}),e.jsx(Ee,{children:e.jsx(c,{variant:"caption",component:"div",color:"text.secondary",children:`${Math.round(s??0)}%`})})]})]})}H.propTypes={user:l.object.isRequired,language:l.string.isRequired,isLoading:l.bool.isRequired,dispatch:l.func.isRequired};const Le=h(R)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`,We=h(R)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,Me=h(b)`
  position: absolute;
  top: 5px;
  right: 5px;
`,ze=h(R)`
  position: relative;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,Pe=h("form")`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`,_e=h(R)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  gap: 20px;
`,N=[...Object.values(oe).slice(0,-3),"superAdmin","admin"];function K({dispatch:t,isLoading:r}){const[n,p]=j.useState("admin"),[i,a]=j.useState(""),s=C(se),x=()=>{t(le(N))},g=d=>{t(F({type:"delete",userId:d}))},u=d=>{d.preventDefault(),!(!n||!i||i===""||n==="")&&t(F({userId:i.includes("@")?null:i,role:n,email:i.includes("@")?i:null,type:"add"}))};return e.jsx(e.Fragment,{children:e.jsxs(Le,{children:[e.jsx(b,{children:e.jsx(q,{type:"button",disabled:r,variant:"contained",onClick:x,children:"Fetch admins"})}),e.jsx(We,{children:(s==null?void 0:s.length)>0&&(s==null?void 0:s.map(({email:d,role:m,userId:o,displayName:y,_id:w})=>{if(!(m.includes("viewer")&&m.length===1))return e.jsxs(ze,{elevation:3,children:[e.jsx(Me,{children:e.jsx(v,{size:"small",color:"error",onClick:()=>g(w),children:e.jsx(ve,{fontSize:"small"})})}),e.jsxs(c,{variant:"subtitle2",children:["ROLE:",m.map((T,U,E)=>E.length>1?` ${T} /`:` ${T} `)]}),e.jsxs(c,{variant:"subtitle2",children:["ID: ",o]}),e.jsxs(c,{variant:"subtitle2",children:["Email: ",d]}),e.jsxs(c,{variant:"subtitle2",children:["Login: ",y]})]},w)}))}),e.jsx(R,{elevation:2,sx:{p:"20px",width:"100%"},children:e.jsxs(Pe,{onSubmit:u,children:[e.jsx(R,{elevation:3,sx:{p:"20px",width:"100%"},children:e.jsx(c,{textAlign:"center",color:"#FFD700",children:"Add Email or ID"})}),e.jsxs(_e,{elevation:3,children:[e.jsxs(we,{fullWidth:!0,children:[e.jsx(Re,{children:"Roles"}),e.jsx(be,{value:n,label:"Roles",onChange:d=>p(d.target.value),children:N.map(d=>e.jsx(ye,{value:d,children:d},ae()))})]}),e.jsx(M,{fullWidth:!0,sx:{mt:2},label:"Email or ID",value:i,onChange:d=>a(d.target.value)}),e.jsx(q,{type:"submit",disabled:r,children:"Submit"})]})]})})]})})}K.propTypes={isLoading:l.bool.isRequired,dispatch:l.func.isRequired,language:l.string.isRequired};const $e=h(b)`
  display: flex;
  gap: 10px;
  align-items: center;
`;function J({isRoomInput:t,setIsRoomInput:r,roomValue:n,setRoomValue:p,dispatch:i,user:a,isLoading:s}){const x=C(L),g=()=>{r(!0)},u=()=>{r(!1)},d=async()=>{await i(re({id:a.uid,roomNumber:Number(n)})),n&&r(!1)},m=o=>{const y=o.replace(/\D/g,"");y.length<=5&&p(y)};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[x==="en"?"Room:":"Кімніта:"," ",!(a!=null&&a.roomNumber)&&!t&&e.jsx(c,{variant:"caption",component:"span",children:x==="en"?"Enter your room number":"Введіть номер вашої кімнати"}),e.jsx(c,{variant:"subtitle2",component:"span",children:!t&&(a==null?void 0:a.roomNumber)})]}),!t&&e.jsx(v,{color:"info",onClick:g,disabled:s,children:e.jsx(W,{})}),t&&e.jsxs($e,{children:[e.jsx(M,{value:n,onChange:o=>m(o.target.value),variant:"standard",helperText:"Max 5 characters",style:{minWidth:150}}),n.length>0&&e.jsxs(v,{color:"success",onClick:d,disabled:s,children:[!s&&e.jsx(z,{}),s&&e.jsx(D,{size:"20px"})]}),e.jsx(v,{color:"info",onClick:u,disabled:s,children:e.jsx(P,{})})]})]})}J.propTypes={setIsRoomInput:l.func.isRequired,roomValue:l.string.isRequired,isRoomInput:l.bool.isRequired,setRoomValue:l.func.isRequired,dispatch:l.func.isRequired,user:l.object.isRequired,isLoading:l.bool.isRequired};var _={},Ue=G;Object.defineProperty(_,"__esModule",{value:!0});var Q=_.default=void 0,Fe=Ue(O()),Ve=e;Q=_.default=(0,Fe.default)((0,Ve.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm1 14h-2v-2h2zm0-4h-2V7h2z"}),"GppMaybe");var $={},Ne=G;Object.defineProperty($,"__esModule",{value:!0});var X=$.default=void 0,Be=Ne(O()),Oe=e;X=$.default=(0,Be.default)((0,Oe.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"}),"VerifiedUser");const Z=({user:t,language:r,isLoading:n,dispatch:p})=>{const[i,a]=j.useState(""),[s,x]=j.useState(""),g=async()=>{if(!i||!s)return;const u=await p(ce({email:i.trim(),password:s.trim(),userId:t==null?void 0:t.uid}));u.meta.requestStatus==="fulfilled"?S("success",r==="en"?"Account deleted successfully!":"Обліковий запис успішно видалено!"):S("error",r==="en"?"Error when deleting the account: "+u.payload:"Помилка при видаленні облікового запису: "+u.payload)};return e.jsxs(R,{sx:{display:"flex",flexDirection:"column",gap:"20px",p:"20px",width:"100%",maxWidth:"600px"},children:[e.jsx(c,{variant:"h6",children:r==="en"?"Deleting an account":"Видалення облікового запису"}),e.jsx(V,{type:"email",placeholder:r==="en"?"Your email":"Ваш email",value:i,onChange:u=>a(u.target.value)}),e.jsx(V,{type:"password",placeholder:r==="en"?"Your password":"Ваш пароль",value:s,onChange:u=>x(u.target.value)}),e.jsx(q,{disabled:n,variant:"contained",onClick:g,children:r==="en"?"Delete account":"Видалити акаунт"})]})},Ge=Z;Z.propTypes={user:l.object.isRequired,language:l.string.isRequired,isLoading:l.bool.isRequired,dispatch:l.func.isRequired};const B="requestCooldown";function Qe(){const t=C(de),r=C(pe),n=C(L),p=C(ue),[i,a]=j.useState(!1),[s,x]=j.useState((t==null?void 0:t.displayName)??""),[g,u]=j.useState(!1),[d,m]=j.useState(t!=null&&t.roomNumber?String(t==null?void 0:t.roomNumber):""),o=he(),[y,w]=j.useState(0);j.useEffect(()=>{const f=localStorage.getItem(B);if(f){const I=Math.max(0,parseInt(f,10)-Date.now());if(I>0){w(Math.ceil(I/1e3));const k=setInterval(()=>{w(ee=>Math.max(0,ee-1))},1e3);return()=>clearInterval(k)}}},[]);const T=async()=>{const f=me.currentUser;if(f)try{await f.reload(),f.emailVerified?(o(fe()),S("success",n==="en"?"Email is verified!":"Електронна пошта перевірена!")):S("warning",n==="en"?"Email is not verified!":"Електронна пошта не перевірена!")}catch(I){console.log(I)}},U=()=>{o(je());const f=Date.now()+60*1e3;localStorage.setItem(B,f),w(60);const I=setInterval(()=>{w(k=>k<=1?(clearInterval(I),0):k-1)},1e3)},E=()=>o(ge());return e.jsxs(Ie,{children:[e.jsx(xe,{}),e.jsx(H,{user:t,language:n,isLoading:p,dispatch:o}),e.jsxs(Ce,{children:[e.jsx(A,{elevation:2,children:e.jsx(Y,{setIsLoginInput:a,loginValue:s,dispatch:o,setLoginValue:x,isLoginInput:i,user:t,isLoading:p})}),!(t!=null&&t.emailVerified)&&e.jsxs(e.Fragment,{children:[e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"caption",textAlign:"center",children:n==="en"?"Verify your email to have more opportunities":"Веріфікуй свій емейл щоб мати більше можливостей"}),e.jsx(c,{variant:"caption",textAlign:"center",children:n==="en"?"If you have already verified, refresh the page or click the button":"Якщо ви вже верифікувалися, оновіть сторінку або натисніть кнопку"}),e.jsx(q,{type:"button",size:"small",onClick:T,disabled:p,children:n==="en"?"verification check":"перевірка верифікації"})]}),y>0?e.jsx(c,{textAlign:"center",children:y}):e.jsx(q,{type:"button",size:"small",onClick:U,disabled:p,children:n==="en"?"to verify":"верифікувати"})]}),e.jsxs(A,{elevation:2,children:[e.jsxs(c,{children:[n==="en"?"Email:":"Пошта:"," ",e.jsx(c,{variant:"subtitle2",component:"span",children:t==null?void 0:t.email})]}),t!=null&&t.emailVerified?e.jsx(X,{color:"success"}):e.jsx(Q,{color:"warning"})]}),e.jsx(A,{elevation:2,children:e.jsxs(c,{whiteSpace:"nowrap",children:["User ID:"," ",e.jsx(c,{variant:"subtitle2",component:"span",children:t==null?void 0:t.uid})]})}),e.jsx(A,{elevation:2,children:e.jsx(J,{isRoomInput:g,setIsRoomInput:u,roomValue:d,setRoomValue:m,dispatch:o,user:t,isLoading:p})}),e.jsx(A,{elevation:2,children:e.jsxs(c,{children:[n==="en"?"Role:":"Роль:"," ",e.jsx(c,{variant:"subtitle2",component:"span",color:"#008000",children:r.map((f,I,k)=>k.length===1||I===0?f.toLocaleUpperCase():` / ${f.toLocaleUpperCase()}`)})]})})]}),r.includes("superAdmin")&&e.jsx(K,{dispatch:o,isLoading:p,language:n}),e.jsx(q,{type:"button",variant:"contained",onClick:E,children:n==="en"?"Log out":"Вийти"}),e.jsx(Ge,{language:n,user:t,isLoading:p,dispatch:o})]})}export{Qe as default};
