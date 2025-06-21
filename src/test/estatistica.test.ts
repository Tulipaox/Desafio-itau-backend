import request from 'supertest'
import { app } from '../server'


describe('GET /estatistica', () => {
  it('deve retornar estatísticas com status 200', async () => {
    const response = await request(app).get('/estatistica')
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('count')
    expect(response.body).toHaveProperty('sum')
    expect(response.body).toHaveProperty('avg')
    expect(response.body).toHaveProperty('min')
    expect(response.body).toHaveProperty('max')
  })
})
