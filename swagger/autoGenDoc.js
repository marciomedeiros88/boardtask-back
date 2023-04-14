const mongooseToSwagger = require('mongoose-to-swagger');
const EsquemaTarefa = require('../src/models/tarefa.js');
const EsquemaUsuario = require('../src/models/usuario.js');
const swaggerAutogen = require('swagger-autogen')({
    openapi:'3.0.0',
    language: 'pt-BR',
});

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./index.js', './src/routes.js'];

let doc = {
    info:{
    version:"1.0.0",
    title: "API do Boardtask",
    description: "Documentação da API do Boardtask"
    },
    servers: [{url:"http://localhost:4000", description: "Servidor localhost"},
            {url:"https://boardtask-back.vercel.app/", description: "Servidor de produção"}
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
    components: {
        schemas: {
            Usuario: mongooseToSwagger(EsquemaUsuario),
            Tarefa: mongooseToSwagger(EsquemaTarefa)
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => { /* .then faz com que haja uma espera antes de executar o que está dentro da função */
    console.log("Documentação do Swagger gerada encontra-se no arquivo em: " + outputFile);
    if (process.env.NODE_ENV !== 'production') {
        require("../index.js");
    }
})