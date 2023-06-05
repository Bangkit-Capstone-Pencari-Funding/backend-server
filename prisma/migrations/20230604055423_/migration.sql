/*
  Warnings:

  - Added the required column `gender` to the `Children` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `children` ADD COLUMN `gender` ENUM('LAKI', 'PEREMPUAN') NOT NULL;
