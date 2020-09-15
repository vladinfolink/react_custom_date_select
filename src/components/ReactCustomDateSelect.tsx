import * as React from 'react';

import Year from './Year';
import Months from './Months';
import Days from './Days';
import Hour from './Hour';
interface State {
  now: Date;
  // display year, this month + next month, days in each 2 months
  // change year, month, day
  startDate: null | Date;
  endDate: null | Date;
}

export class ReactCustomDateSelect extends React.Component<{}, State> {
  state = {
    now: new Date(),
    startDate: null,
    endDate: null
  };

  changeNow = (
    y: number = this.state.now.getFullYear(),
    m: number = this.state.now.getMonth(), //this month  - 1-
    d: number = this.state.now.getDate()
  ) => {
    const { now } = this.state;
    now.setFullYear(y, m, d);
    this.setState(function() {
      return { now };
    });
  };

  changeStartEndDate = (day: Date) => {
    const { startDate, endDate } = this.state;
    this.setState(function() {
      return startDate && endDate
        ? { startDate: null, endDate: null }
        : {
            startDate: !startDate && !endDate ? day : startDate,
            endDate: startDate && !endDate ? day : null
          };
    });
  };

  changeStartEndHM = (
    hours: number = (this.state.startDate as any).getHours(),
    minutes: number = (this.state.startDate as any).getMinutes(),
    target: string
  ) => {
    const { startDate, endDate } = this.state;

    if (target === 'start') {
      (startDate as any).setHours(hours);
      (startDate as any).setMinutes(minutes);
    } else {
      (endDate as any).setHours(hours);
      (endDate as any).setMinutes(minutes);
    }
    this.setState(function() {
      return { startDate, endDate };
    });
  };

  render() {
    const { now, startDate, endDate } = this.state;
    const [year, month, day, hours, minutes] = [
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours(),
      now.getMinutes()
    ];

    return (
      <div
        style={{
          position: `absolute`,
          height: `200px`,
          width: `90%`,
          margin: `auto 0 0 -10%`,
          top: `32%`,
          left: `50%`
        }}
      >
        <div>
          {now.toLocaleDateString()} {' - '}
          {hours}
          {' : '}
          {minutes}
        </div>
        <Year year={year} changeNow={this.changeNow} />
        <Months month={month} changeNow={this.changeNow} />
        <Days
          now={now}
          year={year}
          month={month}
          day={day}
          changeNow={this.changeNow}
          changeStartEndDate={this.changeStartEndDate}
          startDate={startDate}
          endDate={endDate}
        />
        {!!startDate && (startDate as any).toLocaleDateString()}
        {'-'}
        {!!startDate && (startDate as any).getHours()}
        {'-'}
        {!!startDate && (startDate as any).getMinutes()}
        {!!startDate && (
          <Hour
            start={true}
            end={false}
            hours={(startDate as any).getHours()}
            minutes={(startDate as any).getMinutes()}
            changeStartEndHM={this.changeStartEndHM}
          />
        )}

        <br />

        {!!endDate && (endDate as any).toLocaleDateString()}
        {!!endDate && (
          <Hour
            start={false}
            end={true}
            hours={(endDate as any).getHours()}
            minutes={(endDate as any).getMinutes()}
            changeStartEndHM={this.changeStartEndHM}
          />
        )}
      </div>
    );
  }
}
