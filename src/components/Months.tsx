import * as React from 'react';
// this month + next month
interface Props {
  month: number;
  changeNow: any;
}

export default class Months extends React.Component<Props, {}> {
  constructor ( props: Props ) {
    super( props );
    this.returnMnthStr = this.returnMnthStr.bind( this );
  }

  returnMnthStr ( month: number ) {
    const mArr: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    return mArr[ month ];
  }



  render () {
    const { month } = this.props;

    const btnStyle = {borderRadius: '12px', border: '1px solid black', width: '12%'};

    return (
      <div>
        <button
          onClick={() => {
            return this.props.changeNow( undefined, month - 2 );
          }}
          style={btnStyle}
        >
          {'<'}
        </button>

        <div>{this.returnMnthStr( month )}</div>

        <div>{this.returnMnthStr( month + 1 ) || 'January'}</div>

        <button
          onClick={() => {
            return this.props.changeNow( undefined, month + 2 )
          }}
          style={btnStyle}
        >
          {'>'}
        </button>
      </div>
    );
  }
}
