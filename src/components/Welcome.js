import React from 'react'

class welcome extends React.Component {
  render() {
    const learnList = ["learn React", "learn Typescript"]
    const isLogin = true
    return (
      <div>
        <h3 className="title" htmlFor="">Hello React</h3>
        <ul>
          {
            learnList.map(item =>
              <li>{item}</li>
            )
          }
        </ul>
        <h4>{isLogin ? <p>您已登录</p> : <p>请登录</p>}</h4>
      </div>
    )
  }
}

export default welcome


/**
 * 1.可以使用花括号 {} 内嵌任何javascript表达式；
 * 2.由于 元素的class 与 “class welcome extends”上的class 重复，所以React 元素中使用className代替class；
 * 3.由于 for 在 JavaScript 中是保留字，所以 React 元素中使用了 htmlFor 来代替；
 * 4.返回的 HTML 不是原生的 HTML，而是 javascript的语法扩展(JSX)
 * 5.babel在线编译工具:https://babeljs.io ——> Try it out ——> presets选择react
 * 6.JSX是一种语法糖 ——React.createElement()的简单写法,这个方法返回的就是ReactElement对象
 * 7.在JSX中输出一个对象会报错，例如{{item}} 这种
 */