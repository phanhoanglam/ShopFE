import { ErrorHandlerInterceptor } from './ErrorHandlerInterceptor';
import { AuthHeaderInterceptor } from './AuthHeaderInterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
]