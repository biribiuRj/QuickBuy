import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { s } from "@angular/core/src/render3";
import { UsuarioServico } from "../servicos/usuario/usuario.servico";

@Injectable({
  providedIn:'root'
})
export class GuardaRotas implements CanActivate{

  constructor(private router: Router, private usuarioServico: UsuarioServico) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //this.usuarioServico
    //var autenticado = sessionStorage.getItem("usuario-autenticado");

    if (this.usuarioServico.usuario_autenticado()) {
      return true;
    }
    //alert(state.url);
    this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
    return false;

    }

}
