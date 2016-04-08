/**
 * Game model events
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require('events');

var _game = require('./game.model');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
GameEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _game2.default.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc) {
    GameEvents.emit(event + ':' + doc._id, doc);
    GameEvents.emit(event, doc);
  };
}

exports.default = GameEvents;
//# sourceMappingURL=game.events.js.map
