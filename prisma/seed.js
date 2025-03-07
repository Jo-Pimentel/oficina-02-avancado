const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const primeiro_aluno = await prisma.aluno.create({
        data: {
            nome: 'João Lucas dos Santos Pimentel',
            email: 'joaoLucas@gmail.com',
            idade: 999,
        },
    });

    const segundo_aluno = await prisma.aluno.create({
        data: {
            nome: 'Pedro da Silva Souza',
            email: 'pedro@gmail.com',
            idade: 1023,
        },
    });

    const terceiro_aluno = await prisma.aluno.create({
        data: {
            nome: 'Henrique Oliveira',
            email: 'henrique@gmail.com',
            idade: 6079,
        },
    });

    console.log('Alunos inseridos: ', { primeiro_aluno, segundo_aluno, terceiro_aluno });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });