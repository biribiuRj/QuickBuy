import { Component } from "@angular/core";
import { Usuario } from "../../modelo/Usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"/*, bla bla.css, bla*/]
})
export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;

  public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"]

  constructor() {
  this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "joao.biribiu@gmail.com" && this.usuario.senha == "1234") {
      this.usuarioAutenticado = true;
    }
    alert("O Email digitado foi: " + this.usuario.email + " e a senha foi : " + this.usuario.senha + this.usuarioAutenticado)
  }
  public titulo = "Imagem padrão do Site";

}
