import { BadRequestError, UnprocessableEntityError } from "../error/error-http"

interface ValidTransaction {
  valor: number
  dataHora: Date
}
export const transactions: ValidTransaction[] = []


export class TransacaoService {

  validateTransaction(body: ValidTransaction) {
    if (
      !body ||
      typeof body.valor !== "number" ||
      body.dataHora === undefined
    ) {
      throw new BadRequestError()
    }

    const now = new Date()
    const dataHora = new Date(body.dataHora);

    if (isNaN(dataHora.getTime())) {
      throw new BadRequestError()
    }

    if (dataHora > now) {
      throw new UnprocessableEntityError("Futuro não permitido");
    }

    if (body.valor < 0) {
      throw new UnprocessableEntityError("Valor negativo");
    }


   transactions.push({ valor: body.valor, dataHora })
   return transactions
  }

  deleteTransactions(): void {
    transactions.length = 0
  }
}
