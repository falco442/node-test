import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../alert.service";
import {MockService} from "../../mock.service";

@Component({
  selector: 'app-candidate-new',
  templateUrl: './candidate-new.component.html',
  styleUrls: ['./candidate-new.component.scss']
})
export class CandidateNewComponent implements OnInit {

  fg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alert: AlertService,
    private mock: MockService
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
    this.mock.post()
      .subscribe(() => {
        this.alert.success();
        this.fg.reset();
      });
  }

}
