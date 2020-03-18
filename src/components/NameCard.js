import React from 'react';

// 函数式编程
const NameCard = (props) => {
  const { name, number, isHuman, tags } = props
  return (
    <div className="alert alert-success">
      <h4 className="alert-heading">{name}</h4>
      <ul>
        <li>电话：{number}</li>
        <li>{isHuman?'人类':'外星生物'}</li>
        <hr />
        <p>
          { tags.map((tag,index) => (
            <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
          ))}
        </p>
      </ul>
    </div>
  )
}

// class NameCard extends React.Component {
//   render() {
//     const { name, number, isHuman, tags } = this.props
//     return (
//       <div className="alert alert-success">
//         <h4 className="alert-heading">{name}</h4>
//         <ul>
//           <li>电话：{number}</li>
//           <li>{isHuman?'人类':'外星生物'}</li>
//           <hr />
//           <p>
//             { tags.map((tag,index) => (
//               <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
//             ))}
//           </p>
//         </ul>
//       </div>
//     )
//   }
// }

export default NameCard


/**
 * 纯函数：不改变函数的输入值
 * 非纯函数： 改变函数的输入值
 * react组件是 纯函数 ，不能改变输入值
 * 
 * 组件 内部 的数据可以动态改变
 * this.setState()是更新state 的唯一途径
 */