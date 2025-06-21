import { transactions } from "../services/transacaoService"
import lodash from "lodash"

export class EstatisticaService {
  getAllEstatistica() {
    const segundos =  60 // altere os segundos 
    const milissegundos = segundos * 1000 
    const agora = Date.now()
    const ultimos60s = transactions.filter(trans => {
      const dataHora = new Date(trans.dataHora).getTime()
      return agora - dataHora <= milissegundos
    });

    const valoresTransacao = lodash.map(ultimos60s, "valor")

    if (valoresTransacao.length === 0) {
      return {
        count: 0,
        sum: 0,
        avg: 0,
        min: 0,
        max: 0
      };
    }

    return {
      count: valoresTransacao.length,
      sum: lodash.sum(valoresTransacao),
      avg: lodash.mean(valoresTransacao),
      min: lodash.min(valoresTransacao),
      max: lodash.max(valoresTransacao)
    }
  }
}