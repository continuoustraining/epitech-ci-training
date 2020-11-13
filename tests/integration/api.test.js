const request = require('supertest')
const app = require('../../server')

describe('Hello manager', () => {
  it('should answer to the manager', async () => {
    
    await request(app)
      .get('/hello')
      .set({'Role': 'manager'})
      .expect(302)
      .expect("Location", "/manager")
      
    // expect(res.statusCode).toEqual(302) /*global expect*/
    // expect(res.headers.location).toEqual("/manager")
  })
})