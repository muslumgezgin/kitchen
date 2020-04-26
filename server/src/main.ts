import { NestFactory, APP_FILTER } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { createConnection } from 'typeorm';
import { AppModule } from './app.module';
import { join } from 'path';
import * as passport from 'passport';
import * as session from 'express-session';
import * as  bodyParser from 'body-parser';
import * as config from './config/orm.config';



async function bootstrap() {

  try {
    const connection = await createConnection(config);
    await connection.runMigrations();
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.enableCors();
  app.set('trust proxy', 1);

  app.use(session({
    secret: 'keuken',
    resave: false,
    saveUninitialized: false

  }))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3001);
}
bootstrap();
