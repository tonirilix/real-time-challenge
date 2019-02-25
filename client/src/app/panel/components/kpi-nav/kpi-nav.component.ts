import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-nav',
  templateUrl: './kpi-nav.component.html',
  styleUrls: ['./kpi-nav.component.scss']
})
export class KpiNavComponent implements OnInit {
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
    return Object.keys(this._data) || [];
  }

  get counter() {
    return this.ids.length;
  }

}
