/**
 * Main application routes
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {

  // hiep module

  //text example
  // app.get('/', function (req, res) {
  //     res.send('Hello World!');
  // });
  //
  // app.post('/hello', function (req, res) {
  //   res.send('Got a POST request');
  // });
  //
  // app.put('/user', function (req, res) {
  //   res.send('Got a PUT request at /user');
  // });
  //
  // app.delete('/user', function (req, res) {
  //   res.send('Got a DELETE request at /user');
  // });
  //
  // app.get('/index', function (req, res) {
  // res.render('index', { title: 'Hey', message: 'Hello there!'});
  // });

  // Insert routes below

  //app.use('/api/games', require('./api/game'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(_errors2.default[404]);
  console.log(_errors2.default[404]);
  //    .get((req, res) => {
  //       res.sendFile(path.resolve(app.get('appPath') + '/404.html'));
  //     });

  // All other routes should redirect to the index.html
  app.route('/*').get(function (req, res) {
    res.sendFile(__dirname + '/' + '/public/index.html');
  });
};

var _errors = require('./components/errors');

var _errors2 = _interopRequireDefault(_errors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=routes.js.map
