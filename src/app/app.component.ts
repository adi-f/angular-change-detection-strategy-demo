import { Component, VERSION } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  counter: number = 1; 
  readonly counter$: Subject<number> = new BehaviorSubject(this.counter);

  increment(): void {
    this.counter$.next(this.counter++);
  }
}
