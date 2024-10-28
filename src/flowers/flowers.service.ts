import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFlowersDto } from './dto/flowers.dto';

@Injectable()
export class FlowersService {
	constructor(private readonly prisma: PrismaService) {}

	create(dto: CreateFlowersDto) {
		return this.prisma.flower.create({
			data: dto,
		});
	}

	findAll() {
		return this.prisma.flower.findMany();
	}
}
