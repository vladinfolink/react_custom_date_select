import * as React from "react";

import DaysRenderSet from "./DaysRenderSet";
interface Props {
  now: Date;
  year: number;
  month: number;
  day: number;
  changeNow: any;
  changeStartEndDate: any;
  startDate: null | Date;
  endDate: null | Date;
}

export default class Days extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.getNrOfDaysOnMonth = this.getNrOfDaysOnMonth.bind(this);
  }
  // retrieve dates for all days in specific month:
  private getNrOfDaysOnMonth(month = this.props.month, year = this.props.year) {
    const [_month, _year] = month === 12 ? [0, year + 1] : [month, year];
    const date = new Date(_year, _month, 1);
    const days = [];
    while (date.getMonth() === _month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  render() {
    const { month, day, changeStartEndDate, startDate, endDate } = this.props; // current day as number from props
    const daySets = [
      //array of days as dates in first month
      this.getNrOfDaysOnMonth(),
      //array of days as dates in next month
      this.getNrOfDaysOnMonth(this.props.month + 1)
    ].map(function(daySet, i) {
      // DaysRenderSet = array of days as dates in one month
      return (
        <React.Fragment key={i}>
          <DaysRenderSet
            daySet={daySet}
            day={day}
            month={month}
            changeStartEndDate={changeStartEndDate}
            startDate={startDate}
            endDate={endDate}
          />
        </React.Fragment>
      );
    });

    return (
      <React.Fragment>
        {/* current day from props: */}
        {day}
        {/* day sets as arrays: */}
        <br />
        {daySets}
      </React.Fragment>
    );
  }
}
