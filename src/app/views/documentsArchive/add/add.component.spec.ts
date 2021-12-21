import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArchiveComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddArchiveComponent;
  let fixture: ComponentFixture<AddArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
