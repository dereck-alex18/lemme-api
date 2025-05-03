import { Injectable } from '@nestjs/common';
import { CreateSiteConfigDto } from './dto/create-site-config-dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SiteConfigService {
  constructor(private readonly prisma: PrismaService){};

  async createSiteConfig(dto: CreateSiteConfigDto) {
    const config = await this.prisma.siteConfig.create({
      data: {
        font: dto.font,
        primaryColor: dto.primaryColor,
        secondaryColor: dto.secondaryColor,
        layout: dto.layout
      }
    })

    return { 
      message: 'Configuração salva com sucesso!',
      data: config
    };
  }
}
