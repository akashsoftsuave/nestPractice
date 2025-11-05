import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrm.config';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
