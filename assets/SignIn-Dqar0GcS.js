import{s as w,r,u as p,a as E,b as A,c as N,e as B,j as e,T as a,B as F,N as g,l as O}from"./index-CGatWB1X.js";import{u as J,A as T,o as W,l as D}from"./AuthGoogleButton-CLsv5aPn.js";import{F as x,I as h,O as j,a as f,A as H}from"./AlertComponent-C1KTb7Zb.js";import{B as L}from"./Button-D4mnJAZW.js";const k=w("form")`
  width: 100%;
  margin: 30px 0;
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`,R=()=>{var d,m;const[n,i]=r.useState(JSON.parse(localStorage.getItem("signin"))&&JSON.parse(localStorage.getItem("signin"))),t=p(E),S=A(),o=p(N),l=B();r.useEffect(()=>{o&&l("/")},[o,l]);const{register:c,handleSubmit:v,formState:{errors:u},reset:y}=J({resolver:W(D),mode:"onBlur",defaultValues:n&&n}),I=async s=>{await S(O(s)),y(),i(),localStorage.removeItem("signin")};return r.useEffect(()=>{(JSON.parse(localStorage.getItem("signin"))||n)&&localStorage.setItem("signin",JSON.stringify(n))},[n]),e.jsxs(e.Fragment,{children:[e.jsxs(k,{onSubmit:v(I),children:[e.jsx(a,{variant:"h5",sx:{mb:3},children:t==="en"?"Sign in":"Увійти"}),e.jsxs(x,{variant:"outlined",fullWidth:!0,children:[e.jsx(h,{variant:"outlined",children:t==="en"?"Email":"Електронна пошта"}),e.jsx(j,{label:t==="en"?"Email":"Електронна пошта",placeholder:t==="en"?"Enter your email":"Введіть свою електронну адресу",onInput:s=>i(b=>({...b,email:s.target.value})),...c("email")}),e.jsx(f,{sx:{minHeight:50},error:!0,children:(d=u.email)==null?void 0:d.message[t]})]}),e.jsxs(x,{variant:"outlined",fullWidth:!0,children:[e.jsx(h,{variant:"outlined",children:t==="en"?"Password":"Пароль"}),e.jsx(j,{label:t==="en"?"Password":"Пароль",type:"password",placeholder:t==="en"?"Enter your password":"Введіть ваш пароль",...c("password")}),e.jsx(f,{sx:{minHeight:40},error:!0,children:(m=u.password)==null?void 0:m.message[t]})]}),e.jsx(L,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:t==="en"?"Submit":"Надіслати"}),e.jsx(T,{text:t==="en"?"Sign in with google":"Ввійти з Google"})]}),e.jsx(F,{m:1,textAlign:"center",children:t==="en"?e.jsxs(a,{variant:"caption",children:["I don't have an account.",e.jsx(g,{to:"/signup",style:{textDecoration:"none"},children:e.jsxs(a,{component:"span",variant:"caption",color:"#3498db",children:[" ","Sign up"]})}),"."]}):e.jsxs(a,{variant:"caption",children:["У мене немає облікового запису.",e.jsxs(g,{to:"/signup",style:{textDecoration:"none"},children:[" ",e.jsxs(a,{component:"span",variant:"caption",color:"#3498db",children:[" ","Зареєструватися"]})]}),"."]})}),e.jsx(H,{})]})};export{R as default};
