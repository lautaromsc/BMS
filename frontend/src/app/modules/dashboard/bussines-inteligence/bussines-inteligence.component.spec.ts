import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesInteligenceComponent } from './bussines-inteligence.component';

describe('BussinesInteligenceComponent', () => {
  let component: BussinesInteligenceComponent;
  let fixture: ComponentFixture<BussinesInteligenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinesInteligenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesInteligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
