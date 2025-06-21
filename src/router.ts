import { Router } from "express"
import { Transacao } from "./controller/transacao"
import { Estatistica } from "./controller/estatistica"

const router = Router()

const transcation = new Transacao()
const estatistica = new Estatistica()

/**
 * @swagger
 * /transacao:
 *   post:
 *     summary: Cria uma nova transação
 *     responses:
 *       201:
 *         description: Sucesso
 */
router.post("/transacao", transcation.createTransaction)

/**
 * @swagger
 * /estatistica:
 *   get:
 *     summary: Retorna estatísticas das últimas transações
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/estatistica", estatistica.getEstatistica)


/**
 * @swagger
 * /transacao:
 *   delete:
 *     summary: Remove todas as transações
 *     tags:
 *       - Transações
 *     responses:
 *       204:
 *         description: Transações removidas com sucesso
 */
router.delete("/transacao", transcation.deleteTransacao)


/**
 * @swagger
 * /status:
 *   get:
 *     summary: Verifica se a API está online
 *     tags:
 *       - Monitoramento
 *     responses:
 *       200:
 *         description: API está saudável
 */
router.get("/status", async (req, res, next) => {
  try {
    res.json({ message: "ok" });
  } catch (error) {
    next(error);
  }
});

export = router;