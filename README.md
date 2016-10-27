# react-time-from-now
Simple react component to show time from now , such as 1 minutes ago, 2 day ago...

##Install

`npm install react-time-from-now -S`

##Usage

```
import React from 'react';
import ReactDom from "react-dom";

import TimeFromNow from 'ract-time-from-now';

//you can set the lang you want
const setting = {
  langEn : {
    justNow : 'just now',
    minutes : '[result] min ago',
    year : 'yyyy-MM-dd'
  },
  langZh : {
    justNow : '刚刚',
    minutes : '[result] 分钟前',
    year : 'yyyy年MM月dd日 hh:mm'
  }
}

class Test extends React.Component{

  constructor(){
    super();
    this.state = {
      time : +new Date
    }
  }
  //just for test
  clickHandler(type){
    var oneMin = 1000 * 60;
    var oneHour = oneMin * 60;
    var oneDay = oneHour * 24;
    var oneMonth = oneDay * 30;
    switch (type) {
      case '1':
        this.setState({time : +new Date})
        break;
      case '2':
        this.setState({time : +new Date - (oneMin * 20)})
        break;
      case '3':
        this.setState({time : +new Date - (oneHour * 2)})
        break;
      case '4' :
        this.setState({time : +new Date - (oneMonth * 6)})
        break;
      default:

    }
  }

  render(){
    return (
      <div>
        <button onClick={this.clickHandler.bind(this,'1')}>just now</button>
        <button onClick={this.clickHandler.bind(this,'2')}>minutes</button>
        <button onClick={this.clickHandler.bind(this,'4')}>days</button>
        <br/>
        <hr/>
        <br/>
        result : <span>
          <TimeFromNow lang={setting.langZh} time={this.state.time}></TimeFromNow>
        </span>

      </div>
    )
  }
}

ReactDom.render(
  <Test />,
  document.getElementById('app-container')
)
```
