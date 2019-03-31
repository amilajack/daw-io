import React from 'react';
import Fast from '../../assets/fast.svg';
import Slow from '../../assets/slow.svg';
import Pause from '../../assets/pause.svg';
import Play from '../../assets/play.svg';
import Record from '../../assets/record.svg';
import Stop from '../../assets/stop.svg';

export default ({ id, ...otherProps }) => {
  switch (id) {
    case 'backwards':
      return <Slow style={{ transform: 'rotateY(180deg)' }} {...otherProps} />;
    case 'fast-backwards':
      return <Fast {...otherProps} />;
    case 'play':
      return <Play {...otherProps} />;
    case 'pause':
      return <Pause {...otherProps} />;
    case 'record':
      return <Record {...otherProps} />;
    case 'stop':
      return <Stop {...otherProps} />;
    case 'forward':
      return <Slow {...otherProps} />;
    case 'fast-forward':
      return <Fast style={{ transform: 'rotateY(180deg)' }} {...otherProps} />;
    default:
      return <Play {...otherProps} />;
  }
};
