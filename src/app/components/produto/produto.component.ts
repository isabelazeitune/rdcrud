import { Component, OnInit, Input } from '@angular/core';
import { ListaDeProdutos } from 'src/app/models/lista-de-produtos'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: ListaDeProdutos;

  constructor() { }

  ngOnInit(): void {
  }

}
