import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/**
 * 1.class welcome extends React.Component {
      render() {
        return <h1>Hello React</h1>
      }
    }
 * 2.ReactDOM 及其render方法
 * 3.自定义组件第一个字母大写（例如 <Welcome />）
 */
