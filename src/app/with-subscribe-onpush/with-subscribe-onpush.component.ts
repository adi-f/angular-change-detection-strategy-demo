import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'with-subscribe-onpush',
  templateUrl: './with-subscribe-onpush.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithSubscribeOnpushComponent implements OnInit, OnDestroy {

  @Input() counter$: Observable<number>;
  counter: number = 0;
  private subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.counter$.subscribe(counter => this.counter = counter);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}