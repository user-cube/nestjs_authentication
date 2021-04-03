import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const logger: LoggerService = new LoggerService();

  app.enableCors();
  logger.verbose(`Database URI => ${configService.get('database.uri')}`);
  logger.verbose(`Application listening on port => ${configService.get('port')}`);
  await app.listen(configService.get('port'));
}
bootstrap();
