import { Injectable } from '@nestjs/common';

@Injectable() // to be possible to call outside the service
export class FlowersService {
	findAll(): {
		name: string;
		color: string;
		price: number;
	}[] {
		return [
			{
				name: 'Rose',
				color: 'Red',
				price: 5,
			},
			{
				name: 'Lily',
				color: 'White',
				price: 6,
			},
			{
				name: 'Tulip',
				color: 'Yellow',
				price: 7,
			},
		];
	}
}
