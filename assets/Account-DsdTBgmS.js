import{s as c,B as g,q as R,u as w,a as q,j as e,T as p,I as m,t as B,P as l,v as M,r as y,w as O,x as _,y as H,z as V,A as G,C as J,D,E as K,F as Q,G as X,c as Y,b as Z,H as ee}from"./index-uB1hKxyu.js";import{d as S,T,a as W,C as I,b as L,c as ne,S as te,M as se}from"./Close-BavsOkOJ.js";import{F as ie,I as oe,A as ae}from"./AlertComponent-wIZL7yqq.js";import{B as k}from"./Button-D-lKcW9t.js";const le=c(g)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`,re=c(R)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`,C=c(R)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,ce=c(g)`
  display: flex;
  gap: 10px;
  align-items: center;
`;function U({setIsLoginInput:n,loginValue:d,dispatch:s,setLoginValue:x,isLoginInput:t,user:a,isLoading:i}){const h=w(q),j=()=>{n(!0)},f=()=>{n(!1)},r=async()=>{await s(B({displayName:d,userId:a==null?void 0:a.uid,type:"updateDisplayName"})),d&&n(!1)},u=o=>{o.length<=30&&x(o)};return e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[h==="en"?"Login:":"Логін:"," ",e.jsx(p,{variant:"subtitle2",component:"span",children:!t&&(a==null?void 0:a.displayName)})]}),!t&&e.jsx(m,{color:"info",onClick:j,disabled:i,children:e.jsx(S,{})}),t&&e.jsxs(ce,{children:[e.jsx(T,{value:d,onChange:o=>u(o.target.value),variant:"standard",helperText:"Max 30 characters",style:{minWidth:150}}),d.length>2&&e.jsxs(m,{color:"success",onClick:r,disabled:i,children:[!i&&e.jsx(W,{}),i&&e.jsx(I,{size:"20px"})]}),e.jsx(m,{color:"info",onClick:f,disabled:i,children:e.jsx(L,{})})]})]})}U.propTypes={setIsLoginInput:l.func.isRequired,loginValue:l.string.isRequired,dispatch:l.func.isRequired,setLoginValue:l.func.isRequired,isLoginInput:l.bool.isRequired,user:l.object.isRequired,isLoading:l.bool.isRequired};const de=c(g)`
  position: relative;
  background-image: ${({src:n})=>`url(${n||M})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 200px;
  min-height: 200px;
  border-radius: 50%;
`,pe=c(g)`
  position: absolute;
  bottom: 0px;
  right: -20px;
`,ue=c(g)`
  position: absolute;
  bottom: 0px;
  right: -65px;
`,xe=c("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),he=c(g)`
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
`,me=c(g)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;function $({user:n,language:d,isLoading:s,dispatch:x}){const[t,a]=y.useState(null),[i,h]=y.useState(null),j=async()=>{!t.file||!n.uid||(await x(O({data:t.file,setLoadingProgress:h,id:n.uid})),a(null))},f=()=>{a(null)},r=async u=>{a(null),h(null);const o=u.target.files[0],b=5*1024*1024;if(!o){a(null);return}if((o==null?void 0:o.size)>b){_("info",d==="en"?"The image must not exceed 5 MB":"Зображення має бути не більше 5 Мб");return}const v=URL.createObjectURL(o);a({preview:v,file:o})};return e.jsxs(de,{src:t!=null&&t.preview?t.preview:n==null?void 0:n.photoURL,children:[e.jsx(pe,{children:!t&&e.jsxs(m,{color:"info",component:"label",disabled:s,children:[e.jsx(S,{}),e.jsx(xe,{type:"file",onChange:u=>r(u),accept:".png, .jpg, .jpeg"})]})}),t&&e.jsxs(ue,{children:[e.jsxs(m,{color:"success",type:"button",disabled:s,onClick:j,children:[!s&&e.jsx(W,{}),s&&e.jsx(I,{size:"20px"})]}),e.jsx(m,{color:"info",type:"button",onClick:f,sx:{ml:1},disabled:s,children:e.jsx(L,{})})]}),t&&e.jsxs(he,{children:[e.jsx(I,{variant:"determinate",value:i??0}),e.jsx(me,{children:e.jsx(p,{variant:"caption",component:"div",color:"text.secondary",children:`${Math.round(i??0)}%`})})]})]})}$.propTypes={user:l.object.isRequired,language:l.string.isRequired,isLoading:l.bool.isRequired,dispatch:l.func.isRequired};const ge=c(R)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
`,je=c(R)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,fe=c(g)`
  position: absolute;
  top: 5px;
  right: 5px;
`,be=c(R)`
  position: relative;
  overflow: auto;
  scrollbar-width: thin;
  padding: 20px;
  gap: 20px;
`,ve=c("form")`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`,ye=c(R)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  gap: 20px;
`,F=[...Object.values(G).slice(0,-3),"superAdmin","admin"];function z({dispatch:n,isLoading:d}){const[s,x]=y.useState("admin"),[t,a]=y.useState(""),i=w(H),h=()=>{n(J(F))},j=r=>{n(D({type:"delete",userId:r}))},f=r=>{r.preventDefault(),!(!s||!t||t===""||s==="")&&n(D({userId:t.includes("@")?null:t,role:s,email:t.includes("@")?t:null,type:"add"}))};return e.jsx(e.Fragment,{children:e.jsxs(ge,{children:[e.jsx(g,{children:e.jsx(k,{type:"button",disabled:d,variant:"contained",onClick:h,children:"Fetch admins"})}),e.jsx(je,{children:(i==null?void 0:i.length)>0&&(i==null?void 0:i.map(({email:r,role:u,userId:o,displayName:b,_id:v})=>{if(!(u.includes("viewer")&&u.length===1))return e.jsxs(be,{elevation:3,children:[e.jsx(fe,{children:e.jsx(m,{size:"small",color:"error",onClick:()=>j(v),children:e.jsx(ne,{fontSize:"small"})})}),e.jsxs(p,{variant:"subtitle2",children:["ROLE:",u.map((A,P,N)=>N.length>1?` ${A} /`:` ${A} `)]}),e.jsxs(p,{variant:"subtitle2",children:["ID: ",o]}),e.jsxs(p,{variant:"subtitle2",children:["Email: ",r]}),e.jsxs(p,{variant:"subtitle2",children:["Login: ",b]})]},v)}))}),e.jsx(R,{elevation:2,sx:{p:"20px",width:"100%"},children:e.jsxs(ve,{onSubmit:f,children:[e.jsx(R,{elevation:3,sx:{p:"20px",width:"100%"},children:e.jsx(p,{textAlign:"center",color:"#FFD700",children:"Add Email or ID"})}),e.jsxs(ye,{elevation:3,children:[e.jsxs(ie,{fullWidth:!0,children:[e.jsx(oe,{children:"Roles"}),e.jsx(te,{value:s,label:"Roles",onChange:r=>x(r.target.value),children:F.map(r=>e.jsx(se,{value:r,children:r},V()))})]}),e.jsx(T,{fullWidth:!0,sx:{mt:2},label:"Email or ID",value:t,onChange:r=>a(r.target.value)}),e.jsx(k,{type:"submit",disabled:d,children:"Submit"})]})]})})]})})}z.propTypes={isLoading:l.bool.isRequired,dispatch:l.func.isRequired,language:l.string.isRequired};const Re=c(g)`
  display: flex;
  gap: 10px;
  align-items: center;
`;function E({isRoomInput:n,setIsRoomInput:d,roomValue:s,setRoomValue:x,dispatch:t,user:a,isLoading:i}){const h=w(q),j=()=>{d(!0)},f=()=>{d(!1)},r=async()=>{await t(K({id:a.uid,roomNumber:Number(s)})),s&&d(!1)},u=o=>{const b=o.replace(/\D/g,"");b.length<=5&&x(b)};return console.log(a),e.jsxs(e.Fragment,{children:[e.jsxs(p,{children:[h==="en"?"Room:":"Кімніта:"," ",e.jsx(p,{variant:"subtitle2",component:"span",children:!n&&(a==null?void 0:a.roomNumber)})]}),!n&&e.jsx(m,{color:"info",onClick:j,disabled:i,children:e.jsx(S,{})}),n&&e.jsxs(Re,{children:[e.jsx(T,{value:s,onChange:o=>u(o.target.value),variant:"standard",helperText:"Max 5 characters",style:{minWidth:150}}),s.length>0&&e.jsxs(m,{color:"success",onClick:r,disabled:i,children:[!i&&e.jsx(W,{}),i&&e.jsx(I,{size:"20px"})]}),e.jsx(m,{color:"info",onClick:f,disabled:i,children:e.jsx(L,{})})]})]})}E.propTypes={setIsRoomInput:l.func.isRequired,roomValue:l.string.isRequired,isRoomInput:l.bool.isRequired,setRoomValue:l.func.isRequired,dispatch:l.func.isRequired,user:l.object.isRequired,isLoading:l.bool.isRequired};function ke(){const n=w(Q),d=w(X),s=w(q),x=w(Y),[t,a]=y.useState(!1),[i,h]=y.useState((n==null?void 0:n.displayName)??""),[j,f]=y.useState(!1),[r,u]=y.useState(n!=null&&n.roomNumber?String(n==null?void 0:n.roomNumber):""),o=Z(),b=()=>o(ee());return e.jsxs(le,{children:[e.jsx(ae,{}),e.jsx($,{user:n,language:s,isLoading:x,dispatch:o}),e.jsxs(re,{children:[e.jsx(C,{elevation:2,children:e.jsx(U,{setIsLoginInput:a,loginValue:i,dispatch:o,setLoginValue:h,isLoginInput:t,user:n,isLoading:x})}),e.jsx(C,{elevation:2,children:e.jsxs(p,{children:[s==="en"?"Email:":"Пошта:"," ",e.jsx(p,{variant:"subtitle2",component:"span",children:n==null?void 0:n.email})]})}),e.jsx(C,{elevation:2,children:e.jsxs(p,{whiteSpace:"nowrap",children:["User ID:"," ",e.jsx(p,{variant:"subtitle2",component:"span",children:n==null?void 0:n.uid})]})}),e.jsx(C,{elevation:2,children:e.jsx(E,{isRoomInput:j,setIsRoomInput:f,roomValue:r,setRoomValue:u,dispatch:o,user:n,isLoading:x})}),e.jsx(C,{elevation:2,children:e.jsxs(p,{children:[s==="en"?"Role:":"Роль:"," ",e.jsx(p,{variant:"subtitle2",component:"span",color:"#008000",children:d.map((v,A,P)=>P.length===1||A===0?v.toLocaleUpperCase():` / ${v.toLocaleUpperCase()}`)})]})})]}),d.includes("superAdmin")&&e.jsx(z,{dispatch:o,isLoading:x,language:s}),e.jsx(k,{type:"button",variant:"contained",onClick:b,children:s==="en"?"Log out":"Вийти"})]})}export{ke as default};
