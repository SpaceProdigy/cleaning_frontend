import{s as a,B as n,u as s,a as d,j as e,T as r}from"./index-CDqjAzOg.js";import{R as p}from"./index-DH0i62mq.js";const c={en:"Welcome to our website",ua:"Вітаю вас на нашому сайті"},i="/languagelift/assets/hero-yK5kWOTn.png",g=a(n)`
  width: 100%;
  height: 100%;
  background-image: url(${i});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 720px) {
    background-image: url(${i});
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
`,l=a(n)`
  position: absolute;
  width: 90%;
  max-width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme:t})=>t.palette.mode==="dark"?"#000000bb":"#ffffffbb"};
  padding: 30px 0;
  border-radius: 7px;
`,x=a(n)`
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
`,m=()=>{const t=s(d);return e.jsx(e.Fragment,{children:e.jsxs(x,{children:[e.jsx(g,{}),e.jsxs(l,{children:[e.jsxs(r,{textAlign:"center",variant:"h4",sx:{fontWeight:700},children:["Maria",e.jsx(r,{variant:"h4",component:"span",sx:o=>({bgcolor:"#f90",padding:"5px",borderRadius:2,fontWeight:700,color:o.palette.mode==="dark"?"#111":"#fff"}),children:"Mediatrix"})]}),e.jsx(r,{variant:"body2",textAlign:"center",marginTop:1,children:e.jsx(p,{strings:[c[t]],typeSpeed:70,cursorChar:""})})]})]})})};export{m as default};
