import React from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeContext from './theme-context'
// 引入ThemeContext对象，会出现两个变量（即两个react组件:ThemeContext.Provider和ThemeContext.Consumer）
import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
import Theme from './components/Theme'
import ThemedBar from './components/ThemedBar'
const tags = ['帅哥','土豪','智商报表']
const themes = {
  light: {
    classnames: "btn btn-primary",
    bgColor: "#eeeeee",
    color: "#000"
  },
  dark: {
    classnames: "btn btn-light",
    bgColor: "#222222",
    color: "#fff"
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply'],
      theme: 'light'
    }
    this.addComment = this.addComment.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  changeTheme(theme) {
    this.setState({
      theme
    })
  }
  render() {
    const {comments} = this.state
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to React</p>
          </header>
          <Theme changeTheme={this.changeTheme} />
          <ThemedBar />
          <NameCard name="Jack" number={15990055495} isHuman tags={tags} ></NameCard>
          <LikesButton />
          <DigitalClock />
          <CommentList comments={comments} />
          <CommentBox 
            commentsLength={comments.length}
            onAddComment={this.addComment}
          />
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App;

/**
 * 1.状态提升（将共享的状态提升至最近的父组件当中进行管理）
 * 2.自上而下的单向数据流（一个数据源）
 * 
 * 3.context
 */
