/*
  Warnings:

  - You are about to alter the column `user_id` on the `children` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- DropForeignKey
ALTER TABLE `children` DROP FOREIGN KEY `Children_user_id_fkey`;

-- AlterTable
ALTER TABLE `children` MODIFY `user_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Children` ADD CONSTRAINT `Children_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
