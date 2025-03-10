/*
  Warnings:

  - You are about to drop the column `media_final` on the `boletim` table. All the data in the column will be lost.
  - Added the required column `nota_biologia` to the `boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota_geografia` to the `boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota_historia` to the `boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota_matematica` to the `boletim` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota_portugues` to the `boletim` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "boletim" DROP COLUMN "media_final",
ADD COLUMN     "nota_biologia" INTEGER NOT NULL,
ADD COLUMN     "nota_geografia" INTEGER NOT NULL,
ADD COLUMN     "nota_historia" INTEGER NOT NULL,
ADD COLUMN     "nota_matematica" INTEGER NOT NULL,
ADD COLUMN     "nota_portugues" INTEGER NOT NULL;
