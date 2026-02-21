import{s as h,B as b,P as R,u as I,b as L,j as e,T as c,I as v,ay as te,a as r,az as ne,r as j,aA as ie,a5 as S,aB as se,n as q,ar as ae,aC as oe,aD as F,a7 as re,aE as le,C as O,D as G,aF as ce,a1 as de,i as pe,t as ue,k as he,x as xe,H as me,aG as fe,aH as je,aI as ge}from"./index-g3C-6FES.js";import{d as W,a as z}from"./Edit-eSyEIFto.js";import{d as M}from"./Close-lRYKWM30.js";import{T as P}from"./TextField-B7uCxumX.js";import{C as E}from"./CircularProgress-XA_dRfC_.js";import{d as ve}from"./Delete-DeaUzJnL.js";import{F as be,I as ye}from"./OutlinedInput-C2Ov0Cd6.js";import{S as Re,M as we,I as V}from"./Select-JNCNnKZz.js";import"./FormHelperText-BQlGpvMZ.js";const Ie=h(b)`
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
`;function H({setIsLoginInput:t,loginValue:l,dispatch:n,setLoginValue:p,isLoginInput:i,user:o,isLoading:s}){const x=I(L),g=()=>{t(!0)},u=()=>{t(!1)},d=async()=>{await n(te({displayName:l,userId:o==null?void 0:o.uid,type:"updateDisplayName"})),l&&t(!1)},m=a=>{a.length<=30&&p(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[x==="en"?"Login:":"Логін:"," ",e.jsx(c,{variant:"subtitle2",component:"span",children:!i&&(o==null?void 0:o.displayName)})]}),!i&&e.jsx(v,{color:"info",onClick:g,disabled:s,children:e.jsx(W,{})}),i&&e.jsxs(ke,{children:[e.jsx(P,{value:l,onChange:a=>m(a.target.value),variant:"standard",helperText:"Max 30 characters",style:{minWidth:150}}),l.length>2&&e.jsxs(v,{color:"success",onClick:d,disabled:s,children:[!s&&e.jsx(z,{}),s&&e.jsx(E,{size:"20px"})]}),e.jsx(v,{color:"info",onClick:u,disabled:s,children:e.jsx(M,{})})]})]})}H.propTypes={setIsLoginInput:r.func.isRequired,loginValue:r.string.isRequired,dispatch:r.func.isRequired,setLoginValue:r.func.isRequired,isLoginInput:r.bool.isRequired,user:r.object.isRequired,isLoading:r.bool.isRequired};const qe=h(b)`
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
`,Te=h("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),Ee=h(b)`
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
`,De=h(b)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;function Y({user:t,language:l,isLoading:n,dispatch:p}){const[i,o]=j.useState(null),[s,x]=j.useState(null),g=async()=>{!i.file||!t.uid||(await p(ie({data:i.file,setLoadingProgress:x,id:t.uid})),o(null))},u=()=>{o(null)},d=async m=>{o(null),x(null);const a=m.target.files[0],C=5*1024*1024;if(!a){o(null);return}if((a==null?void 0:a.size)>C){S("info",l==="en"?"The image must not exceed 5 MB":"Зображення має бути не більше 5 Мб");return}const y=URL.createObjectURL(a);o({preview:y,file:a})};return e.jsxs(qe,{src:i!=null&&i.preview?i.preview:t==null?void 0:t.photoURL,children:[e.jsx(Ae,{children:!i&&e.jsxs(v,{color:"info",component:"label",disabled:n,children:[e.jsx(W,{}),e.jsx(Te,{type:"file",onChange:m=>d(m),accept:".png, .jpg, .jpeg"})]})}),i&&e.jsxs(Se,{children:[e.jsxs(v,{color:"success",type:"button",disabled:n,onClick:g,children:[!n&&e.jsx(z,{}),n&&e.jsx(E,{size:"20px"})]}),e.jsx(v,{color:"info",type:"button",onClick:u,sx:{ml:1},disabled:n,children:e.jsx(M,{})})]}),i&&e.jsxs(Ee,{children:[e.jsx(E,{variant:"determinate",value:s??0}),e.jsx(De,{children:e.jsx(c,{variant:"caption",component:"div",color:"text.secondary",children:`${Math.round(s??0)}%`})})]})]})}Y.propTypes={user:r.object.isRequired,language:r.string.isRequired,isLoading:r.bool.isRequired,dispatch:r.func.isRequired};const Le=h(R)`
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
`,ze=h(b)`
  position: absolute;
  top: 5px;
  right: 5px;
`,Me=h(R)`
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
`,N=[...Object.values(re).slice(0,-3),"superAdmin","admin"];function K({dispatch:t,isLoading:l}){const[n,p]=j.useState("admin"),[i,o]=j.useState(""),s=I(se),x=()=>{t(oe(N))},g=d=>{t(F({type:"delete",userId:d}))},u=d=>{d.preventDefault(),!(!n||!i||i===""||n==="")&&t(F({userId:i.includes("@")?null:i,role:n,email:i.includes("@")?i:null,type:"add"}))};return e.jsx(e.Fragment,{children:e.jsxs(Le,{children:[e.jsx(b,{children:e.jsx(q,{type:"button",disabled:l,variant:"contained",onClick:x,children:"Fetch admins"})}),e.jsx(We,{children:(s==null?void 0:s.length)>0&&(s==null?void 0:s.map(({email:d,role:m,userId:a,displayName:C,_id:y})=>{if(!(m.includes("viewer")&&m.length===1))return e.jsxs(Me,{elevation:3,children:[e.jsx(ze,{children:e.jsx(v,{size:"small",color:"error",onClick:()=>g(y),children:e.jsx(ve,{fontSize:"small"})})}),e.jsxs(c,{variant:"subtitle2",children:["ROLE:",m.map((T,$,D)=>D.length>1?` ${T} /`:` ${T} `)]}),e.jsxs(c,{variant:"subtitle2",children:["ID: ",a]}),e.jsxs(c,{variant:"subtitle2",children:["Email: ",d]}),e.jsxs(c,{variant:"subtitle2",children:["Login: ",C]})]},y)}))}),e.jsx(R,{elevation:2,sx:{p:"20px",width:"100%"},children:e.jsxs(Pe,{onSubmit:u,children:[e.jsx(R,{elevation:3,sx:{p:"20px",width:"100%"},children:e.jsx(c,{textAlign:"center",color:"#FFD700",children:"Add Email or ID"})}),e.jsxs(_e,{elevation:3,children:[e.jsxs(be,{fullWidth:!0,children:[e.jsx(ye,{children:"Roles"}),e.jsx(Re,{value:n,label:"Roles",onChange:d=>p(d.target.value),children:N.map(d=>e.jsx(we,{value:d,children:d},ae()))})]}),e.jsx(P,{fullWidth:!0,sx:{mt:2},label:"Email or ID",value:i,onChange:d=>o(d.target.value)}),e.jsx(q,{type:"submit",disabled:l,children:"Submit"})]})]})})]})})}K.propTypes={isLoading:r.bool.isRequired,dispatch:r.func.isRequired,language:r.string.isRequired};const Ue=h(b)`
  display: flex;
  gap: 10px;
  align-items: center;
`;function J({isRoomInput:t,setIsRoomInput:l,roomValue:n,setRoomValue:p,dispatch:i,user:o,isLoading:s}){const x=I(L),g=()=>{l(!0)},u=()=>{l(!1)},d=async()=>{await i(le({id:o.uid,roomNumber:n})),n&&l(!1)},m=a=>{a.length<=20&&p(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[x==="en"?"Room:":"Кімніта:"," ",!(o!=null&&o.roomNumber)&&!t&&e.jsx(c,{variant:"caption",component:"span",children:x==="en"?"Enter your room number":"Введіть номер вашої кімнати"}),e.jsx(c,{variant:"subtitle2",component:"span",children:!t&&(o==null?void 0:o.roomNumber)})]}),!t&&e.jsx(v,{color:"info",onClick:g,disabled:s,children:e.jsx(W,{})}),t&&e.jsxs(Ue,{children:[e.jsx(P,{value:n,onChange:a=>m(a.target.value),variant:"standard",helperText:"Max 20 characters",style:{minWidth:150}}),n.length>0&&e.jsxs(v,{color:"success",onClick:d,disabled:s,children:[!s&&e.jsx(z,{}),s&&e.jsx(E,{size:"20px"})]}),e.jsx(v,{color:"info",onClick:u,disabled:s,children:e.jsx(M,{})})]})]})}J.propTypes={setIsRoomInput:r.func.isRequired,roomValue:r.string.isRequired,isRoomInput:r.bool.isRequired,setRoomValue:r.func.isRequired,dispatch:r.func.isRequired,user:r.object.isRequired,isLoading:r.bool.isRequired};var _={},$e=O;Object.defineProperty(_,"__esModule",{value:!0});var Q=_.default=void 0,Fe=$e(G()),Ve=e;Q=_.default=(0,Fe.default)((0,Ve.jsx)("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm1 14h-2v-2h2zm0-4h-2V7h2z"}),"GppMaybe");var U={},Ne=O;Object.defineProperty(U,"__esModule",{value:!0});var X=U.default=void 0,Be=Ne(G()),Oe=e;X=U.default=(0,Be.default)((0,Oe.jsx)("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"}),"VerifiedUser");const Z=({user:t,language:l,isLoading:n,dispatch:p})=>{const[i,o]=j.useState(""),[s,x]=j.useState(""),g=async()=>{if(!i||!s)return;const u=await p(ce({email:i.trim(),password:s.trim(),userId:t==null?void 0:t.uid}));u.meta.requestStatus==="fulfilled"?S("success",l==="en"?"Account deleted successfully!":"Обліковий запис успішно видалено!"):S("error",l==="en"?"Error when deleting the account: "+u.payload:"Помилка при видаленні облікового запису: "+u.payload)};return e.jsxs(R,{sx:{display:"flex",flexDirection:"column",gap:"20px",p:"20px",width:"100%",maxWidth:"600px"},children:[e.jsx(c,{variant:"h6",children:l==="en"?"Deleting an account":"Видалення облікового запису"}),e.jsx(V,{type:"email",placeholder:l==="en"?"Your email":"Ваш email",value:i,onChange:u=>o(u.target.value)}),e.jsx(V,{type:"password",placeholder:l==="en"?"Your password":"Ваш пароль",value:s,onChange:u=>x(u.target.value)}),e.jsx(q,{disabled:n,variant:"contained",onClick:g,children:l==="en"?"Delete account":"Видалити акаунт"})]})};Z.propTypes={user:r.object.isRequired,language:r.string.isRequired,isLoading:r.bool.isRequired,dispatch:r.func.isRequired};const B="requestCooldown";function tt(){const t=I(de),l=I(pe),n=I(L),p=I(ue),[i,o]=j.useState(!1),[s,x]=j.useState((t==null?void 0:t.displayName)??""),[g,u]=j.useState(!1),[d,m]=j.useState(t!=null&&t.roomNumber?String(t==null?void 0:t.roomNumber):""),a=he(),[C,y]=j.useState(0);j.useEffect(()=>{const f=localStorage.getItem(B);if(f){const w=Math.max(0,parseInt(f,10)-Date.now());if(w>0){y(Math.ceil(w/1e3));const k=setInterval(()=>{y(ee=>Math.max(0,ee-1))},1e3);return()=>clearInterval(k)}}},[]);const T=async()=>{const f=me.currentUser;if(f)try{await f.reload(),f.emailVerified?(a(fe()),S("success",n==="en"?"Email is verified!":"Електронна пошта перевірена!")):S("warning",n==="en"?"Email is not verified!":"Електронна пошта не перевірена!")}catch(w){console.log(w)}},$=()=>{a(je());const f=Date.now()+60*1e3;localStorage.setItem(B,f),y(60);const w=setInterval(()=>{y(k=>k<=1?(clearInterval(w),0):k-1)},1e3)},D=()=>a(ge());return e.jsxs(Ie,{children:[e.jsx(xe,{}),e.jsx(Y,{user:t,language:n,isLoading:p,dispatch:a}),e.jsxs(Ce,{children:[e.jsx(A,{elevation:2,children:e.jsx(H,{setIsLoginInput:o,loginValue:s,dispatch:a,setLoginValue:x,isLoginInput:i,user:t,isLoading:p})}),!(t!=null&&t.emailVerified)&&e.jsxs(e.Fragment,{children:[e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"caption",textAlign:"center",children:n==="en"?"Verify your email to have more opportunities":"Веріфікуй свій емейл щоб мати більше можливостей"}),e.jsx(c,{variant:"caption",textAlign:"center",children:n==="en"?"If you have already verified, refresh the page or click the button":"Якщо ви вже верифікувалися, оновіть сторінку або натисніть кнопку"}),e.jsx(q,{type:"button",size:"small",onClick:T,disabled:p,children:n==="en"?"verification check":"перевірка верифікації"})]}),C>0?e.jsx(c,{textAlign:"center",children:C}):e.jsx(q,{type:"button",size:"small",onClick:$,disabled:p,children:n==="en"?"to verify":"верифікувати"})]}),e.jsxs(A,{elevation:2,children:[e.jsxs(c,{children:[n==="en"?"Email:":"Пошта:"," ",e.jsx(c,{variant:"subtitle2",component:"span",children:t==null?void 0:t.email})]}),t!=null&&t.emailVerified?e.jsx(X,{color:"success"}):e.jsx(Q,{color:"warning"})]}),e.jsx(A,{elevation:2,children:e.jsxs(c,{whiteSpace:"nowrap",children:["User ID:"," ",e.jsx(c,{variant:"subtitle2",component:"span",children:t==null?void 0:t.uid})]})}),e.jsx(A,{elevation:2,children:e.jsx(J,{isRoomInput:g,setIsRoomInput:u,roomValue:d,setRoomValue:m,dispatch:a,user:t,isLoading:p})}),e.jsx(A,{elevation:2,children:e.jsxs(c,{children:[n==="en"?"Role:":"Роль:"," ",e.jsx(c,{variant:"subtitle2",component:"span",color:"#008000",children:l.map((f,w,k)=>k.length===1||w===0?f.toLocaleUpperCase():` / ${f.toLocaleUpperCase()}`)})]})})]}),l.includes("superAdmin")&&e.jsx(K,{dispatch:a,isLoading:p,language:n}),e.jsx(q,{type:"button",variant:"contained",onClick:D,children:n==="en"?"Log out":"Вийти"}),e.jsx(Z,{language:n,user:t,isLoading:p,dispatch:a})]})}export{tt as default};
