import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { EnumAppMode } from 'src/types';
import { CreateFlowersDto } from './dto/flowers.dto';

@Injectable()
export class FlowersService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly config: ConfigService
	) {}

	create(dto: CreateFlowersDto) {
		return this.prisma.flower.create({
			data: dto,
		});
	}

	findAll() {
		console.log(this.config.get<EnumAppMode>('MODE'));
		return this.prisma.flower.findMany();
	}
}
