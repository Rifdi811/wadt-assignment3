import { Component, OnInit } from '@angular/core';
// Below is needed to use bootstrap3 modal
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  // The bootstrap3 modal logic - tutorial into implementing bootstrap3 and angular:
  // https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {}
}
