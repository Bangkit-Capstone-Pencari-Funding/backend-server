-- DropIndex
DROP INDEX `Children_user_id_key` ON `children`;

-- AddForeignKey
ALTER TABLE `Children` ADD CONSTRAINT `Children_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
