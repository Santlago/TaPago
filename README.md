# TaPago
API do projeto TaPago - Controle de Gastos Pessoais

## Tarefas

- [ ] CRUD de Categorias
- [ ] CRUD de Movimentações
- [ ] CRUD de Usuários
- [ ] Dashboard

## Documentação da API

### Endpoint
- [Listar Todas as Categorias](#listar-todas-as-categorias)
- [Cadastrar Categoria](#cadastrar-categoria)
- [Detalhes da Categoria](#detalhes-da-categoria)
- [Apagar Categoria](#apagar-categoria)
- [Atualizar Categoria](#atualizar-categoria)

### Listar Todas as Categorias

`GET` /categoria

Retorna um aeeay com todas as categorias cadastradas.

#### Exemplo de Resposta

```js
[
    {
        "id": 1,
        "nome": "Alimentação",
        "icone": "fast-food"
    }
]
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Os dados ds categorias foram retornados com sucesso|
|401|Acesso negado. Você deve se autenticar|
---

### Cadastrar Categoria

`POST`  /categoria

Cria uma nova categoria com os dados enviados no corpo da requisição.

#### Corpo da Requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|nome|string|✅|Um nome curto para a categoria.|
|icone|string|❌|Nome do icone de acordo com a biblioteca do Material Icons|

```js
{
    "nome": "Alimentação",
    "icone": "fast-food"
}
```

#### Exemplo de Resposta

```js
[
    {
        "id": 1,
        "nome": "Alimentação",
        "icone": "fast-food"
    }
]
```

#### Códigos de Status

|código|descrição|
|------|---------|
|201|Categoria cadastrada com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
|401|Acesso negado. Você deve se autenticar|
---

### Detalhes da Categoria

`GET` /categoria/`{id}`

Retorna os detalhes da categoria com o `id` informado com o parâmetro da path

#### Exemplo de Resposta

```js
// requisição para /categoria/1
{
    "id": 1,
    "nome": "Alimentação",
    "icone": "fast-food"
}
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Os dados ds categoria foram retornados com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe categoria com o `id` informado|
---

### Apagar Categoria

`DELETE` /categoria/`{id}`

Apaga a categoria como o `id` especificado no parâmetro de path

|código|descrição|
|------|---------|
|204|Categoria foi apagada com sucesso|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe categoria com o `id` informado|
---

### Atualizar Categoria

`PUT` /categoria/`{id}`

Altera os dados da categoria especificada no `id`, utilizando as informações enviadas no corpo da requisição.

#### Corpo da Requisição

|campo|tipo|obrigatório|descrição|
|-----|----|:-----------:|---------|
|nome|string|✅|Um nome curto para a categoria.|
|icone|string|✅|Nome do icone de acordo com a biblioteca do Material Icons|

```js
{
    "nome": "Alimentação",
    "icone": "fast-food"
}
```

#### Exemplo de Resposta

```js
[
    {
        "id": 1,
        "nome": "Alimentação",
        "icone": "fast-food"
    }
]
```

#### Códigos de Status

|código|descrição|
|------|---------|
|200|Categoria alterada com sucesso|
|400|Dados enviados são inválidos. Verifique o corpo da requisição|
|401|Acesso negado. Você deve se autenticar|
|404|Não existe categoria com o `id` informado|
---