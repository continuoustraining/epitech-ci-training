const request = require('supertest')
const app = require('../../server')

describe('Hello manager', () => {
  it('should answer to the manager', async () => {
    const res = await request(app)
      .get('/hello')
      .set({ 'role': 'manager'})
    expect(res.statusCode).toEqual(302)
    expect(res.headers.location).toEqual('/manager')
  })
})