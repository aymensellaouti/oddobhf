import { Injectable, inject } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor() {}
  private loggerService: LoggerService = inject(LoggerService);
  sayHello(message: string) {
    this.loggerService.logger('Hello!');
    this.loggerService.logger(message);
  }
}
