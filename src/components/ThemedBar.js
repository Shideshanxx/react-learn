import React from 'react'
import ThemeContext from '../theme-context'

const ThemedBar = () => {
  return (
    <ThemeContext.Consumer>
      {
        theme => {
          // 没有通过props传递，通过context的方式即可接收到父组件中的值
          return (
            <div
              className="alert mt-5"
              style={ {backgroundColor: theme.bgColor, color: theme.color} }
            >
              样式区域
              <button className={theme.classnames}>样式按钮</button>
            </div>
          )
        }
      }
    </ThemeContext.Consumer>
  )
}

export default ThemedBar

/**
 * ThemeContext.Consumer 返回一个函数表达式，函数的参数就是接收到的值
 */