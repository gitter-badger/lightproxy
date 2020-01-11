(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{209:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用-nodejs-编写规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-nodejs-编写规则"}},[t._v("#")]),t._v(" 使用 NodeJS 编写规则")]),t._v(" "),e("p",[t._v("从 "),e("code",[t._v("LightProxy")]),t._v(" 1.0.9 版本开始，我们支持直接使用 "),e("code",[t._v("NodeJS")]),t._v(" 书写规则，以解决一些灵活复杂的需求。")]),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("p",[t._v("同样可以输入 "),e("code",[t._v("/")]),t._v(" 来获取自动模板")]),e("p",[e("img",{staticStyle:{"max-width":"600px",width:"530px"},attrs:{alt:"image.png",title:"image.png",src:"https://cdn.nlark.com/yuque/0/2019/png/236311/1577377528257-8dc6bd8d-08f7-4b22-8a3b-6141183122c9.png#align=left&display=inline&height=355&name=image.png&originHeight=1624&originWidth=2424&size=644819&status=done&style=none&width=530"}})]),e("p",[e("img",{staticStyle:{"max-width":"600px",width:"534px"},attrs:{alt:"image.png",title:"image.png",src:"https://cdn.nlark.com/yuque/0/2019/png/236311/1577377528408-135e68e6-59a7-49d3-8197-ca514480f0c7.png#align=left&display=inline&height=358&name=image.png&originHeight=732&originWidth=1092&size=220639&status=done&style=none&width=534"}})]),t._v(" "),e("h2",{attrs:{id:"书写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#书写"}},[t._v("#")]),t._v(" 书写")]),t._v(" "),e("p",[t._v("支持行内的写法")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("alibaba"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lightproxy scriptfile"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n\nexports.handleRequest = async (ctx, next) => {\n  // do sth\n  // ctx.fullUrl 可以获取请求url\n  // ctx.headers 可以获取请求头\n  // ctx.options 里面包含一些特殊的请求头字段，分别可以获取一些额外信息，如请设置的规则等\n  // ctx.method 获取和设置请求方法\n  // const reqBody = await ctx.getReqBody(); 获取请求body的Buffer数据，如果没有数据返回null\n  // const reqText = await ctx.getReqText();  获取请求body的文本，如果没有返回''\n  // const formData = await ctx.getReqForm(); 获取表单对象，如果不是表单，返回空对象{}\n  // ctx.req.body = String| Buffer | Stream | null，修改请求的内容\n  // next方法可以设置next({ host, port });\n  // 只有执行next方法后才可以把正常的请求发送出去\n  const { statusCode, headers } = await next(); \n  // do sth\n  // const resBody = yield ctx.getResBody();\n  // const resText = yield ctx.getResText();\n  // ctx.status = 404; 修改响应状态码\n  // ctx.set(headers); 批量修改响应头\n  // ctx.set('x-test', 'abc'); 修改响应头\n  // ctx.body = String| Buffer | Stream | null; 修改响应内容\n  ctx.body = 'test';\n};")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" \n")])])]),e("p",[t._v("也可以直接指向一个文件")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("alibaba"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lightproxy scriptfile"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js \n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);