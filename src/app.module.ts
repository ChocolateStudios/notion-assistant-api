import { Module } from '@nestjs/common';
import { TestingModule } from './testing/testing.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [TestingModule, UsersModule, RolesModule, ProfilesModule],
})
export class AppModule {}
