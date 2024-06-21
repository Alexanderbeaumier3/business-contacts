const request = require('supertest');
const app = require('./app'); // Adjust the path as necessary to import your Express app

describe('GET /contacts', () => {
  it('should return a list of contacts and a status code of 200', async () => {
    const response = await request(app).get('/contacts');
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body).toEqual([
      { name: 'Jane', email: 'jane@example.com', phone: '555-555-5555', department: 'Engineering', position: 'Software Engineer' },
      { name: 'John', email: 'john@example.com', phone: '555-555-5555', department: 'IT', position: 'Network Admin' },
      { name: 'Jill', email: 'jill@example.com', phone: '555-555-5555', department: 'Marketing', position: 'Marketing Manager' },
      { name: 'Jack', email: 'jack@example.com', phone: '555-555-5555', department: 'HR', position: 'HR Manager' },
      { name: 'Joe', email: 'joe@example.com', phone: '555-555-5555', department: 'Sales', position: 'Sales Manager' },
      { name: 'Josephine', email: 'josephine@example.com', phone: '555-555-5555', department: 'Finance', position: 'Finance Manager' }
    ]);
  });
});