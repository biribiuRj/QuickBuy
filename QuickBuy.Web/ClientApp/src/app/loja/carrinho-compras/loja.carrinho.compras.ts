import { Produto } from "../../modelo/Produto";

export class LojaCarrinhoCompras {
  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (!produtoLocaStorage) {
      //se não existir nada no produtoLocaStorage
      this.produtos.push(produto);
    } else {
      //se já existir pelo menos um item armazenado na sessão
      this.produtos = JSON.parse(produtoLocaStorage);
      this.produtos.push(produto);
    }
    localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (produtoLocaStorage) {
      return JSON.parse(produtoLocaStorage);
    }
  }

  public removerProduto(produto: Produto) {
    var produtoLocaStorage = localStorage.getItem("produtoLocaStorage");
    if (produtoLocaStorage) {
      this.produtos = JSON.parse(produtoLocaStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id);
      localStorage.setItem("produtoLocaStorage", JSON.stringify(this.produtos));
    }
  }
}
