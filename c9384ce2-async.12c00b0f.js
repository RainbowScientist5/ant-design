(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["c9384ce2"],{c9384ce2:function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return n;}});var t=a("777fffbe"),d=a("f19d2b93");a("88a2dd0d");var o=t._(a("5b220c3d")),u=a("a9d1a279"),n=()=>{let[e,l]=o.default.useState([]);return(0,d.jsx)(u.AutoComplete,{style:{width:200},onSearch:e=>{l(()=>!e||e.includes("@")?[]:["gmail.com","163.com","qq.com"].map(l=>({label:`${e}@${l}`,value:`${e}@${l}`})));},placeholder:"input here",options:e});};}}]);