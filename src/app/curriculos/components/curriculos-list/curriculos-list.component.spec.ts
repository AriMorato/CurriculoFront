import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculosListComponent } from './curriculos-list.component';

describe('CurriculosListComponent', () => {
  let component: CurriculosListComponent;
  let fixture: ComponentFixture<CurriculosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
