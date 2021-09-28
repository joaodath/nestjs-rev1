import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin_bluebackend:rycbardw12@projeto01-bluebackend.mkvzi.mongodb.net/revisaonest',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
