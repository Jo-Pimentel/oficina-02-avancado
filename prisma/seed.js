const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // const primeiro_aluno = await prisma.aluno.create({
    //     data: {
    //         nome: 'João Lucas dos Santos Pimentel',
    //         email: 'joaoLucas@gmail.com',
    //         idade: 999,
    //     },
    // });

    // const segundo_aluno = await prisma.aluno.create({
    //     data: {
    //         nome: 'Pedro da Silva Souza',
    //         email: 'pedro@gmail.com',
    //         idade: 1023,
    //     },
    // });

    // const terceiro_aluno = await prisma.aluno.create({
    //     data: {
    //         nome: 'Henrique Oliveira',
    //         email: 'henrique@gmail.com',
    //         idade: 6079,
    //     },
    // });

    // console.log('Alunos inseridos: ', { primeiro_aluno, segundo_aluno, terceiro_aluno });

    const primeiro_professor = await prisma.professor.create ({
        data: {
            nome: "Clóvis Basílio dos Santos",
            telefone: 999999999999,
            idade: 34,
        },
    });
    const segundo_professor = await prisma.professor.create ({
        data: {
            nome: "Tiago Costa de Arruda",
            telefone: 999999999999,
            idade: 56,
        },
    });

    const terceiro_professor = await prisma.professor.create ({
        data: {
            nome: "Cicero Santos da Silva",
            telefone: 999999999999,
            idade: 53,
        },
    });

    console.log('Professores inseridos: ', { primeiro_professor, segundo_professor, terceiro_professor });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });