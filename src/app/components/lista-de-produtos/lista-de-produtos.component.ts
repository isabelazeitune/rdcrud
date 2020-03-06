import { Component, OnInit } from '@angular/core';
import { ListaDeProdutos } from 'src/app/models/lista-de-produtos';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  public listaDeProdutos: ListaDeProdutos[] = [];
  public produtosExibidos: ListaDeProdutos[] = [];

  constructor(private http: HttpService) {

    this.http.getListaDeProdutos().subscribe(
      //(data) => {console.log(data)},
      (data) => {
        this.listaDeProdutos = data;
        this.produtosExibidos = data;
      }
    );
  }

  listarDoGrupo(codDoGrupo: number) {
    //console.log(codDoGrupo);

    if(codDoGrupo != 0) {
      this.produtosExibidos = this.listaDeProdutos.filter(
        //produto => produto.codGrupo == codDoGrupo
        produto => (produto.codGrupo == codDoGrupo || codDoGrupo == 0)
      );
    } else {
      this.produtosExibidos = this.listaDeProdutos;
    }
    
  }

  ngOnInit(): void {
  }

}
