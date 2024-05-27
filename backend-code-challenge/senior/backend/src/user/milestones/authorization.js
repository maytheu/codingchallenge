'use strict';

const {
  Errors: { ForbiddenError },
} = require('finale-rest');

const {
  API: {
    KEY,
    HEADERS: { X_API_KEY },
  },
} = require('../../config');

module.exports = (req, res, context) => {
  const key = req.header(X_API_KEY)
  if(!key) throw new ForbiddenError('Wrong API key')
  return context.continue;
};
