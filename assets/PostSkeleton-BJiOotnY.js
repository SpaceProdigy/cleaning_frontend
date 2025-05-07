import{s as g,B as j,j as e,n as Q,a as r,u as k,b as E,g as Y,ac as h,P as O,N as ie,T as ne,a9 as $,o as z,b6 as N,a0 as se,k as re,r as _,I as oe,a4 as V,ag as G,ah as X,l as ae,b7 as le}from"./index-DczY0xYt.js";import{d as pe,i as ce}from"./CloudUpload-D6f9qcuy.js";import{e as v}from"./errorMessages-CaGB3D7_.js";import{u as de,C as Z}from"./index.esm-cYDOXwBX.js";import{F as he,I as ue}from"./ImageNotSupported-DQVDyj-y.js";import{M as me,r as xe,U as ge}from"./UniversalReactMarkdown-Y4qRlHd6.js";import{F as R,I,O as M}from"./OutlinedInput-DYhFxr1G.js";import{S as fe,M as be}from"./Select-BVrvdaIX.js";import{F as S}from"./FormHelperText-tkcXVoHL.js";import{d as je}from"./Close-BKGqMnXv.js";import{A as ye}from"./index-zcPeuny1.js";import{S as d}from"./Skeleton-BXXXm_Qt.js";const J="/cleaning_frontend/assets/hero-yK5kWOTn.png",Oe=g(j)`
  width: 100%;
  height: 100%;
  background-image: url(${J});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 720px) {
    background-image: url(${J});
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #11111170;
  }
`,He=g(j)`
  position: absolute;
  width: 90%;
  max-width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:p})=>p.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 30px 0;
  border-radius: 7px;
`,$e=g(j)`
  position: relative;
  width: calc(100% + 32px);
  height: 100vh;
  margin-left: -16px;
  margin-right: -16px;

  @media screen and (min-width: 600px) {
    margin-left: -24px;
    margin-right: -24px;
    width: calc(100% + 48px);
  }
`,ze=g(j)`
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
`,Ne=g(j)`
  display: flex;
  align-items: center;
  height: 100%;
`,Ve=g(j)`
  border-radius: 4px;
  max-width: 600px;
  width: 100%;
  max-height: 600px;
  overflow: auto;
  position: absolute;
  scrollbar-width: thin;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,we=g("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});D.propTypes={onChange:r.func.isRequired,disabled:r.bool,multiple:r.bool,buttonText:r.string.isRequired,onlyImages:r.bool,isLoading:r.bool};function D({onChange:p,disabled:f,multiple:u=!1,buttonText:m,onlyImages:F=!1,isLoading:b}){return e.jsxs(Q,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:e.jsx(pe,{}),disabled:f||b,children:[m,e.jsx(we,{type:"file",onChange:p,multiple:u,accept:F?"image/*":""})]})}ee.propTypes={handleFileChange:r.func.isRequired,handlePosterChange:r.func.isRequired,handleUpload:r.func.isRequired,files:r.array.isRequired};function ee({handleFileChange:p,handlePosterChange:f}){const u=k(E),m=k(Y);return e.jsx(e.Fragment,{children:e.jsxs(j,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"8px"},children:[e.jsx(D,{onChange:p,isLoading:m,multiple:!0,buttonText:h.inputUpLoad[u]}),e.jsx(D,{isLoading:m,onlyImages:!0,multiple:!0,onChange:f,buttonText:h.inputUpLoadPoster[u]})]})})}te.propTypes={handleUpload:r.func.isRequired,handleFileChange:r.func.isRequired,handlePosterChange:r.func.isRequired,files:r.array.isRequired,setFiles:r.func.isRequired,defaultCategory:r.string};const K={ua:`# Заголовок  
**Жирний текст**  
_Курсив_  
[Посилання](https://example.com)  
- Список`,en:`# Title  
**Bold text**  
_Italic_  
[Link](https://example.com)  
- List`},Le=/^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\n\s]+\/\S+|\S+)?|vimeo\.com\/\d+)(?:[?&][^&]*\S+)?$/i,ve={ua:"Посібник з оформлення",en:"Formatting Guide"};function te({handleUpload:p,handleFileChange:f,handlePosterChange:u,files:m,setFiles:F,defaultCategory:b}){var q,W,B,t,c;const{register:y,handleSubmit:A,formState:{errors:s},control:P}=de(),n=k(E),x=k(Y),C=n==="ua"?`
# Заголовок
**Жирний текст**
_Курсив_
[Посилання](https://example.com)
- Список`:`
# Title
**Bold text**
_Italic_
[Link](https://example.com)
- List`,U=i=>{Object.keys(s).length>0||p(i)},w=()=>{if(b){const i=[...N],o=i.findIndex(({en:a})=>a===b);if(o!==-1){const a=i.splice(o,1);return i.splice(0,0,a[0]),i}}return N};return e.jsxs("form",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"25px"},onSubmit:A(U),children:[e.jsxs(R,{fullWidth:!0,error:!!(s!=null&&s.category),children:[e.jsx(I,{children:h.selectUpLoadCategotyLable[n]}),e.jsx(Z,{name:"category",control:P,defaultValue:w()[0].en,rules:{required:{value:!0,message:v({lang:n,errorType:"required"})}},render:({field:i})=>e.jsx(fe,{...i,label:h.selectUpLoadCategotyLable[n],children:w().map(o=>e.jsx(be,{value:o.en,children:o[n]},o.id))})}),e.jsx(S,{children:(q=s==null?void 0:s.category)==null?void 0:q.message})]}),e.jsxs(R,{sx:{width:"100%"},disabled:x,error:!!(s!=null&&s.title),children:[e.jsx(I,{htmlFor:"title",children:h.inputUpLoadTitleLable[n]}),e.jsx(M,{name:"title",label:h.inputUpLoadTitleLable[n],fullWidth:!0,id:"title",...y("title",{required:{value:!0,message:v({lang:n,errorType:"required"})},maxLength:{value:100,message:v({lang:n,errorType:"maxLength",length:100})},minLength:{value:3,message:v({lang:n,errorType:"minLength",length:3})}})}),e.jsx(S,{children:(W=s.title)==null?void 0:W.message})]}),e.jsxs(R,{sx:{width:"100%"},disabled:x,error:!!(s!=null&&s.mainText),children:[e.jsx(I,{htmlFor:"mainText",children:h.inputUpLoadDescriptionLable[n]}),e.jsx(Z,{name:"mainText",control:P,defaultValue:"",rules:{maxLength:{value:5e3,message:v({lang:n,errorType:"maxLength",length:5e3})}},render:({field:i})=>e.jsxs("div",{children:[e.jsx(M,{...i,label:h.inputUpLoadDescriptionLable[n],fullWidth:!0,id:"mainText",minRows:6,maxRows:7,multiline:!0,placeholder:C,onChange:o=>i.onChange(o)}),e.jsx(O,{elevation:3,style:{marginTop:"20px",padding:"10px",maxHeight:"300px",overflow:"auto",scrollbarWidth:"thin",borderRadius:"4px",minHeight:"220px"},children:(i==null?void 0:i.value.trim().length)>0?e.jsx(me,{remarkPlugins:[xe],components:{a:({node:o,...a})=>e.jsx("a",{...a,target:"_blank",rel:"noopener noreferrer",children:a.children})},children:i.value}):e.jsx(ge,{children:K[n]||K.en})}),e.jsx(ie,{to:"/FormattingGuide",style:{textDecoration:"none"},children:e.jsx(ne,{variant:"caption",color:"inherit",children:ve[n]})})]})}),e.jsx(S,{children:(B=s.mainText)==null?void 0:B.message})]}),e.jsxs(R,{sx:{width:"100%"},disabled:x,error:!!(s!=null&&s.tags),children:[e.jsx(I,{htmlFor:"tags",children:n==="ua"?"Теги (розділені комами)":"Tags (separated by commas)"}),e.jsx(M,{name:"tags",label:n==="ua"?"Теги (розділені комами)":"Tags (separated by commas)",fullWidth:!0,id:"tags",...y("tags",{validate:i=>{const o=i.split(",").map(a=>a.trim());return o.length>10?n==="ua"?"No more than 10 tags":"Не більше 10 тегів":o.some(a=>a.length>30)?n==="ua"?"The maximum length of one tag is 30 characters":"Максимальна довжина одного тегу – 30 символів":!0}})}),e.jsx(S,{children:(t=s.tags)==null?void 0:t.message})]}),e.jsxs(R,{sx:{width:"100%"},disabled:x,error:!!(s!=null&&s.videoLink),children:[e.jsx(I,{htmlFor:"videoLink",children:h.inputUpLoadVideoLinkLable[n]}),e.jsx(M,{name:"videoLink",label:h.inputUpLoadVideoLinkLable[n],fullWidth:!0,id:"videoLink",...y("videoLink",{maxLength:{value:100,message:v({lang:n,errorType:"maxLength",length:100})},validate:{validUrl:i=>i===""||Le.test(i)||v({lang:n,errorType:"invalidUrl"})}})}),e.jsx(S,{children:(c=s.videoLink)==null?void 0:c.message})]}),e.jsx(he,{files:m,setFiles:F}),e.jsx($,{sx:{width:"100%"}}),e.jsx(ee,{handleFileChange:f,handlePosterChange:u,handleUpload:p,files:m}),e.jsx($,{sx:{width:"100%"}}),e.jsx(Q,{type:"submit",variant:"contained",disabled:x,children:x?z.loading[n]:z.addPost[n]})]})}const Te=g(O)`
  padding: 70px 20px 40px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow: auto;
`,ke=g(j)`
  position: absolute;
  right: 10px;
  top: 5px;
`,Fe=20*1024*1024,Ce=5*1024*1024,Re=({setOpen:p,setLoading:f,defaultTag:u="",defaultCategory:m,nameCollection:F})=>{const b=k(E),y=k(se),A=re(),[s,P]=_.useState([]),[n,x]=_.useState([]),[C,U]=_.useState([]),w=_.useRef(null),q=async t=>{const c=Array.from(t.target.files).slice(0,10),i=[],o=[],a=c.filter(L=>L.size<=Ce);a.length!==c.length&&V("warning",G({language:b,notifyType:X.maxSize,extraText:"5MB"}));for(const L of a)try{const T=await ce(L,{maxSizeMB:1,maxWidthOrHeight:800,useWebp:!0}),H=new File([T],L.name,{type:T.type});o.push(H),i.push(URL.createObjectURL(H))}catch(l){console.error("Ошибка при сжатии изображения:",l)}P(o),x(i)},W=t=>{const c=Array.from(t.target.files).slice(0,10),i=c.filter(o=>o.size<=Fe);i.length!==c.length&&V("warning",G({language:b,notifyType:X.maxSize,extraText:"20MB"})),U(i)},B=async t=>{var c,i,o,a,L;try{f(!0),w.current&&w.current.cancel("Отменено новым запросом"),w.current=ae.CancelToken.source();const l=new FormData;l.append("adder",JSON.stringify({name:y.displayName,uid:y.uid,photoURL:y.photoURL})),((c=t==null?void 0:t.tags)!=null&&c.trim()||u)&&l.append("tags",`${t==null?void 0:t.tags}, ${u}`),(i=t==null?void 0:t.mainText)!=null&&i.trim()&&l.append("description",t==null?void 0:t.mainText),(o=t==null?void 0:t.title)!=null&&o.trim()&&l.append("title",t==null?void 0:t.title),(a=t==null?void 0:t.videoLink)!=null&&a.trim()&&l.append("videoLink",t==null?void 0:t.videoLink),(L=t==null?void 0:t.category)!=null&&L.trim()&&l.append("category",t==null?void 0:t.category),s.length>0&&s.forEach(T=>l.append("poster",T)),C.length>0&&C.forEach(T=>l.append("file",T)),A(le({cancelToken:w.current.token,formData:l,language:b,nameCollection:F})).finally(()=>{f(!1)}),p(!1)}catch(l){console.error("Ошибка загрузки файлов:",l)}};return e.jsxs(Te,{children:[e.jsx(ke,{children:e.jsx(oe,{onClick:()=>p(!1),children:e.jsx(je,{})})}),e.jsx(ye,{children:n.length>0&&e.jsx(ue,{images:n,setPosterPreview:x,variant:"preview"})}),e.jsx(te,{defaultCategory:m,handleUpload:B,handleFileChange:W,handlePosterChange:q,files:C,setFiles:U})]})};Re.propTypes={setOpen:r.func.isRequired,setLoading:r.func.isRequired,defaultTag:r.string,defaultCategory:r.string,nameCollection:r.string.isRequired};function Ge(){return e.jsxs(O,{sx:{width:"300px",flexShrink:"0",height:"400px"},children:[e.jsx(d,{variant:"rectangular",width:"100%",height:150}),e.jsx(d,{width:"60%",sx:{mt:"10px",height:"40px"}}),e.jsx(d,{width:"80%"}),e.jsx(d,{width:"100%"}),e.jsx(d,{width:"100%"}),e.jsx(d,{width:"100%"}),e.jsx(d,{width:"100%"}),e.jsx(d,{width:"100%"}),e.jsx(d,{width:"100%"}),e.jsx(d,{width:"100%"})]})}export{Oe as H,Ne as I,ze as P,$e as W,He as a,Ge as b,Ve as c,Re as d};
