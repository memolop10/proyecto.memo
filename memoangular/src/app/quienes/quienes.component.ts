import { Component, OnInit } from '@angular/core';
import { Quienes } from '../quienes'

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrls: ['./quienes.component.css']
})
export class QuienesComponent implements OnInit {
  quienes: Quienes

  constructor() { }

  ngOnInit() {
    this.getQuienes()
  }

}
