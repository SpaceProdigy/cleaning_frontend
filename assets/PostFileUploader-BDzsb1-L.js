import{s as g,B as b,j as e,n as J,a as r,u as T,b as D,g as K,ac as d,P as Q,N as te,T as ne,a9 as O,o as H,b5 as $,a0 as ie,k as se,r as B,I as re,a4 as z,af as N,ag as V,l as oe,b6 as ae}from"./index-Djjy5-H_.js";import{d as le,i as ce}from"./CloudUpload--UpCL3dV.js";import{e as w}from"./errorMessages-CwXPayE3.js";import{u as pe,C as G}from"./index.esm-BrsULErR.js";import{F as de,I as ue}from"./ImageNotSupported-CdBJ0NbK.js";import{M as me,r as he,U as ge}from"./UniversalReactMarkdown-Ckvz0F1i.js";import{F as C,I as R,a as I,O as _}from"./OutlinedInput-CVSd0nJT.js";import{S as xe,M as fe}from"./Select-Dm-pidd2.js";import{d as be}from"./Close-qbN8cPS2.js";import{A as ye}from"./index-bMRqafVM.js";const X="/cleaning_frontend/assets/hero-yK5kWOTn.png",Ae=g(b)`
  width: 100%;
  height: 100%;
  background-image: url(${X});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 720px) {
    background-image: url(${X});
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
`,De=g(b)`
  position: absolute;
  width: 90%;
  max-width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:c})=>c.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 30px 0;
  border-radius: 7px;
`,Ee=g(b)`
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
`,Oe=g(b)`
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
`,He=g(b)`
  display: flex;
  align-items: center;
  height: 100%;
`,$e=g(b)`
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
`,je=g("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});A.propTypes={onChange:r.func.isRequired,disabled:r.bool,multiple:r.bool,buttonText:r.string.isRequired,onlyImages:r.bool,isLoading:r.bool};function A({onChange:c,disabled:x,multiple:u=!1,buttonText:m,onlyImages:k=!1,isLoading:f}){return e.jsxs(J,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:e.jsx(le,{}),disabled:x||f,children:[m,e.jsx(je,{type:"file",onChange:c,multiple:u,accept:k?"image/*":""})]})}Y.propTypes={handleFileChange:r.func.isRequired,handlePosterChange:r.func.isRequired,handleUpload:r.func.isRequired,files:r.array.isRequired};function Y({handleFileChange:c,handlePosterChange:x}){const u=T(D),m=T(K);return e.jsx(e.Fragment,{children:e.jsxs(b,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"8px"},children:[e.jsx(A,{onChange:c,isLoading:m,multiple:!0,buttonText:d.inputUpLoad[u]}),e.jsx(A,{isLoading:m,onlyImages:!0,multiple:!0,onChange:x,buttonText:d.inputUpLoadPoster[u]})]})})}ee.propTypes={handleUpload:r.func.isRequired,handleFileChange:r.func.isRequired,handlePosterChange:r.func.isRequired,files:r.array.isRequired,setFiles:r.func.isRequired,defaultCategory:r.string};const Z={ua:`# Заголовок  
**Жирний текст**  
_Курсив_  
[Посилання](https://example.com)  
- Список`,en:`# Title  
**Bold text**  
_Italic_  
[Link](https://example.com)  
- List`},Le=/^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\n\s]+\/\S+|\S+)?|vimeo\.com\/\d+)(?:[?&][^&]*\S+)?$/i,we={ua:"Посібник з оформлення",en:"Formatting Guide"};function ee({handleUpload:c,handleFileChange:x,handlePosterChange:u,files:m,setFiles:k,defaultCategory:f}){var S,q,W,t,p;const{register:y,handleSubmit:M,formState:{errors:s},control:U}=pe(),i=T(D),h=T(K),F=i==="ua"?`
# Заголовок
**Жирний текст**
_Курсив_
[Посилання](https://example.com)
- Список`:`
# Title
**Bold text**
_Italic_
[Link](https://example.com)
- List`,P=n=>{Object.keys(s).length>0||c(n)},j=()=>{if(f){const n=[...$],o=n.findIndex(({en:a})=>a===f);if(o!==-1){const a=n.splice(o,1);return n.splice(0,0,a[0]),n}}return $};return e.jsxs("form",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:"25px"},onSubmit:M(P),children:[e.jsxs(C,{fullWidth:!0,error:!!(s!=null&&s.category),children:[e.jsx(R,{children:d.selectUpLoadCategotyLable[i]}),e.jsx(G,{name:"category",control:U,defaultValue:j()[0].en,rules:{required:{value:!0,message:w({lang:i,errorType:"required"})}},render:({field:n})=>e.jsx(xe,{...n,label:d.selectUpLoadCategotyLable[i],children:j().map(o=>e.jsx(fe,{value:o.en,children:o[i]},o.id))})}),e.jsx(I,{children:(S=s==null?void 0:s.category)==null?void 0:S.message})]}),e.jsxs(C,{sx:{width:"100%"},disabled:h,error:!!(s!=null&&s.title),children:[e.jsx(R,{htmlFor:"title",children:d.inputUpLoadTitleLable[i]}),e.jsx(_,{name:"title",label:d.inputUpLoadTitleLable[i],fullWidth:!0,id:"title",...y("title",{required:{value:!0,message:w({lang:i,errorType:"required"})},maxLength:{value:100,message:w({lang:i,errorType:"maxLength",length:100})},minLength:{value:3,message:w({lang:i,errorType:"minLength",length:3})}})}),e.jsx(I,{children:(q=s.title)==null?void 0:q.message})]}),e.jsxs(C,{sx:{width:"100%"},disabled:h,error:!!(s!=null&&s.mainText),children:[e.jsx(R,{htmlFor:"mainText",children:d.inputUpLoadDescriptionLable[i]}),e.jsx(G,{name:"mainText",control:U,defaultValue:"",rules:{maxLength:{value:5e3,message:w({lang:i,errorType:"maxLength",length:5e3})}},render:({field:n})=>e.jsxs("div",{children:[e.jsx(_,{...n,label:d.inputUpLoadDescriptionLable[i],fullWidth:!0,id:"mainText",minRows:6,maxRows:7,multiline:!0,placeholder:F,onChange:o=>n.onChange(o)}),e.jsx(Q,{elevation:3,style:{marginTop:"20px",padding:"10px",maxHeight:"300px",overflow:"auto",scrollbarWidth:"thin",borderRadius:"4px",minHeight:"220px"},children:(n==null?void 0:n.value.trim().length)>0?e.jsx(me,{remarkPlugins:[he],components:{a:({node:o,...a})=>e.jsx("a",{...a,target:"_blank",rel:"noopener noreferrer",children:a.children})},children:n.value}):e.jsx(ge,{children:Z[i]||Z.en})}),e.jsx(te,{to:"/FormattingGuide",style:{textDecoration:"none"},children:e.jsx(ne,{variant:"caption",color:"inherit",children:we[i]})})]})}),e.jsx(I,{children:(W=s.mainText)==null?void 0:W.message})]}),e.jsxs(C,{sx:{width:"100%"},disabled:h,error:!!(s!=null&&s.tags),children:[e.jsx(R,{htmlFor:"tags",children:i==="ua"?"Теги (розділені комами)":"Tags (separated by commas)"}),e.jsx(_,{name:"tags",label:i==="ua"?"Теги (розділені комами)":"Tags (separated by commas)",fullWidth:!0,id:"tags",...y("tags",{validate:n=>{const o=n.split(",").map(a=>a.trim());return o.length>10?i==="ua"?"No more than 10 tags":"Не більше 10 тегів":o.some(a=>a.length>30)?i==="ua"?"The maximum length of one tag is 30 characters":"Максимальна довжина одного тегу – 30 символів":!0}})}),e.jsx(I,{children:(t=s.tags)==null?void 0:t.message})]}),e.jsxs(C,{sx:{width:"100%"},disabled:h,error:!!(s!=null&&s.videoLink),children:[e.jsx(R,{htmlFor:"videoLink",children:d.inputUpLoadVideoLinkLable[i]}),e.jsx(_,{name:"videoLink",label:d.inputUpLoadVideoLinkLable[i],fullWidth:!0,id:"videoLink",...y("videoLink",{maxLength:{value:100,message:w({lang:i,errorType:"maxLength",length:100})},validate:{validUrl:n=>n===""||Le.test(n)||w({lang:i,errorType:"invalidUrl"})}})}),e.jsx(I,{children:(p=s.videoLink)==null?void 0:p.message})]}),e.jsx(de,{files:m,setFiles:k}),e.jsx(O,{sx:{width:"100%"}}),e.jsx(Y,{handleFileChange:x,handlePosterChange:u,handleUpload:c,files:m}),e.jsx(O,{sx:{width:"100%"}}),e.jsx(J,{type:"submit",variant:"contained",disabled:h,children:h?H.loading[i]:H.addPost[i]})]})}const ve=g(Q)`
  padding: 70px 20px 40px;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  overflow: auto;
`,Te=g(b)`
  position: absolute;
  right: 10px;
  top: 5px;
`,ke=20*1024*1024,Fe=5*1024*1024,Ce=({setOpen:c,setLoading:x,defaultTag:u="",defaultCategory:m,nameCollection:k})=>{const f=T(D),y=T(ie),M=se(),[s,U]=B.useState([]),[i,h]=B.useState([]),[F,P]=B.useState([]),j=B.useRef(null),S=async t=>{const p=Array.from(t.target.files).slice(0,10),n=[],o=[],a=p.filter(L=>L.size<=Fe);a.length!==p.length&&z("warning",N({language:f,notifyType:V.maxSize,extraText:"5MB"}));for(const L of a)try{const v=await ce(L,{maxSizeMB:1,maxWidthOrHeight:800,useWebp:!0}),E=new File([v],L.name,{type:v.type});o.push(E),n.push(URL.createObjectURL(E))}catch(l){console.error("Ошибка при сжатии изображения:",l)}U(o),h(n)},q=t=>{const p=Array.from(t.target.files).slice(0,10),n=p.filter(o=>o.size<=ke);n.length!==p.length&&z("warning",N({language:f,notifyType:V.maxSize,extraText:"20MB"})),P(n)},W=async t=>{var p,n,o,a,L;try{x(!0),j.current&&j.current.cancel("Отменено новым запросом"),j.current=oe.CancelToken.source();const l=new FormData;l.append("adder",JSON.stringify({name:y.displayName,uid:y.uid,photoURL:y.photoURL})),((p=t==null?void 0:t.tags)!=null&&p.trim()||u)&&l.append("tags",`${t==null?void 0:t.tags}, ${u}`),(n=t==null?void 0:t.mainText)!=null&&n.trim()&&l.append("description",t==null?void 0:t.mainText),(o=t==null?void 0:t.title)!=null&&o.trim()&&l.append("title",t==null?void 0:t.title),(a=t==null?void 0:t.videoLink)!=null&&a.trim()&&l.append("videoLink",t==null?void 0:t.videoLink),(L=t==null?void 0:t.category)!=null&&L.trim()&&l.append("category",t==null?void 0:t.category),s.length>0&&s.forEach(v=>l.append("poster",v)),F.length>0&&F.forEach(v=>l.append("file",v)),M(ae({cancelToken:j.current.token,formData:l,language:f,nameCollection:k})).finally(()=>{x(!1)}),c(!1)}catch(l){console.error("Ошибка загрузки файлов:",l)}};return e.jsxs(ve,{children:[e.jsx(Te,{children:e.jsx(re,{onClick:()=>c(!1),children:e.jsx(be,{})})}),e.jsx(ye,{children:i.length>0&&e.jsx(ue,{images:i,setPosterPreview:h,variant:"preview"})}),e.jsx(ee,{defaultCategory:m,handleUpload:W,handleFileChange:q,handlePosterChange:S,files:F,setFiles:P})]})};Ce.propTypes={setOpen:r.func.isRequired,setLoading:r.func.isRequired,defaultTag:r.string,defaultCategory:r.string,nameCollection:r.string.isRequired};export{Ae as H,He as I,Oe as P,Ee as W,De as a,$e as b,Ce as c};
