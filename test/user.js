var utils = require('./utils');
var expect = require("chai").expect;
var userModel = require("../models/user.js");
var User = userModel.user;

describe('Users: models', function () {
  describe('#create()', function () {
    it('should create a new User', function (done) {
      // Create a User object to pass to User.create()
      var u = {
        name: 'Juan Palote',
        password: 'asdf'
      };
      User.create(u, function (err, createdUser) {
        // Confirm that that an error does not exist
        console.log(err)
        expect(err).to.not.exist

        // verify that the returned user is what we expect
        expect(createdUser.name).to.be.eq('Juan Palote');

        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });
});
