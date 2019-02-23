import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.scss']
})
export class ReportItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit() {
  }

  get id() {
    return this.item._id;
  }

  get user() {
    return this.item.name;
  }

  get coordinates() {
    return `${this.item.coordinates.latitude}:${this.item.coordinates.longitude}`;
  }

  get date() {
    return this.item.last_update;
  }

  get country() {
    return this.item.country;
  }

}
