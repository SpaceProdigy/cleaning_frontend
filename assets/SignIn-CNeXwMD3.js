import{s as A,r as i,u as r,a as E,b as N,c as B,e as F,f as O,j as e,T as a,B as L,N as p,l as J}from"./index-y7Z8Q1c8.js";import{u as T,A as W,o as D,l as H}from"./AuthGoogleButton-DjH57Om8.js";import{F as x,I as h,O as f,a as j,A as k}from"./AlertComponent-CN3taAQh.js";import{B as C}from"./Button-ljPt6toy.js";const G=A("form")`
  width: 100%;
  margin: 30px 0;
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,q=()=>{var m,g;const[n,o]=i.useState(JSON.parse(localStorage.getItem("signin"))&&JSON.parse(localStorage.getItem("signin"))),t=r(E),S=N(),v=r(B),l=r(F),c=O();i.useEffect(()=>{l&&c("/")},[l,c]);const{register:u,handleSubmit:b,formState:{errors:d},reset:y}=T({resolver:D(H),mode:"onBlur",defaultValues:n&&n}),I=async s=>{await S(J(s)),y(),o(),localStorage.removeItem("signin")};return i.useEffect(()=>{(JSON.parse(localStorage.getItem("signin"))||n)&&localStorage.setItem("signin",JSON.stringify(n))},[n]),e.jsxs(e.Fragment,{children:[e.jsxs(G,{onSubmit:b(I),children:[e.jsx(a,{variant:"h5",sx:{mb:3},children:t==="en"?"Sign in":"Увійти"}),e.jsxs(x,{variant:"outlined",fullWidth:!0,children:[e.jsx(h,{variant:"outlined",children:t==="en"?"Email":"Електронна пошта"}),e.jsx(f,{label:t==="en"?"Email":"Електронна пошта",placeholder:t==="en"?"Enter your email":"Введіть свою електронну адресу",onInput:s=>o(w=>({...w,email:s.target.value})),...u("email")}),e.jsx(j,{sx:{minHeight:50},error:!0,children:(m=d.email)==null?void 0:m.message[t]})]}),e.jsxs(x,{variant:"outlined",fullWidth:!0,children:[e.jsx(h,{variant:"outlined",children:t==="en"?"Password":"Пароль"}),e.jsx(f,{label:t==="en"?"Password":"Пароль",type:"password",placeholder:t==="en"?"Enter your password":"Введіть ваш пароль",...u("password")}),e.jsx(j,{sx:{minHeight:40},error:!0,children:(g=d.password)==null?void 0:g.message[t]})]}),e.jsx(C,{type:"submit",variant:"contained",fullWidth:!0,size:"large",disabled:v,children:t==="en"?"Submit":"Надіслати"}),e.jsx(W,{text:t==="en"?"Sign in with google":"Ввійти з Google"})]}),e.jsx(L,{m:1,textAlign:"center",children:t==="en"?e.jsxs(a,{variant:"caption",children:["I don't have an account.",e.jsx(p,{to:"/signup",style:{textDecoration:"none"},children:e.jsxs(a,{component:"span",variant:"caption",color:"#3498db",children:[" ","Sign up"]})}),"."]}):e.jsxs(a,{variant:"caption",children:["У мене немає облікового запису.",e.jsxs(p,{to:"/signup",style:{textDecoration:"none"},children:[" ",e.jsxs(a,{component:"span",variant:"caption",color:"#3498db",children:[" ","Зареєструватися"]})]}),"."]})}),e.jsx(k,{})]})};export{q as default};