/*
  Warnings:

  - You are about to drop the `diaryonrecipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `diaryonrecipe` DROP FOREIGN KEY `DiaryOnRecipe_recipe_id_fkey1`;

-- DropForeignKey
ALTER TABLE `diaryonrecipe` DROP FOREIGN KEY `DiaryOnRecipe_recipe_id_fkey2`;

-- DropTable
DROP TABLE `diaryonrecipe`;

-- CreateTable
CREATE TABLE `_DiaryToRecipe` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_DiaryToRecipe_AB_unique`(`A`, `B`),
    INDEX `_DiaryToRecipe_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_DiaryToRecipe` ADD CONSTRAINT `_DiaryToRecipe_A_fkey` FOREIGN KEY (`A`) REFERENCES `Diary`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DiaryToRecipe` ADD CONSTRAINT `_DiaryToRecipe_B_fkey` FOREIGN KEY (`B`) REFERENCES `resep`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
