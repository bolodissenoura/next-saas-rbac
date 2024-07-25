import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'

import {
  //   jsonSchemaTrasnform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createAccount } from './routes/auth/create-account'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(createAccount)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTPS server running!')
})
