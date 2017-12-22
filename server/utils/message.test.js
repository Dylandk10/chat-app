var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
describe('generateLocation', () => {
  it('Should generate correct location object', () => {
    var from = 'Man';
    var lat = 15;
    var long = 19;
    var url = 'https://www.goodle.com/maps?q=15,19';
    var message = generateLocationMessage(from, lat, long);

    expect(message).toInclude({from, url});
  });
});
