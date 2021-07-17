import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProqComponent } from './proq.component';

describe('ProqComponent', () => {
  let component: ProqComponent;
  let fixture: ComponentFixture<ProqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
