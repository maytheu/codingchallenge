'use strict';

require('dotenv').config({ path: `${__dirname}/test.env` });

const request = require('supertest');

jest.mock('../src/config');

const {
  API: { KEY },
} = require('../src/config');

describe('User Resource', () => {
  let database = null;
  let server = null;

  let agent = null;

  beforeAll(async () => {
    database = require('./helpers/database');
    await database.start();
    server = require('../src/server');
    const app = await server.start();
    agent = request.agent(app);
    agent.set({ 'x-api-key': KEY });
  });

  afterAll(async () => {
    await server.stop();
    await database.stop();
  });

  describe('List Operation - GET /users', () => {
    test('should return emptry array', async () => {
      const res = await agent.get('/users');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([]);
    });

    test('Should not autheticate user without x-slug header', async () => {
      const res = await agent.get('/users/me');
      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe('Missing user slug');
    });

    test('Should return the decoded string from x-slug (senior-candidate)', async () => {
      const res = await agent.get('/users').set('x-slug', Buffer.from('senior-candidate').toString('base64'));
      expect(res.statusCode).toBe(200);
    });

    test('Should return 404 if decoded string not found)', async () => {
      const res = await agent.get('/users/me').set('x-slug', Buffer.from('senior-candidate').toString('base64'));
      expect(res.statusCode).toBe(404);
      expect(res.body.message).toBe('Not Found');
    });
  });
});
