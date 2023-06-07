/*
  Warnings:

  - You are about to drop the `ingredientonrecipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ingredientonrecipe` DROP FOREIGN KEY `IngredientOnRecipe_ingredient_id_fkey`;

-- DropForeignKey
ALTER TABLE `ingredientonrecipe` DROP FOREIGN KEY `IngredientOnRecipe_recipe_id_fkey`;

-- DropTable
DROP TABLE `ingredientonrecipe`;

-- CreateTable
CREATE TABLE `_IngredientToRecipe` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_IngredientToRecipe_AB_unique`(`A`, `B`),
    INDEX `_IngredientToRecipe_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_IngredientToRecipe` ADD CONSTRAINT `_IngredientToRecipe_A_fkey` FOREIGN KEY (`A`) REFERENCES `Ingredient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_IngredientToRecipe` ADD CONSTRAINT `_IngredientToRecipe_B_fkey` FOREIGN KEY (`B`) REFERENCES `resep`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
