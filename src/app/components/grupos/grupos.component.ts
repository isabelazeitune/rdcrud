import { Component, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent {

  public grupos: Grupo[] = [];
  @Output() grupoClicado = new EventEmitter();

private grupoTotal:Grupo = new Grupo(0, "todos");

  constructor(private http: HttpService) {

    this.http.getGrupos().subscribe(
      //(data) => {console.log(data)},
      (data) => {
      //this.grupos = data;
      this.grupos = [this.grupoTotal, ...data];
      }
    );

    // this.grupos.push(
    //   new Grupo(1, "Medicamentos"),
    //   new Grupo(1, "Perfumaria"),
    //   new Grupo(3, "Teste")
    // )
  }

  // ngOnInit(): void {
  // }
}

