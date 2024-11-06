import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroserviceHostPort } from './assets/const/microservice-host-port';
import { LoggerMiddleware } from './conception/middleware';
import { FlowersGraphqlModule } from './flowers-graphql/flowers-graphql.module';
import { FlowersModule } from './flowers/flowers.module';
import { MicroserviceModule } from './microservice/microservice.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		FlowersModule,
		MicroserviceModule,
		ClientsModule.register([
			{
				name: 'ORDER_SERVICE',
				transport: Transport.TCP,
				options: MicroserviceHostPort,
			},
		]),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			sortSchema: true,
			path: '/graphql',
			playground: true,
		}),
		FlowersGraphqlModule,
	],
	providers: [AppService],
	controllers: [AppController],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('flowers');
	}
}
