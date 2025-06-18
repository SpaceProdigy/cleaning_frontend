import{s as W,B as x,N as Ye,r as c,u as C,at as E,j as e,ag as $e,P as te,T as v,d as M,I as Q,aJ as he,aK as je,aa as wt,a as t,aL as Oe,aM as kt,aN as qe,ar as be,b as H,as as de,w as Fe,k as oe,ap as Ae,aq as Tt,a1 as We,n as ae,au as Le,aO as Ne,M as ye,av as Ct,C as Be,D as ze,aP as Dt,aQ as Te,A as Ce,c as De,e as Re,f as Ie,l as Rt,aR as It,aS as Me,aw as Mt,aT as Pt,x as Yt,aU as $t}from"./index-DdVm9K2z.js";import{C as Ot,P as qt,L as _e,u as Ve,e as Ue,A as He,D as Ft,a as At,b as Wt,I as Lt,c as Nt,R as le,S as Bt,d as zt,f as _t}from"./Rulse.styled-BE3HBmDF.js";import{a as Vt,d as Xe}from"./Edit-CMqUikTn.js";import{d as Ge}from"./Delete-BdMeeVBN.js";import{d as ue}from"./Close-1SM-ulnb.js";import{F as Z,I as ne,a as Ut,O as Je}from"./OutlinedInput-C4fz-Hk8.js";import{S as ie,M as J,a as Ht}from"./Select-Cx803lCw.js";import{A as Xt}from"./index-0kHTCDzu.js";import{R as Gt,F as me,a as ge,T as Ke,b as Qe,c as Ze,d as ce,e as A,f as Ee,t as Pe}from"./telegram-BtNSuQ6R.js";import{C as et,P as Jt}from"./Pdf-D9JN5m9S.js";import{P as tt}from"./Pagination-1051huzO.js";import{C as nt}from"./CircularProgress-BO8jQ4ir.js";import{d as Kt}from"./ArrowBack-j15jpU2E.js";import{I as Qt}from"./ImageTitle-DunLcTcY.js";import{F as pe}from"./FormHelperText-Dt2zl_Iy.js";import{e as Zt}from"./errorMessages-D5G7iQbC.js";import"./Skeleton-tu3lA_7V.js";import"./TextField-BZZZLax-.js";import"./Chip-16uU3oMx.js";import"./Link-CyJC69fC.js";import"./Stack-BqrEJ1mN.js";const Et=W(x)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
`,en=W(x)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 5px 0px;
`,tn=W(x)`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 5px 16px;
  white-space: nowrap;
  color: ${({theme:n})=>n.palette.warning.main};
`,nn=W(x)`
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 5px 16px;
  white-space: nowrap;
`;W(Ye)`
  text-decoration: none;
  color: transparent;
`;const st=({isEdit:n,handleClose:s,language:l,handleAddALesson:a,setIsChooseALesson:i,setIsEdit:j,isDay:r,setValueSelect:f,permissions:h,setIsDeleteModal:T})=>{var m,q,D,R,b;const[d,u]=c.useState(!1),p=C(E);return c.useEffect(()=>{i(n==null?void 0:n.data[0])},[]),e.jsx($e.div,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:100},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(te,{elevation:2,children:e.jsx(Ot,{onClickAway:()=>{d||s()},children:e.jsxs(x,{children:[e.jsxs(Et,{children:[e.jsx(v,{variant:"subtitle2",children:M(r).format("YYYY-MM-DD")}),e.jsx(Q,{onClick:s,size:"small",children:e.jsx(ue,{fontSize:"small"})})]}),h&&e.jsxs(e.Fragment,{children:[((m=n==null?void 0:n.data)==null?void 0:m.length)>1&&e.jsxs(Z,{sx:{width:"100%",maxWidth:400},children:[e.jsx(ne,{children:l==="en"?"Choose a task":"Виберіть завдання"}),e.jsx(ie,{disabled:p,defaultValue:0,onChange:Y=>{i(n==null?void 0:n.data[Y.target.value]),f(n==null?void 0:n.data[Y.target.value].task.id)},onFocus:()=>u(!0),onBlur:()=>u(!1),label:l==="en"?"Choose a task":"Виберіть завдання",children:(q=n==null?void 0:n.data)==null?void 0:q.map(({roomNumber:Y,task:$},F)=>e.jsx(J,{value:F,children:e.jsxs(v,{variant:"subtitle2",children:[e.jsxs(v,{component:"span",children:[Y," - "]})," ",e.jsx(v,{component:"span",children:$[l]})]})},F))})]}),e.jsxs(Ht,{children:[e.jsxs(J,{disabled:p,onClick:()=>{a()},children:[e.jsx(he,{children:l==="en"?"Add cleaning":"Додайте прибирання"}),e.jsx(je,{sx:{ml:2},children:e.jsx(Vt,{color:"success"})})]}),((D=n.data)==null?void 0:D.length)>0&&e.jsxs(x,{children:[e.jsxs(J,{disabled:p,onClick:()=>{j(Y=>({...Y,edit:!0})),a()},children:[e.jsx(he,{children:l==="en"?"Edit schedule":"Редагувати розклад"}),e.jsx(je,{sx:{ml:2},children:e.jsx(Xe,{color:"secondary"})})]}),e.jsxs(J,{disabled:p,onClick:()=>{T(!0)},children:[e.jsx(he,{children:l==="en"?"Delete schedule":"Видалити розклад"}),e.jsx(je,{sx:{ml:2},children:e.jsx(Ge,{color:"error"})})]})]})]})]}),((R=n==null?void 0:n.data)==null?void 0:R.length)>0&&e.jsxs(tn,{children:[e.jsx(v,{variant:"subtitle1",children:`${l==="en"?"Room":"Кімніта"} `}),e.jsx(v,{variant:"subtitle1",children:` ${l==="en"?"Task":"Задача"}`})]}),(b=n==null?void 0:n.data)==null?void 0:b.map(({roomNumber:Y,task:$},F)=>e.jsxs(en,{children:[e.jsx(wt,{sx:{width:"100%"}}),e.jsxs(nn,{children:[e.jsx(v,{variant:"subtitle2",sx:z=>({color:z.palette.success.main}),children:`${Y}`}),e.jsx(v,{variant:"subtitle2",sx:z=>({color:z.palette.success.main}),children:`${$[l]}`})]})]},F))]})})})})};st.propTypes={handleAddALesson:t.func,isEdit:t.oneOfType([t.object,t.bool]),setIsEdit:t.func,open:t.bool,handleClose:t.func,language:t.string,setIsChooseALesson:t.func,isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),isDay:t.oneOfType([t.object,t.oneOf([null])]),setValueSelect:t.func,valueSelect:t.oneOfType([t.number,t.object]).isRequired,permissions:t.bool,isDeleteModal:t.bool,setIsDeleteModal:t.func};const rt=({permissions:n,setIsModal:s,setIsEdit:l,shouldDisplay:a,props:i,language:j})=>{const r=Oe(),f=a.sort((T,d)=>{const u=new Date(T.date);return new Date(d.date)-u}),h=()=>{!n&&!a||!n&&a.length===0||(s(!0),l({edit:!1,data:a}))};return e.jsx(x,{children:e.jsxs(x,{position:"relative",children:[a.length===1&&e.jsx(x,{sx:{position:"absolute",top:-5,right:-5,zIndex:5},children:e.jsx(kt,{fontSize:"small",sx:{color:r.palette.success.main}})}),e.jsx(x,{children:a.length>1&&e.jsx(x,{sx:T=>({position:"absolute",top:-2,right:-2,width:16,height:16,borderRadius:"50%",background:T.palette.secondary.main,display:"flex",justifyContent:"center",alignItems:"center",zIndex:5}),children:e.jsx(v,{variant:"caption",color:"#111",children:a.length})})}),e.jsx(qe,{component:"div",classes:{tooltip:"custom-tooltip"},title:f.length>0&&e.jsx("div",{style:{maxHeight:100,overflow:"auto",scrollbarWidth:"thin",padding:5},children:f.map(({roomNumber:T,task:d,date:u})=>e.jsxs("div",{style:{padding:5},children:[e.jsxs(v,{variant:"subtitle2",textAlign:"center",component:"div",children:[j==="en"?"Room: ":"Кімніта: ",T]}),e.jsx(v,{variant:"subtitle2",textAlign:"center",component:"div",children:d[j]}),e.jsx(v,{variant:"subtitle2",textAlign:"center",component:"div",children:u})]},be()))}),placement:"top-end",children:e.jsx(qt,{onClick:h,...i,sx:{border:i.today?`solid 2px ${r.palette.info.main} !important`:a.length>0&&`solid 2px ${r.palette.success.main}`,background:i.today&&`${r.palette.info.main} !important`}})})]})})};rt.propTypes={props:t.object,today:t.bool,setIsModal:t.func,setIsEdit:t.func,shouldDisplay:t.array,permissions:t.bool.isRequired,isEdit:t.oneOfType([t.object,t.bool]),language:t.string};function at({handleAddALesson:n,setIsDay:s,isEdit:l,setIsEdit:a,open:i,setIsChooseALesson:j,isChooseALesson:r,isDay:f,setValueSelect:h,valueSelect:T,permissions:d,isDeleteModal:u,setIsDeleteModal:p,locationMonth:m,nameCollection:q}){const[D,R]=c.useState(!1),b=C(H),Y=C(E),$=C(de),F=Fe(),z=()=>{s(null),R(!1)},U=()=>!(M(m).isBefore(M().format("YYYY-MM"))||M(`${m}`).isAfter(M().format("YYYY-MM"))),X=({day:L})=>{const y=M(L.$d).format("YYYY-MM-DD");return $==null?void 0:$.filter(({date:w})=>y===w)};return e.jsx(x,{children:e.jsxs(te,{elevation:1,sx:{p:2,position:"relative",boxShadow:"0px 0px 4px -2px rgba(0,0,0,0.52)","& .MuiPickersDay-root.Mui-selected":!U()&&{backgroundColor:"transparent !important",color:"inherit !important"}},children:[e.jsx(_e,{dateAdapter:He,localeText:b==="ua"?Ve.components.MuiLocalizationProvider.defaultProps.localeText:Ue.components.MuiLocalizationProvider.defaultProps.localeText,adapterLocale:b==="ua"?"uk":"en",children:e.jsx(Ft,{disabled:Y,value:null,disableFuture:Y,disablePast:Y,onMonthChange:L=>{const y=`/${q}/${L.format("YYYY-MM")}`;F(y,{replace:!0})},onChange:L=>s(L),views:["day"],loading:Y,renderLoading:()=>e.jsx(At,{}),slots:{day:L=>{const y=X(L);return e.jsx(rt,{permissions:d,isEdit:l,setIsModal:R,setIsEdit:a,shouldDisplay:y,props:L,language:b})}}},b)}),e.jsx(Xt,{children:D&&e.jsx(st,{open:i,isEdit:l,setIsEdit:a,handleClose:z,language:b,handleAddALesson:n,setIsChooseALesson:j,isChooseALesson:r,isDay:f,setValueSelect:h,valueSelect:T,permissions:d,isDeleteModal:u,setIsDeleteModal:p})})]})})}at.propTypes={today:t.bool,handleAddALesson:t.func,setIsDay:t.func,isDay:t.oneOfType([t.object,t.oneOf([null])]),isEdit:t.oneOfType([t.object,t.bool]),setIsEdit:t.func,open:t.bool,setIsChooseALesson:t.func,isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),valueSelect:t.oneOfType([t.number,t.object]).isRequired,setValueSelect:t.func,permissions:t.bool,isDeleteModal:t.bool,setIsDeleteModal:t.func,nameCollection:t.string.isRequired,locationMonth:t.string.isRequired};const sn=W(x)`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;ot.propTypes={isLoading:t.bool.isRequired,language:t.string.isRequired,setIsFilterTask:t.func.isRequired,isFilterTas:t.array.isRequired,uniqTaskList:t.object.isRequired,room:t.string.isRequired,setRoom:t.func.isRequired,uniqRoomList:t.array.isRequired,nameCollection:t.string.isRequired};function ot({isLoading:n,language:s,setIsFilterTask:l,isFilterTas:a,uniqTaskList:i,room:j,setRoom:r,uniqRoomList:f,nameCollection:h}){var u;const T=oe(),d=C(Ae);return e.jsxs("div",{children:[e.jsxs(Z,{children:[e.jsx(Ut,{children:s==="en"?"Show list":"Показувати список"}),e.jsxs(Gt,{row:!0,value:d["filter"+h]?d["filter"+h]:"Fully",onChange:p=>T(Tt({["filter"+h]:p.target.value})),children:[e.jsx(me,{disabled:n,value:"Fully",control:e.jsx(ge,{}),label:s==="en"?"Fully":"Повністю"}),e.jsx(me,{disabled:n,value:"Current week",control:e.jsx(ge,{}),label:s==="en"?"Current week":"Поточний тиждень"}),e.jsx(me,{disabled:n,value:"Hide past dates",control:e.jsx(ge,{}),label:s==="en"?"Hide past dates":"Приховати минулі дати"})]})]}),e.jsxs(sn,{children:[e.jsxs(Z,{size:"small",sx:{width:"150px"},children:[e.jsx(ne,{children:s==="en"?"Task":"Завдання"}),e.jsxs(ie,{multiple:!0,value:a,label:s==="en"?"Task":"Завдання",onChange:p=>l(p.target.value),children:[e.jsx(J,{value:"",children:s==="en"?"All":"Всі"}),(u=i[s])==null?void 0:u.map((p,m)=>e.jsx(J,{value:i.en[m],children:p},be()))]})]}),e.jsxs(Z,{size:"small",sx:{width:"150px"},disabled:n,children:[e.jsx(ne,{children:s==="en"?"Room":"Кімната"}),e.jsxs(ie,{value:j,label:s==="en"?"Room":"Кімната",onChange:p=>r(p.target.value),children:[e.jsx(J,{value:"",children:s==="en"?"Reset":"Скинути"}),(f==null?void 0:f.length)>0&&(f==null?void 0:f.map(p=>e.jsxs(J,{value:String(p),children:[s==="en"?" Room":" Кімната"," ",p]},be())))]})]})]})]})}lt.propTypes={isDeleteModal:t.bool,setIsDeleteModal:t.func,permissions:t.bool.isRequired,nameCollection:t.string.isRequired,setIsEdit:t.func,handleAddALesson:t.func,setIsChooseALesson:t.func,setValueSelect:t.func,isEdit:t.oneOfType([t.object,t.bool]),isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),page:t.number.isRequired,setPage:t.func.isRequired,limit:t.number.isRequired,setLitit:t.func.isRequired,totalPages:t.number.isRequired,setTotalPages:t.func.isRequired};function lt({setIsDeleteModal:n,setIsEdit:s,permissions:l,handleAddALesson:a,setIsChooseALesson:i,setValueSelect:j,nameCollection:r,page:f,setPage:h,totalPages:T}){const d=C(H),u=C(de),p=C(E),m=C(We)||{},q=C(Ae),[D,R]=c.useState([]),[b,Y]=c.useState({}),[$,F]=c.useState([]),z=c.useMemo(()=>{const o=new Set,S=new Set;return u==null||u.forEach(({task:g})=>o.add(g.en)),u==null||u.forEach(({task:g})=>S.add(g.ua)),{en:[...o],ua:[...S]}},[u]),U=c.useMemo(()=>{const o=new Set;return u==null||u.map(({roomNumber:g})=>o.add(g)),[...o].sort((g,O)=>g-O)},[u]),X=oe(),[L,y]=c.useState(""),[w,I]=c.useState(!1),k=(o,S)=>{h(S)},N=(o,S,g)=>{g!=null&&g.checker&&g.isDone&&m.uid!==(g==null?void 0:g.checker.userId)||X(Le({language:d,nameCollection:r,id:S,updateValue:{checked:{isDone:o.target.checked,checker:{displayName:(m==null?void 0:m.roomNumber)??(m==null?void 0:m.displayName)??"",userId:m.uid}}}}))},V=(o,S,g)=>{const O={td:{textAlign:"center",whiteSpace:"nowrap"}},B=M().format("YYYY-MM-DD"),G=M().isAfter(M(S),"day");return B===S?(O.td.color=g?o.palette.success.dark:o.palette.info.dark,O.backgroundColor=g&&o.palette.success.dark+20,O):(G&&(O.td.color=g?o.palette.success.dark:o.palette.error.dark,O.backgroundColor=g?o.palette.success.dark+20:o.palette.error.dark+20),O)},P=[...u].sort((o,S)=>{const g=new Date(o.date),O=new Date(S.date);if(g-O!==0)return g-O;if(o.task.en.localeCompare(S.task.en)!==0)return o.task.en.localeCompare(S.task.en);const B=parseInt(o.roomNumber,10),G=parseInt(S.roomNumber,10);return B-G}),_=()=>{let o=P;return D.length>0&&(D.includes("")?o=P:o=P==null?void 0:P.filter(S=>D.includes(S.task.en))),L&&(o=o==null?void 0:o.filter(({roomNumber:S})=>String(S)===L)),(q["filter"+r]?q["filter"+r]:"Fully")==="Hide past dates"&&(o=o==null?void 0:o.filter(({date:S})=>M(S).isAfter(M())||M(S).isSame(M(),"day"))),(q["filter"+r]?q["filter"+r]:"Fully")==="Current week"&&(o=o==null?void 0:o.filter(({date:S})=>{const g=M(S),O=M().startOf("week"),B=M().endOf("week");return g.isAfter(O)&&g.isBefore(B)})),o};return c.useEffect(()=>{Y(z),F(U)},[U,z]),e.jsxs(e.Fragment,{children:[e.jsx(ot,{isLoading:p,language:d,isFilterTas:D,setIsFilterTask:R,uniqTaskList:b,room:L,setRoom:y,uniqRoomList:$,nameCollection:r}),e.jsxs(Ke,{elevation:2,sx:{boxShadow:"0px 0px 5px -2px rgba(0,0,0,0.52)"},component:te,children:[e.jsxs(Qe,{children:[e.jsx(Ze,{children:e.jsxs(ce,{children:[e.jsx(A,{align:"center",sx:{whiteSpace:"nowrap"},children:d==="en"?"Room number":"Номер кімнати"}),e.jsx(A,{align:"center",children:d==="en"?"Date":"Дата"}),e.jsx(A,{align:"center",children:d==="en"?"Task":"Завдання"}),l&&e.jsxs(e.Fragment,{children:[e.jsx(A,{align:"center",children:d==="en"?"Done":"Готово"}),e.jsx(A,{align:"center",sx:{whiteSpace:"nowrap"},children:d==="en"?"Confirmed by":"Підтверджено "}),e.jsx(A,{align:"center",children:d==="en"?"Edit":"Редагувати"}),e.jsx(A,{align:"center",children:d==="en"?"Delete":"Видалити"})]})]})}),e.jsx(Ee,{children:P&&P.length>0&&_().map(({_id:o,date:S,roomNumber:g,task:O,checked:B},G,K)=>{var ee;const se=B.isDone;return e.jsxs(ce,{id:o,sx:re=>V(re,S,se),children:[e.jsx(A,{children:g}),e.jsx(A,{children:S}),e.jsx(A,{children:O[d]}),l&&e.jsxs(e.Fragment,{children:[e.jsx(A,{align:"center",sx:{display:"flex",alignItems:"center",gap:"10px"},children:e.jsx(et,{disabled:p,checked:B.isDone,onChange:re=>N(re,o,B),color:"success"})}),e.jsx(A,{children:(B==null?void 0:B.isDone)&&e.jsx(v,{variant:"caption",whiteSpace:"nowrap",children:(ee=B==null?void 0:B.checker)==null?void 0:ee.displayName})})]}),l&&e.jsxs(e.Fragment,{children:[e.jsx(A,{align:"center",children:e.jsx(Q,{disabled:p,color:"secondary",onClick:()=>{j(O.id),i(K[G]),s({edit:!0,data:K}),a()},children:e.jsx(Xe,{})})}),e.jsx(A,{align:"center",children:e.jsx(Q,{disabled:p,color:"error",onClick:()=>{n(!0),i(K[G]),s({edit:!0,data:K})},children:e.jsx(Ge,{})})})]})]},G)})})]}),T>1&&e.jsx(x,{width:"100%",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(tt,{count:T,variant:"outlined",color:"primary",disabled:p,page:f,boundaryCount:0,onChange:k})}),p&&e.jsx(x,{width:"100%",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(nt,{})}),!p&&P.length===0&&e.jsx(v,{variant:"h6",textAlign:"center",marginBottom:2,mt:2,children:d==="en"?"Cleaning this month are not yet scheduled":"Прибирання в цьому місяці ще не заплановано"})]}),P&&P.length>0&&e.jsxs(e.Fragment,{children:[w&&e.jsx(Jt,{data:_()?_():[],nameCollection:r}),l&&e.jsx(ae,{variant:"contained",onClick:()=>I(o=>!o),children:w?d==="en"?"Collapse a PDF":"Згорнути PDF":d==="en"?"Make a PDF":"Зробити PDF"})]})]})}const rn=W(x)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:n})=>{var s,l;return(l=(s=n==null?void 0:n.palette)==null?void 0:s.background)==null?void 0:l.paper}};
  box-shadow: ${({theme:n})=>n.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,an=W(Ye)`
  color: transparent;
  text-decoration: none;
`,on=W(x)`
  position: absolute;
  left: 15px;
  top: 15px;
`,ln=W(x)`
  position: absolute;
  right: 15px;
  top: 15px;
`,cn=W("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,dn=W(x)`
  position: absolute;
  display: flex;
  gap: 16px;
  top: 5px;
  left: -5px;

  @keyframes shake-horizontal {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
  }

  @keyframes shake-vertical {
    0%,
    100% {
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
      transform: translateY(8px);
    }
    80% {
      transform: translateY(6.4px);
    }
    90% {
      transform: translateY(-6.4px);
    }
  }
  animation: ${({error:n})=>n?"shake-horizontal 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both":""};
  animation: ${({success:n})=>n?"shake-vertical 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both":""};
`,un=W(x)`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({borderColor:n})=>n};

  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
      transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
      transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
      transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
      transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
      transform: translate(0);
    }
  }

  animation: ${({tab:n})=>n?"vibrate-1 0.3s linear both":""};
`,it=({passwordKey:n,sessionKey:s,buttonBack:l=!1,closeClickInside:a=!1,openWithInitilizat:i=!1,openModal:j=!1,setOpenModal:r=!1,buttonClose:f=!1})=>{const h=C(H),[T,d]=c.useState(i??!sessionStorage.getItem(s)),[u,p]=c.useState(null),m=c.useRef({1:"",2:"",3:"",4:""}),[q,D]=c.useState({1:"",2:"",3:"",4:""}),R=Object.values(q).join(""),b=Oe(),Y=()=>d(!1),$=R.length===4&&n!==R,F=n===R,{state:z}=Ne();c.useEffect(()=>{F&&(sessionStorage.setItem(s,"access"),setTimeout(()=>{r&&r(!1),Y()},500))},[F,s,r]),c.useEffect(()=>{R.length===4&&m.current[u].blur()},[u,R.length]);const U=(y,w)=>{const I=y.target.value,k=I.replace(/\D/g,"");if(D(()=>({...q,[y.target.id]:k.slice(0,1)})),!isNaN(I)&&I!==""){if(w===4){m.current[1].focus();return}m.current[w+1].focus()}},X=(y,w)=>{if(y.keyCode===39){if(w===4)return m.current[1].focus();m.current[w+1].focus()}if(y.keyCode===37){if(w===1)return m.current[4].focus();m.current[w-1].focus(),m.current[w-1]}if(y.keyCode===8){if(R.length===0&&m.current[w].blur(),y.preventDefault(),w===1){D(I=>({...I,[w]:""})),m.current[4].focus();return}m.current[w-1].focus(),D(I=>({...I,[w]:""}))}},L=y=>{var w,I,k,N,V,P,_,o;return R===n?(I=(w=b==null?void 0:b.palette)==null?void 0:w.success)==null?void 0:I.main:R.length===4&&n!==R?(N=(k=b==null?void 0:b.palette)==null?void 0:k.error)==null?void 0:N.main:q[y]?(P=(V=b==null?void 0:b.palette)==null?void 0:V.info)==null?void 0:P.main:(o=(_=b==null?void 0:b.palette)==null?void 0:_.text)==null?void 0:o.primary};return e.jsx(e.Fragment,{children:e.jsx(ye,{open:j||T,onClose:()=>{a&&d(!1),r&&r(!1)},children:e.jsxs(rn,{children:[l&&e.jsx(on,{children:e.jsx(an,{to:z??"/",children:e.jsx(Q,{children:e.jsx(Kt,{})})})}),f&&e.jsx(ln,{children:e.jsx(Q,{onClick:()=>{r?r(!1):d(!1)},children:e.jsx(ue,{})})}),e.jsxs(x,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(v,{variant:"subtitle2",children:h==="en"?"Enter password":"Введіть пароль"}),e.jsx(x,{sx:{position:"relative",width:200,height:50},children:e.jsx(dn,{error:$?"+":"",success:F?"+":"",children:[1,2,3,4].map((y,w)=>e.jsx(un,{tab:Number(y)<=Number(q[y])?"+":"",borderColor:L(y),children:e.jsx(cn,{ref:I=>{m.current[y]=I},id:y,onChange:I=>U(I,y),value:q[y],autoComplete:"off",autoFocus:y===1,onKeyDown:I=>X(I,y),onFocus:()=>p(y),type:"tel"})},w))})}),e.jsx($e.div,{animate:{opacity:$||F?1:0},transition:{duration:.5},style:{height:50,width:"100%"},children:e.jsxs(x,{display:"flex",flexDirection:"column",alignItems:"center",gap:0,color:$?b.palette.error.main:b.palette.success.main,children:[$&&(h==="en"?e.jsxs(e.Fragment,{children:[e.jsx(v,{variant:"subtitle2",component:"span",textAlign:"center",children:"The password is incorrect,"}),e.jsx(v,{variant:"subtitle2",component:"span",textAlign:"center",children:"please try again"})]}):e.jsxs(e.Fragment,{children:[e.jsx(v,{variant:"subtitle2",component:"span",textAlign:"center",children:"Пароль невірний,"}),e.jsx(v,{variant:"subtitle2",component:"span",textAlign:"center",children:"спробуйте ще раз"})]})),e.jsx(v,{variant:"h6",component:"span",textAlign:"center",children:F&&(h==="en"?"Success":"Yспіх")})]})})]})]})})})};it.propTypes={passwordKey:t.string.isRequired,sessionKey:t.string.isRequired,buttonBack:t.bool,closeClickInside:t.bool,openWithInitilizat:t.bool,openModal:t.bool,setOpenModal:t.func,buttonClose:t.bool};const pn=W(x)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:n})=>n.palette.background.paper};
  box-shadow: ${({theme:n})=>n.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,xn=W(x)`
  position: absolute;
  right: 5px;
  top: 5px;
`;ct.propTypes={isDeleteModal:t.bool,setIsDeleteModal:t.func,setIsChooseALesson:t.func,isEdit:t.oneOfType([t.object,t.bool]),isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),dispatch:t.func,nameCollection:t.string.isRequired};function ct({isDeleteModal:n,setIsDeleteModal:s,isChooseALesson:l,setIsChooseALesson:a,dispatch:i,nameCollection:j}){const r=C(H);return e.jsx(ye,{open:n,onClose:()=>{s(!1)},children:e.jsxs(pn,{children:[e.jsx(xn,{children:e.jsx(Q,{onClick:()=>{s(!1)},children:e.jsx(ue,{})})}),e.jsxs(x,{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",children:[l&&e.jsx(v,{variant:"subtitle2",textAlign:"center",sx:f=>({color:f.palette.warning.main}),children:`${l.date} ${r==="en"?"Room:":"Кімната:"} ${l.roomNumber} ${r==="en"?"Task:":"Задача:"} ${l.task[r]}`}),e.jsx(v,{variant:"subtitle2",textAlign:"center",sx:f=>({color:f.palette.error.main}),children:r==="en"?"Warning: If you delete this cleanup, it cannot be restored.":"Попередження: якщо ви видалите це прибирання, його не можна буде відновити."}),e.jsxs(x,{display:"flex",gap:"20px",children:[e.jsx(ae,{onClick:()=>s(!1),children:r==="en"?"Close":"Закрити"}),e.jsx(ae,{onClick:()=>{i(Ct({nameCollection:j,id:l._id,language:r})),a(null),s(!1)},children:r==="en"?"Delete":"Видалити"})]})]})]})})}dt.propTypes={setErrorDate:t.func,errorDate:t.bool,setValueDate:t.func,isDay:t.oneOfType([t.object,t.oneOf([null])])};function dt({errorDate:n,setErrorDate:s,setValueDate:l,isDay:a}){const[i,j]=c.useState(a?M(a).format("YYYY-MM-DD"):M(new Date).format("YYYY-MM-DD")),[r,f]=c.useState(null),h=C(H),d=/^\d{4}-\d{2}-\d{2}$/.test(i);c.useEffect(()=>{l(i)},[i,l]),c.useEffect(()=>{s(!!(i===""||i==="Invalid Date"||!d||r))},[i,r,s,d]);const u=()=>{if(n){if(!d)return h==="en"?"Incorrect date":"Неправильна дата";if(i==="")return h==="en"?"Date is required":"Необхідно вказати дату";if(r)return h==="en"?"You cannot enter a past date":"Не можна вводити минулу дату"}};return e.jsx(x,{sx:{width:"100%"},children:e.jsxs(_e,{dateAdapter:He,localeText:h==="ua"?Ve.components.MuiLocalizationProvider.defaultProps.localeText:Ue.components.MuiLocalizationProvider.defaultProps.localeText,adapterLocale:h==="ua"?"uk":"en",children:[e.jsx(Wt,{sx:{width:"100%"},label:h==="en"?"Select a date":"Виберіть дату",disablePast:!0,defaultValue:M(a??new Date),format:"YYYY-MM-DD",onChange:p=>j(M(p.$d).format("YYYY-MM-DD")),onError:p=>f(p)}),e.jsx(pe,{sx:{height:30,overflow:"auto",whiteSpace:"nowrap",scrollbarWidth:"thin"},error:!0,children:u()})]})})}const fn=W(x)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:n})=>n.palette.background.paper};
  box-shadow: ${({theme:n})=>n.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,hn=W(x)`
  position: absolute;
  right: 5px;
  top: 5px;
`;ut.propTypes={register:t.func,errors:t.object,isEdit:t.oneOfType([t.object,t.bool]),isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),taskList:t.array.isRequired,valueSelect:t.oneOfType([t.number,t.object]).isRequired,setValueSelect:t.func,selectError:t.oneOfType([t.string,t.bool]),setSelectError:t.func};function ut({valueSelect:n,setValueSelect:s,selectError:l,setSelectError:a,isEdit:i,isChooseALesson:j,taskList:r}){const f=C(H);return c.useEffect(()=>{i!=null&&i.edit&&(j!=null&&j.roomNumber)&&s(j.task.id)},[]),c.useEffect(()=>{a(n===""||!n?f==="en"?"Task is required":"Необхідно вказати задачу":!1)},[a,n]),e.jsxs(Z,{sx:{width:"100%",maxWidth:400},children:[e.jsx(ne,{children:f==="en"?"Choose a task":"Виберіть задачу"}),e.jsx(ie,{label:f==="en"?"Choose a task":"Виберіть задачу",value:n,onChange:h=>s(h.target.value),children:r.map((h,T)=>e.jsx(J,{value:h.id,children:h[f]},T))}),e.jsx(pe,{sx:{height:30,ml:0},error:!0,children:l})]})}pt.propTypes={setValueRoom:t.func,isEdit:t.oneOfType([t.object,t.bool]),isDay:t.oneOfType([t.object,t.oneOf([null])]),errorRoom:t.string,setErrorRoom:t.func,isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),valueRoom:t.string,valueSelect:t.oneOfType([t.number,t.object]).isRequired,corridorRange:t.object};function pt({setValueRoom:n,setErrorRoom:s,errorRoom:l,isEdit:a,isChooseALesson:i}){c.useEffect(()=>{a!=null&&a.edit&&(i!=null&&i.roomNumber)&&n(i.roomNumber)},[]);const j=C(H);return e.jsx(x,{sx:{width:"100%"},children:e.jsxs(Z,{sx:{width:"100%",maxWidth:400},children:[e.jsx(ne,{children:j==="ua"?"Кімната":"Room"}),e.jsx(Je,{onChange:r=>{const f=r.target.value;f.length>20?s(j==="en"?"Max 20 characters":"Максимум 20 символів"):s(""),n(f)},label:j==="en"?"Room":"Кімната"}),e.jsx(pe,{sx:{height:30,ml:0},error:!0,children:l})]})})}xt.propTypes={isDeleteModal:t.bool,setIsDeleteModal:t.func,setIsChooseALesson:t.func,isEdit:t.oneOfType([t.object,t.bool]),isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),setOpen:t.func,dispatch:t.func,onSubmit:t.func,valueSelect:t.oneOfType([t.number,t.object]).isRequired,open:t.bool,setValueSelect:t.func,register:t.func,errors:t.object,selectError:t.oneOfType([t.string,t.bool]),setSelectError:t.func,setValueRoom:t.func,isDay:t.oneOfType([t.object,t.oneOf([null])]),errorRoom:t.string,setErrorRoom:t.func,valueRoom:t.string,taskList:t.array.isRequired,setErrorDate:t.func,errorDate:t.bool,setValueDate:t.func,corridorRange:t.object};function xt({open:n,setOpen:s,onSubmit:l,isEdit:a,isChooseALesson:i,valueSelect:j,setValueSelect:r,selectError:f,setSelectError:h,setValueRoom:T,errorRoom:d,setErrorRoom:u,isDay:p,valueRoom:m,errorDate:q,setErrorDate:D,setValueDate:R,corridorRange:b,taskList:Y}){const $=C(H);return e.jsx(ye,{open:n,onClose:()=>{s(!1),D(!1)},children:e.jsxs(fn,{children:[e.jsx(hn,{children:e.jsx(Q,{onClick:()=>{s(!1),D(!1)},children:e.jsx(ue,{})})}),e.jsxs("form",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:400},onSubmit:F=>l(F),children:[e.jsx(ut,{isEdit:a,isChooseALesson:i,valueSelect:j,setValueSelect:r,selectError:f,setSelectError:h,taskList:Y}),!(a!=null&&a.edit)&&e.jsx(dt,{errorDate:q,setErrorDate:D,setValueDate:R,isDay:p}),e.jsx(pt,{isEdit:a,setValueRoom:T,errorRoom:d,setErrorRoom:u,isChooseALesson:i,isDay:p,valueRoom:m,valueSelect:j,corridorRange:b}),e.jsx(ae,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:$==="en"?"Submit":"Надіслати"})]})]})})}var ve={},jn=Be;Object.defineProperty(ve,"__esModule",{value:!0});var ft=ve.default=void 0,mn=jn(ze()),gn=e;ft=ve.default=(0,mn.default)((0,gn.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");const bn=W(x)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`,yn=W(x)`
  width: 100%;
  display: flex;

  justify-content: flex-end;
  gap: 10px;
`;ht.propTypes={nameCollection:t.string.isRequired};function ht({nameCollection:n}){const s=C(H),l=C(de),a=C(E),i=C(Dt),j=oe(),[r,f]=c.useState(""),[h,T]=c.useState(""),[d,u]=c.useState(""),[p,m]=c.useState(!1),[q,D]=c.useState(1),[R]=c.useState(20),[b,Y]=c.useState(1),[$,F]=c.useState(null),z=(k,N)=>{D(N),j(Te({nameCollection:n,roomNumber:h,isTidied:p,page:N,limit:R,setTotalPages:Y}))},U=async k=>{m(k.target.checked)},X=async k=>{const N=k.target.value.trim().replace(/\D/g,"");if(N>999){u(Zt({lang:s,errorType:"maxLength",length:999}));return}u(""),f(N)},L=k=>{k.preventDefault(),!(r.length<1)&&(D(1),j(Te({nameCollection:n,roomNumber:r,isTidied:p,page:q,limit:R,setTotalPages:Y,setTotalItems:F})),T(r),f(""),u(""))},y=(k,N,V)=>{const P={td:{textAlign:"center",whiteSpace:"nowrap"}},_=M().format("YYYY-MM-DD"),o=M().isAfter(M(N),"day");return _===N?(P.td.color=V?k.palette.success.dark:k.palette.info.dark,P.backgroundColor=V&&k.palette.success.dark+20,P):(o&&(P.td.color=V?k.palette.success.dark:k.palette.error.dark,P.backgroundColor=V?k.palette.success.dark+20:k.palette.error.dark+20),P)},w=[...l].filter(k=>M().isAfter(M(k.date),"day")&&!k.checked.isDone&&k),I=i&&i.length>0?i:w&&w.length>0?w:[];return e.jsxs(bn,{children:[e.jsx(te,{elevation:2,sx:{width:"100%",maxWidth:"400px",p:"16px"},children:e.jsx("form",{onSubmit:L,children:e.jsxs(Z,{fullWidth:!0,sx:{maxWidth:"400px"},error:!!d,children:[e.jsx(ne,{children:s==="en"?"Room":"Кімната"}),e.jsx(Je,{disabled:a,onChange:X,value:r,label:s==="en"?"Room":"Кімната",endAdornment:e.jsx(Lt,{position:"end",children:e.jsx(Q,{color:"info",type:"submit",disabled:!!d||r.length<1||a,children:e.jsx(ft,{})})})}),e.jsx(pe,{error:!!d,children:e.jsx(v,{variant:"caption",children:d||(s==="en"?"For all time":"За весь час")})}),e.jsx(yn,{children:e.jsxs("div",{children:[e.jsx(v,{variant:"caption",children:s==="en"?"Tidied":"Прибрано"}),e.jsx(et,{size:"small",checked:p,onChange:U})]})})]})})}),h&&e.jsxs(x,{sx:{width:"100%",maxWidth:"400px",textAlign:"center"},children:[e.jsx(x,{children:e.jsxs(v,{variant:"overline",textAlign:"center",children:[s==="en"?"Search result for: ":"Результат пошуку за: ",`${h}`]})}),i.length===0?e.jsx(x,{children:e.jsx(v,{variant:"caption",textAlign:"center",children:s==="en"?"No data":"Немає даних"})}):e.jsx(x,{children:e.jsx(v,{variant:"caption",textAlign:"center",children:s==="en"?`Found ${$} items`:`Знайдено ${$} елементів`})})]}),e.jsxs(Ke,{elevation:2,sx:{boxShadow:"0px 0px 5px -2px rgba(0,0,0,0.52)"},component:te,children:[e.jsxs(Qe,{children:[e.jsx(Ze,{children:e.jsxs(ce,{children:[e.jsx(A,{align:"center",sx:{whiteSpace:"nowrap"},children:s==="en"?"Room number":"Номер кімнати"}),e.jsx(A,{align:"center",children:s==="en"?"Date":"Дата"}),e.jsx(A,{align:"center",children:s==="en"?"Task":"Завдання"})]})}),!a&&e.jsx(Ee,{children:I==null?void 0:I.map(({_id:k,date:N,roomNumber:V,task:P,checked:_},o)=>{const S=_==null?void 0:_.isDone;return e.jsxs(ce,{id:k,sx:g=>y(g,N,S),children:[e.jsx(A,{children:V}),e.jsx(A,{children:N}),e.jsx(A,{children:P[s]})]},o)})})]}),b>1&&e.jsx(x,{width:"100%",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(tt,{count:b,variant:"outlined",color:"primary",disabled:a,page:q,boundaryCount:0,onChange:z})}),a&&e.jsx(x,{width:"100%",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(nt,{})}),!a&&(I==null?void 0:I.length)===0&&e.jsx(v,{variant:"h6",textAlign:"center",marginBottom:2,mt:2,children:s==="en"?"They are absent":"Відсутні"})]})]})}jt.propTypes={cleaningRules:t.string,nameCollection:t.string};function jt({cleaningRules:n,nameCollection:s}){const l=C(H),a=C(E);return e.jsxs(Nt,{children:[e.jsxs(Ce,{disabled:a,children:[e.jsx(le,{elevation:2,children:e.jsx(De,{expandIcon:e.jsx(Re,{}),children:e.jsx(v,{component:"span",children:e.jsx(v,{variant:"button",children:l==="en"?"RULES":"ПРАВИЛА"})})})}),e.jsx(le,{elevation:2,children:e.jsxs(Ie,{children:[e.jsx(v,{variant:"body1",sx:{whiteSpace:"pre-line"},children:n}),Pe[s]&&e.jsx(qe,{title:l==="en"?"Open a group in Telegram":"Відкрити групу в Telegram",children:e.jsx(Bt,{href:Pe[s]??null,target:"_blank",rel:"noopener noreferrer",children:e.jsxs(zt,{component:"div",variant:"button",children:[l==="en"?"JOIN":"ПРИЕДНАТИСЯ",e.jsx(_t,{color:"info",fontSize:"large"})]})})})]})})]}),e.jsxs(Ce,{disabled:a,children:[e.jsx(le,{elevation:2,children:e.jsx(De,{expandIcon:e.jsx(Re,{}),children:e.jsx(v,{component:"span",children:e.jsx(v,{variant:"button",children:l==="en"?"List of Those Who Didn't Clean":"Список тих, хто не здійснив прибирання"})})})}),e.jsx(le,{elevation:2,children:e.jsx(Ie,{children:e.jsx(ht,{nameCollection:s})})})]})]})}var Se={},vn=Be;Object.defineProperty(Se,"__esModule",{value:!0});var mt=Se.default=void 0,Sn=vn(ze()),wn=e;mt=Se.default=(0,Sn.default)((0,wn.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");gt.propTypes={nameCollection:t.string.isRequired};function gt({nameCollection:n}){const s=C(H),l=C(E),a=C(de),[i,j]=c.useState(null),[r,f]=c.useState(!1),h=oe(),T=()=>{const u=Rt.CancelToken.source();j(u),h(It({nameCollection:n,language:s,cancelToken:u,setAlreadySent:f}))},d=a.filter(({date:u})=>u===M().format("YYYY-MM-DD"));return c.useEffect(()=>()=>{i&&i.cancel("Компонент был размонтирован.")},[i]),e.jsx(e.Fragment,{children:e.jsx(e.Fragment,{children:d.length>0&&e.jsx("div",{children:e.jsx(ae,{onClick:T,disabled:l||r,endIcon:e.jsx(mt,{}),variant:"contained",children:s==="en"?"Send a reminder":"Відправити нагадування"})})})})}const kn=({permissions:n,nameCollection:s,corridorRange:l,image:a,taskList:i,mainTitle:j,cleaningRules:r})=>{const f=C(E),h=C(H),{displayName:T="No name",uid:d="No ID"}=C(We)||{},u=Me("(min-width:1100px)"),p=Me("(min-width:600px)"),m=Fe(),q=Ne(),D=oe(),R=q.pathname.split("/")[2],[b,Y]=c.useState(M()),[$,F]=c.useState(l.min),[z,U]=c.useState(1),[X,L]=c.useState(""),[y,w]=c.useState(!1),[I,k]=c.useState(!1),[N,V]=c.useState(""),[P,_]=c.useState(!1),[o,S]=c.useState(!1),[g,O]=c.useState(null),[B,G]=c.useState(!1),[K,se]=c.useState(!1),[ee,re]=c.useState(1),[xe,bt]=c.useState(100),[yt,we]=c.useState(1);c.useEffect(()=>{const fe=`/${s}/${R}`;return m(fe,{replace:!0}),D(Mt({nameCollection:s,locationMonth:R,page:ee,limit:xe})).unwrap().then(({totalPages:St})=>{we(St)}),()=>D(Pt())},[D,xe,R,s,m,ee]);const ke=()=>_(!0),vt=async fe=>{if(fe.preventDefault(),!(y||X||B)){if(o.edit){D(Le({language:h,nameCollection:s,id:g._id,updateValue:{roomNumber:$,task:i[z-1],editor:{displayName:T,uid:d}}})),f||(_(!1),O(null));return}D($t({language:h,nameCollection:s,data:{task:i[z-1],date:N,roomNumber:$,adder:{displayName:T,uid:d}}})),f||(_(!1),O(null))}};return e.jsxs(e.Fragment,{children:[e.jsx(Yt,{}),e.jsxs(x,{sx:{mb:5,width:"100%"},children:[e.jsx(Qt,{image:a,title:j}),e.jsxs(x,{display:"flex",width:"100%",gap:"40px",mt:"40px",flexWrap:u?"nowrap":"wrap",justifyContent:"center",children:[e.jsx(at,{nameCollection:s,locationMonth:R,handleAddALesson:ke,setIsDay:Y,setIsEdit:S,isEdit:o,open:P,setIsChooseALesson:O,isChooseALesson:g,isDay:b,setValueSelect:U,valueSelect:z,permissions:n,isDeleteModal:K,setIsDeleteModal:se}),e.jsx(te,{elevation:p?1:0,sx:{padding:p?5:"30px 0 0 0",width:"100%",boxShadow:"0px 0px 3px -2px rgba(0,0,0,0.82)"},children:e.jsxs(x,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"30px",children:[e.jsx(lt,{page:ee,setPage:re,limit:xe,setLitit:bt,totalPages:yt,setTotalPages:we,nameCollection:s,permissions:n,isDeleteModal:K,setIsDeleteModal:se,setIsEdit:S,handleAddALesson:ke,setIsChooseALesson:O,setValueSelect:U}),n&&e.jsx(gt,{nameCollection:s}),r&&e.jsx(jt,{cleaningRules:r,nameCollection:s},s)]})})]}),e.jsx(it,{passwordKey:"2024",sessionKey:"addLesson",closeClickInside:!0,openModal:I,setOpenModal:k,buttonClose:!0}),e.jsx(xt,{open:P,setOpen:_,onSubmit:vt,isEdit:o,isChooseALesson:g,valueSelect:z,setValueSelect:U,selectError:B,setSelectError:G,setValueRoom:F,errorRoom:X,setErrorRoom:L,isDay:b,valueRoom:$,errorDate:y,setErrorDate:w,setValueDate:V,corridorRange:l,taskList:i}),e.jsx(ct,{dispatch:D,isChooseALesson:g,isDeleteModal:K,isEdit:o,setIsChooseALesson:O,setIsDeleteModal:se,nameCollection:s})]})]})};kn.propTypes={permissions:t.bool.isRequired,nameCollection:t.string.isRequired,corridorRange:t.object.isRequired,image:t.string.isRequired,taskList:t.array.isRequired,mainTitle:t.string.isRequired,cleaningRules:t.string};export{kn as default};
