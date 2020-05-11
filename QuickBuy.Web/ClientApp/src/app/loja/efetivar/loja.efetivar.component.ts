import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Produto } from "../../modelo/Produto";
import { Router } from "@angular/router";

@Component({
  selector: "loja-efetivar",
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {
  public produtos: Produto[];
  ngOnInit(): void {

  }
  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.produtoServico.obterTodosProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
      },
      e => {
        console.log(e.error);
      })
  }
}
