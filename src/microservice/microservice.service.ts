import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceService {
	handleMessage(message: string): void {
		console.log('microservice message: ', message);
	}
}
