import { IRequest } from './request.interface';

export interface IRequestHandler<TRequest, TResponse> {
  handle(notification: IRequest<TRequest, ''>): TResponse;
}
