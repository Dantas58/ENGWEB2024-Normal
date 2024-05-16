Mudei o dataset para formato json
alterei o idcontrato para _id
alterei variaveis que estavam em formato de string para int/float

utilizei os seguintes comandos para importar o dataset para o mongodb:

docker cp contratos2024.json  mongoEW:/tmp
docker exec mongoEW mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray

Para criar a API utilizei os comandos:
    express --no-view ex1
    cd ex1
    npm i 
    npm i mongoose --save 

Para executar a API:
    npm start

Depois construi a API de dados da seguinte forma:

    -Alterei a porta de entrada para a porta 16000
    -Alterei a app.js para fazer a conexão com o mongodb
    -Criei as pastas models e controllers 
    -Criei o model: Possui os modelos dos objetos existentes na bd
    - Criei o controller: Possui os controllers necessários para alterar os registos existentes na base de dados 
    - Criei as routes para aceder aos registos na bd
    - Testei as rotas criadas utilizando o browser e o Postman

Na criação da Interface utilizei os comandos:
    express --view=pug ex2
    cd ex2
    npm i 
    npm i axios --save 

Para executar a Interface utilizei o comando:
    npm start


Depois construi a Interface:

    -Alterei a porta de entrada, para a porta 16001
    -Criei as routes pedidas no enunciado 
    -Criei as views utilizando o w3.css e o pug













