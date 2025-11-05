import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT ?? '3306'),
  username: 'root',
  password: 'root',
  database: 'notesapp',
  autoLoadEntities: true,
  synchronize: false,
};
