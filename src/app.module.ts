import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from '@config/configuration.module';
import { PrismaModule } from '@database/prisma/prisma.module';
import { DemoModule } from '@modules/demo/demo.module';

@Module({
  imports: [ConfigurationModule, PrismaModule, DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
