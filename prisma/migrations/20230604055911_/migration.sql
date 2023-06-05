/*
  Warnings:

  - The values [LAKI,PEREMPUAN] on the enum `Children_gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `children` MODIFY `gender` ENUM('laki-laki', 'perempuan') NOT NULL;
