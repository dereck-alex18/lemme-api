import { Injectable } from '@nestjs/common';
import { CreateSiteConfigDto } from './dto/create-site-config-dto';

@Injectable()
export class SiteConfigService {
  createSiteConfig(dto: CreateSiteConfigDto) {
    return { 
      message: 'Configuração salva com sucesso!',
      dto
    };
  }
}
