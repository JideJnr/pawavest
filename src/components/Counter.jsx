import React from 'react'
import { useCountUp } from 'react-countup';

const Counter = ({num}) => {

    useCountUp({ ref: 'counter', start: 0, end: {num} , delay: 0 });
  return (
    <div id="counter"> </div>
  )
}

export default Counter