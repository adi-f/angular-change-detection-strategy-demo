import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-with-async',
  templateUrl: './with-async.component.html'
})
export class WithAsyncComponent {
  @Input() counter$: Observable<number>;
}