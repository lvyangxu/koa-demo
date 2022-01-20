import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'chashaobao',
      database: 'test',
      entities: ['dist/**/entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
