import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { ModuleRegisterModule } from './module-register/module-register.module';
import { ModuleLoginModule } from './module-login/module-login.module';
import { ExecutetaskService } from './executetask/executetask.service';
import { LoginModule } from './login/login.module';

@Module({
  imports: [LoginModule, ModuleLoginModule, ModuleRegisterModule],
  controllers: [AppController],
  providers: [AppService, ExecutetaskService],
})
export class AppModule {}
