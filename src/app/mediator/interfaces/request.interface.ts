export interface IRequest<TMessage, TTopic extends string | keyof TMessage> {
  topic: TTopic | string;
  message: TMessage;
}
