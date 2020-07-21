import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// const log = new Logger('ErrorHandlerInterceptor');


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: any): Observable<HttpEvent<any>> {
    if (response.status === 401) {
      // this.authenticationService.logout();
      location.reload(true);
    }

    if (!environment.production) {
      console.log("error");

      // Do something with the error (log the error || Show popup error)
      //   log.error('Request error', response);
    }
    throw response;
  }
}