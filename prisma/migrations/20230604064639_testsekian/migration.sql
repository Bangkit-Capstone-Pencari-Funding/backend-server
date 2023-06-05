-- DropForeignKey
ALTER TABLE `children` DROP FOREIGN KEY `Children_user_id_fkey`;

-- AlterTable
ALTER TABLE `children` MODIFY `user_id` VARCHAR(255) NOT NULL;

-- AddForeignKey
ALTER TABLE `Children` ADD CONSTRAINT `Children_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
