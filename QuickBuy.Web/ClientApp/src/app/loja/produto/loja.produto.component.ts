import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Produto } from "../../modelo/Produto";
import { Router } from "@angular/router";

@Component({
  selector: "app-loja-produto",
  templateUrl: "./loja.produto.component.html",
  styleUrls: ["./loja.produto.component.css"]
})

export class LojaProdutoComponent implements OnInit{
  public produtos: Produto[];
  public produto: Produto;

  ngOnInit(): void {
    var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
    if (produtoDetalhe) {
      this.produto = JSON.parse(produtoDetalhe);
    } else
      this.produto = new Produto;
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

  public comprar() {
    this.router.navigate(["/loja-efetivar"]);
  }

}
