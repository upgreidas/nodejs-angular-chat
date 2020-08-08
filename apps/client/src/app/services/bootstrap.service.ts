import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BootstrapResponse } from '../interfaces/responses/bootstrap-response';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
  ) { }

  public load() {
    return this.http.get<BootstrapResponse>('/api/auth/bootstrap')
      .pipe(
        tap(res => {
          if(res.user) {
            this.authenticationService.setUser(res.user)
          }
        }),
      );
  }
}
