import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QulificationComponent } from './qulification.component';

describe('QulificationComponent', () => {
  let component: QulificationComponent;
  let fixture: ComponentFixture<QulificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QulificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QulificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
