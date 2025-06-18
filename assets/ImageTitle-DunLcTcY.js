import{s as i,B as n,j as e,T as a,a as t}from"./index-DdVm9K2z.js";import{R as p}from"./errorMessages-D5G7iQbC.js";const c="https://res.cloudinary.com/dajlyi3lg/image/upload/v1742340709/m1qfkqrfxkgris5hdzx5.jpg",l=i(n)`
  width: calc(100% + 32px);
  height: 200px;
  background-image: ${({image:r})=>r?`url(${r})`:`url(${c})`};
  margin-left: -16px;
  margin-right: -16px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  @media screen and (min-width: 600px) {
    margin-left: -24px;
    margin-right: -24px;
    width: calc(100% + 48px);
    font-size: 32px;
    height: 300px;
  }
`,d=i(n)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #11111150; */
`,g=i(n)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px;
  background-color: ${({theme:r})=>r.palette.mode==="light"?"#ffffffbb":"#111111bb"};
  border-radius: 7px;
`;x.propTypes={tipingText:t.string,image:t.string,title:t.string};function x({tipingText:r,image:s,title:o}){return e.jsx(e.Fragment,{children:e.jsx(l,{image:s,children:e.jsx(d,{children:e.jsxs(g,{children:[e.jsx(a,{variant:"inherit",textAlign:"center",children:o}),e.jsx(a,{variant:"h6",children:r&&e.jsx(p,{strings:[r],typeSpeed:70,cursorChar:""})})]})})})})}export{x as I};
