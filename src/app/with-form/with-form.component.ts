import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'with-form',
  templateUrl: './with-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithFormComponent implements OnInit, OnDestroy {

  @Input() counter$: Observable<number>;
  form: FormGroup;
  private subscription: Subscription;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
        counter: []
    });
    this.subscription = this.counter$.subscribe(counter => this.form.get('counter').setValue(counter));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}