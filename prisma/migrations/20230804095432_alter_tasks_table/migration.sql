-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `detail` TEXT NULL,
    ADD COLUMN `dueDate` DATETIME(3) NULL,
    ADD COLUMN `parentTaskId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_parentTaskId_fkey` FOREIGN KEY (`parentTaskId`) REFERENCES `tasks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
