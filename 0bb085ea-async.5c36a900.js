(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["0bb085ea"],{"3d46268e":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("b32ffe9a");var u=l("a9d1a279");let i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hanzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],o=e=>{console.log(e);};var s=()=>(0,n.jsx)(u.Cascader,{options:i,onChange:o,changeOnSelect:!0});},"40b0d314":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return r;}});var n=l("f19d2b93");l("4a805458");var u=l("a9d1a279");let i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake",code:752100}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men",code:453400}]}]}],o=(e,a,l)=>{e.stopPropagation(),console.log("clicked",a,l);},s=(e,a=[])=>e.map((l,u)=>{let i=a[u];return u===e.length-1?(0,n.jsxs)("span",{children:[l," (",(0,n.jsx)("a",{onClick:e=>o(e,l,i),children:i.code}),")"]},i.value):(0,n.jsxs)("span",{children:[l," / "]},i.value);});var r=()=>(0,n.jsx)(u.Cascader,{options:i,defaultValue:["zhejiang","hangzhou","xihu"],displayRender:s,style:{width:"100%"}});},"42067b65":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("5f869ad8");var u=l("5b220c3d"),i=l("a9d1a279");let o=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var s=()=>{let[e,a]=(0,u.useState)("topLeft");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.Radio.Group,{value:e,onChange:e=>{a(e.target.value);},children:[(0,n.jsx)(i.Radio.Button,{value:"topLeft",children:"topLeft"}),(0,n.jsx)(i.Radio.Button,{value:"topRight",children:"topRight"}),(0,n.jsx)(i.Radio.Button,{value:"bottomLeft",children:"bottomLeft"}),(0,n.jsx)(i.Radio.Button,{value:"bottomRight",children:"bottomRight"})]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.Cascader,{options:o,placeholder:"Please select",placement:e})]});};},"5976ccce":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("2e20b86e");var u=l("a9d1a279");let i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],o=e=>{console.log(e);};var s=()=>(0,n.jsx)(u.Cascader,{defaultValue:["zhejiang","hangzhou","xihu"],options:i,onChange:o});},"603081cc":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("03c60420");var u=l("a9d1a279");let i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],o=e=>{console.log(e);};var s=()=>(0,n.jsx)(u.Cascader,{options:i,onChange:o,placeholder:"Please select"});},"666c09d8":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("c38575de");var u=l("5b220c3d"),i=l("a9d1a279");let o=[{value:"zhejiang",label:"Zhejiang",isLeaf:!1},{value:"jiangsu",label:"Jiangsu",isLeaf:!1}];var s=()=>{let[e,a]=(0,u.useState)(o);return(0,n.jsx)(i.Cascader,{options:e,loadData:l=>{let n=l[l.length-1];setTimeout(()=>{n.children=[{label:`${n.label} Dynamic 1`,value:"dynamic1"},{label:`${n.label} Dynamic 2`,value:"dynamic2"}],a([...e]);},1e3);},onChange:(e,a)=>{console.log(e,a);},changeOnSelect:!0});};},"69de9ab5":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("09b87bdb");var u=l("a9d1a279");let i=[{code:"zhejiang",name:"Zhejiang",items:[{code:"hangzhou",name:"Hangzhou",items:[{code:"xihu",name:"West Lake"}]}]},{code:"jiangsu",name:"Jiangsu",items:[{code:"nanjing",name:"Nanjing",items:[{code:"zhonghuamen",name:"Zhong Hua Men"}]}]}],o=e=>{console.log(e);};var s=()=>(0,n.jsx)(u.Cascader,{fieldNames:{label:"name",value:"code",children:"items"},options:i,onChange:o,placeholder:"Please select"});},"6cd4b638":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("f3cf9558");var u=l("a9d1a279");let i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],o=e=>(0,n.jsxs)("div",{children:[e,(0,n.jsx)(u.Divider,{style:{margin:0}}),(0,n.jsx)("div",{style:{padding:8},children:"The footer is not very short."})]});var s=()=>(0,n.jsx)(u.Cascader,{options:i,dropdownRender:o,placeholder:"Please select"});},"74d5048d":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return d;}});var n=l("f19d2b93");l("28fb3ec0");var u=l("5b220c3d"),i=l("a9d1a279");let o=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],s=e=>{console.log(e);},r=e=>{console.log(e);};var d=()=>{let[e,a]=(0,u.useState)(!1);return(0,n.jsxs)(i.Flex,{vertical:!0,gap:"small",align:"flex-start",children:[(0,n.jsx)(i.Switch,{checked:e,checkedChildren:"Enabled",unCheckedChildren:"Disabled",onChange:a,"aria-label":"disabled switch"}),(0,n.jsx)(i.Cascader.Panel,{options:o,onChange:s,disabled:e}),(0,n.jsx)(i.Cascader.Panel,{multiple:!0,options:o,onChange:r,disabled:e}),(0,n.jsx)(i.Cascader.Panel,{})]});};},"772930d8":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("6da59cb2");var u=l("a9d1a279");let i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",disabled:!0,children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],o=e=>{console.log(e);};var s=()=>(0,n.jsx)(u.Cascader,{options:i,onChange:o});},"7ca17b12":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("eee1b5d6");var u=l("a9d1a279");let{SHOW_CHILD:i}=u.Cascader,o=[{label:"Light",value:"light",children:Array(20).fill(null).map((e,a)=>({label:`Number ${a}`,value:a}))},{label:"Bamboo",value:"bamboo",children:[{label:"Little",value:"little",children:[{label:"Toy Fish",value:"fish"},{label:"Toy Cards",value:"cards"},{label:"Toy Bird",value:"bird"}]}]}];var s=()=>{let e=e=>{console.log(e);};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Cascader,{style:{width:"100%"},options:o,onChange:e,multiple:!0,maxTagCount:"responsive",showCheckedStrategy:i,defaultValue:[["bamboo","little","fish"],["bamboo","little","cards"],["bamboo","little","bird"]]}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(u.Cascader,{style:{width:"100%"},options:o,onChange:e,multiple:!0,maxTagCount:"responsive",defaultValue:[["bamboo"]]})]});};},"8da9f4ca":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return r;}});var n=l("f19d2b93");l("0bb25e56");var u=l("a9d1a279");let i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],o=e=>{console.log(e);},s=e=>e[e.length-1];var r=()=>(0,n.jsx)(u.Cascader,{options:i,expandTrigger:"hover",displayRender:s,onChange:o});},"9501dc45":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return i;}});var n=l("f19d2b93");l("c12a190d");var u=l("a9d1a279"),i=()=>(0,n.jsxs)(u.Space,{direction:"vertical",children:[(0,n.jsx)(u.Cascader,{status:"error",placeholder:"Error"}),(0,n.jsx)(u.Cascader,{status:"warning",multiple:!0,placeholder:"Warning multiple"})]});},c367cc9f:function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return r;}});var n=l("f19d2b93");l("1b62efa0");var u=l("a9d1a279");let i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"},{value:"xiasha",label:"Xia Sha",disabled:!0}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua men"}]}]}],o=(e,a)=>{console.log(e,a);},s=(e,a)=>a.some(a=>a.label.toLowerCase().indexOf(e.toLowerCase())>-1);var r=()=>(0,n.jsx)(u.Cascader,{options:i,onChange:o,placeholder:"Please select",showSearch:{filter:s},onSearch:e=>console.log(e)});},c5e0f082:function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return o;}});var n=l("f19d2b93");l("3afdba1e");let{_InternalPanelDoNotUseOrYouWillBeFired:u}=l("a9d1a279").Cascader,i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}];var o=()=>(0,n.jsx)(u,{options:i,placeholder:"Please select"});},e62425a7:function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("557008f3");var u=l("a9d1a279");let i=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],o=e=>{console.log(e);};var s=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.Cascader,{size:"large",options:i,onChange:o}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(u.Cascader,{options:i,onChange:o}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(u.Cascader,{size:"small",options:i,onChange:o}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]});},e7df0514:function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("cb46b507");var u=l("a9d1a279");let i=[{label:"Light",value:"light",children:Array(20).fill(null).map((e,a)=>({label:`Number ${a}`,value:a}))},{label:"Bamboo",value:"bamboo",children:[{label:"Little",value:"little",children:[{label:"Toy Fish",value:"fish",disableCheckbox:!0},{label:"Toy Cards",value:"cards"},{label:"Toy Bird",value:"bird"}]}]}],o=e=>{console.log(e);};var s=()=>(0,n.jsx)(u.Cascader,{style:{width:"100%"},options:i,onChange:o,multiple:!0,maxTagCount:"responsive"});},e828b98c:function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("f19d2b93");l("de800674");var u=l("5b220c3d"),i=l("a9d1a279");let o=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou"}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing"}]}];var s=()=>{let[e,a]=(0,u.useState)("Unselect");return(0,n.jsxs)("span",{children:[e,"\xa0",(0,n.jsx)(i.Cascader,{options:o,onChange:(e,l)=>{a(l.map(e=>e.label).join(", "));},children:(0,n.jsx)("a",{children:"Change city"})})]});};},e887ef8a:function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return r;}});var n=l("f19d2b93");l("28b9eb0c");var u=l("e22febe0"),i=l("a9d1a279");let o=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],s=e=>{console.log(e);};var r=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Cascader,{suffixIcon:(0,n.jsx)(u.SmileOutlined,{}),options:o,onChange:s,placeholder:"Please select"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.Cascader,{suffixIcon:"ab",options:o,onChange:s,placeholder:"Please select"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.Cascader,{expandIcon:(0,n.jsx)(u.SmileOutlined,{}),options:o,onChange:s,placeholder:"Please select"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.Cascader,{expandIcon:"ab",options:o,onChange:s,placeholder:"Please select"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.Cascader,{prefix:(0,n.jsx)(u.SmileOutlined,{}),options:o,onChange:s,placeholder:"Please select"})]});}}]);