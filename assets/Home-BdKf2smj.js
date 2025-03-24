import{s as c,P as A,B as d,j as e,N as B,T as i,d as R,a as w,u as g,b as M,r as o,c as z,e as D,f as E,g as F,h as L,I as P,i as H,k as N,l as O,M as U}from"./index-DZqmov2c.js";import{W as Y,H as $,a as q,P as V,I as y,b as G,c as J}from"./PostFileUploader-DJricg8n.js";import{R as K}from"./errorMessages-CYb212sU.js";import{I as Q,d as X,a as Z,b as _}from"./Favorite-D7IwhELG.js";import{L as ee}from"./Like-Bpjq5rAG.js";import{U as se}from"./UniversalReactMarkdown-D2b1bHUs.js";import{C as te}from"./CircularProgress-BtArD_Hv.js";import"./index.esm-CKXPfhAf.js";import"./OutlinedInput-CDKzLIDc.js";import"./Select-DbroyZlY.js";import"./Close-BQZOYHYe.js";import"./index-DvVuCRLG.js";import"./Link-Bas4CIOx.js";const ae={en:"Welcome to our website",ua:"Вітаю вас на нашому сайті"},re=c(A)`
  flex: 0 0 auto;
  width: 100%;
  max-width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 4px;
`,ne=c(d)`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`,oe=c(d)`
  width: 100%;
  /* height: 100%; */
  max-width: 300px;
  max-height: 50px;
  display: flex;
  overflow: auto;
  scrollbar-width: thin;
`,ie=c(d)`
  padding: 10px;
  width: 100%;
  height: 100%;
  max-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
`,le=c(d)`
  width: 100%;
  max-height: 120px;

  overflow: hidden;
`;v.propTypes={postsArr:w.array.isRequired,nameCollection:w.string.isRequired};function v({postsArr:p,nameCollection:h}){return e.jsx(e.Fragment,{children:p.map(({title:l,_id:a,posters:n,description:t,likes:x,likedBy:r,createdAt:m},f)=>e.jsxs(re,{id:f===0?"firstPost":void 0,children:[(n==null?void 0:n.length)>0?e.jsx(Q,{images:n,variant:"post"}):e.jsx(ne,{children:e.jsx(X,{fontSize:"large"})}),e.jsxs(ie,{children:[e.jsx(oe,{children:e.jsx(B,{to:`/post/${h}/${a}`,style:{textDecoration:"none"},children:e.jsx(i,{variant:"body2",textAlign:"center",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:l})})}),e.jsx(le,{children:e.jsxs(i,{variant:"caption",textOverflow:"ellipsis",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:[e.jsx(se,{children:t}),t]})}),e.jsxs(d,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[m&&e.jsx(i,{variant:"caption",children:R(m).format("DD-MM-YYYY")}),a&&r&&e.jsx(ee,{_id:a,likedBy:r,likes:x,nameCollection:h})]})]})]},a))})}const ve=()=>{const p=g(M),[h,l]=o.useState(!1),[a,n]=o.useState(null),[t,x]=o.useState(1),r=g(z("home")),f=g(D).some(s=>s==="admin"||s==="superAdmin"),[b,k]=o.useState(!1),u=E(),T=o.useRef(null),C=()=>l(!0),S=()=>l(!1);o.useEffect(()=>{const s=F.CancelToken.source();return u(L({cancelToken:s.token,page:t,nameCollection:"home",setTotalPages:n})),()=>{s&&s.cancel("Компонент размонтирован")}},[u,t]);const j=()=>{if(r.length>0){const s=document.getElementById("firstPost");s&&window.requestAnimationFrame(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})})}},W=()=>{t<a&&(x(t+1),j())},I=()=>{t>1&&(x(t-1),j())};return e.jsxs(e.Fragment,{children:[e.jsxs(Y,{children:[e.jsx($,{}),e.jsxs(q,{children:[e.jsxs(i,{textAlign:"center",variant:"h4",sx:{fontWeight:700},children:["Maria",e.jsx(i,{variant:"h4",component:"span",sx:s=>({bgcolor:"#f90",padding:"5px",borderRadius:2,fontWeight:700,color:s.palette.mode==="dark"?"#111":"#fff"}),children:"Mediatrix"})]}),e.jsx(i,{variant:"body2",textAlign:"center",marginTop:1,children:e.jsx(K,{strings:[ae[p]],typeSpeed:70,cursorChar:""})})]})]}),e.jsx(V,{ref:T,children:(r==null?void 0:r.length)>0&&e.jsxs(e.Fragment,{children:[a>1&&t>1&&e.jsx(y,{children:e.jsx(P,{size:"large",onClick:I,disabled:t===1,children:e.jsx(Z,{fontSize:"large"})})}),e.jsx(v,{postsArr:r,nameCollection:"home"}),a!==t&&e.jsx(y,{children:e.jsx(P,{size:"large",onClick:W,children:e.jsx(_,{fontSize:"large"})})})]})}),f&&e.jsx("div",{style:{margin:"20px 0"},children:e.jsx(H,{variant:"contained",onClick:C,children:N.addPost[p]})}),e.jsx(O,{open:b,sx:{color:"#fff",zIndex:s=>s.zIndex.drawer+1},children:e.jsx(te,{color:"inherit"})}),e.jsx(U,{open:h,onClose:S,closeAfterTransition:!0,children:e.jsx(G,{children:e.jsx(J,{setOpen:l,setLoading:k,nameCollection:"home"})})})]})};export{ve as default};
