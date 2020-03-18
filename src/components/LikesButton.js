import React from 'react'

class LikesButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
    this.increaseLikes = this.increaseLikes.bind(this)
  }
  increaseLikes() {
    //console.log(this)  // 不使用箭头函数或绑定事件的this指向，则打印undefined
    this.setState({
      likes: ++this.state.likes
    })
  }
  render() {
    return (
      <div className="likes-button-component">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg"
          onClick={this.increaseLikes}
        >
          <span role="img">👍</span> {this.state.likes}
        </button>
      </div>
    )
  }
}

export default LikesButton

/**
 * JSX中绑定事件用驼峰式，如onClick
 * onClick={this.increaseLikes},在increaseLikes函数中打印this是undefined，有两种解决方法：
 *    1.onClick={this.increaseLikes}写成箭头函数：onClick={()=>{this.increaseLikes}}
 *    2.在constructor中绑定事件的this：this.increaseLikes = this.increaseLikes.bind(this)
 * 
 * this.setState()是更新state 的唯一途径
 */