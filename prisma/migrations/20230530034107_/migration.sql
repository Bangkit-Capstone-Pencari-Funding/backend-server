/*
  Warnings:

  - You are about to drop the column `recipe_id` on the `diary` table. All the data in the column will be lost.
  - You are about to drop the column `comment_id` on the `resep` table. All the data in the column will be lost.
  - You are about to drop the column `ingredient_id` on the `resep` table. All the data in the column will be lost.
  - You are about to drop the column `child_id` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `komentar_ibfk_1`;

-- DropForeignKey
ALTER TABLE `diaryonrecipe` DROP FOREIGN KEY `DiaryOnRecipe_recipe_id_fkey2`;

-- DropForeignKey
ALTER TABLE `resep` DROP FOREIGN KEY `resep_ibfk_1`;

-- DropIndex
DROP INDEX `komentar_id` ON `resep`;

-- DropIndex
DROP INDEX `id_anak` ON `users`;

-- AlterTable
ALTER TABLE `diary` DROP COLUMN `recipe_id`;

-- AlterTable
ALTER TABLE `resep` DROP COLUMN `comment_id`,
    DROP COLUMN `ingredient_id`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `child_id`;

-- CreateTable
CREATE TABLE `IngredientOnRecipe` (
    `id` VARCHAR(191) NOT NULL,
    `recipe_id` VARCHAR(191) NOT NULL,
    `ingredient_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `komentar_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `IngredientOnRecipe` ADD CONSTRAINT `IngredientOnRecipe_ingredient_id_fkey` FOREIGN KEY (`ingredient_id`) REFERENCES `Ingredient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `IngredientOnRecipe` ADD CONSTRAINT `IngredientOnRecipe_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `resep`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `DiaryOnRecipe` ADD CONSTRAINT `DiaryOnRecipe_recipe_id_fkey2` FOREIGN KEY (`diary_id`) REFERENCES `Diary`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
