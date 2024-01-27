const express = require('express')
const { randomUUID } = require('crypto')

const app = express()
const port = 5000

app.use(express.json())

let contas = [
  {
    "id": randomUUID(),
    "nome": "Davi",
    "numero_conta": "12345-6",
    "agencia": "1234",
    "saldo": 0,
  },
  {
    "id": randomUUID(),
    "nome": "Murilo",
    "numero_conta": "5432-1",
    "agencia": "1234",
    "saldo": 0,
  },
  {
    "id": randomUUID(),
    "nome": "Eberton",
    "numero_conta": "1313-0",
    "agencia": "1234",
    "saldo": 0,
  },
]

app.get("/status", (request, response) => {
  response.send({ "status": "ok" })
})

// Rota Boas Vindas 
app.get('/conta/:numero_conta', (request, response) => {
  const { numero_conta } = request.params;

  const contaEncontrada = contas.find(
    (conta) => conta.numero_conta === numero_conta
  )

  if (contaEncontrada) {
    // retornar os dados da conta
    response.send({
      "nome": contaEncontrada.nome,
      "numero_conta": contaEncontrada.numero_conta,
      "saldo": contaEncontrada.saldo
    })
  } else {
    response.status(404).send({
      "error": "Conta não encontrada"
    })
  }
});


// Rota do Saldo

app.get('/conta/:numero_conta/saldo', (request, response) => {
  const { numero_conta } = request.params;

  const contaEncontrada = contas.find(
    (conta) => conta.numero_conta === numero_conta
  )

  if (contaEncontrada) {
    // retornar os dados da conta
    response.send({
      "saldo": contaEncontrada.saldo
    })
  } else {
    response.status(404).send({
      "error": "Conta não encontrada"
    })
  }
});

// Rota deposito
app.post('/conta/:numero_conta/deposito', (request, response) => {
  const {numero_conta} = request.params;

  const { valor, tipo} =  request.body;

  // validar se a conta existe
  const contaEncontrada = contas.find(
    (conta) => conta.numero_conta === numero_conta
  )

  if (!contaEncontrada){
    response.send({
      "error": "Conta não encotrada"
    })
  }
  // validar se  o valor e positivo
  if (!valor || valor <= 0){
    response.send({
      "error": "Valor Invalido"
    })
  }

  // e validar qual o tipo de deposito (Dinheiro ou cheque)
  if (!tipo | typeof tipo !== String){
    {
      response.send({
        "error": "Tipo Invalido"
      })
    }
  } else if (tipo.toUpperCase() === 'DINHEIRO'){
    // TODO - Validar se é inteiro
  }

})


app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
})