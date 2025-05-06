import { Module } from '@nestjs/common';
import { SiteConfigController } from './site-config.controller';
import { SiteConfigService } from './site-config.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [SiteConfigController],
  providers: [SiteConfigService, PrismaService],
})
export class SiteConfigModule {}
