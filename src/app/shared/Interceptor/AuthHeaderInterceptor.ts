import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class AuthHeaderInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        const token: string = localStorage.getItem('token');

        if (token) {
            headersConfig['Authorization'] = `Token ${token}`;
        }

        const req = request.clone({
            setHeaders: headersConfig,
            url: environment.serverUrl + request.url,
        });
        return next.handle(req);
    }
}
