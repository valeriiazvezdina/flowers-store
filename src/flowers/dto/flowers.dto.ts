import { IsNumber, IsString } from 'class-validator';

export class CreateFlowersDto {
	@IsString({
		message: 'must be a string',
	})
	name: string;

	@IsString({
		message: 'must be a string',
	})
	color: string;

	@IsNumber()
	price: number;
}

// while updating -> all the properties become optional
export type TUpdateFlowersDto = Partial<CreateFlowersDto>;
