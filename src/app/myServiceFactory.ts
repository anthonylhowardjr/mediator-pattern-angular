import { Injector } from '@angular/core';
import { RequestHandler } from './mediator/request-handlers/request.handler';
import { REQUEST_HANDLERS } from './mediator/tokens/token-builders';

export function myServiceFactory(injector: Injector) {
  console.log(injector.get(REQUEST_HANDLERS));
  return new RequestHandler();
}
