# desafio-nginx-node-mysql
Desafio do curso FullCycle 3.0, trabalhando com docker.

### Descrição do desafio
>  A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela

__O retorno da aplicação node.js para o nginx deverá ser:__
```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

### Requisitos
1. Gerar o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

  
:zap: ### Subindo nginx, node e mysql no dokcer local :zap:
```
git clone https://github.com/leobower/nginx-node-mysql.git

docker-compose up -d --build
```
<br/>
### Chamando o NGINX pelo browser
<br/>
[http://localhost:8080/](http://localhost:8080/)

---
