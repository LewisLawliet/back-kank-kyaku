/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Grade` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `grade` ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Grade_userId_key` ON `Grade`(`userId`);

-- AddForeignKey
ALTER TABLE `Grade` ADD CONSTRAINT `Grade_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
