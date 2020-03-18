import React from 'react'

class DigitalClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }
  // componentDidUpdate接收两个参数，一个是props，一个是state
  componentDidUpdate(currentProps, currentState) {
    // console.log(currentProps, currentState)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div className="digital-clock-component jumbotron">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default DigitalClock

/**
 * 组件的生命周期：componentDidMount（初始化）、componentDidUpdate（更新）、componentWillUnmount（卸载）
 * componentDidUpdate接收两个参数：一个是当前的props，一个是当前的state
 */