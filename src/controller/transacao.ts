import { Handler } from "express"
import { TransacaoService } from "../services/transacaoService"
import { BadRequestError, UnprocessableEntityError } from "../error/error-http"

const service = new TransacaoService()

export class Transacao {

    createTransaction: Handler = (req, res) => {
        try {
            service.validateTransaction(req.body)
            res.status(201).end()
        } catch (err) {
            if (err instanceof BadRequestError) {
                res.status(400).end()
            } else if (err instanceof UnprocessableEntityError) {
                res.status(422).end()
            } else {
                res.status(500).end()
            }
        }

    }

    deleteTransacao: Handler = (req, res) => {
        service.deleteTransactions()
        res.status(204).end()
    }
}