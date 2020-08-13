import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'with-async',
  templateUrl: './with-async.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithAsyncComponent {

  @Input() counter$: Observable<number>;
}