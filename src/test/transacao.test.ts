import { TransacaoService } from '../services/transacaoService'

test('deve adicionar uma transação válida', () => {
  const service = new TransacaoService()
  const body = { valor: 100, dataHora: new Date() }
  expect(() => service.validateTransaction(body)).not.toThrow()
})
