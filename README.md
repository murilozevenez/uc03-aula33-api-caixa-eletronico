# API Caixa Eletrônica

Aplicação criada durante as aulas do curso 
de Programador Web do Senac Pato Branco.

Este programa sumula as seguintes
operações de um caixa eletrônico:

- [x] Rota de boas vindas
- [ ] Rota de Extrato
- [ ]Rota de Saldo
- [ ] Rota de Depósito
- [ ] Rota de Saque

Não está contemplando o acesso via cartão e
senha e nem o salvamento de informações em
banco de dados.

## Regras de negócio

Na rota de depósito, vai receber a conta por parametro e o valor pelo corpo
da requisição, validando que o valor precisa ser um número inteiro se for
dinheiro e qualquer valor se for cheque. Não deve permitir depósito de
valores negativos.

### GET /conta/:numero_conta
A tela de boa vindas irá mostrar o nome do cliente, número da conta e 
saldo atual, baseado no número da conta passado por parâmetro.

### GET /conta/:numero_conta/extrato
Na tela de extrato, irá retornar uam lista de todas as transações e saldo 
atual, baseado no número da conta passado por parâmetro.

### GET /conta/:numero_conta/saldo
Na rota de saldo, irá mostrar o saldo atual calculado a partir das
trasações, baseado no número da conta passado por parâmetro.
### POST /conta/:numero_conta/deposito

Exemplo do corpo de requisição quando for um deposito:

```json
{
    "valor": 100,
    "tipo": "Dinheiro"
}
```
Exemplo do corpo de requisição quando for um saque:

```json
{
    "valor": 100.02,
    "tipo": "Saque"
}
```

Na rota de depósito, vai receber a conta por parametro e o valor pelo corpo
da requisição, validando que o valor precisa ser um número inteiro se for
dinheiro e qualquer valor se for cheque. Não deve permitir depósito de
valores negativos.

### POST /conta/:numero_conta/saque
Na rota de saque deve receber  a conta por parametro e o valor pelo corpo da requisicao validando que o valor precisa ser um numero inteiro e precisa ser maior do que zero.

Exemplo do corpo de requisição quando for um saque:

```json
{
    "valor": 100
}
```

