import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmpComponent } from './all-emp.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComponent } from '../detail/detail.component';
import { CreateComponent } from '../create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AllEmpComponent', () => {
  let component: AllEmpComponent;
  let fixture: ComponentFixture<AllEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEmpComponent, DetailComponent, CreateComponent ],
      imports: [ NgxPaginationModule, SharedModule, ReactiveFormsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
