(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{488:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-1-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-http"}},[t._v("#")]),t._v(" 3.1 HTTP")]),t._v(" "),a("h2",{attrs:{id:"_3-1-1-http介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-http介绍"}},[t._v("#")]),t._v(" 3.1.1 HTTP介绍")]),t._v(" "),a("p",[a("code",[t._v("HTTP")]),t._v("是最常用的一种"),a("code",[t._v("Server")]),t._v("，"),a("code",[t._v("Jupiter")]),t._v("对"),a("code",[t._v("HTTP")]),t._v("服务提供了很多可观察性的手段。")]),t._v(" "),a("p",[t._v("我们内置了多个中间件，可以采集请求日志、采集trace、采集监控、采集慢日志，更加方便我们对"),a("code",[t._v("HTTP")]),t._v("服务的可观测。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("registry")]),t._v("注册"),a("code",[t._v("HTTP")]),t._v("里的信息，提供给网关使用")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("govern")]),t._v("的治理端口，能够查看监控、HTTP实时信息")]),t._v(" "),a("h2",{attrs:{id:"_3-1-2-配置规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-配置规范"}},[t._v("#")]),t._v(" 3.1.2 配置规范")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/jupiter/6.2httpserver.html"}},[t._v("配置说明")])],1),t._v(" "),a("h2",{attrs:{id:"_3-1-3-简单的http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-简单的http"}},[t._v("#")]),t._v(" 3.1.3 简单的HTTP")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/jupiter/1.1quickstart.html"}},[t._v("查看quickstart")])],1),t._v(" "),a("h2",{attrs:{id:"_3-1-4-注册的http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-注册的http"}},[t._v("#")]),t._v(" 3.1.4 注册的HTTP")]),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"https://github.com/douyu/jupiter/tree/master/example/http/register",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP注册信息示例"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("配置项")]),t._v(" "),a("div",{staticClass:"language-toml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.server.http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("port")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.etcdv3.default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("endpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:2379"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("secure")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("jupiter.registry.wh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("configKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jupiter.etcdv3.default"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("timeout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1s"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("注册"),a("code",[t._v("ETCD")]),t._v("信息")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("eng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetRegistry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    compound_registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        etcdv3_registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BuildRegistry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("设置"),a("code",[t._v("HTTP")])]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTTP地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eng "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("serveHTTP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tserver "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" xecho"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("StdConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx echo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Gopher Wuhan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" eng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Serve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"_3-1-5-完整的http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-完整的http"}},[t._v("#")]),t._v(" 3.1.5 完整的HTTP")]),t._v(" "),a("p",[t._v("参考"),a("a",{attrs:{href:"https://github.com/douyu/jupiter/tree/master/example/http/all",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整HTTP注册信息示例"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);