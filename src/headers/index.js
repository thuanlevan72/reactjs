import React, { Component } from 'react';
import logo from './logo.svg';
import './styte.css';

class index extends Component {
    render() {
        return (
            <div>
           <img src={logo} className="App-logo" alt="logo" />
        <p>
            {this.props.text} 
            {/* gọi lên thuộc tính của nó */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {this.props.name}
        </a>     
            </div>
        );
    }
}
// gọi lên 1 props giá trị mặc định của nó 
index.defaultProps= {
    name: "thuận đây rồi bạn ơi"
}



export default index;