-- CreateTable
CREATE TABLE "professor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" INTEGER NOT NULL,
    "idade" INTEGER NOT NULL,
    "dCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);
