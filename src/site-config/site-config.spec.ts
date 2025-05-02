import { Test, TestingModule } from '@nestjs/testing';
import { SiteConfigController } from './site-config.controller';
import { SiteConfigService } from './site-config.service';

describe('SiteConfigController', () => {
  let appController: SiteConfigController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SiteConfigController],
      providers: [SiteConfigService],
    }).compile();

    appController = app.get<SiteConfigController>(SiteConfigController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
