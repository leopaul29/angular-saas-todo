import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );
  readonly user$: Observable<User | null> = this.user.asObservable();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User | null> {
    // 1. A faire : Faire un appel au backend.
    // 2. A faire : Mettre à jour l’état en fonction de la réponse du backend.
    // 3. A faire : Retournez la réponse du backend sous la forme d’un Observable,
    //    pour le composant qui déclenche cette action.

    return of(new User());
    // Simple code pour calmer votre IDE.
    // Retourne un Observable contenant un utilisateur,
    // grâce à l’opérateur of de RxJS.
  }

  register(
    name: string,
    email: string,
    password: string
  ): Observable<User | null> {
    const url: string = `${environment.firebase.auth.baseURL}/signupNewUser?key=${environment.firebase.apiKey}`;

    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post<User>(url, data, httpOptions);
  }

  logout(): void {}
}
