'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newGame;

describe('Game API:', function () {

  describe('GET /api/games', function () {
    var games;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/games').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        games = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      games.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/games', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/games').send({
        name: 'New Game',
        info: 'This is the brand new game!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newGame = res.body;
        done();
      });
    });

    it('should respond with the newly created game', function () {
      newGame.name.should.equal('New Game');
      newGame.info.should.equal('This is the brand new game!!!');
    });
  });

  describe('GET /api/games/:id', function () {
    var game;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/games/' + newGame._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        game = res.body;
        done();
      });
    });

    afterEach(function () {
      game = {};
    });

    it('should respond with the requested game', function () {
      game.name.should.equal('New Game');
      game.info.should.equal('This is the brand new game!!!');
    });
  });

  describe('PUT /api/games/:id', function () {
    var updatedGame;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/games/' + newGame._id).send({
        name: 'Updated Game',
        info: 'This is the updated game!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedGame = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedGame = {};
    });

    it('should respond with the updated game', function () {
      updatedGame.name.should.equal('Updated Game');
      updatedGame.info.should.equal('This is the updated game!!!');
    });
  });

  describe('DELETE /api/games/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/games/' + newGame._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when game does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/games/' + newGame._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=game.integration.js.map
