import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BootstrapResponse } from '../interfaces/responses/bootstrap-response';
import { AuthenticationService } from './authentication.service';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private websocketService: WebsocketService,
  ) { }

  public load() {
    return this.http.get<BootstrapResponse>('/api/auth/bootstrap')
      .pipe(
        tap(res => {
          if(res.user) {
            this.authenticationService.setUser(res.user);
            this.websocketService.connect();
          }
        }),
      );
  }
}
