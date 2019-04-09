import React, { useEffect, useState } from 'react';
import Track from '../track';
import Resizable from 're-resizable';
import { withAudio, withTime, withTransport } from '@daw/state';
import Slider from '@material-ui/lab/Slider';
import './styles.css';

export default withTime(
  withTransport(
    withAudio(props => {
      const [currentTime, setCurrentTime] = useState(0);

      useEffect(() => {
        if (props.isPlaying) {
          setCurrentTime(currentTime + 0.009 * 4);
        }

        if (props.isStopped) {
          setCurrentTime(0);
        }
      }, [props.isPlaying, props.isStopped, currentTime]);

      return (
        <div className={props.className}>
          <span className="marker" style={{ paddingLeft: currentTime }} />
          <Resizable
            enable={{
              bottom: true
            }}
            minHeight="50"
            defaultSize={{
              height: 100
            }}
          >
            <Track
              backgroundColor="#2C3224"
              index="1"
              className="track"
              isPaused={props.isPaused}
              isPlaying={props.isStopped}
              horizontalZoom={props.horizontalZoom}
              audioContext={props.audioContext}
            />
          </Resizable>
          <Resizable
            enable={{
              bottom: true
            }}
            minHeight="50"
            defaultSize={{
              height: 100
            }}
          >
            <Track
              backgroundColor="#2A5060"
              index="2"
              className="track"
              isPaused={props.isPaused}
              isPlaying={props.isStopped}
              horizontalZoom={props.horizontalZoom}
              audioContext={props.audioContext}
            />
          </Resizable>
          <Resizable
            enable={{
              bottom: true
            }}
            minHeight="50"
            defaultSize={{
              height: 100
            }}
          >
            <Track
              isActive
              backgroundColor="#2A5060"
              index="3"
              className="track"
              isPaused={props.isPaused}
              isPlaying={props.isStopped}
              horizontalZoom={props.horizontalZoom}
              audioContext={props.audioContext}
            />
          </Resizable>
          <Resizable
            enable={{
              bottom: true
            }}
            minHeight="50"
            defaultSize={{
              height: 100
            }}
          >
            <Track
              backgroundColor="#2A5060"
              index="4"
              className="track"
              isPaused={props.isPaused}
              isPlaying={props.isStopped}
              horizontalZoom={props.horizontalZoom}
              audioContext={props.audioContext}
            />
          </Resizable>
          <div className="horizontal-zoom">
            <Slider
              value={props.horizontalZoom}
              min={1}
              max={50}
              step={2}
              aria-labelledby="label"
              onChange={(_, value) => props.setHorizontalZoom(value)}
            />
          </div>
        </div>
      );
    })
  )
);
