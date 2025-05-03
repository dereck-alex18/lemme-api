/*
  Warnings:

  - Added the required column `layout` to the `SiteConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SiteConfig" ADD COLUMN     "layout" TEXT NOT NULL;
