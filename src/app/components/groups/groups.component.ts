import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Group } from './../../model/group.model';
import { AttendanceService } from './../../attendance.service';

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.scss"]
})
export class GroupsComponent implements OnInit {
  groups$: Observable<Group[]>;

  constructor(private groupService: AttendanceService) {}

  ngOnInit() {
    this.groups$ = this.groupService.getCollection$(ref =>
      ref.orderBy("name", "asc")
    );

    console.log("testing");
  }
}
