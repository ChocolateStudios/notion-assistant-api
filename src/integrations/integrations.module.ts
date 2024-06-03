import { Module } from '@nestjs/common';
import { GoogleCalendarModule } from './google-calendar/google-calendar.module';
import { NotionModule } from './notion/notion.module';

@Module({
    imports: [GoogleCalendarModule, NotionModule],
  })
export class IntegrationsModule {}
