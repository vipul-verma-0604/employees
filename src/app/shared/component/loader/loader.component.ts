import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HelperService } from '../../service/helper.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private helperService: HelperService) { }
  
  // this is to use asycn pipe directly in html so no need subscribe/unsubscribe Subject here
  isLoading: Subject<boolean> = this.helperService.isLoading;

  ngOnInit() {
  }

}
