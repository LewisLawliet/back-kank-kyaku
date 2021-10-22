/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Article` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Grade_userId_key` ON `grade`;

-- AlterTable
ALTER TABLE `article` ADD COLUMN `userId` INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX `Article_userId_key` ON `Article`(`userId`);

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grade` ADD CONSTRAINT `Grade_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
