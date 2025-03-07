-- CreateTable
CREATE TABLE "aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "dCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "aluno_email_key" ON "aluno"("email");
