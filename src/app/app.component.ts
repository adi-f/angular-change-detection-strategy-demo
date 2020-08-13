import { Component, VERSION, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  
  counter: number = 1; 
  readonly counter$: Subject<number> = new ReplaySubject(1);

  private setIntervalHandle: any = null


  increment(): void {
    this.counter$.next(++this.counter);
  }

  autoIncrement(): void {
    this.setIntervalHandle = setInterval(() => this.counter$.next(++this.counter), 1000);
  }

  private stopInterval(): void {
    if(this.setIntervalHandle) {
      clearInterval(this.setIntervalHandle);
    }
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }
}
