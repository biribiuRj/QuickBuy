import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Produto } from "../../modelo/Produto";
import { Router } from "@angular/router";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";

@Component({
  selector: "loja-efetivar",
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {
  public produtos: Produto[];
  public carrinhoCompras: LojaCarrinhoCompras;

  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras();
    this.produtos = this.carrinhoCompras.obterProdutos();
  }

}
