import{s as N,B as f,N as Pe,r as i,u as C,as as E,j as e,af as Ye,P as te,T as S,d as M,I as Q,aI as he,aJ as je,a9 as wt,a as t,aK as Oe,aL as kt,aM as qe,aq as be,b as H,ar as de,w as Fe,k as oe,ao as Ae,ap as Tt,a0 as Ne,n as ae,at as We,aN as Le,M as ye,au as Ct,C as Be,D as ze,aO as Dt,aP as Te,A as Ce,c as De,e as Re,f as Ie,l as Rt,aQ as It,aR as Me,av as Mt,aS as $t,x as Pt,aT as Yt}from"./index-C21SYr4s.js";import{C as Ot,P as qt,L as _e,u as Ve,e as Ue,A as He,D as Ft,a as At,b as Nt,I as Wt,c as Lt,R as le,S as Bt,d as zt,f as _t}from"./Rulse.styled-DtrEhf4U.js";import{a as Vt,d as Xe}from"./Edit-Cn_v7ID9.js";import{d as Ge}from"./Delete-DSNnP26z.js";import{d as ue}from"./Close-Bt2o6utt.js";import{F as Z,I as ne,a as Ut,O as Je}from"./OutlinedInput-DYN-JshN.js";import{S as ie,M as J,a as Ht}from"./Select-D5f0Gv2J.js";import{A as Xt}from"./index-DTELdDoF.js";import{R as Gt,F as me,a as ge,T as Ke,b as Qe,c as Ze,d as ce,e as A,f as Ee,t as $e}from"./telegram-DkNFeCmz.js";import{C as et,P as Jt}from"./Pdf-D_4-S_lP.js";import{P as tt}from"./Pagination-QtVfYxKd.js";import{C as nt}from"./CircularProgress-BYLs0TrM.js";import{d as Kt}from"./ArrowBack-DHjTOl8C.js";import{I as Qt}from"./ImageTitle-BYkQ_5C8.js";import{F as pe}from"./FormHelperText-COlUhijC.js";import{e as Zt}from"./errorMessages-pKoFKyyM.js";import"./Skeleton-CHAkQPuu.js";import"./createStyled-BxTx7Zg9.js";import"./TextField-DwHP9Uxu.js";import"./Link-H-OcNta1.js";import"./Stack-Bc13163f.js";const Et=N(f)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
`,en=N(f)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 5px 0px;
`,tn=N(f)`
  width: 100%;
  display: flex;
  gap: 15px;
  padding: 5px 16px;
  white-space: nowrap;
  color: ${({theme:n})=>n.palette.warning.main};
`,nn=N(f)`
  width: 100%;
  display: flex;
  gap: 30px;
  padding: 5px 16px;
  white-space: nowrap;
`;N(Pe)`
  text-decoration: none;
  color: transparent;
`;const st=({isEdit:n,handleClose:s,language:r,handleAddALesson:l,setIsChooseALesson:c,setIsEdit:j,isDay:a,setValueSelect:u,permissions:h,setIsDeleteModal:b})=>{var m,q,D,R,y;const[d,p]=i.useState(!1),x=C(E);return i.useEffect(()=>{c(n==null?void 0:n.data[0])},[]),e.jsx(Ye.div,{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:100},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(te,{elevation:2,children:e.jsx(Ot,{onClickAway:()=>{d||s()},children:e.jsxs(f,{children:[e.jsxs(Et,{children:[e.jsx(S,{variant:"subtitle2",children:M(a).format("YYYY-MM-DD")}),e.jsx(Q,{onClick:s,size:"small",children:e.jsx(ue,{fontSize:"small"})})]}),h&&e.jsxs(e.Fragment,{children:[((m=n==null?void 0:n.data)==null?void 0:m.length)>1&&e.jsxs(Z,{sx:{width:"100%",maxWidth:400},children:[e.jsx(ne,{children:r==="en"?"Choose a task":"Виберіть завдання"}),e.jsx(ie,{disabled:x,defaultValue:0,onChange:P=>{c(n==null?void 0:n.data[P.target.value]),u(n==null?void 0:n.data[P.target.value].task.id)},onFocus:()=>p(!0),onBlur:()=>p(!1),label:r==="en"?"Choose a task":"Виберіть завдання",children:(q=n==null?void 0:n.data)==null?void 0:q.map(({roomNumber:P,task:Y},F)=>e.jsx(J,{value:F,children:e.jsxs(S,{variant:"subtitle2",children:[e.jsxs(S,{component:"span",children:[P," - "]})," ",e.jsx(S,{component:"span",children:Y[r]})]})},F))})]}),e.jsxs(Ht,{children:[e.jsxs(J,{disabled:x,onClick:()=>{l()},children:[e.jsx(he,{children:r==="en"?"Add cleaning":"Додайте прибирання"}),e.jsx(je,{sx:{ml:2},children:e.jsx(Vt,{color:"success"})})]}),((D=n.data)==null?void 0:D.length)>0&&e.jsxs(f,{children:[e.jsxs(J,{disabled:x,onClick:()=>{j(P=>({...P,edit:!0})),l()},children:[e.jsx(he,{children:r==="en"?"Edit schedule":"Редагувати розклад"}),e.jsx(je,{sx:{ml:2},children:e.jsx(Xe,{color:"secondary"})})]}),e.jsxs(J,{disabled:x,onClick:()=>{b(!0)},children:[e.jsx(he,{children:r==="en"?"Delete schedule":"Видалити розклад"}),e.jsx(je,{sx:{ml:2},children:e.jsx(Ge,{color:"error"})})]})]})]})]}),((R=n==null?void 0:n.data)==null?void 0:R.length)>0&&e.jsxs(tn,{children:[e.jsx(S,{variant:"subtitle1",children:`${r==="en"?"Room":"Кімніта"} `}),e.jsx(S,{variant:"subtitle1",children:` ${r==="en"?"Task":"Задача"}`})]}),(y=n==null?void 0:n.data)==null?void 0:y.map(({roomNumber:P,task:Y},F)=>e.jsxs(en,{children:[e.jsx(wt,{sx:{width:"100%"}}),e.jsxs(nn,{children:[e.jsx(S,{variant:"subtitle2",sx:z=>({color:z.palette.success.main}),children:`${P}`}),e.jsx(S,{variant:"subtitle2",sx:z=>({color:z.palette.success.main}),children:`${Y[r]}`})]})]},F))]})})})})};st.propTypes={handleAddALesson:t.func,isEdit:t.oneOfType([t.object,t.bool]),setIsEdit:t.func,open:t.bool,handleClose:t.func,language:t.string,setIsChooseALesson:t.func,isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),isDay:t.oneOfType([t.object,t.oneOf([null])]),setValueSelect:t.func,valueSelect:t.oneOfType([t.number,t.object]).isRequired,permissions:t.bool,isDeleteModal:t.bool,setIsDeleteModal:t.func};const rt=({permissions:n,setIsModal:s,setIsEdit:r,shouldDisplay:l,props:c,language:j})=>{const a=Oe(),u=l.sort((b,d)=>{const p=new Date(b.date);return new Date(d.date)-p}),h=()=>{!n&&!l||!n&&l.length===0||(s(!0),r({edit:!1,data:l}))};return e.jsx(f,{children:e.jsxs(f,{position:"relative",children:[l.length===1&&e.jsx(f,{sx:{position:"absolute",top:-5,right:-5,zIndex:5},children:e.jsx(kt,{fontSize:"small",sx:{color:a.palette.success.main}})}),e.jsx(f,{children:l.length>1&&e.jsx(f,{sx:b=>({position:"absolute",top:-2,right:-2,width:16,height:16,borderRadius:"50%",background:b.palette.secondary.main,display:"flex",justifyContent:"center",alignItems:"center",zIndex:5}),children:e.jsx(S,{variant:"caption",color:"#111",children:l.length})})}),e.jsx(qe,{component:"div",classes:{tooltip:"custom-tooltip"},title:u.length>0&&e.jsx("div",{style:{maxHeight:100,overflow:"auto",scrollbarWidth:"thin",padding:5},children:u.map(({roomNumber:b,task:d,date:p})=>e.jsxs("div",{style:{padding:5},children:[e.jsxs(S,{variant:"subtitle2",textAlign:"center",component:"div",children:[j==="en"?"Room: ":"Кімніта: ",b]}),e.jsx(S,{variant:"subtitle2",textAlign:"center",component:"div",children:d[j]}),e.jsx(S,{variant:"subtitle2",textAlign:"center",component:"div",children:p})]},be()))}),placement:"top-end",children:e.jsx(qt,{onClick:h,...c,sx:{border:c.today?`solid 2px ${a.palette.info.main} !important`:l.length>0&&`solid 2px ${a.palette.success.main}`,background:c.today&&`${a.palette.info.main} !important`}})})]})})};rt.propTypes={props:t.object,today:t.bool,setIsModal:t.func,setIsEdit:t.func,shouldDisplay:t.array,permissions:t.bool.isRequired,isEdit:t.oneOfType([t.object,t.bool]),language:t.string};function at({handleAddALesson:n,setIsDay:s,isEdit:r,setIsEdit:l,open:c,setIsChooseALesson:j,isChooseALesson:a,isDay:u,setValueSelect:h,valueSelect:b,permissions:d,isDeleteModal:p,setIsDeleteModal:x,locationMonth:m,nameCollection:q}){const[D,R]=i.useState(!1),y=C(H),P=C(E),Y=C(de),F=Fe(),z=()=>{s(null),R(!1)},U=()=>!(M(m).isBefore(M().format("YYYY-MM"))||M(`${m}`).isAfter(M().format("YYYY-MM"))),X=({day:W})=>{const v=M(W.$d).format("YYYY-MM-DD");return Y==null?void 0:Y.filter(({date:k})=>v===k)};return e.jsx(f,{children:e.jsxs(te,{elevation:1,sx:{p:2,position:"relative",boxShadow:"0px 0px 4px -2px rgba(0,0,0,0.52)","& .MuiPickersDay-root.Mui-selected":!U()&&{backgroundColor:"transparent !important",color:"inherit !important"}},children:[e.jsx(_e,{dateAdapter:He,localeText:y==="ua"?Ve.components.MuiLocalizationProvider.defaultProps.localeText:Ue.components.MuiLocalizationProvider.defaultProps.localeText,adapterLocale:y==="ua"?"uk":"en",children:e.jsx(Ft,{disabled:P,value:null,disableFuture:P,disablePast:P,onMonthChange:W=>{const v=`/${q}/${W.format("YYYY-MM")}`;F(v,{replace:!0})},onChange:W=>s(W),views:["day"],loading:P,renderLoading:()=>e.jsx(At,{}),slots:{day:W=>{const v=X(W);return e.jsx(rt,{permissions:d,isEdit:r,setIsModal:R,setIsEdit:l,shouldDisplay:v,props:W,language:y})}}},y)}),e.jsx(Xt,{children:D&&e.jsx(st,{open:c,isEdit:r,setIsEdit:l,handleClose:z,language:y,handleAddALesson:n,setIsChooseALesson:j,isChooseALesson:a,isDay:u,setValueSelect:h,valueSelect:b,permissions:d,isDeleteModal:p,setIsDeleteModal:x})})]})})}at.propTypes={today:t.bool,handleAddALesson:t.func,setIsDay:t.func,isDay:t.oneOfType([t.object,t.oneOf([null])]),isEdit:t.oneOfType([t.object,t.bool]),setIsEdit:t.func,open:t.bool,setIsChooseALesson:t.func,isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),valueSelect:t.oneOfType([t.number,t.object]).isRequired,setValueSelect:t.func,permissions:t.bool,isDeleteModal:t.bool,setIsDeleteModal:t.func,nameCollection:t.string.isRequired,locationMonth:t.string.isRequired};const sn=N(f)`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;ot.propTypes={isLoading:t.bool.isRequired,language:t.string.isRequired,setIsFilterTask:t.func.isRequired,isFilterTas:t.array.isRequired,uniqTaskList:t.object.isRequired,room:t.string.isRequired,setRoom:t.func.isRequired,uniqRoomList:t.array.isRequired,nameCollection:t.string.isRequired};function ot({isLoading:n,language:s,setIsFilterTask:r,isFilterTas:l,uniqTaskList:c,room:j,setRoom:a,uniqRoomList:u,nameCollection:h}){var p;const b=oe(),d=C(Ae);return e.jsxs("div",{children:[e.jsxs(Z,{children:[e.jsx(Ut,{children:s==="en"?"Show list":"Показувати список"}),e.jsxs(Gt,{row:!0,value:d["filter"+h]?d["filter"+h]:"Fully",onChange:x=>b(Tt({["filter"+h]:x.target.value})),children:[e.jsx(me,{disabled:n,value:"Fully",control:e.jsx(ge,{}),label:s==="en"?"Fully":"Повністю"}),e.jsx(me,{disabled:n,value:"Current week",control:e.jsx(ge,{}),label:s==="en"?"Current week":"Поточний тиждень"}),e.jsx(me,{disabled:n,value:"Hide past dates",control:e.jsx(ge,{}),label:s==="en"?"Hide past dates":"Приховати минулі дати"})]})]}),e.jsxs(sn,{children:[e.jsxs(Z,{size:"small",sx:{width:"150px"},children:[e.jsx(ne,{children:s==="en"?"Task":"Завдання"}),e.jsxs(ie,{multiple:!0,value:l,label:s==="en"?"Task":"Завдання",onChange:x=>r(x.target.value),children:[e.jsx(J,{value:"",children:s==="en"?"All":"Всі"}),(p=c[s])==null?void 0:p.map((x,m)=>e.jsx(J,{value:c.en[m],children:x},be()))]})]}),e.jsxs(Z,{size:"small",sx:{width:"150px"},disabled:n,children:[e.jsx(ne,{children:s==="en"?"Room":"Кімната"}),e.jsxs(ie,{value:j,label:s==="en"?"Room":"Кімната",onChange:x=>a(x.target.value),children:[e.jsx(J,{value:"",children:s==="en"?"Reset":"Скинути"}),(u==null?void 0:u.length)>0&&(u==null?void 0:u.map(x=>e.jsxs(J,{value:String(x),children:[s==="en"?" Room":" Кімната"," ",x]},be())))]})]})]})]})}lt.propTypes={isDeleteModal:t.bool,setIsDeleteModal:t.func,permissions:t.bool.isRequired,nameCollection:t.string.isRequired,setIsEdit:t.func,handleAddALesson:t.func,setIsChooseALesson:t.func,setValueSelect:t.func,isEdit:t.oneOfType([t.object,t.bool]),isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),page:t.number.isRequired,setPage:t.func.isRequired,limit:t.number.isRequired,setLitit:t.func.isRequired,totalPages:t.number.isRequired,setTotalPages:t.func.isRequired};function lt({setIsDeleteModal:n,setIsEdit:s,permissions:r,handleAddALesson:l,setIsChooseALesson:c,setValueSelect:j,nameCollection:a,page:u,setPage:h,totalPages:b}){const d=C(H),p=C(de),x=C(E),m=C(Ne)||{},q=C(Ae),[D,R]=i.useState([]),[y,P]=i.useState({}),[Y,F]=i.useState([]),z=i.useMemo(()=>{const o=new Set,w=new Set;return p==null||p.forEach(({task:g})=>o.add(g.en)),p==null||p.forEach(({task:g})=>w.add(g.ua)),{en:[...o],ua:[...w]}},[p]),U=i.useMemo(()=>{const o=new Set;return p==null||p.map(({roomNumber:g})=>o.add(g)),[...o].sort((g,O)=>g-O)},[p]),X=oe(),[W,v]=i.useState(""),[k,I]=i.useState(!1),T=(o,w)=>{h(w)},L=(o,w,g)=>{g!=null&&g.checker&&g.isDone&&m.uid!==(g==null?void 0:g.checker.userId)||X(We({language:d,nameCollection:a,id:w,updateValue:{checked:{isDone:o.target.checked,checker:{displayName:(m==null?void 0:m.roomNumber)??(m==null?void 0:m.displayName)??"",userId:m.uid}}}}))},V=(o,w,g)=>{const O={td:{textAlign:"center",whiteSpace:"nowrap"}},B=M().format("YYYY-MM-DD"),G=M().isAfter(M(w),"day");return B===w?(O.td.color=g?o.palette.success.dark:o.palette.info.dark,O.backgroundColor=g&&o.palette.success.dark+20,O):(G&&(O.td.color=g?o.palette.success.dark:o.palette.error.dark,O.backgroundColor=g?o.palette.success.dark+20:o.palette.error.dark+20),O)},$=[...p].sort((o,w)=>{const g=new Date(o.date),O=new Date(w.date);if(g-O!==0)return g-O;if(o.task.en.localeCompare(w.task.en)!==0)return o.task.en.localeCompare(w.task.en);const B=parseInt(o.roomNumber,10),G=parseInt(w.roomNumber,10);return B-G}),_=()=>{let o=$;return D.length>0&&(D.includes("")?o=$:o=$==null?void 0:$.filter(w=>D.includes(w.task.en))),W&&(o=o==null?void 0:o.filter(({roomNumber:w})=>String(w)===W)),(q["filter"+a]?q["filter"+a]:"Fully")==="Hide past dates"&&(o=o==null?void 0:o.filter(({date:w})=>M(w).isAfter(M())||M(w).isSame(M(),"day"))),(q["filter"+a]?q["filter"+a]:"Fully")==="Current week"&&(o=o==null?void 0:o.filter(({date:w})=>{const g=M(w),O=M().startOf("week"),B=M().endOf("week");return g.isAfter(O)&&g.isBefore(B)})),o};return i.useEffect(()=>{P(z),F(U)},[U,z]),e.jsxs(e.Fragment,{children:[e.jsx(ot,{isLoading:x,language:d,isFilterTas:D,setIsFilterTask:R,uniqTaskList:y,room:W,setRoom:v,uniqRoomList:Y,nameCollection:a}),e.jsxs(Ke,{elevation:2,sx:{boxShadow:"0px 0px 5px -2px rgba(0,0,0,0.52)"},component:te,children:[e.jsxs(Qe,{children:[e.jsx(Ze,{children:e.jsxs(ce,{children:[e.jsx(A,{align:"center",sx:{whiteSpace:"nowrap"},children:d==="en"?"Room number":"Номер кімнати"}),e.jsx(A,{align:"center",children:d==="en"?"Date":"Дата"}),e.jsx(A,{align:"center",children:d==="en"?"Task":"Завдання"}),r&&e.jsxs(e.Fragment,{children:[e.jsx(A,{align:"center",children:d==="en"?"Done":"Готово"}),e.jsx(A,{align:"center",sx:{whiteSpace:"nowrap"},children:d==="en"?"Confirmed by":"Підтверджено "}),e.jsx(A,{align:"center",children:d==="en"?"Edit":"Редагувати"}),e.jsx(A,{align:"center",children:d==="en"?"Delete":"Видалити"})]})]})}),e.jsx(Ee,{children:$&&$.length>0&&_().map(({_id:o,date:w,roomNumber:g,task:O,checked:B},G,K)=>{var ee;const se=B.isDone;return e.jsxs(ce,{id:o,sx:re=>V(re,w,se),children:[e.jsx(A,{children:g}),e.jsx(A,{children:w}),e.jsx(A,{children:O[d]}),r&&e.jsxs(e.Fragment,{children:[e.jsx(A,{align:"center",sx:{display:"flex",alignItems:"center",gap:"10px"},children:e.jsx(et,{disabled:x,checked:B.isDone,onChange:re=>L(re,o,B),color:"success"})}),e.jsx(A,{children:(B==null?void 0:B.isDone)&&e.jsx(S,{variant:"caption",whiteSpace:"nowrap",children:(ee=B==null?void 0:B.checker)==null?void 0:ee.displayName})})]}),r&&e.jsxs(e.Fragment,{children:[e.jsx(A,{align:"center",children:e.jsx(Q,{disabled:x,color:"secondary",onClick:()=>{j(O.id),c(K[G]),s({edit:!0,data:K}),l()},children:e.jsx(Xe,{})})}),e.jsx(A,{align:"center",children:e.jsx(Q,{disabled:x,color:"error",onClick:()=>{n(!0),c(K[G]),s({edit:!0,data:K})},children:e.jsx(Ge,{})})})]})]},G)})})]}),b>1&&e.jsx(f,{width:"100%",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(tt,{count:b,variant:"outlined",color:"primary",disabled:x,page:u,boundaryCount:0,onChange:T})}),x&&e.jsx(f,{width:"100%",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(nt,{})}),!x&&$.length===0&&e.jsx(S,{variant:"h6",textAlign:"center",marginBottom:2,mt:2,children:d==="en"?"Cleaning this month are not yet scheduled":"Прибирання в цьому місяці ще не заплановано"})]}),$&&$.length>0&&e.jsxs(e.Fragment,{children:[k&&e.jsx(Jt,{data:_()?_():[],nameCollection:a}),r&&e.jsx(ae,{variant:"contained",onClick:()=>I(o=>!o),children:k?d==="en"?"Collapse a PDF":"Згорнути PDF":d==="en"?"Make a PDF":"Зробити PDF"})]})]})}const rn=N(f)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: ${({theme:n})=>{var s,r;return(r=(s=n==null?void 0:n.palette)==null?void 0:s.background)==null?void 0:r.paper}};
  box-shadow: ${({theme:n})=>n.shadows[11]};
  padding: 50px;
  border-radius: 5px;
`,an=N(Pe)`
  color: transparent;
  text-decoration: none;
`,on=N(f)`
  position: absolute;
  left: 15px;
  top: 15px;
`,ln=N(f)`
  position: absolute;
  right: 15px;
  top: 15px;
`,cn=N("input")`
  border-radius: 5px;
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: center;
  background-color: inherit;
`,dn=N(f)`
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
`,un=N(f)`
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
`,it=({passwordKey:n,sessionKey:s,buttonBack:r=!1,closeClickInside:l=!1,openWithInitilizat:c=!1,openModal:j=!1,setOpenModal:a=!1,buttonClose:u=!1})=>{const h=C(H),[b,d]=i.useState(c??!sessionStorage.getItem(s)),[p,x]=i.useState(null),m=i.useRef({1:"",2:"",3:"",4:""}),[q,D]=i.useState({1:"",2:"",3:"",4:""}),R=Object.values(q).join(""),y=Oe(),P=()=>d(!1),Y=R.length===4&&n!==R,F=n===R,{state:z}=Le();i.useEffect(()=>{F&&(sessionStorage.setItem(s,"access"),setTimeout(()=>{a&&a(!1),P()},500))},[F,s,a]),i.useEffect(()=>{R.length===4&&m.current[p].blur()},[p,R.length]);const U=(v,k)=>{const I=v.target.value,T=I.replace(/\D/g,"");if(D(()=>({...q,[v.target.id]:T.slice(0,1)})),!isNaN(I)&&I!==""){if(k===4){m.current[1].focus();return}m.current[k+1].focus()}},X=(v,k)=>{if(v.keyCode===39){if(k===4)return m.current[1].focus();m.current[k+1].focus()}if(v.keyCode===37){if(k===1)return m.current[4].focus();m.current[k-1].focus(),m.current[k-1]}if(v.keyCode===8){if(R.length===0&&m.current[k].blur(),v.preventDefault(),k===1){D(I=>({...I,[k]:""})),m.current[4].focus();return}m.current[k-1].focus(),D(I=>({...I,[k]:""}))}},W=v=>{var k,I,T,L,V,$,_,o;return R===n?(I=(k=y==null?void 0:y.palette)==null?void 0:k.success)==null?void 0:I.main:R.length===4&&n!==R?(L=(T=y==null?void 0:y.palette)==null?void 0:T.error)==null?void 0:L.main:q[v]?($=(V=y==null?void 0:y.palette)==null?void 0:V.info)==null?void 0:$.main:(o=(_=y==null?void 0:y.palette)==null?void 0:_.text)==null?void 0:o.primary};return e.jsx(e.Fragment,{children:e.jsx(ye,{open:j||b,onClose:()=>{l&&d(!1),a&&a(!1)},children:e.jsxs(rn,{children:[r&&e.jsx(on,{children:e.jsx(an,{to:z??"/",children:e.jsx(Q,{children:e.jsx(Kt,{})})})}),u&&e.jsx(ln,{children:e.jsx(Q,{onClick:()=>{a?a(!1):d(!1)},children:e.jsx(ue,{})})}),e.jsxs(f,{sx:{display:"flex",gap:1,flexDirection:"column",alignItems:"center"},children:[e.jsx(S,{variant:"subtitle2",children:h==="en"?"Enter password":"Введіть пароль"}),e.jsx(f,{sx:{position:"relative",width:200,height:50},children:e.jsx(dn,{error:Y?"+":"",success:F?"+":"",children:[1,2,3,4].map((v,k)=>e.jsx(un,{tab:Number(v)<=Number(q[v])?"+":"",borderColor:W(v),children:e.jsx(cn,{ref:I=>{m.current[v]=I},id:v,onChange:I=>U(I,v),value:q[v],autoComplete:"off",autoFocus:v===1,onKeyDown:I=>X(I,v),onFocus:()=>x(v),type:"tel"})},k))})}),e.jsx(Ye.div,{animate:{opacity:Y||F?1:0},transition:{duration:.5},style:{height:50,width:"100%"},children:e.jsxs(f,{display:"flex",flexDirection:"column",alignItems:"center",gap:0,color:Y?y.palette.error.main:y.palette.success.main,children:[Y&&(h==="en"?e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"The password is incorrect,"}),e.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"please try again"})]}):e.jsxs(e.Fragment,{children:[e.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"Пароль невірний,"}),e.jsx(S,{variant:"subtitle2",component:"span",textAlign:"center",children:"спробуйте ще раз"})]})),e.jsx(S,{variant:"h6",component:"span",textAlign:"center",children:F&&(h==="en"?"Success":"Yспіх")})]})})]})]})})})};it.propTypes={passwordKey:t.string.isRequired,sessionKey:t.string.isRequired,buttonBack:t.bool,closeClickInside:t.bool,openWithInitilizat:t.bool,openModal:t.bool,setOpenModal:t.func,buttonClose:t.bool};const pn=N(f)`
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
`,xn=N(f)`
  position: absolute;
  right: 5px;
  top: 5px;
`;ct.propTypes={isDeleteModal:t.bool,setIsDeleteModal:t.func,setIsChooseALesson:t.func,isEdit:t.oneOfType([t.object,t.bool]),isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),dispatch:t.func,nameCollection:t.string.isRequired};function ct({isDeleteModal:n,setIsDeleteModal:s,isChooseALesson:r,setIsChooseALesson:l,dispatch:c,nameCollection:j}){const a=C(H);return e.jsx(ye,{open:n,onClose:()=>{s(!1)},children:e.jsxs(pn,{children:[e.jsx(xn,{children:e.jsx(Q,{onClick:()=>{s(!1)},children:e.jsx(ue,{})})}),e.jsxs(f,{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",children:[r&&e.jsx(S,{variant:"subtitle2",textAlign:"center",sx:u=>({color:u.palette.warning.main}),children:`${r.date} ${a==="en"?"Room:":"Кімната:"} ${r.roomNumber} ${a==="en"?"Task:":"Задача:"} ${r.task[a]}`}),e.jsx(S,{variant:"subtitle2",textAlign:"center",sx:u=>({color:u.palette.error.main}),children:a==="en"?"Warning: If you delete this cleanup, it cannot be restored.":"Попередження: якщо ви видалите це прибирання, його не можна буде відновити."}),e.jsxs(f,{display:"flex",gap:"20px",children:[e.jsx(ae,{onClick:()=>s(!1),children:a==="en"?"Close":"Закрити"}),e.jsx(ae,{onClick:()=>{c(Ct({nameCollection:j,id:r._id,language:a})),l(null),s(!1)},children:a==="en"?"Delete":"Видалити"})]})]})]})})}dt.propTypes={setErrorDate:t.func,errorDate:t.bool,setValueDate:t.func,isDay:t.oneOfType([t.object,t.oneOf([null])])};function dt({errorDate:n,setErrorDate:s,setValueDate:r,isDay:l}){const[c,j]=i.useState(l?M(l).format("YYYY-MM-DD"):M(new Date).format("YYYY-MM-DD")),[a,u]=i.useState(null),h=C(H),d=/^\d{4}-\d{2}-\d{2}$/.test(c);i.useEffect(()=>{r(c)},[c,r]),i.useEffect(()=>{s(!!(c===""||c==="Invalid Date"||!d||a))},[c,a,s,d]);const p=()=>{if(n){if(!d)return h==="en"?"Incorrect date":"Неправильна дата";if(c==="")return h==="en"?"Date is required":"Необхідно вказати дату";if(a)return h==="en"?"You cannot enter a past date":"Не можна вводити минулу дату"}};return e.jsx(f,{sx:{width:"100%"},children:e.jsxs(_e,{dateAdapter:He,localeText:h==="ua"?Ve.components.MuiLocalizationProvider.defaultProps.localeText:Ue.components.MuiLocalizationProvider.defaultProps.localeText,adapterLocale:h==="ua"?"uk":"en",children:[e.jsx(Nt,{sx:{width:"100%"},label:h==="en"?"Select a date":"Виберіть дату",disablePast:!0,defaultValue:M(l??new Date),format:"YYYY-MM-DD",onChange:x=>j(M(x.$d).format("YYYY-MM-DD")),onError:x=>u(x)}),e.jsx(pe,{sx:{height:30,overflow:"auto",whiteSpace:"nowrap",scrollbarWidth:"thin"},error:!0,children:p()})]})})}const fn=N(f)`
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
`,hn=N(f)`
  position: absolute;
  right: 5px;
  top: 5px;
`;ut.propTypes={register:t.func,errors:t.object,isEdit:t.oneOfType([t.object,t.bool]),isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),taskList:t.array.isRequired,valueSelect:t.oneOfType([t.number,t.object]).isRequired,setValueSelect:t.func,selectError:t.oneOfType([t.string,t.bool]),setSelectError:t.func};function ut({valueSelect:n,setValueSelect:s,selectError:r,setSelectError:l,isEdit:c,isChooseALesson:j,taskList:a}){const u=C(H);return i.useEffect(()=>{c!=null&&c.edit&&(j!=null&&j.roomNumber)&&s(j.task.id)},[]),i.useEffect(()=>{l(n===""||!n?u==="en"?"Task is required":"Необхідно вказати задачу":!1)},[l,n]),e.jsxs(Z,{sx:{width:"100%",maxWidth:400},children:[e.jsx(ne,{children:u==="en"?"Choose a task":"Виберіть задачу"}),e.jsx(ie,{label:u==="en"?"Choose a task":"Виберіть задачу",value:n,onChange:h=>s(h.target.value),children:a.map((h,b)=>e.jsx(J,{value:h.id,children:h[u]},b))}),e.jsx(pe,{sx:{height:30,ml:0},error:!0,children:r})]})}pt.propTypes={setValueRoom:t.func,isEdit:t.oneOfType([t.object,t.bool]),isDay:t.oneOfType([t.object,t.oneOf([null])]),errorRoom:t.string,setErrorRoom:t.func,isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),valueRoom:t.number,valueSelect:t.oneOfType([t.number,t.object]).isRequired,corridorRange:t.object};function pt({setValueRoom:n,setErrorRoom:s,corridorRange:r,errorRoom:l,isEdit:c,isChooseALesson:j,valueRoom:a}){i.useEffect(()=>{c!=null&&c.edit&&(j!=null&&j.roomNumber)&&n(j.roomNumber)},[]);const u=C(H);return e.jsx(f,{sx:{width:"100%"},children:e.jsxs(Z,{sx:{width:"100%",maxWidth:400},children:[e.jsx(ne,{children:u==="en"?"Room":"Кімната"}),e.jsx(Je,{id:"component-outlined",value:a,onChange:h=>{let b=h.target.value.replace(/\D/g,"");b.length>3&&(b=b.slice(0,3));const d=Number(b);d<r.min||d>r.max?s(u==="en"?`Range of rooms ${r.min}-${r.max}`:`Діапазон кімнат ${r.min}-${r.max}`):s(""),n(d)},label:u==="en"?"Room":"Кімната"}),e.jsx(pe,{sx:{height:30,ml:0},error:!0,children:l})]})})}xt.propTypes={isDeleteModal:t.bool,setIsDeleteModal:t.func,setIsChooseALesson:t.func,isEdit:t.oneOfType([t.object,t.bool]),isChooseALesson:t.oneOfType([t.object,t.oneOf([null])]),setOpen:t.func,dispatch:t.func,onSubmit:t.func,valueSelect:t.oneOfType([t.number,t.object]).isRequired,open:t.bool,setValueSelect:t.func,register:t.func,errors:t.object,selectError:t.oneOfType([t.string,t.bool]),setSelectError:t.func,setValueRoom:t.func,isDay:t.oneOfType([t.object,t.oneOf([null])]),errorRoom:t.string,setErrorRoom:t.func,valueRoom:t.number,taskList:t.array.isRequired,setErrorDate:t.func,errorDate:t.bool,setValueDate:t.func,corridorRange:t.object};function xt({open:n,setOpen:s,onSubmit:r,isEdit:l,isChooseALesson:c,valueSelect:j,setValueSelect:a,selectError:u,setSelectError:h,setValueRoom:b,errorRoom:d,setErrorRoom:p,isDay:x,valueRoom:m,errorDate:q,setErrorDate:D,setValueDate:R,corridorRange:y,taskList:P}){const Y=C(H);return e.jsx(ye,{open:n,onClose:()=>{s(!1),D(!1)},children:e.jsxs(fn,{children:[e.jsx(hn,{children:e.jsx(Q,{onClick:()=>{s(!1),D(!1)},children:e.jsx(ue,{})})}),e.jsxs("form",{style:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:400},onSubmit:F=>r(F),children:[e.jsx(ut,{isEdit:l,isChooseALesson:c,valueSelect:j,setValueSelect:a,selectError:u,setSelectError:h,taskList:P}),!(l!=null&&l.edit)&&e.jsx(dt,{errorDate:q,setErrorDate:D,setValueDate:R,isDay:x}),e.jsx(pt,{isEdit:l,setValueRoom:b,errorRoom:d,setErrorRoom:p,isChooseALesson:c,isDay:x,valueRoom:m,valueSelect:j,corridorRange:y}),e.jsx(ae,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:Y==="en"?"Submit":"Надіслати"})]})]})})}var ve={},jn=Be;Object.defineProperty(ve,"__esModule",{value:!0});var ft=ve.default=void 0,mn=jn(ze()),gn=e;ft=ve.default=(0,mn.default)((0,gn.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");const bn=N(f)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`,yn=N(f)`
  width: 100%;
  display: flex;

  justify-content: flex-end;
  gap: 10px;
`;ht.propTypes={nameCollection:t.string.isRequired};function ht({nameCollection:n}){const s=C(H),r=C(de),l=C(E),c=C(Dt),j=oe(),[a,u]=i.useState(""),[h,b]=i.useState(""),[d,p]=i.useState(""),[x,m]=i.useState(!1),[q,D]=i.useState(1),[R]=i.useState(20),[y,P]=i.useState(1),[Y,F]=i.useState(null),z=(T,L)=>{D(L),j(Te({nameCollection:n,roomNumber:h,isTidied:x,page:L,limit:R,setTotalPages:P}))},U=async T=>{m(T.target.checked)},X=async T=>{const L=T.target.value.trim().replace(/\D/g,"");if(L>999){p(Zt({lang:s,errorType:"maxLength",length:999}));return}p(""),u(L)},W=T=>{T.preventDefault(),!(a.length<1)&&(D(1),j(Te({nameCollection:n,roomNumber:a,isTidied:x,page:q,limit:R,setTotalPages:P,setTotalItems:F})),b(a),u(""),p(""))},v=(T,L,V)=>{const $={td:{textAlign:"center",whiteSpace:"nowrap"}},_=M().format("YYYY-MM-DD"),o=M().isAfter(M(L),"day");return _===L?($.td.color=V?T.palette.success.dark:T.palette.info.dark,$.backgroundColor=V&&T.palette.success.dark+20,$):(o&&($.td.color=V?T.palette.success.dark:T.palette.error.dark,$.backgroundColor=V?T.palette.success.dark+20:T.palette.error.dark+20),$)},k=[...r].filter(T=>M().isAfter(M(T.date),"day")&&!T.checked.isDone&&T),I=c&&c.length>0?c:k&&k.length>0?k:[];return e.jsxs(bn,{children:[e.jsx(te,{elevation:2,sx:{width:"100%",maxWidth:"400px",p:"16px"},children:e.jsx("form",{onSubmit:W,children:e.jsxs(Z,{fullWidth:!0,sx:{maxWidth:"400px"},error:!!d,children:[e.jsx(ne,{children:s==="en"?"Room":"Кімната"}),e.jsx(Je,{disabled:l,onChange:X,value:a,label:s==="en"?"Room":"Кімната",endAdornment:e.jsx(Wt,{position:"end",children:e.jsx(Q,{color:"info",type:"submit",disabled:!!d||a.length<1||l,children:e.jsx(ft,{})})})}),e.jsx(pe,{error:!!d,children:e.jsx(S,{variant:"caption",children:d||(s==="en"?"For all time":"За весь час")})}),e.jsx(yn,{children:e.jsxs("div",{children:[e.jsx(S,{variant:"caption",children:s==="en"?"Tidied":"Прибрано"}),e.jsx(et,{size:"small",checked:x,onChange:U})]})})]})})}),h&&e.jsxs(f,{sx:{width:"100%",maxWidth:"400px",textAlign:"center"},children:[e.jsx(f,{children:e.jsxs(S,{variant:"overline",textAlign:"center",children:[s==="en"?"Search result for: ":"Результат пошуку за: ",`${h}`]})}),c.length===0?e.jsx(f,{children:e.jsx(S,{variant:"caption",textAlign:"center",children:s==="en"?"No data":"Немає даних"})}):e.jsx(f,{children:e.jsx(S,{variant:"caption",textAlign:"center",children:s==="en"?`Found ${Y} items`:`Знайдено ${Y} елементів`})})]}),e.jsxs(Ke,{elevation:2,sx:{boxShadow:"0px 0px 5px -2px rgba(0,0,0,0.52)"},component:te,children:[e.jsxs(Qe,{children:[e.jsx(Ze,{children:e.jsxs(ce,{children:[e.jsx(A,{align:"center",sx:{whiteSpace:"nowrap"},children:s==="en"?"Room number":"Номер кімнати"}),e.jsx(A,{align:"center",children:s==="en"?"Date":"Дата"}),e.jsx(A,{align:"center",children:s==="en"?"Task":"Завдання"})]})}),!l&&e.jsx(Ee,{children:I==null?void 0:I.map(({_id:T,date:L,roomNumber:V,task:$,checked:_},o)=>{const w=_==null?void 0:_.isDone;return e.jsxs(ce,{id:T,sx:g=>v(g,L,w),children:[e.jsx(A,{children:V}),e.jsx(A,{children:L}),e.jsx(A,{children:$[s]})]},o)})})]}),y>1&&e.jsx(f,{width:"100%",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(tt,{count:y,variant:"outlined",color:"primary",disabled:l,page:q,boundaryCount:0,onChange:z})}),l&&e.jsx(f,{width:"100%",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(nt,{})}),!l&&(I==null?void 0:I.length)===0&&e.jsx(S,{variant:"h6",textAlign:"center",marginBottom:2,mt:2,children:s==="en"?"They are absent":"Відсутні"})]})]})}jt.propTypes={cleaningRules:t.string,nameCollection:t.string};function jt({cleaningRules:n,nameCollection:s}){const r=C(H),l=C(E);return e.jsxs(Lt,{children:[e.jsxs(Ce,{disabled:l,children:[e.jsx(le,{elevation:2,children:e.jsx(De,{expandIcon:e.jsx(Re,{}),children:e.jsx(S,{component:"span",children:e.jsx(S,{variant:"button",children:r==="en"?"RULES":"ПРАВИЛА"})})})}),e.jsx(le,{elevation:2,children:e.jsxs(Ie,{children:[e.jsx(S,{variant:"body1",sx:{whiteSpace:"pre-line"},children:n}),$e[s]&&e.jsx(qe,{title:r==="en"?"Open a group in Telegram":"Відкрити групу в Telegram",children:e.jsx(Bt,{href:$e[s]??null,target:"_blank",rel:"noopener noreferrer",children:e.jsxs(zt,{component:"div",variant:"button",children:[r==="en"?"JOIN":"ПРИЕДНАТИСЯ",e.jsx(_t,{color:"info",fontSize:"large"})]})})})]})})]}),e.jsxs(Ce,{disabled:l,children:[e.jsx(le,{elevation:2,children:e.jsx(De,{expandIcon:e.jsx(Re,{}),children:e.jsx(S,{component:"span",children:e.jsx(S,{variant:"button",children:r==="en"?"List of Those Who Didn't Clean":"Список тих, хто не здійснив прибирання"})})})}),e.jsx(le,{elevation:2,children:e.jsx(Ie,{children:e.jsx(ht,{nameCollection:s})})})]})]})}var Se={},vn=Be;Object.defineProperty(Se,"__esModule",{value:!0});var mt=Se.default=void 0,Sn=vn(ze()),wn=e;mt=Se.default=(0,Sn.default)((0,wn.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");gt.propTypes={nameCollection:t.string.isRequired};function gt({nameCollection:n}){const s=C(H),r=C(E),l=C(de),[c,j]=i.useState(null),[a,u]=i.useState(!1),h=oe(),b=()=>{const p=Rt.CancelToken.source();j(p),h(It({nameCollection:n,language:s,cancelToken:p,setAlreadySent:u}))},d=l.filter(({date:p})=>p===M().format("YYYY-MM-DD"));return i.useEffect(()=>()=>{c&&c.cancel("Компонент был размонтирован.")},[c]),e.jsx(e.Fragment,{children:e.jsx(e.Fragment,{children:d.length>0&&e.jsx("div",{children:e.jsx(ae,{onClick:b,disabled:r||a,endIcon:e.jsx(mt,{}),variant:"contained",children:s==="en"?"Send a reminder":"Відправити нагадування"})})})})}const kn=({permissions:n,nameCollection:s,corridorRange:r,image:l,taskList:c,mainTitle:j,cleaningRules:a})=>{const u=C(E),h=C(H),{displayName:b="No name",uid:d="No ID"}=C(Ne)||{},p=Me("(min-width:1100px)"),x=Me("(min-width:600px)"),m=Fe(),q=Le(),D=oe(),R=q.pathname.split("/")[2],[y,P]=i.useState(M()),[Y,F]=i.useState(r.min),[z,U]=i.useState(1),[X,W]=i.useState(""),[v,k]=i.useState(!1),[I,T]=i.useState(!1),[L,V]=i.useState(""),[$,_]=i.useState(!1),[o,w]=i.useState(!1),[g,O]=i.useState(null),[B,G]=i.useState(!1),[K,se]=i.useState(!1),[ee,re]=i.useState(1),[xe,bt]=i.useState(100),[yt,we]=i.useState(1);i.useEffect(()=>{const fe=`/${s}/${R}`;return m(fe,{replace:!0}),D(Mt({nameCollection:s,locationMonth:R,page:ee,limit:xe})).unwrap().then(({totalPages:St})=>{we(St)}),()=>D($t())},[D,xe,R,s,m,ee]);const ke=()=>_(!0),vt=async fe=>{if(fe.preventDefault(),!(v||X||B)){if(o.edit){D(We({language:h,nameCollection:s,id:g._id,updateValue:{roomNumber:Y,task:c[z-1],editor:{displayName:b,uid:d}}})),u||(_(!1),O(null));return}D(Yt({language:h,nameCollection:s,data:{task:c[z-1],date:L,roomNumber:Y,adder:{displayName:b,uid:d}}})),u||(_(!1),O(null))}};return e.jsxs(e.Fragment,{children:[e.jsx(Pt,{}),e.jsxs(f,{sx:{mb:5,width:"100%"},children:[e.jsx(Qt,{image:l,title:j}),e.jsxs(f,{display:"flex",width:"100%",gap:"40px",mt:"40px",flexWrap:p?"nowrap":"wrap",justifyContent:"center",children:[e.jsx(at,{nameCollection:s,locationMonth:R,handleAddALesson:ke,setIsDay:P,setIsEdit:w,isEdit:o,open:$,setIsChooseALesson:O,isChooseALesson:g,isDay:y,setValueSelect:U,valueSelect:z,permissions:n,isDeleteModal:K,setIsDeleteModal:se}),e.jsx(te,{elevation:x?1:0,sx:{padding:x?5:"30px 0 0 0",width:"100%",boxShadow:"0px 0px 3px -2px rgba(0,0,0,0.82)"},children:e.jsxs(f,{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"30px",children:[e.jsx(lt,{page:ee,setPage:re,limit:xe,setLitit:bt,totalPages:yt,setTotalPages:we,nameCollection:s,permissions:n,isDeleteModal:K,setIsDeleteModal:se,setIsEdit:w,handleAddALesson:ke,setIsChooseALesson:O,setValueSelect:U}),n&&e.jsx(gt,{nameCollection:s}),a&&e.jsx(jt,{cleaningRules:a,nameCollection:s},s)]})})]}),e.jsx(it,{passwordKey:"2024",sessionKey:"addLesson",closeClickInside:!0,openModal:I,setOpenModal:T,buttonClose:!0}),e.jsx(xt,{open:$,setOpen:_,onSubmit:vt,isEdit:o,isChooseALesson:g,valueSelect:z,setValueSelect:U,selectError:B,setSelectError:G,setValueRoom:F,errorRoom:X,setErrorRoom:W,isDay:y,valueRoom:Y,errorDate:v,setErrorDate:k,setValueDate:V,corridorRange:r,taskList:c}),e.jsx(ct,{dispatch:D,isChooseALesson:g,isDeleteModal:K,isEdit:o,setIsChooseALesson:O,setIsDeleteModal:se,nameCollection:s})]})]})};kn.propTypes={permissions:t.bool.isRequired,nameCollection:t.string.isRequired,corridorRange:t.object.isRequired,image:t.string.isRequired,taskList:t.array.isRequired,mainTitle:t.string.isRequired,cleaningRules:t.string};export{kn as default};
