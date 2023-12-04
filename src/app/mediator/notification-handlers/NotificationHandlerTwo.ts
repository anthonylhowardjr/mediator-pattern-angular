import { Injectable } from '@angular/core';
import { INotificationHandler } from '@interfaces/notification-handler.interface';
import { Notification } from '@interfaces/notification.interface';

type Topic1 = 'Topic 1';

@Injectable()
export class NotificationHandlerTwo implements INotificationHandler<Topic1> {
  handle(notification: Notification<Topic1>): void {
    console.log('Notification Received', notification);

    // Can do anything here. Like call a service or data store (NgRX, Signals..)
  }
}
