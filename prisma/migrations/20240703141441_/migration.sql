/*
  Warnings:

  - Added the required column `municipio_id` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pets` ADD COLUMN `municipio_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `municipio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(32) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pets` ADD CONSTRAINT `pets_municipio_id_fkey` FOREIGN KEY (`municipio_id`) REFERENCES `municipio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
