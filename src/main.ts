import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Enable compression
  app.use(compression());
  
  // Enable security headers
  app.use(helmet());
  
  // Serve static files
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    maxAge: '1d',
    etag: true,
  });
  
  // Enable CORS with specific options
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  // Enable validation
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));
  
  // Set global prefix
  app.setGlobalPrefix('api');
  
  await app.listen(3001);
}
bootstrap(); 