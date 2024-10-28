import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/conception/guard';
import { ParseIntPipe } from 'src/conception/pipe';
import { FlowersService } from './flowers.service';

@Controller('flowers')
export class FlowersController {
	constructor(private readonly flowersService: FlowersService) {}

	@Get('')
	@UseGuards(AuthGuard)
	findAll() {
		return this.flowersService.findAll();
	}

	@Get('pipe')
	findAllWithQuery(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
		console.log('Query:', pageNumber);
		return this.flowersService.findAll();
	}
}
