import { Injectable } from '@nestjs/common';

@Injectable()
export class SiteConfigService {
  getHello(): string {
    return 'Hello World!';
  }
}
