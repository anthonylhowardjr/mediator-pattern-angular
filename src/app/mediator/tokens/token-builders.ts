import { InjectionToken } from '@angular/core';
import { IMediator } from '@interfaces/mediator.interface';
import { IRequestHandler } from '@interfaces/request-handler.interface';
import { INotificationHandler } from '@interfaces/notification-handler.interface';

export const MEDIATOR = <TStore>() => new InjectionToken<IMediator<TStore>>("Mediator");
export const MEDIATOR_TOKEN = MEDIATOR<string>();

export const NOTIFICATION_HANDLERS = <TMessage>(name: string) =>
  new InjectionToken<Set<INotificationHandler<TMessage>>>(name, {
    factory: () => new Set<INotificationHandler<TMessage>>()
  });

export const REQUEST_HANDLERS = <TRequest, TResponse>(name: string) =>
  new InjectionToken<Set<IRequestHandler<TRequest, TResponse>>>(name, {
    factory: () => new Set<IRequestHandler<TRequest, TResponse>>()
  });
