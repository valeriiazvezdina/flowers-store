import { Module } from '@nestjs/common';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';

@Module({
	controllers: [FlowersController],
	providers: [FlowersService],
})
export class FlowersModule {}
