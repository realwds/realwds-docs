(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{464:function(_,v,e){"use strict";e.r(v);var t=e(28),i=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"_2021年05月19日"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2021年05月19日"}},[_._v("#")]),_._v(" 2021年05月19日")]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("天气")]),_._v(" "),e("p",[_._v("今日杭州晴，天气温和。")])]),_._v(" "),e("h2",{attrs:{id:"css-常用知识点回顾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-常用知识点回顾"}},[_._v("#")]),_._v(" CSS 常用知识点回顾")]),_._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#css-常用知识点回顾"}},[_._v("CSS 常用知识点回顾")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-两种隐藏元素方式-display-none-与-visibility-hidden-的区别"}},[_._v("1 两种隐藏元素方式 display: none; 与 visibility: hidden; 的区别")])]),e("li",[e("a",{attrs:{href:"#_2-盒模型"}},[_._v("2 盒模型")])]),e("li",[e("a",{attrs:{href:"#_3-bfc"}},[_._v("3 BFC")])]),e("li",[e("a",{attrs:{href:"#_4-居中布局"}},[_._v("4 居中布局")])]),e("li",[e("a",{attrs:{href:"#_5-选择器以及优先级"}},[_._v("5 选择器以及优先级")])]),e("li",[e("a",{attrs:{href:"#_6-弹性盒子中-flex-0-1-auto-分别表示什么"}},[_._v("6 弹性盒子中 flex: 0 1 auto 分别表示什么")])]),e("li",[e("a",{attrs:{href:"#_7-link-与-import-的区别"}},[_._v("7 link 与 @import 的区别")])]),e("li",[e("a",{attrs:{href:"#_8-伪类和伪元素"}},[_._v("8 伪类和伪元素")])])])])])]),e("p"),_._v(" "),e("h3",{attrs:{id:"_1-两种隐藏元素方式-display-none-与-visibility-hidden-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-两种隐藏元素方式-display-none-与-visibility-hidden-的区别"}},[_._v("#")]),_._v(" 1 两种隐藏元素方式 "),e("code",[_._v("display: none;")]),_._v(" 与 "),e("code",[_._v("visibility: hidden;")]),_._v(" 的区别")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("display: none;")]),_._v(" 会让元素完全从渲染树中消失，渲染的时候不占据任何空间；"),e("code",[_._v("visibility: hidden;")]),_._v(" 不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见。")]),_._v(" "),e("li",[e("code",[_._v("display: none;")]),_._v(" 是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；"),e("code",[_._v("visibility: hidden;")]),_._v(" 是继承属性，子孙节点消失由于继承了hidden，通过设置 "),e("code",[_._v("visibility: visible;")]),_._v(" 可以让子孙节点显式。")]),_._v(" "),e("li",[_._v("修改常规流中元素的 "),e("code",[_._v("display")]),_._v(" 通常会造成文档重排。修改 "),e("code",[_._v("visibility")]),_._v(" 属性只会造成本元素的重绘。")]),_._v(" "),e("li",[_._v("读屏器不会读取 "),e("code",[_._v("display: none;")]),_._v(" 元素内容；会读取 "),e("code",[_._v("visibility: hidden;")]),_._v(" 元素内容。")])]),_._v(" "),e("h3",{attrs:{id:"_2-盒模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-盒模型"}},[_._v("#")]),_._v(" 2 盒模型")]),_._v(" "),e("p",[_._v("页面渲染时，"),e("code",[_._v("dom")]),_._v(" 元素所采用的布局模型。可通过 "),e("code",[_._v("box-sizing")]),_._v(" 进行设置。根据计算宽高的区域可分为：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("content-box")]),_._v(" (W3C 标准盒模型)")]),_._v(" "),e("li",[e("code",[_._v("border-box")]),_._v(" (IE 盒模型)")]),_._v(" "),e("li",[e("code",[_._v("padding-box")])]),_._v(" "),e("li",[e("code",[_._v("margin-box")]),_._v(" (浏览器未实现)")])]),_._v(" "),e("h3",{attrs:{id:"_3-bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-bfc"}},[_._v("#")]),_._v(" 3 BFC")]),_._v(" "),e("p",[_._v("块级格式化上下文，是一个独立的渲染区域，让处于 "),e("code",[_._v("BFC")]),_._v(" 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。")]),_._v(" "),e("h4",{attrs:{id:"触发条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#触发条件"}},[_._v("#")]),_._v(" 触发条件")]),_._v(" "),e("ul",[e("li",[_._v("根元素")]),_._v(" "),e("li",[_._v("position: absolute / fixed")]),_._v(" "),e("li",[_._v("display: inline-block / table")]),_._v(" "),e("li",[_._v("float 元素")]),_._v(" "),e("li",[_._v("ovevflow !== visible")])]),_._v(" "),e("h4",{attrs:{id:"规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[_._v("#")]),_._v(" 规则")]),_._v(" "),e("ul",[e("li",[_._v("属于同一个 "),e("code",[_._v("BFC")]),_._v(" 的两个相邻 "),e("code",[_._v("Box")]),_._v(" 垂直排列")]),_._v(" "),e("li",[_._v("属于同一个 "),e("code",[_._v("BFC")]),_._v(" 的两个相邻 "),e("code",[_._v("Box")]),_._v(" 的 "),e("code",[_._v("margin")]),_._v(" 会发生重叠")]),_._v(" "),e("li",[e("code",[_._v("BFC")]),_._v(" 中子元素的 "),e("code",[_._v("margin box")]),_._v(" 的左边， 与包含块 (BFC) "),e("code",[_._v("border box")]),_._v(" 的左边相接触 (子元素 "),e("code",[_._v("absolute")]),_._v(" 除外)")]),_._v(" "),e("li",[e("code",[_._v("BFC")]),_._v(" 的区域不会与 "),e("code",[_._v("float")]),_._v(" 的元素区域重叠")]),_._v(" "),e("li",[_._v("计算 "),e("code",[_._v("BFC")]),_._v(" 的高度时，浮动子元素也参与计算")]),_._v(" "),e("li",[_._v("文字层不会被浮动层覆盖，环绕于周围")])]),_._v(" "),e("h4",{attrs:{id:"应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[_._v("#")]),_._v(" 应用")]),_._v(" "),e("ul",[e("li",[_._v("阻止 "),e("code",[_._v("margin")]),_._v(" 重叠")]),_._v(" "),e("li",[_._v("可以包含浮动元素 ------ 清除内部浮动 (清除浮动的原理是两个 "),e("code",[_._v("div")]),_._v(" 都位于同一个 "),e("code",[_._v("BFC")]),_._v(" 区域之中)")]),_._v(" "),e("li",[_._v("自适应两栏布局")]),_._v(" "),e("li",[_._v("可以阻止元素被浮动元素覆盖")])]),_._v(" "),e("h3",{attrs:{id:"_4-居中布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-居中布局"}},[_._v("#")]),_._v(" 4 居中布局")]),_._v(" "),e("h4",{attrs:{id:"水平居中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#水平居中"}},[_._v("#")]),_._v(" 水平居中")]),_._v(" "),e("ul",[e("li",[_._v("行内元素：text-align: center")]),_._v(" "),e("li",[_._v("块级元素：margin: 0 auto")]),_._v(" "),e("li",[_._v("absolute + transform")]),_._v(" "),e("li",[_._v("flex + justify-content: center")])]),_._v(" "),e("h4",{attrs:{id:"垂直居中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垂直居中"}},[_._v("#")]),_._v(" 垂直居中")]),_._v(" "),e("ul",[e("li",[_._v("line-height: height")]),_._v(" "),e("li",[_._v("absolute + transform")]),_._v(" "),e("li",[_._v("flex + align-items: center")]),_._v(" "),e("li",[_._v("table")])]),_._v(" "),e("h4",{attrs:{id:"水平垂直居中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#水平垂直居中"}},[_._v("#")]),_._v(" 水平垂直居中")]),_._v(" "),e("ul",[e("li",[_._v("absolute + transform")]),_._v(" "),e("li",[_._v("flex + justify-content + align-items")])]),_._v(" "),e("h3",{attrs:{id:"_5-选择器以及优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-选择器以及优先级"}},[_._v("#")]),_._v(" 5 选择器以及优先级")]),_._v(" "),e("ul",[e("li",[_._v("id 选择器（ # myid）")]),_._v(" "),e("li",[_._v("类选择器（.myclassname）")]),_._v(" "),e("li",[_._v("标签选择器（div, h1, p）")]),_._v(" "),e("li",[_._v("相邻选择器（h1 + p）")]),_._v(" "),e("li",[_._v("子选择器（ul > li）")]),_._v(" "),e("li",[_._v("后代选择器（li a）")]),_._v(" "),e("li",[_._v("通配符选择器（ * ）")]),_._v(" "),e("li",[_._v('属性选择器（a[rel = "external"]）')]),_._v(" "),e("li",[_._v("伪类选择器（a:hover, li:nth-child）")]),_._v(" "),e("li",[_._v("!important > 行内样式 > #id > .class > tag > * > 继承 > 默认")]),_._v(" "),e("li",[_._v("选择器 从右往左 解析")])]),_._v(" "),e("h3",{attrs:{id:"_6-弹性盒子中-flex-0-1-auto-分别表示什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-弹性盒子中-flex-0-1-auto-分别表示什么"}},[_._v("#")]),_._v(" 6 弹性盒子中 flex: 0 1 auto 分别表示什么")]),_._v(" "),e("p",[_._v("三个参数分别对应的是 "),e("code",[_._v("flex-grow")]),_._v(", "),e("code",[_._v("flex-shrink")]),_._v(" 和 "),e("code",[_._v("flex-basis")]),_._v("，默认值为 "),e("code",[_._v("0 1 auto")]),_._v("。")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("flex-grow")]),_._v(" 属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。")]),_._v(" "),e("li",[e("code",[_._v("flex-shrink")]),_._v(" 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),_._v(" "),e("li",[e("code",[_._v("flex-basis")]),_._v(" 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。")])]),_._v(" "),e("h3",{attrs:{id:"_7-link-与-import-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-link-与-import-的区别"}},[_._v("#")]),_._v(" 7 link 与 @import 的区别")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("link")]),_._v(" 功能较多，可以定义 "),e("code",[_._v("RSS")]),_._v("，定义 "),e("code",[_._v("Rel")]),_._v(" 等作用，而 "),e("code",[_._v("@import")]),_._v(" 只能用于加载 "),e("code",[_._v("css")])]),_._v(" "),e("li",[_._v("当解析到 "),e("code",[_._v("link")]),_._v(" 时，页面会同步加载所引的 "),e("code",[_._v("css")]),_._v("，而 "),e("code",[_._v("@import")]),_._v(" 所引用的 "),e("code",[_._v("css")]),_._v(" 会等到页面加载完才被加载")]),_._v(" "),e("li",[e("code",[_._v("@import")]),_._v(" 需要 IE5 以上才能使用")]),_._v(" "),e("li",[e("code",[_._v("link")]),_._v(" 可以使用 "),e("code",[_._v("js")]),_._v(" 动态引入，"),e("code",[_._v("@import")]),_._v(" 不行")])]),_._v(" "),e("h3",{attrs:{id:"_8-伪类和伪元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-伪类和伪元素"}},[_._v("#")]),_._v(" 8 伪类和伪元素")]),_._v(" "),e("p",[e("code",[_._v("CSS")]),_._v(" 引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素都是用来修饰不在文档树中的部分")]),_._v(" "),e("h4",{attrs:{id:"伪类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪类"}},[_._v("#")]),_._v(" 伪类")]),_._v(" "),e("p",[_._v("伪类存在的意义是为了通过选择器找到那些不存在 DOM 树中的信息以及不能被常规 CSS 选择器获取到的信息")]),_._v(" "),e("ul",[e("li",[_._v("获取不存在与 DOM 树中的信息。比如 "),e("code",[_._v("a")]),_._v(" 标签的 "),e("code",[_._v(":link")]),_._v("、"),e("code",[_._v("visited")]),_._v(" 等，这些信息不存在与 DOM 树结构中，只能通过 CSS 选择器来获取；")]),_._v(" "),e("li",[_._v("获取不能被常规 CSS 选择器获取的信息。比如：要获取第一个子元素，我们无法用常规的 CSS 选择器获取，但可以通过 "),e("code",[_._v(":first-child")]),_._v(" 来获取到。")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog/false-class.81137d65.47ajvus48zs0.png",alt:""}})]),_._v(" "),e("h4",{attrs:{id:"伪元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪元素"}},[_._v("#")]),_._v(" 伪元素")]),_._v(" "),e("p",[_._v("伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过 "),e("code",[_._v(":before")]),_._v(" 来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。常见的伪元素有："),e("code",[_._v("::before")]),_._v("，"),e("code",[_._v("::after")]),_._v("，"),e("code",[_._v("::first-line")]),_._v("，"),e("code",[_._v("::first-letter")]),_._v("，"),e("code",[_._v("::selection")]),_._v("、"),e("code",[_._v("::placeholder")]),_._v("等")]),_._v(" "),e("p",[_._v("因此，伪类与伪元素的区别在于：有没有创建一个文档树之外的元素")]),_._v(" "),e("h4",{attrs:{id:"after和-after的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#after和-after的区别"}},[_._v("#")]),_._v(" "),e("code",[_._v("::after")]),_._v("和"),e("code",[_._v(":after")]),_._v("的区别")]),_._v(" "),e("p",[_._v("在实际的开发工作中，我们会看到有人把伪元素写成 "),e("code",[_._v(":after")]),_._v("，这实际是 CSS2 与 CSS3 新旧标准的规定不同而导致的。 CSS2 中的伪元素使用1个冒号，在 CSS3 中，为了区分伪类和伪元素，规定伪元素使用2个冒号。所以，对于 CSS2 标准的老伪元素，比如 "),e("code",[_._v(":first-line")]),_._v("，"),e("code",[_._v(":first-letter")]),_._v("，"),e("code",[_._v(":before")]),_._v("，"),e("code",[_._v(":after")]),_._v("，写一个冒号浏览器也能识别，但对于 CSS3 标准的新伪元素，比如 "),e("code",[_._v("::selection")]),_._v("，就必须写2个冒号了")]),_._v(" "),e("h4",{attrs:{id:"css3新增伪类有那些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css3新增伪类有那些"}},[_._v("#")]),_._v(" CSS3新增伪类有那些？")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("p:first-of-type")]),_._v(" 选择属于其父元素的首个 "),e("code",[_._v("<p>")]),_._v(" 元素的每个 "),e("code",[_._v("<p>")]),_._v(" 元素。")]),_._v(" "),e("li",[e("code",[_._v("p:last-of-type")]),_._v(" 选择属于其父元素的最后 "),e("code",[_._v("<p>")]),_._v(" 元素的每个 "),e("code",[_._v("<p>")]),_._v(" 元素。")]),_._v(" "),e("li",[e("code",[_._v("p:only-of-type")]),_._v(" 选择属于其父元素唯一的 "),e("code",[_._v("<p>")]),_._v(" 元素的每个 "),e("code",[_._v("<p>")]),_._v(" 元素。")]),_._v(" "),e("li",[e("code",[_._v("p:only-child")]),_._v(" 选择属于其父元素的唯一子元素的每个 "),e("code",[_._v("<p>")]),_._v(" 元素。")]),_._v(" "),e("li",[e("code",[_._v("p:nth-child(2)")]),_._v(" 选择属于其父元素的第二个子元素的每个 "),e("code",[_._v("<p>")]),_._v(" 元素。")]),_._v(" "),e("li",[e("code",[_._v(":after")]),_._v(" 在元素之前添加内容,也可以用来做清除浮动。")]),_._v(" "),e("li",[e("code",[_._v(":before")]),_._v(" 在元素之后添加内容。")]),_._v(" "),e("li",[e("code",[_._v("not(elem)")]),_._v(" 选择非 elem 元素的每个元素。")]),_._v(" "),e("li",[e("code",[_._v(":enabled")]),_._v(" 控制表单控件的禁用状态。")]),_._v(" "),e("li",[e("code",[_._v(":disabled")]),_._v(" 控制表单控件的禁用状态。")]),_._v(" "),e("li",[e("code",[_._v(":checked")]),_._v(" 单选框或复选框被选中。")])])])}),[],!1,null,null,null);v.default=i.exports}}]);