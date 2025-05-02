import { Body, Controller, Get, Post } from '@nestjs/common';
import { SiteConfigService } from './site-config.service';
import { CreateSiteConfigDto } from './dto/create-site-config-dto';

@Controller('site-config')
export class SiteConfigController {
  constructor(private readonly siteConfigService: SiteConfigService) {}

  @Post()
  postSiteConfig(@Body()dto: CreateSiteConfigDto) {
    return this.siteConfigService.createSiteConfig(dto);
  }
}
