import { IRequest } from "./request.interface";

export interface ISender<TStore> {
  send(request: IRequest<TStore, ''>): void;
}
