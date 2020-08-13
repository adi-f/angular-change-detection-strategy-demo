import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'with-subscribe',
  templateUrl: './with-subscribe.component.html',
  styleUrls: ['./with-subscribe.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WithSubscribeComponent implements OnInit, OnDestroy {

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