class DataTypeProvider {

  constructor() {
  }

  static getDatatypes() {
    return [
      new DataType('text', 'Text', () => 'New'),
      new DataType('date', 'Date', () => moment(new Date()).format()),
      new DataType('time', 'Time', () => moment(new Date()).format()),
      new DataType('datetime-local', 'Date and Time', () => moment(new Date()).format()),
      new DataType('week', 'Week', () => moment(new Date()).format()),
      new DataType('month', 'Month', () => moment(new Date()).format()),
      new DataType('number', 'Number', () => 0),
      new DataType('range', 'Range', () => 0),
      new DataType('color', 'Color', () => '#dddddd'),
      new DataType('url', 'URL', () => 'http://???'),
      new DataType('checkbox', 'Yes or No', () => ''),
    ];
  }
}