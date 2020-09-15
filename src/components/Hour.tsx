import * as React from 'react';

export interface Props {
  hours: number;
  minutes: number;
  changeStartEndHM: any,
  start: boolean,
  end: boolean
}

export default function Hour(props: Props) {

  return (
    <div>
      hour:
      <input
        type='number'
        max={23}
        value={props.hours}
        onChange={e => {
          props.changeStartEndHM(e.target.value, props.minutes, props.start && 'start' || props.end && 'end')
        }}
      />
      minute: 
      <input
        type='number'
        max={59}
        value={props.minutes}
        onChange={e => {
          props.changeStartEndHM(props.hours, e.target.value, props.start && 'start' || props.end && 'end');
        }}
      />
    </div >
  );
}
