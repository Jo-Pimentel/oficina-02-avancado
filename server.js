const express = require('express');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const app = express();
const prisma = new PrismaClient();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const alunos = await prisma.aluno.findMany();

        let html = `
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title> Lista de alunos </title>
                <style>
                    body{
                        margin: 0;
                        padding: 0;
                        font-family: Berlin Sans FB;
                    }

                    table, th, tr, td {
                        border: solid 4px;
                    }
                </style>
            </head>
            <body>
                <table align="center">
                    <th colspan="5"> Lista dos alunos matriculados </th>

                    <tr>
                        <th> ID </th>
                        <th> Nome </th>
                        <th> Email </th>
                        <th> Idade </th>
                        <th> Ações </th>
                    </tr>`;

        alunos.forEach(aluno => {
            html += `
            <tr>
                <td> ${aluno.id} </td>
                <td> ${aluno.nome} </td>
                <td> ${aluno.email} </td>
                <td> ${aluno.idade} </td>
                <td>
                    <form action="/remover-aluno" method="POST" style="display:inline;">
                        <input type="hidden" name="id" value="${aluno.id}">
                        <button type="submit"> Remover </button>
                    </form>
                </td>
            </tr>`;
        });

        html += `
            </table> <br>
            <button onclick="location.href='/novo-aluno'"> Adicionar novo aluno </button><br><br>
            <button onclick="location.href='/professores'"> Lista de professores </button><br><br>
        </body>
        </html>`;

    res.send(html);

    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar dados dos alunos.');
    };
});

app.get('/novo-aluno', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Inserir novos dados </title>
        <style>
            body {
                font-family: Berlin Sans FB;
            }
            .formulario-novo-aluno {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        </style>
    </head>
    <body>
        <div class="div-do-h1">
            <h1 align="center"> Inserção de novos dados para alunos </h1>
        </div>
        <div class="formulario-novo-aluno">
            <form action="/novo-aluno" method="post">
                <input type="text" id="nome" placeholder="nome do aluno" name="nome" required><br><br>
                <input type="text" id="email" placeholder="email do aluno" name="email" required><br><br>
                <input type="number" id="idade" placeholder="idade do aluno" name="idade" required><br><br>

                <button type="submit"> Adcionar aluno </button>
            </form><br>

            <button onclick="location.href='/'"> Retornar a lista de alunos </button>
        </div>
    </body>
    </html>`;

    res.send(html);
});

app.post('/novo-aluno', async (req, res) => {
    const { nome, email, idade } = req.body;
    try {
      await prisma.aluno.create({
        data: {
          nome,
          email,
          idade: parseInt(idade),
        },
      });
      
      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao adicionar o aluno.');
    }
  });
  

app.post('/remover-aluno', async(req, res) => {
    const { id } = req.body;
    try{
        await prisma.aluno.delete({
            where: { id: parseInt(id) }
        });

        res.redirect('/');
    } catch(erro) {
        console.error(erro);
        res.status(500).send("Erro ao remover o aluno do servidor.");
    }
});

app.get('/professores', async (req, res) => {
    try {
        const professores = await prisma.professor.findMany();

        let html = `
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title> Lista de professores </title>
                <style>
                    body{
                        margin: 0;
                        padding: 0;
                        font-family: Berlin Sans FB;
                    }

                    table, th, tr, td {
                        border: solid 4px;
                    }
                </style>
            </head>
            <body>
                <table align="center">
                    <th colspan="5"> Lista dos professores da escola </th>

                    <tr>
                        <th> ID </th>
                        <th> Nome </th>
                        <th> Telefone </th>
                        <th> Idade </th>
                        <th> Ações </th>
                    </tr>`;

        professores.forEach(professor => {
            html += `
            <tr>
                <td> ${professor.id} </td>
                <td> ${professor.nome} </td>
                <td> ${professor.telefone} </td>
                <td> ${professor.idade} </td>
                <td>
                    <form action="/remover-aluno" method="POST" style="display:inline;">
                        <input type="hidden" name="id" value="${professor.id}">
                        <button type="submit"> Remover </button>
                    </form>
                </td>
            </tr>`;
        });

        html += `
            </table> <br>
            <button onclick="location.href='/novo-professor'"> Adicionar novo professor </button><br><br>
        </body>
        </html>`;

    res.send(html);

    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar dados dos professores.');
    };
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`);
});