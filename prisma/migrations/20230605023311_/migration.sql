/*
  Warnings:

  - The primary key for the `diaryonrecipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `DiaryOnRecipe` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `diary` DROP FOREIGN KEY `Diary_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `diaryonrecipe` DROP FOREIGN KEY `DiaryOnRecipe_recipe_id_fkey1`;

-- DropForeignKey
ALTER TABLE `diaryonrecipe` DROP FOREIGN KEY `DiaryOnRecipe_recipe_id_fkey2`;

-- AlterTable
ALTER TABLE `diary` ADD COLUMN `child_id` VARCHAR(191) NULL,
    MODIFY `user_id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `diaryonrecipe` DROP PRIMARY KEY,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    MODIFY `recipe_id` VARCHAR(191) NULL,
    MODIFY `diary_id` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `DiaryOnRecipe` ADD CONSTRAINT `DiaryOnRecipe_recipe_id_fkey1` FOREIGN KEY (`recipe_id`) REFERENCES `resep`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `DiaryOnRecipe` ADD CONSTRAINT `DiaryOnRecipe_recipe_id_fkey2` FOREIGN KEY (`diary_id`) REFERENCES `Diary`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `Diary` ADD CONSTRAINT `Diary_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE `Diary` ADD CONSTRAINT `Diary_child_id_fkey` FOREIGN KEY (`child_id`) REFERENCES `Child`(`id`) ON DELETE SET NULL ON UPDATE SET NULL;
