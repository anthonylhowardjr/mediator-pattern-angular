import {
  Injectable,
  WritableSignal,
  computed,
  effect,
  inject,
  signal,
  untracked
} from '@angular/core';
import { IMediator } from './interfaces/mediator.interface';
import {
  NOTIFICATION_HANDLERS,
  REQUEST_HANDLERS
} from './tokens/token-builders';
import { IRequest } from '@interfaces/request.interface';

@Injectable()
export class SignalMediatorService<TStore> implements IMediator<TStore> {
  #notificationHandlers = inject(NOTIFICATION_HANDLERS<TStore>('Handlers'));
  #requestHandlers = inject(REQUEST_HANDLERS<TStore, TStore>('Handlers'));
  #signals = new Map<string | keyof TStore, WritableSignal<TStore>>();

  #signal = signal(new Map<string | keyof TStore, WritableSignal<TStore>>());
  #topic = computed(() => {
    (this.#signal().get('Topic 1') as WritableSignal<string>);
  });

  constructor() {
    effect(() => {
      console.log('Tested');

      if (this.#topic()) {
        const yup = this.#signal().get('Topic 1') as WritableSignal<string>;
        console.log('Test', yup())
      }
    });
    // effect(() => console.log('Test', this.#signal().get('Topic 2')));
    // effect(() => {
    //   console.log('Test', this.#requestHandlers);

    //   this.#requestHandlers.forEach((handler) =>
    //   handler.handle({
    //     sender: MediatorService.name,
    //     message: this.#testSignal()
    //   })
    // )
    // });
  }

  send<TTopic extends string | keyof TStore >(request: IRequest<TStore, TTopic>): void {
    console.log('Called');

    if (this.#signal().has(request.topic)) {
      this.#signal.update(e => {
        e.get(request.topic)?.set(request.message);
        return e;
      })

      this.#signal().get(request.topic)?.set(request.message);
      console.log('Got the Old signal', this.#signal());
    } else {
      this.#signal().set(request.topic, signal(request.message));
      console.log('Created new signal', this.#signal());
    }
  }
}
