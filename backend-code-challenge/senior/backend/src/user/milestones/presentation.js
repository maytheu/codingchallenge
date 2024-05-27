'use strict';

const axios = require('axios');

const {
  STAR_WARS_API: {
    BASE_URL,
    ENDPOINTS: { PEOPLE },
  },
} = require('../../config');

module.exports = async (req, res, context) => {
  try {
    const { favourites } = context.instance.dataValues;
    if (!favourites.length) {
      context.instance.dataValues.favouritesDetails = { };
      return context.continue;
    }
    const favouritesData = await Promise.all(
      favourites.map(async (favId) => {
        const resp = await axios.get(`${BASE_URL}/${PEOPLE}/${favId}`);
        return resp.data;
      }),
    );
    context.instance.dataValues.favouritesDetails = favouritesData;
    return context.continue;
  } catch (error) {
    return error;
  }
};
