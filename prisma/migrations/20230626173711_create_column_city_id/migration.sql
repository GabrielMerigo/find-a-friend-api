/*
  Warnings:

  - Added the required column `city_id` to the `organizations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `organizations` ADD COLUMN `city_id` VARCHAR(191) NOT NULL;
