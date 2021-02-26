import express from 'express'
const app = express()

/**
 * GET = Buscar
 * POST = Salvar
 * DELETE = Deletar
 * PUT = Alterar
 * PATCH = Alterar algo especifico
 */


 app.get('/', (request, response) => {

  return response.json({message: 'eai parceiro'})
 })

app.listen(3333, () => console.log('Server is Running!'))
