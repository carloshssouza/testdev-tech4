# Tech4Humans

---

### Tecnologias: PostgreSQL, ExpressJS, ReactJS, NodeJS

-**SOBRE A APLICAÇÃO**:

- Está aplicação é um teste recebido pela empresa **[Tech4Humans](https://www.tech4h.com.br/)**;

- Utiliza a API [OpenWeatherMap](https://openweathermap.org/api) para buscar os dados de: nome da cidade, sigla do país, temperatura, umidade e clima;

- Utiliza [PostgreSQL](https://www.postgresql.org) para criar o banco de dados;
- Para criar a tabela, digite o seguinte código: (use o pgAdmin ou pelo terminal com psql)

---

    CREATE TABLE IF NOT EXISTS city(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    country VARCHAR(150) NOT NULL,
    temperature  FLOAT NOT NULL,
    humidity FLOAT NOT NULL,
    weather VARCHAR(200) NOT NULL

);

---

**Rotas da aplicação:**  
**[Front-end](http://localhost:3000): http://localhost:3000/**

---

**Back-end**:

- _[POST]_**http://localhost:8000/city** Adiciona os dados da cidade pesquisada no banco de dados;
- _[GET]_**http://localhost:8000/city/popularCities** Retorna as cidades mais pesquisadas; (**Não repete valores**);
- _[GET]_**http://localhost:8000/city/lastCities** Retorna as ultimas cidades pesquisadas (**Não repete valores**);

---

### **Instruções para executar o projeto:**

**1) Clone o projeto em uma pasta:**
Basta utilizar em seu terminal: <br>
`git clone https://github.com/carloshssouza/testdev-tech4.git`

**2) Baixe as dependências para poder rodar o projeto:** <br>

Foi criado o diretório `testdev-tech4/`, após a clonagem. Entre então no novo diretório:

_Comandos no Terminal_:

Adicione as dependências do front-end:

- Digite: `cd testdev-tech4/`
- Entre no diretório do front-end : ` cd client`
- Utilize: `npm install`,

Agora para o back-end:

- Volte um diretório acima: `cd ..`
- Entre no diretório do back-end: `cd server`
- Utilize: `npm install`
- Crie um arquivo .env e digite o código:

---

USER='postgres'<br>
PASSWORD='{Senha}'<br>
HOST='localhost'<br>
PORT=5432<br>
DATABASE='{Nome}'<br>
KEY={Key}<br>

---

- Para {Senha}, coloque a senha do seu banco de dados;
- Para {Nome}, coloque o nome do banco de dados que você criou;
- Para {Key}, coloque sua key da API, disponibilizada por [OpenWeatherMap](https://openweathermap.org/api)
- Para finalizar, digite o comando: `npm run dev`
  **_Back-end e Front-end serão inicializados_**

---

:::
_(c) Código e documentação_: **Carlos Henrique Souza**
:::
