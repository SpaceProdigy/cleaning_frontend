const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YouTube-COeS_4UJ.js","assets/index-VRjfB3Or.js","assets/index-kaxYSVne.css","assets/SoundCloud-COA_N6ZZ.js","assets/Vimeo-iNGbBe-P.js","assets/Mux-B-SL13u9.js","assets/Facebook-CK4J-V1I.js","assets/Streamable-CSwSqp_r.js","assets/Wistia-Ccw-edEH.js","assets/Twitch-B1LjcCAj.js","assets/DailyMotion-Bux5xYOm.js","assets/Mixcloud-B2b7vZa_.js","assets/Vidyard-BX6BdkA0.js","assets/Kaltura-T4cSZZA1.js","assets/FilePlayer-ByW-jDnx.js","assets/Preview-B7cn3pfm.js"])))=>i.map(i=>d[i]);
import{D as mt,j as s,E as Pt,F as vt,r as x,G as gt,_ as bt,H as j,J as Ot,s as ye,K as wt,L as St,O as g,Q as Tt,R as At,S as se,U as Et,a as xt,P as Rt,B as E,T as W,u as H,b as jt,V as Ct,W as Mt,f as It,p as Lt,X as Dt,Y as $t,e as kt,Z as Ut,i as Se,d as Nt,$ as zt,a0 as Te}from"./index-VRjfB3Or.js";import{I as Ht,d as Vt,F as Bt}from"./ImageNotSupported-vrt7yV1Q.js";import{c as Ft,S as Ie,C as Wt}from"./createStyled-ZigSP4Rc.js";import{d as Kt}from"./ArrowBack-DwprV0WF.js";import{L as Yt}from"./Like-BJtOvGpi.js";import{U as Xt}from"./UniversalReactMarkdown-CM6r6ag9.js";import{C as qt}from"./CircularProgress-D0AM8zLf.js";const Jt=mt(s.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Zt(e){return Pt("MuiAvatar",e)}vt("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Qt=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],Gt=e=>{const{classes:t,variant:r,colorDefault:a}=e;return St({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},Zt,t)},er=ye("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:j({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:j({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),tr=ye("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),rr=ye(Jt,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function ar({crossOrigin:e,referrerPolicy:t,src:r,srcSet:a}){const[n,o]=x.useState(!1);return x.useEffect(()=>{if(!r&&!a)return;o(!1);let l=!0;const i=new Image;return i.onload=()=>{l&&o("loaded")},i.onerror=()=>{l&&o("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=r,a&&(i.srcset=a),()=>{l=!1}},[e,t,r,a]),n}const nr=x.forwardRef(function(t,r){const a=gt({props:t,name:"MuiAvatar"}),{alt:n,children:o,className:l,component:i="div",slots:p={},slotProps:O={},imgProps:f,sizes:w,src:U,srcSet:N,variant:oe="circular"}=a,J=bt(a,Qt);let T=null;const C=ar(j({},f,{src:U,srcSet:N})),z=U||N,A=z&&C!=="error",R=j({},a,{colorDefault:!A,component:i,variant:oe}),M=Gt(R),[Z,Q]=Ot("img",{className:M.img,elementType:tr,externalForwardedProps:{slots:p,slotProps:{img:j({},f,O.img)}},additionalProps:{alt:n,src:U,srcSet:N,sizes:w},ownerState:R});return A?T=s.jsx(Z,j({},Q)):o||o===0?T=o:z&&n?T=n[0]:T=s.jsx(rr,{ownerState:R,className:M.fallback}),s.jsx(er,j({as:i,ownerState:R,className:wt(M.root,l),ref:r},J,{children:T}))}),k=Ft();var or=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&sr(o,r.attrs),r.text&&(o.text=""+r.text);var l="onload"in o?Ae:ir;l(o,a),o.onload||Ae(o,a),n.appendChild(o)};function sr(e,t){for(var r in t)e.setAttribute(r,t[r])}function Ae(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function ir(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var lr=function(t){return ur(t)&&!cr(t)};function ur(e){return!!e&&typeof e=="object"}function cr(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||fr(e)}var pr=typeof Symbol=="function"&&Symbol.for,dr=pr?Symbol.for("react.element"):60103;function fr(e){return e.$$typeof===dr}function yr(e){return Array.isArray(e)?[]:{}}function K(e,t){return t.clone!==!1&&t.isMergeableObject(e)?$(yr(e),e,t):e}function hr(e,t,r){return e.concat(t).map(function(a){return K(a,r)})}function _r(e,t){if(!t.customMerge)return $;var r=t.customMerge(e);return typeof r=="function"?r:$}function mr(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Ee(e){return Object.keys(e).concat(mr(e))}function Le(e,t){try{return t in e}catch{return!1}}function Pr(e,t){return Le(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function vr(e,t,r){var a={};return r.isMergeableObject(e)&&Ee(e).forEach(function(n){a[n]=K(e[n],r)}),Ee(t).forEach(function(n){Pr(e,n)||(Le(e,n)&&r.isMergeableObject(t[n])?a[n]=_r(n,r)(e[n],t[n],r):a[n]=K(t[n],r))}),a}function $(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||hr,r.isMergeableObject=r.isMergeableObject||lr,r.cloneUnlessOtherwiseSpecified=K;var a=Array.isArray(t),n=Array.isArray(e),o=a===n;return o?a?r.arrayMerge(e,t,r):vr(e,t,r):K(t,r)}$.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return $(a,n,r)},{})};var gr=$,De=gr,br=Object.create,ee=Object.defineProperty,Or=Object.getOwnPropertyDescriptor,wr=Object.getOwnPropertyNames,Sr=Object.getPrototypeOf,Tr=Object.prototype.hasOwnProperty,Ar=(e,t)=>{for(var r in t)ee(e,r,{get:t[r],enumerable:!0})},$e=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of wr(t))!Tr.call(e,n)&&n!==r&&ee(e,n,{get:()=>t[n],enumerable:!(a=Or(t,n))||a.enumerable});return e},he=(e,t,r)=>(r=e!=null?br(Sr(e)):{},$e(!e||!e.__esModule?ee(r,"default",{value:e,enumerable:!0}):r,e)),Er=e=>$e(ee({},"__esModule",{value:!0}),e),ke={};Ar(ke,{callPlayer:()=>Br,getConfig:()=>Hr,getSDK:()=>zr,isBlobUrl:()=>Wr,isMediaStream:()=>Fr,lazy:()=>Cr,omit:()=>Vr,parseEndTime:()=>kr,parseStartTime:()=>$r,queryString:()=>Nr,randomString:()=>Ur,supportsWebKitPresentationMode:()=>Kr});var te=Er(ke),xr=he(x),Rr=he(or),jr=he(De);const Cr=e=>xr.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),Mr=/[?&#](?:start|t)=([0-9hms]+)/,Ir=/[?&#]end=([0-9hms]+)/,ce=/(\d+)(h|m|s)/g,Lr=/^\d+$/;function Ue(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(ce))return Dr(a);if(Lr.test(a))return parseInt(a)}}function Dr(e){let t=0,r=ce.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=ce.exec(e)}return t}function $r(e){return Ue(e,Mr)}function kr(e){return Ue(e,Ir)}function Ur(){return Math.random().toString(36).substr(2,5)}function Nr(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function ie(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const I={},zr=function(t,r,a=null,n=()=>!0,o=Rr.default){const l=ie(r);return l&&n(l)?Promise.resolve(l):new Promise((i,p)=>{if(I[t]){I[t].push({resolve:i,reject:p});return}I[t]=[{resolve:i,reject:p}];const O=f=>{I[t].forEach(w=>w.resolve(f))};if(a){const f=window[a];window[a]=function(){f&&f(),O(ie(r))}}o(t,f=>{f?(I[t].forEach(w=>w.reject(f)),I[t]=null):a||O(ie(r))})})};function Hr(e,t){return(0,jr.default)(t.config,e.config)}function Vr(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const o of n)r.indexOf(o)===-1&&(a[o]=e[o]);return a}function Br(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function Fr(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Wr(e){return/^blob:/.test(e)}function Kr(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var _e=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Xr=Object.getOwnPropertyNames,qr=Object.prototype.hasOwnProperty,Jr=(e,t)=>{for(var r in t)_e(e,r,{get:t[r],enumerable:!0})},Zr=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Xr(t))!qr.call(e,n)&&n!==r&&_e(e,n,{get:()=>t[n],enumerable:!(a=Yr(t,n))||a.enumerable});return e},Qr=e=>Zr(_e({},"__esModule",{value:!0}),e),Ne={};Jr(Ne,{AUDIO_EXTENSIONS:()=>me,DASH_EXTENSIONS:()=>Ge,FLV_EXTENSIONS:()=>et,HLS_EXTENSIONS:()=>ve,MATCH_URL_DAILYMOTION:()=>qe,MATCH_URL_FACEBOOK:()=>Be,MATCH_URL_FACEBOOK_WATCH:()=>Fe,MATCH_URL_KALTURA:()=>Qe,MATCH_URL_MIXCLOUD:()=>Je,MATCH_URL_MUX:()=>Ve,MATCH_URL_SOUNDCLOUD:()=>ze,MATCH_URL_STREAMABLE:()=>We,MATCH_URL_TWITCH_CHANNEL:()=>Xe,MATCH_URL_TWITCH_VIDEO:()=>Ye,MATCH_URL_VIDYARD:()=>Ze,MATCH_URL_VIMEO:()=>He,MATCH_URL_WISTIA:()=>Ke,MATCH_URL_YOUTUBE:()=>pe,VIDEO_EXTENSIONS:()=>Pe,canPlay:()=>ea});var Gr=Qr(Ne),xe=te;const pe=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,ze=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,He=/vimeo\.com\/(?!progressive_redirect).+/,Ve=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,Be=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,Fe=/^https?:\/\/fb\.watch\/.+$/,We=/streamable\.com\/([a-z0-9]+)$/,Ke=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Ye=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Xe=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,qe=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Je=/mixcloud\.com\/([^/]+\/[^/]+)/,Ze=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Qe=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,me=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,Pe=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,ve=/\.(m3u8)($|\?)/i,Ge=/\.(mpd)($|\?)/i,et=/\.(flv)($|\?)/i,de=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&de(t)||de(t.src))return!0;return!1}return(0,xe.isMediaStream)(e)||(0,xe.isBlobUrl)(e)?!0:me.test(e)||Pe.test(e)||ve.test(e)||Ge.test(e)||et.test(e)},ea={youtube:e=>e instanceof Array?e.every(t=>pe.test(t)):pe.test(e),soundcloud:e=>ze.test(e)&&!me.test(e),vimeo:e=>He.test(e)&&!Pe.test(e)&&!ve.test(e),mux:e=>Ve.test(e),facebook:e=>Be.test(e)||Fe.test(e),streamable:e=>We.test(e),wistia:e=>Ke.test(e),twitch:e=>Ye.test(e)||Xe.test(e),dailymotion:e=>qe.test(e),mixcloud:e=>Je.test(e),vidyard:e=>Ze.test(e),kaltura:e=>Qe.test(e),file:de};var ge=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,ra=Object.getOwnPropertyNames,aa=Object.prototype.hasOwnProperty,na=(e,t)=>{for(var r in t)ge(e,r,{get:t[r],enumerable:!0})},oa=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ra(t))!aa.call(e,n)&&n!==r&&ge(e,n,{get:()=>t[n],enumerable:!(a=ta(t,n))||a.enumerable});return e},sa=e=>oa(ge({},"__esModule",{value:!0}),e),tt={};na(tt,{default:()=>la});var ia=sa(tt),v=te,m=Gr,la=[{key:"youtube",name:"YouTube",canPlay:m.canPlay.youtube,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./YouTube-COeS_4UJ.js").then(e=>e.Y),__vite__mapDeps([0,1,2])))},{key:"soundcloud",name:"SoundCloud",canPlay:m.canPlay.soundcloud,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./SoundCloud-COA_N6ZZ.js").then(e=>e.S),__vite__mapDeps([3,1,2])))},{key:"vimeo",name:"Vimeo",canPlay:m.canPlay.vimeo,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./Vimeo-iNGbBe-P.js").then(e=>e.V),__vite__mapDeps([4,1,2])))},{key:"mux",name:"Mux",canPlay:m.canPlay.mux,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./Mux-B-SL13u9.js").then(e=>e.M),__vite__mapDeps([5,1,2])))},{key:"facebook",name:"Facebook",canPlay:m.canPlay.facebook,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./Facebook-CK4J-V1I.js").then(e=>e.F),__vite__mapDeps([6,1,2])))},{key:"streamable",name:"Streamable",canPlay:m.canPlay.streamable,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./Streamable-CSwSqp_r.js").then(e=>e.S),__vite__mapDeps([7,1,2])))},{key:"wistia",name:"Wistia",canPlay:m.canPlay.wistia,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./Wistia-Ccw-edEH.js").then(e=>e.W),__vite__mapDeps([8,1,2])))},{key:"twitch",name:"Twitch",canPlay:m.canPlay.twitch,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./Twitch-B1LjcCAj.js").then(e=>e.T),__vite__mapDeps([9,1,2])))},{key:"dailymotion",name:"DailyMotion",canPlay:m.canPlay.dailymotion,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./DailyMotion-Bux5xYOm.js").then(e=>e.D),__vite__mapDeps([10,1,2])))},{key:"mixcloud",name:"Mixcloud",canPlay:m.canPlay.mixcloud,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./Mixcloud-B2b7vZa_.js").then(e=>e.M),__vite__mapDeps([11,1,2])))},{key:"vidyard",name:"Vidyard",canPlay:m.canPlay.vidyard,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./Vidyard-BX6BdkA0.js").then(e=>e.V),__vite__mapDeps([12,1,2])))},{key:"kaltura",name:"Kaltura",canPlay:m.canPlay.kaltura,lazyPlayer:(0,v.lazy)(()=>g(()=>import("./Kaltura-T4cSZZA1.js").then(e=>e.K),__vite__mapDeps([13,1,2])))},{key:"file",name:"FilePlayer",canPlay:m.canPlay.file,canEnablePIP:e=>m.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,v.supportsWebKitPresentationMode)())&&!m.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,v.lazy)(()=>g(()=>import("./FilePlayer-ByW-jDnx.js").then(e=>e.F),__vite__mapDeps([14,1,2])))}],Re=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function ua(e,t){return!!(e===t||Re(e)&&Re(t))}function ca(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!ua(e[r],t[r]))return!1;return!0}function pa(e,t){t===void 0&&(t=ca);var r,a=[],n,o=!1;function l(){for(var i=[],p=0;p<arguments.length;p++)i[p]=arguments[p];return o&&r===this&&t(i,a)||(n=e.apply(this,i),o=!0,r=this,a=i),n}return l}const da=Object.freeze(Object.defineProperty({__proto__:null,default:pa},Symbol.toStringTag,{value:"Module"})),fa=Tt(da);var ya=typeof Element<"u",ha=typeof Map=="function",_a=typeof Set=="function",ma=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function G(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!G(e[a],t[a]))return!1;return!0}var o;if(ha&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;for(o=e.entries();!(a=o.next()).done;)if(!G(a.value[1],t.get(a.value[0])))return!1;return!0}if(_a&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(a=o.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(ma&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(ya&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!G(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var rt=function(t,r){try{return G(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Pa=Object.create,re=Object.defineProperty,va=Object.getOwnPropertyDescriptor,ga=Object.getOwnPropertyNames,ba=Object.getPrototypeOf,Oa=Object.prototype.hasOwnProperty,wa=(e,t)=>{for(var r in t)re(e,r,{get:t[r],enumerable:!0})},at=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ga(t))!Oa.call(e,n)&&n!==r&&re(e,n,{get:()=>t[n],enumerable:!(a=va(t,n))||a.enumerable});return e},Sa=(e,t,r)=>(r=e!=null?Pa(ba(e)):{},at(!e||!e.__esModule?re(r,"default",{value:e,enumerable:!0}):r,e)),Ta=e=>at(re({},"__esModule",{value:!0}),e),nt={};wa(nt,{defaultProps:()=>xa,propTypes:()=>Ea});var ot=Ta(nt),Aa=Sa(At);const{string:y,bool:P,number:L,array:le,oneOfType:V,shape:b,object:_,func:d,node:je}=Aa.default,Ea={url:V([y,le,_]),playing:P,loop:P,controls:P,volume:L,muted:P,playbackRate:L,width:V([y,L]),height:V([y,L]),style:_,progressInterval:L,playsinline:P,pip:P,stopOnUnmount:P,light:V([P,y,_]),playIcon:je,previewTabIndex:L,previewAriaLabel:y,fallback:je,oEmbedUrl:y,wrapper:V([y,d,b({render:d.isRequired})]),config:b({soundcloud:b({options:_}),youtube:b({playerVars:_,embedOptions:_,onUnstarted:d}),facebook:b({appId:y,version:y,playerId:y,attributes:_}),dailymotion:b({params:_}),vimeo:b({playerOptions:_,title:y}),mux:b({attributes:_,version:y}),file:b({attributes:_,tracks:le,forceVideo:P,forceAudio:P,forceHLS:P,forceSafariHLS:P,forceDisableHls:P,forceDASH:P,forceFLV:P,hlsOptions:_,hlsVersion:y,dashVersion:y,flvVersion:y}),wistia:b({options:_,playerId:y,customControls:le}),mixcloud:b({options:_}),twitch:b({options:_,playerId:y}),vidyard:b({options:_})}),onReady:d,onStart:d,onPlay:d,onPause:d,onBuffer:d,onBufferEnd:d,onEnded:d,onError:d,onDuration:d,onSeek:d,onPlaybackRateChange:d,onPlaybackQualityChange:d,onProgress:d,onClickPreview:d,onEnablePIP:d,onDisablePIP:d},h=()=>{},xa={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:h},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:h,onStart:h,onPlay:h,onPause:h,onBuffer:h,onBufferEnd:h,onEnded:h,onError:h,onDuration:h,onSeek:h,onPlaybackRateChange:h,onPlaybackQualityChange:h,onProgress:h,onClickPreview:h,onEnablePIP:h,onDisablePIP:h};var Ra=Object.create,Y=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Ca=Object.getOwnPropertyNames,Ma=Object.getPrototypeOf,Ia=Object.prototype.hasOwnProperty,La=(e,t,r)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Da=(e,t)=>{for(var r in t)Y(e,r,{get:t[r],enumerable:!0})},st=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ca(t))!Ia.call(e,n)&&n!==r&&Y(e,n,{get:()=>t[n],enumerable:!(a=ja(t,n))||a.enumerable});return e},it=(e,t,r)=>(r=e!=null?Ra(Ma(e)):{},st(!e||!e.__esModule?Y(r,"default",{value:e,enumerable:!0}):r,e)),$a=e=>st(Y({},"__esModule",{value:!0}),e),c=(e,t,r)=>(La(e,typeof t!="symbol"?t+"":t,r),r),lt={};Da(lt,{default:()=>ae});var ka=$a(lt),Ce=it(x),Ua=it(rt),ut=ot,Na=te;const za=5e3;class ae extends Ce.Component{constructor(){super(...arguments),c(this,"mounted",!1),c(this,"isReady",!1),c(this,"isPlaying",!1),c(this,"isLoading",!0),c(this,"loadOnReady",null),c(this,"startOnPlay",!0),c(this,"seekOnPlay",null),c(this,"onDurationCalled",!1),c(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),c(this,"getInternalPlayer",t=>this.player?this.player[t]:null),c(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),c(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),c(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),c(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),c(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),c(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),c(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),c(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:o,playbackRate:l,pip:i,loop:p,activePlayer:O,disableDeferredLoading:f}=this.props;if(!(0,Ua.default)(t.url,r)){if(this.isLoading&&!O.forceLoad&&!f&&!(0,Na.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),t.loop!==p&&this.player.setLoop&&this.player.setLoop(p)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},za));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?Ce.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}c(ae,"displayName","Player");c(ae,"propTypes",ut.propTypes);c(ae,"defaultProps",ut.defaultProps);var Ha=Object.create,X=Object.defineProperty,Va=Object.getOwnPropertyDescriptor,Ba=Object.getOwnPropertyNames,Fa=Object.getPrototypeOf,Wa=Object.prototype.hasOwnProperty,Ka=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ya=(e,t)=>{for(var r in t)X(e,r,{get:t[r],enumerable:!0})},ct=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ba(t))!Wa.call(e,n)&&n!==r&&X(e,n,{get:()=>t[n],enumerable:!(a=Va(t,n))||a.enumerable});return e},q=(e,t,r)=>(r=e!=null?Ha(Fa(e)):{},ct(!e||!e.__esModule?X(r,"default",{value:e,enumerable:!0}):r,e)),Xa=e=>ct(X({},"__esModule",{value:!0}),e),u=(e,t,r)=>(Ka(e,typeof t!="symbol"?t+"":t,r),r),pt={};Ya(pt,{createReactPlayer:()=>an});var qa=Xa(pt),D=q(x),Ja=q(De),ue=q(fa),Me=q(rt),F=ot,dt=te,Za=q(ka);const Qa=(0,dt.lazy)(()=>g(()=>import("./Preview-B7cn3pfm.js").then(e=>e.P),__vite__mapDeps([15,1,2]))),Ga=typeof window<"u"&&window.document&&typeof document<"u",en=typeof se<"u"&&se.window&&se.window.document,tn=Object.keys(F.propTypes),rn=Ga||en?D.Suspense:()=>null,B=[],an=(e,t)=>{var r;return r=class extends D.Component{constructor(){super(...arguments),u(this,"state",{showPreview:!!this.props.light}),u(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),u(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),u(this,"showPreview",()=>{this.setState({showPreview:!0})}),u(this,"getDuration",()=>this.player?this.player.getDuration():null),u(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),u(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),u(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),u(this,"seekTo",(a,n,o)=>{if(!this.player)return null;this.player.seekTo(a,n,o)}),u(this,"handleReady",()=>{this.props.onReady(this)}),u(this,"getActivePlayer",(0,ue.default)(a=>{for(const n of[...B,...e])if(n.canPlay(a))return n;return t||null})),u(this,"getConfig",(0,ue.default)((a,n)=>{const{config:o}=this.props;return Ja.default.all([F.defaultProps.config,F.defaultProps.config[n]||{},o,o[n]||{}])})),u(this,"getAttributes",(0,ue.default)(a=>(0,dt.omit)(this.props,tn))),u(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const o=this.getConfig(a,n.key);return D.default.createElement(Za.default,{...this.props,key:n.key,ref:this.references.player,config:o,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,Me.default)(this.props,a)||!(0,Me.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:o,previewTabIndex:l,oEmbedUrl:i,previewAriaLabel:p}=this.props;return D.default.createElement(Qa,{url:a,light:n,playIcon:o,previewTabIndex:l,previewAriaLabel:p,oEmbedUrl:i,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:o,height:l,fallback:i,wrapper:p}=this.props,{showPreview:O}=this.state,f=this.getAttributes(a),w=typeof p=="string"?this.references.wrapper:void 0;return D.default.createElement(p,{ref:w,style:{...n,width:o,height:l},...f},D.default.createElement(rn,{fallback:i},O?this.renderPreview(a):this.renderActivePlayer(a)))}},u(r,"displayName","ReactPlayer"),u(r,"propTypes",F.propTypes),u(r,"defaultProps",F.defaultProps),u(r,"addCustomPlayer",a=>{B.push(a)}),u(r,"removeCustomPlayers",()=>{B.length=0}),u(r,"canPlay",a=>{for(const n of[...B,...e])if(n.canPlay(a))return!0;return!1}),u(r,"canEnablePIP",a=>{for(const n of[...B,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var nn=Object.create,ne=Object.defineProperty,on=Object.getOwnPropertyDescriptor,sn=Object.getOwnPropertyNames,ln=Object.getPrototypeOf,un=Object.prototype.hasOwnProperty,cn=(e,t)=>{for(var r in t)ne(e,r,{get:t[r],enumerable:!0})},ft=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of sn(t))!un.call(e,n)&&n!==r&&ne(e,n,{get:()=>t[n],enumerable:!(a=on(t,n))||a.enumerable});return e},pn=(e,t,r)=>(r=e!=null?nn(ln(e)):{},ft(!e||!e.__esModule?ne(r,"default",{value:e,enumerable:!0}):r,e)),dn=e=>ft(ne({},"__esModule",{value:!0}),e),yt={};cn(yt,{default:()=>_n});var fn=dn(yt),fe=pn(ia),yn=qa;const hn=fe.default[fe.default.length-1];var _n=(0,yn.createReactPlayer)(fe.default,hn);const mn=Et(fn),ht=({url:e})=>e?s.jsx("div",{style:{maxWidth:"100%",aspectRatio:"16/9"},children:s.jsx(mn,{url:e,width:"100%",height:"100%",controls:!0})}):null;ht.propTypes={url:xt.string};const Pn=k(Rt)(({theme:e})=>({width:"100%",maxWidth:800,margin:"20px auto",padding:e.spacing(2),borderRadius:3,display:"flex",flexDirection:"column",gap:e.spacing(2)})),vn=k(E)(({theme:e})=>({height:300,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.palette.mode==="dark"?"grey.800":"grey.200",borderRadius:2})),gn=k(E)(({theme:e})=>({display:"flex",flexDirection:"column",gap:e.spacing(2)})),bn=k(W)(({theme:e})=>({fontWeight:600,marginBottom:e.spacing(1)})),On=k(W)(({theme:e})=>({color:e.palette.text.secondary})),wn=k(Ie)(()=>({gap:"7px"})),Sn=()=>{const e=H(jt),{id:t,nameCollection:r}=Ct(),a=H(Mt),[n,o]=x.useState(!1),l=It(),i=Lt(),p=H(Dt),O=H($t),f=H(kt),w=f.some(S=>S==="superAdmin"),U=f.some(S=>S==="admin"||S==="superAdmin"),N=()=>{l(zt({nameCollection:r,id:t})).then(()=>{Te("success","Post successfully deleted"),i(-1)}).catch(S=>{var Oe,we;Te("error",((we=(Oe=S.response)==null?void 0:Oe.data)==null?void 0:we.error)||"Error when deleting a post"),console.error("Error deleting post:",S)})};if(x.useEffect(()=>{l(Ut(t))},[t,l]),!n&&(O||!p))return s.jsx(E,{display:"flex",justifyContent:"center",alignItems:"center",height:"60vh",children:s.jsx(qt,{size:50})});const{title:oe,description:J,category:T,posters:C,tags:z=[],adder:A,files:R=[],videoLink:M,_id:Z,likedBy:Q=[],likes:_t,createdAt:be}=p;return s.jsx(s.Fragment,{children:s.jsxs(Pn,{children:[s.jsx(E,{display:"flex",justifyContent:"flex-start",mb:2,children:s.jsx(Se,{startIcon:s.jsx(Kt,{}),onClick:()=>i(-1),variant:"outlined",children:e==="ua"?"Назад":"Back"})}),(C==null?void 0:C.length)>0?s.jsx(Ht,{images:C,variant:"fullPost"}):s.jsx(vn,{children:s.jsx(Vt,{fontSize:"large"})}),s.jsxs(gn,{children:[s.jsx(bn,{variant:"h5",sx:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:oe}),T&&s.jsxs(On,{variant:"subtitle2",children:[e==="ua"?"Категорія:":"Category:"," ",T]}),A&&s.jsxs(Ie,{direction:"row",spacing:1,alignItems:"center",children:[s.jsx(nr,{src:A.photoURL,alt:A.name}),s.jsx(W,{variant:"body2",children:A.name})]}),J&&s.jsx(W,{variant:"body1",component:"div",sx:{wordBreak:"break-word"},children:s.jsx(Xt,{children:J})}),M&&s.jsx(E,{sx:{width:"100%",position:"relative",overflow:"hidden"},children:s.jsx(ht,{url:M})}),z.length>0&&s.jsx(wn,{direction:"row",flexWrap:"wrap",children:z.map(S=>s.jsx(Wt,{label:S,variant:"outlined"},S))}),R.length>0&&s.jsx(E,{children:s.jsx(Bt,{files:R,variant:"fullPost"})}),s.jsxs(E,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[be&&s.jsx(W,{variant:"caption",children:Nt(be).format("DD-MM-YYYY")}),Z&&Q&&s.jsx(Yt,{_id:Z,likedBy:Q,likes:_t,setIsLiking:o,nameCollection:r})]})]}),s.jsx(E,{display:"flex",justifyContent:"center",children:U&&s.jsx(Se,{onClick:N,disabled:w?!w:A.uid!==a.uid,children:"Delete"})})]})})},Mn=Object.freeze(Object.defineProperty({__proto__:null,default:Sn},Symbol.toStringTag,{value:"Module"}));export{Mn as P,Gr as p,te as u};
