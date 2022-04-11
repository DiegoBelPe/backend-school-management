const supertest = require('supertest');

const app = require('../../app');

const request = supertest(app);

describe('task Endpoints', () => {
  describe('GET/tareas', ()=>{
    test('should return 200 OK', async () => {
      const response = await request.get('/api/tareas');
      expect(response.statusCode).toEqual(200);
    });

  })
});

