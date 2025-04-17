import{s as d,P as k,B as l,j as e,N as z,T as i,d as L,a as P,u as m,b as F,c as D,r as o,e as E,f as H,g as N,h as O,i as U,I as y,k as Y,l as $,m as q,M as V}from"./index-CjP5MhKo.js";import{W as _,H as G,a as J,P as K,I as v,b as Q,c as X}from"./PostFileUploader-I-TE2ADx.js";import{R as Z}from"./errorMessages-BM5YBbWZ.js";import{d as ee,a as se}from"./Favorite-khO4bkXl.js";import{I as te,d as ae}from"./ImageNotSupported-CNWI-6rV.js";import{L as re}from"./Like-BAHzK0sx.js";import{U as ne}from"./UniversalReactMarkdown-CbBUeo0P.js";import{S as f}from"./Skeleton-DdqejYJi.js";import{C as oe}from"./CircularProgress-D5N5ib5B.js";import"./CloudUpload-rAfJdDYk.js";import"./index.esm-BuW7JWyA.js";import"./OutlinedInput-DsvbwjWQ.js";import"./Select-D_6U_W93.js";import"./Close-BHTa-yVP.js";import"./index-TO4wWprh.js";import"./Link-DVEFuuZu.js";const ie={en:"Welcome to our website",ua:"Вітаю вас на нашому сайті"},le=d(k)`
  flex: 0 0 auto;
  width: 100%;
  max-width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 4px;
`,ce=d(l)`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`,de=d(l)`
  width: 100%;
  /* height: 100%; */
  max-width: 300px;
  max-height: 50px;
  display: flex;
  overflow: auto;
  scrollbar-width: thin;
`,pe=d(l)`
  padding: 10px;
  width: 100%;
  height: 100%;
  max-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
`,xe=d(l)`
  width: 100%;
  max-height: 120px;

  overflow: hidden;
`;b.propTypes={postsArr:P.array.isRequired,nameCollection:P.string.isRequired};function b({postsArr:p,nameCollection:x}){return e.jsx(e.Fragment,{children:p.map(({title:g,_id:a,posters:r,description:h,likes:t,likedBy:c,createdAt:n},j)=>e.jsxs(le,{id:j===0?"firstPost":void 0,children:[(r==null?void 0:r.length)>0?e.jsx(te,{images:r,variant:"post"}):e.jsx(ce,{children:e.jsx(ae,{fontSize:"large"})}),e.jsxs(pe,{children:[e.jsx(de,{children:e.jsx(z,{to:`/post/${x}/${a}`,style:{textDecoration:"none"},children:e.jsx(i,{variant:"body2",textAlign:"center",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:g})})}),e.jsx(xe,{children:e.jsxs(i,{variant:"caption",textOverflow:"ellipsis",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:[e.jsx(ne,{children:h}),h]})}),e.jsxs(l,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[n&&e.jsx(i,{variant:"caption",children:L(n).format("DD-MM-YYYY")}),a&&c&&e.jsx(re,{_id:a,likedBy:c,likes:t,nameCollection:x})]})]})]},a))})}const Ie=()=>{const p=m(F),x=m(D),[g,a]=o.useState(!1),[r,h]=o.useState(1),[t,c]=o.useState(1),n=m(E("home")),T=m(H).some(s=>s==="admin"||s==="superAdmin"),[S,C]=o.useState(!1),u=N(),W=o.useRef(null),I=()=>a(!0),A=()=>a(!1);o.useEffect(()=>{const s=O.CancelToken.source();return u(U({cancelToken:s.token,page:t,nameCollection:"home",setTotalPages:h})),()=>{s&&s.cancel("Компонент размонтирован")}},[u,t]);const w=()=>{if(n.length>0){const s=document.getElementById("firstPost");s&&window.requestAnimationFrame(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})})}},B=()=>{t<r&&(c(t+1),w())},R=()=>{t>1&&(c(t-1),w())};return e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsx(G,{}),e.jsxs(J,{children:[e.jsxs(i,{textAlign:"center",variant:"h4",sx:{fontWeight:700},children:["Maria",e.jsx(i,{variant:"h4",component:"span",sx:s=>({bgcolor:"#f90",padding:"5px",borderRadius:2,fontWeight:700,color:s.palette.mode==="dark"?"#111":"#fff"}),children:"Mediatrix"})]}),e.jsx(i,{variant:"body2",textAlign:"center",marginTop:1,children:e.jsx(Z,{strings:[ie[p]],typeSpeed:70,cursorChar:""})})]})]}),e.jsx(K,{ref:W,children:x?e.jsx(l,{display:"flex",gap:"10px",children:[...Array(5)].map((s,M)=>e.jsxs(k,{sx:{p:2,mb:2,width:"300px",flexShrink:"0"},children:[e.jsx(f,{variant:"rectangular",width:"100%",height:150}),e.jsx(f,{width:"60%"}),e.jsx(f,{width:"80%"})]},M))}):e.jsx(e.Fragment,{children:(n==null?void 0:n.length)>0&&e.jsxs(e.Fragment,{children:[r>1&&t>1&&e.jsx(v,{children:e.jsx(y,{size:"large",onClick:R,disabled:t===1,children:e.jsx(ee,{fontSize:"large"})})}),e.jsx(b,{postsArr:n,nameCollection:"home"}),r!==t&&e.jsx(v,{children:e.jsx(y,{size:"large",onClick:B,children:e.jsx(se,{fontSize:"large"})})})]})})}),T&&e.jsx("div",{style:{margin:"20px 0"},children:e.jsx(Y,{variant:"contained",onClick:I,children:$.addPost[p]})}),e.jsx(q,{open:S,sx:{color:"#fff",zIndex:s=>s.zIndex.drawer+1},children:e.jsx(oe,{color:"inherit"})}),e.jsx(V,{open:g,onClose:A,closeAfterTransition:!0,children:e.jsx(Q,{children:e.jsx(X,{setOpen:a,setLoading:C,nameCollection:"home"})})})]})};export{Ie as default};
