import{s as u,P as j,B as c,j as e,N as M,T as r,d as H,a as y,u as m,b as k,A as D,c as E,e as N,f as U,g as F,r as h,h as O,i as $,k as Y,l as q,m as K,I as A,n as _,o as J,p as V,M as Z}from"./index-Djjy5-H_.js";import{W as G,H as Q,a as X,P as ee,I as P,b as te,c as se}from"./PostFileUploader-BDzsb1-L.js";import{R as ne}from"./errorMessages-CwXPayE3.js";import{d as ae,a as re}from"./Favorite-w_XSXwrY.js";import{I as oe,d as ie}from"./ImageNotSupported-CdBJ0NbK.js";import{L as le}from"./Like-PyzYzI_2.js";import{U as ce}from"./UniversalReactMarkdown-Ckvz0F1i.js";import{S as g}from"./Skeleton-l-u1yFaR.js";import{C as de}from"./CircularProgress-C2aTVFHb.js";import"./CloudUpload--UpCL3dV.js";import"./index.esm-BrsULErR.js";import"./OutlinedInput-CVSd0nJT.js";import"./Select-Dm-pidd2.js";import"./Close-qbN8cPS2.js";import"./index-bMRqafVM.js";import"./Link-BkOUUU_7.js";const he={en:"Welcome to our website",ua:"Вітаю вас на нашому сайті"},xe=u(j)`
  flex: 0 0 auto;
  width: 100%;
  max-width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 4px;
`,pe=u(c)`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`,me=u(c)`
  width: 100%;
  /* height: 100%; */
  max-width: 300px;
  max-height: 50px;
  display: flex;
  overflow: auto;
  scrollbar-width: thin;
`,ue=u(c)`
  padding: 10px;
  width: 100%;
  height: 100%;
  max-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
`,ge=u(c)`
  width: 100%;
  max-height: 120px;

  overflow: hidden;
`;v.propTypes={postsArr:y.array.isRequired,nameCollection:y.string.isRequired};function v({postsArr:x,nameCollection:o}){return e.jsx(e.Fragment,{children:x.map(({title:l,_id:n,posters:a,description:d,likes:s,likedBy:p,createdAt:i},f)=>e.jsxs(xe,{id:f===0?"firstPost":void 0,children:[(a==null?void 0:a.length)>0?e.jsx(oe,{images:a,variant:"post"}):e.jsx(pe,{children:e.jsx(ie,{fontSize:"large"})}),e.jsxs(ue,{children:[e.jsx(me,{children:e.jsx(M,{to:`/post/${o}/${n}`,style:{textDecoration:"none"},children:e.jsx(r,{variant:"body2",textAlign:"center",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:l})})}),e.jsx(ge,{children:e.jsxs(r,{variant:"caption",textOverflow:"ellipsis",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:[e.jsx(ce,{children:d}),d]})}),e.jsxs(c,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[i&&e.jsx(r,{variant:"caption",children:H(i).format("DD-MM-YYYY")}),n&&p&&e.jsx(le,{_id:n,likedBy:p,likes:s,nameCollection:o})]})]})]},n))})}const je=`
Шановні мешканці, дивіться повідомлення нижче про зміни в автобусному русі:

Як ви вже могли почути, ми збираємося змінити графік руху автобусів Азело. Наші диспетчери більше не можуть скласти графік руху автобусів Борне та Азело. Це пов'язано не з кількістю водіїв, а з їхньою зайнятістю. Це було зроблено в тісній консультації з керівництвом нашого притулку «Азело».

Нова схема набуде чинності у вівторок, 22 квітня 2025 року.
Ми будемо їздити двома блоками:

Блок 1: з 10:00 до 13:00.
Блок 2: з 14:00 до 17:00.

Таким чином, між двома блоками буде одна година перерви.

Пасажирів, які сідають на Albert Heijn о 12.50 та 12.52 на вокзалі, як і раніше, відвезуть до Азело.
Водій блоку 2 о 14:00 заїде до Albert Heijn та вокзалу, а потім до Azelo.
Пасажири, які висаджуватимуться в Альберт-Хейні о 16:50 та на вокзалі о 16:52, як і раніше, будуть відвезені до Азело.

Новий розклад руху автобусів розміщено на дверях офісу і додається до цього повідомлення.

Вітання, Якобус та Рене.
`,fe=`
Dear residents,

As you may have heard, we are going to change the Azelo bus schedule. Our dispatchers can no longer coordinate the Borne and Azelo schedules due to availability, not the number of drivers. This was arranged in close consultation with the management of our shelter in Azelo.

The new schedule will take effect on Tuesday, April 22, 2025.
We will operate in two blocks:

Block 1: 10:00 to 13:00.
Block 2: 14:00 to 17:00.

There will be a one-hour break between the two blocks.

Passengers boarding at Albert Heijn at 12:50 and at the station at 12:52 will still be taken to Azelo.
The Block 2 driver at 14:00 will stop at Albert Heijn and the station before heading to Azelo.
Passengers dropped off at Albert Heijn at 16:50 and at the station at 16:52 will still be taken to Azelo.

The new schedule is posted on the office door and attached to this message.

Best regards, Jacobus and René.
`,we=[["10:00","10:02","10:06","10:10","10:15","10:18","10:20","10:23"],["10:30","10:32","10:36","10:40","10:45","10:48","10:50","10:53"],["11:00","11:02","11:06","11:10","11:15","11:18","11:20","11:23"],["11:30","11:32","11:36","11:40","11:45","11:48","11:50","11:53"],["12:00","12:02","12:06","12:10","12:15","12:18","12:20","12:23"],["12:30","12:32","12:36","12:40","12:45","12:48","12:50","12:53"],["Einde 13.00u"],["14:00","14:02","14:06","14:10","14:15","14:18","14:20","14:23"],["14:30","14:32","14:36","14:40","14:45","14:48","14:50","14:53"],["15:00","15:02","15:06","15:10","15:15","15:18","15:20","15:23"],["15:30","15:32","15:36","15:40","15:45","15:48","15:50","15:53"],["16:00","16:02","16:06","16:10","16:15","16:18","16:20","16:23"],["16:30","16:32","16:36","16:40","16:45","16:48","16:50","16:53"],["Einde 17.00u"]];function be(){const o=m(k)==="ua";return e.jsxs(j,{sx:{p:"20px",my:2,width:"100%"},children:[e.jsxs(c,{sx:{overflow:"auto"},children:[e.jsx(r,{variant:"h6",textAlign:"center",mb:2,children:o?"Автобусний маршрут Борн - Азело (вівторок - субота)":"Born-Azelo bus route (Tuesday - Saturday)"}),e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"800px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Station NS"}),e.jsx("th",{children:"NETTORAMA"}),e.jsx("th",{children:"MM"}),e.jsx("th",{children:"ZW"}),e.jsx("th",{children:"KRL"}),e.jsx("th",{children:"ALDI/PLUS"}),e.jsx("th",{children:"AH/LIDL/MARKT"}),e.jsx("th",{children:"Station NS"})]})}),e.jsx("tbody",{style:{textAlign:"center"},children:we.map((l,n)=>e.jsx("tr",{children:l.length===1?e.jsx("td",{colSpan:"8",style:{fontStyle:"italic",textAlign:"right",border:"1px solid #ccc"},children:l[0]}):l.map((a,d)=>e.jsx("td",{style:{border:"1px solid #ccc"},children:a},d))},n))})]})]}),e.jsxs(D,{sx:{mt:3},children:[e.jsx(E,{expandIcon:e.jsx(N,{}),children:e.jsx(r,{variant:"subtitle1",children:o?"Пояснення та зміни до графіку":"Schedule explanation and updates"})}),e.jsx(U,{children:e.jsx(r,{variant:"body2",whiteSpace:"pre-line",children:o?je:fe})})]})]})}const De=()=>{const x=m(k),o=m(F),[l,n]=h.useState(!1),[a,d]=h.useState(1),[s,p]=h.useState(1),i=m(O("home")),S=m($).some(t=>t==="admin"||t==="superAdmin"),[T,B]=h.useState(!1),w=Y(),C=h.useRef(null),W=()=>n(!0),z=()=>n(!1);h.useEffect(()=>{const t=q.CancelToken.source();return w(K({cancelToken:t.token,page:s,nameCollection:"home",setTotalPages:d})),()=>{t&&t.cancel("Компонент размонтирован")}},[w,s]);const b=()=>{if(i.length>0){const t=document.getElementById("firstPost");t&&window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}},I=()=>{s<a&&(p(s+1),b())},R=()=>{s>1&&(p(s-1),b())};return e.jsxs(e.Fragment,{children:[e.jsxs(G,{children:[e.jsx(Q,{}),e.jsxs(X,{children:[e.jsxs(r,{textAlign:"center",variant:"h4",sx:{fontWeight:700},children:["Maria",e.jsx(r,{variant:"h4",component:"span",sx:t=>({bgcolor:"#f90",padding:"5px",borderRadius:2,fontWeight:700,color:t.palette.mode==="dark"?"#111":"#fff"}),children:"Mediatrix"})]}),e.jsx(r,{variant:"body2",textAlign:"center",marginTop:1,children:e.jsx(ne,{strings:[he[x]],typeSpeed:70,cursorChar:""})})]})]}),e.jsx(ee,{ref:C,children:o?e.jsx(c,{display:"flex",gap:"10px",children:[...Array(5)].map((t,L)=>e.jsxs(j,{sx:{p:2,mb:2,width:"300px",flexShrink:"0"},children:[e.jsx(g,{variant:"rectangular",width:"100%",height:150}),e.jsx(g,{width:"60%"}),e.jsx(g,{width:"80%"})]},L))}):e.jsx(e.Fragment,{children:(i==null?void 0:i.length)>0&&e.jsxs(e.Fragment,{children:[a>1&&s>1&&e.jsx(P,{children:e.jsx(A,{size:"large",onClick:R,disabled:s===1,children:e.jsx(ae,{fontSize:"large"})})}),e.jsx(v,{postsArr:i,nameCollection:"home"}),a!==s&&e.jsx(P,{children:e.jsx(A,{size:"large",onClick:I,children:e.jsx(re,{fontSize:"large"})})})]})})}),S&&e.jsx("div",{style:{margin:"20px 0"},children:e.jsx(_,{variant:"contained",onClick:W,children:J.addPost[x]})}),e.jsx(be,{}),e.jsx(V,{open:T,sx:{color:"#fff",zIndex:t=>t.zIndex.drawer+1},children:e.jsx(de,{color:"inherit"})}),e.jsx(Z,{open:l,onClose:z,closeAfterTransition:!0,children:e.jsx(te,{children:e.jsx(se,{setOpen:n,setLoading:B,nameCollection:"home"})})})]})};export{De as default};
