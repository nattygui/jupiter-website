(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{431:function(t,a,e){t.exports=e.p+"assets/img/trace2.1.d71e13fb.png"},432:function(t,a,e){t.exports=e.p+"assets/img/trace2.2.24d7edf4.png"},498:function(t,a,e){"use strict";e.r(a);var s=e(27),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_4-8-调用trace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-调用trace"}},[t._v("#")]),t._v(" 4.8 调用Trace")]),t._v(" "),s("h2",{attrs:{id:"_4-8-1-环境准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-1-环境准备"}},[t._v("#")]),t._v(" 4.8.1 环境准备")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jaegertracing.io/docs/1.21/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jaeger参考文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("本地测试需要安装jaegertracing，推荐直接使用docker方式启动。")]),t._v(" "),s("blockquote",[s("p",[t._v("docker pull jaegertracing/all-in-one")])]),t._v(" "),s("p",[t._v("安装完成后访问 "),s("a",{attrs:{href:"http://localhost:16686/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:16686/"),s("OutboundLink")],1),t._v(" 可以看到ui界面。")]),t._v(" "),s("h2",{attrs:{id:"_4-8-2-基本说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-2-基本说明"}},[t._v("#")]),t._v(" 4.8.2 基本说明")]),t._v(" "),s("p",[t._v("在服务启动的配置文件中加入如下配置后，jupiter 应用启动之后会开启 trace 功能。如果没有配置 LocalAgentHostPort 参数，应用会读取环境变量"),s("code",[t._v("JAEGER_AGENT_ADDR")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('[jupiter.trace.jaeger]\nEnableRPCMetrics= true\n[jupiter.trace.jaeger.Reporter]\nLocalAgentHostPort = "127.0.0.1:6831"\nLogSpans = true\n[jupiter.trace.jaeger.Sampler]\nParam = 0.0001\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("trace数据写入方式")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("span"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" trace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StartSpanFromContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"process1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" span"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Finish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"_4-8-2-使用方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-2-使用方案"}},[t._v("#")]),t._v(" 4.8.2 使用方案")]),t._v(" "),s("p",[t._v("example地址 "),s("a",{attrs:{href:"https://github.com/douyu/jupiter/tree/master/example/trace",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/douyu/jupiter/tree/master/example/trace"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_4-8-3-实际效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-3-实际效果"}},[t._v("#")]),t._v(" 4.8.3 实际效果")]),t._v(" "),s("p",[s("img",{attrs:{src:e(431),alt:""}}),t._v(" "),s("img",{attrs:{src:e(432),alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);