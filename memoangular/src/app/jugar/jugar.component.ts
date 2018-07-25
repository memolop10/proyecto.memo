import { Component, OnInit } from '@angular/core';
import { Jugar } from '../jugar'

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {
  jugar: Jugar

  constructor() { }

  ngOnInit() {
    this.getJugar()
  }

}
