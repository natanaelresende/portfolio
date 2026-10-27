import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ContactModule, ProjectsModule],
})
export class AppModule {}
