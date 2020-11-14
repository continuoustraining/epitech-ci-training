const request = require('supertest')
const app = require('../../server')
describe('Hello manager', () => {
  it('should answer to the manager', async () => {
    console.log(process.env)
    const res = await request(app)
      .get('/manager')
    expect(res.statusCode).toEqual(200)
  })
})