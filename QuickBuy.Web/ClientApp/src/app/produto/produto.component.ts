import { Component, OnInit } from "@angular/core"
import { Produto } from "../modelo/Produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Router } from "@angular/router";


@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent implements OnInit {
  public produto: Produto
  public arquivoSelecionado: File;
  public ativar_spinner: boolean;
  public mensagemErro: string;


  constructor(private produtoServico: ProdutoServico, private router: Router) {

  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.ativar_spinner = true;
    this.produtoServico.enviarArquivo(this.arquivoSelecionado).subscribe(nomeArquivo => {
      this.produto.nomeArquivo = nomeArquivo;
      console.log(nomeArquivo);
      this.ativar_spinner = false;
    },
    e => {
      console.log(e.error);
    });
  }

  ngOnInit(): void {
    var produtoSession = sessionStorage.getItem('produtoSession')
    if (produtoSession) {
      this.produto = JSON.parse(produtoSession);
    }
    else {
      this.produto = new Produto;
    }
  }

  public cadastrar() {
    this.ativarEspera();
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
          this.desativarEspera();
          this.router.navigate(['/pesquisar-produto'])
          sessionStorage.setItem('produtoSession', "");
        },
        e => {
          console.log(e.error)
          this.mensagemErro = e.error
          this.desativarEspera();
        }
      );
  }
  public ativarEspera() {
    this.ativar_spinner = true;
  }
  public desativarEspera() {
    this.ativar_spinner = false;
  }
}

