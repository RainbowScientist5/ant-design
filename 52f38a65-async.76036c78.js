(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["52f38a65"],{"175281a0":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return d;}});var a=n("f19d2b93");n("52beeb78");var i=n("a9d1a279"),d=()=>(0,a.jsxs)(i.Flex,{align:"center",gap:"middle",children:[(0,a.jsx)(i.Spin,{size:"small"}),(0,a.jsx)(i.Spin,{}),(0,a.jsx)(i.Spin,{size:"large"})]});},"17b34e37":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=n("777fffbe"),i=n("f19d2b93");n("18efc164");var d=a._(n("5b220c3d")),l=n("a9d1a279"),s=()=>{let[e,t]=d.default.useState(!1),[n,a]=d.default.useState(0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Button,{onClick:()=>{t(!0);let e=-10,n=setInterval(()=>{a(e+=5),e>120&&(clearInterval(n),t(!1),a(0));},100);},children:"Show fullscreen"}),(0,i.jsx)(l.Spin,{spinning:e,percent:n,fullscreen:!0})]});};},"19ae8563":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=n("f19d2b93");n("9d7846c6");var i=n("a9d1a279");let d=(0,a.jsx)("div",{style:{padding:50,background:"rgba(0, 0, 0, 0.05)",borderRadius:4}});var l=()=>(0,a.jsxs)(i.Flex,{gap:"middle",vertical:!0,children:[(0,a.jsxs)(i.Flex,{gap:"middle",children:[(0,a.jsx)(i.Spin,{tip:"Loading",size:"small",children:d}),(0,a.jsx)(i.Spin,{tip:"Loading",children:d}),(0,a.jsx)(i.Spin,{tip:"Loading",size:"large",children:d})]}),(0,a.jsx)(i.Spin,{tip:"Loading...",children:(0,a.jsx)(i.Alert,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]});},"8bc76b2c":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return d;}});var a=n("f19d2b93");n("7b2eb1ad");var i=n("a9d1a279"),d=()=>(0,a.jsx)(i.Spin,{});},b5d8646f:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=n("777fffbe"),i=n("f19d2b93");n("81db2fd3");var d=a._(n("5b220c3d")),l=n("a9d1a279"),s=()=>{let[e,t]=d.default.useState(!1),[n,a]=d.default.useState(-50),s=d.default.useRef(null);d.default.useEffect(()=>(s.current=setTimeout(()=>{a(e=>{let t=e+5;return t>150?-50:t;});},100),()=>clearTimeout(s.current)),[n]);let r=e?"auto":n;return(0,i.jsxs)(l.Flex,{align:"center",gap:"middle",children:[(0,i.jsx)(l.Switch,{checkedChildren:"Auto",unCheckedChildren:"Auto",checked:e,onChange:()=>{t(!e),a(-50);}}),(0,i.jsx)(l.Spin,{percent:r,size:"small"}),(0,i.jsx)(l.Spin,{percent:r}),(0,i.jsx)(l.Spin,{percent:r,size:"large"})]});};},ce70a57f:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=n("777fffbe"),i=n("f19d2b93");n("9aa83c1d");var d=a._(n("5b220c3d")),l=n("a9d1a279"),s=()=>{let[e,t]=d.default.useState(!1);return(0,i.jsxs)(l.Flex,{gap:"middle",vertical:!0,children:[(0,i.jsx)(l.Spin,{spinning:e,delay:500,children:(0,i.jsx)(l.Alert,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),(0,i.jsxs)("p",{children:["Loading state\uFF1A",(0,i.jsx)(l.Switch,{checked:e,onChange:t})]})]});};},d5a0e339:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=n("f19d2b93");n("785c1195");var i=n("e22febe0"),d=n("a9d1a279"),l=()=>(0,a.jsxs)(d.Flex,{align:"center",gap:"middle",children:[(0,a.jsx)(d.Spin,{indicator:(0,a.jsx)(i.LoadingOutlined,{spin:!0}),size:"small"}),(0,a.jsx)(d.Spin,{indicator:(0,a.jsx)(i.LoadingOutlined,{spin:!0})}),(0,a.jsx)(d.Spin,{indicator:(0,a.jsx)(i.LoadingOutlined,{spin:!0}),size:"large"}),(0,a.jsx)(d.Spin,{indicator:(0,a.jsx)(i.LoadingOutlined,{style:{fontSize:48},spin:!0})})]});},dff715d1:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var a=n("777fffbe"),i=n("f19d2b93");n("8b4b9f48");var d=a._(n("5b220c3d")),l=n("a9d1a279"),s=()=>{let[e,t]=d.default.useState(!1);return(0,i.jsxs)(l.Flex,{gap:"middle",vertical:!0,children:[(0,i.jsx)(l.Spin,{spinning:e,children:(0,i.jsx)(l.Alert,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),(0,i.jsxs)("p",{children:["Loading state\uFF1A",(0,i.jsx)(l.Switch,{checked:e,onChange:t})]})]});};}}]);