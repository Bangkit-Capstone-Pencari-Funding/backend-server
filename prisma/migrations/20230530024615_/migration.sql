-- AlterTable
ALTER TABLE `resep` ADD COLUMN `diary_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `DiaryOnRecipe` (
    `recipe_id` VARCHAR(191) NOT NULL,
    `diary_id` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`recipe_id`, `diary_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Diary` (
    `id` VARCHAR(191) NOT NULL,
    `date` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `content` VARCHAR(255) NOT NULL,
    `recipe_id` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DiaryOnRecipe` ADD CONSTRAINT `DiaryOnRecipe_recipe_id_fkey1` FOREIGN KEY (`recipe_id`) REFERENCES `resep`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `DiaryOnRecipe` ADD CONSTRAINT `DiaryOnRecipe_recipe_id_fkey2` FOREIGN KEY (`recipe_id`) REFERENCES `Diary`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Diary` ADD CONSTRAINT `Diary_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
