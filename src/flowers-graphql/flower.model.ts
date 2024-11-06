import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlowerModel {
	@Field(() => Int)
	id: number;

	@Field()
	name: string;

	@Field()
	color: string;

	@Field(() => Float)
	price: number;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;
}
