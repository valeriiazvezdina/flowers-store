import { Injectable } from '@nestjs/common';
import {
	ClientProxy,
	ClientProxyFactory,
	Transport,
} from '@nestjs/microservices';
import { MicroserviceHostPort } from './assets/const/microservice-host-port';

@Injectable()
export class AppService {
	private client: ClientProxy;

	constructor() {
		this.client = ClientProxyFactory.create({
			transport: Transport.TCP,
			options: MicroserviceHostPort,
		});
	}

	sendMessage() {
		this.client.emit('message', 'new order #001');
	}
}
