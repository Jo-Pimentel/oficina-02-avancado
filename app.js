// Criação do servidor onde a aplicação estará localizada.
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const app = express();
const prisma = new PrismaClient();
const porta = 3000;

app.use(express.urlencoded({ extended: True }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const aluno = await prisma.aluno.findMany();

        let html = `
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title> Lista de alunos </title>
                <link rel="stylesheet" href="public/style.css">
            </head>
            <body>
                <table>
                    <th colspan="4"> Lista dos alunos matriculados </th>

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
        <button onclick="">`

    
    res.send(html);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar dados dos alunos.');
    };
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})