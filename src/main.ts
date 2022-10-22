import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Gigi Literacy')
    .setDescription('The Gigi Literacy API description')
    .setVersion('1.0')
    .addTag('GigiLiteracy')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  
  const bodyParser = require('body-parser');
  app.use(bodyParser.json({limit:'50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
  app.enableCors();
  
  await app.listen(9999);
}
bootstrap();
