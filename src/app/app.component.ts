import { Component, VERSION } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  counter: number = 1; 
  readonly counter$: Subject<number> = new ReplaySubject(1);

  increment(): void {
    this.counter$.next(this.counter++);
  }

  autoIncrement(): void {
    setInterval(() => this.counter$.next(this.counter++), 1000);
  }
}
