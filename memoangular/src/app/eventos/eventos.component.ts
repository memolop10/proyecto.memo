import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  evento: Evento
  constructor(
    private route: ActivatedRoute,
   
    private location: Location

  ) { }

  ngOnInit() {
    this.getEvento()
  }

}
