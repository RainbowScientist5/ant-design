(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["a9fb5295"],{a9fb5295:function(a,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"texts",{enumerable:!0,get:function(){return n;}}),t("8ceab121");let n=[{value:"antd v5 \u9ED8\u8BA4\u517C\u5BB9 React 16 ~ 18 \u7248\u672C\uFF0C\u5BF9\u4E8E React 19 \u7248\u672C\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u517C\u5BB9\u65B9\u6CD5\u8FDB\u884C\u9002\u914D\u3002\u8BE5\u517C\u5BB9\u65B9\u5F0F\u4EE5\u53CA\u63A5\u53E3\u5C06\u5728 v6 \u88AB\u79FB\u9664\u3002",paraId:0},{value:"\u7531\u4E8E React 19 \u8C03\u6574\u4E86 ",paraId:1,tocIndex:0},{value:"react-dom",paraId:1,tocIndex:0},{value:" \u7684\u5BFC\u51FA\u65B9\u5F0F\uFF0C\u5BFC\u81F4 antd \u65E0\u6CD5\u76F4\u63A5\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"ReactDOM.render",paraId:1,tocIndex:0},{value:" \u65B9\u6CD5\u3002\u56E0\u800C\u4F7F\u7528 antd \u4F1A\u9047\u5230\u4EE5\u4E0B\u95EE\u9898\uFF1A",paraId:1,tocIndex:0},{value:"\u6CE2\u7EB9\u7279\u6548\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C",paraId:2,tocIndex:0},{value:"Modal",paraId:2,tocIndex:0},{value:"\u3001",paraId:2,tocIndex:0},{value:"Notification",paraId:2,tocIndex:0},{value:"\u3001",paraId:2,tocIndex:0},{value:"Message",paraId:2,tocIndex:0},{value:" \u7B49\u7EC4\u4EF6\u7684\u9759\u6001\u65B9\u6CD5\u65E0\u6548",paraId:2,tocIndex:0},{value:"\u56E0\u800C\u9700\u8981\u901A\u8FC7\u517C\u5BB9\u914D\u7F6E\uFF0C\u4F7F antd \u5728 React 19 \u4E2D\u6B63\u5E38\u5DE5\u4F5C\u3002",paraId:3,tocIndex:0},{value:"\u4EE5\u4E0B\u65B9\u6CD5\u4EFB\u9009\u5176\u4E00\uFF0C\u5176\u4E2D\u4F18\u5148\u63A8\u8350\u4F7F\u7528\u517C\u5BB9\u5305\u3002",paraId:4,tocIndex:1},{value:"\u5B89\u88C5\u517C\u5BB9\u5305",paraId:5,tocIndex:2},{value:"npm install --save-dev @ant-design/v5-patch-for-react-19\n",paraId:6,tocIndex:2},{value:"\u5728\u5E94\u7528\u5165\u53E3\u5904\u5F15\u5165\u517C\u5BB9\u5305",paraId:7,tocIndex:2},{value:"import '@ant-design/v5-patch-for-react-19';\n",paraId:8,tocIndex:2},{value:"\u518D\u6B21\u63D0\u9192\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u4F18\u5148\u4F7F\u7528\u517C\u5BB9\u5305\u3002\u9664\u975E\u5BF9\u4E8E umd\u3001\u5FAE\u5E94\u7528\u7B49\u7279\u6B8A\u573A\u666F\uFF0C\u624D\u4F7F\u7528 ",paraId:9,tocIndex:3},{value:"unstableSetRender",paraId:9,tocIndex:3},{value:" \u65B9\u6CD5\u3002",paraId:9,tocIndex:3},{value:"unstableSetRender",paraId:9,tocIndex:3},{value:" \u4E3A\u5E95\u5C42\u6CE8\u518C\u65B9\u6CD5\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u4FEE\u6539 ReactDOM \u7684\u6E32\u67D3\u65B9\u6CD5\u3002\u5728\u4F60\u7684\u5E94\u7528\u5165\u53E3\u5904\u5199\u5165\uFF1A",paraId:9,tocIndex:3},{value:"import { unstableSetRender } from 'antd';\nimport { createRoot } from 'react-dom/client';\n\nunstableSetRender((node, container) => {\n  container._reactRoot ||= createRoot(container);\n  const root = container._reactRoot;\n  root.render(node);\n  return async () => {\n    await new Promise((resolve) => setTimeout(resolve, 0));\n    root.unmount();\n  };\n});\n",paraId:10,tocIndex:3}];}}]);