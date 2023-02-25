# Testes no Backend II - Exercício

<strong>A partir dessa semana os exercícios voltam a ser independentes. Não se preocupe em centralizá-los em um mesmo repo.</strong>
<br><br>
Utilize esse template para criar um repo pessoal na sua conta e trabalhe nele.

## Enunciado

Temos nesse repo o gabarito das atividades feitas em aula. Os mocks já estão implementados e os testes de getAll, signup e login também.<br>
Agora você deve implementar um novo endpoint na camada UserBusiness e testar sua solução!

### Exercício 1

Crie os seguintes endpoints:
- <strong>DELETE /users/:id</strong> que deleta um user específico
- <strong>GET /users/:id</strong> que busca por um user específico e retorna todas as suas informações no modelo de regra de negócio (UserModel)

Ambos devem ser protegidos (requer token).

### Exercício 2

Crie pelo menos 1 teste unitário de sucesso para o endpoint implementado DELETE /users/:id.

### Exercício 3

Crie pelo menos 1 teste unitário de sucesso para o endpoint implementado GET /users/:id.

### Extra

Gere a cobertura dos testes!
