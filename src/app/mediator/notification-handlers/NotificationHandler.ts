import { Injectable } from '@angular/core';
import { INotificationHandler } from '@interfaces/notification-handler.interface';
import { Notification } from '@interfaces/notification.interface';

@Injectable()
export class NotificationHandler implements INotificationHandler<boolean> {
  handle(notification: Notification<boolean>): void {
    console.log(
      'Notification Received in N1. I think Ill do some cool stuff',
      notification
    );
  }
}
