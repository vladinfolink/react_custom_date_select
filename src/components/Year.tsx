import * as React from 'react';

interface Props {
  year: number;
  changeNow: any;
}
interface State {}

export default class Year extends React.Component<Props, State> {
  state = {};

  // insert 8 previous & 8 after years with onclick event calling  changeNow with value

  render() {
    const { year } = this.props;
    const btnStyle = {borderRadius: '12px', border: '1px solid black', width: '12%'};

    return (
      <div>
        <button
          onClick={() => {
            // change year, keep month & day
            this.props.changeNow(year - 1);
          }}
          style={btnStyle}
        >
          {'<<'}
        </button>
        <div>{year}</div>
        <button
          onClick={() => {
            // change year, keep month & day
            this.props.changeNow(year + 1);
          }}
          style={btnStyle}
        >
          {'>>'}
        </button>
      </div>
    );
  }
}
