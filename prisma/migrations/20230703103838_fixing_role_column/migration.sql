/*
  Warnings:

  - You are about to drop the column `role` on the `organizations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `organizations` DROP COLUMN `role`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('ADMIN', 'CLIENT') NOT NULL DEFAULT 'ADMIN';
