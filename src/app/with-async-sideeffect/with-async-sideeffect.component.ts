import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'with-async-sideeffect',
  templateUrl: './with-async-sideeffect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithAsyncSideeffectComponent implements OnInit {

  @Input() counter$: Observable<number>;
  counter2$: Observable<number>;
  counter: number = 0;

  ngOnInit() {
    this.counter2$ = this.counter$.pipe(tap(counter => this.counter = counter))
  }
}