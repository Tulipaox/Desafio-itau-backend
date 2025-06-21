import express from "express"
import router from "./router"
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

export const app = express()

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'API de Transações', version: '1.0.0' },
  },
    apis: ['./src/router.ts', './src/controller/*.ts'],
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(express.json())
app.use("/", router)

const PORT = 3000
app.listen(PORT, () =>{ console.log(`Servidor iniciado na porta http://localhost:${PORT}`)})

export default app