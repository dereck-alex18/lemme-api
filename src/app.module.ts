import { Module } from "@nestjs/common";
import { SiteConfigModule } from "./site-config/site-config.module";

@Module({
  imports: [SiteConfigModule],
})

export class AppModule{}