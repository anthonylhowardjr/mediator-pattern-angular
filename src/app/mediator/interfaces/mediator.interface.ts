import { IRequest } from './request.interface';
import { ISender } from './sender.interface';

export interface IMediator<TStore> extends ISender<TStore> {
  send<TTopic extends string | keyof TStore >(request: IRequest<TStore, TTopic>): void;
}
