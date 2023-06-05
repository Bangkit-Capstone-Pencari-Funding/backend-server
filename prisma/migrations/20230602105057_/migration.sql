/*
  Warnings:

  - Added the required column `calories_needed` to the `Children` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `children` ADD COLUMN `calories_needed` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `phone` VARCHAR(191) NULL;
