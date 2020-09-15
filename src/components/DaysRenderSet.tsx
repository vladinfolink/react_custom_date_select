import * as React from "react";

export interface Props {
  daySet: Date[];
  month: number;
  day: number;
  changeStartEndDate: any;
  startDate: null | Date;
  endDate: null | Date;
}
export default function DaysRenderSet(props: Props) {
  const generatePlaceholders = (day: Date) => {
    return day.getDate() === 1
      ? new Array(day.getDay())
          .fill(
            <span
              style={{
                display: "inline-block",
                cursor: "pointer",
                height: "32px",
                width: "32px"
              }}
            />
            // solve duplicate keys:
          )
          .map(function(item, i) {
            return (
              <span style={{ marginLeft: `${i === 0 && "8px"}` }} key={i}>
                {item}
              </span>
            );
          })
      : null;
  };

  const getDayName = (nr: number) => {
    return (
      <span
        style={{
          display: "inline-block",
          position: "absolute",
          fontSize: "10px",
          marginTop: "16px",
          marginLeft: "-8px"
        }}
      >
        {["S", "M", "T", "W", "T", "F", "S"][nr]}
      </span>
    );
  };

  const daySetToRender = props.daySet.map(function(day, i) {
    const dayLocale = day.toLocaleDateString(); // full date
    const placeHolders = generatePlaceholders(day);
    const currentDateLocale = new Date().toLocaleDateString();
    const startDate = props.startDate || null;
    const endDate = props.endDate || null;
    return (
      <React.Fragment key={i}>
        {placeHolders}
        <span
          onClick={props.changeStartEndDate.bind(null, day)}
          style={{
            display: "inline-block",
            cursor: "pointer",
            height: "32px",
            minWidth: "32px",
            textAlign: "center",
            backgroundColor:
              dayLocale === currentDateLocale
                ? "lightblue"
                : `  ${
                    (!!startDate &&
                      !!endDate &&
                      day >= startDate &&
                      day <= endDate &&
                      "#5FBA7D") ||
                    (startDate && startDate.getTime() === day.getTime())
                      ? "#5FBA7D"
                      : "white"
                  }`
          }}
        >
          {(function() {
            const dayOfMonthAsNumber = dayLocale.split("/")[1];
            return dayOfMonthAsNumber.length === 1 ? (
              <>
                {" "}
                {getDayName(day.getDay())}
                {dayOfMonthAsNumber}{" "}
              </>
            ) : (
              <>
                &nbsp; {getDayName(day.getDay())} {dayOfMonthAsNumber}{" "}
              </>
            );
          })()}
        </span>
        {day.getDay() === 6 && <br />}
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <br />
      <span
        style={{
          display: `inline-block`,
          width: "51%",
          margin: "0 auto"
        }}
      >
        {daySetToRender}
      </span>{" "}
      <br />
    </React.Fragment>
  );
}
