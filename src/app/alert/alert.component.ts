import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AlertService} from "../alert.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewInit {

  @ViewChild('template')
  template?: TemplateRef<any>;

  modalRef?: BsModalRef | null;
  title?: string;
  message?: string;

  constructor(
    private service: AlertService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.service.showSubj.subscribe((obj: any) => {
      if (obj) {
        this.title = obj.title;
        this.message = obj.message;
        if (this.template) {
          this.modalRef = this.modalService.show(this.template);
        }
      }
    });
  }

}
