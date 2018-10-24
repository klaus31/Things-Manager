import {ml} from './../../config/begin-config.js';
import {DataType} from "./DataType.js";

export class DataTypeProvider {

  constructor() {
  }

  static getDatatypes() {
    return [
      new DataType('text', ml.get('MOrsQFp4QQJSAZYf'), () => ml.get('54r0a5Fb+W4Zp3zZ')),
      new DataType('date', ml.get('/pmIay7RrtL2dlDW'), () => moment().format()),
      new DataType('time', ml.get('rvtTVH47/aRmozi3'), () => moment().format()),
      new DataType('datetime-local', ml.get('1e2T7VYBUsFb/oTQ'), () => moment().format()),
      new DataType('week', ml.get('qJd+kVTuL0r16QCV'), () => moment().format()),
      new DataType('month', ml.get('wWEfQ9Vzyj4A1zn/'), () => moment().format()),
      new DataType('number', ml.get('Z5jr4k1ZQtrrMTVH'), () => 0),
      new DataType('range', ml.get('jtxttIOvXb4C24io'), () => 50),
      new DataType('color', ml.get('1VWmPdYLJNvxUFZZ'), () => '#dddddd'),
      new DataType('url', ml.get('OP9jnIGR7LnjuzZL'), () => 'http://???'),
      new DataType('geodata', ml.get('OP9jnIGR7LnjuzZM'), () => new Geodata()),
      new DataType('checkbox', ml.get('P9SHV5LhUFoTqLam'), () => ''),
      new DataType('rating', ml.get('9SLfymF38SsASuza'), () => '')
    ];
  }
}