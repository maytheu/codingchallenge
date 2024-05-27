'use strict';

const {
  Errors: { BadRequestError },
} = require('finale-rest');

const {
  API: {
    HEADERS: { X_SLUG },
    SLUGS: { MYSELF },
  },
} = require('../../config');

module.exports = (req, res, context) => {
  const slug = req.header(X_SLUG) ;
  if (!slug) throw new BadRequestError('Missing user slug');
  const user = Buffer.from(slug, 'base64').toString('utf-8')
  req.params.slug = user
  return context.continue;
};
