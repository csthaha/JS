兼容性 不行
scroll-behavior：smooth  （ie 不产生效果）

chrome 支持css，但是 其他主流浏览怎么办？ scroll-behavior 失效
js 写

window.requestAnimationFrame(callback)
    执行动画，回调函数作为参数，并且执行动画后更新。每秒动画60帧(次)

scroll-behavior ie 不支持
兼容 hack ie js window.scrollTo(0,1/8);
requestAnimationFram(递归函数)

浏览器判断