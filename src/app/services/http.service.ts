import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Grupo } from '../models/Grupo';
import { map } from "rxjs/operators";
import { ListaDeProdutos } from '../models/lista-de-produtos';

const URL: string = "http://rdcrud.herokuapp.com"

function adaptadorDeGrupo (data: any[]) {
  return data.map(
    (el) => {return new Grupo(el.COD_GRUPO, el.DESC)}
  )
}

function adaptadorDeListaDeProdutos (data: any[]) {
  return data.map(
    (el) => {return new ListaDeProdutos(el.COD_GRUPO, el.DESC, el.REG_ANVISA, el.FL_CONTROLADO, el.COD_GRUPO)}
  )
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getGrupos() {
    let obs = this.http.get(URL + "/grupos")
    return obs.pipe(
      map(adaptadorDeGrupo)
    )
  }

  getListaDeProdutos() {
    let obs = this.http.get(URL + "/produtos")
    return obs.pipe(
      map(adaptadorDeListaDeProdutos)
    )
  }
}