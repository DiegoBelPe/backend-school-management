const supertest = require('supertest');

const app = require('../../app');

const request = supertest(app);

describe('task Endpoints', () => {
  describe('GET/tareas', () => {
    test('should return 200 OK', async () => {
      const response = await request.get('/api/tareas');
      expect(response.statusCode).toEqual(200);
    });
    test('should return an array', async () => {
      const response = await request.get('/api/tareas');
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  describe('GET/tareas/:id', () => {
    test('should return 200 OK', async () => {
      const id = '6246391d6915ca88d60f988c';
      const response = await request.get(`/api/tareas/${id}`);
      expect(response.statusCode).toEqual(200);
    });
    test('should respond with an array of user and with date specifics GET/:id', async () => {
      const id = '6246391d6915ca88d60f988c';
      const res = await request.get(`/api/tareas/${id}`);
      expect(res.body).toEqual(expect.objectContaining({
        course: expect.any(String),
        description: expect.any(String),
        observation: expect.any(String),
        endDate: expect.any(String),
      }));
    });
  });
});
