import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Company} from "../../models/company";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit, OnChanges {

  fg: FormGroup;

  @Input()
  company?: Company;

  @Input()
  reset: boolean = true;

  @Output('submitted')
  submitEmitter = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.fg = fb.group({
      id: [],
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.company) {
      this.fg.patchValue(this.company);
    }
  }

  submit() {
    this.submitEmitter.emit(this.fg.getRawValue());
    if (this.reset) {
      this.fg.reset();
    }
    this.fg.markAsUntouched();
  }

}
