'use strict'

module.exports = async function (fastify, opts) {

  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
  
  fastify.get('/:id', async function (request, reply) {
    return request.params
  })

}
