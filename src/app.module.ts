import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './Global/config/config';
import { ConfigModule } from '@nestjs/config';
import { ReservationModule } from './reservation/module/reservation.module';
import { RoomModule } from './room/module/room.module';
import { UserModule } from './user/module/user.module';
import { WorkspaceModule } from './workspace/module/workspace.module';
import { SessionModule } from './session/module/session.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config().database.host,
      port: config().database.port,
      username: config().database.username,
      password: config().database.password,
      database: config().database.db,
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: true,
      },
    }),
    ReservationModule,
    RoomModule,
    UserModule,
    WorkspaceModule,
    SessionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}