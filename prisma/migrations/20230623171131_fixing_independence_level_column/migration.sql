/*
  Warnings:

  - You are about to drop the column `independenc_level` on the `pets` table. All the data in the column will be lost.
  - Added the required column `independence_level` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pets` DROP COLUMN `independenc_level`,
    ADD COLUMN `independence_level` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL;
