(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["0593ab1f"],{"04270773":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var l=n("f19d2b93");n("5e6aac99");var r=n("5b220c3d"),i=n("e22febe0"),a=n("a9d1a279"),s=()=>{let[e,t]=(0,r.useState)("large");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Radio.Group,{value:e,onChange:e=>t(e.target.value),children:[(0,l.jsx)(a.Radio.Button,{value:"large",children:"Large"}),(0,l.jsx)(a.Radio.Button,{value:"default",children:"Default"}),(0,l.jsx)(a.Radio.Button,{value:"small",children:"Small"})]}),(0,l.jsx)(a.Divider,{orientation:"left",plain:!0,children:"Preview"}),(0,l.jsxs)(a.Flex,{gap:"small",align:"flex-start",vertical:!0,children:[(0,l.jsxs)(a.Flex,{gap:"small",wrap:!0,children:[(0,l.jsx)(a.Button,{type:"primary",size:e,children:"Primary"}),(0,l.jsx)(a.Button,{size:e,children:"Default"}),(0,l.jsx)(a.Button,{type:"dashed",size:e,children:"Dashed"})]}),(0,l.jsx)(a.Button,{type:"link",size:e,children:"Link"}),(0,l.jsxs)(a.Flex,{gap:"small",wrap:!0,children:[(0,l.jsx)(a.Button,{type:"primary",icon:(0,l.jsx)(i.DownloadOutlined,{}),size:e}),(0,l.jsx)(a.Button,{type:"primary",shape:"circle",icon:(0,l.jsx)(i.DownloadOutlined,{}),size:e}),(0,l.jsx)(a.Button,{type:"primary",shape:"round",icon:(0,l.jsx)(i.DownloadOutlined,{}),size:e}),(0,l.jsx)(a.Button,{type:"primary",shape:"round",icon:(0,l.jsx)(i.DownloadOutlined,{}),size:e,children:"Download"}),(0,l.jsx)(a.Button,{type:"primary",icon:(0,l.jsx)(i.DownloadOutlined,{}),size:e,children:"Download"})]})]})]});};},"04778281":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return a;}});var l=n("f19d2b93");n("7f7b9068");var r=n("e22febe0"),i=n("a9d1a279"),a=()=>(0,l.jsx)(i.Form,{children:(0,l.jsxs)(i.Form.Item,{children:[(0,l.jsx)(i.Button,{size:"large",shape:"round",block:!0,style:{marginBottom:12},children:"Submit"}),(0,l.jsx)(i.Button,{size:"large",shape:"round",icon:(0,l.jsx)(r.DownloadOutlined,{})})]})});},"054dec07":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var l=n("f19d2b93");n("5395f4a8");var r=n("5b220c3d"),i=n("e22febe0"),a=n("a9d1a279"),s=()=>{let[e,t]=(0,r.useState)([]),n=e=>{t(t=>{let n=[...t];return n[e]=!0,n;}),setTimeout(()=>{t(t=>{let n=[...t];return n[e]=!1,n;});},3e3);};return(0,l.jsxs)(a.Flex,{gap:"small",vertical:!0,children:[(0,l.jsxs)(a.Flex,{gap:"small",align:"center",wrap:!0,children:[(0,l.jsx)(a.Button,{type:"primary",loading:!0,children:"Loading"}),(0,l.jsx)(a.Button,{type:"primary",size:"small",loading:!0,children:"Loading"}),(0,l.jsx)(a.Button,{type:"primary",icon:(0,l.jsx)(i.PoweroffOutlined,{}),loading:!0})]}),(0,l.jsxs)(a.Flex,{gap:"small",wrap:!0,children:[(0,l.jsx)(a.Button,{type:"primary",loading:e[0],onClick:()=>n(0),children:"Icon Start"}),(0,l.jsx)(a.Button,{type:"primary",loading:e[2],onClick:()=>n(2),iconPosition:"end",children:"Icon End"}),(0,l.jsx)(a.Button,{type:"primary",icon:(0,l.jsx)(i.PoweroffOutlined,{}),loading:e[1],onClick:()=>n(1),children:"Icon Replace"}),(0,l.jsx)(a.Button,{type:"primary",icon:(0,l.jsx)(i.PoweroffOutlined,{}),loading:e[3],onClick:()=>n(3)})]})]});};},"05db3bea":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var l=n("f19d2b93");n("65d724af");var r=n("e22febe0"),i=n("a9d1a279");let a=(0,n("3835a2b7").createStyles)(({prefixCls:e,css:t})=>({linearGradientButton:t`
    &.${e}-btn-primary:not([disabled]):not(.${e}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `}));var s=()=>{let{styles:e}=a();return(0,l.jsx)(i.ConfigProvider,{button:{className:e.linearGradientButton},children:(0,l.jsxs)(i.Space,{children:[(0,l.jsx)(i.Button,{type:"primary",size:"large",icon:(0,l.jsx)(r.AntDesignOutlined,{}),children:"Gradient Button"}),(0,l.jsx)(i.Button,{size:"large",children:"Button"})]})});};},"0619b569":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var l=n("f19d2b93");n("ffd5f38c");var r=n("a9d1a279");let i=e=>{console.log("click",e);},a=[{key:"1",label:"1st item"},{key:"2",label:"2nd item"},{key:"3",label:"3rd item"}];var s=()=>(0,l.jsxs)(r.Flex,{align:"flex-start",gap:"small",vertical:!0,children:[(0,l.jsx)(r.Button,{type:"primary",children:"primary"}),(0,l.jsx)(r.Button,{children:"secondary"}),(0,l.jsx)(r.Dropdown.Button,{menu:{items:a,onClick:i},children:"Actions"})]});},"076ee157":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return x;}});var l=n("777fffbe"),r=n("f19d2b93");n("3206fb1b");var i=l._(n("5b220c3d")),a=n("e22febe0"),s=n("a9d1a279"),d=n("9f997516");let o=()=>(0,r.jsx)("div",{style:{background:"red",width:12,height:12}}),c=()=>(0,r.jsx)("div",{style:{background:"green",width:16,height:16}}),u=()=>(0,r.jsx)("div",{style:{background:"blue",width:14,height:16}});var x=()=>{let[e,t]=i.default.useState("large");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Radio.Group,{value:e,onChange:e=>t(e.target.value),children:[(0,r.jsx)(s.Radio.Button,{value:"large",children:"Large"}),(0,r.jsx)(s.Radio.Button,{value:"default",children:"Default"}),(0,r.jsx)(s.Radio.Button,{value:"small",children:"Small"})]}),(0,r.jsx)(s.Divider,{orientation:"left",plain:!0,children:"Preview"}),(0,r.jsx)(s.ConfigProvider,{componentSize:e,children:(0,r.jsxs)(s.Flex,{gap:"small",vertical:!0,children:[(0,r.jsxs)(s.Flex,{gap:"small",wrap:!0,children:[(0,r.jsx)(s.Tooltip,{title:"search",children:(0,r.jsx)(s.Button,{type:"primary",shape:"circle",icon:(0,r.jsx)(a.SearchOutlined,{})})}),(0,r.jsx)(s.Button,{type:"primary",shape:"circle",children:"A"}),(0,r.jsx)(s.Button,{type:"primary",icon:(0,r.jsx)(a.SearchOutlined,{}),children:"Search"}),(0,r.jsx)(s.Tooltip,{title:"search",children:(0,r.jsx)(s.Button,{shape:"circle",icon:(0,r.jsx)(a.SearchOutlined,{})})}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(a.SearchOutlined,{}),children:"Search"})]}),(0,r.jsxs)(s.Flex,{gap:"small",wrap:!0,children:[(0,r.jsx)(s.Tooltip,{title:"search",children:(0,r.jsx)(s.Button,{shape:"circle",icon:(0,r.jsx)(a.SearchOutlined,{})})}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(a.SearchOutlined,{}),children:"Search"}),(0,r.jsx)(s.Tooltip,{title:"search",children:(0,r.jsx)(s.Button,{type:"dashed",shape:"circle",icon:(0,r.jsx)(a.SearchOutlined,{})})}),(0,r.jsx)(s.Button,{type:"dashed",icon:(0,r.jsx)(a.SearchOutlined,{}),children:"Search"}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(a.SearchOutlined,{}),href:"https://www.google.com",target:"_blank"}),(0,r.jsxs)(s.Button,{children:[(0,r.jsx)(a.SearchOutlined,{}),"Search"]})]}),(0,r.jsx)(s.Divider,{plain:!0,children:"\u{1F447}\u{1F3FB} https://github.com/ant-design/ant-design/issues/51811 \u{1F447}\u{1F3FB}"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Button,{children:"without icon"}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(a.SearchOutlined,{}),children:"with icon"})]}),(0,r.jsx)(s.Divider,{plain:!0,children:"\u{1F447}\u{1F3FB} https://github.com/ant-design/ant-design/issues/52124 \u{1F447}\u{1F3FB}"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Button,{style:{height:60},children:"without icon"}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(a.SearchOutlined,{}),style:{height:60},children:"with icon"})]}),(0,r.jsx)(s.Divider,{plain:!0,children:"\u{1F447}\u{1F3FB} https://github.com/ant-design/ant-design/issues/51380 \u{1F447}\u{1F3FB}"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Button,{size:"large",icon:(0,r.jsx)(d.FiColumns,{className:"my-class-name"})}),(0,r.jsx)(s.Button,{size:"large",icon:(0,r.jsx)(d.FiColumns,{}),children:"custom icon"}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(a.SearchOutlined,{})}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(a.SearchOutlined,{}),children:"with icon"}),(0,r.jsx)(s.Button,{size:"large",children:"without icon"}),(0,r.jsx)(s.Input.Search,{style:{width:100}})]}),(0,r.jsx)(s.Divider,{plain:!0,children:"\u{1F447}\u{1F3FB} https://github.com/ant-design/ant-design/issues/51380 \u{1F447}\u{1F3FB}"}),(0,r.jsxs)(s.Flex,{gap:"small",style:{transform:"scale(3)",transformOrigin:"left top"},children:[(0,r.jsx)(s.Button,{icon:(0,r.jsx)(a.MinusSquareOutlined,{})}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(o,{})}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(c,{})}),(0,r.jsx)(s.Button,{icon:(0,r.jsx)(u,{})})]})]})})]});};},"1efebc8e":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return o;}});var l=n("f19d2b93");n("f619d2c3");var r=n("e22febe0"),i=n("a9d1a279");let a=()=>(0,l.jsx)(l.Fragment,{children:"\u90E8\u7F72"}),s=()=>(0,l.jsx)("span",{children:"\u90E8\u7F72"}),d=()=>(0,l.jsx)(l.Fragment,{children:"Submit"});var o=()=>(0,l.jsxs)(i.Flex,{wrap:!0,gap:"small",children:[(0,l.jsx)(i.Button,{children:(0,l.jsx)("span",{children:(0,l.jsx)("span",{children:"\u90E8\u7F72"})})}),(0,l.jsx)(i.Button,{loading:!0,children:"\u90E8\u7F72"}),(0,l.jsx)(i.Button,{loading:!0,children:(0,l.jsx)(a,{})}),(0,l.jsx)(i.Button,{loading:!0,children:(0,l.jsx)(s,{})}),(0,l.jsx)(i.Button,{loading:!0,children:(0,l.jsx)(d,{})}),(0,l.jsx)(i.Button,{loading:!0,icon:(0,l.jsx)(r.PoweroffOutlined,{}),children:(0,l.jsx)(a,{})}),(0,l.jsx)(i.Button,{loading:!0,children:"\u6309\u94AE"})]});},"256d6b06":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var l=n("f19d2b93");n("3e157b64");var r=n("a9d1a279"),i=()=>(0,l.jsxs)(r.Flex,{wrap:!0,gap:"small",className:"site-button-ghost-wrapper",children:[(0,l.jsx)(r.Button,{type:"primary",ghost:!0,children:"Primary"}),(0,l.jsx)(r.Button,{ghost:!0,children:"Default"}),(0,l.jsx)(r.Button,{type:"dashed",ghost:!0,children:"Dashed"}),(0,l.jsx)(r.Button,{type:"primary",danger:!0,ghost:!0,children:"Danger"})]});},"54b75c07":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var l=n("f19d2b93");n("84e3087a");var r=n("a9d1a279"),i=()=>(0,l.jsxs)(r.Flex,{vertical:!0,gap:"small",style:{width:"100%"},children:[(0,l.jsx)(r.Button,{type:"primary",block:!0,children:"Primary"}),(0,l.jsx)(r.Button,{block:!0,children:"Default"}),(0,l.jsx)(r.Button,{type:"dashed",block:!0,children:"Dashed"}),(0,l.jsx)(r.Button,{disabled:!0,block:!0,children:"disabled"}),(0,l.jsx)(r.Button,{type:"text",block:!0,children:"text"}),(0,l.jsx)(r.Button,{type:"link",block:!0,children:"Link"})]});},"5875eea2":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var l=n("f19d2b93");n("a7736470");var r=n("a9d1a279"),i=()=>(0,l.jsxs)(r.Flex,{gap:"small",wrap:!0,children:[(0,l.jsx)(r.Button,{type:"primary",autoInsertSpace:!1,children:"\u786E\u5B9A"}),(0,l.jsx)(r.Button,{type:"primary",autoInsertSpace:!0,children:"\u786E\u5B9A"})]});},"633a6f0b":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var l=n("f19d2b93");n("daeddc2e");var r=n("5b220c3d"),i=n("e22febe0"),a=n("a9d1a279"),s=()=>{let[e,t]=(0,r.useState)("end");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Space,{children:(0,l.jsxs)(a.Radio.Group,{value:e,onChange:e=>t(e.target.value),children:[(0,l.jsx)(a.Radio.Button,{value:"start",children:"start"}),(0,l.jsx)(a.Radio.Button,{value:"end",children:"end"})]})}),(0,l.jsx)(a.Divider,{orientation:"left",plain:!0,children:"Preview"}),(0,l.jsxs)(a.Flex,{gap:"small",vertical:!0,children:[(0,l.jsxs)(a.Flex,{wrap:!0,gap:"small",children:[(0,l.jsx)(a.Tooltip,{title:"search",children:(0,l.jsx)(a.Button,{type:"primary",shape:"circle",icon:(0,l.jsx)(i.SearchOutlined,{})})}),(0,l.jsx)(a.Button,{type:"primary",shape:"circle",children:"A"}),(0,l.jsx)(a.Button,{type:"primary",icon:(0,l.jsx)(i.SearchOutlined,{}),iconPosition:e,children:"Search"}),(0,l.jsx)(a.Tooltip,{title:"search",children:(0,l.jsx)(a.Button,{shape:"circle",icon:(0,l.jsx)(i.SearchOutlined,{})})}),(0,l.jsx)(a.Button,{icon:(0,l.jsx)(i.SearchOutlined,{}),iconPosition:e,children:"Search"})]}),(0,l.jsxs)(a.Flex,{wrap:!0,gap:"small",children:[(0,l.jsx)(a.Tooltip,{title:"search",children:(0,l.jsx)(a.Button,{shape:"circle",icon:(0,l.jsx)(i.SearchOutlined,{})})}),(0,l.jsx)(a.Button,{icon:(0,l.jsx)(i.SearchOutlined,{}),type:"text",iconPosition:e,children:"Search"}),(0,l.jsx)(a.Tooltip,{title:"search",children:(0,l.jsx)(a.Button,{type:"dashed",shape:"circle",icon:(0,l.jsx)(i.SearchOutlined,{})})}),(0,l.jsx)(a.Button,{type:"dashed",icon:(0,l.jsx)(i.SearchOutlined,{}),iconPosition:e,children:"Search"}),(0,l.jsx)(a.Button,{icon:(0,l.jsx)(i.SearchOutlined,{}),href:"https://www.google.com",target:"_blank",iconPosition:e}),(0,l.jsx)(a.Button,{type:"primary",loading:!0,iconPosition:e,children:"Loading"})]})]})]});};},71903401:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var l=n("f19d2b93");n("e21de074");var r=n("a9d1a279"),i=()=>(0,l.jsxs)(r.Flex,{wrap:!0,gap:"small",children:[(0,l.jsx)(r.Button,{type:"primary",danger:!0,children:"Primary"}),(0,l.jsx)(r.Button,{danger:!0,children:"Default"}),(0,l.jsx)(r.Button,{type:"dashed",danger:!0,children:"Dashed"}),(0,l.jsx)(r.Button,{type:"text",danger:!0,children:"Text"}),(0,l.jsx)(r.Button,{type:"link",danger:!0,children:"Link"})]});},"8844f136":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var l=n("f19d2b93");n("7dd4b982");var r=n("a9d1a279"),i=()=>(0,l.jsx)(r.ConfigProvider,{theme:{components:{Button:{algorithm:!0,colorPrimary:"#1976d2",controlHeight:36,primaryShadow:"0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12)",fontWeight:500,defaultBorderColor:"rgba(25, 118, 210, 0.5)",colorText:"#1976d2",defaultColor:"#1976d2",borderRadius:4,colorTextDisabled:"rgba(0, 0, 0, 0.26)",colorBgContainerDisabled:"rgba(0, 0, 0, 0.12)",contentFontSizeSM:12}}},children:(0,l.jsxs)(r.Flex,{gap:"small",vertical:!0,children:[(0,l.jsxs)(r.Flex,{wrap:!0,gap:"small",children:[(0,l.jsx)(r.Button,{type:"text",children:"TEXT"}),(0,l.jsx)(r.Button,{type:"primary",children:"CONTAINED"}),(0,l.jsx)(r.Button,{children:"OUTLINED"})]}),(0,l.jsxs)(r.Flex,{wrap:!0,gap:"small",children:[(0,l.jsx)(r.Button,{type:"text",disabled:!0,children:"TEXT"}),(0,l.jsx)(r.Button,{type:"primary",disabled:!0,children:"CONTAINED"}),(0,l.jsx)(r.Button,{disabled:!0,children:"OUTLINED"})]}),(0,l.jsxs)(r.Flex,{wrap:!0,gap:"small",children:[(0,l.jsx)(r.Button,{type:"text",size:"small",children:"TEXT"}),(0,l.jsx)(r.Button,{type:"primary",size:"small",children:"CONTAINED"}),(0,l.jsx)(r.Button,{size:"small",children:"OUTLINED"})]})]})});},94909507:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return a;}});var l=n("f19d2b93");n("ef611f74");var r=n("a9d1a279"),i=n("3835a2b7"),a=()=>{let{xxl:e}=(0,i.useResponsive)();return(0,l.jsx)(r.ConfigProvider,{componentSize:e?"middle":"small",children:(0,l.jsxs)(r.Flex,{vertical:!0,gap:"small",children:[(0,l.jsxs)(r.Flex,{gap:"small",wrap:!0,children:[(0,l.jsx)(r.Button,{color:"default",variant:"solid",children:"Solid"}),(0,l.jsx)(r.Button,{color:"default",variant:"outlined",children:"Outlined"}),(0,l.jsx)(r.Button,{color:"default",variant:"dashed",children:"Dashed"}),(0,l.jsx)(r.Button,{color:"default",variant:"filled",children:"Filled"}),(0,l.jsx)(r.Button,{color:"default",variant:"text",children:"Text"}),(0,l.jsx)(r.Button,{color:"default",variant:"link",children:"Link"})]}),(0,l.jsxs)(r.Flex,{gap:"small",wrap:!0,children:[(0,l.jsx)(r.Button,{color:"primary",variant:"solid",children:"Solid"}),(0,l.jsx)(r.Button,{color:"primary",variant:"outlined",children:"Outlined"}),(0,l.jsx)(r.Button,{color:"primary",variant:"dashed",children:"Dashed"}),(0,l.jsx)(r.Button,{color:"primary",variant:"filled",children:"Filled"}),(0,l.jsx)(r.Button,{color:"primary",variant:"text",children:"Text"}),(0,l.jsx)(r.Button,{color:"primary",variant:"link",children:"Link"})]}),(0,l.jsxs)(r.Flex,{gap:"small",wrap:!0,children:[(0,l.jsx)(r.Button,{color:"danger",variant:"solid",children:"Solid"}),(0,l.jsx)(r.Button,{color:"danger",variant:"outlined",children:"Outlined"}),(0,l.jsx)(r.Button,{color:"danger",variant:"dashed",children:"Dashed"}),(0,l.jsx)(r.Button,{color:"danger",variant:"filled",children:"Filled"}),(0,l.jsx)(r.Button,{color:"danger",variant:"text",children:"Text"}),(0,l.jsx)(r.Button,{color:"danger",variant:"link",children:"Link"})]})]})});};},"9c85ca9f":function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return s;}});var l=n("f19d2b93");n("5f8b319e");var r=n("e22febe0"),i=n("a9d1a279");let a=e=>(0,l.jsxs)(i.Button.Group,{...e,children:[(0,l.jsx)(i.Button,{type:"primary",children:"Button 1"}),(0,l.jsx)(i.Button,{type:"primary",children:"Button 2"}),(0,l.jsx)(i.Tooltip,{title:"Tooltip",children:(0,l.jsx)(i.Button,{type:"primary",icon:(0,l.jsx)(r.DownloadOutlined,{}),disabled:!0})}),(0,l.jsx)(i.Tooltip,{title:"Tooltip",children:(0,l.jsx)(i.Button,{type:"primary",icon:(0,l.jsx)(r.DownloadOutlined,{})})})]});var s=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{size:"small"}),(0,l.jsx)("br",{}),(0,l.jsx)(a,{}),(0,l.jsx)("br",{}),(0,l.jsx)(a,{size:"large"})]});},a8cb4feb:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return d;}});var l=n("f19d2b93");n("8aecca8f");var r=n("a9d1a279"),i=n("3835a2b7");let a=(0,i.createStyles)(({css:e})=>({primary:e`
    background: #5794f7;
    border-color: blue;
    color: wheat;
  `,default:e`
    border-color: gray;
    background: #f5f5f5;
    color: #313030;
  `,dashed:e`
    border-color: gray;
    background: #f5f5f5;
    color: #313030;
  `,text:e`
    color: gray;
  `,link:e`
    color: blue;
  `})),s=(0,i.createStyles)(({css:e})=>({wrapper:e`
    .ant-btn-primary {
      color: #ec5b56;
    }
    .ant-btn-default {
      color: orange;
    }
    .ant-btn-dashed {
      color: #3976f6;
    }
    .ant-btn-text {
      color: green;
    }
    .ant-btn-link {
      color: #0e98aa;
    }
  `}));var d=()=>{let{styles:e}=a(),{styles:t}=s();return(0,l.jsxs)(r.Flex,{vertical:!0,gap:"small",children:[(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.ConfigProvider,{theme:{token:{colorPrimary:"red"}},children:(0,l.jsx)(r.Button,{type:"link",children:"Link Button"})}),(0,l.jsx)(r.Button,{type:"link",children:"Link Button"})]}),(0,l.jsxs)(r.Flex,{gap:"small",wrap:!0,children:[(0,l.jsx)(r.Button,{type:"primary",className:e.primary,children:"Primary Button"}),(0,l.jsx)(r.Button,{type:"default",className:e.default,children:"Default Button"}),(0,l.jsx)(r.Button,{type:"dashed",className:e.dashed,children:"Dashed Button"}),(0,l.jsx)(r.Button,{type:"text",className:e.text,children:"Text Button"}),(0,l.jsx)(r.Button,{type:"link",className:e.link,children:"Link Button"})]}),(0,l.jsxs)(r.Flex,{gap:"small",wrap:!0,className:t.wrapper,children:[(0,l.jsx)(r.Button,{type:"primary",children:"Primary Button"}),(0,l.jsx)(r.Button,{type:"default",children:"Default Button"}),(0,l.jsx)(r.Button,{type:"dashed",children:"Dashed Button"}),(0,l.jsx)(r.Button,{type:"text",children:"Text Button"}),(0,l.jsx)(r.Button,{type:"link",children:"Link Button"})]})]});};},c84bfa8a:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var l=n("f19d2b93");n("69b85beb");var r=n("a9d1a279"),i=()=>(0,l.jsxs)(r.Flex,{gap:"small",wrap:!0,children:[(0,l.jsx)(r.Button,{type:"primary",children:"Primary Button"}),(0,l.jsx)(r.Button,{children:"Default Button"}),(0,l.jsx)(r.Button,{type:"dashed",children:"Dashed Button"}),(0,l.jsx)(r.Button,{type:"text",children:"Text Button"}),(0,l.jsx)(r.Button,{type:"link",children:"Link Button"})]});},ceb42329:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return i;}});var l=n("f19d2b93");n("2136eb46");var r=n("a9d1a279"),i=()=>(0,l.jsxs)(r.Flex,{gap:"small",align:"flex-start",vertical:!0,children:[(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.Button,{type:"primary",children:"Primary"}),(0,l.jsx)(r.Button,{type:"primary",disabled:!0,children:"Primary(disabled)"})]}),(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.Button,{children:"Default"}),(0,l.jsx)(r.Button,{disabled:!0,children:"Default(disabled)"})]}),(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.Button,{type:"dashed",children:"Dashed"}),(0,l.jsx)(r.Button,{type:"dashed",disabled:!0,children:"Dashed(disabled)"})]}),(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.Button,{type:"text",children:"Text"}),(0,l.jsx)(r.Button,{type:"text",disabled:!0,children:"Text(disabled)"})]}),(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.Button,{type:"link",children:"Link"}),(0,l.jsx)(r.Button,{type:"link",disabled:!0,children:"Link(disabled)"})]}),(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.Button,{type:"primary",href:"https://ant.design/index-cn",children:"Href Primary"}),(0,l.jsx)(r.Button,{type:"primary",href:"https://ant.design/index-cn",disabled:!0,children:"Href Primary(disabled)"})]}),(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.Button,{danger:!0,children:"Danger Default"}),(0,l.jsx)(r.Button,{danger:!0,disabled:!0,children:"Danger Default(disabled)"})]}),(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.Button,{danger:!0,type:"text",children:"Danger Text"}),(0,l.jsx)(r.Button,{danger:!0,type:"text",disabled:!0,children:"Danger Text(disabled)"})]}),(0,l.jsxs)(r.Flex,{gap:"small",children:[(0,l.jsx)(r.Button,{type:"link",danger:!0,children:"Danger Link"}),(0,l.jsx)(r.Button,{type:"link",danger:!0,disabled:!0,children:"Danger Link(disabled)"})]}),(0,l.jsxs)(r.Flex,{gap:"small",className:"site-button-ghost-wrapper",children:[(0,l.jsx)(r.Button,{ghost:!0,children:"Ghost"}),(0,l.jsx)(r.Button,{ghost:!0,disabled:!0,children:"Ghost(disabled)"})]})]});},ddf24a41:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return c;}});var l=n("777fffbe"),r=n("f19d2b93");n("ce8f50a5");var i=n("e22febe0"),a=n("a9d1a279"),s=l._(n("1164364c")),d=l._(n("23546486"));let o={cn:{icon:"\u56FE\u6807\u5143\u7D20"},en:{icon:"Icon element"}};var c=()=>{let[e]=(0,d.default)(o);return(0,r.jsx)(s.default,{semantics:[{name:"icon",desc:e.icon,version:"5.5.0"}],children:(0,r.jsx)(a.Button,{type:"primary",icon:(0,r.jsx)(i.AntDesignOutlined,{}),children:"Ant Design"})});};},ea64f6c0:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return a;}});var l=n("f19d2b93");n("c9d11905");var r=n("e22febe0"),i=n("a9d1a279"),a=()=>(0,l.jsxs)(i.Flex,{gap:"small",vertical:!0,children:[(0,l.jsxs)(i.Flex,{wrap:!0,gap:"small",children:[(0,l.jsx)(i.Tooltip,{title:"search",children:(0,l.jsx)(i.Button,{type:"primary",shape:"circle",icon:(0,l.jsx)(r.SearchOutlined,{})})}),(0,l.jsx)(i.Button,{type:"primary",shape:"circle",children:"A"}),(0,l.jsx)(i.Button,{type:"primary",icon:(0,l.jsx)(r.SearchOutlined,{}),children:"Search"}),(0,l.jsx)(i.Tooltip,{title:"search",children:(0,l.jsx)(i.Button,{shape:"circle",icon:(0,l.jsx)(r.SearchOutlined,{})})}),(0,l.jsx)(i.Button,{icon:(0,l.jsx)(r.SearchOutlined,{}),children:"Search"})]}),(0,l.jsxs)(i.Flex,{wrap:!0,gap:"small",children:[(0,l.jsx)(i.Tooltip,{title:"search",children:(0,l.jsx)(i.Button,{shape:"circle",icon:(0,l.jsx)(r.SearchOutlined,{})})}),(0,l.jsx)(i.Button,{icon:(0,l.jsx)(r.SearchOutlined,{}),children:"Search"}),(0,l.jsx)(i.Tooltip,{title:"search",children:(0,l.jsx)(i.Button,{type:"dashed",shape:"circle",icon:(0,l.jsx)(r.SearchOutlined,{})})}),(0,l.jsx)(i.Button,{type:"dashed",icon:(0,l.jsx)(r.SearchOutlined,{}),children:"Search"}),(0,l.jsx)(i.Button,{icon:(0,l.jsx)(r.SearchOutlined,{}),href:"https://www.google.com",target:"_blank"})]})]});}}]);