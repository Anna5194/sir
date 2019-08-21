import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.less']
})
export class CardComponentComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

}
