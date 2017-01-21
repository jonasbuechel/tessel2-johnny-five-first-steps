const five = require('johnny-five');
const Tessel = require('tessel-io');

const board = new five.Board({
  io: new Tessel(),
});
board.on('ready', () => {
  const leds = new five.Leds(['a2', 'a3', 'a4', 'a5', 'a6', 'a7']);
  var index = 0; // eslint-disable-line no-var
  var step = 1;  // eslint-disable-line no-var

  board.loop(50, () => {
    leds.off();
    leds[index].on();
    index += step;
    if (index === 0 || index === leds.length - 1) {
      step *= -1;
    }
  });
});
