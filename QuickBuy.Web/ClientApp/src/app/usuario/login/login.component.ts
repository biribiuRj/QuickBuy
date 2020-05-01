import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/Usuario";
import { Router, Route, ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"/*, bla bla.css, bla*/]
})
export class LoginComponent implements OnInit {
  public usuario;
  public usuarioAutenticado: boolean;
  public returnUrl: string;

  public usuarios = ["usuario1", "usuario2", "usuario3", "usuario4", "usuario5"]

  constructor(private router: Router, private activetedRouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.returnUrl = this.activetedRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email == "joao.biribiu@gmail.com" && this.usuario.senha == "1234") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl]);
    }
    //alert("O Email digitado foi: " + this.usuario.email + " e a senha foi : " + this.usuario.senha + this.usuarioAutenticado)
  }
  public titulo = "Imagem padrão do Site";

}
