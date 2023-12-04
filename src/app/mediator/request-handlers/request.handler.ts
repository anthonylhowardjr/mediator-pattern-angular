import { Injectable } from '@angular/core';
import { IRequest } from '@interfaces/request.interface';
import { IRequestHandler } from '@interfaces/request-handler.interface';

@Injectable()
export class RequestHandler implements IRequestHandler<boolean, string> {
  handle(request: IRequest<boolean, ''>): string {
    console.log(
      'Request Received in R1. I think Ill do some cool stuff',
      request
    );

    return 'New Value';
  }
}
