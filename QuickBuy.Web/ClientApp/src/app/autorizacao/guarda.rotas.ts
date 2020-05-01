import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { s } from "@angular/core/src/render3";

@Injectable({
  providedIn:'root'
})
export class GuardaRotas implements CanActivate{

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var autenticado = sessionStorage.getItem("usuario-autenticado");
    if (autenticado == "1") {
      return true;
    }
    //alert(state.url);
    this.router.navigate(['/entrar'], { queryParams: { returnUrl: state.url } });
    return false;

    }

}
