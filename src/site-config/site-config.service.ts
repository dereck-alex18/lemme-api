import { Injectable } from '@nestjs/common';
import { CreateSiteConfigDto } from './dto/create-site-config-dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SiteConfigService {
  constructor(private readonly prisma: PrismaService) {}

  async createSiteConfig(dto: CreateSiteConfigDto) {
    const data = {
      font: dto.font,
      primaryColor: dto.primaryColor,
      secondaryColor: dto.secondaryColor,
      layout: dto.layout,
    };
    let config: CreateSiteConfigDto;
    const existingConfig = await this.prisma.siteConfig.findFirst();
    if (existingConfig) {
      config = await this.prisma.siteConfig.update({
        where: { id: existingConfig.id },
        data,
      });
      return {
        message: 'Configuração atualizada com sucesso!',
        data: config,
      };
    }
    config = await this.prisma.siteConfig.create({ data });

    return {
      message: 'Configuração salva com sucesso!',
      data: config,
    };
  }

  async getSiteConfig() {
    const config = await this.prisma.siteConfig.findFirst();

    if (!config) {
      return {
        message: 'Configuração do site não encontrada.',
        data: null,
      };
    }
    return {
      message: 'Configuração atual carregada com sucesso!',
      data: config,
    };
  }
}
