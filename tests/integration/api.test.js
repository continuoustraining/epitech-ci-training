const request = require('supertest')
const app = require('../../server')
describe('Hello manager', () => 
{
  it('should answer to the manager', async () => 
  {
    await request(app)
      .get('/hello')
      .set({ 'role': 'employee'})
      .expect(302)
      .expect('Location', '/employee')
  })
})