import { Notification } from './notification.interface';

export interface INotificationHandler<TMessage> {
  handle(notification: Notification<TMessage>): void;
}
