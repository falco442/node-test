import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../alert.service";

@Component({
  selector: 'app-candidate-new',
  templateUrl: './candidate-new.component.html',
  styleUrls: ['./candidate-new.component.scss']
})
export class CandidateNewComponent implements OnInit {

  fg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alert: AlertService
  ) {
    this.fg = fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      birthDate: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.alert.success();
  }

}
