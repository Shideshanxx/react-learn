import React from 'react'

// 受控组件（表单内容受state影响，如果表单数据比较多的话，就会非常繁琐）
// class CommentBox extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(event) {
//     this.setState({
//       value: event.target.value
//     })
//   }
//   handleSubmit(event) {
//     alert(this.state.value)
//     event.preventDefault()
//   }
//   render() {
//     return (
//       <form className="p-5" onSubmit={this.handleSubmit}>
//         <div className="form-group">
//           <label>留言内容</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="请输入内容"
//             onChange={this.handleChange}
//             value={this.state.value}
//           />
//           <button type="submit" className="btn btn-primary">留言</button>
//         </div>
//       </form>
//     )
//   }
// }

// 非受控表单组件（表单内容不受state影响）
class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    if (this.textInput.value) {
      this.props.onAddComment(this.textInput.value)
      this.textInput.value = ''
    }
    event.preventDefault()
  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input
            type="text"
            className="form-control"
            placeholder="请输入内容"
            ref={(textInput) => {this.textInput = textInput}}
          />
          {/* this.textInput 是自定义的一个CommentBox类里面的变量 */}
          <button type="submit" className="btn btn-primary">留言</button>
          <p>已有{this.props.commentsLength}条评论</p>
        </div>
      </form>
    )
  }
}

export default CommentBox