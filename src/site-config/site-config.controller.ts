import { Controller, Get } from '@nestjs/common';
import { SiteConfigService } from './site-config.service';

@Controller()
export class SiteConfigController {
  constructor(private readonly siteConfigService: SiteConfigService) {}

  @Get()
  getHello(): string {
    return this.siteConfigService.getHello();
  }
}
