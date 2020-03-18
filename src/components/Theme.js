import React from 'react'

class Theme extends React.Component {
  constructor(props) {
    super(props)
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme(theme) {
    this.props.changeTheme(theme)
  }
  render() {
    return (
      <div>
        <a
          href="#theme-switcher"
          className="btn btn-light"
          onClick={() => {this.changeTheme('light')}}
        >
          浅色主题
        </a>
        <a
          href="#theme-switcher"
          className="btn btn-secondary"
          onClick={() => {this.changeTheme('dark')}}
        >
        深色主题
        </a>
      </div>
    )
  }
}

export default Theme