import { Module } from "@nestjs/common";
import { SiteConfigModule } from "./site-config/site-config.module";
import { PrismaService } from "prisma/prisma.service";

@Module({
  imports: [SiteConfigModule],
  providers: [PrismaService],
  exports: [PrismaService]
})

export class AppModule{}