/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var _game = require('../api/game/game.model');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_game2.default.find({}).remove().then(function () {
  _game2.default.create({
    name: 'Halo 5',
    platform: 'Xbox One',
    genre: 'Shooter'
  }, {
    name: 'Fallout 4',
    platform: 'PlayStation 4',
    genre: 'Role-Playing'
  }, {
    name: 'Super Smash Bros.',
    platform: 'Wii U',
    genre: 'Fighting'
  }, {
    name: 'Pokemon X',
    platform: '3DS',
    genre: 'Role-Playing'
  }, {
    name: 'Halo 4',
    platform: 'Xbox 360',
    genre: 'Shooter'
  });
});
//# sourceMappingURL=seed.js.map
