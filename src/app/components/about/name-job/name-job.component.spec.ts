import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameJobComponent } from './name-job.component';

describe('NameJobComponent', () => {
  let component: NameJobComponent;
  let fixture: ComponentFixture<NameJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
