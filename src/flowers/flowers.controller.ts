import {
	Body,
	Controller,
	Get,
	Post,
	Query,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInterceptor } from 'src/conception/interceptor';
import { ParseIntPipe } from 'src/conception/pipe';
import { CreateFlowersDto } from './dto/flowers.dto';
import { FlowersService } from './flowers.service';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
	constructor(private readonly flowersService: FlowersService) {}

	@Get()
	@UseGuards(AuthGuard)
	findAll() {
		return this.flowersService.findAll();
	}

	@Get('pipe')
	findAllWithQuery(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
		console.log('Query:', pageNumber);
		return this.flowersService.findAll();
	}

	@Post('create')
	@UseGuards(AuthGuard)
	create(@Body() dto: CreateFlowersDto) {
		return this.flowersService.create(dto);
	}
}
