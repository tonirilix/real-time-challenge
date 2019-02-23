import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {
  @Input() set data(val) {
    if (val) {
      this._data[val.name] = val;
    }
  }
  private _data = {};
  constructor() { }

  ngOnInit() {
  }

  get ids() {
    return Object.keys(this._data);
  }

  private info(id) {
    return this._data[id];
  }

}
