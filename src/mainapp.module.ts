import { Module } from '@nestjs/common';
import { TestingModule } from './testing/testing.module';
import { AppModule } from './app/app.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    TestingModule, AppModule, IntegrationsModule
  ],
})
export class MainAppModule { }
