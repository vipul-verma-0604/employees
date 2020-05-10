import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  // Subject to send information between components in application
  isLoading = new Subject<boolean>();
  constructor() { }

  // This will show the loader
  showLoader() {
    this.isLoading.next(true);
  }

  // This will hide the loader
  hideLoader() {
    this.isLoading.next(false);
  }
}
