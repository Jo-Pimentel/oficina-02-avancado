-- CreateTable
CREATE TABLE "boletim" (
    "id" SERIAL NOT NULL,
    "aluno_id" INTEGER NOT NULL,
    "media_final" INTEGER NOT NULL,

    CONSTRAINT "boletim_pkey" PRIMARY KEY ("id")
);
