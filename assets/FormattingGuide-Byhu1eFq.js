import{u as g,b as m,j as n,a8 as u,T as r,P as l,a9 as p,a as o}from"./index-c59pOa3I.js";import{U as h}from"./UniversalReactMarkdown-WTpi7L0K.js";import"./Link-BBpuZ9tL.js";const x={ua:{headings:"Заголовки",boldItalic:"Жирний текст / Курсив",links:"Посилання",lists:"Списки",blockquotes:"Цитати",images:"Зображення"},en:{headings:"Headings",boldItalic:"Bold / Italic",links:"Links",lists:"Lists",blockquotes:"Quotes",images:"Images"}},j={ua:{headings:`# Заголовок 1

## Заголовок 2

### Заголовок 3

#### Заголовок 4

##### Заголовок 5

###### Заголовок 6`,boldItalic:`**Жирний текст**

*Курсивний текст*

__Жирний курсив__

~Закреслений текст~`,links:"[Текст посилання](https://example.com)",images:"![Зображення](https://res.cloudinary.com/dajlyi3lg/image/upload/c_thumb,w_200,g_face/v1741304146/samples/balloons.jpg)",lists:`- Список 1
- Список 2
- Список 3
1. Перший елемент
2. Другий елемент`,blockquotes:`> Це цитата

> І ще одна цитата`},en:{headings:`# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6`,boldItalic:`**Bold text**

*Italic text*

__Bold italic__

~Strikethrough~`,links:"[Link](https://example.com)",images:"![Image](https://res.cloudinary.com/dajlyi3lg/image/upload/c_thumb,w_200,g_face/v1741304146/samples/balloons.jpg)",lists:`- Item 1
- Item 2
- Item 3
1. First item
2. Second item`,blockquotes:`> This is a quote

> Another quote`}};function I(){const s=g(m),e=j[s],t=x[s];return n.jsxs(u,{maxWidth:"lg",sx:{padding:"40px 20px"},children:[n.jsx(r,{variant:"h4",gutterBottom:!0,align:"center",sx:{fontWeight:"bold"},children:s==="ua"?"Посібник з форматування":"Formatting Guide"}),n.jsx(i,{title:t.headings,children:e.headings}),n.jsx(i,{title:t.boldItalic,children:e.boldItalic}),n.jsx(i,{title:t.links,children:e.links}),n.jsx(i,{title:t.lists,children:e.lists}),n.jsx(i,{title:t.blockquotes,children:e.blockquotes}),n.jsx(i,{title:t.images,children:e.images})]})}function i({title:s,children:e}){const d=[e][0].split(`
`).filter(a=>a.trim()!=="");return n.jsxs(l,{elevation:3,sx:{padding:3,marginBottom:4},children:[n.jsx(r,{variant:"h5",gutterBottom:!0,children:s}),n.jsx(l,{component:"div",sx:{padding:"20px",wordWrap:"break-word"},children:d.map((a,c)=>n.jsxs("div",{children:[a,n.jsx("br",{})]},c))}),n.jsx(h,{children:e}),n.jsx(p,{sx:{marginTop:2}})]})}i.propTypes={title:o.string.isRequired,children:o.node.isRequired};export{I as default};
