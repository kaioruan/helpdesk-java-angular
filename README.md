# Helpdesk : JAVA - ANGULAR

Esse projeto foi desenvolvido com o intuito de práticar meus conhecimentos utilizando a linguagem Java. A Aplicação foi desenvolvida utilizando no backend Java JDK 17, Maven, Spring Boot, Hibernate para criação da API e banco de dados H2. O frontend foi utilizado o framework Angular e linguagem Typescript juntamente com CSS para estilização.

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos técnicos necessários para a entrega do desafio.

# Descrição:
Aplicação Fullstack onde é possível realizar Cadastros, Atualizações, Leitura e Remoção de Clientes e Técnicos em uma plataforma Helpdesk e também criação de Chamados, Atualização e Visualização.

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

- Utilizar o banco de dados relacional H2 e MySQL;
- Utilizar o ORM Hibernate para trabalhar com o banco de dados H2 e MySQL;
- Construir uma API CRUD com Spring Boot, utilização de conceitos de Arquitetura de Software e regras de negócio;
- Criar rotas para uma API com Hibernate;
- Desenvolver um frontend utilizando Typescript e Angular;
- Estilizar páginas Web com CSS;
- Utilizar docker para criação de ambiente de Desenvolvimento;
   
---

# Funcionamento da aplicação

Para iniciar o projeto, é necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

⚠ **Atenção:** ⚠
- Todos os seguintes comandos devem ser realizados na RAIZ DO PROJETO.

**Utilizando o docker**

```
docker-compose up
```


Após isso, você pode acessar a aplicação através do endereço http://localhost:80/.

---
## Clique na imagem para rodar um video demonstrativo.

[![Watch the video](https://user-images.githubusercontent.com/98183352/227374318-45ff9958-0a34-4487-bbb5-2757ec3ad8f3.png)](https://user-images.githubusercontent.com/98183352/227374367-80900de5-dc5b-4e16-85d8-918b11d1fe22.mp4)

## 📚 Documentação (endpoints BACKEND)


### 👨🏻‍🦱 Clientes
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Busca todos os clientes cadastrados no banco de dados.. | http://localhost:8080/clientes |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
    {
        "id": 6,
        "nome": "Albert Einstein",
        "cpf": "111.661.890-74",
        "email": "einstein@mail.com",
        "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
        "perfis": [
            "CLIENTE"
        ],
        "dataCriacao": "23/03/2023"
    },
    {
        "id": 7,
        "nome": "Marie Curie",
        "cpf": "322.429.140-06",
        "email": "curie@mail.com",
        "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
        "perfis": [
            "CLIENTE"
        ],
        "dataCriacao": "23/03/2023"
    },
    {
        "id": 8,
        "nome": "Charles Darwin",
        "cpf": "792.043.830-62",
        "email": "darwin@mail.com",
        "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
        "perfis": [
            "CLIENTE"
        ],
        "dataCriacao": "23/03/2023"
    },
    {
        "id": 9,
        "nome": "Stephen Hawking",
        "cpf": "177.409.680-30",
        "email": "hawking@mail.com",
        "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
        "perfis": [
            "CLIENTE"
        ],
        "dataCriacao": "23/03/2023"
    },
    {
        "id": 10,
        "nome": "Max Planck",
        "cpf": "081.399.300-83",
        "email": "planck@mail.com",
        "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
        "perfis": [
            "CLIENTE"
        ],
        "dataCriacao": "23/03/2023"
    }
]
```

</details>
<br>
<br>
### 👨🏻‍🦱 Busca um Cliente
| Método   | Funcionalidade                                                                  | URL                           |
| -------- | ------------------------------------------------------------------------------- | ----------------------------- |
| `GET` | Rota para buscar um cliente em específico pelo id. | http://localhost:8080/clientes/6 |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
    "id": 6,
    "nome": "Albert Einstein",
    "cpf": "111.661.890-74",
    "email": "einstein@mail.com",
    "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    "perfis": [
        "CLIENTE"
    ],
    "dataCriacao": "23/03/2023"
}
```

</details>
<br>
<br>

### 👨🏻‍🦱 Criar um novo Cliente
| Método   | Funcionalidade                                                                  | URL                           |
| -------- | ------------------------------------------------------------------------------- | ----------------------------- |
| `POST` | Rota de criação de novo cliente no banco de dados. | http://localhost:8080/clientes |
<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
    "id": 1,
    "nome": "Teste Create new clientes",
    "cpf": "57689739156",
    "email": "testee@gmail.com",
    "senha": "123",
    "perfis": [1]
}
```

</details>

<details>
  <summary>A resposta da requisição é o status 201.</summary>
</details>
<br>

### 👨🏻‍🦱 Clientes
| Método | Funcionalidade                              | URL                              |
| ------ | ------------------------------------------- | -------------------------------- |
| `UPDATE`  | Atualizar informações sobre um cliente. | http://localhost:8080/clientes/7 |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
    {
        "id": 6,
        "nome": "Albert Ferreira",
        "cpf": "111.661.890-74",
        "email": "einstein@mail.com",
        "senha": "123",
        "perfis": [1],
        "dataCriacao": "23/03/2023"
    }
```

</details>

<details>
  <summary>A resposta da requisição é o status 200 com o código abaixo:</summary>
  
  ```json
{
    "id": 6,
    "nome": "Albert Ferreira",
    "cpf": "111.661.890-74",
    "email": "einstein@mail.com",
    "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    "perfis": [
        "CLIENTE"
    ],
    "dataCriacao": "23/03/2023"
}
```
</details>
<br>

### 👨🏻‍🦱 Deletar um Cliente
| Método | Funcionalidade                                | URL                              |
| ------ | --------------------------------------------- | -------------------------------- |
| `DELETE` | Remove um cliente do banco de dados. | http://localhost:8080/tecnicos/4 |

<details>
  <summary>A resposta da requisição é o status 204.</summary>
</details>
<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A mensagem <code>'400 '</code> Cliente possui ordens de serviço e não pode ser deletado!
</details>
<br>

### 👨🏻‍🦱 Técnicos
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Busca todos os tecnicos cadastrados no banco de dados.. | http://localhost:8080/tecnicos |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
    {
        "id": 1,
        "nome": "Kaio Oliveira",
        "cpf": "67376263861",
        "email": "kaio@gmail.com",
        "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
        "perfis": [
            "ADMIN"
        ],
        "dataCriacao": "10/03/2023"
    },
    {
        "id": 2,
        "nome": "Richard Stallman",
        "cpf": "903.347.070-56",
        "email": "stallman@mail.com",
        "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
        "perfis": [
            "CLIENTE"
        ],
        "dataCriacao": "23/03/2023"
    },
    {
        "id": 3,
        "nome": "Claude Elwood Shannon",
        "cpf": "271.068.470-54",
        "email": "shannon@mail.com",
        "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
        "perfis": [
            "CLIENTE"
        ],
        "dataCriacao": "23/03/2023"
    }
]
```

</details>
<br>
<br>
### 👨🏻‍🦱 Buscar um Técnico
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Busca um técnico específico pelo id. | http://localhost:8080/tecnicos/1 |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
    "id": 1,
    "nome": "Kaio Oliveira",
    "cpf": "67376263861",
    "email": "kaio@gmail.com",
    "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    "perfis": [
        "ADMIN"
    ],
    "dataCriacao": "10/03/2023"
}
```

</details>
<br>
<br>

### 👨🏻‍🦱 Criar um novo Técnico
| Método   | Funcionalidade                                                                  | URL                           |
| -------- | ------------------------------------------------------------------------------- | ----------------------------- |
| `POST` | Rota de criação de novo técnico no banco de dados. | http://localhost:8080/tecnicos |
<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
{
    "id": 1,
    "nome": "Teste Create new tecnico",
    "cpf": "87844850604",
    "email": "teste@gmail.com",
    "senha": "123",
    "perfis": [0]
}
```

</details>

<details>
  <summary>A resposta da requisição é o status 201.</summary>
</details>
<br>

### 👨🏻‍🦱 Atualizar Técnico
| Método | Funcionalidade                              | URL                              |
| ------ | ------------------------------------------- | -------------------------------- |
| `UPDATE`  | Atualizar informações sobre um técnico. | http://localhost:8080/tecnicos/1 |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
    {
        "id": 1,
        "nome": "Kaio Ruan",
        "cpf": "67376263861",
        "email": "kaio@gmail.com",
        "senha": "123",
        "perfis": [0],
        "dataCriacao": "10/03/2023"
    }
```

</details>

<details>
  <summary>A resposta da requisição é o status 200 com o código abaixo:</summary>
  
  ```json
{
    "id": 1,
    "nome": "Kaio Ruan",
    "cpf": "67376263861",
    "email": "kaio@gmail.com",
    "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    "perfis": [
        "ADMIN"
    ],
    "dataCriacao": "10/03/2023"
}
```
</details>
<br>

### 👨🏻‍🦱 Deletar um Técnico
| Método | Funcionalidade                                | URL                              |
| ------ | --------------------------------------------- | -------------------------------- |
| `DELETE` | Remove um técnico do banco de dados. | http://localhost:8080/tecnicos/12 |

<details>
  <summary>A resposta da requisição é o status 204.</summary>
</details>
<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A mensagem <code>'400 '</code> Tecnico possui ordens de serviço e não pode ser deletado!
</details>
<br>

### 🗒️ Chamados
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Busca todos os chamados cadastrados no banco de dados. | http://localhost:8080/chamados |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
[
    {
        "id": 1,
        "dataAbertura": "23/03/2023",
        "dataFechamento": null,
        "prioridade": 1,
        "status": 1,
        "titulo": "Chamado 1",
        "observacoes": "Teste chamado 1",
        "tecnico": 1,
        "cliente": 6,
        "nomeTecnico": "Kaio Ruan",
        "nomeCliente": "Albert Ferreira"
    },
    {
        "id": 2,
        "dataAbertura": "23/03/2023",
        "dataFechamento": null,
        "prioridade": 2,
        "status": 0,
        "titulo": "Chamado 2",
        "observacoes": "Teste chamado 2",
        "tecnico": 1,
        "cliente": 7,
        "nomeTecnico": "Kaio Ruan",
        "nomeCliente": "Marie Curie"
    },
    {
        "id": 3,
        "dataAbertura": "23/03/2023",
        "dataFechamento": null,
        "prioridade": 0,
        "status": 2,
        "titulo": "Chamado 3",
        "observacoes": "Teste chamado 3",
        "tecnico": 2,
        "cliente": 8,
        "nomeTecnico": "Richard Stallman",
        "nomeCliente": "Charles Darwin"
    },
    {
        "id": 4,
        "dataAbertura": "23/03/2023",
        "dataFechamento": null,
        "prioridade": 2,
        "status": 0,
        "titulo": "Chamado 4",
        "observacoes": "Teste chamado 4",
        "tecnico": 3,
        "cliente": 8,
        "nomeTecnico": "Claude Elwood Shannon",
        "nomeCliente": "Charles Darwin"
    },
    {
        "id": 5,
        "dataAbertura": "23/03/2023",
        "dataFechamento": null,
        "prioridade": 1,
        "status": 1,
        "titulo": "Chamado 5",
        "observacoes": "Teste chamado 5",
        "tecnico": 2,
        "cliente": 6,
        "nomeTecnico": "Richard Stallman",
        "nomeCliente": "Albert Ferreira"
    },
    {
        "id": 6,
        "dataAbertura": "23/03/2023",
        "dataFechamento": null,
        "prioridade": 0,
        "status": 2,
        "titulo": "Chamado 7",
        "observacoes": "Teste chamado 6",
        "tecnico": 1,
        "cliente": 10,
        "nomeTecnico": "Kaio Ruan",
        "nomeCliente": "Max Planck"
    }
]
```

</details>
<br>
<br>
### 👨🏻‍🦱 Buscar um Chamado
| Método | Funcionalidade                            | URL                        |
| ------ | ----------------------------------------- | -------------------------- |
| `GET`  | Busca um chamado específico pelo id. | http://localhost:8080/chamados/1 |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>

```json
{
    "id": 1,
    "dataAbertura": "23/03/2023",
    "dataFechamento": null,
    "prioridade": 1,
    "status": 1,
    "titulo": "Chamado 1",
    "observacoes": "Teste chamado 1",
    "tecnico": 1,
    "cliente": 6,
    "nomeTecnico": "Kaio Ruan",
    "nomeCliente": "Albert Ferreira"
}
```

</details>
<br>
<br>

### 🗒️ Criar um novo Chamado
| Método   | Funcionalidade                                                                  | URL                           |
| -------- | ------------------------------------------------------------------------------- | ----------------------------- |
| `POST` | Rota de criação de novo chamado no banco de dados. | http://localhost:8080/chamados |
<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
    {
        "prioridade": 1,
        "status": 1,
        "titulo": "Chamado teste create",
        "observacoes": "Priomeiro  teste create",
        "tecnico": 1,
        "cliente": 6
    }
```

</details>

<details>
  <summary>A resposta da requisição é o status 201.</summary>
</details>
<br>

### 🗒️ Atualizar Chamado
| Método | Funcionalidade                              | URL                              |
| ------ | ------------------------------------------- | -------------------------------- |
| `UPDATE`  | Atualizar informações sobre um chamado. | http://localhost:8080/chamados/2 |

<details>
  <summary>A estrutura do <code>body</code> da requisição deverá seguir o padrão abaixo:</summary>

```json
    {
        "dataAbertura": "10/03/2023",
        "prioridade": 1,
        "status": 2,
        "titulo": "Chamado 2teste PUT",
        "observacoes": "Priomeiro 2 teste PUT",
        "tecnico": 1,
        "cliente": 6
    }
```

</details>

<details>
  <summary>A resposta da requisição é o status 200 com o código abaixo:</summary>
  
  ```json
{
    "id": 2,
    "dataAbertura": "23/03/2023",
    "dataFechamento": "23/03/2023",
    "prioridade": 1,
    "status": 2,
    "titulo": "Chamado 2teste PUT",
    "observacoes": "Priomeiro 2 teste PUT",
    "tecnico": 1,
    "cliente": 6,
    "nomeTecnico": "Kaio Ruan",
    "nomeCliente": "Albert Ferreira"
}
```
</details>
<br>


