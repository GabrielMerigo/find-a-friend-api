-- AlterTable
ALTER TABLE `organizations` ADD COLUMN `role` ENUM('ADMIN', 'CLIENT') NOT NULL DEFAULT 'ADMIN';
