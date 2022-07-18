/*
  Warnings:

  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - Added the required column `us_basictime_end` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `us_basictime_st` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `us_department` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `us_email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `us_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `us_name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `us_pass` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `us_position` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `us_update_date` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users_email_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `email`,
    DROP COLUMN `name`,
    ADD COLUMN `us_basictime_end` DATETIME(3) NOT NULL,
    ADD COLUMN `us_basictime_st` DATETIME(3) NOT NULL,
    ADD COLUMN `us_create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `us_department` INTEGER NOT NULL,
    ADD COLUMN `us_email` CHAR(64) NOT NULL,
    ADD COLUMN `us_id` CHAR(16) NOT NULL,
    ADD COLUMN `us_name` CHAR(32) NOT NULL,
    ADD COLUMN `us_pass` CHAR(32) NOT NULL,
    ADD COLUMN `us_position` INTEGER NOT NULL,
    ADD COLUMN `us_update_date` DATETIME(3) NOT NULL;
