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
    test('should return 200 id OK', async () => {
      const id = '6256fb5e810952aff49d8eb9';
      const response = await request.get(`/api/tareas/${id}`);
      expect(response.statusCode).toEqual(200);
    });
    test('should respond with a 404 status code if search for id GET/:id', async () => {
      const id = '62461f4e8f8f8f8f8f8f8f8f';
      const res = await request.get(`/api/tareas/${id}`);
      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({ message: 'tarea no encontrada' });
    });
  });
  describe('POST/tareas', () => {
    test('should return 201 created task ', async () => {
      const tarea = {
        course: 'tarea de prueba',
        description: 'descripcion de prueba',
        observations: 'pendiente',
        endDate: '2020-05-05',
      };
      const response = await request.post('/api/tareas').send(tarea);
      expect(response.statusCode).toEqual(201);
    });
    test('should return 400 bad request task', async () => {
      const tarea = {
        course: '',
        description: '',
        observations: '',
        endDate: '',
      };
      const response = await request.post('/api/tareas').send(tarea);
      expect(response.statusCode).toEqual(400);
      expect(response.body).toEqual({ message: 'Error al crear la tarea' });
    });
  });
  describe('PATCH/tareas/:id', () => {
    test('should return 200 ok', async () => {
      const id = '62570d9ad45eba1bd83f06af';
      const tarea = {
        course: 'tarea de prueba1',
      };
      const response = await request.patch(`/api/tareas/${id}`).send(tarea);
      expect(response.statusCode).toEqual(200);
    });
    test('should return 404 not found', async () => {
      const id = '62461f4e8f8f813g0';
      const tarea = {
        course: 'tarea de prueba falla',
      };
      const response = await request.patch(`/api/tareas/${id}`).send(tarea);
      expect(response.statusCode).toEqual(400);
      expect(response.body).toEqual({ message: 'Error al actualizar la tarea' });
    });
  });
  describe('DELETE/tareas/:id', () => {
    test('should return 200 ok', async () => {
      const id = '62570d9ad45eba1bd83f06af';
      const response = await request.delete(`/api/tareas/${id}`);
      expect(response.statusCode).toEqual(200);
    });
    test('should return 404 not found', async () => {
      const id = '62461f4e8f8f813g0';
      const response = await request.delete(`/api/tareas/${id}`);
      expect(response.statusCode).toEqual(400);
      expect(response.body).toEqual({ message: 'Error al eliminar la tarea' });
    });
  });
});
