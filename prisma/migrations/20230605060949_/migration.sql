/*
  Warnings:

  - You are about to drop the column `content` on the `diary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `diary` DROP COLUMN `content`;

-- AlterTable
ALTER TABLE `diaryonrecipe` ADD COLUMN `content` VARCHAR(255) NULL;
