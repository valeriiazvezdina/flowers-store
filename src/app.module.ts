import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './conception/middleware';
import { FlowersModule } from './flowers/flowers.module';

@Module({
	imports: [FlowersModule],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('flowers');
	}
}
