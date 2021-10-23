-- DropIndex
DROP INDEX `Article_userId_fkey` ON `article`;

-- DropIndex
DROP INDEX `Grade_userId_fkey` ON `grade`;

-- AlterTable
ALTER TABLE `user` ALTER COLUMN `role` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grade` ADD CONSTRAINT `Grade_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
