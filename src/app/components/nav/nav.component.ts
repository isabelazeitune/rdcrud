import { Component, OnInit } from '@angular/core';

interface iItem {
  label:string;
  route:string;
  ativo:boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  itens:iItem[] = [
    {
      ativo:true,
      label:"Home",
      route:"/home"
    },

    {
      ativo: false,
      label: "Sobre",
      route: "/sobre"
    },

    {
      ativo: false,
      label: "Contato",
      route: "/contato"
    },
    {
      ativo: false,
      label: "CadastrarProduto",
      route: "/novoproduto"
    }
  ]

  constructor() { }

  destacar(item: iItem) {

    // faz com que todos os itens fiquem inativos
    this.itens.forEach(
    (item) => {item.ativo = false}
    )
    
    //destaca o item ativo
    item.ativo = true;
  }

  ngOnInit(): void {
  }

}
