import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../modelo/usuario";

@Injectable({
  providedIn: "root"
})
export class UsuarioServico {

  private baseUrl: string;
  private _usuario: Usuario;

  set usuario(usuario: Usuario) {

    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;

    //sessionStorage.setItem("email-usuario", usuarioRetorno.email);

  }

  get usuario(): Usuario {
    let usuario_json = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_json);
    return this._usuario;
  }

  public usuario_autenticado(): boolean {

    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
  }

  public limpar_sessao() {

    sessionStorage.setItem("usuario-autenticado", "")
    this._usuario = null;

  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set('content-type', 'application/json; charset=UTF-8')
    var body = {
      email: usuario.email,
      senha: usuario.senha
    }
    //this.baseUrl = raiz do site ex: localhost , www.quickbuy.com/
    return this.http.post<Usuario>(this.baseUrl + "api/usuario/verificarUsuario", body, { headers });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set('content-type', 'application/json; charset=UTF-8')
    var body = {
      email: usuario.email,
      senha: usuario.senha,
      nome: usuario.nome,
      sobreNome: usuario.sobreNome
    }

    return this.http.post<Usuario>(this.baseUrl + "api/usuario", body, { headers });

  }
}
