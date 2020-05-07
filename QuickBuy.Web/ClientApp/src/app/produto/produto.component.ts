import { Component, OnInit } from "@angular/core"
import { Produto } from "../modelo/Produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";


@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent implements OnInit {
  public produto: Produto
  public arquivoSelecionado: File;

  constructor(private produtoServico: ProdutoServico) {

  }

  pulic inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado).subscribe(retorno => {
      console.log(retorno);
    },
    e => {
      console.log(e.error);
    });
  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public cadastrar() {/*
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
        },
        e => {
          console.log(e.error)
        }
      );*/
  }

}

