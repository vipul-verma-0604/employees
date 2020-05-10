import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelperService } from '../shared/service/helper.service';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(private helperService: HelperService) {}

    // this interceptor simple catch all request
    // once request is started Loader is displayed
    // once request ends Loader hides
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // By default show loader on each request start
        this.helperService.showLoader(); // Send a boolean value true using subject to loader component to show loader

        // Check if request is finished using Rxjs finalize operator 
        return next.handle(req).pipe(
            finalize(() => {
                this.helperService.hideLoader(); // Send a boolean value false using subject to loader component to hide loader
            })
        )
    }
}