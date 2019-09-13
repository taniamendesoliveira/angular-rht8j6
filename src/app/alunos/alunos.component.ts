import { Component, OnInit } from '@angular/core';
import {Aluno} from '../aluno';
import {alunos} from '../alunos';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos=alunos;
  
  //se fosse manualmente nunca se faz desta maneira vamos buscar base de dados
  /*alunos:Array<Aluno> = [{
    name: "Ana"
  }, {
    name: "Tânia"
  }, {
    name: "Tânia"
  }, {
    name: "Tânia"
  }];*/


  constructor() { }

  ngOnInit() {
  }

}