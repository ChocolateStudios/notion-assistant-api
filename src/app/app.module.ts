import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { ConfigsModule } from './configs/configs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from '../_common/infrastructure/persistence/config/data.source';

@Module({
    imports: [
      TypeOrmModule.forRoot({...DataSourceConfig}),
      UsersModule, ProfilesModule, ConfigsModule],
  })
export class AppModule {}
