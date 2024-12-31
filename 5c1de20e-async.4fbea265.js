(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["5c1de20e"],{"5c1de20e":function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return o;}}),d("d922e056");let o=[{value:"This component provides a configuration to all React components underneath itself via the ",paraId:0,tocIndex:0},{value:"context API",paraId:0,tocIndex:0},{value:". In the render tree all components will have access to the provided config.",paraId:0,tocIndex:0},{value:"import React from 'react';\nimport { ConfigProvider } from 'antd';\n\n// ...\nconst Demo: React.FC = () => (\n  <ConfigProvider direction=\"rtl\">\n    <App />\n  </ConfigProvider>\n);\n\nexport default Demo;\n",paraId:1,tocIndex:0},{value:"Some components use dynamic style to support wave effect. You can config ",paraId:2,tocIndex:1},{value:"csp",paraId:2,tocIndex:1},{value:" prop if Content Security Policy (CSP) is enabled:",paraId:2,tocIndex:1},{value:"<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>\n  <Button>My Button</Button>\n</ConfigProvider>\n",paraId:3,tocIndex:1},{value:"Property",paraId:4,tocIndex:12},{value:"Description",paraId:4,tocIndex:12},{value:"Type",paraId:4,tocIndex:12},{value:"Default",paraId:4,tocIndex:12},{value:"Version",paraId:4,tocIndex:12},{value:"componentDisabled",paraId:4,tocIndex:12},{value:"Config antd component ",paraId:4,tocIndex:12},{value:"disabled",paraId:4,tocIndex:12},{value:"boolean",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"4.21.0",paraId:4,tocIndex:12},{value:"componentSize",paraId:4,tocIndex:12},{value:"Config antd component size",paraId:4,tocIndex:12},{value:"small",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"middle",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"large",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"csp",paraId:4,tocIndex:12},{value:"Set ",paraId:4,tocIndex:12},{value:"Content Security Policy",paraId:4,tocIndex:12},{value:" config",paraId:4,tocIndex:12},{value:"{ nonce: string }",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"direction",paraId:4,tocIndex:12},{value:"Set direction of layout. See ",paraId:4,tocIndex:12},{value:"demo",paraId:5,tocIndex:12},{value:"ltr",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"rtl",paraId:4,tocIndex:12},{value:"ltr",paraId:4,tocIndex:12},{value:"getPopupContainer",paraId:4,tocIndex:12},{value:"To set the container of the popup element. The default is to create a ",paraId:4,tocIndex:12},{value:"div",paraId:4,tocIndex:12},{value:" element in ",paraId:4,tocIndex:12},{value:"body",paraId:4,tocIndex:12},{value:"function(triggerNode)",paraId:4,tocIndex:12},{value:"() => document.body",paraId:4,tocIndex:12},{value:"getTargetContainer",paraId:4,tocIndex:12},{value:"Config Affix, Anchor scroll target container",paraId:4,tocIndex:12},{value:"() => HTMLElement",paraId:4,tocIndex:12},{value:"() => window",paraId:4,tocIndex:12},{value:"4.2.0",paraId:4,tocIndex:12},{value:"iconPrefixCls",paraId:4,tocIndex:12},{value:"Set icon prefix className",paraId:4,tocIndex:12},{value:"string",paraId:4,tocIndex:12},{value:"anticon",paraId:4,tocIndex:12},{value:"4.11.0",paraId:4,tocIndex:12},{value:"locale",paraId:4,tocIndex:12},{value:"Language package setting, you can find the packages in ",paraId:4,tocIndex:12},{value:"antd/locale",paraId:4,tocIndex:12},{value:"object",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"popupMatchSelectWidth",paraId:4,tocIndex:12},{value:"Determine whether the dropdown menu and the select input are the same width. Default set ",paraId:4,tocIndex:12},{value:"min-width",paraId:4,tocIndex:12},{value:" same as input. Will ignore when value less than select width. ",paraId:4,tocIndex:12},{value:"false",paraId:4,tocIndex:12},{value:" will disable virtual scroll",paraId:4,tocIndex:12},{value:"boolean | number",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"5.5.0",paraId:4,tocIndex:12},{value:"popupOverflow",paraId:4,tocIndex:12},{value:"Select like component popup logic. Can set to show in viewport or follow window scroll",paraId:4,tocIndex:12},{value:"'viewport' | 'scroll' ",paraId:4,tocIndex:12},{value:"'viewport'",paraId:4,tocIndex:12},{value:"5.5.0",paraId:4,tocIndex:12},{value:"prefixCls",paraId:4,tocIndex:12},{value:"Set prefix className",paraId:4,tocIndex:12},{value:"string",paraId:4,tocIndex:12},{value:"ant",paraId:4,tocIndex:12},{value:"renderEmpty",paraId:4,tocIndex:12},{value:"Set empty content of components. Ref ",paraId:4,tocIndex:12},{value:"Empty",paraId:6,tocIndex:12},{value:"function(componentName: string): ReactNode",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"theme",paraId:4,tocIndex:12},{value:"Set theme, ref ",paraId:4,tocIndex:12},{value:"Customize Theme",paraId:7,tocIndex:12},{value:"Theme",paraId:8,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"5.0.0",paraId:4,tocIndex:12},{value:"variant",paraId:4,tocIndex:12},{value:"Set variant of data entry components",paraId:4,tocIndex:12},{value:"outlined",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"filled",paraId:4,tocIndex:12},{value:" | ",paraId:4,tocIndex:12},{value:"borderless",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"5.19.0",paraId:4,tocIndex:12},{value:"virtual",paraId:4,tocIndex:12},{value:"Disable virtual scroll when set to ",paraId:4,tocIndex:12},{value:"false",paraId:4,tocIndex:12},{value:"boolean",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"4.3.0",paraId:4,tocIndex:12},{value:"warning",paraId:4,tocIndex:12},{value:"Config warning level, when ",paraId:4,tocIndex:12},{value:"strict",paraId:4,tocIndex:12},{value:" is ",paraId:4,tocIndex:12},{value:"false",paraId:4,tocIndex:12},{value:", it will aggregate deprecated information into a single message",paraId:4,tocIndex:12},{value:"{ strict: boolean }",paraId:4,tocIndex:12},{value:"-",paraId:4,tocIndex:12},{value:"5.10.0",paraId:4,tocIndex:12},{value:"Setting ",paraId:9,tocIndex:13},{value:"Modal",paraId:9,tocIndex:13},{value:"\u3001",paraId:9,tocIndex:13},{value:"Message",paraId:9,tocIndex:13},{value:"\u3001",paraId:9,tocIndex:13},{value:"Notification",paraId:9,tocIndex:13},{value:" static config. Not work on hooks.",paraId:9,tocIndex:13},{value:'ConfigProvider.config({\n  // 5.13.0+\n  holderRender: (children) => (\n    <ConfigProvider\n      prefixCls="ant"\n      iconPrefixCls="anticon"\n      theme={{ token: { colorPrimary: \'red\' } }}\n    >\n      {children}\n    </ConfigProvider>\n  ),\n});\n',paraId:10,tocIndex:13},{value:"5.3.0+",paraId:11},{value:"Available since ",paraId:12,tocIndex:14},{value:"5.2.0",paraId:12,tocIndex:14},{value:". Get the value of the parent ",paraId:12,tocIndex:14},{value:"Provider",paraId:12,tocIndex:14},{value:". Such as ",paraId:12,tocIndex:14},{value:"DisabledContextProvider",paraId:12,tocIndex:14},{value:", ",paraId:12,tocIndex:14},{value:"SizeContextProvider",paraId:12,tocIndex:14},{value:".",paraId:12,tocIndex:14},{value:"const {\n  componentDisabled, // 5.3.0+\n  componentSize, // 5.3.0+\n} = ConfigProvider.useConfig();\n",paraId:13,tocIndex:14},{value:"Property",paraId:14,tocIndex:14},{value:"Description",paraId:14,tocIndex:14},{value:"Type",paraId:14,tocIndex:14},{value:"Default",paraId:14,tocIndex:14},{value:"Version",paraId:14,tocIndex:14},{value:"componentDisabled",paraId:14,tocIndex:14},{value:"antd component disabled state",paraId:14,tocIndex:14},{value:"boolean",paraId:14,tocIndex:14},{value:"-",paraId:14,tocIndex:14},{value:"5.3.0",paraId:14,tocIndex:14},{value:"componentSize",paraId:14,tocIndex:14},{value:"antd component size state",paraId:14,tocIndex:14},{value:"small",paraId:14,tocIndex:14},{value:" | ",paraId:14,tocIndex:14},{value:"middle",paraId:14,tocIndex:14},{value:" | ",paraId:14,tocIndex:14},{value:"large",paraId:14,tocIndex:14},{value:"-",paraId:14,tocIndex:14},{value:"5.3.0",paraId:14,tocIndex:14},{value:"Property",paraId:15,tocIndex:15},{value:"Description",paraId:15,tocIndex:15},{value:"Type",paraId:15,tocIndex:15},{value:"Default",paraId:15,tocIndex:15},{value:"Version",paraId:15,tocIndex:15},{value:"alert",paraId:15,tocIndex:15},{value:"Set Alert common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, closeIcon: 5.14.0",paraId:15,tocIndex:15},{value:"anchor",paraId:15,tocIndex:15},{value:"Set Anchor common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"avatar",paraId:15,tocIndex:15},{value:"Set Avatar common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"badge",paraId:15,tocIndex:15},{value:"Set Badge common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'BadgeProps["classNames"]',paraId:16,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'BadgeProps["styles"]',paraId:17,tocIndex:15},{value:" }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"breadcrumb",paraId:15,tocIndex:15},{value:"Set Breadcrumb common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"button",paraId:15,tocIndex:15},{value:"Set Button common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'ButtonProps["classNames"]',paraId:18,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'ButtonProps["styles"]',paraId:19,tocIndex:15},{value:", autoInsertSpace?: boolean }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.6.0, autoInsertSpace: 5.17.0",paraId:15,tocIndex:15},{value:"card",paraId:15,tocIndex:15},{value:"Set Card common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'CardProps["classNames"]',paraId:20,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'CardProps["styles"]',paraId:21,tocIndex:15},{value:" }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"classNames",paraId:15,tocIndex:15},{value:" and ",paraId:15,tocIndex:15},{value:"styles",paraId:15,tocIndex:15},{value:": 5.14.0",paraId:15,tocIndex:15},{value:"calendar",paraId:15,tocIndex:15},{value:"Set Calendar common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"carousel",paraId:15,tocIndex:15},{value:"Set Carousel common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"cascader",paraId:15,tocIndex:15},{value:"Set Cascader common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"checkbox",paraId:15,tocIndex:15},{value:"Set Checkbox common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"collapse",paraId:15,tocIndex:15},{value:"Set Collapse common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, expandIcon?: (props) => ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, expandIcon: 5.15.0",paraId:15,tocIndex:15},{value:"colorPicker",paraId:15,tocIndex:15},{value:"Set ColorPicker common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"datePicker",paraId:15,tocIndex:15},{value:"Set datePicker common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"rangePicker",paraId:15,tocIndex:15},{value:"Set rangePicker common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.11.0",paraId:15,tocIndex:15},{value:"descriptions",paraId:15,tocIndex:15},{value:"Set Descriptions common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"divider",paraId:15,tocIndex:15},{value:"Set Divider common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"drawer",paraId:15,tocIndex:15},{value:"Set Drawer common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'DrawerProps["classNames"]',paraId:22,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'DrawerProps["styles"]',paraId:23,tocIndex:15},{value:", closeIcon?: ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"classNames",paraId:15,tocIndex:15},{value:" and ",paraId:15,tocIndex:15},{value:"styles",paraId:15,tocIndex:15},{value:": 5.10.0, ",paraId:15,tocIndex:15},{value:"closeIcon",paraId:15,tocIndex:15},{value:": 5.14.0",paraId:15,tocIndex:15},{value:"dropdown",paraId:15,tocIndex:15},{value:"Set Dropdown common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.11.0",paraId:15,tocIndex:15},{value:"empty",paraId:15,tocIndex:15},{value:"Set Empty common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"flex",paraId:15,tocIndex:15},{value:"Set Flex common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, vertical?: boolean }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.10.0",paraId:15,tocIndex:15},{value:"floatButtonGroup",paraId:15,tocIndex:15},{value:"Set FloatButton.Group common props",paraId:15,tocIndex:15},{value:"{ closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.16.0",paraId:15,tocIndex:15},{value:"form",paraId:15,tocIndex:15},{value:"Set Form common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, validateMessages?: ",paraId:15,tocIndex:15},{value:"ValidateMessages",paraId:24,tocIndex:15},{value:", requiredMark?: boolean | ",paraId:15,tocIndex:15},{value:"optional",paraId:15,tocIndex:15},{value:", scrollToFirstError?: boolean | ",paraId:15,tocIndex:15},{value:"Options",paraId:15,tocIndex:15},{value:" }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"requiredMark: 4.8.0; colon: 4.18.0; scrollToFirstError: 5.2.0; className: 5.7.0; style: 5.7.0",paraId:15,tocIndex:15},{value:"image",paraId:15,tocIndex:15},{value:"Set Image common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, preview?: { closeIcon?: React.ReactNode } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, closeIcon: 5.14.0",paraId:15,tocIndex:15},{value:"input",paraId:15,tocIndex:15},{value:"Set Input common props",paraId:15,tocIndex:15},{value:"{ autoComplete?: string, className?: string, style?: React.CSSProperties, allowClear?: boolean | { clearIcon?: ReactNode } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"4.2.0, allowClear: 5.15.0",paraId:15,tocIndex:15},{value:"textArea",paraId:15,tocIndex:15},{value:"Set TextArea common props",paraId:15,tocIndex:15},{value:"{ autoComplete?: string, className?: string, style?: React.CSSProperties, allowClear?: boolean | { clearIcon?: ReactNode } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.15.0",paraId:15,tocIndex:15},{value:"layout",paraId:15,tocIndex:15},{value:"Set Layout common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"list",paraId:15,tocIndex:15},{value:"Set List common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, item?:{ classNames: ",paraId:15,tocIndex:15},{value:'ListItemProps["classNames"]',paraId:25,tocIndex:15},{value:", styles: ",paraId:15,tocIndex:15},{value:'ListItemProps["styles"]',paraId:26,tocIndex:15},{value:" } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"menu",paraId:15,tocIndex:15},{value:"Set Menu common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, expandIcon?: ReactNode | props => ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, expandIcon: 5.15.0",paraId:15,tocIndex:15},{value:"mentions",paraId:15,tocIndex:15},{value:"Set Mentions common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"message",paraId:15,tocIndex:15},{value:"Set Message common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"modal",paraId:15,tocIndex:15},{value:"Set Modal common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'ModalProps["classNames"]',paraId:27,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'ModalProps["styles"]',paraId:28,tocIndex:15},{value:", closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"classNames",paraId:15,tocIndex:15},{value:" and ",paraId:15,tocIndex:15},{value:"styles",paraId:15,tocIndex:15},{value:": 5.10.0, ",paraId:15,tocIndex:15},{value:"closeIcon",paraId:15,tocIndex:15},{value:": 5.14.0",paraId:15,tocIndex:15},{value:"notification",paraId:15,tocIndex:15},{value:"Set Notification common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"closeIcon",paraId:15,tocIndex:15},{value:": 5.14.0",paraId:15,tocIndex:15},{value:"pagination",paraId:15,tocIndex:15},{value:"Set Pagination common props",paraId:15,tocIndex:15},{value:"{ showSizeChanger?: boolean, className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"progress",paraId:15,tocIndex:15},{value:"Set Progress common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"radio",paraId:15,tocIndex:15},{value:"Set Radio common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"rate",paraId:15,tocIndex:15},{value:"Set Rate common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"result",paraId:15,tocIndex:15},{value:"Set Result common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"skeleton",paraId:15,tocIndex:15},{value:"Set Skeleton common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"segmented",paraId:15,tocIndex:15},{value:"Set Segmented common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"select",paraId:15,tocIndex:15},{value:"Set Select common props",paraId:15,tocIndex:15},{value:"{ className?: string, showSearch?: boolean, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"slider",paraId:15,tocIndex:15},{value:"Set Slider common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"switch",paraId:15,tocIndex:15},{value:"Set Switch common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"space",paraId:15,tocIndex:15},{value:"Set Space common props, ref ",paraId:15,tocIndex:15},{value:"Space",paraId:29,tocIndex:15},{value:"{ size: ",paraId:15,tocIndex:15},{value:"small",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"middle",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"large",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"number",paraId:15,tocIndex:15},{value:", className?: string, style?: React.CSSProperties, classNames?: ",paraId:15,tocIndex:15},{value:'SpaceProps["classNames"]',paraId:30,tocIndex:15},{value:", styles?: ",paraId:15,tocIndex:15},{value:'SpaceProps["styles"]',paraId:31,tocIndex:15},{value:" }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.6.0",paraId:15,tocIndex:15},{value:"splitter",paraId:15,tocIndex:15},{value:"Set Splitter common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.21.0",paraId:15,tocIndex:15},{value:"spin",paraId:15,tocIndex:15},{value:"Set Spin common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, indicator?: React.ReactElement }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, indicator: 5.20.0",paraId:15,tocIndex:15},{value:"statistic",paraId:15,tocIndex:15},{value:"Set Statistic common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"steps",paraId:15,tocIndex:15},{value:"Set Steps common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"table",paraId:15,tocIndex:15},{value:"Set Table common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, expandable?: { expandIcon?: props => React.ReactNode } }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, expandable: 5.14.0",paraId:15,tocIndex:15},{value:"tabs",paraId:15,tocIndex:15},{value:"Set Tabs common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, indicator?: { size?: GetIndicatorSize, align?: ",paraId:15,tocIndex:15},{value:"start",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"center",paraId:15,tocIndex:15},{value:" | ",paraId:15,tocIndex:15},{value:"end",paraId:15,tocIndex:15},{value:" }, moreIcon?: ReactNode, addIcon?: ReactNode, removeIcon?: ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, ",paraId:15,tocIndex:15},{value:"moreIcon",paraId:15,tocIndex:15},{value:" and ",paraId:15,tocIndex:15},{value:"addIcon",paraId:15,tocIndex:15},{value:": 5.14.0, ",paraId:15,tocIndex:15},{value:"removeIcon",paraId:15,tocIndex:15},{value:": 5.15.0",paraId:15,tocIndex:15},{value:"tag",paraId:15,tocIndex:15},{value:"Set Tag common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, closeIcon: 5.14.0",paraId:15,tocIndex:15},{value:"timeline",paraId:15,tocIndex:15},{value:"Set Timeline common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"timePicker",paraId:15,tocIndex:15},{value:"Set TimePicker common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"tour",paraId:15,tocIndex:15},{value:"Set Tour common props",paraId:15,tocIndex:15},{value:"{ closeIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.14.0",paraId:15,tocIndex:15},{value:"transfer",paraId:15,tocIndex:15},{value:"Set Transfer common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties, selectionsIcon?: React.ReactNode }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0, selectionsIcon: 5.14.0",paraId:15,tocIndex:15},{value:"tree",paraId:15,tocIndex:15},{value:"Set Tree common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"typography",paraId:15,tocIndex:15},{value:"Set Typography common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"upload",paraId:15,tocIndex:15},{value:"Set Upload common props",paraId:15,tocIndex:15},{value:"{ className?: string, style?: React.CSSProperties }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.7.0",paraId:15,tocIndex:15},{value:"wave",paraId:15,tocIndex:15},{value:"Config wave effect",paraId:15,tocIndex:15},{value:"{ disabled?: boolean, showEffect?: (node: HTMLElement, info: { className, token, component }) => void }",paraId:15,tocIndex:15},{value:"-",paraId:15,tocIndex:15},{value:"5.8.0",paraId:15,tocIndex:15},{value:"See ",paraId:32,tocIndex:17},{value:"<Adding new language>",paraId:33,tocIndex:17},{value:".",paraId:32,tocIndex:17},{value:"See FAQ ",paraId:34,tocIndex:18},{value:"Date-related-components-locale-is-not-working?",paraId:35,tocIndex:18},{value:"getPopupContainer",paraId:11},{value:"Related issue: ",paraId:36,tocIndex:19},{value:"https://github.com/ant-design/ant-design/issues/19974",paraId:36,tocIndex:19},{value:"When you config ",paraId:37,tocIndex:19},{value:"getPopupContainer",paraId:37,tocIndex:19},{value:" to parentNode globally, Modal will throw error of ",paraId:37,tocIndex:19},{value:"triggerNode is undefined",paraId:37,tocIndex:19},{value:" because it did not have a triggerNode. You can try the ",paraId:37,tocIndex:19},{value:"fix",paraId:37,tocIndex:19},{value:" below.",paraId:37,tocIndex:19},{value:" <ConfigProvider\n-  getPopupContainer={triggerNode => triggerNode.parentNode}\n+  getPopupContainer={node => {\n+    if (node) {\n+      return node.parentNode;\n+    }\n+    return document.body;\n+  }}\n >\n   <App />\n </ConfigProvider>\n",paraId:38,tocIndex:19},{value:"prefixCls",paraId:11},{value:"theme",paraId:11},{value:"message.info",paraId:11},{value:"notification.open",paraId:11},{value:"Modal.confirm",paraId:11},{value:"antd will dynamic create React instance by ",paraId:39,tocIndex:20},{value:"ReactDOM.render",paraId:39,tocIndex:20},{value:" when call message methods. Whose context is different with origin code located context. We recommend ",paraId:39,tocIndex:20},{value:"useMessage",paraId:39,tocIndex:20},{value:", ",paraId:39,tocIndex:20},{value:"useNotification",paraId:39,tocIndex:20},{value:" and ",paraId:39,tocIndex:20},{value:"useModal",paraId:39,tocIndex:20},{value:" which , the methods came from ",paraId:39,tocIndex:20},{value:"message/notification/Modal",paraId:39,tocIndex:20},{value:" has been deprecated in 5.x.",paraId:39,tocIndex:20},{value:"Related issue: ",paraId:40,tocIndex:21},{value:"#39045",paraId:40,tocIndex:21},{value:"In production mode of Vite, default exports from cjs file should be used like this: ",paraId:41,tocIndex:21},{value:"enUS.default",paraId:41,tocIndex:21},{value:". So you can directly import locale from ",paraId:41,tocIndex:21},{value:"es/",paraId:41,tocIndex:21},{value:" directory like ",paraId:41,tocIndex:21},{value:"import enUS from 'antd/es/locale/en_US'",paraId:41,tocIndex:21},{value:" to make dev and production have the same behavior.",paraId:41,tocIndex:21},{value:"prefixCls",paraId:11},{value:"ConfigProvider.config({ prefixCls: 'prefix-1' })",paraId:42,tocIndex:22},{value:'ConfigProvider.config({ holderRender: (children) => <ConfigProvider prefixCls="prefix-2">{children}</ConfigProvider> })',paraId:42,tocIndex:22},{value:"message.config({ prefixCls: 'prefix-3' })",paraId:42,tocIndex:22}];}}]);