/*
  Warnings:

  - You are about to drop the column `Tools` on the `resep` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `resep` DROP COLUMN `Tools`,
    ADD COLUMN `tools` TEXT NULL;
