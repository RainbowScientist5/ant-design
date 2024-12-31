(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["4f2994db"],{"4f2994db":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return o;}}),t("2e0e78c8");let o=[{value:"antd v5 compatibility with React 16 ~ 18 by default. For React 19, you can use the following compatibility methods to adapt.",paraId:0},{value:"Since React 19 adjusted the export method of ",paraId:1,tocIndex:0},{value:"react-dom",paraId:1,tocIndex:0},{value:", antd cannot directly use the ",paraId:1,tocIndex:0},{value:"ReactDOM.render",paraId:1,tocIndex:0},{value:" method. Therefore, using antd will encounter the following problems:",paraId:1,tocIndex:0},{value:"Wave effect does not show",paraId:2,tocIndex:0},{value:"Static methods of ",paraId:2,tocIndex:0},{value:"Modal",paraId:2,tocIndex:0},{value:", ",paraId:2,tocIndex:0},{value:"Notification",paraId:2,tocIndex:0},{value:", ",paraId:2,tocIndex:0},{value:"Message",paraId:2,tocIndex:0},{value:" not working",paraId:2,tocIndex:0},{value:"Therefore, you need to use a compatibility configuration to make antd work properly in React 19.",paraId:3,tocIndex:0},{value:"You can choose one of the following methods, and it is recommended to use the compatibility package first.",paraId:4,tocIndex:1},{value:"Install the compatibility package",paraId:5,tocIndex:2},{value:"npm install --save-dev @ant-design/v5-patch-for-react-19\n",paraId:6,tocIndex:2},{value:"Import the compatibility package at the application entry",paraId:7,tocIndex:2},{value:"import '@ant-design/v5-patch-for-react-19';\n",paraId:8,tocIndex:2},{value:"Once again, please use the compatibility package first. Only for special scenarios such as umd, micro-applications, etc., use the ",paraId:9,tocIndex:3},{value:"unstableSetRender",paraId:9,tocIndex:3},{value:" method. ",paraId:9,tocIndex:3},{value:"unstableSetRender",paraId:9,tocIndex:3},{value:" is a low-level registration method that allows developers to modify the rendering method of ReactDOM. Write the following code at the entry of your application:",paraId:9,tocIndex:3},{value:"import { unstableSetRender } from 'antd';\nimport { createRoot } from 'react-dom/client';\n\nunstableSetRender((node, container) => {\n  container._reactRoot ||= createRoot(container);\n  const root = container._reactRoot;\n  root.render(node);\n  return async () => {\n    await new Promise((resolve) => setTimeout(resolve, 0));\n    root.unmount();\n  };\n});\n",paraId:10,tocIndex:3}];}}]);