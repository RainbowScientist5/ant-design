(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["8a7d649e"],{"8a7d649e":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return r;}});var d=a("f19d2b93");a("10e347f8");var n=a("5b220c3d"),i=a("a9d1a279");let s=()=>{let{componentDisabled:e,componentSize:l}=i.ConfigProvider.useConfig();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.Form.Item,{label:"componentSize value",children:(0,d.jsx)(i.Input,{value:l})}),(0,d.jsx)(i.Form.Item,{label:"componentDisabled value",children:(0,d.jsx)(i.Input,{value:String(e),disabled:e})})]});};var r=()=>{let[e,l]=(0,n.useState)("small"),[a,r]=(0,n.useState)(!0);return(0,d.jsxs)("div",{children:[(0,d.jsxs)(i.Space,{children:[(0,d.jsxs)(i.Radio.Group,{value:e,onChange:e=>{l(e.target.value);},children:[(0,d.jsx)(i.Radio.Button,{value:"small",children:"Small"}),(0,d.jsx)(i.Radio.Button,{value:"middle",children:"Middle"}),(0,d.jsx)(i.Radio.Button,{value:"large",children:"Large"})]}),(0,d.jsx)(i.Checkbox,{checked:a,onChange:e=>r(e.target.checked),children:"Form disabled"})]}),(0,d.jsx)(i.Divider,{}),(0,d.jsx)(i.ConfigProvider,{componentSize:e,children:(0,d.jsx)("div",{className:"example",children:(0,d.jsx)(i.Form,{disabled:a,children:(0,d.jsx)(s,{})})})})]});};}}]);