import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './component/loader/loader.component';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule
  ],
  exports:[LoaderComponent]
})
export class SharedModule { }
