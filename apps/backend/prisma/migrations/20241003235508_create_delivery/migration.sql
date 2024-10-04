/*
  Warnings:

  - You are about to drop the column `cidade` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `complemento` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `logradouro` on the `DeliveryOrder` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `DeliveryOrder` table. All the data in the column will be lost.
  - Added the required column `address` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complement` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `DeliveryOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DeliveryOrder" DROP COLUMN "cidade",
DROP COLUMN "complemento",
DROP COLUMN "cpf",
DROP COLUMN "estado",
DROP COLUMN "logradouro",
DROP COLUMN "nome",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "complement" TEXT NOT NULL,
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
