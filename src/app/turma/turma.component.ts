import { Component, OnInit } from '@angular/core';
import {Turma} from '../turma';
import {alunos} from '../alunos';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  turma:Turma = {
    name: "Tpsip 10.18",
    description: "qualquercoisa.",
    begingDate: new Date(2018,10,22)

  };
  constructor() { }

  ngOnInit() {
  }

}