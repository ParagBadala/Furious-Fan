import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

export class HttpErrorInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        return next.handle(request)
            .pipe(catchError( (error: HttpErrorResponse) => {   
                let errMsg = '';
                // Client Side Error
                if (error.error instanceof ErrorEvent) {		
                  errMsg = `Error: ${error.error.message}`;
                } 
                else {  // Server Side Error
                  errMsg = `Server Canot be Reached`;
                }
                // return an observable
                return throwError(errMsg);
              })
            )
    }
}