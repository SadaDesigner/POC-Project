import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpipeComponent } from './cpipe.component';

describe('CpipeComponent', () => {
  let component: CpipeComponent;
  let fixture: ComponentFixture<CpipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
