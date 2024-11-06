import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { MicroserviceHostPort } from './assets/const/microservice-host-port';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('api');
	app.useGlobalPipes(new ValidationPipe());

	await app.listen(3000);
	console.log('backend is running on port 3000...');

	const microservice =
		await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
			transport: Transport.TCP,
			options: MicroserviceHostPort,
		});

	await microservice.listen();
	console.log('microservice is running on port 8877...');
}
bootstrap();
