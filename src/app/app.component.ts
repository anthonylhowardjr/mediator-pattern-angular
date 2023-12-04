import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalMediatorService } from './mediator/mediator.service';
import { NotificationHandler } from './mediator/notification-handlers/NotificationHandler';
import { NotificationHandlerTwo } from './mediator/notification-handlers/NotificationHandlerTwo';
import { RequestHandler } from './mediator/request-handlers/request.handler';
import { myServiceFactory } from './myServiceFactory';
import {
  MEDIATOR,
  MEDIATOR_TOKEN,
  NOTIFICATION_HANDLERS,
  REQUEST_HANDLERS
} from './mediator/tokens/token-builders';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    NotificationHandlerTwo,
    NotificationHandler,
    RequestHandler,
    {
      provide: MEDIATOR_TOKEN,
      useClass: SignalMediatorService,
    },
    {
      provide: NOTIFICATION_HANDLERS<string>('Handlers'),
      useExisting: NotificationHandler,
      multi: true
    },
    {
      provide: NOTIFICATION_HANDLERS,
      useExisting: NotificationHandlerTwo,
      multi: true
    },
    {
      provide: REQUEST_HANDLERS,
      // useExisting: RequestHandler,
      multi: true,
      useFactory: myServiceFactory,
      deps: [Injector]
    }
  ],
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  #mediator = inject(MEDIATOR_TOKEN);

  ngOnInit(): void {
    this.#mediator.send({ topic: 'Topic 1', message: 'START' });
  }

  update() {
    this.#mediator.send({ topic: 'Topic 2', message: 'Updating' });
  }
}
