/*
  Warnings:

  - You are about to drop the column `articleId` on the `categorie` table. All the data in the column will be lost.
  - You are about to drop the column `quizId` on the `categorie` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `grade` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `grade` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `grade` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `question` table. All the data in the column will be lost.
  - Added the required column `categorieId` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `article` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `minScore` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizId` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentence` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Made the column `quizId` on table `question` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Article_userId_fkey` ON `article`;

-- DropIndex
DROP INDEX `Categorie_articleId_fkey` ON `categorie`;

-- DropIndex
DROP INDEX `Categorie_quizId_fkey` ON `categorie`;

-- DropIndex
DROP INDEX `Grade_userId_fkey` ON `grade`;

-- DropIndex
DROP INDEX `Question_quizId_fkey` ON `question`;

-- DropIndex
DROP INDEX `Quiz_userId_fkey` ON `quiz`;

-- AlterTable
ALTER TABLE `article` ADD COLUMN `categorieId` INTEGER NOT NULL,
    MODIFY `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `categorie` DROP COLUMN `articleId`,
    DROP COLUMN `quizId`;

-- AlterTable
ALTER TABLE `grade` DROP COLUMN `date`,
    DROP COLUMN `score`,
    DROP COLUMN `userId`,
    ADD COLUMN `minScore` INTEGER NOT NULL,
    ADD COLUMN `quizId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `question` DROP COLUMN `question`,
    ADD COLUMN `points` INTEGER NOT NULL,
    ADD COLUMN `sentence` VARCHAR(255) NOT NULL,
    MODIFY `quizId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `quiz` ADD COLUMN `categorieId` INTEGER;

-- CreateTable
CREATE TABLE `Answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `questionId` INTEGER NOT NULL,
    `isCorrect` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Score` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalPoints` INTEGER NOT NULL DEFAULT 0,
    `quizId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gradeCertification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `attributionDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NOT NULL,
    `gradeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `Categorie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quiz` ADD CONSTRAINT `Quiz_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `Categorie`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quiz` ADD CONSTRAINT `Quiz_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quiz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Score` ADD CONSTRAINT `Score_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quiz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Grade` ADD CONSTRAINT `Grade_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quiz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gradeCertification` ADD CONSTRAINT `gradeCertification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gradeCertification` ADD CONSTRAINT `gradeCertification_gradeId_fkey` FOREIGN KEY (`gradeId`) REFERENCES `Grade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
