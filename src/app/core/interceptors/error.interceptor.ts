import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Erro desconhecido.';

        if (error.status === 401) errorMessage = 'Sessão expirada. Faça login novamente.';
        if (error.status === 404) errorMessage = 'Recurso não encontrado.';
        if (error.status === 500) errorMessage = 'Erro no servidor. Tente novamente mais tarde.';

        this.notificationService.show(errorMessage);

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
