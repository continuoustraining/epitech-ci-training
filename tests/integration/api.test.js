const request = require('supertest')
const app = require('../../server')
describe('Hello manager', () => {
  it('should answer to the manager', async () => {
    const res = await request(app)
      .get('/')
      .set({ 'role': ''})
    expect(res.statusCode).toEqual()
  })
})