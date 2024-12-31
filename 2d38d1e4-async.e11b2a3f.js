(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["2d38d1e4"],{"2d38d1e4":function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return t;}}),d("13df8842");let t=[{value:"A button means an operation (or a series of operations). Clicking a button will trigger its corresponding business logic.",paraId:0,tocIndex:0},{value:"In Ant Design we provide 5 types of button.",paraId:1,tocIndex:0},{value:"Primary button: used for the main action, there can be at most one primary button in a section.",paraId:2,tocIndex:0},{value:"Default button: used for a series of actions without priority.",paraId:2,tocIndex:0},{value:"Dashed button: commonly used for adding more actions.",paraId:2,tocIndex:0},{value:"Text button: used for the most secondary action.",paraId:2,tocIndex:0},{value:"Link button: used for external links.",paraId:2,tocIndex:0},{value:"And 4 other properties additionally.",paraId:3,tocIndex:0},{value:"danger",paraId:4,tocIndex:0},{value:": used for actions of risk, like deletion or authorization.",paraId:4,tocIndex:0},{value:"ghost",paraId:4,tocIndex:0},{value:": used in situations with complex background, home pages usually.",paraId:4,tocIndex:0},{value:"disabled",paraId:4,tocIndex:0},{value:": used when actions are not available.",paraId:4,tocIndex:0},{value:"loading",paraId:4,tocIndex:0},{value:": adds a loading spinner in button, avoids multiple submits too.",paraId:4,tocIndex:0},{value:"Common props ref\uFF1A",paraId:5,tocIndex:20},{value:"Common props",paraId:6,tocIndex:20},{value:"Different button styles generated by setting Button properties. The recommended order is: ",paraId:7,tocIndex:20},{value:"type",paraId:7,tocIndex:20},{value:" -> ",paraId:7,tocIndex:20},{value:"shape",paraId:7,tocIndex:20},{value:" -> ",paraId:7,tocIndex:20},{value:"size",paraId:7,tocIndex:20},{value:" -> ",paraId:7,tocIndex:20},{value:"loading",paraId:7,tocIndex:20},{value:" -> ",paraId:7,tocIndex:20},{value:"disabled",paraId:7,tocIndex:20},{value:".",paraId:7,tocIndex:20},{value:"Property",paraId:8,tocIndex:20},{value:"Description",paraId:8,tocIndex:20},{value:"Type",paraId:8,tocIndex:20},{value:"Default",paraId:8,tocIndex:20},{value:"Version",paraId:8,tocIndex:20},{value:"autoInsertSpace",paraId:8,tocIndex:20},{value:"We add a space between two Chinese characters by default, which removed by setting ",paraId:8,tocIndex:20},{value:"autoInsertSpace",paraId:8,tocIndex:20},{value:" to ",paraId:8,tocIndex:20},{value:"false",paraId:8,tocIndex:20},{value:".",paraId:8,tocIndex:20},{value:"boolean",paraId:8,tocIndex:20},{value:"true",paraId:8,tocIndex:20},{value:"5.17.0",paraId:8,tocIndex:20},{value:"block",paraId:8,tocIndex:20},{value:"Option to fit button width to its parent width",paraId:8,tocIndex:20},{value:"boolean",paraId:8,tocIndex:20},{value:"false",paraId:8,tocIndex:20},{value:"classNames",paraId:8,tocIndex:20},{value:"Semantic DOM class",paraId:8,tocIndex:20},{value:"Record<SemanticDOM, string>",paraId:9,tocIndex:20},{value:"-",paraId:8,tocIndex:20},{value:"5.4.0",paraId:8,tocIndex:20},{value:"color",paraId:8,tocIndex:20},{value:"Set button color",paraId:8,tocIndex:20},{value:"default",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"primary",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"danger",paraId:8,tocIndex:20},{value:"-",paraId:8,tocIndex:20},{value:"5.21.0",paraId:8,tocIndex:20},{value:"danger",paraId:8,tocIndex:20},{value:"Syntactic sugar. Set the danger status of button. will follow ",paraId:8,tocIndex:20},{value:"color",paraId:8,tocIndex:20},{value:" if provided",paraId:8,tocIndex:20},{value:"boolean",paraId:8,tocIndex:20},{value:"false",paraId:8,tocIndex:20},{value:"disabled",paraId:8,tocIndex:20},{value:"Disabled state of button",paraId:8,tocIndex:20},{value:"boolean",paraId:8,tocIndex:20},{value:"false",paraId:8,tocIndex:20},{value:"ghost",paraId:8,tocIndex:20},{value:"Make background transparent and invert text and border colors",paraId:8,tocIndex:20},{value:"boolean",paraId:8,tocIndex:20},{value:"false",paraId:8,tocIndex:20},{value:"href",paraId:8,tocIndex:20},{value:"Redirect url of link button",paraId:8,tocIndex:20},{value:"string",paraId:8,tocIndex:20},{value:"-",paraId:8,tocIndex:20},{value:"htmlType",paraId:8,tocIndex:20},{value:"Set the original html ",paraId:8,tocIndex:20},{value:"type",paraId:8,tocIndex:20},{value:" of ",paraId:8,tocIndex:20},{value:"button",paraId:8,tocIndex:20},{value:", see: ",paraId:8,tocIndex:20},{value:"MDN",paraId:8,tocIndex:20},{value:"submit",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"reset",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"button",paraId:8,tocIndex:20},{value:"button",paraId:8,tocIndex:20},{value:"icon",paraId:8,tocIndex:20},{value:"Set the icon component of button",paraId:8,tocIndex:20},{value:"ReactNode",paraId:8,tocIndex:20},{value:"-",paraId:8,tocIndex:20},{value:"iconPosition",paraId:8,tocIndex:20},{value:"Set the icon position of button",paraId:8,tocIndex:20},{value:"start",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"end",paraId:8,tocIndex:20},{value:"start",paraId:8,tocIndex:20},{value:"5.17.0",paraId:8,tocIndex:20},{value:"loading",paraId:8,tocIndex:20},{value:"Set the loading status of button",paraId:8,tocIndex:20},{value:"boolean | { delay: number }",paraId:8,tocIndex:20},{value:"false",paraId:8,tocIndex:20},{value:"shape",paraId:8,tocIndex:20},{value:"Can be used to set button shape",paraId:8,tocIndex:20},{value:"default",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"circle",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"round",paraId:8,tocIndex:20},{value:"default",paraId:8,tocIndex:20},{value:"size",paraId:8,tocIndex:20},{value:"Set the size of button",paraId:8,tocIndex:20},{value:"large",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"middle",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"small",paraId:8,tocIndex:20},{value:"middle",paraId:8,tocIndex:20},{value:"styles",paraId:8,tocIndex:20},{value:"Semantic DOM style",paraId:8,tocIndex:20},{value:"Record<SemanticDOM, CSSProperties>",paraId:10,tocIndex:20},{value:"-",paraId:8,tocIndex:20},{value:"5.4.0",paraId:8,tocIndex:20},{value:"target",paraId:8,tocIndex:20},{value:"Same as target attribute of a, works when href is specified",paraId:8,tocIndex:20},{value:"string",paraId:8,tocIndex:20},{value:"-",paraId:8,tocIndex:20},{value:"type",paraId:8,tocIndex:20},{value:"Syntactic sugar. Set button type. Will follow ",paraId:8,tocIndex:20},{value:"variant",paraId:8,tocIndex:20},{value:" & ",paraId:8,tocIndex:20},{value:"color",paraId:8,tocIndex:20},{value:" if provided",paraId:8,tocIndex:20},{value:"primary",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"dashed",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"link",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"text",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"default",paraId:8,tocIndex:20},{value:"default",paraId:8,tocIndex:20},{value:"onClick",paraId:8,tocIndex:20},{value:"Set the handler to handle ",paraId:8,tocIndex:20},{value:"click",paraId:8,tocIndex:20},{value:" event",paraId:8,tocIndex:20},{value:"(event: React.MouseEvent<HTMLElement, MouseEvent>) => void",paraId:8,tocIndex:20},{value:"-",paraId:8,tocIndex:20},{value:"variant",paraId:8,tocIndex:20},{value:"Set button variant",paraId:8,tocIndex:20},{value:"outlined",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"dashed",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"solid",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"filled",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"text",paraId:8,tocIndex:20},{value:" | ",paraId:8,tocIndex:20},{value:"link",paraId:8,tocIndex:20},{value:"-",paraId:8,tocIndex:20},{value:"5.21.0",paraId:8,tocIndex:20},{value:"It accepts all props which native buttons support.",paraId:11,tocIndex:20},{value:"Type is essentially syntactic sugar for colors and variants. It internally provides a set of mapping relationships between colors and variants for the type. If both exist at the same time, the colors and variants will be used first.",paraId:12,tocIndex:24},{value:'<Button type="primary">click</Button>\n',paraId:13,tocIndex:24},{value:"Equivalent",paraId:14,tocIndex:24},{value:'<Button color="primary" variant="solid">\n  click\n</Button>\n',paraId:15,tocIndex:24},{value:"If you don't need this feature, you can set ",paraId:16,tocIndex:25},{value:"disabled",paraId:16,tocIndex:25},{value:" of ",paraId:16,tocIndex:25},{value:"wave",paraId:16,tocIndex:25},{value:" in ",paraId:16,tocIndex:25},{value:"ConfigProvider",paraId:17,tocIndex:25},{value:" as ",paraId:16,tocIndex:25},{value:"true",paraId:16,tocIndex:25},{value:".",paraId:16,tocIndex:25},{value:"<ConfigProvider wave={{ disabled: true }}>\n  <Button>click</Button>\n</ConfigProvider>\n",paraId:18,tocIndex:25}];}}]);