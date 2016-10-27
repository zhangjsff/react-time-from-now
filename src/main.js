import React from 'react';
var format = require('date-format');

const defaultLang = {
  justNow : 'just now',
  minutes : '[result] mins ago',
  hours : '[result] hour{{s}} ago',
  days : '[result] day{{s}} ago',
  year : 'yyyy-mm-dd'
}

const oneS = 1000;
const oneM = oneS *60;
const oneH = oneM *60;
const oneD = oneH *24;

export default class TimeFromNow extends React.Component{

  static defaultProps = {
    time : +new Date,
    lang : defaultLang
  }

  constructor(){
    super();
    this.state = {
      result : ''
    }
  }

  caculate(time){
    var now = +new Date;
    var date = new Date(time);
    var during = now - time;
    var result = '';
    if(during < (oneM * 2)){
      result = this.props.lang.justNow;
    }else if(during < oneH){
      result = Math.floor(during / oneM);
      result = this.props.lang.minutes.replace('[result]',result);
    }else{
      result = format(this.props.lang.year,date)

    }

    return result;
  }

  render(){
    var result = this.caculate(this.props.time);
    return (
      <span>{result}</span>
    )
  }
}
