import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ListaDeProdutos } from 'src/app/models/lista-de-produtos';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {
  formProduto:FormGroup;

  constructor() { }

  createForm(produto:ListaDeProdutos) {
    this.formProduto = new FormGroup({
      cod: new FormControl(produto.cod),
      desc: new FormControl(produto.desc),
      regAnvisa: new FormControl(produto.regAnvisa),
      controlado: new FormControl(produto.controlado),
      codGrupo:  new FormControl(produto.codGrupo)
    });
  }

  ngOnInit(): void {
    this.createForm(new ListaDeProdutos());
  }

  enviarProduto() {
    console.log(this.formProduto);
  }

}
