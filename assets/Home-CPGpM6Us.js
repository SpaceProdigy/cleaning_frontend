import{s as u,P as k,B as d,j as e,N as H,T as a,d as D,a as f,u as g,b as v,A as E,c as N,e as U,f as F,g as O,r as c,h as $,i as Y,k as q,l as K,m as _,I as A,n as J,o as V,p as Z,M as G}from"./index-DdVm9K2z.js";import{W as Q,H as X,a as ee,P as te,b as se,I as P,c as ne,d as ae}from"./PostSkeleton-DoJqyuvX.js";import{R as oe}from"./errorMessages-D5G7iQbC.js";import{d as ie,a as re}from"./Favorite-OevmNN8C.js";import{I as le,d as ce}from"./ImageNotSupported-Y0TOXCJk.js";import{L as de}from"./Like-DlltOUmm.js";import{U as he}from"./UniversalReactMarkdown-GpAiDgc4.js";import{C as xe}from"./CircularProgress-BO8jQ4ir.js";import"./CloudUpload-DbcbkKTr.js";import"./index.esm-DcG6JeIi.js";import"./OutlinedInput-C4fz-Hk8.js";import"./Select-Cx803lCw.js";import"./FormHelperText-Dt2zl_Iy.js";import"./Close-1SM-ulnb.js";import"./index-0kHTCDzu.js";import"./Skeleton-tu3lA_7V.js";import"./Link-CyJC69fC.js";const pe={en:"Welcome to our website",ua:"Вітаю вас на нашому сайті"},me=u(k)`
  flex: 0 0 auto;
  width: 100%;
  max-width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 4px;
`,ge=u(d)`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ue=u(d)`
  width: 100%;
  /* height: 100%; */
  max-width: 300px;
  max-height: 50px;
  display: flex;
  overflow: auto;
  scrollbar-width: thin;
`,je=u(d)`
  padding: 10px;
  width: 100%;
  height: 100%;
  max-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow: hidden;
`,fe=u(d)`
  width: 100%;
  max-height: 120px;

  overflow: hidden;
`;S.propTypes={postsArr:f.array.isRequired,nameCollection:f.string.isRequired,setIsLiking:f.func,isLiking:f.bool};function S({postsArr:h,nameCollection:o,setIsLiking:i,isLiking:x}){return e.jsx(e.Fragment,{children:h.map(({title:p,_id:n,posters:r,description:j,likes:s,likedBy:m,createdAt:l},w)=>e.jsxs(me,{id:w===0?"firstPost":void 0,children:[(r==null?void 0:r.length)>0?e.jsx(le,{images:r,variant:"post"}):e.jsx(ge,{children:e.jsx(ce,{fontSize:"large"})}),e.jsxs(je,{children:[e.jsx(ue,{children:e.jsx(H,{to:`/post/${o}/${n}`,style:{textDecoration:"none"},children:e.jsx(a,{variant:"body2",textAlign:"center",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:p})})}),e.jsx(fe,{children:e.jsxs(a,{variant:"caption",textOverflow:"ellipsis",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:[e.jsx(he,{children:j}),j]})}),e.jsxs(d,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[l&&e.jsx(a,{variant:"caption",children:D(l).format("DD-MM-YYYY")}),n&&m&&e.jsx(de,{setIsLiking:i,_id:n,likedBy:m,likes:s,nameCollection:o,isLiking:x})]})]})]},n))})}const we=`
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
`,be=`
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
`,ye=[["10:00","10:02","10:06","10:10","10:15","10:18","10:20","10:23"],["10:30","10:32","10:36","10:40","10:45","10:48","10:50","10:53"],["11:00","11:02","11:06","11:10","11:15","11:18","11:20","11:23"],["11:30","11:32","11:36","11:40","11:45","11:48","11:50","11:53"],["12:00","12:02","12:06","12:10","12:15","12:18","12:20","12:23"],["12:30","12:32","12:36","12:40","12:45","12:48","12:50","12:53"],["Einde 13.00u"],["14:00","14:02","14:06","14:10","14:15","14:18","14:20","14:23"],["14:30","14:32","14:36","14:40","14:45","14:48","14:50","14:53"],["15:00","15:02","15:06","15:10","15:15","15:18","15:20","15:23"],["15:30","15:32","15:36","15:40","15:45","15:48","15:50","15:53"],["16:00","16:02","16:06","16:10","16:15","16:18","16:20","16:23"],["16:30","16:32","16:36","16:40","16:45","16:48","16:50","16:53"],["Einde 17.00u"]];function Ae(){const o=g(v)==="ua";return e.jsxs(k,{sx:{p:"20px",my:2,width:"100%"},children:[e.jsxs(d,{sx:{overflow:"auto"},children:[e.jsx(a,{variant:"h6",textAlign:"center",mb:2,children:o?"Автобусний маршрут Борн - Азело (вівторок - субота)":"Born-Azelo bus route (Tuesday - Saturday)"}),e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"800px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Station NS"}),e.jsx("th",{children:"NETTORAMA"}),e.jsx("th",{children:"MM"}),e.jsx("th",{children:"ZW"}),e.jsx("th",{children:"KRL"}),e.jsx("th",{children:"ALDI/PLUS"}),e.jsx("th",{children:"AH/LIDL/MARKT"}),e.jsx("th",{children:"Station NS"})]})}),e.jsx("tbody",{style:{textAlign:"center"},children:ye.map((i,x)=>e.jsx("tr",{children:i.length===1?e.jsx("td",{colSpan:"8",style:{fontStyle:"italic",textAlign:"right",border:"1px solid #ccc"},children:i[0]}):i.map((p,n)=>e.jsx("td",{style:{border:"1px solid #ccc"},children:p},n))},x))})]})]}),e.jsxs(E,{sx:{mt:3},children:[e.jsx(N,{expandIcon:e.jsx(U,{}),children:e.jsx(a,{variant:"subtitle1",children:o?"Пояснення та зміни до графіку":"Schedule explanation and updates"})}),e.jsx(F,{children:e.jsx(a,{variant:"body2",whiteSpace:"pre-line",children:o?we:be})})]})]})}const Ue=()=>{const h=g(v),o=g(O),[i,x]=c.useState(!1),[p,n]=c.useState(!1),[r,j]=c.useState(1),[s,m]=c.useState(1),l=g($("home")),T=g(Y).some(t=>t==="admin"||t==="superAdmin"),[I,B]=c.useState(!1),b=q(),C=c.useRef(null),L=()=>n(!0),W=()=>n(!1);c.useEffect(()=>{const t=K.CancelToken.source();return b(_({cancelToken:t.token,page:s,nameCollection:"home",setTotalPages:j})),()=>{t&&t.cancel("Компонент размонтирован")}},[b,s]);const y=()=>{if(l.length>0){const t=document.getElementById("firstPost");t&&window.requestAnimationFrame(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})})}},z=()=>{s<r&&(m(s+1),y())},R=()=>{s>1&&(m(s-1),y())};return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[e.jsx(X,{}),e.jsxs(ee,{children:[e.jsxs(a,{textAlign:"center",variant:"h4",sx:{fontWeight:700},children:["Maria",e.jsx(a,{variant:"h4",component:"span",sx:t=>({bgcolor:"#f90",padding:"5px",borderRadius:2,fontWeight:700,color:t.palette.mode==="dark"?"#111":"#fff"}),children:"Mediatrix"})]}),e.jsx(a,{variant:"body2",textAlign:"center",marginTop:1,children:e.jsx(oe,{strings:[pe[h]],typeSpeed:70,cursorChar:""})})]})]}),e.jsx(te,{ref:C,children:o&&!i?e.jsx(d,{display:"flex",gap:"10px",children:[...Array(5)].map((t,M)=>e.jsx(se,{},M))}):e.jsx(e.Fragment,{children:(l==null?void 0:l.length)>0&&e.jsxs(e.Fragment,{children:[r>1&&s>1&&e.jsx(P,{children:e.jsx(A,{size:"large",onClick:R,disabled:s===1,children:e.jsx(ie,{fontSize:"large"})})}),e.jsx(S,{postsArr:l,setIsLiking:x,isLiking:i,nameCollection:"home"}),r!==s&&e.jsx(P,{children:e.jsx(A,{size:"large",onClick:z,children:e.jsx(re,{fontSize:"large"})})})]})})}),T&&e.jsx("div",{style:{margin:"20px 0"},children:e.jsx(J,{variant:"contained",onClick:L,children:V.addPost[h]})}),e.jsx(Ae,{}),e.jsx(Z,{open:I,sx:{color:"#fff",zIndex:t=>t.zIndex.drawer+1},children:e.jsx(xe,{color:"inherit"})}),e.jsx(G,{open:p,onClose:W,closeAfterTransition:!0,children:e.jsx(ne,{children:e.jsx(ae,{setOpen:n,setLoading:B,nameCollection:"home"})})})]})};export{Ue as default};
