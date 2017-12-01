'use strict';

module.exports = {
  generateRandomData
};


const Faker = require('faker');

function generateRandomData(userContext, events, done) {

  const email = Faker.internet.exampleEmail();
  const content = Faker.lorem.paragraph();

  userContext.vars.email = email;
  userContext.vars.content = content;

  return done();
}
